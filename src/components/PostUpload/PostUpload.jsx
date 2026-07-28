import React, { useContext, useState } from "react";
import FormField from "../ui/formField/FormField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faImage,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/Auth.context";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

export default function PostUpload({ getAllPosts }) {
  const { token, user } = useContext(AuthContext);
  const userObj = user;

  const [previewImage, setPreviewImage] = useState(null);

  async function handleSubmit(values) {
    try {
      const formData = new FormData();
      formData.append("body", values.body);
      if (values.image) formData.append("image", values.image);
      const options = {
        url: "https://route-posts.routemisr.com/posts",
        method: "POST",
        headers: {
          token,
        },
        data: formData,
      };

      const { data } = await axios.request(options);
      if (data.success) {
        toast.success("Post Created Successfully");
        formik.resetForm();
        getAllPosts();
        setPreviewImage(null);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const validationSchema = yup.object({
    body: yup
      .string()
      .required("Caption is needed")
      .min(3, "Caption must be more than 3 characters")
      .max(500, "Caption must be less than 500 characters"),
    image: yup
      .mixed()
      .nullable()
      .test("fileSize", "Fils is too large (max size 5mb)", (file) => {
        if (!file) return true;

        return file.size <= 5 * 1024 * 1024;
      })
      .test("fileType", "FileType Must be Image", (file) => {
        if (!file) return true;

        const validTypes = [
          "image/png",
          "image/jpg",
          "image/jpeg",
          "image/gif",
        ];
        return validTypes.includes(file.type);
      }),
  });

  const formik = useFormik({
    initialValues: {
      body: "",
      image: null,
    },

    validationSchema: validationSchema,

    onSubmit: handleSubmit,
  });

  async function handelImageChange(e) {
    const file = e.target.files[0];
    await formik.setFieldValue("image", file, true);
    formik.setFieldTouched("image", true);

    const url = URL.createObjectURL(file);
    setPreviewImage(url);
    // formik.validateField("image");
  }

  return (
    <section className="pt-2 max-w-2xl mx-auto lg:max-w-none">
      <div className="container">
        <form
          className="post-upload bg-white p-5 border border-gray-400/30 rounded-lg"
          onSubmit={formik.handleSubmit}
        >
          <header className="flex items-center gap-2">
            <div className="rounded-full size-10 overflow-hidden border-2 border-blue-500/40 shrink-0 flex ">
              <img
                src={userObj.photo}
                alt="author-img"
                className="w-full h-full object-cover"
              />
            </div>
            <FormField
              elementType={"textarea"}
              placeholder={"What's in your mind"}
              className={`resize-none`}
              value={formik.values.body}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.body}
              error={formik.errors.body}
              name={"body"}
              id={"body"}
            />
          </header>
          {previewImage && !formik.errors.image && (
            <div className="my-2 relative">
              <img
                src={previewImage}
                className="w-full aspect-video object-center rounded-xl"
                alt=""
              />

              <button
                type="button"
                onClick={() => {
                  setPreviewImage(null);
                  formik.setFieldValue('image', null);
                }}
                className="text-white p-1 rounded-full text-sm absolute bg-red-600 top-4 right-3 cursor-pointer hover:bg-red-400/40 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
          )}
          <div className="mt-4 border-t pt-2 border-gray-500/40 flex items-center justify-between">
            <div>
              <label
                htmlFor="postUpload"
                className="space-x-1 text-gray-700 bg-gray-500/20 px-3 py-1 rounded-lg  font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer "
              >
                <FontAwesomeIcon icon={faImage} />
                <span>Photo</span>
              </label>

              <div className="hidden">
                <FormField
                  inputType={"file"}
                  elementType={"input"}
                  id={"postUpload"}
                  name={"image"}
                  onBlur={formik.handleBlur}
                  onChange={handelImageChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-5 py-1 bg-linear-to-r from-blue-600 to-blue-400 rounded-lg text-white font-bold space-x-1 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <span>Post</span>

              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
          {formik.errors.image && formik.touched.image && (
            <p className="text-red-700 text-sm mt-2"> *{formik.errors.image}</p>
          )}
        </form>
      </div>
    </section>
  );
}

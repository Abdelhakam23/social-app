import React, { useContext } from "react";
import FormField from "../ui/formField/FormField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/Auth.context";
import { useFormik } from "formik";

export default function PostUpload() {
  const { token } = useContext(AuthContext);

  function handleSubmit(values) {
    console.log(values);
  }

  const formik = useFormik({
    initialValues: {
      body: "",
      image: null,
    },

    // validationSchema

    onSubmit: handleSubmit,
  });

  return (
    <section className="max-w-2xl mx-auto pt-8 ">
      <div className="container">
        <form
          className="post-upload bg-white p-5 border border-gray-400/30 rounded-lg"
          onSubmit={formik.handleSubmit}
        >
          <header className="flex items-center gap-2">
            <div className="rounded-full size-10 overflow-hidden border-2 border-blue-500/40 shrink-0 flex ">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
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
                  onChange={(e) => {
                    const file = e.target.files[0];
                    formik.setFieldValue("image", file);
                  }}
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
        </form>
      </div>
    </section>
  );
}

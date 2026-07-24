import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faEnvelope,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faLock,
  faSpinner,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as Yup from "yup";
import FormField from "../ui/formField/FormField";
import { text } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";

export default function SignUpForm() {
  const passwordRegex = RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$",
  );

  const navigate = useNavigate();

  const signUpSchema = Yup.object({
    name: Yup.string()
      .required("name is required")
      .min(3, "Too Short !")
      .max(50, "Too Long !"),
    email: Yup.string().required("email is required").email("Invalid Email"),
    password: Yup.string()
      .required("password is required")
      .matches(
        passwordRegex,
        "Invalid Password  Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character ",
      ),
    rePassword: Yup.string()
      .required("please confirm password")
      .oneOf([Yup.ref("password")], "passwords must matchs "),
    dateOfBirth: Yup.string().required("please enter the date of birth"),
    gender: Yup.string()
      .required("please select a gender ")
      .oneOf(["male", "female"], "please select a valid gender"),
  });




  async function handleSubmit(values) {

    try {
       const options = {
      url: "https://route-posts.routemisr.com/users/signup",
      method: 'POST',
      data:values
    }

    const { data } = await axios.request(options);

    if (data.success) {
      toast.success("Account Created Successfully");

      setTimeout(() => {
        navigate("/signin");
        
      }, 5000);
    }
    } catch (error) {
      console.log("Error BLock");
      console.log(error);
      
      
    }
    
   
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },
    validationSchema: signUpSchema,
    onSubmit: handleSubmit,
  });

  // console.log(formik);

  return (
    <div className=" flex items-center justify-center lg:justify-start">
      <form
        className=" bg-white p-8 w-full md:max-w-112.5 border border-gray-300 rounded-xl shadow space-y-4"
        onSubmit={formik.handleSubmit}
      >
        <header className="space-y-2 text-center">
          <h2 className="font-bold text-black text-2xl">Create Your Account</h2>
          <p className="text-gray-500">
            Already have an account ?
            <Link to={"/signin"} className="text-blue-500">
              sign in
            </Link>
          </p>
        </header>
        <div className="form-controls space-y-3">
          <FormField
            elementType={"input"}
            id={"name"}
            name={"name"}
            inputType={"text"}
            labelText={"Full Name"}
            icon={faUser}
            placeholder={"Enter Your Full Name"}
            error={formik.errors.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            touched={formik.touched.name}
            value={formik.values.name}
          />
          <FormField
            elementType={"input"}
            id={"email"}
            name={"email"}
            inputType={"email"}
            labelText={"Email"}
            icon={faEnvelope}
            placeholder={"name@example.com"}
            error={formik.errors.email}
            touched={formik.touched.email}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormField
            elementType={"input"}
            id={"password"}
            name={"password"}
            inputType={"password"}
            labelText={"Password"}
            icon={faLock}
            placeholder={"Create a strong password"}
            error={formik.errors.password}
            touched={formik.touched.password}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <FormField
            elementType={"input"}
            id={"rePassword"}
            name={"rePassword"}
            inputType={"password"}
            labelText={"Confirm Password"}
            icon={faLock}
            placeholder={"Repeat Your Password"}
            error={formik.errors.rePassword}
            touched={formik.touched.rePassword}
            value={formik.values.rePassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <div className="flex items-center gap-3 *:grow">
            <FormField
              elementType={"input"}
              id={"dateOfBirth"}
              name={"dateOfBirth"}
              inputType={"date"}
              labelText={"Date of birth"}
              icon={faCalendar}
              error={formik.errors.dateOfBirth}
              touched={formik.touched.dateOfBirth}
              value={formik.values.dateOfBirth}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormField
              elementType={"select"}
              id={"gender"}
              name={"gender"}
              labelText={"Gender"}
              icon={faVenusMars}
              error={formik.errors.gender}
              touched={formik.touched.gender}
              value={formik.values.gender}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              options={[
                {
                  text: "Select a gander",
                },
                {
                  text: "Male",
                  value: "male",
                },
                {
                  text: "Female",
                  value: "female",
                },
              ]}
            />
          </div>

          <button
            type="submit"
            disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}
            className="bg-[#4F46E5] px-4 py-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500 w-full rounded-lg text-white font-bold"
          >
            {formik.isSubmitting ? (
              <span>
                Creating Your Account <FontAwesomeIcon icon={faSpinner} spin />
              </span>
            ) : (
              "Create Account"
            )}
          </button>

          <span className="relative  w-full text-center text-sm text-gray-400 before:h-px before:w-35 before:bg-gray-500 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 after:h-px after:w-35 after:bg-gray-500 after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2">
            or sign up with
          </span>

          <div className="social-btns flex items-center gap-3 *:grow">
            <button
              type="button"
              className="hover:bg-gray-200 cursor-pointer transition-colors duration-200 space-x-1 px-4 py-2 border border-gray-300 rounded-xl w-full"
            >
              <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
              <span>Google</span>
            </button>
            <button
              type="button"
              className="hover:bg-gray-200 cursor-pointer transition-colors duration-200 space-x-1 px-4 py-2 border border-gray-300 rounded-xl w-full"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

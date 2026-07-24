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
    const response = await fetch(
      "https://route-posts.routemisr.com/users/signup",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();
    if (data.success) {
      toast.success("Account Created Successfully");

      setTimeout(() => {
        navigate("/signin");
      }, 5000);
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
            <Link to={'/signin'} className="text-blue-500">
             sign in</Link>
          </p>
        </header>
        <div className="form-controls space-y-3">
          <div>
            <label className="font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <div className="relative">
              <input
                id="name"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full"
                placeholder="Enter Full Name "
              />
              <FontAwesomeIcon
                icon={faUser}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-sm text-gray-400"
              />
            </div>
            {formik.errors.name && formik.touched.name ? (
              <p className="text-red-700">*{formik.errors.name}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label className="font-medium mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full"
                placeholder="name@example.com "
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute top-1/2 left-2 -translate-y-1/2  text-gray-400"
              />
            </div>
            {formik.errors.email && formik.touched.email ? (
              <p className="text-red-700">*{formik.errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label className="font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full"
                placeholder="Create a strong password "
              />
              <FontAwesomeIcon
                icon={faLock}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-sm text-gray-400"
              />
            </div>
            {formik.errors.password && formik.touched.password ? (
              <p className="text-red-700">*{formik.errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label className="font-medium mb-2" htmlFor="rePassword">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="rePassword"
                type="password"
                name="rePassword"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full"
                placeholder="Repeat your password "
              />
              <FontAwesomeIcon
                icon={faLock}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-sm text-gray-400"
              />
            </div>
            {formik.errors.rePassword && formik.touched.rePassword ? (
              <p className="text-red-700">*{formik.errors.rePassword}</p>
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center gap-3 *:grow">
            <div>
              <label className="font-medium mb-2" htmlFor="dateOfBirth">
                Date Of Birth{" "}
              </label>
              <div className="relative">
                <input
                  name="dateOfBirth"
                  value={formik.values.dateOfBirth}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="dateOfBirth"
                  type="Date"
                  className="focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full"
                />
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="absolute top-1/2 left-2 -translate-y-1/2 text-sm text-gray-400"
                />
              </div>
              {formik.errors.dateOfBirth && formik.touched.dateOfBirth ? (
                <p className="text-red-700">*{formik.errors.dateOfBirth}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label className="font-medium mb-2" htmlFor="gender">
                Gender
              </label>
              <div className="relative">
                <select
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="gender"
                  className="focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full"
                >
                  <option value="">Select you gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <FontAwesomeIcon
                  icon={faVenusMars}
                  className="absolute top-1/2 left-2 -translate-y-1/2 text-sm text-gray-400"
                />
              </div>
              {formik.errors.gender && formik.touched.gender ? (
                <p className="text-red-700">*{formik.errors.gender}</p>
              ) : (
                ""
              )}
            </div>
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

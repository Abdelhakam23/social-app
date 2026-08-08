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
import React from "react";
import { Link } from "react-router";
import FormField from "../ui/formField/FormField";
import { useSignIn } from "../../hooks/SignInHook";

export default function SignInForm() {
  const {token,formik} = useSignIn()

  return (
    <div className=" flex items-center justify-center lg:justify-start">
      <form
        className=" bg-white p-8 w-full md:max-w-112.5 border border-gray-300 rounded-xl shadow space-y-4"
        onSubmit={formik.handleSubmit}
      >
        <header className="space-y-2 text-center">
          <h2 className="font-bold text-black text-3xl">Login</h2>
          <p className="text-gray-500">
            Don't have an account ?
            <Link to={"/signup"} className="text-blue-500">
              sign up
            </Link>
          </p>
        </header>
        <div className="form-controls space-y-4">
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

          <button
            type="submit"
            disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}
            className="bg-[#4F46E5] px-4 py-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500 w-full rounded-lg text-white font-bold mt-2"
          >
            {formik.isSubmitting ? (
              <span>
                Signing You In <FontAwesomeIcon icon={faSpinner} spin />
              </span>
            ) : (
              "Login"
            )}
          </button>

          <span className="relative  w-full text-center text-sm text-gray-400 before:h-px md:before:w-35 before:w-15  before:bg-gray-500 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 after:h-px md:after:w-35 after:w-15 after:bg-gray-500 after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2">
            or sign in with
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

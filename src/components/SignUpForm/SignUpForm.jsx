import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faEnvelope,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faLock, faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";

export default function SignUpForm() {
  return (
    <div className=" flex items-center justify-center lg:justify-start">
      <form className=" bg-white p-8 w-full md:max-w-112.5 border border-gray-300 rounded-xl shadow space-y-4">
        <header className="space-y-2">
          <h2 className="font-bold text-black text-2xl">Create your account</h2>
          <p className="text-gray-500">
            Fill in the details below to get started.
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
                className="focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full"
                placeholder="Enter Full Name "
              />
              <FontAwesomeIcon
                icon={faUser}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-sm text-gray-400"
              />
            </div>
          </div>
          <div>
            <label className="font-medium mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                className="focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full"
                placeholder="name@example.com "
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute top-1/2 left-2 -translate-y-1/2  text-gray-400"
              />
            </div>
          </div>
          <div>
            <label className="font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                className="focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full"
                placeholder="Create a strong password "
              />
              <FontAwesomeIcon
                icon={faLock}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-sm text-gray-400"
              />
            </div>
          </div>
          <div>
            <label className="font-medium mb-2" htmlFor="rePassword">
              Confirm Password{" "}
            </label>
            <div className="relative">
              <input
                id="rePassword"
                type="password"
                className="focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full"
                placeholder="Repeat your password "
              />
              <FontAwesomeIcon
                icon={faLock}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-sm text-gray-400"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 *:grow">
            <div>
              <label className="font-medium mb-2" htmlFor="dateOfBirth">
                Date Of Birth{" "}
              </label>
              <div className="relative">
                <input
                  id="dateOfBirth"
                  type="Date"
                  className="focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full"
                />
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="absolute top-1/2 left-2 -translate-y-1/2 text-sm text-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="font-medium mb-2" htmlFor="gender">
                Gender{" "}
              </label>
              <div className="relative">
                <select
                  name=""
                  id="gender"
                  className="focus:outline-none bg-gray-100 border border-gray-300 rounded-lg px-4 py-1 pl-8 w-full"
                >
                  <option value="">Select you gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
                <FontAwesomeIcon
                  icon={faVenusMars}
                  className="absolute top-1/2 left-2 -translate-y-1/2 text-sm text-gray-400"
                />
              </div>
            </div>
          </div>
          <div className="space-x-3">
            <input type="checkbox" name="" id="check" />

            <label htmlFor="check">
              I agree to the
              <Link className="text-blue-500 " to={"/terms"}>
                Terms of Service
              </Link>{" "}
              and
              <Link to={"/privacy"} className="text-blue-500">
                Privacy Policy
              </Link>{" "}
            </label>
          </div>

          <button className="bg-[#4F46E5] px-4 py-2 w-full rounded-lg text-white font-bold">
            Create Account
          </button>

          <span className="relative  w-full text-center text-sm text-gray-400 before:h-px before:w-35 before:bg-gray-500 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 after:h-px after:w-35 after:bg-gray-500 after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2">
            or sign up with
          </span>

          <div className="social-btns flex items-center gap-3 *:grow">
            <button className="space-x-1 px-4 py-2 border border-gray-300 rounded-xl w-full">
              <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
              <span>

              Google
              </span>
            </button>
            <button className="space-x-1 px-4 py-2 border border-gray-300 rounded-xl w-full">
              <FontAwesomeIcon icon={faGithub}  />
              <span>

              Githup
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

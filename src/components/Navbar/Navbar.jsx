import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white shadow ">
        <div className="container mx-auto py-3 px-4 flex  justify-between items-center max-w-7xl">
          <div className="right-side flex items-center gap-5">
            <h1 className="font-bold text-xl text-purple-800">
              <Link to="/">SocialHub</Link>
            </h1>
          </div>
          <div className="center-side hidden lg:block search-field relative ">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-purple-600 absolute top-1/2 left-3 -translate-y-1/2"
            />
            <input
              type="search"
              name=""
              placeholder="Search people, posts, topics..."
              id=""
              className=" px-10 py-1 min-w-xl border border-gray-400 focus:outline-none focus:border-purple-600 bg-gray-100 rounded-full"
            />
          </div>
          <div className=" left-side gap-5 hidden md:flex items-center ">
             <div className="icons space-x-2 ">
              <button className="cursor-pointer text-xl hover:text-purple-500 transition-colors duration-200  before:absolute  before:h-2.5 before:w-2.5 before:bg-purple-500 relative before:rounded-full before:top-0 before:right-0 before:translate-x-1 before:-translate-y-1 ">
                <FontAwesomeIcon icon={faBell} />
              </button>
              <button  className="cursor-pointer text-xl hover:text-purple-500 before:absolute  before:h-2.5 before:w-2.5 before:bg-purple-500 relative before:rounded-full before:top-0 before:right-0 before:translate-x-1 before:-translate-y-1 ">

              <FontAwesomeIcon
                icon={faEnvelope}
               
              />
              </button>
            </div>
            <button className="bg-purple-800 cursor-pointer hover:bg-purple-500 transition-colors duration-200 px-5 py-2 rounded-2xl text-white font-semibold">
              Get Started
            </button>
           
          </div>
          <div className="md:hidden">
            <FontAwesomeIcon icon={faBars} className="text-2xl  " />
          </div>
        </div>
      </nav>
    </>
  );
}

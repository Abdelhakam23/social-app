import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/Auth.context";

export default function Navbar() {
  const { user, unreadCount } = useContext(AuthContext);
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
      <div className="container mx-auto max-w-7xl px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <h1 className="text-xl font-bold bg-linear-to-r from-purple-800 to-purple-500 bg-clip-text text-transparent tracking-tight">
            SocialHub
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:block flex-1 max-w-md relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute top-1/2 left-3.5 -translate-y-1/2 text-gray-400 text-sm pointer-events-none"
          />
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 placeholder:text-gray-400"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile Search Icon */}
          <button className="md:hidden size-9 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-purple-600 transition-colors duration-200 cursor-pointer">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-sm" />
          </button>

          {/* Notification */}
          <Link to="/notifications" className="relative size-9 flex items-center justify-center rounded-full text-gray-500 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 cursor-pointer">
            <FontAwesomeIcon icon={faBell} />
            <span className={`${unreadCount===0? 'hidden':'block'} absolute top-1 right-1 size-2 bg-purple-500 rounded-full ring-2 ring-white`}></span>
          </Link>

          {/* Messages */}
          <Link to="/messages" className="relative size-9 flex items-center justify-center rounded-full text-gray-500 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 cursor-pointer">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="hidden absolute top-1 right-1 size-2 bg-purple-500 rounded-full ring-2 ring-white"></span>
          </Link>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-gray-200 mx-1"></div>

          {/* User Avatar */}
          <Link to={`/profile/${user?._id}`} className="shrink-0 cursor-pointer group">
            <div className="size-8 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-purple-400 transition-colors duration-200">
              <img
                src={user?.photo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

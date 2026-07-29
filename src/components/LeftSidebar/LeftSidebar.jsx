import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBookmark,
  faUsers,
  faCalendarDays,
  faGear,
  faArrowRightFromBracket,
  faFire,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/Auth.context";

export default function LeftSidebar() {
  const { user, userPosts,logOut } = useContext(AuthContext);
  const navigate = useNavigate();

 async function handleLogOut() {
    await logOut();
    navigate("/signin");
    
  }

  const navItems = [
    { icon: faHouse, label: "Home", to: "/" },
    { icon: faUser, label: "My Profile", to: `/profile/${user?._id}` },
    { icon: faBell, label: "Notifications", to: "/notifications" },
    { icon: faBookmark, label: "Saved Posts", to: "/saved" },
    { icon: faCalendarDays, label: "Events", to: "/events" },
    { icon: faFire, label: "Trending", to: "/trending" },
  ];

  return (
    <aside className="left-sidebar sticky top-24 h-fit space-y-5">
      {/* Profile Card */}
      <div className="profile-card bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden">
        {/* Cover */}
        <div className="h-20 bg-linear-to-r from-purple-700 via-purple-500 to-indigo-500 relative">
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <div className="size-14 rounded-full border-3 border-white overflow-hidden shadow-lg">
              <img
                src={user?.photo}
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="pt-8 pb-4 px-4 text-center">
          <h3 className="font-bold text-gray-800">{user?.name}</h3>
          <p className="text-sm text-gray-500 mt-0.5">@{user?.username}</p>
          <div className="flex justify-center gap-6 mt-3 pt-3 border-t border-gray-200">
            <div className="text-center">
              <p className="font-bold text-purple-700 text-sm">
                {userPosts.length}
              </p>
              <p className="text-xs text-gray-500">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-purple-700 text-sm">
                {user?.followersCount}
              </p>
              <p className="text-xs text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-purple-700 text-sm">
                {user?.followingCount}
              </p>
              <p className="text-xs text-gray-500">Following</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="nav-menu bg-white rounded-xl border border-gray-300 shadow-sm p-3">
        <nav className="space-y-1">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              onClick={() => {}}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all duration-200 group ${
                  isActive
                    ? "bg-purple-50 text-purple-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-purple-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`text-base w-5 transition-transform duration-200 group-hover:scale-110 ${
                      isActive
                        ? "text-purple-700"
                        : "text-gray-400 group-hover:text-purple-500"
                    }`}
                  />
                  <span className="text-sm">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-gray-200 mt-3 pt-3 space-y-1">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all duration-200 group ${
                isActive
                  ? "bg-purple-50 text-purple-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-purple-600"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <FontAwesomeIcon
                  icon={faGear}
                  className={`text-base w-5 transition-transform duration-200 group-hover:rotate-90 ${
                    isActive
                      ? "text-purple-700"
                      : "text-gray-400 group-hover:text-purple-500"
                  }`}
                />
                <span className="text-sm">Settings</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                )}
              </>
            )}
          </NavLink>
          <button onClick={handleLogOut} className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-red-50 hover:text-red-500 transition-all duration-200 w-full group cursor-pointer">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="text-base w-5 text-gray-400 group-hover:text-red-400 transition-transform duration-200 group-hover:translate-x-0.5"
            />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>

      {/* Quick Tags */}
      <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-4">
        <h4 className="font-semibold text-gray-700 text-sm mb-3">
          Your Interests
        </h4>
        <div className="flex flex-wrap gap-2">
          {["React", "JavaScript", "UI/UX", "Node.js", "TypeScript", "CSS"].map(
            (tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100 hover:border-purple-300 transition-colors duration-200 cursor-pointer"
              >
                #{tag}
              </span>
            ),
          )}
        </div>
      </div>
    </aside>
  );
}

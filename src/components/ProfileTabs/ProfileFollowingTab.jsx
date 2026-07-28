import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUserCheck, faUserMinus } from "@fortawesome/free-solid-svg-icons";

export default function ProfileFollowingTab() {
  const mockFollowing = [
    {
      id: "fg1",
      name: "Sarah Ahmed",
      username: "sarah_dev",
      photo:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      bio: "Frontend Developer & UI designer",
      followingSince: "2 months ago",
    },
    {
      id: "fg2",
      name: "Nour Ali",
      username: "nour_ali",
      photo:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
      bio: "Product Designer @ TechLabs",
      followingSince: "5 months ago",
    },
    {
      id: "fg3",
      name: "Hassan Mahmoud",
      username: "hassan_dev",
      photo:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      bio: "DevOps Engineer & Cloud Architect",
      followingSince: "1 year ago",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Search Header */}
      <div className="bg-white rounded-xl border border-gray-300 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h3 className="font-bold text-gray-900 text-sm">
          Following <span className="text-purple-700">({mockFollowing.length})</span>
        </h3>
        <div className="relative min-w-55">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"
          />
          <input
            type="search"
            placeholder="Search following..."
            className="w-full pl-8 pr-3 py-1.5 bg-gray-100 border border-transparent rounded-lg text-xs focus:outline-none focus:bg-white focus:border-purple-400 transition-colors"
          />
        </div>
      </div>

      {/* Following Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockFollowing.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl border border-gray-300 shadow-sm p-4 flex items-center justify-between gap-3 hover:border-purple-200 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-12 rounded-full overflow-hidden border-2 border-purple-200 shrink-0">
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-sm text-gray-900 truncate capitalize">
                  {user.name}
                </h4>
                <p className="text-xs text-gray-500 truncate">@{user.username}</p>
                <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                  Following since {user.followingSince}
                </p>
              </div>
            </div>

            <button
              className="shrink-0 px-3 py-1.5 text-xs font-semibold rounded-xl bg-purple-50 text-purple-700 hover:bg-red-50 hover:text-red-600 border border-purple-200 hover:border-red-200 transition-all cursor-pointer flex items-center gap-1.5 group"
            >
              <FontAwesomeIcon icon={faUserCheck} className="group-hover:hidden" />
              <FontAwesomeIcon icon={faUserMinus} className="hidden group-hover:block" />
              <span className="group-hover:hidden">Following</span>
              <span className="hidden group-hover:block">Unfollow</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

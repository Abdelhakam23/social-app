import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUserCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function ProfileFollowersTab() {
  const mockFollowers = [
    {
      id: "f1",
      name: "Sarah Ahmed",
      username: "sarah_dev",
      photo:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      bio: "Frontend Developer & UI designer",
      isFollowing: true,
      mutualCount: 14,
    },
    {
      id: "f2",
      name: "Omar Hassan",
      username: "omar_h",
      photo:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      bio: "Fullstack JS Engineer | Open source contributor",
      isFollowing: false,
      mutualCount: 8,
    },
    {
      id: "f3",
      name: "Nour Ali",
      username: "nour_ali",
      photo:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
      bio: "Product Designer @ TechLabs",
      isFollowing: true,
      mutualCount: 5,
    },
    {
      id: "f4",
      name: "Kareem Mostafa",
      username: "kareem_m",
      photo:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      bio: "React & React Native lover 🚀",
      isFollowing: false,
      mutualCount: 3,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Search Header */}
      <div className="bg-white rounded-xl border border-gray-300 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h3 className="font-bold text-gray-900 text-sm">
          Followers <span className="text-purple-700">({mockFollowers.length})</span>
        </h3>
        <div className="relative min-w-55">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"
          />
          <input
            type="search"
            placeholder="Search followers..."
            className="w-full pl-8 pr-3 py-1.5 bg-gray-100 border border-transparent rounded-lg text-xs focus:outline-none focus:bg-white focus:border-purple-400 transition-colors"
          />
        </div>
      </div>

      {/* Followers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockFollowers.map((user) => (
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
                  {user.mutualCount} mutual followers
                </p>
              </div>
            </div>

            <button
              className={`shrink-0 px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                user.isFollowing
                  ? "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-200"
                  : "bg-purple-700 text-white hover:bg-purple-800 shadow-xs"
              }`}
            >
              <FontAwesomeIcon icon={user.isFollowing ? faUserCheck : faUserPlus} />
              <span>{user.isFollowing ? "Following" : "Follow"}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

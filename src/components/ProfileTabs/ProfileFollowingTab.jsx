import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserCheck,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";
import Following from "../Following/Following";
import { Link } from "react-router";

export default function ProfileFollowingTab({ following }) {
  return (
    <div className="space-y-4">
      {/* Search Header */}
      <div className="bg-white rounded-xl border border-gray-300 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h3 className="font-bold text-gray-900 text-sm">
          Following{" "}
          <span className="text-purple-700">({following.length})</span>
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
      {following.length === 0 ? (
        <p className="text-center text-gray-500">No following yet</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {following.map((user) => {
            const userId =
              typeof user === "object" ? user._id || user.id : user;
            return (
              <Link to={`/user-profile/${userId}`}>
                <Following key={userId} id={userId} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

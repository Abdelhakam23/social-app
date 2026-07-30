import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserCheck,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/Auth.context";
import axios from "axios";
import Follower from "../Follower/Follower";
import { Link } from "react-router";

export default function ProfileFollowersTab({ followers }) {
  return (
    <div className="space-y-4">
      {/* Search Header */}
      <div className="bg-white rounded-xl border border-gray-300 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h3 className="font-bold text-gray-900 text-sm">
          Followers{" "}
          <span className="text-purple-700">({followers.length})</span>
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
      {followers.length === 0 ? (
        <p className="text-center text-gray-500">No followers yet</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {followers.map((user) =>
            {
              const userId = typeof user === "object" ? user._id || user.id : user;
            return  (
              <Link key={userId} to={`/user-profile/${userId}`}>
                <Follower userId={userId} />
              </Link>
                )
            }
            )}
        </div>
      )}
    </div>
  );
}

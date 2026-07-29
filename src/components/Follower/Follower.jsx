import { faUserCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Auth.context";
import axios from "axios";

export default function Follower({ user }) {
  const { token } = useContext(AuthContext);

  const [follower, setFollower] = useState(null);

  async function getFollowers() {
    try {
      const options = {
        url: `https://route-posts.routemisr.com/users/${user}/profile`,
        mehtod: "GET",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(options);

      if (data.success) {
        setFollower(data.data.user);
      }
    } catch (error) {}
  }

  useEffect(() => {
    getFollowers();
  }, []);

  return (
    <>
      {follower ? (
        <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-4 flex items-center justify-between gap-3 hover:border-purple-200 transition-colors">
          <div className="flex items-center gap-3 min-w-0">
            <div className="size-12 rounded-full overflow-hidden border-2 border-purple-200 shrink-0">
              <img
                src={follower.photo}
                alt={follower.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-sm text-gray-900 truncate capitalize">
                {follower.name}
              </h4>
              <p className="text-xs text-gray-500 truncate">
                @{follower.username}
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                {0} mutual followers
              </p>
            </div>
          </div>

          <button
            className={`shrink-0 px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              follower.isFollowing
                ? "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-200"
                : "bg-purple-700 text-white hover:bg-purple-800 shadow-xs"
            }`}
          >
            <FontAwesomeIcon
              icon={follower.isFollowing ? faUserCheck : faUserPlus}
            />
            <span>{follower.isFollowing ? "Following" : "Follow"}</span>
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

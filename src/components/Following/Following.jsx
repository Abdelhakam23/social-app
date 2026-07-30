import { faUserCheck, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import api from "../../api/api";

export default function Following({ id }) {
  const [user, setUser] = useState(null);

  async function getFollowers() {
    try {
      const { data } = await api.get(`/users/${id}/profile`);

      if (data.success) {
        console.log(data);

        setUser(data.data.user);
      }
    } catch (error) {}
  }

  useEffect(() => {
    getFollowers();
  }, []);

  return (
    <>
      {user ? (
        <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-4 flex items-center justify-between gap-3 hover:border-purple-200 transition-colors">
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

          <button className="shrink-0 px-3 py-1.5 text-xs font-semibold rounded-xl bg-purple-50 text-purple-700 hover:bg-red-50 hover:text-red-600 border border-purple-200 hover:border-red-200 transition-all cursor-pointer flex items-center gap-1.5 group">
            <FontAwesomeIcon
              icon={faUserCheck}
              className="group-hover:hidden"
            />
            <FontAwesomeIcon
              icon={faUserMinus}
              className="hidden! group-hover:block"
            />
            <span className="group-hover:hidden!">Following</span>
            <span className="hidden group-hover:block">Unfollow</span>
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

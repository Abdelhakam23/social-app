import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faUserPlus,
  faCalendarDays,
  faHashtag,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/Auth.context";
import { usePosts } from "../../hooks/PostsHook";
import axios from "axios";
import SuggestedFriendsSkelton from "../SuggestedFriendsSkelton/SuggestedFriendsSkelton";
import api from "../../api/api";
import { Link } from "react-router";

export default function RightSidebar() {
  const { token } = useContext(AuthContext);
  const [suggestedUsers, setSuggestedUsers] = useState(null);

  async function getSuggestedFriends() {
    try {

      const { data } = await api.get(`/users/suggestions?limit=5`);

      if (data.success) {
        setSuggestedUsers(data.data.suggestions);
      }
    } catch (error) {
      toast.error("Unable to load suggestions right now.");
      setSuggestedUsers([]);
    }
  }

  useEffect(() => {
    getSuggestedFriends();
  }, []);

  const trendingTopics = [
    { tag: "ReactJS", posts: "2.4K posts", trend: "+12%" },
    { tag: "WebDev", posts: "1.8K posts", trend: "+8%" },
    { tag: "JavaScript", posts: "3.1K posts", trend: "+5%" },
    { tag: "TailwindCSS", posts: "956 posts", trend: "+22%" },
    { tag: "AI", posts: "5.2K posts", trend: "+34%" },
  ];

  const events = [
    {
      title: "React Meetup Cairo",
      date: "Aug 15",
      attendees: 48,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Frontend Workshop",
      date: "Aug 22",
      attendees: 32,
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <aside className="right-sidebar  top-24 h-fit space-y-5">
      {/* Trending Topics */}
      <div className="bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden">
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              className="text-purple-600"
            />
            Trending Now
          </h3>
          <button className="text-xs text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-200 cursor-pointer">
            See all
          </button>
        </div>
        <div className="divide-y divide-gray-100">
          {trendingTopics.map((topic, index) => (
            <div
              key={index}
              className="px-4 py-3 hover:bg-purple-50/50 transition-colors duration-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                    <FontAwesomeIcon
                      icon={faHashtag}
                      className="text-purple-600 text-xs"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      {topic.tag}
                    </p>
                    <p className="text-xs text-gray-500">{topic.posts}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
                  {topic.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Friends */}
      <div className="bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden">
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
            <FontAwesomeIcon icon={faUserPlus} className="text-purple-600" />
            Suggested Friends
          </h3>
          <button className="text-xs text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-200 cursor-pointer">
            See all
          </button>
        </div>
        <div className="p-3 space-y-2">
          {suggestedUsers ? (
            suggestedUsers.length > 0 ? (
              suggestedUsers.map((friend, index) => (
                <Link  key={friend._id||index} to={`/user-profile/${friend._id}`} className="w-full">
                 <div
                  className="flex items-center  gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group "
                >
                  <div className="size-10 rounded-full overflow-hidden border-2 border-purple-200 shrink-0">
                    <img
                      src={friend.photo}
                      alt={friend.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-800 truncate">
                      {friend.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {friend.mutualFollowersCount} mutual friends
                    </p>
                  </div>
                  <button className="shrink-0  px-3 py-1.5 text-xs font-semibold text-purple-600 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-200 cursor-pointer">
                    Follow
                  </button>
                </div>
                </Link>
               
              ))
            ) : (
              <p className="text-center text-xs text-gray-500 py-3 font-medium">
                No suggested friends found
              </p>
            )
          ) : (
            [...Array(3)].map((_, index) => (
              <SuggestedFriendsSkelton key={index} />
            ))
          )}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden">
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="text-purple-600"
            />
            Upcoming Events
          </h3>
        </div>
        <div className="p-3 space-y-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg p-3 cursor-pointer group"
            >
              <div
                className={`absolute inset-0 bg-linear-to-r ${event.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-gray-800">
                    {event.title}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="text-purple-400"
                      />
                      {event.date}
                    </span>
                    <span className="text-xs text-gray-500">
                      {event.attendees} attending
                    </span>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-gray-400 text-xs group-hover:text-purple-500 group-hover:translate-x-0.5 transition-all duration-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="px-2 pb-4">
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400">
          <span className="hover:text-purple-500 cursor-pointer transition-colors duration-200">
            About
          </span>
          <span className="hover:text-purple-500 cursor-pointer transition-colors duration-200">
            Help
          </span>
          <span className="hover:text-purple-500 cursor-pointer transition-colors duration-200">
            Privacy
          </span>
          <span className="hover:text-purple-500 cursor-pointer transition-colors duration-200">
            Terms
          </span>
          <span className="hover:text-purple-500 cursor-pointer transition-colors duration-200">
            Careers
          </span>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          © 2026 SocialHub. All rights reserved.
        </p>
      </div>
    </aside>
  );
}

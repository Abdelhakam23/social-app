import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import ProfilePostsTab from "../../components/ProfileTabs/ProfilePostsTab";
import ProfileBookmarksTab from "../../components/ProfileTabs/ProfileBookmarksTab";
import ProfileFollowersTab from "../../components/ProfileTabs/ProfileFollowersTab";
import ProfileFollowingTab from "../../components/ProfileTabs/ProfileFollowingTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCakeCandles,
  faVenusMars,
  faCalendarDays,
  faPenToSquare,
  faShareNodes,
  faEllipsis,
  faCamera,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/Auth.context";
import { useParams } from "react-router";
import api from "../../api/api";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("Posts");

  const [user, setUser] = useState(null);
  // const { userPosts, getUserPosts } = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState(null);

  const { id } = useParams();
  async function getUserPosts(id) {
    if (!id) return;
    try {
      const { data } = await api.get(`/users/${id}/posts`);
      if (data.success) {
        setUserPosts(data.data.posts);
      }
    } catch (error) {
      toast.error("Unable to load user profile right now.");
    }
  }

  async function getUserProfile() {
    try {
      const { data } = await api.get(`/users/${id}/profile`);
      if (data.success) {
        setUser(data.data.user);
        getUserPosts(id);
      }
    } catch (error) {
      toast.error("Unable to load user posts right now.");
    }
  }

  useEffect(() => {
    getUserProfile();
  }, [id]);

  const tabs = [
    { label: "Posts", id: "Posts" },
    { label: "Followers", id: "Followers" },
    { label: "Following", id: "Following" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="container mx-auto max-w-7xl px-4 mt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block">
            <LeftSidebar />
          </div>

          {/* Main Profile Area */}
          {user ? (
            <main className="min-w-0 space-y-6">
              {/* Profile Header Card */}
              <div className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden">
                {/* Cover Banner */}
                <div className="h-44 md:h-56 bg-linear-to-r from-purple-800 via-purple-600 to-indigo-600 relative">
                  {user?.cover ? (
                    <img
                      src={user?.cover}
                      alt="Cover"
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                 
                </div>

                {/* Profile Details Container */}
                <div className="px-6 pb-6 pt-0 relative">
                  {/* Avatar and Action Buttons */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-14 md:-mt-16 mb-4">
                    <div className="relative">
                      <div className="size-28 md:size-32 rounded-full border-4 border-white overflow-hidden shadow-md bg-white shrink-0">
                        <img
                          src={user?.photo}
                          alt={user?.name}
                          className="w-full h-full object-cover"
                        />
                       
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:mb-2">
                     
                      <button className="p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors cursor-pointer">
                        <FontAwesomeIcon icon={faShareNodes} />
                      </button>
                      <button className="p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors cursor-pointer">
                        <FontAwesomeIcon icon={faEllipsis} />
                      </button>
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold text-gray-900 capitalize">
                          {user?.name}
                        </h1>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-purple-600 text-lg"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-500">
                        @{user?.username}
                      </p>
                    </div>

                    {/* API Fields Information Row */}
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-medium text-gray-600 pt-1">
                      <div className="flex items-center gap-1.5">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-purple-600"
                        />
                        <span>{user?.email}</span>
                      </div>

                      {user?.dateOfBirth && (
                        <div className="flex items-center gap-1.5">
                          <FontAwesomeIcon
                            icon={faCakeCandles}
                            className="text-purple-600"
                          />
                          <span>
                            Born:{" "}
                            {new Date(user.dateOfBirth).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>
                      )}

                      {user?.gender && (
                        <div className="flex items-center gap-1.5 capitalize">
                          <FontAwesomeIcon
                            icon={faVenusMars}
                            className="text-purple-600"
                          />
                          <span>Gender: {user.gender}</span>
                        </div>
                      )}

                      {user?.createdAt && (
                        <div className="flex items-center gap-1.5">
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="text-purple-600"
                          />
                          <span>
                            Joined:{" "}
                            {new Date(user.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Stats Counter matching API counts */}
                    <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                      <button
                        onClick={() => setActiveTab("Followers")}
                        className="text-center sm:text-left cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <span className="font-bold text-gray-900 text-base">
                          {user?.followersCount || 0}
                        </span>{" "}
                        <span className="text-xs text-gray-500 font-medium">
                          Followers
                        </span>
                      </button>
                      <button
                        onClick={() => setActiveTab("Following")}
                        className="text-center sm:text-left cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <span className="font-bold text-gray-900 text-base">
                          {user?.followingCount || 0}
                        </span>{" "}
                        <span className="text-xs text-gray-500 font-medium">
                          Following
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Profile Navigation Tabs */}
                <div className="flex items-center border-t border-gray-200 px-6 overflow-x-auto no-scrollbar">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-3.5 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                        activeTab === tab.id
                          ? "border-purple-700 text-purple-700"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Tab Component Render */}
              {activeTab === "Posts" && (
                <ProfilePostsTab userPosts={userPosts} />
              )}

              {activeTab === "Followers" && (
                <ProfileFollowersTab followers={user.followers} />
              )}
              {activeTab === "Following" && (
                <ProfileFollowingTab following={user.following} />
              )}
            </main>
          ) : (
            <div className="min-w-0 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-300 shadow-sm p-12 text-center animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mb-4" />
                <div className="h-3 bg-gray-200 rounded w-1/4 mx-auto" />
              </div>
            </div>
          )}

          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

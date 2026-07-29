import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faUserPlus,
  faShareNodes,
  faHeart,
  faCheck,
  faCheckDouble,
  faFilter,
  faEllipsisVertical,
  faBell,
  faBellSlash,
} from "@fortawesome/free-solid-svg-icons";

const notificationsData = [
  {
    _id: "6a68da5c8ebe92c2c0f9c028",
    actor: {
      _id: "6a2e9aea8ebe92c2c07fa815",
      name: "James Love",
      photo: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
    },
    type: "comment_post",
    entityType: "post",
    isRead: false,
    createdAt: "2026-07-28T16:35:40.452Z",
    entity: {
      _id: "6a68d6e48ebe92c2c0f9ae6f",
      body: "اللي عمل فولو وشاله تاني مش جدع ملحقتش اطبق اللوجيك اني اعرض الفولورز",
    },
  },
  {
    _id: "6a68da378ebe92c2c0f9bf9d",
    actor: {
      _id: "6a68879c8ebe92c2c0f8bd8c",
      name: "george",
      photo: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
    },
    type: "comment_post",
    entityType: "post",
    isRead: false,
    createdAt: "2026-07-28T16:35:03.530Z",
    entity: {
      _id: "6a68abb08ebe92c2c0f8ece7",
      body: "New Post",
    },
  },
  {
    _id: "6a68da128ebe92c2c0f9bf78",
    actor: {
      _id: "6a2e9aea8ebe92c2c07fa815",
      name: "James Love",
      photo: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
    },
    type: "follow_user",
    entityType: "user",
    isRead: false,
    createdAt: "2026-07-28T16:34:26.409Z",
    entity: {
      _id: "6a2e9aea8ebe92c2c07fa815",
      name: "James Love",
      username: "ayat",
      photo: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
      followersCount: 0,
      followingCount: 0,
    },
  },
  {
    _id: "6a68d9658ebe92c2c0f9be71",
    actor: {
      _id: "6a68879c8ebe92c2c0f8bd8c",
      name: "george",
      photo: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
    },
    type: "comment_post",
    entityType: "post",
    isRead: false,
    createdAt: "2026-07-28T16:31:33.204Z",
    entity: {
      _id: "6a68d6e48ebe92c2c0f9ae6f",
      body: "اللي عمل فولو وشاله تاني مش جدع ملحقتش اطبق اللوجيك اني اعرض الفولورز",
    },
  },
  {
    _id: "6a68d9578ebe92c2c0f9be39",
    actor: {
      _id: "6a68879c8ebe92c2c0f8bd8c",
      name: "george",
      photo: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
    },
    type: "comment_post",
    entityType: "post",
    isRead: true,
    createdAt: "2026-07-28T16:31:19.784Z",
    entity: {
      _id: "6a68abb08ebe92c2c0f8ece7",
      body: "New Post",
    },
  },
  {
    _id: "6a68c6518ebe92c2c0f995c6",
    actor: {
      _id: "6a4e557e8ebe92c2c0b6cbe4",
      name: "mohamred",
      photo: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
    },
    type: "share_post",
    entityType: "post",
    isRead: true,
    createdAt: "2026-07-28T15:10:09.683Z",
    entity: {
      _id: "6a68c6518ebe92c2c0f995b5",
      unavailable: true,
    },
  },
  {
    _id: "6a68c5e58ebe92c2c0f98f73",
    actor: {
      _id: "6a2c0f688ebe92c2c07c5560",
      name: "Khaled",
      photo: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
    },
    type: "comment_post",
    entityType: "post",
    isRead: true,
    createdAt: "2026-07-28T15:08:21.933Z",
    entity: {
      _id: "6a68abb08ebe92c2c0f8ece7",
      body: "New Post",
    },
  },
  {
    _id: "6a68c5338ebe92c2c0f98e4c",
    actor: {
      _id: "6a2c0f688ebe92c2c07c5560",
      name: "Khaled",
      photo: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
    },
    type: "comment_post",
    entityType: "post",
    isRead: true,
    createdAt: "2026-07-28T15:05:23.274Z",
    entity: {
      _id: "6a68abb08ebe92c2c0f8ece7",
      body: "New Post",
    },
  },
  {
    _id: "6a68c5088ebe92c2c0f98de6",
    actor: {
      _id: "6a2c0f688ebe92c2c07c5560",
      name: "Khaled",
      photo: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
    },
    type: "comment_post",
    entityType: "post",
    isRead: true,
    createdAt: "2026-07-28T15:04:40.289Z",
    entity: {
      _id: "6a68abb08ebe92c2c0f8ece7",
      body: "New Post",
    },
  },
  {
    _id: "6a68c45c8ebe92c2c0f98865",
    actor: {
      _id: "6a2c0f688ebe92c2c07c5560",
      name: "Khaled",
      photo: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
    },
    type: "comment_post",
    entityType: "post",
    isRead: true,
    createdAt: "2026-07-28T15:01:48.087Z",
    entity: {
      _id: "6a68abb08ebe92c2c0f8ece7",
      body: "New Post",
    },
  },
];

function getNotificationIcon(type) {
  switch (type) {
    case "comment_post":
      return { icon: faComment, color: "text-blue-500", bg: "bg-blue-50", ring: "ring-blue-100" };
    case "follow_user":
      return { icon: faUserPlus, color: "text-purple-500", bg: "bg-purple-50", ring: "ring-purple-100" };
    case "share_post":
      return { icon: faShareNodes, color: "text-emerald-500", bg: "bg-emerald-50", ring: "ring-emerald-100" };
    case "like_post":
      return { icon: faHeart, color: "text-rose-500", bg: "bg-rose-50", ring: "ring-rose-100" };
    default:
      return { icon: faBell, color: "text-gray-500", bg: "bg-gray-50", ring: "ring-gray-100" };
  }
}

function getNotificationMessage(type, actorName) {
  switch (type) {
    case "comment_post":
      return <><span className="font-semibold text-gray-900">{actorName}</span> commented on your post</>;
    case "follow_user":
      return <><span className="font-semibold text-gray-900">{actorName}</span> started following you</>;
    case "share_post":
      return <><span className="font-semibold text-gray-900">{actorName}</span> shared your post</>;
    case "like_post":
      return <><span className="font-semibold text-gray-900">{actorName}</span> liked your post</>;
    default:
      return <><span className="font-semibold text-gray-900">{actorName}</span> interacted with you</>;
  }
}

function formatTimeAgo(dateString) {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function Notifications() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "unread", label: "Unread" },
    { id: "comment_post", label: "Comments" },
    { id: "follow_user", label: "Follows" },
    { id: "share_post", label: "Shares" },
  ];

  const filteredNotifications = notificationsData.filter((n) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "unread") return !n.isRead;
    return n.type === activeFilter;
  });

  const unreadCount = notificationsData.filter((n) => !n.isRead).length;


  async function getNotifications() {
    try {
      const options = {
        url:''
      }
    } catch (error) {
      
    }
    
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto max-w-7xl px-4 mt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block">
            <LeftSidebar />
          </div>

          {/* Main Content */}
          <main className="min-w-0 space-y-4">
            {/* Header Card */}
            <div className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden">
              {/* Title Bar */}
              <div className="px-6 py-5 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-md shadow-purple-200">
                      <FontAwesomeIcon icon={faBell} className="text-white text-sm" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-gray-900">Notifications</h1>
                      <p className="text-xs text-gray-500 mt-0.5">
                        You have <span className="text-purple-600 font-semibold">{unreadCount}</span> unread notifications
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 cursor-pointer">
                    <FontAwesomeIcon icon={faCheckDouble} />
                    <span className="hidden sm:inline">Mark all as read</span>
                  </button>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="px-6 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-gray-100 bg-gray-50/50">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      activeFilter === filter.id
                        ? "bg-purple-700 text-white shadow-md shadow-purple-200"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {filter.label}
                    {filter.id === "unread" && unreadCount > 0 && (
                      <span className={`ml-1.5 px-1.5 py-0.5 text-[10px] rounded-full ${
                        activeFilter === "unread"
                          ? "bg-white/20 text-white"
                          : "bg-purple-100 text-purple-700"
                      }`}>
                        {unreadCount}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Notifications List */}
            {filteredNotifications.length > 0 ? (
              <div className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden divide-y divide-gray-100">
                {filteredNotifications.map((notification, index) => {
                  const iconData = getNotificationIcon(notification.type);
                  const isUnavailable = notification.entity?.unavailable;

                  return (
                    <div
                      key={notification._id}
                      className={`group relative px-5 py-4 flex items-start gap-4 transition-all duration-300 hover:bg-gray-50/80 cursor-pointer ${
                        !notification.isRead
                          ? "bg-purple-50/40 border-l-[3px] border-l-purple-500"
                          : "border-l-[3px] border-l-transparent"
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: "fadeInUp 0.4s ease-out forwards",
                      }}
                    >
                      {/* Avatar with type icon */}
                      <div className="relative shrink-0">
                        <div className="size-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                          <img
                            src={notification.actor.photo}
                            alt={notification.actor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div
                          className={`absolute -bottom-1 -right-1 size-6 rounded-full ${iconData.bg} ${iconData.color} flex items-center justify-center ring-2 ${iconData.ring} shadow-sm`}
                        >
                          <FontAwesomeIcon icon={iconData.icon} className="text-[10px]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {getNotificationMessage(notification.type, notification.actor.name)}
                        </p>

                        {/* Entity preview */}
                        {notification.entity && !isUnavailable && notification.entity.body && (
                          <div className="mt-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200/80 group-hover:bg-gray-100/80 transition-colors">
                            <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                              "{notification.entity.body}"
                            </p>
                          </div>
                        )}

                        {isUnavailable && (
                          <div className="mt-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200/80 border-dashed">
                            <p className="text-xs text-gray-400 italic">
                              This post is no longer available
                            </p>
                          </div>
                        )}

                        {/* Follow entity — show profile card */}
                        {notification.type === "follow_user" && notification.entity && !isUnavailable && (
                          <div className="mt-2.5 flex items-center gap-3 px-3 py-2.5 bg-linear-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200/60">
                            <div className="size-8 rounded-full overflow-hidden border border-white shadow-sm">
                              <img
                                src={notification.entity.photo}
                                alt={notification.entity.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-gray-800 truncate">
                                {notification.entity.name}
                              </p>
                              <p className="text-[10px] text-gray-500">
                                @{notification.entity.username}
                              </p>
                            </div>
                            <button className="px-3 py-1 text-[10px] font-bold bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors cursor-pointer shadow-sm">
                              Follow Back
                            </button>
                          </div>
                        )}

                        {/* Timestamp */}
                        <p className="text-[11px] text-gray-400 mt-2 font-medium">
                          {formatTimeAgo(notification.createdAt)}
                        </p>
                      </div>

                      {/* Unread dot & actions */}
                      <div className="flex items-center gap-2 shrink-0 pt-1">
                        {!notification.isRead && (
                          <div className="size-2.5 rounded-full bg-purple-500 shadow-sm shadow-purple-200 animate-pulse" />
                        )}
                        <button className="opacity-0 group-hover:opacity-100 size-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all duration-200 cursor-pointer">
                          <FontAwesomeIcon icon={faEllipsisVertical} className="text-xs" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-2xl border border-gray-300 shadow-sm p-12 text-center">
                <div className="size-20 mx-auto rounded-full bg-linear-to-br from-purple-100 to-indigo-100 flex items-center justify-center mb-5">
                  <FontAwesomeIcon icon={faBellSlash} className="text-3xl text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  No notifications found
                </h3>
                <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
                  {activeFilter === "unread"
                    ? "You're all caught up! No unread notifications."
                    : `No ${activeFilter.replace("_", " ")} notifications yet.`}
                </p>
              </div>
            )}
          </main>

          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <RightSidebar />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

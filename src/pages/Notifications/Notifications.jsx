import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faUserPlus,
  faShareNodes,
  faHeart,
  faCheckDouble,
  faEllipsisVertical,
  faBell,
  faBellSlash,
} from "@fortawesome/free-solid-svg-icons";
import api from "../../api/api";

function getNotificationIcon(type) {
  switch (type) {
    case "comment_post":
      return {
        icon: faComment,
        color: "text-blue-500",
        bg: "bg-blue-50",
        ring: "ring-blue-100",
      };
    case "follow_user":
      return {
        icon: faUserPlus,
        color: "text-purple-500",
        bg: "bg-purple-50",
        ring: "ring-purple-100",
      };
    case "share_post":
      return {
        icon: faShareNodes,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        ring: "ring-emerald-100",
      };
    case "like_post":
      return {
        icon: faHeart,
        color: "text-rose-500",
        bg: "bg-rose-50",
        ring: "ring-rose-100",
      };
    default:
      return {
        icon: faBell,
        color: "text-gray-500",
        bg: "bg-gray-50",
        ring: "ring-gray-100",
      };
  }
}

function getNotificationMessage(type, actorName) {
  switch (type) {
    case "comment_post":
      return (
        <>
          <span className="font-semibold text-gray-900">{actorName}</span>{" "}
          commented on your post
        </>
      );
    case "follow_user":
      return (
        <>
          <span className="font-semibold text-gray-900">{actorName}</span>{" "}
          started following you
        </>
      );
    case "share_post":
      return (
        <>
          <span className="font-semibold text-gray-900">{actorName}</span>{" "}
          shared your post
        </>
      );
    case "like_post":
      return (
        <>
          <span className="font-semibold text-gray-900">{actorName}</span> liked
          your post
        </>
      );
    default:
      return (
        <>
          <span className="font-semibold text-gray-900">{actorName}</span>{" "}
          interacted with you
        </>
      );
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

// 🦴 Component للـ Skeleton Loading
function NotificationsSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden divide-y divide-gray-100 animate-pulse">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="px-5 py-4 flex items-start gap-4">
          <div className="size-12 rounded-full bg-gray-200 shrink-0" />
          <div className="flex-1 space-y-2 pt-1">
            <div className="h-4 bg-gray-200 rounded-md w-3/4" />
            <div className="h-3 bg-gray-100 rounded-md w-1/2" />
            <div className="h-3 bg-gray-100 rounded-md w-1/4 mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Notifications() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [notifications, setNotifications] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const filters = [
    { id: "all", label: "All" },
    { id: "unread", label: "Unread" },
    { id: "comment_post", label: "Comments" },
    { id: "follow_user", label: "Follows" },
    { id: "share_post", label: "Shares" },
  ];

  async function getUnreadCount() {
    try {
      const { data } = await api.get("/notifications/unread-count");
      setUnreadCount(data.data.unreadCount);
    } catch (error) {
      console.log(error);
    }
  }

  async function getNotifications() {
    setIsLoading(true);
    try {
      const { data } = await api.get("/notifications");
      if (data.success) {
        setNotifications(data.data.notifications);
        getUnreadCount();
      }
    } catch (error) {
      console.log(error);
      setNotifications([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getNotifications();
  }, []);

  // ⚡ تحديث الـ State فوراً محلياً (Optimistic UI Update)
  async function markAsRead() {
    if (unreadCount === 0) return;

    // 1. تحديث الـ UI مباشرة وبدون انتظار الـ API
    setUnreadCount(0);
    setNotifications((prev) =>
      prev ? prev.map((n) => ({ ...n, isRead: true })) : []
    );

    // 2. إرسال الـ Request للـ Backend في الخفاء
    try {
      await api.patch("/notifications/read-all");
    } catch (error) {
      console.log("Error marking notifications as read:", error);
      // في حالة حدوث خطأ، يمكنك إعادة جلب البيانات الصحيحة
      getNotifications();
    }
  }

  const filteredNotifications = notifications?.filter((n) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "unread") return !n.isRead;
    return n.type === activeFilter;
  });

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
              <div className="px-6 py-5 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-md shadow-purple-200">
                      <FontAwesomeIcon
                        icon={faBell}
                        className="text-white text-sm"
                      />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-gray-900">
                        Notifications
                      </h1>
                      <p className="text-xs text-gray-500 mt-0.5">
                        You have{" "}
                        <span className="text-purple-600 font-semibold">
                          {unreadCount}
                        </span>{" "}
                        unread notifications
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={markAsRead}
                    disabled={unreadCount === 0}
                    className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors duration-200 cursor-pointer"
                  >
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
                      <span
                        className={`ml-1.5 px-1.5 py-0.5 text-[10px] rounded-full ${
                          activeFilter === "unread"
                            ? "bg-white/20 text-white"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {unreadCount}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {isLoading ? (
              <NotificationsSkeleton />
            ) : filteredNotifications && filteredNotifications.length > 0 ? (
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
                          <FontAwesomeIcon
                            icon={iconData.icon}
                            className="text-[10px]"
                          />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {getNotificationMessage(
                            notification.type,
                            notification.actor.name
                          )}
                        </p>

                        {notification.entity &&
                          !isUnavailable &&
                          notification.entity.body && (
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

                        {notification.type === "follow_user" &&
                          notification.entity &&
                          !isUnavailable && (
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

                        <p className="text-[11px] text-gray-400 mt-2 font-medium">
                          {formatTimeAgo(notification.createdAt)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 pt-1">
                        {!notification.isRead && (
                          <div className="size-2.5 rounded-full bg-purple-500 shadow-sm shadow-purple-200 animate-pulse" />
                        )}
                        <button className="opacity-0 group-hover:opacity-100 size-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all duration-200 cursor-pointer">
                          <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            className="text-xs"
                          />
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
                  <FontAwesomeIcon
                    icon={faBellSlash}
                    className="text-3xl text-purple-400"
                  />
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
    </div>
  );
}
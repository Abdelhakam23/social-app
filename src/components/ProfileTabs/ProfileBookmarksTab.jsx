import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faEllipsis,
  faShareNodes,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartRegular,
  faComment as faCommentRegular,
} from "@fortawesome/free-regular-svg-icons";

export default function ProfileBookmarksTab({bookmarks}) {
  const mockBookmarks = [
    {
      id: "b1",
      user: {
        name: "Sarah Ahmed",
        username: "sarah_dev",
        photo:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      },
      createdAt: "3 days ago",
      body: "Top 10 React performance optimization techniques every frontend developer should master in 2026. ⚡️ #ReactJS #WebDev",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
      likesCount: 340,
      commentsCount: 42,
      savedDate: "Saved yesterday",
    },
    {
      id: "b2",
      user: {
        name: "Omar Hassan",
        username: "omar_h",
        photo:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      },
      createdAt: "1 week ago",
      body: "Mastering CSS Grid and Tailwind layout patterns for complex dashboard web apps.",
      image: null,
      likesCount: 156,
      commentsCount: 19,
      savedDate: "Saved 4 days ago",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-white rounded-xl border border-gray-300 p-4 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
          <FontAwesomeIcon icon={faBookmark} />
          <span>Saved Posts ({bookmarks.length})</span>
        </div>
        <span className="text-xs text-gray-500 font-medium">Only visible to you</span>
      </div>

      {/* Bookmarked Items */}
      {bookmarks.length === 0 ? (
        <p className="text-center text-gray-500">No bookmarks yet</p>
      ) : (
        bookmarks.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl border border-gray-300 shadow-sm p-5 space-y-4 relative"
          >
            {/* Saved Ribbon Badge */}
            <div className="flex items-center justify-between bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-100 text-xs text-purple-700 font-semibold">
              <span className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faBookmark} />
                {post.savedDate}
              </span>
              <button className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer" title="Remove bookmark">
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>

            {/* Author Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full overflow-hidden border-2 border-purple-200">
                  <img
                    src={post.user.photo}
                    alt={post.user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 capitalize">
                    {post.user.name}
                  </h4>
                  <p className="text-xs text-gray-500">{post.createdAt}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>

            {/* Post Content */}
            <p className="text-sm text-gray-800 leading-relaxed">{post.body}</p>

            {/* Post Image */}
            {post.image && (
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <img
                  src={post.image}
                  alt="Post attachment"
                  className="w-full max-h-96 object-cover"
                />
              </div>
            )}

            {/* Reaction Bar */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-3 text-xs font-semibold text-gray-500">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faHeartRegular} />
                  <span>{post.likesCount}</span>
                </button>
                <button className="flex items-center gap-1.5 hover:text-purple-600 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faCommentRegular} />
                  <span>{post.commentsCount} Comments</span>
                </button>
              </div>
              <button className="flex items-center gap-1.5 hover:text-purple-600 transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faShareNodes} />
                <span>Share</span>
              </button>
            </div>
          </div>
        )))}
    </div>
  );
}

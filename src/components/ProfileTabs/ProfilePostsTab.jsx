import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartRegular,
  faComment as faCommentRegular,
} from "@fortawesome/free-regular-svg-icons";

export default function ProfilePostsTab({ userPosts }) {
  if (!userPosts || userPosts.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-300 p-8 text-center space-y-3 shadow-sm">
        <p className="text-gray-500 font-semibold text-sm">No posts published yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {userPosts.map((post) => (
        <div
          key={post.id || post._id}
          className="bg-white rounded-xl border border-gray-300 shadow-sm p-5 space-y-4"
        >
          {/* Author Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full overflow-hidden border-2 border-purple-200">
                <img
                  src={post.user?.photo}
                  alt={post.user?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900 capitalize">
                  {post.user?.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {post.createdAt ? new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "Recently"}
                </p>
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
                <span>{post.likesCount || 0}</span>
              </button>
              <button className="flex items-center gap-1.5 hover:text-purple-600 transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faCommentRegular} />
                <span>{post.commentsCount || 0} Comments</span>
              </button>
            </div>
            <button className="flex items-center gap-1.5 hover:text-purple-600 transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faShareNodes} />
              <span>{post.sharesCount || 0} Shares</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

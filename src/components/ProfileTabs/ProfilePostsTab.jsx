import React from "react";
import PostCard from "../PostCard/PostCard";

export default function ProfilePostsTab({ userPosts }) {
  if (!userPosts || userPosts.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-300 p-8 text-center space-y-3 shadow-sm">
        <p className="text-gray-500 font-semibold text-sm">
          No posts published yet
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {userPosts.map((post) => (
        <PostCard key={post.id || post._id} postInfo={post} limit={1} />
      ))}
    </div>
  );
}

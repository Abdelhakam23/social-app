import React from "react";

export default function PostCardSkeleton() {
  return (
    <div className="post-card space-y-3 bg-white p-5 rounded-xl border border-gray-300 shadow-sm animate-pulse">
      
      {/* Header Skeleton */}
      <header className="flex items-center justify-between">
        <div className="poster-info flex items-center gap-2">
          {/* Avatar Skeleton */}
          <div className="size-10 rounded-full bg-gray-300 shrink-0"></div>
          <div className="space-y-2">
            {/* Name Skeleton */}
            <div className="h-3.5 w-28 bg-gray-300 rounded"></div>
            {/* Date/Category Skeleton */}
            <div className="h-2.5 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>
        {/* Option Button Skeleton */}
        <div className="size-5 bg-gray-200 rounded-full"></div>
      </header>

      {/* Post Content & Image Skeleton */}
      <div className="space-y-3">
        {/* Caption Skeleton */}
        <div className="h-6 w-3/4 bg-gray-300 rounded-md my-3"></div>
        
        {/* Image Skeleton */}
        <div className="h-100 w-full bg-gray-300 rounded-2xl"></div>
      </div>

      {/* Reactions Bar Skeleton */}
      <div className="flex items-center justify-between border-y border-gray-200 px-2 py-3 -mx-5">
        <div className="reactions flex items-center gap-4">
          <div className="h-5 w-12 bg-gray-200 rounded-lg"></div>
          <div className="h-5 w-12 bg-gray-200 rounded-lg"></div>
        </div>
        <div className="h-5 w-14 bg-gray-200 rounded-lg"></div>
      </div>

      {/* Comments Skeleton */}
      <div className="comments mt-5 space-y-4">
        {/* Single Comment Item Skeleton */}
        {[1, 2].map((item) => (
          <div key={item} className="flex gap-2 items-start">
            <div className="size-8 rounded-full bg-gray-200 shrink-0"></div>
            <div className="flex-1 space-y-2 bg-gray-100 p-3 rounded-xl">
              <div className="h-3 w-24 bg-gray-300 rounded"></div>
              <div className="h-3 w-full bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
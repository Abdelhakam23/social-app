import React, { useContext, useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import PostCardSkeleton from "../PostCardSkelton/PostCardSkelton";
import axios from "axios";
import { AuthContext } from "../../Context/Auth.context";

export default function Feed({posts}) {
 
  return (
    <>
      <section className="all-posts  mx-auto max-w-2xl my-5">
        <div className="container">
          <h1 className="text-2xl font-semibold text-gray-500 mb-4">
            Latest Posts
          </h1>

          <div className="space-y-8">
            {posts
              ? posts.map((post) => (
                  <PostCard key={post.id} postInfo={post} limit={1} />
                ))
              : [...Array(5)].map((_, index) => (
                  <PostCardSkeleton key={index} />
                ))}
          </div>
        </div>
      </section>
    </>
  );
}

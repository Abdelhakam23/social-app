import React, { useContext, useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import PostCardSkeleton from "../PostCardSkelton/PostCardSkelton";
import axios from "axios";
import { AuthContext } from "../../Context/Auth.context";

export default function Feed() {
  const [posts, setPosts] = useState(null);
  const { token } = useContext(AuthContext);
  async function getAllPosts() {
    try {
      const options = {
        url: "https://route-posts.routemisr.com/posts?limit=50&page=1",
        method: "GET",
        headers: {
          token,
        },
      };
      const { data } = await axios.request(options);

      //   console.log(data.data.posts);
      setPosts(data.data.posts);
    } catch (error) {}
  }

  useEffect(() => {
    getAllPosts();
  }, []);

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

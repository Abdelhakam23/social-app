import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Context/Auth.context";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard";
import PostCardSkeleton from "../../components/PostCardSkelton/PostCardSkelton";

export default function PostDetails() {
  const [postDetails, setPostDetails] = useState(null);

  const { id } = useParams();
  const { token } = useContext(AuthContext);

  async function getPostDetails() {
    try {
      const option = {
        url: `https://route-posts.routemisr.com/posts/${id}`,
        method: "GET",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(option);

      console.log(data.data.post);
      if (data.success) {
        setPostDetails(data.data.post);
      }
    } catch (error) {}
  }

  useEffect(() => {
    getPostDetails();
  }, [id]);

  return (
    <div className="max-w-2xl py-5 mx-auto px-4">
      {postDetails ? (
        <PostCard limit={10} postInfo={postDetails} />
      ) : (
        <PostCardSkeleton />
      )}
    </div>
  );
}

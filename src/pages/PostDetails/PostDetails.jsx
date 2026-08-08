import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Context/Auth.context";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard";
import PostCardSkeleton from "../../components/PostCardSkelton/PostCardSkelton";
import api from "../../api/api";

export default function PostDetails() {
  const [postDetails, setPostDetails] = useState(null);

  const { id } = useParams();
  const { token } = useContext(AuthContext);

  async function getPostDetails() {
    try {
     

      const { data } = await api.get(`/posts/${id}`);

      if (data.success) {
        setPostDetails(data.data.post);
      }
    } catch (error) {
      toast.error("Unable to load post details right now.");
    }
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

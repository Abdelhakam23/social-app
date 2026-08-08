import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faComment as faCommentRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsis,
  faShareNodes,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import Post from "../Post/Post";
import axios from "axios";
import { AuthContext } from "../../Context/Auth.context";
import api from "../../api/api";
import FormField from "../ui/formField/FormField";
import { useFormik } from "formik";

import * as yup from "yup";

export default function PostCard({ postInfo, limit = 1 }) {
  const [comments, setComments] = useState(null);
  const { token, user } = useContext(AuthContext);

  const postId = postInfo?.id || postInfo?._id;

  const [likesCount, setLikesCount] = useState(postInfo?.likesCount || 0);
  const [commentsCount, setCommentsCount] = useState(
    postInfo?.commentsCount || 0,
  );
  const [isLiked, setIsLiked] = useState(false);

  let currentUser = user;

  useEffect(() => {
    setLikesCount(postInfo?.likesCount || 0);
    setCommentsCount(postInfo?.commentsCount || 0);
    if (postInfo?.likes && currentUser?._id) {
      const hasLiked = postInfo.likes.some((like) => {
        if (typeof like === "object" && like !== null) {
          return like._id === currentUser._id;
        }
        return like === currentUser._id;
      });
      setIsLiked(hasLiked);
    } else {
      setIsLiked(false);
    }
  }, [currentUser, postInfo]);

  const validationComment = yup.object({
    comment: yup
      .string()
      .required("Please Add Comment")
      .min(3, "Comment must be at least 3 characters long")
      .max(200, "Comment must be less than 200 characters"),
  });

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: validationComment,
    onSubmit: handleAddComment,
  });

  async function handleAddComment(values) {
    try {
      const formData = new FormData();
      formData.append("content", values.comment);

      const { data } = await api.post(`/posts/${postId}/comments`, formData);
      if (data.success) {
        formik.resetForm();
        setCommentsCount((prev) => prev + 1);
        getPostComments();
      }
    } catch (error) {
      toast.error("Unable to add comment right now.");
    }
  }
  async function getPostComments() {
    if (!postId) return;
    try {
      const { data } = await api.get(
        `/posts/${postId}/comments?limit=${limit}`,
      );
      if (data.success) {
        setComments(data.data.comments);
      }
    } catch (error) {
      toast.error("Unable to load comments right now.");
    }
  }

  useEffect(() => {
    getPostComments();
  }, [postId]);

  async function handleLike() {
    if (!postId) return;

    const previousLiked = isLiked;
    const previousCount = likesCount;

    // Optimistic UI update
    const newLikedState = !previousLiked;
    setIsLiked(newLikedState);
    setLikesCount((prev) => (newLikedState ? prev + 1 : Math.max(0, prev - 1)));

    try {
      const options = {
        url: `https://route-posts.routemisr.com/posts/${postId}/like`,
        method: "PUT",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(options);
      if (data.success) {
        if (typeof data.data?.likesCount === "number") {
          setLikesCount(data.data.likesCount);
        }
      }
    } catch (error) {
      toast.error("Unable to update like status right now.");
      setIsLiked(previousLiked);
      setLikesCount(previousCount);
    }
  }

  return (
    <div className="post-card space-y-3 bg-white p-5 rounded-xl border border-gray-300 shadow-sm">
      <Post
        postId={postId}
        isShare={postInfo?.isShare}
        createDate={postInfo?.createdAt}
        postBody={postInfo?.body || ""}
        postImage={postInfo?.image || ""}
        settingsIcon={faEllipsis}
        userName={postInfo?.user?.name}
        sharedPostBody={postInfo?.sharedPost?.body || ""}
        sharedPostCreatedDate={postInfo?.sharedPost?.createdAt || ""}
        sharedPostImage={postInfo?.sharedPost?.image || ""}
        sharedPostUser={postInfo?.sharedPost?.user?.name || ""}
        sharedPostUserImage={postInfo?.sharedPost?.user?.photo || ""}
        userImage={postInfo?.user?.photo}
        sharedPostId={postInfo?.sharedPost?.id}
        userId={postInfo.user._id}
      />

      <div className="flex items-center justify-between border-t border-gray-200 pt-3 text-xs font-semibold text-gray-500">
        <div className="flex items-center gap-4">
          <button
            className={`flex items-center gap-1.5 ${
              isLiked ? "text-red-500 font-bold" : ""
            } hover:text-red-500 transition-colors cursor-pointer`}
            onClick={handleLike}
          >
            <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeartRegular} />
            <span>{likesCount}</span>
          </button>
          <button className="flex items-center gap-1.5 hover:text-purple-600 transition-colors cursor-pointer">
            <FontAwesomeIcon icon={faCommentRegular} />
            <span>{commentsCount} Comments</span>
          </button>
        </div>
        <button className="flex items-center gap-1.5 hover:text-purple-600 transition-colors cursor-pointer">
          <FontAwesomeIcon icon={faShareNodes} />
          <span>{postInfo?.sharesCount || 0} Shares</span>
        </button>
      </div>

      {/* Comments Section */}
      <form
        className="add-comment flex flex-col"
        onSubmit={formik.handleSubmit}
      >
        <FormField
          elementType={"input"}
          placeholder="Write a comment..."
          inputType={"text"}
          name={"comment"}
          id={"comment"}
          error={formik.errors.comment}
          value={formik.values.comment}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          touched={formik.touched.comment}
        />
        <button
          type="submit"
          className="bg-purple-600 text-white mt-2 px-4 py-1 rounded-md hover:bg-purple-700 transition-colors self-end"
        >
          Post
        </button>
      </form>

      {/* Comments */}
      <div className="comments mt-5 space-y-4">
        {comments ? (
          comments.length > 0 ? (
            comments.map((comment) => (
              <CommentCard
                key={comment._id}
                comment={comment}
                postId={postId}
              />
            ))
          ) : (
            <p className="text-center text-xs font-medium text-gray-500">
              No Comments Yet. Be the first to comment!
            </p>
          )
        ) : (
          <p className="text-center text-xs font-medium text-gray-500">
            Loading Comments <FontAwesomeIcon icon={faSpinner} spin />
          </p>
        )}
      </div>
    </div>
  );
}

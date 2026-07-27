import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import {
  faEllipsis,
  faShare,
  faShareNodes,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import Post from "../Post/Post";
import { array } from "yup";
import axios from "axios";
import { AuthContext } from "../../Context/Auth.context";

export default function PostCard({ postInfo, limit }) {
  const [comments, setComments] = useState(null);

  const { token,user } = useContext(AuthContext);



 
  const [likesCount, setLikesCount] = useState(postInfo.likesCount);
  const [isLiked, setIsLiked] = useState(() => {
  if (postInfo.likes && user) {
    return postInfo.likes?.some((likeUser) => likeUser._id === user._id);
  }
  
  return postInfo.isLiked || false;
});

  async function getPostComments() {
    try {
      const option = {
        url: `https://route-posts.routemisr.com/posts/${postInfo.id}/comments?limit=${limit}`,
        method: "GET",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(option);
      if (data.success) {
        setComments(data.data.comments);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPostComments();

  }, []);

  async function handleLike(postId) {
    try {
      const newLikedState = !isLiked;

      setIsLiked(newLikedState);
      const options = {
        url: `https://route-posts.routemisr.com/posts/${postId}/like`,
        method: "PUT",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(options);
      if (data.success) {
        setLikesCount(data.data.likesCount);
       
      }
    } catch (error) {
      console.log(error);
      setIsLiked(isLiked);
    }
  }
  return (
    <>
      <div className="post-card space-y-3 bg-white p-5 rounded-xl border border-gray-300 shadow-sm">
        <Post
          postId={postInfo.id}
          isShare={postInfo.isShare}
          createDate={postInfo.createdAt}
          postBody={postInfo.body || ""}
          postImage={postInfo.image || ""}
          settingsIcon={faEllipsis}
          userName={postInfo.user.name}
          sharedPostBody={postInfo.sharedPost?.body || ""}
          sharedPostCreatedDate={postInfo.sharedPost?.createdAt || ""}
          sharedPostImage={postInfo.sharedPost?.image || ""}
          sharedPostUser={postInfo.sharedPost?.user?.name || ""}
          sharedPostUserImage={postInfo.sharedPost?.user?.photo || ""}
          userImage={postInfo.user.photo}
          sharedPostId={postInfo.sharedPost?.id}
        />
        <div className="flex items-center justify-between *:text-gray-500 *:font-semibold border-y border-gray-500 px-2 py-3 -mx-5">
          <div className="reactions flex items-center gap-2 *:hover:bg-gray-200 *:px-2 *:cursor-pointer *:rounded-xl *:transition-colors *:duration-300 ">
            <button
              onClick={() => {
                handleLike(postInfo.id);
              }}
              className={`emojie space-x-1 ${isLiked ? "text-red-500" : ""}`}
            >
              <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeart} />
              <span>{likesCount}</span>
            </button>
            <button className="emojie space-x-1">
              <FontAwesomeIcon icon={faComment} />
              <span>{postInfo.commentsCount}</span>
            </button>
          </div>
          <button className="emojie space-x-1 hover:bg-gray-200 px-2 cursor-pointer rounded-xl transition-colors duration-300">
            <FontAwesomeIcon icon={faShareNodes} />
            <span> {postInfo.sharesCount} share</span>
          </button>
        </div>

        <div className="comments mt-5 space-y-4">
          {comments ? (
            comments.length > 0 ? (
              comments.map((comment, index) => (
                <CommentCard key={comment._id} topComment={comment} />
              ))
            ) : (
              <p className="text-center text-sm font-medium">
                No Comments Yet be The First to comment
              </p>
            )
          ) : (
            <>
              <p className="text-center text-sm font-medium">
                Loading Comments <FontAwesomeIcon icon={faSpinner} spin />
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

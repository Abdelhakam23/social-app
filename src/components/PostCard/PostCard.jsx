import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CommentCard from "../CommentCard/CommentCard";
import Post from "../Post/Post";

export default function PostCard({ postInfo }) {
  return (
    <>
      <div className="post-card space-y-3 bg-white p-5 rounded-xl border border-gray-300 shadow-sm">
        <Post
          isShare={postInfo.isShare}
          createDate={postInfo.createdAt}
          postBody={postInfo.body||''}
          postImage={postInfo.image||''}
          settingsIcon={faEllipsis}
          userName={postInfo.user.name}
          sharedPostBody={postInfo.sharedPost?.body||''}
          sharedPostCreatedDate={postInfo.sharedPost?.createdAt||''}
          sharedPostImage={postInfo.sharedPost?.image||''}
          sharedPostUser={postInfo.sharedPost?.user?.name||''}
          sharedPostUserImage={postInfo.sharedPost?.user?.photo||''}
          userImage={postInfo.user.photo}
        />
        <div className="flex items-center justify-between *:text-gray-500 *:font-semibold border-y border-gray-500 px-2 py-3 -mx-5">
          <div className="reactions flex items-center gap-2 *:hover:bg-gray-200 *:px-2 *:cursor-pointer *:rounded-xl *:transition-colors *:duration-300 ">
            <div className="emojie space-x-1">
              <FontAwesomeIcon icon={faHeart} />
              <span>{postInfo.likesCount}</span>
            </div>
            <div className="emojie space-x-1">
              <FontAwesomeIcon icon={faComment} />
              <span>{postInfo.commentsCount}</span>
            </div>
          </div>
          <div className="emojie space-x-1 hover:bg-gray-200 px-2 cursor-pointer rounded-xl transition-colors duration-300">
            <FontAwesomeIcon icon={faShare} />
            <span> {postInfo.sharesCount} share</span>
          </div>
        </div>

        <div className="comments mt-5 space-y-4">
          {postInfo.commentsCount > 0 ? (
            <CommentCard topComment={postInfo.topComment} />
          ) : (
              <>
                <p className="text-center text-sm font-medium">
                  No Comments Yet be The First to comment
                </p>
              </>
          )}
        </div>
      </div>
    </>
  );
}

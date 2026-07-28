import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CommentCard from "../CommentCard/CommentCard";
import { Link } from "react-router";

export default function Post({
  postId,
  userName,
  createDate,
  userImage,
  settingsIcon,
  postBody,
  postImage,
  isShare,
  sharedPostUser,
  sharedPostUserImage,
  sharedPostCreatedDate,
  sharedPostBody,
  sharedPostImage,
  sharedPostId,
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full overflow-hidden border-2 border-purple-200">
            <img
              src={userImage}
              alt={userName}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm text-gray-900 capitalize">
              {userName}
            </h4>
            <Link to={`/post/${postId}`} className="text-xs text-gray-500">
              {createDate
                ? new Date(createDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                : "Recently"}
            </Link>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>

      <figure>
        {postBody && (
          <figcaption className="text-sm text-gray-800 leading-relaxed">
            {postBody}
          </figcaption>
        )}
        {!isShare && postImage && (
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <img
              src={postImage}
              alt="Post attachment"
              className="w-full max-h-96 object-cover"
            />
          </div>
        )}
        {isShare && (
          <div className="border border-gray-300 rounded-xl p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full overflow-hidden border-2 border-purple-200">
                  <img
                    src={sharedPostUserImage}
                    alt={sharedPostUser}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 capitalize">
                    {sharedPostUser}
                  </h4>
                  <Link
                    to={`/post/${sharedPostId}`}
                    className="text-xs text-gray-500"
                  >
                    {sharedPostCreatedDate
                      ? new Date(sharedPostCreatedDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          },
                        )
                      : "Recently"}
                  </Link>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>

            <figure>
              <figcaption className="text-sm text-gray-800 leading-relaxed">
                {sharedPostBody}
              </figcaption>
            </figure>
            {sharedPostImage && (
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <img
                  src={sharedPostImage}
                  alt="Post attachment"
                  className="w-full max-h-96 object-cover"
                />
              </div>
            )}
          </div>
        )}
      </figure>
    </>
  );
}

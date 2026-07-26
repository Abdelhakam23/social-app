import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CommentCard from "../CommentCard/CommentCard";

export default function Post({
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
}) {
  return (
    <>
      
        <header className="flex items-center justify-between">
          <div className="poster-info flex items-center gap-2">
            <img
              src={userImage}
              className="size-10 rounded-full"
              alt="poster-photo"
            />
            <div>
              <h2 className="font-bold text-sm  -mb-1">{userName}</h2>
              <span className="text-xs -mt-2  text-gray-500">
                {new Date(createDate).toLocaleString()}
              </span>
            </div>
          </div>
          <button>
            <FontAwesomeIcon
              icon={settingsIcon}
              className="text-sm text-gray-500 cursor-pointer"
            />
          </button>
        </header>

        <figure>
          {postBody && (
            <figcaption className="text-2xl font-bold mb-3">
              {postBody}
            </figcaption>
          )}
          {!isShare && postImage && (
            <div className="rounded-2xl overflow-hidden ">
              <img
                className="h-100 w-full object-cover object-center hover:scale-110 transition-transform duration-300"
                src={postImage}
                alt="post-image"
              />
            </div>
          )}
          {isShare && (
            <div className="border border-gray-300 rounded-xl p-3">
              <header className="flex items-center justify-between">
                <div className="poster-info flex items-center gap-2 mb-4">
                  <img
                    src={sharedPostUserImage}
                    className="size-10 rounded-full"
                    alt="poster-photo"
                  />
                  <div>
                    <h2 className="font-bold text-sm  -mb-1">
                      {sharedPostUser}
                    </h2>
                    <span className="text-xs -mt-2  text-gray-500">
                      {new Date(sharedPostCreatedDate).toLocaleString()}
                    </span>
                  </div>
                </div>
              </header>

              <figure>
                <figcaption className="text-2xl font-semibold mb-3">
                  {sharedPostBody}
                </figcaption>
              </figure>
              {sharedPostImage && (
                <div className="rounded-2xl overflow-hidden ">
                  <img
                    className="h-100 w-full object-cover object-center hover:scale-110 transition-transform duration-300"
                    src={sharedPostImage}
                    alt="shared-post-image"
                  />
                </div>
              )}
            </div>
          )}
        </figure>
      
    </>
  );
}

import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CommentCard from "../CommentCard/CommentCard";

export default function PostCard() {
  return (
    <>
      <div className="post-card space-y-3 bg-white p-5 rounded-xl border border-gray-300 shadow-sm">
        <header className="flex items-center justify-between">
          <div className="poster-info flex items-center gap-2">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
              className="size-10 rounded-full"
              alt="poster-photo"
            />
            <div>
              <h2 className="font-bold text-sm  -mb-1">Sarah Johnson</h2>
              <span className="text-xs -mt-2  text-gray-500">
                Travel • 2h ago
              </span>
            </div>
          </div>
          <button>
            <FontAwesomeIcon
              icon={faEllipsis}
              className="text-sm text-gray-500 cursor-pointer"
            />
          </button>
        </header>

        <figure>
          <figcaption className="text-2xl font-bold mb-3">
            Exploring the mountains this weekend 🏔️
          </figcaption>
          <div className="rounded-2xl overflow-hidden ">
            <img
              className="h-100 w-full object-cover object-center hover:scale-110 transition-transform duration-300"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_d704ec7301_71cce83a949be37d.png"
              alt="post-image"
            />
          </div>
        </figure>
        <div className="flex items-center justify-between *:text-gray-500 *:font-semibold border-y border-gray-500 px-2 py-3 -mx-5">
          <div className="reactions flex items-center gap-2 *:hover:bg-gray-200 *:px-2 *:cursor-pointer *:rounded-xl *:transition-colors *:duration-300 ">
            <div className="emojie space-x-1">
              <FontAwesomeIcon icon={faHeart} />
              <span>124</span>
            </div>
            <div className="emojie space-x-1">
              <FontAwesomeIcon icon={faComment} />
              <span>18</span>
            </div>
          </div>
          <div className="comments">18 Comment</div>
        </div>

        <div className="comments mt-5 space-y-4">
                  <CommentCard />
                  <CommentCard/>
        </div>
      </div>
    </>
  );
}

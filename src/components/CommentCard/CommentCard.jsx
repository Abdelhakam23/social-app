import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormField from "../ui/formField/FormField";
import { useState } from "react";

export default function CommentCard({ comment }) {
  const [showReply, setShowReply] = useState(false);
  return (
    <>
      <div className="comment flex gap-3">
        <div className="commenter-img">
          <img
            src={comment.commentCreator.photo}
            className="size-10 rounded-full "
            alt=""
          />
        </div>
        <div className="comment w-full">
          <div className="comment-header flex justify-between items-start mb-2">
            <div className="info flex flex-col">
              <h3 className="font-semibold text-gray-700  text-sm">
                {" "}
                {comment.commentCreator.name}{" "}
              </h3>
              <time className="text-xs font-medium text-gray-500 ">
                {" "}
                {new Date(comment.createdAt).toLocaleString()}{" "}
              </time>
            </div>
            <FontAwesomeIcon
              icon={faEllipsis}
              className="cursor-pointer text-gray-500"
            />
          </div>
          <div className="comment-content leading-relaxed text-sm">
            <p>{comment.content}</p>
          </div>
          <div className="flex *:text-xs gap-3 *:text-gray-500 mt-3 *:hover:text-[#4f46e5] *:cursor-pointer">
            <div className="emojie space-x-1">
              <FontAwesomeIcon icon={faHeart} />
              <span>{comment.likes.length}</span>
            </div>
            <button
              onClick={() => setShowReply(!showReply)}
              className="transition-colors duration-300"
            >
              Reply
            </button>
          </div>
          <div className={`replies ${showReply ? "block" : "hidden"}`}>
            <FormField
              elementType={"input"}
              inputType={"text"}
              name={"reply"}
              placeholder={"Reply to this comment"}
              className={"w-full -mt-3 text-sm"}
              icon={faComment}
            />

            <div className="flex justify-end">
              <button className="bg-purple-600 text-white px-4 py-1 rounded-lg text-xs mt-2 cursor-pointer hover:bg-purple-700 transition-colors duration-300 ">
                Reply <FontAwesomeIcon icon={faComment} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

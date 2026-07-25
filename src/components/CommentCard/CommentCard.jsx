import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CommentCard() {
  return (
      <>
          <div className="comment flex gap-3">
               <div className="commenter-img">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
              className="size-10 rounded-full "
              alt=""
            />
          </div>
          <div className="comment">
            <div className="comment-header flex justify-between items-start mb-2">
              <div className="info flex gap-2 ">
                <h3 className="font-bold text-sm">Mike Chen</h3>
                <time className="text-xs font-medium text-muted ">1h ago</time>
              </div>
              <FontAwesomeIcon icon={faEllipsis} className="cursor-pointer text-gray-500" />
            </div>
            <div className="comment-content leading-relaxed text-sm">
              <p>
                This looks absolutely stunning! Which mountain range is this?
                I'm planning a similar trip next summer 🙌
              </p>
            </div>
            <div className="flex *:text-xs gap-3 *:text-gray-500 mt-3 *:hover:text-[#4f46e5] *:cursor-pointer">
              <div className="emojie space-x-1">
                <FontAwesomeIcon icon={faHeart} />
                <span>124</span>
              </div>
              <button className="transition-colors duration-300">Reply</button>
            </div>
          </div>
          </div>
     
    </>
  );
}

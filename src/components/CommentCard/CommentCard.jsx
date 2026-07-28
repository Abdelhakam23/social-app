import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormField from "../ui/formField/FormField";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Context/Auth.context";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

export default function CommentCard({ comment, postId }) {
  const [showReply, setShowReply] = useState(false);
  const { token } = useContext(AuthContext);
  const [replies, setReplies] = useState([]);

  async function getReplies() {
    if (!postId || !comment?._id) return;
    try {
      const options = {
        url: `https://route-posts.routemisr.com/posts/${postId}/comments/${comment._id}/replies`,
        method: "GET",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(options);
      if (data.success) {
        console.log("replies response:", data);
        const fetchedReplies =
          data.data?.replies || data.replies || data.data || [];
        setReplies(Array.isArray(fetchedReplies) ? fetchedReplies : []);
      }
    } catch (error) {
      console.log("Error fetching replies:", error);
    }
  }

  async function addReply(values) {
    if (!postId || !comment?._id) return;
    try {
      const options = {
        url: `https://route-posts.routemisr.com/posts/${postId}/comments/${comment._id}/replies`,
        method: "POST",
        headers: {
          token,
        },
        data: {
          content: values.reply,
        },
      };

      const { data } = await axios.request(options);
      if (data.success) {
        const newReply = data.data?.reply || data.reply;
        if (newReply) {
          setReplies((prev) => [
            newReply,
            ...(Array.isArray(prev) ? prev : []),
          ]);
        } else {
          getReplies();
        }
        formik.resetForm();
      }
    } catch (error) {
      console.log("Error adding reply:", error);
    }
  }

  useEffect(() => {
    getReplies();
  }, [postId, comment?._id]);

  const formik = useFormik({
    initialValues: {
      reply: "",
    },
    validationSchema: yup.object({
      reply: yup.string().required("Reply is required"),
    }),
    onSubmit: addReply,
  });

  const commentUser = comment?.commentCreator || comment?.user || {};
  const commentLikesCount = comment?.likes?.length || 0;
  const commentRepliesCount = comment?.repliesCount || replies?.length || 0;

  return (
    <div className="comment flex gap-3">
      <div className="commenter-img shrink-0">
        <img
          src={
            commentUser.photo ||
            "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png"
          }
          className="size-10 rounded-full object-cover"
          alt={commentUser.name || "User"}
        />
      </div>
      <div className="comment w-full">
        <div className="comment-header flex justify-between items-start mb-1">
          <div className="info flex flex-col">
            <h3 className="font-semibold text-gray-800 text-sm capitalize">
              {commentUser.name || "User"}
            </h3>
            <time className="text-[11px] font-medium text-gray-400">
              {comment?.createdAt
                ? new Date(comment.createdAt).toLocaleString()
                : ""}
            </time>
          </div>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="cursor-pointer text-gray-400 hover:text-gray-600"
          />
        </div>
        <div className="comment-content leading-relaxed text-sm text-gray-700">
          <p>{comment?.content}</p>
        </div>
        <div className="flex text-xs gap-3 text-gray-500 mt-2">
          <div className="emojie space-x-1 flex items-center hover:text-purple-600 cursor-pointer">
            <FontAwesomeIcon icon={faHeart} />
            <span>{commentLikesCount}</span>
          </div>
          <div className="emojie space-x-1 flex items-center hover:text-purple-600 cursor-pointer">
            <FontAwesomeIcon icon={faComment} />
            <span>{commentRepliesCount}</span>
          </div>
          <button
            onClick={() => setShowReply(!showReply)}
            className="hover:text-purple-600 transition-colors duration-300 font-medium cursor-pointer"
          >
            Reply
          </button>
        </div>

        {/* Render List of Replies */}
        {replies && replies.length > 0 ? (
          <div className="replies-list mt-3 space-y-3 pl-4 border-l-2 border-purple-100">
            {replies.map((reply) => {
              const replyUser =
                reply.commentCreator || reply.replyCreator || reply.user || {};
              return (
                <div
                  key={reply._id || reply.id}
                  className="reply flex gap-2.5 text-xs"
                >
                  <img
                    src={
                      replyUser.photo ||
                      "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png"
                    }
                    className="size-7 rounded-full object-cover shrink-0"
                    alt={replyUser.name || "User"}
                  />
                  <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 w-full space-y-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800 capitalize">
                        {replyUser.name || "User"}
                      </h4>
                      <time className="text-[10px] text-gray-400">
                        {reply.createdAt
                          ? new Date(reply.createdAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : ""}
                      </time>
                    </div>
                    <p className="text-gray-700 leading-normal">
                      {reply.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}

        {/* Reply Input Form */}
        <form
          onSubmit={formik.handleSubmit}
          className={`replies-form mt-3 ${showReply ? "block" : "hidden"}`}
        >
          <FormField
            elementType={"input"}
            inputType={"text"}
            name={"reply"}
            placeholder={"Reply to this comment..."}
            className={"w-full text-xs"}
            icon={faComment}
            value={formik.values.reply}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.reply}
            touched={formik.touched.reply}
            id="reply"
          />

          <div className="flex justify-end mt-1">
            <button
              type="submit"
              className="bg-purple-600 text-white px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer hover:bg-purple-700 transition-colors flex items-center gap-1.5"
            >
              <span>Reply</span>
              <FontAwesomeIcon icon={faComment} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

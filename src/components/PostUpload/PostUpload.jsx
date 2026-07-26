import React from "react";
import FormField from "../ui/formField/FormField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function PostUpload() {
  return (
    <section className="max-w-2xl mx-auto pt-8 ">
      <div className="container">
        <div className="post-upload bg-white p-5 border border-gray-400/30 rounded-lg">
          <header className="flex items-center gap-2">
            <div className="rounded-full size-10 overflow-hidden border-2 border-blue-500/40 shrink-0 flex ">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="author-img"
                className="w-full h-full object-cover"
              />
            </div>
            <FormField
              elementType={"textarea"}
              placeholder={"What's in your mind"}
              className={`resize-none`}
            />
          </header>
          <div className="mt-4 border-t pt-2 border-gray-500/40 flex  items-center justify-between">
            <div>
              <label
                htmlFor="postUpload"
                className="space-x-1 text-gray-700 bg-gray-500/20 px-3 py-1 rounded-lg  font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer "
              >
                <FontAwesomeIcon icon={faImage} />
                <span>Photo</span>
              </label>
              <input type="file" className="hidden " id="postUpload" />
            </div>

            <button
              type="submit"
              className="px-5 py-1 bg-linear-to-r from-blue-600 to-blue-400 rounded-lg text-white font-bold space-x-1 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <span>Post</span>

              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

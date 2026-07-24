import { faCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SignUpHero() {
  const features = [
    {
      icon: faCheck,
      text: "Create and share posts with your network ",
    },
     {
      icon: faCheck,
      text: "Comment and engage with the community  ",
    },
      {
      icon: faCheck,
      text: "Personalize your profile and settings  ",
    },
  ];

  return (
    <div className="flex flex-col items-start md:items-center lg:items-end justify-center ">
      <div >

      <div className="logo flex flex-col lg:block items-start md:items-center  ">
        <span className="text-2xl text-white bg-linear-to-r from-[#4F46E5] to-[#7C3AED] p-3  rounded-xl shadow-sm mb-2 ">
          <FontAwesomeIcon icon={faUsers} />
        </span>
        <h1 className="text-5xl max-w-xl text-start md:text-center lg:text-start  font-bold my-3">
          Join the community <span className="text-[#4F46E5]"> of creators. </span>{" "}
        </h1>
      </div>
      <div className="description my-5  ">
        <p className="max-w-76 mx-0 md:mx-auto md:text-center lg:mx-0 text-gray-500 text-start lg:text-start text-lg">
          Share your stories, connect with friends, and discover what's
          happening around you — all in one place.
        </p>
      </div>
      <div className="features ">
        <ul className="space-y-3 flex flex-col items-start mx-0 md:mx-auto w-fit lg:mx-0 lg:block">
          {
              features.map((feature,index) => <li key={index} className="space-x-2 flex items-center">
                <span className="w-8 h-8 bg-[#e2e2f4] rounded-full flex items-center justify-center text-[#4F45E5] text-sm">
              <FontAwesomeIcon icon={feature.icon} />
              </span>
              <span>{feature.text }</span>
            </li>) 
          }
        </ul>
      </div>
      </div>
    </div>
  );
}

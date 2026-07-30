import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faArrowLeft,
  faCircleCheck,
  faRocket,
  faComments,
  faShieldHalved,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

export default function AuthHero() {
  const features = [
    {
      icon: faRocket,
      title: "Share & Inspire",
      text: "Create and publish rich posts with your network in real time.",
      bg: "bg-purple-100 text-purple-600 border-purple-200",
    },
    {
      icon: faComments,
      title: "Connect & Engage",
      text: "Comment, like, and build meaningful relationships with fellow creators.",
      bg: "bg-indigo-100 text-indigo-600 border-indigo-200",
    },
    {
      icon: faShieldHalved,
      title: "Personal & Secure",
      text: "Enjoy personalized profile settings, bookmarks, and privacy protection.",
      bg: "bg-emerald-100 text-emerald-600 border-emerald-200",
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col justify-center p-6 lg:p-8">
      {/* Back to Landing Page Button */}
      <div className="mb-6">
        <Link
          to="/welcome"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-700 hover:text-purple-900 bg-purple-100/70 hover:bg-purple-200/80 border border-purple-200 px-4 py-2 rounded-full transition-all duration-200 shadow-2xs hover:shadow-xs group cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-xs group-hover:-translate-x-1 transition-transform" />
          <span>Back to Landing Page</span>
        </Link>
      </div>

      {/* Brand & Heading */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-purple-50 border border-purple-200/80 shadow-2xs">
          <span className="w-7 h-7 rounded-lg bg-linear-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-xs shadow-xs">
            <FontAwesomeIcon icon={faUsers} />
          </span>
          <span className="text-sm font-bold text-slate-800 tracking-tight">SocialHub</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Join the vibrant community of <span className="bg-linear-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">creators.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Share your stories, connect with friends, and discover what's happening around you — all in one modern platform.
        </p>
      </div>

      {/* Feature Highlights Grid */}
      <div className="mt-8 space-y-3.5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-xs border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-purple-200 transition-all duration-200 group"
          >
            <div className={`w-10 h-10 rounded-xl ${feature.bg} border flex items-center justify-center text-base shrink-0 group-hover:scale-105 transition-transform`}>
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-normal">
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Community Social Proof Banner */}
      <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2.5 overflow-hidden">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
              alt="User 1"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
              alt="User 2"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
              alt="User 3"
            />
          </div>
          <div className="text-xs font-semibold text-slate-700">
            <span>Join 10,000+ creators</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>1.2k creators online now</span>
        </div>
      </div>
    </div>
  );
}

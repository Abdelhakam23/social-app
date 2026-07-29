import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faBookmark,
  faCalendarDays,
  faFire,
  faGear,
  faUsers,
  faBell,
  faWandMagicSparkles,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const pageConfigs = {
  saved: {
    icon: faBookmark,
    title: "Saved Posts",
    subtitle: "Your bookmarked content, all in one place",
    description:
      "Save posts you love and come back to them anytime. Build your personal collection of inspiration.",
    gradient: "from-amber-500 to-orange-600",
    accentBg: "bg-amber-50",
    accentText: "text-amber-600",
    accentBorder: "border-amber-200",
    shadowColor: "shadow-amber-200",
    features: [
      "Organize saved posts into collections",
      "Quick access to your favorite content",
      "Share collections with friends",
    ],
  },
  events: {
    icon: faCalendarDays,
    title: "Events",
    subtitle: "Discover what's happening around you",
    description:
      "Stay connected with meetups, conferences, and gatherings from your community. Never miss an event again.",
    gradient: "from-blue-500 to-cyan-500",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
    accentBorder: "border-blue-200",
    shadowColor: "shadow-blue-200",
    features: [
      "Browse local and online events",
      "RSVP and invite friends",
      "Get reminders for upcoming events",
    ],
  },
  trending: {
    icon: faFire,
    title: "Trending",
    subtitle: "See what's hot right now",
    description:
      "Discover the most popular posts, hashtags, and topics that everyone is talking about.",
    gradient: "from-rose-500 to-pink-600",
    accentBg: "bg-rose-50",
    accentText: "text-rose-600",
    accentBorder: "border-rose-200",
    shadowColor: "shadow-rose-200",
    features: [
      "Real-time trending topics",
      "Popular hashtags and posts",
      "Personalized trend recommendations",
    ],
  },
  settings: {
    icon: faGear,
    title: "Settings",
    subtitle: "Customize your experience",
    description:
      "Manage your account preferences, privacy settings, and notification preferences all from one place.",
    gradient: "from-gray-600 to-slate-700",
    accentBg: "bg-gray-50",
    accentText: "text-gray-600",
    accentBorder: "border-gray-200",
    shadowColor: "shadow-gray-200",
    features: [
      "Account & privacy settings",
      "Notification preferences",
      "Theme customization",
    ],
  },
  messages: {
    icon: faEnvelope,
    title: "Messages",
    subtitle: "Chat with your friends and community",
    description:
      "Send and receive direct messages, create group chats, and stay connected with the people who matter most.",
    gradient: "from-teal-500 to-emerald-600",
    accentBg: "bg-teal-50",
    accentText: "text-teal-600",
    accentBorder: "border-teal-200",
    shadowColor: "shadow-teal-200",
    features: [
      "Real-time direct messaging",
      "Group chats with your community",
      "Share media, files & reactions",
    ],
  },
};

export default function ComingSoon({ pageType = "saved" }) {
  const config = pageConfigs[pageType] || pageConfigs.saved;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto max-w-7xl px-4 mt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block">
            <LeftSidebar />
          </div>

          {/* Main Content */}
          <main className="min-w-0 space-y-5">
            {/* Hero Card */}
            <div className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden">
              {/* Gradient Banner */}
              <div
                className={`h-40 bg-linear-to-r ${config.gradient} relative overflow-hidden`}
              >
                {/* Decorative patterns */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-8 size-24 border-2 border-white rounded-full" />
                  <div className="absolute top-12 right-16 size-16 border-2 border-white rounded-full" />
                  <div className="absolute -bottom-4 left-1/3 size-32 border-2 border-white rounded-full" />
                  <div className="absolute top-2 right-1/4 size-8 border-2 border-white rounded-full" />
                  <div className="absolute bottom-8 right-8 size-20 border-2 border-white rounded-full" />
                </div>
                {/* Floating Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/30 animate-bounce-slow">
                    <FontAwesomeIcon
                      icon={config.icon}
                      className="text-white text-3xl drop-shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-bold mb-4 border border-purple-200">
                  <FontAwesomeIcon icon={faRocket} className="text-[10px]" />
                  COMING SOON
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {config.title}
                </h1>
                <p className="text-sm text-gray-500 mb-1 font-medium">
                  {config.subtitle}
                </p>
                <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed mt-3">
                  {config.description}
                </p>
              </div>
            </div>

            {/* Features Preview */}
            <div className="bg-white rounded-2xl border border-gray-300 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-5">
                <FontAwesomeIcon
                  icon={faWandMagicSparkles}
                  className="text-purple-600 text-sm"
                />
                <h3 className="font-bold text-gray-800 text-sm">
                  What to expect
                </h3>
              </div>

              <div className="space-y-3">
                {config.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border ${config.accentBorder} ${config.accentBg} transition-all duration-300 hover:shadow-sm hover:scale-[1.01]`}
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animation: "fadeSlideIn 0.5s ease-out forwards",
                    }}
                  >
                    <div
                      className={`size-8 rounded-lg bg-linear-to-br ${config.gradient} flex items-center justify-center shadow-sm shrink-0`}
                    >
                      <span className="text-white text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stay Updated Card */}
            <div className="bg-linear-to-r from-purple-700 via-purple-600 to-indigo-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
              {/* Decorative dots */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="grid grid-cols-4 gap-2 p-3">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="size-2 rounded-full bg-white" />
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faBell} className="text-sm" />
                  <h3 className="font-bold text-sm">Stay Updated</h3>
                </div>
                <p className="text-purple-200 text-xs leading-relaxed mb-4 max-w-sm">
                  We're actively working on bringing you this feature.
                  Check back soon for updates!
                </p>
                <div className="flex items-center gap-3">
                  <button className="px-5 py-2 bg-white text-purple-700 text-xs font-bold rounded-lg hover:bg-purple-50 transition-colors cursor-pointer shadow-sm">
                    Notify Me
                  </button>
                  <button className="px-5 py-2 bg-white/10 text-white text-xs font-bold rounded-lg hover:bg-white/20 transition-colors cursor-pointer border border-white/20">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <RightSidebar />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

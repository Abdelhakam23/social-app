import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faHouse,
  faArrowLeft,
  faTriangleExclamation,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

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
            {/* Hero Card 404 */}
            <div className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden">
              {/* Gradient Banner */}
              <div className="h-44 bg-linear-to-r from-purple-700 via-purple-600 to-indigo-600 relative overflow-hidden">
                {/* Decorative patterns */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-8 size-24 border-2 border-white rounded-full" />
                  <div className="absolute top-12 right-16 size-16 border-2 border-white rounded-full" />
                  <div className="absolute -bottom-4 left-1/3 size-32 border-2 border-white rounded-full" />
                  <div className="absolute top-2 right-1/4 size-8 border-2 border-white rounded-full" />
                  <div className="absolute bottom-8 right-8 size-20 border-2 border-white rounded-full" />
                </div>

                {/* Floating Badge & Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="size-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/30 animate-bounce-slow">
                    <FontAwesomeIcon
                      icon={faCompass}
                      className="text-white text-3xl drop-shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold mb-3 border border-red-200">
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="text-[10px]"
                  />
                  ERROR 404
                </div>

                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                  Page Not Found
                </h1>
                <p className="text-sm text-gray-500 mb-2 font-medium">
                  Looks like you've wandered into unknown territory.
                </p>
                <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed mb-6">
                  The link you followed may be broken, or the page may have been removed or renamed.
                </p>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Go Back
                  </button>
                  <Link
                    to="/"
                    className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faHouse} />
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>

            {/* Suggested Links Card */}
            <div className="bg-white rounded-2xl border border-gray-300 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <FontAwesomeIcon
                  icon={faWandMagicSparkles}
                  className="text-purple-600 text-sm"
                />
                <h3 className="font-bold text-gray-800 text-sm">
                  Quick links that might help
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  to="/"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-purple-100 bg-purple-50/50 hover:bg-purple-50 transition-all group"
                >
                  <span className="text-xs font-semibold text-purple-700">
                    Home Feed
                  </span>
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="text-purple-400 group-hover:translate-x-1 transition-transform text-xs"
                  />
                </Link>

                <Link
                  to="/trending"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all group"
                >
                  <span className="text-xs font-semibold text-gray-700">
                    Trending Posts
                  </span>
                  <FontAwesomeIcon
                    icon={faCompass}
                    className="text-gray-400 group-hover:translate-x-1 transition-transform text-xs"
                  />
                </Link>
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
import React, { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faRocket,
  faComments,
  faBell,
  faBookmark,
  faFire,
  faHeart as faHeartSolid,
  faShareNodes,
  faArrowRight,
  faCheckCircle,
  faShieldHalved,
  faWandMagicSparkles,
  faChevronDown,
  faChevronUp,
  faRightToBracket,
  faUserPlus,
  faCheck,
  faCircleCheck,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular, faComment as faCommentRegular } from "@fortawesome/free-regular-svg-icons";

export default function Welcome() {
  // State for interactive demo post card on the landing page
  const [demoLiked, setDemoLiked] = useState(false);
  const [demoLikesCount, setDemoLikesCount] = useState(42);
  const [demoComments, setDemoComments] = useState([
    { id: 1, name: "Alex Rivers", text: "SocialHub design looks super clean! 🔥" },
    { id: 2, name: "Elena Rostova", text: "Excited to connect with everyone here!" },
  ]);
  const [demoInput, setDemoInput] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);

  const handleDemoLike = () => {
    if (demoLiked) {
      setDemoLiked(false);
      setDemoLikesCount((prev) => prev - 1);
    } else {
      setDemoLiked(true);
      setDemoLikesCount((prev) => prev + 1);
    }
  };

  const handleDemoAddComment = (e) => {
    e.preventDefault();
    if (!demoInput.trim()) return;
    setDemoComments((prev) => [
      ...prev,
      { id: Date.now(), name: "You (Guest)", text: demoInput.trim() },
    ]);
    setDemoInput("");
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const features = [
    {
      icon: faRocket,
      title: "Share & Create",
      desc: "Express your ideas, share rich media posts, and publish thoughts with a global audience effortless.",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: faComments,
      title: "Real-time Engagement",
      desc: "Connect through comments, instant likes, and interactive discussions built for vibrant communities.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: faBell,
      title: "Smart Notifications",
      desc: "Stay informed instantly when someone interacts with your posts, comments, or profile updates.",
      gradient: "from-amber-500 to-rose-500",
    },
    {
      icon: faShieldHalved,
      title: "Personalized Profiles",
      desc: "Customize your avatar, bio, tags, and showcase your post history with elegant, clean design.",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: faBookmark,
      title: "Bookmarks & Saved Posts",
      desc: "Save posts and key insights with one click to easily access your favorite content whenever you return.",
      gradient: "from-violet-600 to-purple-600",
    },
    {
      icon: faFire,
      title: "Trending & Events",
      desc: "Explore what's happening around the world, discover top creators, and stay ahead of trending topics.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Create Your Free Account",
      desc: "Sign up in seconds with basic details. No complicated procedures or long forms.",
      icon: faUserPlus,
    },
    {
      step: "02",
      title: "Customize Your Profile",
      desc: "Add your picture, bio, and interests to highlight your unique voice and digital persona.",
      icon: faWandMagicSparkles,
    },
    {
      step: "03",
      title: "Connect, Post & Grow",
      desc: "Start sharing posts, liking content, commenting, and building your vibrant social network.",
      icon: faUsers,
    },
  ];

  const faqs = [
    {
      question: "Is SocialHub completely free to use?",
      answer: "Yes! SocialHub is 100% free for creators, developers, and users everywhere. You can create an account, post content, engage, and connect without any subscription fees.",
    },
    {
      question: "Can I access SocialHub on mobile devices?",
      answer: "Absolutely! SocialHub is fully responsive and optimized for seamless experience across mobile phones, tablets, and desktop computers.",
    },
    {
      question: "How do I save posts to read later?",
      answer: "You can save any post by clicking the bookmark icon. All your saved posts will be neatly organized in your personal 'Saved Posts' section.",
    },
    {
      question: "Is my personal data and profile secure?",
      answer: "Yes, we prioritize user security with encrypted authentication tokens and strict privacy protocols to keep your information safe.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-purple-500 selection:text-white">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <Link to="/welcome" className="flex items-center gap-2.5 group">
            <span className="w-10 h-10 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-lg shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-200">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            <span className="text-xl font-bold bg-linear-to-r from-purple-700 via-indigo-600 to-purple-900 bg-clip-text text-transparent tracking-tight">
              SocialHub
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-purple-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-purple-600 transition-colors">How It Works</a>
            <a href="#demo" className="hover:text-purple-600 transition-colors">Live Preview</a>
            <a href="#faq" className="hover:text-purple-600 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/signin"
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-purple-600 border border-slate-300 hover:border-purple-300 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faRightToBracket} className="text-xs" />
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-sm font-semibold text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl shadow-md shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faUserPlus} className="text-xs" />
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Decorative ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-300/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-xs font-semibold tracking-wide uppercase shadow-xs animate-bounce">
              <FontAwesomeIcon icon={faWandMagicSparkles} className="text-purple-600" />
              Welcome to the Next Generation Social Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Connect, Share & Discover with <span className="bg-linear-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">SocialHub</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Share your story, engage with vibrant creators, publish posts, and explore real-time community discussions — all in one modern, beautiful app.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Join SocialHub Now</span>
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/signin"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                Already have an account? Sign In
              </Link>
            </div>

            {/* Quick Highlights */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-500" />
                <span>100% Free Access</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-500" />
                <span>No Credit Card Needed</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-500" />
                <span>Instant Account Setup</span>
              </div>
            </div>
          </div>

          {/* 3. Live Interactive Demo Post Section */}
          <div id="demo" className="mt-16 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs font-bold tracking-widest text-purple-600 uppercase bg-purple-100 px-3 py-1 rounded-full">
                Interactive Experience
              </span>
              <h2 className="text-xl font-bold text-slate-800 mt-2">
                Try interacting with a SocialHub post right here!
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-purple-100 shadow-xl shadow-purple-500/5 overflow-hidden transition-all duration-300 hover:shadow-purple-500/10">
              {/* Post Header */}
              <div className="p-5 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-linear-to-tr from-purple-500 to-indigo-500 p-0.5 shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                      alt="Creator avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-slate-900 text-sm">Sarah Jenkins</h3>
                      <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 text-xs" />
                    </div>
                    <p className="text-xs text-slate-400">@sarah_dev • 2 hours ago</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-semibold border border-purple-100">
                  Featured Post
                </span>
              </div>

              {/* Post Content */}
              <div className="p-5 space-y-4">
                <p className="text-slate-700 text-sm leading-relaxed">
                  Building responsive, high-performance web applications with clean design systems is super rewarding! Welcome to everyone joining <strong>SocialHub</strong> today. What are you building this week? 🚀✨
                </p>

                <div className="rounded-xl overflow-hidden max-h-72 border border-slate-100 bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                    alt="Community collaboration"
                    className="w-full h-full object-cover opacity-95 hover:scale-102 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Post Stats & Actions */}
              <div className="px-5 py-3 bg-slate-50/60 border-t border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>❤️ {demoLikesCount} Likes</span>
                <span>💬 {demoComments.length} Comments</span>
              </div>

              <div className="px-5 py-2.5 flex items-center justify-around border-b border-slate-100 text-sm font-medium">
                <button
                  onClick={handleDemoLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all cursor-pointer ${
                    demoLiked ? "text-rose-600 bg-rose-50 font-bold" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <FontAwesomeIcon icon={demoLiked ? faHeartSolid : faHeartRegular} className={demoLiked ? "text-rose-500 animate-pulse" : ""} />
                  <span>{demoLiked ? "Liked" : "Like"}</span>
                </button>

                <button className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-all cursor-pointer">
                  <FontAwesomeIcon icon={faCommentRegular} />
                  <span>Comment</span>
                </button>

                <button className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-all cursor-pointer">
                  <FontAwesomeIcon icon={faShareNodes} />
                  <span>Share</span>
                </button>
              </div>

              {/* Interactive Demo Comments */}
              <div className="p-5 bg-slate-50/40 space-y-3">
                {demoComments.map((c) => (
                  <div key={c.id} className="flex gap-2.5 text-xs">
                    <div className="w-7 h-7 rounded-full bg-purple-200 text-purple-700 font-bold flex items-center justify-center shrink-0">
                      {c.name.charAt(0)}
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex-1">
                      <span className="font-bold text-slate-900 block">{c.name}</span>
                      <span className="text-slate-600 mt-0.5 block">{c.text}</span>
                    </div>
                  </div>
                ))}

                {/* Comment Input */}
                <form onSubmit={handleDemoAddComment} className="flex items-center gap-2 pt-2">
                  <input
                    type="text"
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                    placeholder="Type a comment to test..."
                    className="flex-1 px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Post</span>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-[10px]" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section id="features" className="py-20 bg-white border-y border-slate-200/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase bg-purple-100 px-3.5 py-1 rounded-full">
              Platform Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Designed for simple, meaningful connections
            </h2>
            <p className="text-slate-600 text-base">
              SocialHub provides everything you need to connect with people, share ideas, and build your profile seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${item.gradient} text-white flex items-center justify-center text-xl shadow-md mb-5 group-hover:scale-110 transition-transform`}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works (Instructions) */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase bg-purple-100 px-3 py-1 rounded-full">
              Simple Instructions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-slate-600 text-base">
              Joining SocialHub takes less than a minute. Here is how you can jump right in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all relative flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center text-xl font-bold mb-6">
                  <FontAwesomeIcon icon={s.icon} />
                </div>

                <span className="text-4xl font-black text-purple-200 absolute top-6 right-6">
                  {s.step}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion Section */}
      <section id="faq" className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase bg-purple-100 px-3 py-1 rounded-full">
              Questions & Answers
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-800 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base">{faq.question}</span>
                  <FontAwesomeIcon
                    icon={activeFaq === index ? faChevronUp : faChevronDown}
                    className="text-purple-600 text-sm"
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Call to Action Banner */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to join the SocialHub community?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Create your account today and start sharing your journey with creators worldwide.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-3.5 font-bold text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-purple-500/30 transition-all flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faUserPlus} />
              Create Free Account
            </Link>
            <Link
              to="/signin"
              className="px-8 py-3.5 font-bold text-slate-200 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faRightToBracket} />
              Sign In to Account
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="py-8 bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-purple-600 flex items-center justify-center text-white text-xs font-bold">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            <span className="font-bold text-white text-sm">SocialHub</span>
            <span>• Connect & Empower</span>
          </div>

          <p>© {new Date().getFullYear()} SocialHub. All rights reserved.</p>

          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/signin" className="hover:text-white transition-colors">Sign In</Link>
            <Link to="/signup" className="hover:text-white transition-colors">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

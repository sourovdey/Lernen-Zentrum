import React from 'react';
import { Link } from "react-router-dom";
import hero from "../../assets/Hero.svg";


export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] border-b border-gray-300 flex items-start lg:items-center font-poppins overflow-hidden bg-[#f8fafc] py-10 lg:py-0">

      {/* 🔲 GRID BACKGROUND (very subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px] opacity-30"></div>

      {/* 🌈 MULTI GLOW (like screenshot) */}
      <div className="absolute top-0 right-0 w-125 h-100 bg-blue-300/30 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-125 h-100 bg-purple-300/30 blur-[120px]"></div>

      {/* CONTENT */}
      <div className="z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT */}
          <div className="flex-1 space-y-6 text-center lg:text-left">

            <p className="text-sm font-semibold text-purple-600">
              Speak German – confidently and fluently
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
              A Better Way to {" "}
              <span className="text-purple-600">Learn German</span>
            </h1>

            <p className="text-gray-600 max-w-lg">
              Join a growing German learner community where you can practice speaking, improve your skills, and stay motivated with others.
A dedicated Discord space built for real interaction, learning, and support.
            </p>

            {/* BUTTON */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">

              <Link to="/memberships" className="bg-[#0f172a] cursor-pointer text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#1e293b] transition">
                Join Community
              </Link>

              <Link to="/courses" className="bg-white cursor-pointer border border-gray-300 px-6 py-3 rounded-full font-medium shadow-sm hover:bg-gray-100 transition">
                Get Started
              </Link>

            </div>

            {/* <p className="text-xs text-gray-500 pt-2">
              বাংলাদেশের বাইরের নাম্বার দিয়ে এনরোল করলে 1,200 টাকা
            </p> */}

          </div>

          {/* RIGHT */}
          <div className="flex-1 w-full">


            <img
              src={hero}
              alt="Hero Image"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
            />
                        

          </div>

        </div>
      </div>
    </section>
  );
}
"use client";
import Link from "next/link";
import React, { useState } from "react";
export default function Topbar({ onHamburgerClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [recentJobs, setRecentJobs] = useState([
    // Example recently viewed jobs
    { id: 1, title: "Frontend Developer", company: "Google" },
    { id: 2, title: "Backend Engineer", company: "Amazon" },
    { id: 3, title: "Data Scientist", company: "Meta" },
    { id: 4, title: "DevOps Engineer", company: "Microsoft" },
  ]);

  return (
    <div className="flex flex-row items-center justify-between px-5  shadow-xl font-poppins">
      {/* Hamburger Icon for smaller screens */}
      <button
        className="md:hidden"
        onClick={onHamburgerClick}
        aria-label="Toggle Sidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Title */}
      <h1 className="text-lg font-bold basis-full md:basis-1/4 text-center md:text-left ">
        JobFound
      </h1>

      {/* Extra Content: Evenly spread on larger screens */}
      <div className="hidden md:flex basis-3/4 items-center justify-evenly">
        <button className="flex items-center gap-2 group">
          <h1 className="text-lg font-bold group-hover:underline group-hover:underline-offset-4 group-hover:decoration-2">
            Events
          </h1>
          {/* Down Arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 512"
            className="h-6 w-6 p-1 transform scale-x-125  transition-transform duration-200 group-hover:rotate-180"
          >
            <path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z" />
          </svg>
        </button>

        <Link href="/" className="text-lg font-bold">
          <h1 className="hover:underline hover:underline-offset-4 hover:decoration-2">
            Jobs
          </h1>
        </Link>
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="flex items-center gap-2 group py-3 md:py-4 lg:py-5">
            <h1 className="text-lg font-bold group-hover:underline group-hover:underline-offset-4 group-hover:decoration-2">
              Recently Viewed
            </h1>
            {/* Down Arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 360 512"
              className="h-6 w-6 p-1 transform scale-x-125 transition-transform duration-200 group-hover:rotate-180"
            >
              <path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z" />
            </svg>
          </button>

          {/* Dropdown Box */}
          {isHovered && (
            <div className="absolute top-full pt-2 left-0 w-80 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
              <div className="p-4 grid grid-cols-2 gap-4">
                {recentJobs.map((job, index) => (
                  <div
                    key={index}
                    className="p-2 border rounded-md hover:shadow-md transition-shadow"
                  >
                    <h2 className="text-sm font-bold">{job.title}</h2>
                    <p className="text-xs text-gray-500">{job.company}</p>
                  </div>
                ))}
              </div>
              <button className="w-full p-2 text-center text-blue-600 hover:underline">
                View More
              </button>
            </div>
          )}
        </div>

        {/* Bell Icon */}
        <button aria-label="Notifications" className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0h6z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

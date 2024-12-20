"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}
      >
        <div className="flex flex-1 relative">
          {/* Sidebar Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
              onClick={closeSidebar}
            ></div>
          )}

          {/* Sidebar */}
          <div
            className={`fixed z-20 top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
          >
            <Sidebar closeSidebar={closeSidebar} />
          </div>

          {/* Main content */}
          <div className="flex flex-col flex-1">
            {/* Topbar */}
            <Topbar onHamburgerClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="p-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}

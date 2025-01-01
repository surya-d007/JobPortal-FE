"use client";
import Script from "next/script";
import { useState } from "react";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1280785045224988"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased flex flex-col h-screen`}
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
            <div className="bg-[#ECEBFF] px-4 lg:px-10 font-poppins ">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

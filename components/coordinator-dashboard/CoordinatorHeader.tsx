"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Search, Bell, User } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { FONT_FAMILY } from "@/theme";

const CoordinatorHeader: React.FC = () => {
  const router = useRouter();

  return (
    <div
      className="border-b border-gray-200 px-6 py-4 flex items-center justify-between"
      style={{
        fontFamily: FONT_FAMILY,
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Left Side - Welcome Message */}
      <div>
        <h1
          className="text-2xl font-bold text-gray-900 mb-1"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Hello, Dr. Emily Watson 👋
        </h1>
        <p
          className="text-sm text-gray-500"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Welcome back to your dashboard
        </p>
      </div>

      {/* Right Side - Search, Notifications, Profile */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search students, classes..."
            className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-64 text-sm"
            style={{
              fontFamily: FONT_FAMILY,
            }}
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Picture */}
        <button
          onClick={() => router.push("/coordinator-dashboard/profile")}
          className="w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all cursor-pointer"
        >
          <ImageWithFallback
            src="/images/avatars/tutor-profile.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="w-full h-full object-cover"
            fallback={
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <User size={20} className="text-gray-600" />
              </div>
            }
          />
        </button>
      </div>
    </div>
  );
};

export default CoordinatorHeader;


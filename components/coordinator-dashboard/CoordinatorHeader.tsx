"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Search, Bell, User, Menu, X } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { FONT_FAMILY } from "@/theme";

interface CoordinatorHeaderProps {
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

const CoordinatorHeader: React.FC<CoordinatorHeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const router = useRouter();

  return (
    <div
      className="border-b border-gray-200 pl-20 md:pl-6 pr-4 md:pr-6 py-3 md:py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 relative"
      style={{
        fontFamily: FONT_FAMILY,
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Mobile Menu Button - positioned relative to header */}
      {setIsMobileMenuOpen && (
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden absolute top-3 left-3 z-10 p-2 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
          style={{ fontFamily: FONT_FAMILY }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={20} className="text-gray-700" />
          ) : (
            <Menu size={20} className="text-gray-700" />
          )}
        </button>
      )}
      {/* Left Side - Welcome Message */}
      <div className="w-full md:w-auto flex-shrink-0">
        <h1
          className="text-lg md:text-2xl font-bold text-gray-900 mb-0.5 md:mb-1 leading-tight"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Hello, Dr. Emily Watson 👋
        </h1>
        <p
          className="text-xs md:text-sm text-gray-500 leading-tight"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Welcome back to your dashboard
        </p>
      </div>

      {/* Right Side - Search, Notifications, Profile */}
      <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
        {/* Search Bar */}
        <div className="relative flex-1 md:flex-initial min-w-0">
          <Search
            size={16}
            className="absolute left-2.5 md:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search students, classes..."
            className="pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-64 text-xs md:text-sm"
            style={{
              fontFamily: FONT_FAMILY,
            }}
          />
        </div>

        {/* Notifications */}
        <button className="relative p-1.5 md:p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
          <Bell size={18} className="md:w-5 md:h-5 text-gray-600" />
          <span className="absolute top-1 right-1 md:top-1.5 md:right-1.5 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Picture */}
        <button
          onClick={() => router.push("/coordinator-dashboard/profile")}
          className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all cursor-pointer flex-shrink-0"
        >
          <ImageWithFallback
            src="/images/avatars/tutor-profile.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="w-full h-full object-cover"
            fallback={
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <User size={18} className="md:w-5 md:h-5 text-gray-600" />
              </div>
            }
          />
        </button>
      </div>
    </div>
  );
};

export default CoordinatorHeader;


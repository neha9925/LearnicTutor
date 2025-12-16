"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CoordinatorSidebar from "@/components/coordinator-dashboard/CoordinatorSidebar";
import { Search, Bell, User, Edit2, Users, IndianRupee, Menu, X } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { FONT_FAMILY, colors } from "@/theme";

const CoordinatorProfilePage: React.FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <CoordinatorSidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden w-full">
        {/* Header */}
        <div
          className="border-b border-gray-200 pl-20 md:pl-6 pr-4 md:pr-6 py-3 md:py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 flex-shrink-0 relative"
          style={{
            fontFamily: FONT_FAMILY,
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Mobile Menu Button */}
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
          {/* Left Side - Title */}
          <div className="w-full md:w-auto flex-shrink-0">
            <h1
              className="text-lg md:text-2xl font-bold text-gray-900"
              style={{
                fontFamily: FONT_FAMILY,
              }}
            >
              Coordinator Profile
            </h1>
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

        {/* Main Content */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1">
          <div className="max-w-6xl mx-auto">
            {/* Profile Header Section */}
            <div className="bg-white rounded-lg border border-gray-200 border-t-4 p-4 md:p-6 mb-4 md:mb-6" style={{ borderTopColor: colors.brand.primarySoft }}>
              <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 w-full md:w-auto">
                  {/* Profile Picture */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src="/images/avatars/tutor-profile.jpg"
                      alt="Jasmin smith"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      fallback={
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <User size={40} className="md:w-12 md:h-12 text-gray-600" />
                        </div>
                      }
                    />
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 min-w-0">
                    <h2
                      className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      Jasmin smith
                    </h2>
                    <div className="mb-2 md:mb-3">
                      <span
                        className="text-sm md:text-base font-medium"
                        style={{
                          color: colors.brand.primarySoft,
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        Advanced Mathematics & Statistics
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                      <Users size={16} className="md:w-[18px] md:h-[18px]" style={{ color: colors.brand.primarySoft }} />
                      <span
                        className="text-xs md:text-sm text-gray-500"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        2,450 Students
                      </span>
                    </div>
                    <p
                      className="text-xs md:text-sm text-gray-500 leading-relaxed"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      Passionate educator with 15+ years experience in advanced mathematics. Helping students excel in competitive exams and academic goals.
                    </p>
                  </div>
                </div>

                {/* Edit Profile Button */}
                <button
                  onClick={() => router.push("/coordinator-dashboard/edit-profile")}
                  className="px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold text-white flex items-center gap-2 flex-shrink-0 w-full sm:w-auto justify-center"
                  style={{
                    backgroundColor: colors.brand.primarySoft,
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  <Edit2 size={14} className="md:w-4 md:h-4" />
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Left Column - About Me */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
                  <h3
                    className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    About Me
                  </h3>
                  <p
                    className="text-xs md:text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    I am a dedicated mathematics educator with over 15 years of experience in teaching advanced mathematics and statistics. My passion lies in making complex mathematical concepts accessible and engaging for students at all levels. I specialize in preparing students for competitive examinations including JEE, NEET, and various Olympiads. My teaching methodology focuses on building strong foundational concepts while encouraging analytical thinking and problem-solving skills. I believe every student has the potential to excel in mathematics with the right guidance and approach.
                  </p>
                </div>
              </div>

              {/* Right Column - Statistics */}
              <div className="md:col-span-1 space-y-3 md:space-y-4">
                {/* Monthly Earnings */}
                <div
                  className="bg-white rounded-lg border border-gray-200 p-4 md:p-6"
                  style={{ backgroundColor: "#F0FDF4" }}
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div
                      className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#D1FAE5" }}
                    >
                      <IndianRupee size={18} className="md:w-5 md:h-5" style={{ color: "#059669" }} />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-xl md:text-2xl font-bold text-gray-900"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        ₹85,000
                      </p>
                      <p
                        className="text-xs md:text-sm text-gray-600"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        Monthly Earnings
                      </p>
                    </div>
                  </div>
                </div>

                {/* Active Students */}
                <div
                  className="bg-white rounded-lg border border-gray-200 p-4 md:p-6"
                  style={{ backgroundColor: "#EFF6FF" }}
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div
                      className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#DBEAFE" }}
                    >
                      <Users size={18} className="md:w-5 md:h-5" style={{ color: "#2563EB" }} />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-xl md:text-2xl font-bold text-gray-900"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        156
                      </p>
                      <p
                        className="text-xs md:text-sm text-gray-600"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        Active Students
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoordinatorProfilePage;


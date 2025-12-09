"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CoordinatorSidebar from "@/components/coordinator-dashboard/CoordinatorSidebar";
import { Search, Bell, User, Edit2, Users, IndianRupee } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { FONT_FAMILY, colors } from "@/theme";

const CoordinatorProfilePage: React.FC = () => {
  const router = useRouter();

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <CoordinatorSidebar />
      <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <div
          className="border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-shrink-0"
          style={{
            fontFamily: FONT_FAMILY,
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Left Side - Title */}
          <div>
            <h1
              className="text-2xl font-bold text-gray-900"
              style={{
                fontFamily: FONT_FAMILY,
              }}
            >
              Coordinator Profile
            </h1>
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

        {/* Main Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="max-w-6xl mx-auto">
            {/* Profile Header Section */}
            <div className="bg-white rounded-lg border border-gray-200 border-t-4 p-6 mb-6" style={{ borderTopColor: colors.brand.primarySoft }}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6">
                  {/* Profile Picture */}
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src="/images/avatars/tutor-profile.jpg"
                      alt="Jasmin smith"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      fallback={
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                          <User size={48} className="text-gray-600" />
                        </div>
                      }
                    />
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <h2
                      className="text-2xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      Jasmin smith
                    </h2>
                    <div className="mb-3">
                      <span
                        className="text-base font-medium"
                        style={{
                          color: colors.brand.primarySoft,
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        Advanced Mathematics & Statistics
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users size={18} style={{ color: colors.brand.primarySoft }} />
                      <span
                        className="text-sm text-gray-500"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        2,450 Students
                      </span>
                    </div>
                    <p
                      className="text-sm text-gray-500 leading-relaxed"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      Passionate educator with 15+ years experience in advanced mathematics. Helping students excel in competitive exams and academic goals.
                    </p>
                  </div>
                </div>

                {/* Edit Profile Button */}
                <button
                  onClick={() => router.push("/coordinator-dashboard/edit-profile")}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2 flex-shrink-0"
                  style={{
                    backgroundColor: colors.brand.primarySoft,
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  <Edit2 size={16} />
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-3 gap-6">
              {/* Left Column - About Me */}
              <div className="col-span-2">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3
                    className="text-xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    About Me
                  </h3>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    I am a dedicated mathematics educator with over 15 years of experience in teaching advanced mathematics and statistics. My passion lies in making complex mathematical concepts accessible and engaging for students at all levels. I specialize in preparing students for competitive examinations including JEE, NEET, and various Olympiads. My teaching methodology focuses on building strong foundational concepts while encouraging analytical thinking and problem-solving skills. I believe every student has the potential to excel in mathematics with the right guidance and approach.
                  </p>
                </div>
              </div>

              {/* Right Column - Statistics */}
              <div className="col-span-1 space-y-4">
                {/* Monthly Earnings */}
                <div
                  className="bg-white rounded-lg border border-gray-200 p-6"
                  style={{ backgroundColor: "#F0FDF4" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#D1FAE5" }}
                    >
                      <IndianRupee size={20} style={{ color: "#059669" }} />
                    </div>
                    <div>
                      <p
                        className="text-2xl font-bold text-gray-900"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        ₹85,000
                      </p>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        Monthly Earnings
                      </p>
                    </div>
                  </div>
                </div>

                {/* Active Students */}
                <div
                  className="bg-white rounded-lg border border-gray-200 p-6"
                  style={{ backgroundColor: "#EFF6FF" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#DBEAFE" }}
                    >
                      <Users size={20} style={{ color: "#2563EB" }} />
                    </div>
                    <div>
                      <p
                        className="text-2xl font-bold text-gray-900"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        156
                      </p>
                      <p
                        className="text-sm text-gray-600"
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


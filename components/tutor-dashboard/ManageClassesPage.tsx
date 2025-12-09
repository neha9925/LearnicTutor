"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Bell, Clock, Users, Trash2, User } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { FONT_FAMILY, colors } from "@/theme";
import TodayClassesSection from "./TodayClassesSection";
import ClassListTable from "./ClassListTable";

const ManageClassesPage: React.FC = () => {
  const router = useRouter();
  const [statusFilter, setStatusFilter] = useState<"all" | "running" | "new">("all");

  return (
    <div
      className="flex-1 ml-64 flex flex-col"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Header */}
      <div
        className="border-b border-gray-200 px-6 py-4 flex items-center justify-between"
        style={{
          fontFamily: FONT_FAMILY,
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Left Side - Title */}
        <div>
          <h1
            className="text-2xl font-bold text-gray-900 mb-1"
            style={{
              fontFamily: FONT_FAMILY,
            }}
          >
            Manage Class
          </h1>
          <p
            className="text-sm text-gray-500"
            style={{
              fontFamily: FONT_FAMILY,
            }}
          >
            Track and manage your new and running classes efficiently.
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
            onClick={() => router.push("/tutor-dashboard/edit-profile")}
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
      <main
        className="flex-1 p-6 overflow-y-auto"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="w-full mx-auto space-y-8">
          {/* Filters Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="flex items-center gap-4 flex-wrap">
              {/* Status Label and Filters */}
              <div className="flex items-center gap-3">
                <span
                  className="text-sm font-semibold text-gray-700"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Status:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setStatusFilter("all")}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      statusFilter === "all"
                        ? ""
                        : "text-gray-700 bg-white border border-gray-300"
                    }`}
                    style={{
                      backgroundColor: statusFilter === "all" ? "#F3E8FF" : "transparent",
                      border: statusFilter === "all" ? `1px solid ${colors.brand.primarySoft}` : undefined,
                      color: statusFilter === "all" ? colors.brand.primarySoft : undefined,
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setStatusFilter("running")}
                    className="px-4 py-2 rounded-full text-sm font-semibold text-gray-700 bg-white border border-gray-300 transition-colors hover:bg-gray-50"
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    Running
                  </button>
                  <button
                    onClick={() => setStatusFilter("new")}
                    className="px-4 py-2 rounded-full text-sm font-semibold text-gray-700 bg-white border border-gray-300 transition-colors hover:bg-gray-50"
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    New
                  </button>
                </div>
              </div>

              {/* Vertical Separator */}
              <div
                className="w-px h-8"
                style={{
                  backgroundColor: "#E5E7EB",
                }}
              />

              {/* Dropdowns */}
              <div className="flex items-center gap-2">
                <button
                  className="px-4 py-2 rounded-full text-sm font-semibold text-gray-700 bg-white border border-gray-300 flex items-center gap-2 transition-colors hover:bg-gray-50"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  All Classes
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="px-4 py-2 rounded-full text-sm font-semibold text-gray-700 bg-white border border-gray-300 flex items-center gap-2 transition-colors hover:bg-gray-50"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Subject
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="px-4 py-2 rounded-full text-sm font-semibold text-gray-700 bg-white border border-gray-300 flex items-center gap-2 transition-colors hover:bg-gray-50"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Date
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Today's Classes Section */}
          <TodayClassesSection />

          {/* Class List Table */}
          <ClassListTable statusFilter={statusFilter} />
        </div>
      </main>
    </div>
  );
};

export default ManageClassesPage;


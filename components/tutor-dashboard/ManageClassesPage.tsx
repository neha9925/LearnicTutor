"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Bell, Clock, Users, Trash2, User, Menu, X } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { FONT_FAMILY, colors } from "@/theme";
import TodayClassesSection from "./TodayClassesSection";
import ClassListTable from "./ClassListTable";

interface ManageClassesPageProps {
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

const ManageClassesPage: React.FC<ManageClassesPageProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const router = useRouter();
  const [statusFilter, setStatusFilter] = useState<"all" | "running" | "new">("all");

  return (
    <div
      className="flex-1 md:ml-64 flex flex-col w-full"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Header */}
      <div
        className="border-b border-gray-200 pl-20 md:pl-6 pr-4 md:pr-6 py-3 md:py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 relative"
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
        <div className="w-full md:w-auto">
          <h1
            className="text-lg md:text-2xl font-bold text-gray-900 mb-0.5 md:mb-1 leading-tight"
            style={{
              fontFamily: FONT_FAMILY,
            }}
          >
            Manage Class
          </h1>
          <p
            className="text-xs md:text-sm text-gray-500 leading-tight"
            style={{
              fontFamily: FONT_FAMILY,
            }}
          >
            Track and manage your new and running classes efficiently.
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
            onClick={() => router.push("/tutor-dashboard/edit-profile")}
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
      <main
        className="flex-1 p-4 md:p-6 overflow-y-auto"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="w-full mx-auto space-y-6 md:space-y-8">
          {/* Filters Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 flex-wrap">
              {/* Status Label and Filters */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full md:w-auto">
                <span
                  className="text-xs md:text-sm font-semibold text-gray-700"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Status:
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => setStatusFilter("all")}
                    className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
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
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold text-gray-700 bg-white border border-gray-300 transition-colors hover:bg-gray-50"
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    Running
                  </button>
                  <button
                    onClick={() => setStatusFilter("new")}
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold text-gray-700 bg-white border border-gray-300 transition-colors hover:bg-gray-50"
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
                className="hidden md:block w-px h-8"
                style={{
                  backgroundColor: "#E5E7EB",
                }}
              />

              {/* Dropdowns */}
              <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
                <button
                  className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold text-gray-700 bg-white border border-gray-300 flex items-center gap-1.5 md:gap-2 transition-colors hover:bg-gray-50 flex-1 md:flex-initial"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  <span className="truncate">All Classes</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
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
                  className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold text-gray-700 bg-white border border-gray-300 flex items-center gap-1.5 md:gap-2 transition-colors hover:bg-gray-50 flex-1 md:flex-initial"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  <span className="truncate">Subject</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
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
                  className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold text-gray-700 bg-white border border-gray-300 flex items-center gap-1.5 md:gap-2 transition-colors hover:bg-gray-50 flex-1 md:flex-initial"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  <span className="truncate">Date</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
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


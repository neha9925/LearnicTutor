"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CoordinatorSidebar from "@/components/coordinator-dashboard/CoordinatorSidebar";
import { Search, Bell, User, ChevronLeft, ChevronRight, ChevronDown, Menu, X, Trash2 } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { FONT_FAMILY, colors } from "@/theme";

interface ReferredStudent {
  id: string;
  name: string;
  avatar: string;
  classBatch: string;
  status: "Active" | "Inactive";
  dateReferred: string;
  earningPerMonth: string;
  commission: string;
}

const ReferredStudentsPage: React.FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState("All Classes");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const students: ReferredStudent[] = [
    {
      id: "1",
      name: "Amit Sharma",
      avatar: "/images/avatars/student1.jpg",
      classBatch: "Class 10 Science - A",
      status: "Active",
      dateReferred: "15 Jan 2025",
      earningPerMonth: "₹2,500",
      commission: "10%",
    },
    {
      id: "2",
      name: "Priya Patel",
      avatar: "/images/avatars/student2.jpg",
      classBatch: "Class 12 Maths - B",
      status: "Inactive",
      dateReferred: "18 Jan 2025",
      earningPerMonth: "₹3,000",
      commission: "12%",
    },
    {
      id: "3",
      name: "Rahul Verma",
      avatar: "/images/avatars/student1.jpg",
      classBatch: "Class 8 Physics - C",
      status: "Inactive",
      dateReferred: "20 Jan 2025",
      earningPerMonth: "₹2,800",
      commission: "11%",
    },
    {
      id: "4",
      name: "Sneha Gupta",
      avatar: "/images/avatars/student2.jpg",
      classBatch: "Class 10 Maths - A",
      status: "Active",
      dateReferred: "22 Jan 2025",
      earningPerMonth: "₹2,200",
      commission: "10%",
    },
    {
      id: "5",
      name: "Vikram Singh",
      avatar: "/images/avatars/student1.jpg",
      classBatch: "Class 12 Chemistry - B",
      status: "Active",
      dateReferred: "25 Jan 2025",
      earningPerMonth: "₹3,200",
      commission: "12%",
    },
  ];

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages - 1);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push(2);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(2);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages - 1);
        pages.push(totalPages);
      }
    }
    return pages;
  };

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
              Referred Students
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
          <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
            {/* Total Students and Filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-3">
              <p
                className="text-sm md:text-base font-semibold text-gray-900"
                style={{ fontFamily: FONT_FAMILY }}
              >
                Total Students: 2563
              </p>
              <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <button
                    onClick={() => {
                      setShowStatusDropdown(false);
                      setShowClassDropdown(!showClassDropdown);
                    }}
                    className="w-full sm:w-auto px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm flex items-center justify-between gap-2 bg-white"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    <span className="truncate">{selectedClass}</span>
                    <ChevronDown size={14} className="md:w-4 md:h-4 text-gray-400 flex-shrink-0" />
                  </button>
                  {showClassDropdown && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setShowClassDropdown(false)}
                      />
                      <div className="absolute z-20 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[150px]">
                        {["All Classes", "Class 10", "Class 11", "Class 12"].map((cls) => (
                          <button
                            key={cls}
                            onClick={() => {
                              setSelectedClass(cls);
                              setShowClassDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                            style={{ fontFamily: FONT_FAMILY }}
                          >
                            {cls}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="relative flex-1 sm:flex-initial">
                  <button
                    onClick={() => {
                      setShowClassDropdown(false);
                      setShowStatusDropdown(!showStatusDropdown);
                    }}
                    className="w-full sm:w-auto px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm flex items-center justify-between gap-2 bg-white"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    <span className="truncate">{selectedStatus}</span>
                    <ChevronDown size={14} className="md:w-4 md:h-4 text-gray-400 flex-shrink-0" />
                  </button>
                  {showStatusDropdown && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setShowStatusDropdown(false)}
                      />
                      <div className="absolute z-20 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[130px]">
                        {["All Status", "Active", "Inactive"].map((status) => (
                          <button
                            key={status}
                            onClick={() => {
                              setSelectedStatus(status);
                              setShowStatusDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                            style={{ fontFamily: FONT_FAMILY }}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th
                      className="text-left py-3 px-4 text-sm font-semibold text-gray-700"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      Student Name
                    </th>
                    <th
                      className="text-left py-3 px-4 text-sm font-semibold text-gray-700"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      Class / Batch
                    </th>
                    <th
                      className="text-left py-3 px-4 text-sm font-semibold text-gray-700"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      Status
                    </th>
                    <th
                      className="text-left py-3 px-4 text-sm font-semibold text-gray-700"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      Date Referred
                    </th>
                    <th
                      className="text-left py-3 px-4 text-sm font-semibold text-gray-700"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      Earning / Month
                    </th>
                    <th
                      className="text-left py-3 px-4 text-sm font-semibold text-gray-700"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      Commission / Student
                    </th>
                    <th
                      className="text-left py-3 px-4 text-sm font-semibold text-gray-700"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr
                      key={student.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <ImageWithFallback
                            src={student.avatar}
                            alt={student.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full object-cover"
                            fallback={
                              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                                <User size={16} className="text-gray-600" />
                              </div>
                            }
                          />
                          <span
                            className="text-sm text-gray-900"
                            style={{ fontFamily: FONT_FAMILY }}
                          >
                            {student.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className="text-sm text-gray-700"
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          {student.classBatch}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            backgroundColor:
                              student.status === "Active"
                                ? "#D1FAE5"
                                : "#FEF3C7",
                            color:
                              student.status === "Active"
                                ? "#059669"
                                : "#D97706",
                            fontFamily: FONT_FAMILY,
                          }}
                        >
                          {student.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className="text-sm text-gray-700"
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          {student.dateReferred}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className="text-sm text-gray-700"
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          {student.earningPerMonth}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className="text-sm text-gray-700"
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          {student.commission}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-3">
              {students.map((student) => (
                <div key={student.id} className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <ImageWithFallback
                        src={student.avatar}
                        alt={student.name}
                        width={32}
                        height={32}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        fallback={
                          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                            <User size={20} className="text-gray-600" />
                          </div>
                        }
                      />
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-sm font-semibold text-gray-900 mb-1 truncate"
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          {student.name}
                        </h3>
                        <p
                          className="text-xs text-gray-600 truncate"
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          {student.classBatch}
                        </p>
                      </div>
                    </div>
                    <button className="p-1 text-gray-400 hover:text-red-600 transition-colors flex-shrink-0">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500" style={{ fontFamily: FONT_FAMILY }}>Status: </span>
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor:
                            student.status === "Active"
                              ? "#D1FAE5"
                              : "#FEF3C7",
                          color:
                            student.status === "Active"
                              ? "#059669"
                              : "#D97706",
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        {student.status}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500" style={{ fontFamily: FONT_FAMILY }}>Date: </span>
                      <span className="text-gray-900" style={{ fontFamily: FONT_FAMILY }}>
                        {student.dateReferred}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500" style={{ fontFamily: FONT_FAMILY }}>Earning: </span>
                      <span className="text-gray-900 font-semibold" style={{ fontFamily: FONT_FAMILY }}>
                        {student.earningPerMonth}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500" style={{ fontFamily: FONT_FAMILY }}>Commission: </span>
                      <span className="text-gray-900 font-semibold" style={{ fontFamily: FONT_FAMILY }}>
                        {student.commission}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center md:justify-end gap-1 md:gap-2 mt-4 md:mt-6 flex-wrap">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-1.5 md:p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                <ChevronLeft size={16} className="md:w-[18px] md:h-[18px] text-gray-600" />
              </button>
              {getPageNumbers().map((page, index) => (
                <React.Fragment key={index}>
                  {page === "..." ? (
                    <span
                      className="px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm text-gray-500"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      onClick={() => setCurrentPage(page as number)}
                      className={`px-2 md:px-3 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                        currentPage === page
                          ? "text-white"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      style={{
                        backgroundColor:
                          currentPage === page
                            ? colors.brand.primarySoft
                            : "transparent",
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      {page}
                    </button>
                  )}
                </React.Fragment>
              ))}
              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="p-1.5 md:p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                <ChevronRight size={16} className="md:w-[18px] md:h-[18px] text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferredStudentsPage;


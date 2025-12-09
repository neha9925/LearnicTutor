"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CoordinatorSidebar from "@/components/coordinator-dashboard/CoordinatorSidebar";
import { Search, Bell, User, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
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
              Referred Students
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
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {/* Total Students and Filters */}
            <div className="flex items-center justify-between mb-6">
              <p
                className="text-base font-semibold text-gray-900"
                style={{ fontFamily: FONT_FAMILY }}
              >
                Total Students: 2563
              </p>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowStatusDropdown(false);
                      setShowClassDropdown(!showClassDropdown);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm flex items-center gap-2 bg-white"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    <span>{selectedClass}</span>
                    <ChevronDown size={16} className="text-gray-400" />
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

                <div className="relative">
                  <button
                    onClick={() => {
                      setShowClassDropdown(false);
                      setShowStatusDropdown(!showStatusDropdown);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm flex items-center gap-2 bg-white"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    <span>{selectedStatus}</span>
                    <ChevronDown size={16} className="text-gray-400" />
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

            {/* Table */}
            <div className="overflow-x-auto">
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

            {/* Pagination */}
            <div className="flex items-center justify-end gap-2 mt-6">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
              {getPageNumbers().map((page, index) => (
                <React.Fragment key={index}>
                  {page === "..." ? (
                    <span
                      className="px-3 py-2 text-sm text-gray-500"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      onClick={() => setCurrentPage(page as number)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
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
                className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferredStudentsPage;


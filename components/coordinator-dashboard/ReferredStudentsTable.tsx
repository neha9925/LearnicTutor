"use client";

import React, { useState } from "react";
import { Search, ChevronDown, Trash2 } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { User } from "lucide-react";
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

const ReferredStudentsTable: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState("All Classes");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
      classBatch: "Class 11 Physics - C",
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

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-2">
        <h2
          className="text-lg md:text-xl font-bold text-gray-900"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Referred Students
        </h2>
        <button
          className="text-xs md:text-sm font-semibold"
          style={{
            color: colors.brand.primarySoft,
            fontFamily: FONT_FAMILY,
          }}
        >
          View All
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mb-4">
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
              <div className="absolute z-20 left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[150px]">
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
              <div className="absolute z-20 left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[130px]">
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

        <div className="relative flex-1 sm:flex-initial sm:max-w-xs">
          <Search
            size={16}
            className="absolute left-2.5 md:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search students..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs md:text-sm"
            style={{ fontFamily: FONT_FAMILY }}
          />
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
              <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
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
                        student.status === "Active" ? "#D1FAE5" : "#FEF3C7",
                      color: student.status === "Active" ? "#059669" : "#D97706",
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
                    <Trash2 size={18} />
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
                      student.status === "Active" ? "#D1FAE5" : "#FEF3C7",
                    color: student.status === "Active" ? "#059669" : "#D97706",
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
    </div>
  );
};

export default ReferredStudentsTable;


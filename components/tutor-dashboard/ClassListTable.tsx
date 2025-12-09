"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Clock, Users, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { FONT_FAMILY, colors } from "@/theme";

interface ClassRow {
  id: string;
  className: string;
  subject: string;
  status: "running" | "new";
  timing: string;
  schedule: string;
  studentsEnrolled: number;
}

interface ClassListTableProps {
  statusFilter: "all" | "running" | "new";
}

const ClassListTable: React.FC<ClassListTableProps> = ({ statusFilter }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const allClasses: ClassRow[] = [
    {
      id: "1",
      className: "Class 6 - Full Course (Batch 1)",
      subject: "All Subject",
      status: "running",
      timing: "9:00 AM to 10:00 AM",
      schedule: "Mon, Wed, Fri",
      studentsEnrolled: 48,
    },
    {
      id: "2",
      className: "Class 10 course",
      subject: "Not Scheduled",
      status: "new",
      timing: "Not Scheduled Yet",
      schedule: "",
      studentsEnrolled: 32,
    },
    {
      id: "3",
      className: "Class 8 - English Grammar",
      subject: "English",
      status: "running",
      timing: "11:00 AM to 12:00 PM",
      schedule: "Tue, Thu, Sat",
      studentsEnrolled: 56,
    },
    {
      id: "4",
      className: "Class 8 - course batch 5",
      subject: "Science, Math",
      status: "running",
      timing: "5:00 PM to 6:30 PM",
      schedule: "Daily",
      studentsEnrolled: 64,
    },
    {
      id: "5",
      className: "Class 9 - Hindi Literature",
      subject: "Hindi",
      status: "new",
      timing: "Not Scheduled Yet",
      schedule: "",
      studentsEnrolled: 28,
    },
  ];

  const filteredClasses =
    statusFilter === "all"
      ? allClasses
      : allClasses.filter((c) => c.status === statusFilter);

  return (
    <div>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full" style={{ fontFamily: FONT_FAMILY }}>
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  Class Name
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  Status
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  Class Timing
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  Students Enrolled
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredClasses.map((classItem) => (
                <tr key={classItem.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div
                        className="text-sm font-semibold text-gray-900"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        {classItem.className}
                      </div>
                      <div
                        className="text-sm text-gray-500 mt-1"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        {classItem.subject}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: classItem.status === "running" ? "#059669" : "#2563EB",
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      {classItem.status === "running" ? "Running" : "New"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2">
                      <Clock size={16} style={{ color: "#6B7280", marginTop: "2px" }} />
                      <div>
                        <div
                          className="text-sm text-gray-900"
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          {classItem.timing}
                        </div>
                        {classItem.schedule && (
                          <div
                            className="text-xs text-gray-500 mt-1"
                            style={{ fontFamily: FONT_FAMILY }}
                          >
                            {classItem.schedule}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Users size={16} style={{ color: "#6B7280" }} />
                      <span
                        className="text-sm text-gray-900"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        {classItem.studentsEnrolled} Students
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {classItem.status === "new" ? (
                      <button
                        onClick={() => router.push("/tutor-dashboard/schedule-class")}
                        className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors hover:opacity-90"
                        style={{
                          backgroundColor: colors.brand.primarySoft,
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        Schedule Now
                      </button>
                    ) : (
                      <button
                        className="flex items-center gap-2 text-sm font-semibold transition-colors"
                        style={{
                          color: "#DC2626",
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end gap-2">
          <button
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            style={{ fontFamily: FONT_FAMILY }}
          >
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
          {[1, 2].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === page
                  ? "text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              style={{
                backgroundColor: currentPage === page ? colors.brand.primarySoft : "transparent",
                fontFamily: FONT_FAMILY,
              }}
            >
              {page}
            </button>
          ))}
          <span className="px-2 text-gray-500" style={{ fontFamily: FONT_FAMILY }}>
            ...
          </span>
          {[9, 10].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === page
                  ? "text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              style={{
                backgroundColor: currentPage === page ? colors.brand.primarySoft : "transparent",
                fontFamily: FONT_FAMILY,
              }}
            >
              {page}
            </button>
          ))}
          <button
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}
            disabled={currentPage === 10}
            style={{ fontFamily: FONT_FAMILY }}
          >
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassListTable;


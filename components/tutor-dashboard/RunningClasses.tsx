"use client";

import React from "react";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import { FONT_FAMILY, colors } from "@/theme";

interface ClassCard {
  id: string;
  title: string;
  subject: string;
  status: "live" | "active";
  nextClass: string;
  studentsEnrolled: number;
}

const classes: ClassCard[] = [
  {
    id: "1",
    title: "Class 10 Science",
    subject: "Physics - Chapter 12",
    status: "live",
    nextClass: "Today, 4:00 PM",
    studentsEnrolled: 156,
  },
  {
    id: "2",
    title: "Class 12 Mathematics",
    subject: "Calculus - Integration",
    status: "active",
    nextClass: "Tomorrow, 10:00 AM",
    studentsEnrolled: 203,
  },
  {
    id: "3",
    title: "Class 9 English",
    subject: "Literature - Poetry",
    status: "active",
    nextClass: "Wed, 2:30 PM",
    studentsEnrolled: 189,
  },
];

const RunningClasses: React.FC = () => {
  return (
    <div>
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-2">
        <h2
          className="text-xl md:text-2xl font-bold text-gray-900"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Running Classes
        </h2>
        <Link
          href="/tutor-dashboard/classes"
          className="text-sm font-medium flex items-center gap-1"
          style={{
            color: colors.brand.primarySoft,
            fontFamily: FONT_FAMILY,
          }}
        >
          View All →
        </Link>
      </div>

      {/* Class Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
            style={{
              fontFamily: FONT_FAMILY,
            }}
          >
            {/* Status Badge */}
            <div className="mb-4">
              {classItem.status === "live" ? (
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase"
                  style={{
                    backgroundColor: "#DC2626",
                    color: "#FFFFFF",
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#FFFFFF" }}></span>
                  LIVE NOW
                </span>
              ) : (
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase"
                  style={{
                    backgroundColor: "#D1FAE5",
                    color: "#059669",
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  ACTIVE
                </span>
              )}
            </div>

            {/* Class Info */}
            <h3
              className="text-lg md:text-xl font-bold mb-2"
              style={{
                color: "#1F2937",
                fontFamily: FONT_FAMILY,
              }}
            >
              {classItem.title}
            </h3>
            <p
              className="text-sm mb-4"
              style={{
                color: "#6B7280",
                fontFamily: FONT_FAMILY,
              }}
            >
              {classItem.subject}
            </p>

            {/* Next Class */}
            <div className="flex items-center gap-2 mb-3">
              <Clock size={16} style={{ color: "#6B7280" }} />
              <span
                className="text-sm"
                style={{
                  color: "#6B7280",
                  fontFamily: FONT_FAMILY,
                }}
              >
                Next: {classItem.nextClass}
              </span>
            </div>

            {/* Students Enrolled */}
            <div className="flex items-center gap-2 mb-6">
              <Users size={16} style={{ color: "#6B7280" }} />
              <span
                className="text-sm"
                style={{
                  color: "#6B7280",
                  fontFamily: FONT_FAMILY,
                }}
              >
                {classItem.studentsEnrolled} Students Enrolled
              </span>
            </div>

            {/* Manage Class Button */}
            <button
              className="w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-colors"
              style={{
                backgroundColor:
                  classItem.status === "live"
                    ? colors.brand.primarySoft
                    : "#F3E8FF",
                color: classItem.status === "live" ? "#FFFFFF" : colors.brand.primarySoft,
                fontFamily: FONT_FAMILY,
              }}
            >
              Manage Class
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningClasses;


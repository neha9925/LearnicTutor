"use client";

import React from "react";
import { Clock } from "lucide-react";
import { FONT_FAMILY, colors } from "@/theme";

const TodayClassesSection: React.FC = () => {
  const classes = [
    {
      id: "1",
      title: "Class 6 - Full Course (Batch 1)",
      time: "9:00 AM to 10:00 AM",
      message: "Your class is starting in 10 minutes—get ready!",
      buttonStyle: "primary", // Purple border, white background
    },
    {
      id: "2",
      title: "Class 8 - English Full Course (Batch 2)",
      time: "9:00 AM to 10:00 AM",
      message: "Your class is starting in 7 hours",
      buttonStyle: "secondary", // Lighter purple border, white background
    },
  ];

  return (
    <div>
      <h2
        className="text-xl font-bold text-gray-900 mb-4"
        style={{
          fontFamily: FONT_FAMILY,
        }}
      >
        Today&apos;s Classes
      </h2>
      <div className="flex gap-6">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm flex-1"
            style={{
              fontFamily: FONT_FAMILY,
              width: "50%",
            }}
          >
            <h3
              className="text-lg font-bold mb-3"
              style={{
                color: "#1F2937",
                fontFamily: FONT_FAMILY,
              }}
            >
              {classItem.title}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <Clock size={16} style={{ color: "#6B7280" }} />
              <span
                className="text-sm"
                style={{
                  color: "#6B7280",
                  fontFamily: FONT_FAMILY,
                }}
              >
                {classItem.time}
              </span>
            </div>
            <p
              className="text-sm mb-4"
              style={{
                color: colors.brand.primarySoft,
                fontFamily: FONT_FAMILY,
              }}
            >
              {classItem.message}
            </p>
            <button
              className="w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-colors"
              style={{
                backgroundColor: "#FFFFFF",
                border: `1px solid ${
                  classItem.buttonStyle === "primary"
                    ? colors.brand.primarySoft
                    : `${colors.brand.primarySoft}80`
                }`,
                color: colors.brand.primarySoft,
                fontFamily: FONT_FAMILY,
                opacity: classItem.buttonStyle === "secondary" ? 0.8 : 1,
              }}
            >
              Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayClassesSection;


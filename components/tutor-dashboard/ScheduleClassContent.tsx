"use client";

import React, { useState } from "react";
import { Clock, FileText, Trash2, Plus, ChevronDown } from "lucide-react";
import { FONT_FAMILY, colors } from "@/theme";

interface ScheduledClass {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  subject: string;
}

const ScheduleClassContent: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");
  const [selectedSubject, setSelectedSubject] = useState("English");
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [scheduledClasses, setScheduledClasses] = useState<ScheduledClass[]>([
    {
      id: "1",
      day: "Monday",
      startTime: "9:00 AM",
      endTime: "10:00 AM",
      subject: "Mathematics",
    },
    {
      id: "2",
      day: "Tuesday",
      startTime: "9:00 AM",
      endTime: "10:00 AM",
      subject: "English",
    },
  ]);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const subjects = ["English", "Mathematics", "Science", "Hindi", "Social Studies"];

  const handleScheduleNow = () => {
    const newClass: ScheduledClass = {
      id: Date.now().toString(),
      day: selectedDay,
      startTime: formatTime(startTime),
      endTime: formatTime(endTime),
      subject: selectedSubject,
    };
    setScheduledClasses([...scheduledClasses, newClass]);
  };

  const handleDeleteClass = (id: string) => {
    setScheduledClasses(scheduledClasses.filter((cls) => cls.id !== id));
  };

  const formatTime = (time: string): string => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div style={{ fontFamily: FONT_FAMILY }}>
      <style jsx global>{`
        input[type="time"]::-webkit-calendar-picker-indicator {
          display: none;
          -webkit-appearance: none;
        }
        input[type="time"]::-webkit-inner-spin-button,
        input[type="time"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="time"] {
          -moz-appearance: textfield;
        }
      `}</style>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
        {/* Left Panel - Schedule Class */}
        <div className="flex-1 bg-white rounded-lg border border-gray-200 p-4 md:p-6 lg:p-8">
        <div className="mb-6 md:mb-8">
          <h2
            className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: "24px",
              fontWeight: 700,
              color: "#1F2937",
              lineHeight: "1.2",
            }}
          >
            Schedule Class
          </h2>
          <p
            className="text-xs md:text-sm text-gray-500"
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: "14px",
              color: "#6B7280",
              lineHeight: "1.5",
            }}
          >
            Set your weekly class timings and subjects.
          </p>
        </div>

        {/* Class Selection */}
        <div className="mb-6 md:mb-8">
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-3 md:px-4 py-3 rounded-lg"
            style={{
              backgroundColor: "#F3E8FF",
              border: "1px solid #E9D5FF",
            }}
          >
            <div className="flex items-center gap-2 md:gap-3 flex-1 w-full sm:w-auto">
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "#E9D5FF",
                }}
              >
                <FileText size={16} className="md:w-5 md:h-5" style={{ color: colors.brand.primarySoft }} />
              </div>
              <span
                className="text-sm md:text-base font-bold truncate"
                style={{
                  color: "#1F2937",
                  fontFamily: FONT_FAMILY,
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "1.4",
                }}
              >
                Class 10 – Full Course
              </span>
            </div>
            <button
              className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold border transition-colors whitespace-nowrap w-full sm:w-auto"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: colors.brand.primarySoft,
                color: colors.brand.primarySoft,
                fontFamily: FONT_FAMILY,
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              New Class
            </button>
          </div>
        </div>

        {/* Select Day */}
        <div className="mb-6 md:mb-8">
          <label
            className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3"
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: "14px",
              fontWeight: 600,
              color: "#374151",
              lineHeight: "1.4",
            }}
          >
            Select Day
          </label>
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: selectedDay === day ? colors.brand.primarySoft : "#F3F4F6",
                  color: selectedDay === day ? "#FFFFFF" : "#6B7280",
                  fontFamily: FONT_FAMILY,
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "1.4",
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Select Timing */}
        <div className="mb-6 md:mb-8">
          <h3
            className="text-xs md:text-sm font-semibold text-gray-900 mb-2 md:mb-3"
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: "14px",
              fontWeight: 600,
              color: "#374151",
              lineHeight: "1.4",
            }}
          >
            Select Timing
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <div className="flex-1">
              <label
                className="block text-xs text-gray-500 mb-1.5"
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: "12px",
                  color: "#6B7280",
                  lineHeight: "1.4",
                }}
              >
                Start Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  onClick={(e) => {
                    const target = e.target as HTMLInputElement;
                    if (target.showPicker) {
                      try {
                        target.showPicker();
                      } catch (error) {
                        // Fallback: just focus the input
                        target.focus();
                      }
                    }
                  }}
                  className="w-full px-3 md:px-4 py-2 md:py-2.5 pr-8 md:pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs md:text-sm text-gray-900 cursor-pointer"
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: "14px",
                  }}
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                    if (input && input.showPicker) {
                      try {
                        input.showPicker();
                      } catch (error) {
                        // Fallback: focus and click the input
                        input?.focus();
                        input?.click();
                      }
                    } else {
                      input?.focus();
                      input?.click();
                    }
                  }}
                  className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <Clock size={16} className="md:w-[18px] md:h-[18px]" />
                </button>
              </div>
            </div>
            <div className="flex-1">
              <label
                className="block text-xs text-gray-500 mb-1.5"
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: "12px",
                  color: "#6B7280",
                  lineHeight: "1.4",
                }}
              >
                End Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  onClick={(e) => {
                    const target = e.target as HTMLInputElement;
                    if (target.showPicker) {
                      try {
                        target.showPicker();
                      } catch (error) {
                        // Fallback: just focus the input
                        target.focus();
                      }
                    }
                  }}
                  className="w-full px-3 md:px-4 py-2 md:py-2.5 pr-8 md:pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs md:text-sm text-gray-900 cursor-pointer"
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: "14px",
                  }}
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                    if (input && input.showPicker) {
                      try {
                        input.showPicker();
                      } catch (error) {
                        // Fallback: focus and click the input
                        input?.focus();
                        input?.click();
                      }
                    } else {
                      input?.focus();
                      input?.click();
                    }
                  }}
                  className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <Clock size={16} className="md:w-[18px] md:h-[18px]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Select Subject */}
        <div className="mb-6 md:mb-8">
          <h3
            className="text-xs md:text-sm font-semibold text-gray-900 mb-2 md:mb-3"
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: "14px",
              fontWeight: 600,
              color: "#374151",
              lineHeight: "1.4",
            }}
          >
            Select Subject
          </h3>
          <div className="relative">
            <button
              onClick={() => setShowSubjectDropdown(!showSubjectDropdown)}
              className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 bg-white text-left flex items-center justify-between text-xs md:text-sm"
              style={{ fontFamily: FONT_FAMILY }}
            >
              <span className={selectedSubject ? "text-gray-900" : "text-gray-400"}>
                {selectedSubject || "Select Subject"}
              </span>
              <ChevronDown size={16} className="md:w-[18px] md:h-[18px] text-gray-400" />
            </button>
            {showSubjectDropdown && (
              <>
                <div
                  className="fixed inset-0 z-10 bg-transparent"
                  onClick={() => setShowSubjectDropdown(false)}
                />
                <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      onClick={() => {
                        setSelectedSubject(subject);
                        setShowSubjectDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={handleScheduleNow}
            className="text-xs md:text-sm font-semibold text-white transition-colors hover:opacity-90 w-full md:w-auto"
            style={{
              width: "100%",
              maxWidth: "162px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #6B47ED 0%, #5A32FF 100%)",
              fontFamily: FONT_FAMILY,
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "1.4",
            }}
          >
            Schedule Now
          </button>
        </div>
        </div>

        {/* Right Panel - Class Preview */}
        <div className="w-full lg:w-96 bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm">
        <h2
          className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6"
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: "24px",
            fontWeight: 700,
            color: "#000000",
          }}
        >
          Class Preview
        </h2>

        <div className="space-y-4">
          {scheduledClasses.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white rounded-lg border border-gray-200 p-4 relative shadow-sm"
              style={{
                fontFamily: FONT_FAMILY,
              }}
            >
              <button
                onClick={() => handleDeleteClass(classItem.id)}
                className="absolute top-3 right-3 p-1 hover:bg-red-50 rounded transition-colors"
              >
                <Trash2 size={16} style={{ color: "#F97316" }} />
              </button>

              <h3
                className="text-base font-semibold mb-2"
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: "16px",
                  fontWeight: 600,
                  color: colors.brand.primarySoft,
                }}
              >
                {classItem.day}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} style={{ color: colors.brand.primarySoft }} />
                <span
                  className="text-sm font-medium"
                  style={{
                    color: colors.brand.primarySoft,
                    fontFamily: FONT_FAMILY,
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {classItem.startTime} - {classItem.endTime}
                </span>
              </div>
              <p
                className="text-base font-bold text-gray-900"
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#000000",
                }}
              >
                {classItem.subject}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Publish Class Button - Outside Card */}
      <div>
        <button
          className="text-xs md:text-sm font-semibold text-white transition-colors hover:opacity-90 w-full md:w-auto"
          style={{
            width: "100%",
            maxWidth: "206px",
            height: "48px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #6B47ED 0%, #5A32FF 100%)",
            fontFamily: FONT_FAMILY,
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "1.4",
          }}
        >
          Publish Class
        </button>
      </div>
    </div>
  );
};

export default ScheduleClassContent;


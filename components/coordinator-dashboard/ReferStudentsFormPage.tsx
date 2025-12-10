"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CoordinatorSidebar from "@/components/coordinator-dashboard/CoordinatorSidebar";
import { Search, Bell, User, Camera, Upload, Calendar, Zap, ChevronDown, CloudUpload, Menu, X } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Input from "@/components/ui/Input";
import { FONT_FAMILY, colors } from "@/theme";

const ReferStudentsFormPage: React.FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "Male",
    class: "",
    board: "",
    medium: "",
    academicYear: "",
    preferredSubjects: ["Mathematics"] as string[],
  });
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [showBoardDropdown, setShowBoardDropdown] = useState(false);
  const [showMediumDropdown, setShowMediumDropdown] = useState(false);
  const [showAcademicYearDropdown, setShowAcademicYearDropdown] = useState(false);

  const subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Hindi"];
  const classes = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"];
  const boards = ["CBSE", "ICSE", "State Board", "IB"];
  const mediums = ["English", "Hindi", "Regional"];
  const academicYears = ["2024-2025", "2025-2026", "2026-2027"];

  const toggleSubject = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredSubjects: prev.preferredSubjects.includes(subject)
        ? prev.preferredSubjects.filter((s) => s !== subject)
        : [...prev.preferredSubjects, subject],
    }));
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
              Refer Students
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
          <div className="w-full space-y-4 md:space-y-6">
            {/* Referral Incentive Banner */}
            <div
              className="rounded-lg p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4"
              style={{
                backgroundColor: "#F3E8FF",
                fontFamily: FONT_FAMILY,
              }}
            >
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: colors.brand.primarySoft,
                }}
              >
                <Zap size={20} className="md:w-6 md:h-6" style={{ color: "#FFFFFF" }} />
              </div>
              <div>
                <p
                  className="text-sm md:text-base font-bold text-gray-900 mb-1"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  Earn ₹500 per referral
                </p>
                <p
                  className="text-xs md:text-sm text-gray-600"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  After 10 students, unlock 10% monthly commission.
                </p>
              </div>
            </div>

            {/* Photo Upload Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col items-center">
                <div
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-dashed flex items-center justify-center mb-4 md:mb-6"
                  style={{
                    borderColor: colors.brand.primarySoft,
                    borderStyle: "dashed",
                  }}
                >
                  <Camera size={36} className="md:w-12 md:h-12" style={{ color: colors.brand.primarySoft }} />
                </div>
                <button
                  className="px-4 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-sm font-semibold text-white mb-2 md:mb-3"
                  style={{
                    backgroundColor: colors.brand.primarySoft,
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Upload Photo
                </button>
                <p
                  className="text-xs text-gray-500 text-center mb-1"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  JPG/PNG, max 5MB
                </p>
                <p
                  className="text-xs md:text-sm text-gray-500 text-center"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  Clear, front-facing photo helps tutors identify students.
                </p>
              </div>
            </div>

            {/* Personal Details Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <h2
                className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6"
                style={{ fontFamily: FONT_FAMILY }}
              >
                Personal Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 md:mb-6">
                <Input
                  label="Full Name"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="placeholder-gray-400"
                />
                <Input
                  label="Email ID"
                  type="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="placeholder-gray-400"
                />
                <Input
                  label="Mobile Number"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  className="placeholder-gray-400"
                />
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    DOB
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="DOB"
                      value={formData.dob}
                      onChange={(e) =>
                        setFormData({ ...formData, dob: e.target.value })
                      }
                      onFocus={(e) => {
                        e.target.type = "date";
                        e.target.showPicker?.();
                      }}
                      onBlur={(e) => {
                        if (!e.target.value) {
                          e.target.type = "text";
                        }
                      }}
                      className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm placeholder-gray-400"
                      style={{ fontFamily: FONT_FAMILY }}
                    />
                    <Calendar
                      size={18}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-3"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  Gender <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <div className="flex items-center gap-4 md:gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      className="w-4 h-4"
                      style={{ accentColor: colors.brand.primarySoft }}
                    />
                    <span
                      className="text-sm text-gray-700"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      Male
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      className="w-4 h-4"
                      style={{ accentColor: colors.brand.primarySoft }}
                    />
                    <span
                      className="text-sm text-gray-700"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      Female
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Academic Information Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <h2
                className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6"
                style={{ fontFamily: FONT_FAMILY }}
              >
                Academic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 md:mb-6">
                <div className="relative">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    Class
                  </label>
                  <button
                    onClick={() => {
                      setShowBoardDropdown(false);
                      setShowMediumDropdown(false);
                      setShowAcademicYearDropdown(false);
                      setShowClassDropdown(!showClassDropdown);
                    }}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-left flex items-center justify-between text-sm"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    <span className={formData.class ? "text-gray-900" : "text-gray-400"}>
                      {formData.class || "Class"}
                    </span>
                    <ChevronDown size={18} className="text-gray-400" />
                  </button>
                  {showClassDropdown && (
                    <>
                      <div
                        className="fixed inset-0 z-10 bg-transparent"
                        onClick={() => setShowClassDropdown(false)}
                      />
                      <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                        {classes.map((cls) => (
                          <button
                            key={cls}
                            onClick={() => {
                              setFormData({ ...formData, class: cls });
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
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    Board
                  </label>
                  <button
                    onClick={() => {
                      setShowClassDropdown(false);
                      setShowMediumDropdown(false);
                      setShowAcademicYearDropdown(false);
                      setShowBoardDropdown(!showBoardDropdown);
                    }}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-left flex items-center justify-between text-sm"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    <span className={formData.board ? "text-gray-900" : "text-gray-400"}>
                      {formData.board || "Board"}
                    </span>
                    <ChevronDown size={18} className="text-gray-400" />
                  </button>
                  {showBoardDropdown && (
                    <>
                      <div
                        className="fixed inset-0 z-10 bg-transparent"
                        onClick={() => setShowBoardDropdown(false)}
                      />
                      <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                        {boards.map((board) => (
                          <button
                            key={board}
                            onClick={() => {
                              setFormData({ ...formData, board });
                              setShowBoardDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                            style={{ fontFamily: FONT_FAMILY }}
                          >
                            {board}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="relative">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    Medium
                  </label>
                  <button
                    onClick={() => {
                      setShowClassDropdown(false);
                      setShowBoardDropdown(false);
                      setShowAcademicYearDropdown(false);
                      setShowMediumDropdown(!showMediumDropdown);
                    }}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-left flex items-center justify-between text-sm"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    <span className={formData.medium ? "text-gray-900" : "text-gray-400"}>
                      {formData.medium || "Medium"}
                    </span>
                    <ChevronDown size={18} className="text-gray-400" />
                  </button>
                  {showMediumDropdown && (
                    <>
                      <div
                        className="fixed inset-0 z-10 bg-transparent"
                        onClick={() => setShowMediumDropdown(false)}
                      />
                      <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                        {mediums.map((medium) => (
                          <button
                            key={medium}
                            onClick={() => {
                              setFormData({ ...formData, medium });
                              setShowMediumDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                            style={{ fontFamily: FONT_FAMILY }}
                          >
                            {medium}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="relative">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    Academic Year
                  </label>
                  <button
                    onClick={() => {
                      setShowClassDropdown(false);
                      setShowBoardDropdown(false);
                      setShowMediumDropdown(false);
                      setShowAcademicYearDropdown(!showAcademicYearDropdown);
                    }}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-left flex items-center justify-between text-sm"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    <span className={formData.academicYear ? "text-gray-900" : "text-gray-400"}>
                      {formData.academicYear || "Academic Year"}
                    </span>
                    <ChevronDown size={18} className="text-gray-400" />
                  </button>
                  {showAcademicYearDropdown && (
                    <>
                      <div
                        className="fixed inset-0 z-10 bg-transparent"
                        onClick={() => setShowAcademicYearDropdown(false)}
                      />
                      <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                        {academicYears.map((year) => (
                          <button
                            key={year}
                            onClick={() => {
                              setFormData({ ...formData, academicYear: year });
                              setShowAcademicYearDropdown(false);
                            }}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                            style={{ fontFamily: FONT_FAMILY }}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-normal text-gray-700 mb-3"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  Preferred Subjects
                </label>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      onClick={() => toggleSubject(subject)}
                      className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: formData.preferredSubjects.includes(subject)
                          ? "#F3E8FF"
                          : "#FFFFFF",
                        color: formData.preferredSubjects.includes(subject)
                          ? colors.brand.primarySoft
                          : "#6B7280",
                        border: formData.preferredSubjects.includes(subject)
                          ? `1px solid ${colors.brand.primarySoft}`
                          : "1px solid #E5E7EB",
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ID Proof Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <h2
                className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6"
                style={{ fontFamily: FONT_FAMILY }}
              >
                ID Proof
              </h2>
              <div className="flex flex-col md:flex-row gap-4">
                <label
                  className="text-center cursor-pointer hover:border-purple-400 transition-colors bg-white flex flex-col items-center justify-center border-2 border-dashed border-gray-300 w-full md:w-[379px]"
                  style={{
                    height: "140px",
                    borderRadius: "8px",
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                  <CloudUpload
                    size={32}
                    className="md:w-10 md:h-10 mb-2 md:mb-3"
                    style={{ color: colors.brand.primarySoft }}
                  />
                  <p
                    className="text-xs md:text-sm font-bold text-gray-900 mb-1 md:mb-2"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    Aadhar Card <span style={{ color: "#EF4444" }}>*</span>
                  </p>
                  <p
                    className="text-xs text-gray-500"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    PDF/JPG/PNG, max 5MB
                  </p>
                </label>
                <label
                  className="text-center cursor-pointer hover:border-purple-400 transition-colors bg-white flex flex-col items-center justify-center border-2 border-dashed border-gray-300 w-full md:w-[379px]"
                  style={{
                    height: "140px",
                    borderRadius: "8px",
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                  <CloudUpload
                    size={32}
                    className="md:w-10 md:h-10 mb-2 md:mb-3"
                    style={{ color: colors.brand.primarySoft }}
                  />
                  <p
                    className="text-xs md:text-sm font-bold text-gray-900 mb-1 md:mb-2"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    School ID Card <span style={{ color: "#EF4444" }}>*</span>
                  </p>
                  <p
                    className="text-xs text-gray-500"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    PDF/JPG/PNG, max 5MB
                  </p>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="w-full md:w-[246px] text-sm md:text-base font-semibold text-white py-3 md:py-0"
              style={{
                height: "56px",
                borderRadius: "8px",
                backgroundColor: colors.brand.primarySoft,
                fontFamily: FONT_FAMILY,
              }}
            >
              Submit Referral
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferStudentsFormPage;


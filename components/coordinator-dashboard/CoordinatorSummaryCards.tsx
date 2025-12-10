"use client";

import React from "react";
import { IndianRupee, UserPlus, ArrowUp, GraduationCap } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import { FONT_FAMILY, colors } from "@/theme";

const CoordinatorSummaryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
      {/* Profile Completion Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
        <div className="flex flex-col items-center text-center">
          <div 
            className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2 md:mb-3 relative" 
            style={{ 
              border: `2px solid ${colors.brand.primarySoft}`,
              backgroundColor: "#F3F4F6"
            }}
          >
            <UserPlus 
              size={28} 
              className="md:w-10 md:h-10 text-gray-700" 
              style={{ color: "#374151" }}
            />
            <div 
              className="absolute -top-0.5 -right-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.brand.primarySoft }}
            >
              <span className="text-white text-[10px] md:text-xs font-bold leading-none">+</span>
            </div>
          </div>
          <p
            className="text-xs md:text-sm text-gray-500 mb-1"
            style={{ fontFamily: FONT_FAMILY }}
          >
            20% Completed
          </p>
          <Link
            href="/coordinator-dashboard/profile"
            className="text-xs md:text-sm font-semibold underline"
            style={{
              color: colors.brand.primarySoft,
              fontFamily: FONT_FAMILY,
            }}
          >
            Complete your Profile
          </Link>
        </div>
      </div>
      {/* Total Earnings Card */}
      <div className="rounded-lg border border-gray-200 px-4 md:px-6 pt-4 md:pt-6 pb-3 md:pb-4" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#10B981" }}
          >
            <IndianRupee size={20} className="md:w-6 md:h-6" style={{ color: "#FFFFFF" }} />
          </div>
          <div 
            className="flex items-center gap-1 px-2 py-1 rounded-full"
            style={{ backgroundColor: "#D1FAE5" }}
          >
            <ArrowUp size={12} className="md:w-4 md:h-4" style={{ color: "#10B981" }} />
            <span
              className="text-xs md:text-sm font-semibold"
              style={{ color: "#10B981", fontFamily: FONT_FAMILY }}
            >
              12%
            </span>
          </div>
        </div>
        <p
          className="text-xl md:text-2xl font-bold text-gray-900 mb-1"
          style={{ fontFamily: FONT_FAMILY }}
        >
          ₹2,45,680
        </p>
        <p
          className="text-xs md:text-sm text-gray-700 md:text-gray-600"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Total Earnings
        </p>
      </div>

      {/* This Month Earnings Card */}
      <div className="rounded-lg border border-gray-200 px-4 md:px-6 pt-4 md:pt-6 pb-3 md:pb-4" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#F97316" }}
          >
            <IndianRupee size={20} className="md:w-6 md:h-6" style={{ color: "#FFFFFF" }} />
          </div>
          <div 
            className="flex items-center gap-1 px-2 py-1 rounded-full"
            style={{ backgroundColor: "#FED7AA" }}
          >
            <ArrowUp size={12} className="md:w-4 md:h-4" style={{ color: "#F97316" }} />
            <span
              className="text-xs md:text-sm font-semibold"
              style={{ color: "#F97316", fontFamily: FONT_FAMILY }}
            >
              12%
            </span>
          </div>
        </div>
        <p
          className="text-xl md:text-2xl font-bold text-gray-900 mb-1"
          style={{ fontFamily: FONT_FAMILY }}
        >
          ₹5,680
        </p>
        <p
          className="text-xs md:text-sm text-gray-700 md:text-gray-600"
          style={{ fontFamily: FONT_FAMILY }}
        >
          This Month Earnings
        </p>
      </div>

      {/* Refer Students Card */}
      <div className="rounded-lg border border-gray-200 px-4 md:px-6 pt-4 md:pt-6 pb-3 md:pb-4" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: colors.brand.primarySoft }}
          >
            <GraduationCap size={20} className="md:w-6 md:h-6" style={{ color: "#FFFFFF" }} />
          </div>
          <div 
            className="flex items-center gap-1 px-2 py-1 rounded-full"
            style={{ backgroundColor: colors.brand.primarySoft + "20" }}
          >
            <ArrowUp size={12} className="md:w-4 md:h-4" style={{ color: colors.brand.primarySoft }} />
            <span
              className="text-xs md:text-sm font-semibold"
              style={{
                color: colors.brand.primarySoft,
                fontFamily: FONT_FAMILY,
              }}
            >
              15%
            </span>
          </div>
        </div>
        <p
          className="text-xl md:text-2xl font-bold text-gray-900 mb-1"
          style={{ fontFamily: FONT_FAMILY }}
        >
          1,248
        </p>
        <p
          className="text-xs md:text-sm text-gray-700 md:text-gray-600"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Refer Students
        </p>
      </div>
    </div>
  );
};

export default CoordinatorSummaryCards;


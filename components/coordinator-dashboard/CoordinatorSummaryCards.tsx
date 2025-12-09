"use client";

import React from "react";
import { IndianRupee, UserPlus, ArrowUp, GraduationCap } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import { FONT_FAMILY, colors } from "@/theme";

const CoordinatorSummaryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {/* Profile Completion Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-3" style={{ border: `2px solid ${colors.brand.primarySoft}` }}>
            <ImageWithFallback
              src="/images/avatars/tutor-profile.jpg"
              alt="Profile"
              width={80}
              height={80}
              className="w-full h-full object-cover"
              fallback={
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <UserPlus size={40} className="text-gray-600" />
                </div>
              }
            />
          </div>
          <p
            className="text-sm text-gray-500 mb-1"
            style={{ fontFamily: FONT_FAMILY }}
          >
            20% Completed
          </p>
          <Link
            href="/coordinator-dashboard/profile"
            className="text-sm font-semibold underline"
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
      <div className="bg-white rounded-lg border border-gray-200 px-6 pt-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#10B981" }}
          >
            <IndianRupee size={24} style={{ color: "#FFFFFF" }} />
          </div>
          <div className="flex items-center gap-1">
            <ArrowUp size={16} style={{ color: "#10B981" }} />
            <span
              className="text-sm font-semibold"
              style={{ color: "#10B981", fontFamily: FONT_FAMILY }}
            >
              12%
            </span>
          </div>
        </div>
        <p
          className="text-2xl font-bold text-gray-900 mb-1"
          style={{ fontFamily: FONT_FAMILY }}
        >
          ₹2,45,680
        </p>
        <p
          className="text-sm text-gray-600"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Total Earnings
        </p>
      </div>

      {/* This Month Earnings Card */}
      <div className="bg-white rounded-lg border border-gray-200 px-6 pt-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#F97316" }}
          >
            <IndianRupee size={24} style={{ color: "#FFFFFF" }} />
          </div>
          <div className="flex items-center gap-1">
            <ArrowUp size={16} style={{ color: "#F97316" }} />
            <span
              className="text-sm font-semibold"
              style={{ color: "#F97316", fontFamily: FONT_FAMILY }}
            >
              12%
            </span>
          </div>
        </div>
        <p
          className="text-2xl font-bold text-gray-900 mb-1"
          style={{ fontFamily: FONT_FAMILY }}
        >
          ₹5,680
        </p>
        <p
          className="text-sm text-gray-600"
          style={{ fontFamily: FONT_FAMILY }}
        >
          This Month Earnings
        </p>
      </div>

      {/* Refer Students Card */}
      <div className="bg-white rounded-lg border border-gray-200 px-6 pt-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: colors.brand.primarySoft }}
          >
            <GraduationCap size={24} style={{ color: "#FFFFFF" }} />
          </div>
          <div className="flex items-center gap-1">
            <ArrowUp size={16} style={{ color: colors.brand.primarySoft }} />
            <span
              className="text-sm font-semibold"
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
          className="text-2xl font-bold text-gray-900 mb-1"
          style={{ fontFamily: FONT_FAMILY }}
        >
          1,248
        </p>
        <p
          className="text-sm text-gray-600"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Refer Students
        </p>
      </div>
    </div>
  );
};

export default CoordinatorSummaryCards;


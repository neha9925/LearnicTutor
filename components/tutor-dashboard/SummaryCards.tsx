"use client";

import React from "react";
import { IndianRupee, GraduationCap, BookOpen, User, ArrowUp } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import { FONT_FAMILY, colors } from "@/theme";

interface SummaryCardProps {
  type: "profile" | "earnings" | "students" | "classes";
  value: string;
  label: string;
  change?: {
    value: string;
    color: string;
  };
  profileImage?: string;
  profileLink?: string;
}

const SummaryCards: React.FC = () => {
  const cards: SummaryCardProps[] = [
    {
      type: "profile",
      value: "20%",
      label: "Completed",
      profileImage: "/images/avatars/tutor-profile.jpg",
      profileLink: "/tutor-dashboard/profile",
    },
    {
      type: "earnings",
      value: "₹2,45,680",
      label: "Total Earnings",
      change: { value: "↑12%", color: "#10B981" },
    },
    {
      type: "students",
      value: "1,248",
      label: "Active Students",
      change: { value: "↑15%", color: colors.brand.primarySoft },
    },
    {
      type: "classes",
      value: "150",
      label: "Total Classes",
      change: { value: "↑5%", color: "#F97316" },
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "earnings":
        return (
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: "#10B981",
            }}
          >
            <IndianRupee size={24} style={{ color: "#FFFFFF" }} />
          </div>
        );
      case "students":
        return (
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: colors.brand.primarySoft,
            }}
          >
            <GraduationCap size={24} style={{ color: "#FFFFFF" }} />
          </div>
        );
      case "classes":
        return (
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: "#F97316",
            }}
          >
            <BookOpen size={24} style={{ color: "#FFFFFF" }} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" style={{ width: '100%' }}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={card.type === "profile" ? "bg-white rounded-lg border border-gray-200 p-6" : "bg-white rounded-lg border border-gray-200 px-6 pt-6 pb-4"}
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          {card.type === "profile" ? (
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3" style={{ border: `2px solid ${colors.brand.primarySoft}` }}>
                <ImageWithFallback
                  src={card.profileImage || "/images/avatars/tutor-profile.jpg"}
                  alt="Profile"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  fallback={
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <User size={40} className="text-gray-600" />
                    </div>
                  }
                />
              </div>
              <p
                className="text-sm text-gray-500 mb-1"
                style={{
                  fontFamily: FONT_FAMILY,
                }}
              >
                {card.value} {card.label}
              </p>
              {card.profileLink && (
                <Link
                  href={card.profileLink}
                  className="text-sm font-semibold underline"
                  style={{
                    color: colors.brand.primarySoft,
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Complete your Profile
                </Link>
              )}
            </div>
          ) : (
            <div className="relative">
              {/* Top Row: Icon and Badge */}
              <div className="flex items-start justify-between mb-4">
                {/* Icon */}
                <div>{getIcon(card.type)}</div>
                
                {/* Change indicator in top right */}
                {card.change && (
                  <div className="flex items-center gap-1">
                    <ArrowUp size={16} style={{ color: card.change.color }} />
                    <span
                      className="text-sm font-semibold"
                      style={{
                        color: card.change.color,
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      {card.change.value.replace("↑", "")}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Value */}
              <p
                className="text-2xl font-bold text-gray-900 mb-1"
                style={{
                  fontFamily: FONT_FAMILY,
                }}
              >
                {card.value}
              </p>
              
              {/* Label */}
              <p
                className="text-sm text-gray-600"
                style={{
                  fontFamily: FONT_FAMILY,
                }}
              >
                {card.label}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;


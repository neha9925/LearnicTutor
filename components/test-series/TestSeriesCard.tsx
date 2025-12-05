"use client";

import React from "react";
import Link from "next/link";
import { FileQuestion, Clock, Star, Users, Flame } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Badge from "@/components/ui/Badge";
import { colors, radii, shadows, typography } from "@/theme";
import type { TestSeries } from "@/data/testSeries";

interface TestSeriesCardProps {
  testSeries: TestSeries;
  variant?: "default" | "popular";
}

const TestSeriesCard: React.FC<TestSeriesCardProps> = ({
  testSeries,
  variant = "default",
}) => {
  const styles = {
    card: {
      borderRadius: radii.lg,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: colors.background.cardBorder,
      boxShadow: variant === "popular" ? shadows.cardSoft : "0px 4px 12px rgba(0, 0, 0, 0.05)",
      backgroundColor: colors.neutral.white,
    },
    title: {
      ...typography.card.titleMd,
      color: colors.text.primary,
      fontWeight: 700,
      fontSize: variant === "popular" ? "18px" : "16px",
      lineHeight: variant === "popular" ? "24px" : "22px",
    },
    metaText: {
      ...typography.card.bodySm,
      color: colors.text.primary,
      fontSize: "14px",
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 400,
    },
    ratingNumber: {
      ...typography.card.bodySm,
      color: colors.text.primary,
      fontWeight: 600,
      fontSize: "14px",
      fontFamily: "var(--font-poppins), sans-serif",
    },
    ratingCount: {
      ...typography.card.bodySm,
      color: colors.text.primary,
      fontSize: "14px",
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 400,
    },
    originalPrice: {
      ...typography.card.bodySm,
      color: colors.text.tertiary,
      fontSize: variant === "popular" ? "16px" : "14px",
      textDecoration: "line-through",
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 400,
    },
    currentPrice: {
      ...typography.card.titleMd,
      color: "#6B47ED",
      fontWeight: 700,
      fontSize: variant === "popular" ? "24px" : "20px",
      fontFamily: "var(--font-poppins), sans-serif",
    },
    buyButton: {
      ...typography.button.secondary,
      backgroundColor: colors.neutral.white,
      color: "#6B47ED",
      border: "1px solid #6B47ED",
      boxShadow: "none",
    },
  } as const;

  return (
    <Link href={`/test-series/${testSeries.id}`}>
      <div
        className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col w-full cursor-pointer"
        style={styles.card}
      >
      <div
        className="relative w-full flex-shrink-0 overflow-hidden"
        style={{
          height: variant === "popular" ? "200px" : "180px",
          backgroundColor: variant === "popular" ? "#1a1a2e" : "#E0E7FF",
        }}
      >
        {variant === "popular" ? (
          <div className="w-full h-full relative overflow-hidden" style={{ backgroundColor: "#0a0a1a" }}>
            {/* Space-themed background with decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                className="text-white font-bold"
                style={{
                  fontSize: "80px",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontWeight: 700,
                  lineHeight: "1",
                  letterSpacing: "-2px",
                }}
              >
                1.0
              </span>
            </div>
            {/* Decorative stars and planets */}
            <div className="absolute top-6 left-6 w-2 h-2 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/50"></div>
            <div className="absolute top-10 right-16 w-1.5 h-1.5 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50"></div>
            <div className="absolute bottom-12 left-10 w-3 h-3 bg-purple-300 rounded-full shadow-lg shadow-purple-300/50"></div>
            <div className="absolute top-14 left-16 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-16 right-12 w-2 h-2 bg-pink-300 rounded-full shadow-lg shadow-pink-300/50"></div>
            <div className="absolute top-20 right-8 w-1.5 h-1.5 bg-cyan-300 rounded-full"></div>
            <div className="absolute bottom-8 left-20 w-1 h-1 bg-white rounded-full"></div>
            {/* Large planet/moon in bottom right with craters */}
            <div className="absolute bottom-0 right-0 w-24 h-24">
              <div className="w-full h-full bg-gray-300 rounded-full opacity-70 relative">
                <div className="absolute top-4 left-4 w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="absolute bottom-6 right-6 w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="absolute top-1/2 left-2 w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
              </div>
            </div>
            {/* Rocket illustration */}
            <div className="absolute bottom-6 left-6">
              <div className="relative">
                <div className="w-6 h-10 bg-red-500 rounded-t-lg"></div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-red-600"></div>
              </div>
            </div>
            {/* Alien plant/antenna on left */}
            <div className="absolute top-16 left-4">
              <div className="w-1 h-8 bg-red-400"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center relative" style={{ backgroundColor: "#E0E7FF" }}>
            {/* 3D Book Illustration */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Left side - Two upright books */}
              <div className="absolute left-6 bottom-6 flex items-end gap-2">
                {/* First book - reddish brown with gold lines */}
                <div className="relative">
                  <div className="w-10 h-24 bg-[#8B4513] rounded-sm shadow-xl" style={{ transform: "perspective(100px) rotateY(-5deg)" }}>
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-yellow-400"></div>
                    <div className="absolute top-7 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-yellow-400"></div>
                  </div>
                </div>
                {/* Second book - orange */}
                <div className="w-10 h-20 bg-orange-500 rounded-sm shadow-xl" style={{ transform: "perspective(100px) rotateY(-3deg)" }}></div>
              </div>
              
              {/* Right side - Stack of three horizontal books */}
              <div className="absolute right-6 bottom-6 flex flex-col gap-1">
                {/* Bottom book - blue */}
                <div className="w-20 h-5 bg-blue-500 rounded-sm shadow-lg"></div>
                {/* Middle book - olive green */}
                <div className="w-20 h-5 bg-[#808000] rounded-sm shadow-lg"></div>
                {/* Top book - open with pages */}
                <div className="relative">
                  <div className="w-20 h-6 bg-white rounded-sm shadow-xl">
                    <div className="absolute inset-0 flex flex-col gap-0.5 p-1.5">
                      <div className="w-full h-0.5 bg-gray-300"></div>
                      <div className="w-3/4 h-0.5 bg-gray-300"></div>
                      <div className="w-full h-0.5 bg-gray-300"></div>
                      <div className="w-2/3 h-0.5 bg-gray-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {testSeries.isBestseller && variant === "popular" && (
          <Badge
            variant="bestseller"
            position="top-right"
            icon={Flame}
            iconPosition="left"
            style={{
              gap: "4px",
            }}
          >
            Bestseller
          </Badge>
        )}
        {testSeries.isBestseller && variant !== "popular" && (
          <Badge
            variant="bestseller"
            position="top-right"
          >
            Bestseller
          </Badge>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 bg-white">
        <h3
          className="font-bold mb-4 line-clamp-2"
          style={styles.title}
        >
          {testSeries.title}
        </h3>

        {/* First Row: Questions and Duration */}
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5">
            <FileQuestion className="w-4 h-4" style={{ color: variant === "popular" ? colors.text.tertiary : colors.text.primary }} />
            <span style={styles.metaText}>
              {testSeries.questions} {variant === "popular" ? "questions" : "Questions"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" style={{ color: variant === "popular" ? colors.text.tertiary : colors.text.primary }} />
            <span style={styles.metaText}>
              {testSeries.duration} mins
            </span>
          </div>
        </div>

        {/* Second Row: Rating and Students */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
            <span style={styles.ratingNumber}>
              {testSeries.rating}
            </span>
            <span style={styles.ratingCount}>
              ({testSeries.reviews >= 1000 ? `${(testSeries.reviews / 1000).toFixed(1)}k` : testSeries.reviews})
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" style={{ color: variant === "popular" ? colors.text.tertiary : colors.text.primary }} />
            <span style={styles.metaText}>
              {testSeries.students >= 1000 ? `${(testSeries.students / 1000).toFixed(1)}k+` : `${testSeries.students}+`}
            </span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100">
          {/* Pricing Row */}
          <div className={`flex items-center ${variant === "popular" ? "gap-3 justify-between" : "gap-2"} mb-4`}>
            <div className="flex items-center gap-2">
              <span style={styles.originalPrice}>
                ₹{testSeries.originalPrice.toLocaleString()}
              </span>
              <span style={styles.currentPrice}>
                ₹{testSeries.currentPrice.toLocaleString()}
              </span>
            </div>
            {variant === "popular" && (
              <Badge variant="discount" position="inline">
                {testSeries.discount}% OFF
              </Badge>
            )}
          </div>
          <button
            className="w-full rounded-lg py-3 px-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={styles.buyButton}
            onClick={(e) => {
              e.stopPropagation();
              // Handle buy now action - could navigate to checkout
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default React.memo(TestSeriesCard);


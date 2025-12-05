"use client";

import React, { useMemo, useState } from "react";
import {
  Clock,
  MonitorPlay,
  Users,
  CheckCircle2,
  Star,
  Sun,
  Moon,
  Sunset,
  PlayCircle,
  Play,
  Lock,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import {
  formatCurrency,
  LiveClassData,
  LiveClassCurriculumLesson,
} from "@/data/liveClasses";
import CourseCard from "@/components/home/CourseCard";
import { liveClassCards, LiveClassCardData } from "@/data/liveClassesList";
import StarRating from "@/components/ui/StarRating";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { colors, gradients, radii, shadows, typography } from "@/theme";

interface VideoStatItem {
  icon: React.ReactNode;
  label?: string;
  helper?: string;
  onClick?: () => void;
  isActive?: boolean;
  ariaLabel?: string;
  className?: string;
  labelClassName?: string;
}

interface LiveClassDetailProps {
  course: LiveClassData;
  variant?: "default" | "video";
  videoStats?: VideoStatItem[];
}

const infoFont = typography.card.bodySm;

const textStyle = (overrides: React.CSSProperties = {}) => ({
  ...infoFont,
  ...overrides,
});

const numberFormatter = new Intl.NumberFormat("en-IN");

const LiveClassDetail: React.FC<LiveClassDetailProps> = ({
  course,
  variant = "default",
  videoStats = [],
}) => {
  const { batches, timings, curriculum, durationSummary, duration, rating, reviewsCount, students } =
    course;

  const [selectedBatch, setSelectedBatch] = useState(batches[0]?.id);
  const [selectedSlot, setSelectedSlot] = useState(timings[0]?.id);
  const [activeSection, setActiveSection] = useState(0);
  const isVideoVariant = variant === "video";

  const selectedBatchInfo = useMemo(() => {
    return batches.find((batch) => batch.id === selectedBatch);
  }, [batches, selectedBatch]);

  const timingGroups = useMemo(() => {
    const groups = new Map<string, typeof timings>();
    timings.forEach((slot) => {
      const key = slot.category || "Schedule";
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key)!.push(slot);
    });
    return Array.from(groups.entries());
  }, [timings]);

  const totalLessons = useMemo(() => {
    return curriculum.reduce((sum, section) => {
      if (section.lessonsCount) {
        return sum + section.lessonsCount;
      }
      if (section.lessons && section.lessons.length) {
        return sum + section.lessons.length;
      }
      if (section.topics && section.topics.length) {
        return sum + section.topics.length;
      }
      return sum;
    }, 0);
  }, [curriculum]);

  const durationLabel = durationSummary || duration;

  const videoMetrics = useMemo(() => {
    if (!isVideoVariant) return [];
    const metrics: Array<{ icon: string; label: string; helper?: string }> = [
      {
        icon: "⭐",
        label: `${rating.toFixed(1)}/5`,
        helper: `(${reviewsCount.toLocaleString()} Reviews)`,
      },
      {
        icon: "👥",
        label: `${numberFormatter.format(students)}+ Students`,
      },
    ];
    if (totalLessons) {
      metrics.push({
        icon: "🕒",
        label: `${totalLessons} Lessons${durationLabel ? ` • ${durationLabel}` : ""}`,
      });
    } else if (durationLabel) {
      metrics.push({
        icon: "🕒",
        label: durationLabel,
      });
    }
    return metrics;
  }, [rating, reviewsCount, students, totalLessons, durationLabel, isVideoVariant]);

  const includeIcons = ["🎥", "📥", "💡", "🚀", "🛠", "🧠"];

  const palette = {
    borderMuted: "rgba(148, 163, 184, 0.18)",
    borderLight: "rgba(148, 163, 184, 0.35)",
    borderMedium: "rgba(148, 163, 184, 0.6)",
    borderStrong: "rgba(17, 24, 39, 0.08)",
    backgroundMuted: colors.background.page,
    backgroundWhite: colors.neutral.white,
    accentDeepPurple: "#4C1D95",
    accentIndigo: "#4F46E5",
    accentBlue: "#4338CA",
    accentSky: "#2563EB",
    accentGreen: "#047857",
    accentOrange: "#B45309",
    accentOrangeDark: "#9A3412",
    textMuted: "#9CA3AF",
  } as const;

  const suggestedCourseCards = useMemo(() => {
    if (variant === "video") {
      return [] as LiveClassCardData[];
    }

    return course.suggestions
      .map((suggestion) => {
        const cardMatch = liveClassCards.find(
          (item) => item.id === (suggestion.cardId ?? suggestion.id)
        );
        if (!cardMatch) {
          return null;
        }
        return {
          ...cardMatch,
          href: `/live-classes/${suggestion.id}`,
        } as LiveClassCardData;
      })
      .filter((card): card is LiveClassCardData => Boolean(card));
  }, [course.suggestions, variant]);

  const displayPrice = selectedBatchInfo?.price ?? course.price;
  const displayOriginalPrice = course.originalPrice;

  const renderCategoryIcon = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes("morning")) {
      return <Sun className="w-5 h-5 text-[#6B47ED]" />;
    }
    if (lower.includes("evening")) {
      return <Moon className="w-5 h-5 text-[#6B47ED]" />;
    }
    if (lower.includes("afternoon")) {
      return <Sunset className="w-5 h-5 text-[#6B47ED]" />;
    }
    return <Clock className="w-5 h-5 text-[#6B47ED]" />;
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)] xl:grid-cols-[minmax(0,2.25fr)_minmax(320px,1fr)]">
          
          <div className="space-y-8">
            
            <div className="bg-white border border-gray-100 rounded-[28px] shadow-sm p-8">
              {isVideoVariant ? (
                <div className="space-y-8">
                  <button
                    type="button"
                    className="relative w-full rounded-[32px] overflow-hidden shadow-[0px_20px_40px_rgba(15,23,42,0.12)] focus:outline-none"
                    style={{ height: "320px" }}
                    aria-label="Play video"
                  >
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      width={960}
                      height={540}
                      className="absolute inset-0 w-full h-full object-cover"
                      fallback={
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6B47ED] to-[#5F3BF5]" />
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />
                    <MonitorPlay className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)]" />
                  </button>

                    <div className="space-y-3">
                      <h1
                        className="text-3xl md:text-[34px] text-gray-900"
                        style={textStyle({
                          fontWeight: 700,
                          lineHeight: "46px",
                          fontSize: "34px",
                        })}
                      >
                        {course.title}
                      </h1>
                    </div>

                  {isVideoVariant && videoStats.length > 0 && (
                    <div className="flex flex-wrap items-center gap-3">
                      {videoStats.map((stat, index) => {
                        const isInteractive = typeof stat.onClick === "function";
                        const isActive = Boolean(stat.isActive);
                        const Component = isInteractive ? "button" : "div";
                        return (
                          <Component
                            key={`${stat.label ?? "icon"}-${index}`}
                            type={isInteractive ? "button" : undefined}
                            onClick={stat.onClick}
                            className={cn(
                              "inline-flex items-center justify-center rounded-full border transition-all",
                              stat.label ? "px-5 py-3 gap-2 min-h-[44px] min-w-[110px]" : "p-3 min-h-[44px] min-w-[44px]",
                              isInteractive &&
                                "cursor-pointer hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#6B47ED]/20 active:translate-y-0",
                              isActive
                                ? "bg-gradient-to-r from-[#5F3BF5] to-[#6B47ED] border-transparent text-white shadow-[0_10px_24px_rgba(79,70,229,0.2)]"
                                : "bg-white border-[#D9DEE8] text-[#4B5563]",
                              stat.className
                            )}
                            style={textStyle({ fontWeight: 600 })}
                            aria-label={stat.ariaLabel ?? stat.label ?? "Video action"}
                          >
                            <span className="flex items-center justify-center text-lg">{stat.icon}</span>
                            {stat.label && (
                              <span
                                className={cn(isActive ? "text-white" : "text-[#4B5563]", stat.labelClassName)}
                                style={textStyle({ fontWeight: 600 })}
                              >
                                {stat.label}
                              </span>
                            )}
                          </Component>
                        );
                      })}
                    </div>
                  )}

                  <div
                    className="flex items-center gap-5 p-6 rounded-[24px] border"
                    style={{
                      backgroundColor: palette.backgroundMuted,
                      borderColor: palette.borderMuted,
                    }}
                  >
                    <div className="shrink-0 w-[72px] h-[72px] rounded-full overflow-hidden bg-white flex items-center justify-center shadow-[0px_8px_18px_rgba(15,23,42,0.08)]">
                      <ImageWithFallback
                        src={course.instructor.image || `/images/instructors/${course.instructor.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                        alt={course.instructor.name}
                        width={70}
                        height={70}
                        className="w-full h-full object-cover"
                        fallback={
                          <div className="w-full h-full flex items-center justify-center bg-purple-100">
                            <Users className="w-8 h-8 text-purple-500" />
                          </div>
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <p style={textStyle({ fontWeight: 700, fontSize: "18px", color: colors.text.primary })}>
                        {course.instructor.name}
                      </p>
                      <p style={textStyle({ color: colors.text.secondary, fontSize: "14px" })}>
                        {[
                          course.instructor.experience,
                          course.instructor.expertise,
                          course.instructor.qualification,
                        ]
                          .filter(Boolean)
                          .join(" • ")}
                      </p>
                      {course.instructor.rating && (
                        <div
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border"
                          style={{
                            borderColor: palette.borderLight,
                            backgroundColor: palette.backgroundWhite,
                            marginTop: "16px",
                          }}
                        >
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                          <p style={textStyle({ fontWeight: 600, fontSize: "14px", color: colors.text.primary })}>
                            {course.instructor.rating.toFixed(1)} Rating
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="space-y-4">
                    {course.tag && (
                      <Badge
                        variant="info"
                        position="inline"
                        style={{
                          ...infoFont,
                          fontWeight: 600,
                          color: colors.brand.primarySoft,
                          backgroundColor: colors.brand.primaryTint,
                          fontSize: "14px",
                          padding: "3px 12px",
                        }}
                      >
                        {course.tag}
                      </Badge>
                    )}
                    <div className="space-y-2">
                      <h1
                        className="text-3xl md:text-[34px] text-gray-900"
                        style={textStyle({
                          fontWeight: 700,
                          lineHeight: "46px",
                          fontSize: "34px",
                        })}
                      >
                        {course.title}
                      </h1>
                      <p
                        className="text-base md:text-lg text-gray-600 max-w-3xl"
                        style={textStyle({
                          fontWeight: 400,
                          lineHeight: "28px",
                          fontSize: "18px",
                        })}
                      >
                        {course.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    {[
                      {
                        icon: "⭐",
                        label: `${course.rating.toFixed(1)}/5`,
                        helper: `(${course.reviewsCount.toLocaleString()} Reviews)`,
                        bg: "#FFF5E5",
                        color: "#B45309",
                      },
                      {
                        icon: "👥",
                        label: `${course.students.toLocaleString()}+ Students`,
                        bg: "#EEF4FF",
                        color: "#4338CA",
                      },
                      {
                        icon: "🕒",
                        label: course.durationSummary || `${course.duration}`,
                        helper: course.durationSummary ? undefined : `${course.liveSessions}+ Live Sessions`,
                        bg: "#E9F8EF",
                        color: palette.accentGreen,
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
                        style={{
                          backgroundColor: stat.bg,
                          color: stat.color,
                          ...infoFont,
                          fontWeight: 600,
                        }}
                      >
                        <span className="text-xl">{stat.icon}</span>
                        <div className="flex flex-col leading-tight">
                          <span>{stat.label}</span>
                          {stat.helper && (
                            <span style={{ fontWeight: 500, fontSize: "13px", color: stat.color }}>
                              {stat.helper}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {(course.benefits || [
                      { label: "Notes PDF", icon: "📄", bgColor: "#F5ECFF", textColor: "#6B47ED" },
                      { label: "Doubt Sessions", icon: "❓", bgColor: "#E7F1FF", textColor: "#2563EB" },
                      { label: "Certificate", icon: "🏆", bgColor: "#FFF7E6", textColor: "#B45309" },
                      { label: "Assignments", icon: "📝", bgColor: "#FEEBDD", textColor: "#9A3412" },
                    ]).map((benefit) => (
                      <span
                        key={benefit.label}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                        style={{
                          ...infoFont,
                          fontWeight: 600,
                          backgroundColor: benefit.bgColor,
                          color: benefit.textColor,
                          border: benefit.borderColor ? `1px solid ${benefit.borderColor}` : "none",
                        }}
                      >
                        <span className="text-lg">{benefit.icon}</span>
                        {benefit.label}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50">
                    <ImageWithFallback
                      src={course.instructor.image || `/images/instructors/${course.instructor.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={course.instructor.name}
                      width={72}
                      height={72}
                      className="rounded-full object-cover"
                      style={{ width: "72px", height: "72px" }}
                      fallback={
                        <div
                          className="rounded-full bg-purple-100 flex items-center justify-center"
                          style={{ width: "72px", height: "72px" }}
                        >
                          <Users className="w-8 h-8 text-purple-500" />
                        </div>
                      }
                    />
                    <div className="flex-1">
                      <p style={textStyle({ fontWeight: 700, fontSize: "18px", color: colors.text.primary })}>
                        {course.instructor.name}
                      </p>
                      <p style={textStyle({ color: colors.text.secondary, fontSize: "14px" })}>
                        {[
                          course.instructor.experience,
                          course.instructor.qualification,
                        ]
                          .filter(Boolean)
                          .join(" • ")}
                      </p>
                    </div>
                    {course.instructor.rating && (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200">
                        <Star className="w-4 h-4 text-amber-400" />
                        <span style={textStyle({ fontWeight: 600, color: colors.text.primary })}>
                          {course.instructor.rating.toFixed(1)} Rating
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            
            {course.batches.length > 0 && (
              <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-4 sm:p-6 md:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-[22px]" style={textStyle({ fontWeight: 700, color: colors.text.primary })}>
                        Choose Your Batch Size
                      </h3>
                      <p className="text-xs sm:text-sm" style={textStyle({ color: colors.text.secondary })}>
                        Flexible schedules to match your learning pace
                      </p>
                    </div>
                    {selectedBatchInfo && (
                      <div className="text-left sm:text-right">
                        <p className="text-xs" style={textStyle({ color: colors.text.secondary })}>Starting from</p>
                        <p className="text-base sm:text-lg" style={textStyle({ fontWeight: 700, color: colors.brand.primarySoft })}>
                          {formatCurrency(selectedBatchInfo.price)}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    {course.batches.map((batch) => {
                      const isActive = selectedBatch === batch.id;
                      return (
                        <button
                          key={batch.id}
                          onClick={() => setSelectedBatch(batch.id)}
                          className="text-left p-4 sm:p-5 md:p-6 rounded-3xl border transition-all w-full"
                          style={{
                            borderColor: isActive ? colors.brand.primarySoft : palette.borderStrong,
                            backgroundColor: isActive ? "#F5F1FF" : palette.backgroundWhite,
                            boxShadow: isActive
                              ? "0px 18px 45px rgba(107, 71, 237, 0.18)"
                              : "0px 8px 24px rgba(15, 23, 42, 0.04)",
                            transform: isActive ? "translateY(-4px)" : "translateY(0px)",
                            color: "#1F2937",
                            ...infoFont,
                          }}
                        >
                          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 h-full">
                            <div className="space-y-1 sm:space-y-2">
                              <p className="text-base sm:text-lg md:text-[18px]" style={{ fontWeight: 600, color: colors.text.primary }}>{batch.title}</p>
                              <p className="text-xl sm:text-2xl md:text-2xl" style={{ fontWeight: 700, color: "#4C1D95" }}>
                                {formatCurrency(batch.price)}
                              </p>
                              {batch.studentsCount && (
                                <p className="text-sm sm:text-base" style={{ fontWeight: 500, color: colors.text.secondary }}>
                                  {batch.studentsCount} Students
                                </p>
                              )}
                            </div>
                            {batch.badgeLabel && (
                              <Badge
                                variant="info"
                                position="inline"
                                style={{
                                  backgroundColor: batch.badgeBg || "#EEF4FF",
                                  color: batch.badgeTextColor || "#4338CA",
                                  fontWeight: 600,
                                  fontSize: "14px",
                                  padding: "8px 16px",
                                }}
                              >
                                {batch.badgeLabel}
                              </Badge>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            
            {course.timings.length > 0 && (
              <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-4 sm:p-6 md:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl md:text-[22px]" style={textStyle({ fontWeight: 700, color: colors.text.primary })}>
                    Select Timing Slot
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-8 md:gap-10">
                    {timingGroups.map(([category, slots]) => (
                      <div key={category} className="space-y-2 sm:space-y-3 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {renderCategoryIcon(category)}
                          <span className="text-sm sm:text-base" style={textStyle({ fontWeight: 600, color: colors.text.primary })}>
                            {category}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {slots.map((slot) => {
                            const isActive = selectedSlot === slot.id;
                            return (
                              <button
                                key={slot.id}
                                onClick={() => setSelectedSlot(slot.id)}
                                className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-xl border transition-all text-xs sm:text-sm md:text-base whitespace-nowrap"
                                style={{
                                  ...textStyle({
                                    fontWeight: 600,
                                    color: isActive ? "#4C1D95" : "#1F2937",
                                  }),
                                  borderColor: isActive ? "#6B47ED" : "rgba(148, 163, 184, 0.6)",
                                  backgroundColor: isActive ? "#F4ECFF" : "#FFFFFF",
                                  boxShadow: isActive
                                    ? "0px 12px 30px rgba(107, 71, 237, 0.18)"
                                    : "0px 4px 12px rgba(15, 23, 42, 0.06)",
                                }}
                              >
                                {slot.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8">
                <h3 className="mb-6" style={textStyle({ fontWeight: 700, fontSize: "22px", color: colors.text.primary })}>
                {isVideoVariant ? "Video Curriculum" : "Course Curriculum"}
                </h3>
                <div className="space-y-4">
                  {course.curriculum.map((section, idx) => {
                    const isActive = activeSection === idx;
                    const lessons: LiveClassCurriculumLesson[] = section.lessons
                      ? section.lessons
                      : (section.topics || []).map((topic, topicIdx) => ({
                          title: topic,
                          isLocked: topicIdx !== 0,
                          isPreview: topicIdx === 0,
                        }));

                    const lessonCount = section.lessonsCount ?? lessons.length;
                    const summaryText = [
                    lessonCount ? `${lessonCount} Lessons` : undefined,
                    section.totalDuration,
                    ]
                      .filter(Boolean)
                      .join(" • ");

                    return (
                      <div
                        key={section.title}
                      className={cn(
                        "rounded-2xl border transition-all",
                        isVideoVariant && "rounded-2xl bg-white"
                      )}
                        style={{
                        borderColor: "#E5E7EB",
                        backgroundColor: isActive ? "#F9F9FF" : "#FFFFFF",
                        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveSection(idx)}
                          className="w-full flex items-center justify-between gap-4 px-6 py-5"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center font-semibold"
                              style={{
                                backgroundColor: isActive
                                  ? "#6B47ED"
                                  : "#F3F4F6",
                                color: isActive
                                  ? "#FFFFFF"
                                  : "#1F2937",
                                ...infoFont,
                              }}
                            >
                              {idx + 1}
                            </div>
                            <div className="text-left">
                              <p
                                style={{
                                  ...infoFont,
                                  fontWeight: 700,
                                  fontSize: "18px",
                                  color: "#1F2937",
                                }}
                              >
                                {section.title}
                              </p>
                              {summaryText && (
                                <p style={textStyle({ fontWeight: 500, fontSize: "14px", color: "#9CA3AF" })}>
                                  {summaryText}
                                </p>
                              )}
                            </div>
                          </div>
                        {isActive ? (
                          <ChevronDown className="w-5 h-5" style={{ color: "#9CA3AF" }} />
                        ) : (
                          <ChevronRight className="w-5 h-5" style={{ color: "#9CA3AF" }} />
                        )}
                        </button>

                        {isActive && lessons.length > 0 && (
                        <div className="pb-6 px-6 border-t border-gray-200 pt-4">
                          <div className="space-y-4">
                            {lessons.map((lesson, lessonIdx) => {
                              return (
                              <div key={lesson.title} className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                  <div
                                    className="w-7 h-7 rounded-full flex items-center justify-center"
                                    style={{
                                      backgroundColor: lesson.isPreview
                                        ? "#10B981"
                                        : undefined,
                                    }}
                                  >
                                    {lesson.isPreview ? (
                                      <Play className="w-3 h-3 ml-0.5" style={{ color: "#FFFFFF" }} fill="#FFFFFF" />
                                    ) : (
                                      <Lock className="w-4 h-4" style={{ color: "#9CA3AF" }} />
                                    )}
                                  </div>
                                  <div className="flex flex-col">
                                    <p style={textStyle({ fontWeight: 500, color: "#1F2937", fontSize: "16px" })}>
                                      {lesson.title}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3 text-sm" style={textStyle()}>
                                  {lesson.isPreview ? (
                                    <span style={{ color: "#9CA3AF", fontSize: "14px" }}>Preview</span>
                                  ) : lesson.duration ? (
                                    <span style={{ color: "#9CA3AF", fontSize: "14px" }}>{lesson.duration}</span>
                                  ) : null}
                                </div>
                              </div>
                            )})}
                          </div>
                        </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h3 style={textStyle({ fontWeight: 700, fontSize: "22px", color: colors.text.primary })}>
                  Student Reviews
                </h3>
                <Button
                  variant="primary"
                  className="px-6 py-3"
                  style={{
                    background: "#572EEE",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    border: "none",
                    boxShadow: "none",
                    borderRadius: "8px",
                  }}
                >
                  Leave Review
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                {course.reviews.slice(0, 2).map((review) => (
                  <div
                    key={review.id}
                    className="flex-1 p-6 rounded-2xl border"
                    style={{
                      borderColor: palette.borderLight,
                      backgroundColor: palette.backgroundWhite,
                      boxShadow: "0px 10px 28px rgba(15, 23, 42, 0.06)",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <ImageWithFallback
                        src={review.avatar || `/images/students/${review.name.toLowerCase().split(" ").join("-")}.jpg`}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                        fallback={
                          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-purple-700 font-semibold" style={textStyle()}>
                              {review.name.charAt(0)}
                            </span>
                          </div>
                        }
                      />
                      <div className="flex-1">
                        <p style={textStyle({ fontWeight: 600, fontSize: "16px", color: colors.text.primary })}>
                          {review.name}
                        </p>
                        <StarRating rating={review.rating} size="sm" />
                      </div>
                    </div>
                    <p
                      style={{
                        ...infoFont,
                        color: "#4B5563",
                        fontSize: "15px",
                        lineHeight: "24px",
                      }}
                    >
                      &ldquo;{review.comment}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="space-y-6">
            <div
              className={cn(
                "bg-white border border-gray-100 rounded-[32px] p-8",
                isVideoVariant ? "shadow-none" : "shadow-sm"
              )}
              style={
                isVideoVariant
                  ? undefined
                  : {
                      boxShadow: "0px 32px 60px rgba(79, 70, 229, 0.08)",
                      backgroundColor: "#FFFFFF",
                      borderColor: "rgba(229, 231, 235, 1)",
                    }
              }
            >
              {isVideoVariant ? (
                <div className="flex flex-col gap-6">
                  <div className="text-center space-y-1">
                    <p
                      style={{
                        ...infoFont,
                        fontWeight: 700,
                        fontSize: "32px",
                        color: "#5A3FFF",
                      }}
                    >
                      {formatCurrency(course.price)}
                    </p>
                    <p
                      style={{
                        ...infoFont,
                        color: "#9BA3B4",
                        textDecoration: "line-through",
                        fontSize: "18px",
                      }}
                    >
                      {formatCurrency(course.originalPrice)}
                    </p>
                  </div>

                  <div>
                    <p style={textStyle({ fontWeight: 700, color: colors.text.primary, marginBottom: "12px" })}>
                      What&apos;s Included:
                    </p>
                    <div className="space-y-2">
                      {course.includes.slice(0, 5).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#22C55E] mt-1" />
                          <span style={textStyle({ fontSize: "14px", color: colors.text.secondary })}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/checkout" className="w-full flex justify-center">
                    <Button
                      className="w-full sm:w-[335.94px] text-white py-3 rounded-full"
                      style={{
                        background: "#572EEE",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontWeight: 600,
                        fontSize: "15px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        textAlign: "center",
                        height: "49.87013244628906px",
                        borderRadius: "12.47px",
                      }}
                    >
                      Buy Now
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <div className="text-center space-y-2">
                    <div className="flex flex-col">
                      <span style={textStyle({ fontWeight: 700, fontSize: "34px", color: colors.brand.primarySoft })}>
                        {formatCurrency(displayPrice)}
                      </span>
                      {displayOriginalPrice && (
                        <span
                          style={textStyle({ color: palette.textMuted, textDecoration: "line-through", fontSize: "20px" })}
                        >
                          {formatCurrency(displayOriginalPrice)}
                        </span>
                      )}
                    </div>
                    {selectedBatchInfo && selectedSlot && (
                      <p style={textStyle({ color: colors.text.secondary, fontSize: "14px", fontWeight: 500 })}>
                        {selectedBatchInfo.title} • {course.timings.find((slot) => slot.id === selectedSlot)?.label}
                      </p>
                    )}
                  </div>

                  <div>
                    <p style={textStyle({ fontWeight: 700, color: colors.text.primary, marginBottom: "12px" })}>
                      What&apos;s Included:
                    </p>
                    <div className="space-y-2">
                      {course.includes.slice(0, 6).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#22C55E] mt-1" />
                          <span style={textStyle({ fontSize: "14px", color: colors.text.secondary })}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 items-center w-full">
                    <Link href="/checkout" className="w-full flex justify-center">
                      <Button
                        className="w-full sm:w-[335.94px] text-white py-3 rounded-full text-sm sm:text-[15px] min-h-[44px] sm:min-h-[49.87px]"
                        style={{
                          background: "linear-gradient(135deg, #6B47ED 0%, #6933FF 100%)",
                          fontFamily: "var(--font-poppins), sans-serif",
                          fontWeight: 600,
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          textAlign: "center",
                          borderRadius: "12.47px",
                        }}
                      >
                        Enroll Now
                      </Button>
                    </Link>
                    <div className="w-full flex justify-center">
                      <button
                        className="w-full sm:w-[335.94px] py-3 rounded-full border text-sm sm:text-base min-h-[44px] sm:min-h-[51.95px]"
                        style={{
                          ...textStyle({ fontWeight: 600, color: "#1F2937" }),
                          borderColor: "rgba(148, 163, 184, 0.6)",
                          borderRadius: "12.47px",
                          borderWidth: "1.04px",
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <div className="text-center space-y-1">
                    <div className="flex items-center justify-center gap-2 text-sm" style={textStyle({ color: palette.accentGreen, fontWeight: 500 })}>
                      <CheckCircle2 className="w-4 h-4" /> 7-day Money Back Guarantee
                    </div>
                    <p style={textStyle({ color: colors.text.secondary, fontSize: "13px" })}>
                      EMI available starting ₹1,999/month
                    </p>
                  </div>
                </div>
              )}
            </div>

            
            {(isVideoVariant ? course.suggestions.length > 0 : suggestedCourseCards.length > 0) && (
              <div
                className="bg-white rounded-[28px] p-4 sm:p-5 md:p-6"
                style={{ boxShadow: "0px 1.04px 2.08px 0px #0000000D" }}
              >
              <h4 className="mb-4 sm:mb-5 text-lg sm:text-xl" style={textStyle({ fontWeight: 700, color: colors.text.primary })}>
                {isVideoVariant ? "Suggested Videos" : "Suggested Classes"}
              </h4>
              {!isVideoVariant && suggestedCourseCards.length > 0 ? (
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
                  {suggestedCourseCards.slice(0, 3).map((card) => (
                    <div key={card.id} className="w-full max-w-full">
                      <CourseCard
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        instructor={card.instructor}
                        image={card.image}
                        rating={card.rating}
                        price={card.price}
                        originalPrice={card.originalPrice}
                        students={card.students}
                        duration={card.duration}
                        tag={card.tag}
                        href={card.href ?? `/live-classes/${card.id}`}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {course.suggestions.map((suggestion) => (
                    <Link
                      key={suggestion.id}
                      href={isVideoVariant ? `/videos/${suggestion.id}` : `/live-classes/${suggestion.id}`}
                      className="flex items-center gap-4"
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, #EFF1F5 0%, #C9CEDA 100%)",
                        }}
                      >
                        <MonitorPlay className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p style={textStyle({ fontWeight: 600, fontSize: "16px", color: colors.text.primary })}>
                          {suggestion.title}
                        </p>
                        <p style={textStyle({ color: colors.text.secondary, fontSize: "14px" })}>{suggestion.tutor}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveClassDetail;

"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, Clock, Target, Users, Star, BookOpen, Play, Trophy, Video, ClipboardList, Circle, TrendingUp, Check, List } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import StarRating from "@/components/ui/StarRating";
import { myLearningData } from "@/data/myLearning";
import { colors, gradients, shadows, typography } from "@/theme";

const MyLearningsPage: React.FC = () => {
  const { lastTest, stats, classes, videos, testSeries } = myLearningData;

  return (
    <div className="min-h-screen" style={{
      background: "linear-gradient(180deg, #F3F0FF 0%, #FFFFFF 50%)",
    }}>
      {/* Hero Banner */}
      <div
        className="w-full py-8 md:py-12 lg:py-14 xl:py-16 px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24"
        style={{
          background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
        }}
      >
        <div className="container mx-auto text-center">
          <h1
            className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-3 md:mb-4"
            style={{
              ...typography.section.headingXl,
              color: colors.neutral.white,
              fontWeight: 700,
              fontFamily: "var(--font-poppins), sans-serif",
            }}
          >
            My Learnings
          </h1>
          <p
            className="text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl"
            style={{
              ...typography.section.descriptionLg,
              color: "rgba(255, 255, 255, 0.9)",
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 400,
            }}
          >
            Track your learning journey and access all your enrolled content.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24 py-6 md:py-8 lg:py-10 xl:py-12">
        {/* Last Test Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-5 xl:gap-6 2xl:gap-8 items-start">
            {/* Test Result Card */}
            <Card
              className="w-full lg:w-[500px] xl:w-[569px] lg:flex-shrink-0"
              style={{
                height: "auto",
                minHeight: "368px",
                borderRadius: "12px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: colors.background.cardBorder,
                boxShadow: shadows.cardSoft,
                overflow: "hidden",
                backgroundColor: "#F3F0FF",
              }}
            >
              <CardContent className="p-0 h-full flex flex-col">
                {/* Header Section with Purple Gradient */}
                <div
                  className="px-4 md:px-6 py-3 md:py-4"
                  style={{
                    background: gradients.buttonPrimary,
                  }}
                >
                  <div
                    className="text-sm md:text-base lg:text-base"
                    style={{
                      ...typography.card.titleMd,
                      color: colors.neutral.white,
                      fontWeight: 700,
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    Last Test : {lastTest.testName}
                  </div>
                </div>
                
                {/* Rank Section with Light Purple Background */}
                <div
                  className="px-4 md:px-6 py-4 md:py-6 text-center"
                  style={{
                    backgroundColor: "#F3F0FF",
                  }}
                >
                  <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
                    <Trophy className="w-5 h-5 md:w-6 md:h-6" style={{ color: "#FBBF24" }} fill="#FBBF24" />
                    <div
                      className="text-sm md:text-base"
                      style={{
                        ...typography.card.bodyMd,
                        color: colors.text.primary,
                        fontWeight: 600,
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      Your All India Rank
                    </div>
                  </div>
                  <div
                    className="text-3xl md:text-4xl lg:text-[48px]"
                    style={{
                      ...typography.section.headingXl,
                      color: "#6B47ED",
                      fontWeight: 700,
                      marginBottom: "8px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    #{lastTest.rank}
                  </div>
                  <div
                    className="text-xs md:text-sm"
                    style={{
                      ...typography.card.bodySm,
                      color: colors.text.tertiary,
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    Out of {lastTest.totalParticipants.toLocaleString()} Participants
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="px-4 md:px-6 py-4 md:py-6" style={{ backgroundColor: "#F3F0FF" }}>
                  <div className="grid grid-cols-3 gap-3 md:gap-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2">
                        <Target className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#EF4444" }} />
                        <span
                          className="text-[10px] md:text-xs"
                          style={{
                            ...typography.card.bodySm,
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          Score
                        </span>
                      </div>
                      <div
                        className="text-sm md:text-base lg:text-lg"
                        style={{
                          ...typography.card.titleMd,
                          color: colors.text.primary,
                          fontWeight: 700,
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {lastTest.score} / {lastTest.totalQuestions}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" style={{ color: colors.text.tertiary }} />
                        <span
                          className="text-[10px] md:text-xs"
                          style={{
                            ...typography.card.bodySm,
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          Time
                        </span>
                      </div>
                      <div
                        className="text-sm md:text-base lg:text-lg"
                        style={{
                          ...typography.card.titleMd,
                          color: colors.text.primary,
                          fontWeight: 700,
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {lastTest.time}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2">
                        <TrendingUp className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#EF4444" }} />
                        <span
                          className="text-[10px] md:text-xs"
                          style={{
                            ...typography.card.bodySm,
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          Accuracy
                        </span>
                      </div>
                      <div
                        className="text-sm md:text-base lg:text-lg"
                        style={{
                          ...typography.card.titleMd,
                          color: colors.text.primary,
                          fontWeight: 700,
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {lastTest.accuracy}%
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards - 2 Columns on Desktop: Top row 2 cards, Bottom row 1 card spanning full width */}
            <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 min-w-0">
              {/* Top-left: My Classes */}
              <Card
                className="w-full min-w-0"
                style={{
                  height: "auto",
                  minHeight: "171px",
                  borderRadius: "12px",
                  borderWidth: "1.05px",
                  borderStyle: "solid",
                  borderColor: colors.background.cardBorder,
                  boxShadow: shadows.cardSoft,
                  backgroundColor: colors.neutral.white,
                }}
              >
                <CardContent className="p-4 md:p-5 lg:p-5 xl:p-6 h-full flex items-center justify-between gap-3 md:gap-4 min-w-0">
                  <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0 overflow-hidden">
                    <div
                      className="w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "#F3F0FF",
                      }}
                    >
                      <BookOpen 
                        className="w-6 h-6 flex-shrink-0" 
                        style={{ 
                          color: "#6B47ED",
                          strokeWidth: 1.5
                        }} 
                        stroke="#6B47ED"
                        fill="none"
                      />
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <div
                        className="text-base truncate md:text-base lg:text-base"
                        style={{
                          ...typography.card.titleMd,
                          color: colors.text.primary,
                          fontWeight: 700,
                          marginBottom: "4px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {stats[0].title}
                      </div>
                      <div
                        className="text-sm truncate md:text-sm lg:text-sm"
                        style={{
                          ...typography.card.bodySm,
                          color: colors.text.tertiary,
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {stats[0].label}
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-[32px] flex-shrink-0 whitespace-nowrap"
                    style={{
                      ...typography.section.headingLg,
                      color: "#6B47ED",
                      fontWeight: 700,
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    {stats[0].count}
                  </div>
                </CardContent>
              </Card>

              {/* Top-right: My Videos */}
              <Card
                className="w-full min-w-0"
                style={{
                  height: "auto",
                  minHeight: "171px",
                  borderRadius: "12px",
                  borderWidth: "1.05px",
                  borderStyle: "solid",
                  borderColor: colors.background.cardBorder,
                  boxShadow: shadows.cardSoft,
                  backgroundColor: colors.neutral.white,
                }}
              >
                <CardContent className="p-4 md:p-5 lg:p-5 xl:p-6 h-full flex items-center justify-between gap-3 md:gap-4 min-w-0">
                  <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0 overflow-hidden">
                    <div
                      className="w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "#F3F0FF",
                      }}
                    >
                      <Video 
                        className="w-6 h-6 flex-shrink-0" 
                        style={{ 
                          color: "#6B47ED",
                          strokeWidth: 1.5
                        }} 
                        stroke="#6B47ED"
                        fill="none"
                      />
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <div
                        className="text-base truncate md:text-base lg:text-base"
                        style={{
                          ...typography.card.titleMd,
                          color: colors.text.primary,
                          fontWeight: 700,
                          marginBottom: "4px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {stats[1].title}
                      </div>
                      <div
                        className="text-sm truncate md:text-sm lg:text-sm"
                        style={{
                          ...typography.card.bodySm,
                          color: colors.text.tertiary,
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {stats[1].label}
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-[32px] flex-shrink-0 whitespace-nowrap"
                    style={{
                      ...typography.section.headingLg,
                      color: "#6B47ED",
                      fontWeight: 700,
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    {stats[1].count}
                  </div>
                </CardContent>
              </Card>

              {/* Bottom: My Test Series - Spans full width */}
              {stats[2] && (
                <Card
                  className="w-full col-span-1 sm:col-span-2 lg:col-span-2"
                  style={{
                    height: "auto",
                    minHeight: "171px",
                    borderRadius: "12px",
                    borderWidth: "1.05px",
                    borderStyle: "solid",
                    borderColor: colors.background.cardBorder,
                    boxShadow: shadows.cardSoft,
                    backgroundColor: colors.neutral.white,
                  }}
                >
                  <CardContent className="p-4 md:p-5 lg:p-5 xl:p-6 h-full flex items-center justify-between gap-3 md:gap-4 min-w-0">
                    <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0 overflow-hidden">
                      <div
                        className="w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: "#F3F0FF",
                        }}
                      >
                        <ClipboardList 
                          className="w-6 h-6 flex-shrink-0" 
                          style={{ 
                            color: "#6B47ED",
                            strokeWidth: 1.5
                          }} 
                          stroke="#6B47ED"
                          fill="none"
                        />
                      </div>
                      <div className="flex-1 min-w-0 overflow-hidden">
                        <div
                          className="text-base truncate md:text-base lg:text-base"
                          style={{
                            ...typography.card.titleMd,
                            color: colors.text.primary,
                            fontWeight: 700,
                            marginBottom: "4px",
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {stats[2].title}
                        </div>
                        <div
                          className="text-sm truncate md:text-sm lg:text-sm"
                          style={{
                            ...typography.card.bodySm,
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {stats[2].label}
                        </div>
                      </div>
                    </div>
                    <div
                      className="text-[32px] flex-shrink-0 whitespace-nowrap"
                      style={{
                        ...typography.section.headingLg,
                        color: "#6B47ED",
                        fontWeight: 700,
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      {stats[2].count}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* My Classes Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 md:mb-6">
            <h2
              className="text-lg md:text-xl lg:text-2xl"
              style={{
                ...typography.section.headingLg,
                color: colors.text.primary,
                fontWeight: 700,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              My Classes
            </h2>
            <Link
              href="/live-classes"
              className="text-sm md:text-base"
              style={{
                ...typography.button.secondary,
                color: colors.brand.primarySoft,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-4 lg:gap-5 xl:gap-6">
            {classes.map((classItem) => (
              <Card key={classItem.id} style={{ boxShadow: shadows.cardSoft }}>
                <CardContent className="p-0">
                  <div className="relative w-full">
                    <ImageWithFallback
                      src={classItem.image}
                      alt={classItem.title}
                      width={400}
                      height={200}
                      className="w-full h-40 md:h-48 object-cover rounded-t-xl"
                      objectFit="cover"
                      style={{ width: "100%" }}
                      fallback={
                        <div className="w-full h-40 md:h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center rounded-t-xl">
                          <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-white" />
                        </div>
                      }
                    />
                    {classItem.status === "completed" && (
                      <Badge
                        variant="completed"
                        position="top-right"
                        icon={Check}
                        iconPosition="left"
                        style={{
                          backgroundColor: "#10B981",
                          color: colors.neutral.white,
                          fontSize: "10px",
                          fontWeight: 600,
                          padding: "3px 8px",
                          borderRadius: "6px",
                          gap: "4px",
                        }}
                        className="md:text-xs md:px-3"
                      >
                        Completed
                      </Badge>
                    )}
                  </div>
                  <div className="p-4 md:p-6">
                    <h3
                      className="text-base md:text-lg"
                      style={{
                        ...typography.card.titleMd,
                        color: colors.text.primary,
                        fontWeight: 700,
                        marginBottom: "12px",
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      {classItem.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <ImageWithFallback
                        src={classItem.instructorAvatar || ""}
                        alt={classItem.instructor}
                        width={32}
                        height={32}
                        className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover"
                        fallback={
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                            <span className="text-white text-[10px] md:text-xs font-bold">
                              {classItem.instructor.charAt(0)}
                            </span>
                          </div>
                        }
                      />
                      <p
                        className="text-xs md:text-sm"
                        style={{
                          ...typography.card.bodySm,
                          color: colors.text.secondary,
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {classItem.instructor}
                      </p>
                    </div>
                    {classItem.nextClass && (
                      <p
                        className="text-sm md:text-base"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 500,
                          fontStyle: "normal",
                          color: "#000000",
                          marginBottom: "16px",
                        }}
                      >
                        {classItem.nextClass}
                      </p>
                    )}
                    <Button
                      variant="primary"
                      className="w-full text-sm md:text-base py-2 md:py-2.5"
                      style={{
                        background: gradients.buttonPrimary,
                        border: "none",
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      {classItem.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* My Videos Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 md:mb-6">
            <h2
              className="text-lg md:text-xl lg:text-2xl"
              style={{
                ...typography.section.headingLg,
                color: colors.text.primary,
                fontWeight: 700,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              My Videos
            </h2>
            <Link
              href="/videos"
              className="text-sm md:text-base"
              style={{
                ...typography.button.secondary,
                color: colors.brand.primarySoft,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-4 lg:gap-5 xl:gap-6">
            {videos.map((video) => (
              <Link key={video.id} href={`/videos/${video.id}`} className="block">
                <Card style={{ boxShadow: shadows.cardSoft, cursor: "pointer" }}>
                  <CardContent className="p-0">
                    <ImageWithFallback
                      src={video.image}
                      alt={video.title}
                      width={400}
                      height={200}
                      className="w-full h-40 md:h-48 object-cover rounded-t-xl"
                      fallback={
                        <div className="w-full h-40 md:h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center rounded-t-xl">
                          <Play className="w-12 h-12 md:w-16 md:h-16 text-white" />
                        </div>
                      }
                    />
                    <div className="p-4 md:p-6">
                      <h3
                        className="text-base md:text-lg"
                        style={{
                          ...typography.card.titleMd,
                          color: colors.text.primary,
                          fontWeight: 700,
                          marginBottom: "12px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 md:gap-3">
                          <ImageWithFallback
                            src={video.instructorAvatar || ""}
                            alt={video.instructor}
                            width={40}
                            height={40}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
                            fallback={
                              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                <span className="text-white text-xs md:text-sm font-bold">
                                  {video.instructor.charAt(0)}
                                </span>
                              </div>
                            }
                          />
                          <div>
                            <p
                              className="text-xs md:text-sm"
                              style={{
                                ...typography.card.bodySm,
                                color: colors.text.primary,
                                fontWeight: 600,
                                marginBottom: "2px",
                                fontFamily: "var(--font-poppins), sans-serif",
                              }}
                            >
                              {video.instructor}
                            </p>
                            {video.instructorRole && (
                              <p
                                className="text-[10px] md:text-xs"
                                style={{
                                  ...typography.card.bodySm,
                                  color: colors.text.tertiary,
                                  fontFamily: "var(--font-poppins), sans-serif",
                                }}
                              >
                                {video.instructorRole}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#FBBF24" }} fill="#FBBF24" />
                          <span
                            className="text-xs md:text-sm"
                            style={{
                              ...typography.card.bodySm,
                              color: colors.text.primary,
                              fontWeight: 600,
                              fontFamily: "var(--font-poppins), sans-serif",
                            }}
                          >
                            {video.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* My Test Series Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 md:mb-6">
            <h2
              className="text-lg md:text-xl lg:text-2xl"
              style={{
                ...typography.section.headingLg,
                color: colors.text.primary,
                fontWeight: 700,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              My Test Series
            </h2>
            <Link
              href="/test-series"
              className="text-sm md:text-base"
              style={{
                ...typography.button.secondary,
                color: colors.brand.primarySoft,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 md:gap-4 lg:gap-5 xl:gap-6 w-full">
            {testSeries.map((test) => (
              <Link key={test.id} href={`/test-series/${test.id}`}>
                <Card style={{ boxShadow: shadows.cardSoft }}>
                  <CardContent className="p-0">
                  <div className="relative">
                    <ImageWithFallback
                      src={test.image}
                      alt={test.title}
                      width={300}
                      height={150}
                      className="w-full h-32 md:h-40 object-cover rounded-t-xl"
                      objectFit="cover"
                      style={{ width: "100%" }}
                      fallback={
                        <div className="w-full h-32 md:h-40 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center rounded-t-xl">
                          <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        </div>
                      }
                    />
                    {test.status === "completed" && (
                      <>
                        <Badge
                          variant="completed"
                          position="top-right"
                          className="text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1"
                          style={{
                            backgroundColor: "#10B981",
                            color: colors.neutral.white,
                            fontWeight: 600,
                            borderRadius: "6px",
                          }}
                        >
                          Completed
                        </Badge>
                        {test.rank && (
                          <Badge
                            variant="primary"
                            position="bottom-left"
                            className="text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1"
                            style={{
                              backgroundColor: "#6B47ED",
                              color: colors.neutral.white,
                              fontWeight: 600,
                              borderRadius: "6px",
                            }}
                          >
                            Rank : #{test.rank}
                          </Badge>
                        )}
                      </>
                    )}
                  </div>
                  <div className="p-4 md:p-6">
                    <h3
                      className="text-sm md:text-base"
                      style={{
                        ...typography.card.titleMd,
                        color: colors.text.primary,
                        fontWeight: 700,
                        marginBottom: "12px",
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      {test.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-2 mb-3 md:mb-4">
                      <div className="flex items-center gap-1 md:gap-2">
                        <List className="w-3 h-3 md:w-4 md:h-4" style={{ color: colors.text.tertiary }} />
                        <span
                          className="text-xs md:text-sm"
                          style={{
                            ...typography.card.bodySm,
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {test.questions} Questions
                        </span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" style={{ color: colors.text.tertiary }} />
                        <span
                          className="text-xs md:text-sm"
                          style={{
                            ...typography.card.bodySm,
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {test.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <Star className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#FBBF24" }} fill="#FBBF24" />
                        <span
                          className="text-xs md:text-sm"
                          style={{
                            ...typography.card.bodySm,
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {test.rating} ({test.reviews?.toLocaleString()})
                        </span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <Users className="w-3 h-3 md:w-4 md:h-4" style={{ color: colors.text.tertiary }} />
                        <span
                          className="text-xs md:text-sm"
                          style={{
                            ...typography.card.bodySm,
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {test.students}
                        </span>
                      </div>
                    </div>
                    <div className="mb-3 md:mb-4">
                      {test.originalPrice ? (
                        <div className="flex items-center gap-2">
                          <span
                            className="text-xs md:text-sm"
                            style={{
                              ...typography.card.bodySm,
                              color: colors.text.tertiary,
                              textDecoration: "line-through",
                              fontFamily: "var(--font-poppins), sans-serif",
                            }}
                          >
                            ₹{test.originalPrice}
                          </span>
                          <span
                            className="text-base md:text-lg"
                            style={{
                              ...typography.card.titleMd,
                              color: "#6B47ED",
                              fontWeight: 700,
                              fontFamily: "var(--font-poppins), sans-serif",
                            }}
                          >
                            ₹{test.price}
                          </span>
                        </div>
                      ) : (
                        <span
                          className="text-base md:text-lg"
                          style={{
                            ...typography.card.titleMd,
                            color: "#6B47ED",
                            fontWeight: 700,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          ₹{test.price}
                        </span>
                      )}
                    </div>
                    {test.status === "completed" ? (
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          variant="primary"
                          className="flex-1 text-xs md:text-sm py-2"
                          style={{
                            background: gradients.buttonPrimary,
                            border: "none",
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          Retake
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 text-xs md:text-sm py-2"
                          style={{
                            backgroundColor: colors.neutral.white,
                            border: `1px solid #6B47ED`,
                            color: "#6B47ED",
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          View Result
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant="primary"
                        className="w-full text-xs md:text-sm py-2"
                        style={{
                          background: gradients.buttonPrimary,
                          border: "none",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        Start Quiz
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLearningsPage;


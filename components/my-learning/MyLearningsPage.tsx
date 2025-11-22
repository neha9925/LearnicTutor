"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, Clock, Target, Users, Star, BookOpen, Play, Trophy, Video, ClipboardList, Circle, TrendingUp, Check, List } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import StarRating from "@/components/ui/StarRating";
import { myLearningData } from "@/data/myLearning";
import { colors, gradients, shadows, typography } from "@/theme";

const MyLearningsPage: React.FC = () => {
  const { lastTest, stats, classes, videos, testSeries } = myLearningData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div
        className="w-full py-16 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
        }}
      >
        <div className="container mx-auto text-center">
          <h1
            style={{
              ...typography.section.headingXl,
              fontSize: "48px",
              color: colors.neutral.white,
              fontWeight: 700,
              marginBottom: "12px",
              fontFamily: "var(--font-poppins), sans-serif",
            }}
          >
            My Learnings
          </h1>
          <p
            style={{
              ...typography.section.descriptionLg,
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.9)",
              fontFamily: "var(--font-poppins), sans-serif",
            }}
          >
            Track your learning journey and discover what's waiting for you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Last Test Section */}
        <div className="mb-12">
          <div className="flex gap-10">
            {/* Test Result Card */}
            <Card
              style={{
                width: "569px",
                height: "368px",
                borderRadius: "12px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: colors.background.cardBorder,
                boxShadow: shadows.cardSoft,
                overflow: "hidden",
                flexShrink: 0,
                backgroundColor: "#F3F0FF",
              }}
            >
              <CardContent className="p-0 h-full flex flex-col">
                {/* Header Section with Purple Gradient */}
                <div
                  className="px-6 py-4"
                  style={{
                    background: gradients.buttonPrimary,
                  }}
                >
                  <div
                    style={{
                      ...typography.card.titleMd,
                      fontSize: "16px",
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
                  className="px-6 py-6 text-center"
                  style={{
                    backgroundColor: "#F3F0FF",
                  }}
                >
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Trophy className="w-6 h-6" style={{ color: "#FBBF24" }} fill="#FBBF24" />
                    <div
                      style={{
                        ...typography.card.bodyMd,
                        fontSize: "16px",
                        color: colors.text.primary,
                        fontWeight: 600,
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      Your All India Rank
                    </div>
                  </div>
                  <div
                    style={{
                      ...typography.section.headingXl,
                      fontSize: "48px",
                      color: "#6B47ED",
                      fontWeight: 700,
                      marginBottom: "8px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    #{lastTest.rank}
                  </div>
                  <div
                    style={{
                      ...typography.card.bodySm,
                      fontSize: "14px",
                      color: colors.text.tertiary,
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    Out of {lastTest.totalParticipants.toLocaleString()} Participants
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="px-6 py-6" style={{ backgroundColor: "#F3F0FF" }}>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Target className="w-4 h-4" style={{ color: "#EF4444" }} />
                        <span
                          style={{
                            ...typography.card.bodySm,
                            fontSize: "12px",
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          Score
                        </span>
                      </div>
                      <div
                        style={{
                          ...typography.card.titleMd,
                          fontSize: "18px",
                          color: colors.text.primary,
                          fontWeight: 700,
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {lastTest.score} / {lastTest.totalQuestions}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Clock className="w-4 h-4" style={{ color: colors.text.tertiary }} />
                        <span
                          style={{
                            ...typography.card.bodySm,
                            fontSize: "12px",
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          Time
                        </span>
                      </div>
                      <div
                        style={{
                          ...typography.card.titleMd,
                          fontSize: "18px",
                          color: colors.text.primary,
                          fontWeight: 700,
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {lastTest.time}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4" style={{ color: "#EF4444" }} />
                        <span
                          style={{
                            ...typography.card.bodySm,
                            fontSize: "12px",
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          Accuracy
                        </span>
                      </div>
                      <div
                        style={{
                          ...typography.card.titleMd,
                          fontSize: "18px",
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

            {/* Stats Cards - 2x2 Grid */}
            <div className="w-full grid grid-cols-2 gap-3">
              {/* Top-left: My Classes */}
              <Card
                style={{
                  width: "100%",
                  height: "171px",
                  borderRadius: "12px",
                  borderWidth: "1.05px",
                  borderStyle: "solid",
                  borderColor: colors.background.cardBorder,
                  boxShadow: shadows.cardSoft,
                }}
              >
                <CardContent className="p-6 h-full flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "#F3F0FF",
                      }}
                    >
                      <BookOpen className="w-6 h-6" style={{ color: "#6B47ED" }} />
                    </div>
                    <div>
                      <div
                        style={{
                          ...typography.card.titleMd,
                          fontSize: "16px",
                          color: colors.text.primary,
                          fontWeight: 700,
                          marginBottom: "4px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {stats[0].title}
                      </div>
                      <div
                        style={{
                          ...typography.card.bodySm,
                          fontSize: "14px",
                          color: colors.text.tertiary,
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {stats[0].label}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      ...typography.section.headingLg,
                      fontSize: "32px",
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
                style={{
                  width: "100%",
                  height: "171px",
                  borderRadius: "12px",
                  borderWidth: "1.05px",
                  borderStyle: "solid",
                  borderColor: colors.background.cardBorder,
                  boxShadow: shadows.cardSoft,
                }}
              >
                <CardContent className="p-6 h-full flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "#F3F0FF",
                      }}
                    >
                      <Video className="w-6 h-6" style={{ color: "#6B47ED" }} />
                    </div>
                    <div>
                      <div
                        style={{
                          ...typography.card.titleMd,
                          fontSize: "16px",
                          color: colors.text.primary,
                          fontWeight: 700,
                          marginBottom: "4px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {stats[1].title}
                      </div>
                      <div
                        style={{
                          ...typography.card.bodySm,
                          fontSize: "14px",
                          color: colors.text.tertiary,
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {stats[1].label}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      ...typography.section.headingLg,
                      fontSize: "32px",
                      color: "#6B47ED",
                      fontWeight: 700,
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    {stats[1].count}
                  </div>
                </CardContent>
              </Card>

              {/* Bottom-left: My Test Series */}
              {stats[2] && (
                <Card
                  style={{
                    width: "100%",
                    height: "171px",
                    borderRadius: "12px",
                    borderWidth: "1.05px",
                    borderStyle: "solid",
                    borderColor: colors.background.cardBorder,
                    boxShadow: shadows.cardSoft,
                  }}
                >
                  <CardContent className="p-6 h-full flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: "#F3F0FF",
                        }}
                      >
                        <ClipboardList className="w-6 h-6" style={{ color: "#6B47ED" }} />
                      </div>
                      <div>
                        <div
                          style={{
                            ...typography.card.titleMd,
                            fontSize: "16px",
                            color: colors.text.primary,
                            fontWeight: 700,
                            marginBottom: "4px",
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {stats[2].title}
                        </div>
                        <div
                          style={{
                            ...typography.card.bodySm,
                            fontSize: "14px",
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {stats[2].label}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        ...typography.section.headingLg,
                        fontSize: "32px",
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
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2
              style={{
                ...typography.section.headingLg,
                fontSize: "24px",
                color: colors.text.primary,
                fontWeight: 700,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              My Classes
            </h2>
            <Link
              href="/live-classes"
              style={{
                ...typography.button.secondary,
                color: colors.brand.primarySoft,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classes.map((classItem) => (
              <Card key={classItem.id} style={{ boxShadow: shadows.cardSoft }}>
                <CardContent className="p-0">
                  <div className="relative w-full">
                    <ImageWithFallback
                      src={classItem.image}
                      alt={classItem.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-xl"
                      objectFit="cover"
                      style={{ width: "100%" }}
                      fallback={
                        <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center rounded-t-xl">
                          <BookOpen className="w-16 h-16 text-white" />
                        </div>
                      }
                    />
                    {classItem.status === "completed" && (
                      <div
                        className="absolute top-4 right-4 px-3 py-1 rounded-md flex items-center gap-1"
                        style={{
                          backgroundColor: "#10B981",
                          color: colors.neutral.white,
                        }}
                      >
                        <Check className="w-4 h-4" />
                        <span
                          style={{
                            ...typography.card.bodySm,
                            fontSize: "12px",
                            fontWeight: 600,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          Completed
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3
                      style={{
                        ...typography.card.titleMd,
                        fontSize: "18px",
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
                        className="w-8 h-8 rounded-full object-cover"
                        fallback={
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              {classItem.instructor.charAt(0)}
                            </span>
                          </div>
                        }
                      />
                      <p
                        style={{
                          ...typography.card.bodySm,
                          fontSize: "14px",
                          color: colors.text.secondary,
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {classItem.instructor}
                      </p>
                    </div>
                    {classItem.nextClass && (
                      <p
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 500,
                          fontStyle: "normal",
                          fontSize: "16.62px",
                          color: "#000000",
                          marginBottom: "16px",
                        }}
                      >
                        {classItem.nextClass}
                      </p>
                    )}
                    <Button
                      variant="primary"
                      className="w-full"
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
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2
              style={{
                ...typography.section.headingLg,
                fontSize: "24px",
                color: colors.text.primary,
                fontWeight: 700,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              My Videos
            </h2>
            <Link
              href="/videos"
              style={{
                ...typography.button.secondary,
                color: colors.brand.primarySoft,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Link key={video.id} href={`/videos/${video.id}`} className="block">
                <Card style={{ boxShadow: shadows.cardSoft, cursor: "pointer" }}>
                  <CardContent className="p-0">
                    <ImageWithFallback
                      src={video.image}
                      alt={video.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-xl"
                      fallback={
                        <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center rounded-t-xl">
                          <Play className="w-16 h-16 text-white" />
                        </div>
                      }
                    />
                    <div className="p-6">
                      <h3
                        style={{
                          ...typography.card.titleMd,
                          fontSize: "18px",
                          color: colors.text.primary,
                          fontWeight: 700,
                          marginBottom: "12px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <ImageWithFallback
                            src={video.instructorAvatar || ""}
                            alt={video.instructor}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                            fallback={
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                <span className="text-white text-sm font-bold">
                                  {video.instructor.charAt(0)}
                                </span>
                              </div>
                            }
                          />
                          <div>
                            <p
                              style={{
                                ...typography.card.bodySm,
                                fontSize: "14px",
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
                                style={{
                                  ...typography.card.bodySm,
                                  fontSize: "12px",
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
                          <Star className="w-4 h-4" style={{ color: "#FBBF24" }} fill="#FBBF24" />
                          <span
                            style={{
                              ...typography.card.bodySm,
                              fontSize: "14px",
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
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2
              style={{
                ...typography.section.headingLg,
                fontSize: "24px",
                color: colors.text.primary,
                fontWeight: 700,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              My Test Series
            </h2>
            <Link
              href="/test-series"
              style={{
                ...typography.button.secondary,
                color: colors.brand.primarySoft,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
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
                      className="w-full h-40 object-cover rounded-t-xl"
                      objectFit="cover"
                      style={{ width: "100%" }}
                      fallback={
                        <div className="w-full h-40 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center rounded-t-xl">
                          <BookOpen className="w-12 h-12 text-white" />
                        </div>
                      }
                    />
                    {test.status === "completed" && (
                      <>
                        <div
                          className="absolute top-3 right-3 px-2 py-1 rounded-md"
                          style={{
                            backgroundColor: "#10B981",
                            color: colors.neutral.white,
                          }}
                        >
                          <span
                            style={{
                              ...typography.card.bodySm,
                              fontSize: "12px",
                              fontWeight: 600,
                              fontFamily: "var(--font-poppins), sans-serif",
                            }}
                          >
                            Completed
                          </span>
                        </div>
                        {test.rank && (
                          <div
                            className="absolute bottom-3 left-3 px-2 py-1 rounded-md"
                            style={{
                              backgroundColor: "#6B47ED",
                              color: colors.neutral.white,
                            }}
                          >
                            <span
                              style={{
                                ...typography.card.bodySm,
                                fontSize: "12px",
                                fontWeight: 600,
                                fontFamily: "var(--font-poppins), sans-serif",
                              }}
                            >
                              Rank : #{test.rank}
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <div className="p-6">
                    <h3
                      style={{
                        ...typography.card.titleMd,
                        fontSize: "16px",
                        color: colors.text.primary,
                        fontWeight: 700,
                        marginBottom: "12px",
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      {test.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <List className="w-4 h-4" style={{ color: colors.text.tertiary }} />
                        <span
                          style={{
                            ...typography.card.bodySm,
                            fontSize: "14px",
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {test.questions} Questions
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" style={{ color: colors.text.tertiary }} />
                        <span
                          style={{
                            ...typography.card.bodySm,
                            fontSize: "14px",
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {test.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4" style={{ color: "#FBBF24" }} fill="#FBBF24" />
                        <span
                          style={{
                            ...typography.card.bodySm,
                            fontSize: "14px",
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {test.rating} ({test.reviews?.toLocaleString()})
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" style={{ color: colors.text.tertiary }} />
                        <span
                          style={{
                            ...typography.card.bodySm,
                            fontSize: "14px",
                            color: colors.text.tertiary,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {test.students}
                        </span>
                      </div>
                    </div>
                    <div className="mb-4">
                      {test.originalPrice ? (
                        <div className="flex items-center gap-2">
                          <span
                            style={{
                              ...typography.card.bodySm,
                              fontSize: "14px",
                              color: colors.text.tertiary,
                              textDecoration: "line-through",
                              fontFamily: "var(--font-poppins), sans-serif",
                            }}
                          >
                            ₹{test.originalPrice}
                          </span>
                          <span
                            style={{
                              ...typography.card.titleMd,
                              fontSize: "18px",
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
                          style={{
                            ...typography.card.titleMd,
                            fontSize: "18px",
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
                      <div className="flex gap-2">
                        <Button
                          variant="primary"
                          className="flex-1"
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
                          className="flex-1"
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
                        className="w-full"
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


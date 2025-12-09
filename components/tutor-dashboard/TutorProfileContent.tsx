"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Star,
  Users,
  GraduationCap,
  Edit2,
  Laptop,
  Plus,
  User,
  DollarSign,
  Award,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { FONT_FAMILY, colors } from "@/theme";

const TutorProfileContent: React.FC = () => {
  const router = useRouter();

  const qualifications = [
    {
      id: "1",
      degree: "Ph.D. in Applied Mathematics",
      institution: "Baghdad University",
      year: "2010",
    },
    {
      id: "2",
      degree: "Master's in Pure Mathematics",
      institution: "University of Technology",
      year: "2006",
    },
  ];

  const achievements = [
    {
      id: "1",
      title: "Advanced Teaching Methods",
      issuer: "Educational Board",
      year: "2020",
      icon: Sparkles,
    },
    {
      id: "2",
      title: "Excellence in Education",
      issuer: "State Award",
      year: "2019",
      icon: Award,
    },
  ];

  const currentClasses = [
    {
      id: "1",
      title: "Class 10 Full Course Batch1",
      status: "Running",
      subject: "Math",
      time: "Today 4:00 PM",
    },
    {
      id: "2",
      title: "Class 10 Full Course Batch2",
      status: "Upcoming",
      subject: "",
      time: "",
    },
  ];

  const recentReviews = [
    {
      id: "1",
      avatar: "/images/avatars/student1.jpg",
      name: "Student",
      rating: 5,
      time: "2 days ago",
      text: "Excellent teaching method. Complex topics made simple!",
      subject: "Math • Class 12",
    },
    {
      id: "2",
      avatar: "/images/avatars/student2.jpg",
      name: "Student",
      rating: 5,
      time: "1 week ago",
      text: "Great mentor for JEE preparation. Highly recommended!",
      subject: "Math • Class 12",
    },
  ];

  return (
    <div className="w-full" style={{ fontFamily: FONT_FAMILY }}>
      {/* Tutor Header - Full Width */}
      <div
        className="rounded-lg p-6 relative mb-6 bg-white"
        style={{
          borderTop: `4px solid ${colors.brand.primarySoft}`,
          border: "1px solid #E5E7EB",
          fontFamily: FONT_FAMILY,
        }}
      >
          <div className="flex items-start gap-6 relative">
            <div className="flex-shrink-0">
              <ImageWithFallback
                src="/images/avatars/tutor-profile.jpg"
                alt="Dr. Emily Watson"
                width={120}
                height={120}
                className="w-30 h-30 rounded-full object-cover"
                fallback={
                  <div className="w-30 h-30 rounded-full bg-gray-300 flex items-center justify-center">
                    <User size={40} className="text-gray-600" />
                  </div>
                }
              />
            </div>
            <div className="flex-1">
              <h2
                className="text-2xl font-bold mb-2"
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#000000",
                }}
              >
                Dr. Emily Watson
              </h2>
              <p
                className="text-base mb-4"
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: "16px",
                  color: colors.brand.primarySoft,
                  fontWeight: 500,
                }}
              >
                Advanced Mathematics & Statistics
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star size={18} style={{ color: "#FBBF24", fill: "#FBBF24" }} />
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: "#000000",
                      fontFamily: FONT_FAMILY,
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    4.9 (12k Reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={18} style={{ color: colors.brand.primarySoft }} />
                  <span
                    className="text-sm"
                    style={{
                      color: "#000000",
                      fontFamily: FONT_FAMILY,
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    2,450 Students
                  </span>
                </div>
              </div>
              <p
                className="text-sm mb-0"
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "#000000",
                }}
              >
                Passionate educator with 15+ years experience in advanced mathematics. Helping
                students excel in competitive exams and academic goals.
              </p>
            </div>
            <button
              onClick={() => router.push("/tutor-dashboard/edit-profile")}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2 absolute top-0 right-0"
              style={{
                backgroundColor: colors.brand.primarySoft,
                fontFamily: FONT_FAMILY,
              }}
            >
              <Edit2 size={16} />
              Edit Profile
            </button>
          </div>
        </div>

      {/* Main Content - Two Columns */}
      <div className="flex gap-6">
        {/* Left Column - Detailed Information */}
        <div className="flex-1 space-y-6">
          {/* About Me Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3
              className="text-xl font-bold text-gray-900 mb-4"
              style={{
                fontFamily: FONT_FAMILY,
              }}
            >
              About Me
            </h3>
            <div className="space-y-4">
              <p
                className="text-sm text-gray-600 leading-relaxed"
                style={{
                  fontFamily: FONT_FAMILY,
                  lineHeight: "1.8",
                }}
              >
                I am a dedicated mathematics educator with over 15 years of experience in teaching
                advanced mathematics and statistics. My passion lies in making complex mathematical
                concepts accessible and engaging for students at all levels. I specialize in preparing
                students for competitive examinations including JEE, NEET, and various Olympiads.
              </p>
              <p
                className="text-sm text-gray-600 leading-relaxed"
                style={{
                  fontFamily: FONT_FAMILY,
                  lineHeight: "1.8",
                }}
              >
                My teaching methodology focuses on building strong foundational concepts while
                encouraging analytical thinking and problem-solving skills. I believe every student
                has the potential to excel in mathematics with the right guidance and approach.
              </p>
            </div>
          </div>

          {/* Education & Qualifications */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-xl font-bold text-gray-900"
                style={{
                  fontFamily: FONT_FAMILY,
                }}
              >
                Education & Qualifications
              </h3>
              <button
                className="text-sm font-semibold flex items-center gap-1"
                style={{
                  color: colors.brand.primarySoft,
                  fontFamily: FONT_FAMILY,
                }}
              >
                <Plus size={16} />
                Add Qualification
              </button>
            </div>
            <div className="space-y-3">
              {qualifications.map((qual) => (
                <div
                  key={qual.id}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white border border-gray-200"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #572EEE 0%, #C084FC 100%)",
                    }}
                  >
                    <GraduationCap size={24} style={{ color: "#FFFFFF" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-bold text-gray-900 mb-1"
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontWeight: 700,
                      }}
                    >
                      {qual.degree}
                    </p>
                    <p
                      className="text-xs text-gray-600"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      {qual.institution}, {qual.year}
                    </p>
                  </div>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "#F3F4F6",
                    }}
                  >
                    <Edit2 size={16} style={{ color: "#6B7280" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-xl font-bold text-gray-900"
                style={{
                  fontFamily: FONT_FAMILY,
                }}
              >
                Achievements & Certifications
              </h3>
              <button
                className="text-sm font-semibold flex items-center gap-1"
                style={{
                  color: colors.brand.primarySoft,
                  fontFamily: FONT_FAMILY,
                }}
              >
                <Plus size={16} />
                Add Certification
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.id}
                    className="p-4 rounded-lg relative"
                    style={{
                      background: "linear-gradient(135deg, rgba(87, 46, 238, 0.1) 0%, #F3E8FF 70.71%)",
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    <div className="flex flex-col items-start gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: colors.brand.primarySoft,
                        }}
                      >
                        <Icon size={24} style={{ color: "#FFFFFF" }} />
                      </div>
                      <div className="flex-1 w-full">
                        <p
                          className="text-sm font-bold text-gray-900 mb-1"
                          style={{
                            fontFamily: FONT_FAMILY,
                            fontWeight: 700,
                          }}
                        >
                          {achievement.title}
                        </p>
                        <p
                          className="text-xs text-gray-600"
                          style={{
                            fontFamily: FONT_FAMILY,
                          }}
                        >
                          {achievement.issuer}, {achievement.year}
                        </p>
                      </div>
                    </div>
                    <div
                      className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "#F3F4F6",
                      }}
                    >
                      <ExternalLink size={14} style={{ color: "#6B7280" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Summary Statistics */}
        <div className="w-80 space-y-6">
        {/* Key Metrics */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            <div
              className="flex items-center gap-4 p-4 rounded-lg"
              style={{ backgroundColor: "#F3E8FF" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: colors.brand.primarySoft,
                }}
              >
                <Laptop size={24} style={{ color: "#FFFFFF" }} />
              </div>
              <div className="flex-1">
                <p
                  className="text-2xl font-bold text-gray-900 mb-1"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  1,250
                </p>
                <p
                  className="text-sm text-gray-600"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Total Classes
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-4 p-4 rounded-lg"
              style={{ backgroundColor: "#D1FAE5" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "#10B981",
                }}
              >
                <DollarSign size={24} style={{ color: "#FFFFFF" }} />
              </div>
              <div className="flex-1">
                <p
                  className="text-2xl font-bold text-gray-900 mb-1"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  ₹85,000
                </p>
                <p
                  className="text-sm text-gray-600"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Monthly Earnings
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-4 p-4 rounded-lg"
              style={{ backgroundColor: "#DBEAFE" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "#3B82F6",
                }}
              >
                <Users size={24} style={{ color: "#FFFFFF" }} />
              </div>
              <div className="flex-1">
                <p
                  className="text-2xl font-bold text-gray-900 mb-1"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  156
                </p>
                <p
                  className="text-sm text-gray-600"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Active Students
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-4 p-4 rounded-lg"
              style={{ backgroundColor: "#FEF3C7" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "#FBBF24",
                }}
              >
                <Star size={24} style={{ color: "#FFFFFF", fill: "#FFFFFF" }} />
              </div>
              <div className="flex-1">
                <p
                  className="text-2xl font-bold text-gray-900 mb-1"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  4.9
                </p>
                <p
                  className="text-sm text-gray-600"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Rating Score
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Classes */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3
              className="text-lg font-bold text-gray-900"
              style={{
                fontFamily: FONT_FAMILY,
              }}
            >
              Current Classes
            </h3>
            <button
              className="text-sm font-semibold"
              style={{
                color: colors.brand.primarySoft,
                fontFamily: FONT_FAMILY,
              }}
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {currentClasses.map((classItem) => (
              <div
                key={classItem.id}
                className="p-4 rounded-lg border border-gray-200"
                style={{
                  fontFamily: FONT_FAMILY,
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4
                    className="text-sm font-semibold text-gray-900"
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    {classItem.title}
                  </h4>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{
                      backgroundColor:
                        classItem.status === "Running" ? "#D1FAE5" : "#DBEAFE",
                      color: classItem.status === "Running" ? "#059669" : "#2563EB",
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    {classItem.status}
                  </span>
                </div>
                {classItem.subject && classItem.time && (
                  <p
                    className="text-xs text-gray-600 mb-3"
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    {classItem.subject} • {classItem.time}
                  </p>
                )}
                {classItem.status === "Running" && (
                  <button
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
                    style={{
                      backgroundColor: colors.brand.primarySoft,
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    Join
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3
              className="text-lg font-bold text-gray-900"
              style={{
                fontFamily: FONT_FAMILY,
              }}
            >
              Recent Reviews
            </h3>
            <button
              className="text-sm font-semibold"
              style={{
                color: colors.brand.primarySoft,
                fontFamily: FONT_FAMILY,
              }}
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentReviews.map((review) => (
              <div key={review.id} className="pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                <div className="flex items-start gap-3">
                  <ImageWithFallback
                    src={review.avatar}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    fallback={
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                        <User size={20} className="text-gray-600" />
                      </div>
                    }
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          style={{ color: "#FBBF24", fill: "#FBBF24" }}
                        />
                      ))}
                      <span
                        className="text-xs text-gray-500 ml-1"
                        style={{
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        {review.time}
                      </span>
                    </div>
                    <p
                      className="text-sm text-gray-700 mb-2"
                      style={{
                        fontFamily: FONT_FAMILY,
                        lineHeight: "1.5",
                      }}
                    >
                      {review.text}
                    </p>
                    <p
                      className="text-xs text-gray-600"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      {review.subject}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default TutorProfileContent;


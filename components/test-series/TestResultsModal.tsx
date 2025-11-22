"use client";

import React, { useEffect } from "react";
import { X, Flame, Zap, Clock, Trophy, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import { colors, gradients, radii, shadows, typography } from "@/theme";
import type { TestQuiz, QuizQuestion } from "@/data/testQuiz";

interface TestResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  quiz: TestQuiz;
  selectedAnswers: { [key: number]: number };
  timeTaken: number; // in seconds
  onTryAgain: () => void;
}

const TestResultsModal: React.FC<TestResultsModalProps> = ({
  isOpen,
  onClose,
  quiz,
  selectedAnswers,
  timeTaken,
  onTryAgain,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Calculate results
  const totalQuestions = quiz.totalQuestions;
  const correctAnswers = quiz.questions.filter(
    (question) => selectedAnswers[question.id] === question.correctAnswer
  ).length;
  const score = correctAnswers;
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  const rank = 5; // This would come from backend
  const totalRank = 327; // This would come from backend

  // Format time
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    if (hrs > 0) {
      return `${hrs}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const styles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modal: {
      backgroundColor: colors.neutral.white,
      borderRadius: radii.xl,
      boxShadow: shadows.modal,
      maxWidth: "700px",
    },
    contentCard: {
      backgroundColor: "#F3F0FF",
      borderRadius: radii.xl,
      padding: "16px",
    },
    banner: {
      background: gradients.buttonPrimary,
      color: colors.text.light,
      padding: "8px 14px",
      borderRadius: radii.md,
    },
    pieChart: {
      width: "200px",
      height: "200px",
    },
    metricCard: {
      backgroundColor: "#F9FAFB",
      borderRadius: radii.lg,
      padding: "12px",
      boxShadow: "none",
      border: `1px solid #E9D5FF`,
    },
    tryAgainButton: {
      backgroundColor: colors.neutral.white,
      color: "#6B47ED",
      border: "1px solid #6B47ED",
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 500,
      fontSize: "16px",
    },
    leaderboardButton: {
      backgroundColor: "#6B47ED",
      color: colors.text.light,
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 500,
      fontSize: "16px",
    },
  } as const;

  // Calculate pie chart percentage
  const percentage = accuracy;
  const circumference = 2 * Math.PI * 90; // radius = 90
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={styles.overlay}
      onClick={onClose}
    >
      <div
        className="w-full relative"
        style={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h2
            style={{
              ...typography.section.headingLg,
              fontSize: "20px",
              color: colors.text.primary,
              fontWeight: 700,
              marginBottom: "12px",
              textAlign: "center",
              fontFamily: "var(--font-poppins), sans-serif",
            }}
          >
            {quiz.title}
          </h2>

          {/* Content Card with Purple Background */}
          <div style={styles.contentCard}>
            {/* Banner */}
            <div style={styles.banner} className="mb-4">
              <p
                style={{
                  ...typography.card.bodyMd,
                  fontSize: "14px",
                  color: colors.text.light,
                  fontFamily: "var(--font-poppins), sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Play className="w-3.5 h-3.5" style={{ color: "#FBBF24" }} fill="#FBBF24" />
                You&apos;ve completed the test! See your performance below.
              </p>
            </div>

            {/* Congratulations */}
            <div className="text-center mb-4">
              <h3
                style={{
                  ...typography.section.headingLg,
                  fontSize: "24px",
                  color: colors.text.primary,
                  fontWeight: 700,
                  fontFamily: "var(--font-poppins), sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <span className="text-xl">👑</span>
                Congratulations!
              </h3>
            </div>

            {/* Pie Chart */}
            <div className="flex justify-center mb-4">
              <div className="relative" style={{ width: "150px", height: "150px" }}>
                <svg width="150" height="150" className="transform -rotate-90">
                  {/* Background circle */}
                  <circle
                    cx="75"
                    cy="75"
                    r="65"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="15"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="75"
                    cy="75"
                    r="65"
                    fill="none"
                    stroke="#6B47ED"
                    strokeWidth="15"
                    strokeDasharray={2 * Math.PI * 65}
                    strokeDashoffset={2 * Math.PI * 65 - (percentage / 100) * 2 * Math.PI * 65}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    style={{
                      ...typography.section.headingLg,
                      fontSize: "36px",
                      color: "#6B47ED",
                      fontWeight: 700,
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    {accuracy}%
                  </span>
                </div>
              </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {/* Your Score */}
              <div style={styles.metricCard}>
                <div
                  style={{
                    ...typography.section.headingLg,
                    fontSize: "20px",
                    color: "#6B47ED",
                    fontWeight: 700,
                    fontFamily: "var(--font-poppins), sans-serif",
                    marginBottom: "6px",
                  }}
                >
                  {score}/{totalQuestions}
                </div>
                <div className="flex items-center gap-1">
                  <span style={{ fontSize: "14px" }}>💯</span>
                  <span
                    style={{
                      ...typography.card.bodySm,
                      color: colors.text.tertiary,
                      fontSize: "12px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    Your Score
                  </span>
                </div>
              </div>

              {/* Accuracy */}
              <div style={styles.metricCard}>
                <div
                  style={{
                    ...typography.section.headingLg,
                    fontSize: "20px",
                    color: "#6B47ED",
                    fontWeight: 700,
                    fontFamily: "var(--font-poppins), sans-serif",
                    marginBottom: "6px",
                  }}
                >
                  {accuracy}%
                </div>
                <div className="flex items-center gap-1">
                  <span style={{ fontSize: "14px" }}>⚡</span>
                  <span
                    style={{
                      ...typography.card.bodySm,
                      color: colors.text.tertiary,
                      fontSize: "12px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    Accuracy
                  </span>
                </div>
              </div>

              {/* Time Taken */}
              <div style={styles.metricCard}>
                <div
                  style={{
                    ...typography.section.headingLg,
                    fontSize: "20px",
                    color: "#6B47ED",
                    fontWeight: 700,
                    fontFamily: "var(--font-poppins), sans-serif",
                    marginBottom: "6px",
                  }}
                >
                  {formatTime(timeTaken)}
                </div>
                <div className="flex items-center gap-1">
                  <span style={{ fontSize: "14px" }}>⌚</span>
                  <span
                    style={{
                      ...typography.card.bodySm,
                      color: colors.text.tertiary,
                      fontSize: "12px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    Time Taken
                  </span>
                </div>
              </div>

              {/* Rank */}
              <div style={styles.metricCard}>
                <div
                  style={{
                    ...typography.section.headingLg,
                    fontSize: "20px",
                    color: "#6B47ED",
                    fontWeight: 700,
                    fontFamily: "var(--font-poppins), sans-serif",
                    marginBottom: "6px",
                  }}
                >
                  #{rank}
                </div>
                <div className="flex items-center gap-1">
                  <span style={{ fontSize: "14px" }}>🏆</span>
                  <span
                    style={{
                      ...typography.card.bodySm,
                      color: colors.text.tertiary,
                      fontSize: "12px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    Rank of {totalRank}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 justify-center">
              <button
                onClick={onTryAgain}
                className="py-2.5 px-6 rounded-lg border"
                style={styles.tryAgainButton}
              >
                Try Again
              </button>
            <button
              onClick={() => {
                onClose();
                router.push(`/test-series/${quiz.testSeriesId}/leaderboard`);
              }}
              className="py-2.5 px-6 rounded-lg text-white"
              style={styles.leaderboardButton}
            >
              Leaderboard
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResultsModal;


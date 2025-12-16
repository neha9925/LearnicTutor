"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Clock, CheckCircle2, Check, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import TestResultsModal from "./TestResultsModal";
import { colors, gradients, radii, shadows, typography } from "@/theme";
import type { TestQuiz } from "@/data/testQuiz";

interface TestQuizPageProps {
  quiz: TestQuiz;
}

const TestQuizPage: React.FC<TestQuizPageProps> = ({ quiz }) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [timeRemaining, setTimeRemaining] = useState(quiz.totalTime * 60); // in seconds
  const [questionTime, setQuestionTime] = useState(0); // time spent on current question in seconds
  const [startTime] = useState(Date.now()); // Track when test started
  const [isResultsModalOpen, setIsResultsModalOpen] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isSelected = selectedAnswers[currentQuestion.id] !== undefined;
  const selectedAnswer = selectedAnswers[currentQuestion.id];

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Question timer
  useEffect(() => {
    const questionTimer = setInterval(() => {
      setQuestionTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(questionTimer);
  }, [currentQuestionIndex]);

  // Reset question timer when question changes
  useEffect(() => {
    setQuestionTime(0);
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleQuestionClick = (questionNumber: number) => {
    setCurrentQuestionIndex(questionNumber - 1);
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const formatQuestionTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // Calculate progress
  const attempted = Object.keys(selectedAnswers).length;
  const unattempted = quiz.totalQuestions - attempted;
  const wrong = 0; // This would be calculated based on submitted answers

  // Determine question status
  const getQuestionStatus = (questionId: number) => {
    if (questionId === currentQuestion.id) return "current";
    if (selectedAnswers[questionId] !== undefined) return "attempted";
    return "unattempted";
  };

  const styles = {
    header: {
      backgroundColor: colors.neutral.white,
      borderBottom: `1px solid ${colors.background.cardBorder}`,
    },
    questionCard: {
      backgroundColor: colors.neutral.white,
      borderRadius: radii.xl,
      boxShadow: shadows.cardSoft,
    },
    sideCard: {
      backgroundColor: colors.neutral.white,
      borderRadius: radii.xl,
      boxShadow: shadows.cardSoft,
    },
    optionButton: (isSelected: boolean) =>
      ({
        backgroundColor: isSelected ? "#6B47ED" : colors.neutral.white,
        color: isSelected ? colors.text.light : colors.text.primary,
        border: `1px solid ${isSelected ? "#6B47ED" : colors.border.light}`,
        borderRadius: radii.md,
      }) as const,
    questionNumberButton: (status: string) =>
      ({
        backgroundColor:
          status === "current"
            ? "#F97316"
            : status === "attempted"
            ? "#10B981"
            : colors.neutral.gray200,
        color:
          status === "current" || status === "attempted"
            ? colors.text.light
            : colors.text.primary,
        borderRadius: radii.sm,
        fontFamily: "var(--font-poppins), sans-serif",
        fontWeight: 600,
        fontSize: "14px",
      }) as const,
    timeBox: {
      backgroundColor: "#F3F0FF",
      borderRadius: radii.md,
    },
    submitButton: {
      background: gradients.buttonPrimary,
      color: colors.text.light,
      boxShadow: "0px 8px 16px rgba(107, 71, 237, 0.25)",
    },
  } as const;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between"
        style={styles.header}
      >
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6" style={{ color: colors.text.primary }} />
        </button>
        <h1
          style={{
            ...typography.section.headingLg,
            fontSize: "18px",
            color: colors.text.primary,
            fontWeight: 700,
            fontFamily: "var(--font-poppins), sans-serif",
          }}
        >
          {quiz.title}
        </h1>
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5" style={{ color: "#6B47ED" }} />
          <span
            style={{
              ...typography.card.bodySm,
              fontSize: "14px",
              color: colors.text.tertiary,
              fontWeight: 400,
              fontFamily: "var(--font-poppins), sans-serif",
            }}
          >
            Q {currentQuestionIndex + 1} / {quiz.totalQuestions}
          </span>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Question */}
          <div className="lg:col-span-2">
            <div style={styles.questionCard} className="p-6">
              {/* Question Header */}
              <div className="flex items-center justify-between mb-6">
                <span
                  style={{
                    ...typography.card.bodySm,
                    color: colors.text.secondary,
                    fontSize: "14px",
                  }}
                >
                  Question {currentQuestionIndex + 1} of {quiz.totalQuestions}
                </span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: colors.text.secondary }} />
                  <span
                    style={{
                      ...typography.card.bodySm,
                      color: colors.text.secondary,
                      fontSize: "14px",
                    }}
                  >
                    {formatQuestionTime(questionTime)}
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <div className="mb-6">
                <p
                  style={{
                    ...typography.card.bodyMd,
                    color: colors.text.primary,
                    fontSize: "18px",
                    lineHeight: "28px",
                    fontWeight: 500,
                    fontFamily: "var(--font-poppins), sans-serif",
                    marginBottom: "12px",
                  }}
                >
                  {currentQuestion.question}
                </p>
                {currentQuestion.imageDescription && (
                  <p
                    style={{
                      ...typography.card.bodySm,
                      color: colors.text.secondary,
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    {currentQuestion.imageDescription}
                  </p>
                )}
              </div>

              {/* Image if available */}
              {currentQuestion.image && (
                <div className="mb-6">
                  <div className="w-full rounded-lg overflow-hidden" style={{ backgroundColor: "#1e3a8a" }}>
                    <Image
                      src={currentQuestion.image}
                      alt="Question diagram"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                      style={{ maxHeight: "400px", objectFit: "contain" }}
                      unoptimized={currentQuestion.image.endsWith('.svg')}
                    />
                  </div>
                </div>
              )}

              {/* Options */}
              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className="w-full p-4 text-left flex items-center gap-4 transition-all rounded-lg"
                      style={{
                        backgroundColor: isSelected ? "#6B47ED" : colors.neutral.white,
                        color: isSelected ? colors.text.light : colors.text.primary,
                        border: `1px solid ${isSelected ? "#6B47ED" : colors.background.cardBorder}`,
                        borderRadius: radii.md,
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                        style={{
                          borderColor: isSelected ? colors.text.light : "#9CA3AF",
                          backgroundColor: isSelected ? colors.text.light : "transparent",
                        }}
                      >
                        {isSelected && (
                          <Check className="w-3 h-3" style={{ color: "#6B47ED", strokeWidth: 3 }} />
                        )}
                      </div>
                      <span
                        style={{
                          ...typography.card.bodyMd,
                          fontSize: "16px",
                          fontWeight: isSelected ? 500 : 400,
                          fontFamily: "var(--font-poppins), sans-serif",
                          color: isSelected ? colors.text.light : colors.text.primary,
                        }}
                      >
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Buttons - Removed from here, moved to footer */}
            </div>
          </div>

          {/* Right Panel - Progress & Question Map */}
          <div className="lg:col-span-1">
            <div style={styles.sideCard} className="p-6">
              {/* Test Progress */}
              <div className="mb-6">
                <h2
                  style={{
                    ...typography.card.titleMd,
                    color: colors.text.primary,
                    fontWeight: 700,
                    fontSize: "18px",
                    marginBottom: "16px",
                    fontFamily: "var(--font-poppins), sans-serif",
                  }}
                >
                  Test Progress
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span
                        style={{
                          ...typography.card.bodySm,
                          color: colors.text.primary,
                          fontSize: "14px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        Attempted
                      </span>
                    </div>
                    <span
                      style={{
                        ...typography.card.bodySm,
                        color: colors.text.primary,
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      {attempted}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                      <span
                        style={{
                          ...typography.card.bodySm,
                          color: colors.text.primary,
                          fontSize: "14px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        Unattempted
                      </span>
                    </div>
                    <span
                      style={{
                        ...typography.card.bodySm,
                        color: colors.text.primary,
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      {unattempted}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#F97316" }}></div>
                      <span
                        style={{
                          ...typography.card.bodySm,
                          color: colors.text.primary,
                          fontSize: "14px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        Wrong
                      </span>
                    </div>
                    <span
                      style={{
                        ...typography.card.bodySm,
                        color: colors.text.primary,
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      {wrong}
                    </span>
                  </div>
                </div>
              </div>

              {/* Time Remaining */}
              <div style={styles.timeBox} className="p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5" style={{ color: "#6B47ED" }} />
                  <span
                    style={{
                      ...typography.section.headingLg,
                      fontSize: "24px",
                      color: "#6B47ED",
                      fontWeight: 700,
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    {formatTime(timeRemaining)}
                  </span>
                </div>
                <span
                  style={{
                    ...typography.card.bodySm,
                    color: colors.text.tertiary,
                    fontSize: "14px",
                    fontFamily: "var(--font-poppins), sans-serif",
                  }}
                >
                  Time Remaining
                </span>
              </div>

              {/* Question Map */}
              <div>
                <h2
                  style={{
                    ...typography.card.titleMd,
                    color: colors.text.primary,
                    fontWeight: 700,
                    fontSize: "18px",
                    marginBottom: "16px",
                    fontFamily: "var(--font-poppins), sans-serif",
                  }}
                >
                  Question Map
                </h2>
                <div className="grid grid-cols-7 gap-2">
                  {quiz.questions.map((question) => {
                    const status = getQuestionStatus(question.id);
                    return (
                      <button
                        key={question.id}
                        onClick={() => handleQuestionClick(question.id)}
                        className="w-full aspect-square flex items-center justify-center font-semibold text-sm transition-all hover:opacity-80"
                        style={styles.questionNumberButton(status)}
                      >
                        {question.id}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Navigation Buttons */}
      <div className="sticky bottom-0 bg-white border-t py-4 px-4 sm:px-6 lg:px-8" style={{ borderColor: colors.background.cardBorder }}>
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: colors.neutral.white,
                color: colors.text.secondary,
                border: `1px solid ${colors.background.cardBorder}`,
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestionIndex === quiz.questions.length - 1}
              className="px-6 py-3 rounded-lg font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              style={{
                background: currentQuestionIndex === quiz.questions.length - 1
                  ? colors.neutral.gray400
                  : "#6B47ED",
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <button
            className="px-8 py-3 rounded-lg font-semibold text-white"
            style={{
              ...styles.submitButton,
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 500,
              fontSize: "16px",
            }}
            onClick={() => {
              setIsResultsModalOpen(true);
            }}
          >
            Submit Test
          </button>
        </div>
      </div>

      {/* Test Results Modal */}
      <TestResultsModal
        isOpen={isResultsModalOpen}
        onClose={() => setIsResultsModalOpen(false)}
        quiz={quiz}
        selectedAnswers={selectedAnswers}
        timeTaken={Math.floor((Date.now() - startTime) / 1000)}
        onTryAgain={() => {
          setIsResultsModalOpen(false);
          setCurrentQuestionIndex(0);
          setSelectedAnswers({});
          setTimeRemaining(quiz.totalTime * 60);
          setQuestionTime(0);
        }}
      />
    </div>
  );
};

export default TestQuizPage;


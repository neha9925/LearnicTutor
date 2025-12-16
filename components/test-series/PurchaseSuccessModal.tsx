"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, Clock, FileQuestion, TrendingUp, Users, Star, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { colors, gradients, radii, shadows, typography } from "@/theme";
import type { TestSeriesDetail } from "@/data/testSeriesDetails";

interface PurchaseSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  testSeries: TestSeriesDetail;
}

const PurchaseSuccessModal: React.FC<PurchaseSuccessModalProps> = ({
  isOpen,
  onClose,
  testSeries,
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

  const styles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modal: {
      backgroundColor: colors.neutral.white,
      borderRadius: radii.xl,
      boxShadow: shadows.modal,
    },
    successIcon: {
      width: "80px",
      height: "80px",
      backgroundColor: "#6B47ED",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      ...typography.section.headingLg,
      fontSize: "32px",
      lineHeight: "40px",
      color: "#6B47ED",
      fontWeight: 700,
    },
    description: {
      ...typography.card.bodyMd,
      fontSize: "16px",
      color: colors.text.secondary,
    },
    infoCard: {
      backgroundColor: colors.neutral.white,
      borderRadius: radii.lg,
      padding: "20px",
      boxShadow: shadows.cardSoft,
      border: `1px solid ${colors.background.cardBorder}`,
    },
    priceTag: {
      backgroundColor: "#6B47ED",
      color: colors.text.light,
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 600,
      fontSize: "14px",
      padding: "6px 12px",
      borderRadius: "20px",
    },
    metaText: {
      ...typography.card.bodySm,
      color: colors.text.primary,
      fontSize: "14px",
    },
    startButton: {
      background: gradients.buttonPrimary,
      color: colors.text.light,
      boxShadow: "0px 8px 16px rgba(107, 71, 237, 0.25)",
    },
    homeButton: {
      backgroundColor: colors.neutral.white,
      color: "#6B47ED",
      border: "1px solid #6B47ED",
    },
  } as const;

  const handleStartQuiz = () => {
    onClose();
    router.push(`/test-series/${testSeries.id}/quiz`);
  };

  const handleGoHome = () => {
    onClose();
    router.push("/");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={styles.overlay}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg relative"
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
        <div className="p-8">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div style={{
              width: "80px",
              height: "80px",
              backgroundColor: "#6B47ED",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Check className="w-10 h-10" style={{ color: "white", strokeWidth: 3 }} />
            </div>
          </div>

          {/* Title */}
          <h2 style={styles.title} className="text-center mb-3">
            Purchase Successful!
          </h2>

          {/* Description */}
          <p style={styles.description} className="text-center mb-8">
            You&apos;ve successfully purchased the {testSeries.title}.
          </p>

          {/* Test Series Info Card */}
          <div style={styles.infoCard} className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <h3
                style={{
                  ...typography.card.titleMd,
                  color: colors.text.primary,
                  fontWeight: 700,
                  fontSize: "18px",
                }}
                className="flex-1"
              >
                {testSeries.title}
              </h3>
              <span style={styles.priceTag}>
                ₹{testSeries.currentPrice}
              </span>
            </div>

            {/* Key Details - First Row */}
            <div className="flex items-center gap-6 mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" style={{ color: "#6B47ED" }} />
                <span style={styles.metaText}>
                  {testSeries.duration} mins
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FileQuestion className="w-5 h-5" style={{ color: "#6B47ED" }} />
                <span style={styles.metaText}>
                  {testSeries.questions} Questions
                </span>
              </div>
            </div>

            {/* Key Details - Second Row */}
            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" style={{ color: "#6B47ED" }} />
                <span style={styles.metaText}>
                  {testSeries.difficulty}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" style={{ color: "#6B47ED" }} />
                <span style={styles.metaText}>
                  {testSeries.enrolled.toLocaleString()}+ Enrolled
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
              <span
                style={{
                  ...typography.card.bodySm,
                  color: colors.text.primary,
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                {testSeries.rating}
              </span>
              <span
                style={{
                  ...typography.card.bodySm,
                  color: colors.text.tertiary,
                  fontSize: "14px",
                }}
              >
                ({testSeries.reviews.toLocaleString()} reviews)
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleStartQuiz}
              className="w-full py-3 px-4 rounded-lg text-white"
              style={{
                ...styles.startButton,
                ...typography.button.primary,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              Start Quiz
            </button>
            <button
              onClick={handleGoHome}
              className="w-full py-3 px-4 rounded-lg border-2"
              style={{
                ...styles.homeButton,
                ...typography.button.secondary,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              Go to Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccessModal;


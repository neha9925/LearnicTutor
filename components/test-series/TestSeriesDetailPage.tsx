"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PurchaseSuccessModal from "./PurchaseSuccessModal";
import { Star, Clock, FileQuestion, Brain, Check, CheckCircle2, BarChart3, Lightbulb, Award, Plus, RotateCcw } from "lucide-react";
import { colors, gradients, radii, shadows, typography } from "@/theme";
import type { TestSeriesDetail } from "@/data/testSeriesDetails";

interface TestSeriesDetailPageProps {
  testSeries: TestSeriesDetail;
}

const TestSeriesDetailPage: React.FC<TestSeriesDetailPageProps> = ({ testSeries }) => {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const handlePurchase = () => {
    setIsPurchaseModalOpen(true);
  };

  const styles = {
    heroBanner: {
      background: "linear-gradient(135deg, #6B47ED 0%, #8B5CF6 100%)",
      width: "100%",
    },
    categoryTag: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      color: "#6B47ED",
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 500,
      fontSize: "14px",
      padding: "8px 20px",
      borderRadius: "9999px",
    },
    heroTitle: {
      ...typography.section.headingLg,
      fontSize: "40px",
      lineHeight: "48px",
      color: colors.text.light,
      fontWeight: 700,
    },
    heroDescription: {
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "28px",
      color: "rgba(255, 255, 255, 0.9)",
    },
    heroMeta: {
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      color: colors.text.light,
    },
    infoCard: {
      backgroundColor: colors.neutral.white,
      borderRadius: radii.lg,
      padding: "20px",
      boxShadow: shadows.cardSoft,
    },
    sectionTitle: {
      ...typography.section.headingLg,
      fontSize: "24px",
      lineHeight: "32px",
      color: colors.text.primary,
      fontWeight: 700,
    },
    sectionText: {
      ...typography.card.bodyMd,
      color: colors.text.secondary,
      fontSize: "16px",
    },
    priceCard: {
      backgroundColor: colors.neutral.white,
      borderRadius: radii.lg,
      padding: "24px",
      boxShadow: shadows.cardSoft,
      border: `1px solid ${colors.background.cardBorder}`,
    },
    currentPrice: {
      ...typography.section.headingLg,
      fontSize: "36px",
      lineHeight: "44px",
      color: "#6B47ED",
      fontWeight: 700,
    },
    originalPrice: {
      ...typography.card.bodyMd,
      color: colors.text.tertiary,
      fontSize: "18px",
      textDecoration: "line-through",
    },
    discountTag: {
      backgroundColor: "#FCA5A5",
      color: colors.text.light,
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 600,
      fontSize: "12px",
      padding: "4px 10px",
      borderRadius: "20px",
    },
    purchaseButton: {
      background: gradients.buttonPrimary,
      color: colors.text.light,
      boxShadow: "0px 8px 16px rgba(107, 71, 237, 0.25)",
    },
    packageTag: {
      backgroundColor: "#FED7AA",
      color: "#F48C06",
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 600,
      fontSize: "12px",
      padding: "4px 10px",
      borderRadius: "4px",
    },
    relatedTestCard: {
      backgroundColor: colors.neutral.white,
      borderRadius: radii.md,
      padding: "16px",
      border: `1px solid ${colors.background.cardBorder}`,
    },
  } as const;

  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5", style: { color: "#6B47ED" } };
    switch (iconName) {
      case "check-circle":
        return <CheckCircle2 {...iconProps} />;
      case "bar-chart":
        return <BarChart3 {...iconProps} />;
      case "lightbulb":
        return <Lightbulb {...iconProps} />;
      case "award":
        return <Award {...iconProps} />;
      default:
        return <CheckCircle2 {...iconProps} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <div
            className="px-6 py-16 md:px-12 md:py-20 text-center"
            style={styles.heroBanner}
          >
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4" style={styles.categoryTag}>
                {testSeries.category}
              </div>
              <h1 style={styles.heroTitle} className="mb-4">
                {testSeries.title}
              </h1>
              <p style={styles.heroDescription} className="mb-8">
                {testSeries.description}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-300" fill="currentColor" />
                  <span style={styles.heroMeta}>
                    {testSeries.rating} ({testSeries.reviews.toLocaleString()} reviews)
                  </span>
                </div>
                <span style={styles.heroMeta}>
                  {testSeries.enrolled.toLocaleString()} Enrolled
                </span>
                <span style={styles.heroMeta}>
                  Updated {testSeries.updatedAt}
                </span>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div style={{
                  ...styles.infoCard,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textAlign: "left",
                }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F3F0FF" }}>
                    <Clock className="w-6 h-6" style={{ color: "#6B47ED" }} />
                  </div>
                  <div>
                    <div style={{
                      ...typography.card.bodySm,
                      color: colors.text.primary,
                      marginBottom: "4px",
                      fontWeight: 700,
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      Duration
                    </div>
                    <div style={{
                      ...typography.card.bodyMd,
                      color: colors.text.secondary,
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      {testSeries.duration} minutes
                    </div>
                  </div>
                </div>
                <div style={{
                  ...styles.infoCard,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textAlign: "left",
                }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F3F0FF" }}>
                    <FileQuestion className="w-6 h-6" style={{ color: "#6B47ED" }} />
                  </div>
                  <div>
                    <div style={{
                      ...typography.card.bodySm,
                      color: colors.text.primary,
                      marginBottom: "4px",
                      fontWeight: 700,
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      Questions
                    </div>
                    <div style={{
                      ...typography.card.bodyMd,
                      color: colors.text.secondary,
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      {testSeries.questions} Questions
                    </div>
                  </div>
                </div>
                <div style={{
                  ...styles.infoCard,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textAlign: "left",
                }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F3F0FF" }}>
                    <Brain className="w-6 h-6" style={{ color: "#6B47ED" }} />
                  </div>
                  <div>
                    <div style={{
                      ...typography.card.bodySm,
                      color: colors.text.primary,
                      marginBottom: "4px",
                      fontWeight: 700,
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      Difficulty
                    </div>
                    <div style={{
                      ...typography.card.bodyMd,
                      color: colors.text.secondary,
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      {testSeries.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* What's Included */}
              <div style={{
                backgroundColor: colors.neutral.white,
                borderRadius: radii.lg,
                padding: "24px",
                boxShadow: shadows.cardSoft,
              }}>
                <h2 style={{
                  ...typography.section.headingLg,
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: colors.text.primary,
                  fontWeight: 700,
                  marginBottom: "24px",
                  fontFamily: "var(--font-poppins), sans-serif",
                }}>
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {testSeries.whatsIncluded.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F3F0FF" }}>
                        {getIcon(item.icon)}
                      </div>
                      <div>
                        <h3 style={{
                          ...typography.card.titleMd,
                          color: colors.text.primary,
                          fontWeight: 700,
                          marginBottom: "4px",
                          fontSize: "16px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}>
                          {item.title}
                        </h3>
                        <p style={{
                          ...typography.card.bodySm,
                          color: colors.text.tertiary,
                          fontSize: "14px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Syllabus Breakdown */}
              <div style={{
                backgroundColor: colors.neutral.white,
                borderRadius: radii.lg,
                padding: "24px",
                boxShadow: shadows.cardSoft,
              }}>
                <h2 style={{
                  ...typography.section.headingLg,
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: colors.text.primary,
                  fontWeight: 700,
                  marginBottom: "24px",
                  fontFamily: "var(--font-poppins), sans-serif",
                }}>
                  Syllabus Breakdown
                </h2>
                <div className="space-y-3">
                  {testSeries.syllabus.map((subject, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg"
                      style={{
                        backgroundColor: "#F9FAFB",
                        borderRadius: "8px",
                      }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: "#6B47ED" }}>
                        <span style={{
                          ...typography.card.bodySm,
                          fontWeight: 700,
                          fontSize: "14px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}>
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1 flex items-center justify-between">
                        <span style={{
                          ...typography.card.bodyMd,
                          color: colors.text.primary,
                          fontWeight: 600,
                          fontSize: "16px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}>
                          {subject.subject}
                        </span>
                        <span style={{
                          ...typography.card.bodySm,
                          color: colors.text.tertiary,
                          fontSize: "14px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}>
                          {subject.questions} Questions
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Tests */}
              <div style={{
                backgroundColor: "#F9FAFB",
                borderRadius: radii.lg,
                padding: "24px",
                boxShadow: shadows.cardSoft,
              }}>
                <h2 style={{
                  ...typography.section.headingLg,
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: colors.text.primary,
                  fontWeight: 700,
                  marginBottom: "24px",
                  fontFamily: "var(--font-poppins), sans-serif",
                }}>
                  Related Tests
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testSeries.relatedTests.map((test) => (
                    <div
                      key={test.id}
                      style={{
                        backgroundColor: colors.neutral.white,
                        borderRadius: radii.md,
                        padding: "20px",
                        border: `1px solid ${colors.background.cardBorder}`,
                        boxShadow: shadows.cardSoft,
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#6B47ED" }}>
                          <FileQuestion className="w-6 h-6" style={{ color: colors.neutral.white }} />
                        </div>
                        <div className="flex-1">
                          <h3 style={{
                            ...typography.card.titleMd,
                            color: colors.text.primary,
                            fontWeight: 600,
                            marginBottom: "8px",
                            fontSize: "16px",
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}>
                            {test.title}
                          </h3>
                          <p style={{
                            ...typography.card.bodySm,
                            color: colors.text.tertiary,
                            fontSize: "14px",
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}>
                            {test.questions} Questions • {test.duration} mins
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span style={{
                          ...typography.card.titleMd,
                          color: "#6B47ED",
                          fontWeight: 700,
                          fontSize: "20px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}>
                          ₹{test.price}
                        </span>
                        <button
                          className="px-6 py-2 rounded-lg text-white font-semibold text-sm"
                          style={{
                            background: "#6B47ED",
                            fontFamily: "var(--font-poppins), sans-serif",
                            fontWeight: 500,
                          }}
                        >
                          Start
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Pricing Card */}
              <div style={{
                ...styles.priceCard,
                textAlign: "center",
              }}>
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span style={{
                      ...typography.section.headingLg,
                      fontSize: "36px",
                      lineHeight: "44px",
                      color: "#6B47ED",
                      fontWeight: 700,
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      ₹{testSeries.currentPrice}
                    </span>
                    <span style={{
                      ...typography.card.bodyMd,
                      color: colors.text.tertiary,
                      fontSize: "18px",
                      textDecoration: "line-through",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      ₹{testSeries.originalPrice}
                    </span>
                    <span style={styles.discountTag}>
                      {testSeries.discount}% OFF
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <span style={{
                      ...typography.card.bodySm,
                      color: colors.text.tertiary,
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      Limited time offer
                    </span>
                  </div>
                </div>
                <button
                  onClick={handlePurchase}
                  className="w-full py-3 px-4 rounded-lg font-semibold text-white mb-4"
                  style={{
                    ...styles.purchaseButton,
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  Purchase Now
                </button>
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span style={{
                      ...typography.card.bodySm,
                      color: colors.text.secondary,
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      Secure Payment
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3B82F6" }}>
                      <RotateCcw className="w-3 h-3" style={{ color: colors.neutral.white }} />
                    </div>
                    <span style={{
                      ...typography.card.bodySm,
                      color: colors.text.secondary,
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      7-day Refund
                    </span>
                  </div>
                </div>
              </div>

              {/* Package Card */}
              {testSeries.package && (
                <div style={{
                  backgroundColor: colors.neutral.white,
                  borderRadius: radii.lg,
                  padding: "0",
                  boxShadow: shadows.cardSoft,
                  border: `1px solid ${colors.background.cardBorder}`,
                  overflow: "hidden",
                }}>
                  {/* Orange Banner */}
                  {testSeries.package.tag && (
                    <div
                      className="px-4 py-2 text-center"
                      style={{
                        backgroundColor: "#FED7AA",
                        borderRadius: "8px 8px 0 0",
                      }}
                    >
                      <span style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "#F48C06",
                      }}>
                        {testSeries.package.tag}
                      </span>
                    </div>
                  )}
                  
                  {/* Main Content */}
                  <div className="px-6 py-6 text-center">
                    <h3 style={{
                      ...typography.card.titleLg,
                      color: colors.text.primary,
                      fontWeight: 700,
                      marginBottom: "8px",
                      fontSize: "20px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      {testSeries.package.title}
                    </h3>
                    <p style={{
                      ...typography.card.bodySm,
                      color: colors.text.tertiary,
                      marginBottom: "20px",
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      {testSeries.package.description}
                    </p>
                    <div style={{
                      ...typography.section.headingLg,
                      fontSize: "32px",
                      lineHeight: "40px",
                      color: "#6B47ED",
                      fontWeight: 700,
                      marginBottom: "20px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}>
                      ₹{testSeries.package.price}
                    </div>
                    
                    {/* Separator with Plus Icon */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t" style={{ borderColor: colors.background.cardBorder }}></div>
                      </div>
                      <div className="relative flex justify-center">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#6B47ED" }}
                        >
                          <Plus className="w-5 h-5" style={{ color: colors.neutral.white }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Button */}
                  <div className="px-6 pb-6">
                    <button
                      className="w-full py-3 px-4 rounded-lg font-semibold border-2"
                      style={{
                        backgroundColor: colors.neutral.white,
                        color: "#6B47ED",
                        borderColor: "#6B47ED",
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontWeight: 600,
                        fontSize: "16px",
                      }}
                    >
                      Buy all 2 at ₹{testSeries.package.combinedPrice}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Purchase Success Modal */}
      <PurchaseSuccessModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        testSeries={testSeries}
      />
    </div>
  );
};

export default TestSeriesDetailPage;


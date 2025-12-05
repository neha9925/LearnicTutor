"use client";

import React from "react";
import { TrendingUp, Star } from "lucide-react";
import { typography } from "@/theme";

const styles = {
  heading: {
    ...typography.section.headingLg,
    color: "#FFFFFF",
  },
  insightTitle: {
    ...typography.card.bodyMd,
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: "18px",
  },
  insightSubtitle: {
    ...typography.card.bodySm,
    color: "#FFFFFF",
    opacity: 0.9,
    fontSize: "14px",
  },
  chartHeading: {
    ...typography.card.titleLg,
    color: "#1F2937",
  },
  chartMonth: {
    ...typography.card.bodySm,
    color: "#1F2937",
    fontWeight: 500,
  },
  chartAmount: {
    ...typography.card.bodySm,
    color: "#1F2937",
    fontWeight: 600,
  },
} as const;

const monthlyEarnings = [
  { month: "Month 1", amount: 500 },
  { month: "Month 3", amount: 1250 },
  { month: "Month 6", amount: 2000 },
  { month: "Month 12", amount: 2500, isPlus: true },
];

const maxEarning = 2500;

const TutorEarningsInsight: React.FC = () => {
  return (
    <section 
      className="py-12 md:py-16 lg:py-20"
      style={{
        background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Purple Background */}
          <div 
            className="rounded-lg p-8 md:p-10 lg:p-12 text-white"
            style={{
              background: "#6366F1",
            }}
          >
            <h2 className="mb-8" style={styles.heading}>
              Tutor Earnings Insight
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#572EEE]" />
                </div>
                <div>
                  <p className="mb-1" style={styles.insightTitle}>
                    Average tutor earns up to $2,500/month
                  </p>
                  <p style={styles.insightSubtitle}>
                    Based on 20+ hours weekly teaching
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-[#572EEE]" />
                </div>
                <div>
                  <p className="mb-1" style={styles.insightTitle}>
                    Top tutors cross $8,000 monthly earnings
                  </p>
                  <p style={styles.insightSubtitle}>
                    Premium courses and live sessions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Chart */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-gray-800 mb-6" style={styles.chartHeading}>
              Monthly Earning Growth
            </h3>
            <div className="space-y-4">
              {monthlyEarnings.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-20" style={styles.chartMonth}>
                    {item.month}
                  </div>
                  <div className="flex-1 relative flex items-center gap-3">
                    <div className="flex-1 h-8 bg-gray-200 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-[#572EEE] rounded-full"
                        style={{ width: `${(item.amount / maxEarning) * 100}%` }}
                      />
                    </div>
                    <div className="w-20 text-right" style={styles.chartAmount}>
                      ${item.amount}{item.isPlus ? "+" : ""}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorEarningsInsight;


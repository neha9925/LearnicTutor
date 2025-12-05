"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";

const FutureEarningsInsights: React.FC = () => {
  return (
    <section 
      className="py-12 md:py-16 lg:py-20"
      style={{
        background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="Tutor Earnings Insight"
          subtitle="Join thousands of successful tutors earning great income"
          variant="dark"
          bottomMargin="lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <StatCard
            variant="glass"
            value="₹3,500"
            label="Average Monthly Earnings"
            textColor="#FFFFFF"
            valueColor="#FFFFFF"
          />
          <StatCard
            variant="glass"
            value="₹12,000+"
            label="Top Tutors Monthly Earnings"
            textColor="#FFFFFF"
            valueColor="#FFFFFF"
          />
        </div>
      </div>
    </section>
  );
};

export default FutureEarningsInsights;


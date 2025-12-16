"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";

const earnings = [
  {
    value: "10%",
    title: "Commission Rate",
    description: "After 10 student fix 10% commission",
  },
  {
    value: "₹50K+",
    title: "Monthly Potential",
    description: "Top coordinators earn this much",
  },
  {
    value: "₹500",
    title: "Per Enrollment",
    description: "Average commission per student",
  },
];

const EarningsStructure: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="Earnings Structure"
          subtitle="Transparent and attractive commission structure"
          variant="default"
          bottomMargin="lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {earnings.map((earning, index) => {
            return (
              <StatCard
                key={index}
                variant="default"
                value={earning.value}
                label={earning.title}
                description={earning.description}
                borderColor="#572EEE"
                valueColor="#572EEE"
                textColor="#1F2937"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EarningsStructure;


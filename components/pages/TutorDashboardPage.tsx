"use client";

import React, { useState } from "react";
import TutorSidebar from "@/components/tutor-dashboard/TutorSidebar";
import TutorHeader from "@/components/tutor-dashboard/TutorHeader";
import SummaryCards from "@/components/tutor-dashboard/SummaryCards";
import RunningClasses from "@/components/tutor-dashboard/RunningClasses";
import EarningsOverview from "@/components/tutor-dashboard/EarningsOverview";

const TutorDashboardPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Sidebar */}
      <TutorSidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      {/* Main Content */}
      <div
        className="flex-1 md:ml-64 flex flex-col w-full"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Header */}
        <TutorHeader isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

        {/* Dashboard Content */}
        <main
          className="flex-1 p-4 md:p-6 overflow-y-auto"
          style={{
            backgroundColor: "#FFFFFF",
          }}
        >
          <div className="w-full mx-auto space-y-6 md:space-y-8">
            {/* Summary Cards */}
            <SummaryCards />

            {/* Running Classes */}
            <RunningClasses />

            {/* Earnings Overview */}
            <EarningsOverview />
          </div>
        </main>
      </div>
    </div>
  );
};

export default TutorDashboardPage;


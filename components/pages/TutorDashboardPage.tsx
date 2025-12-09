"use client";

import React from "react";
import TutorSidebar from "@/components/tutor-dashboard/TutorSidebar";
import TutorHeader from "@/components/tutor-dashboard/TutorHeader";
import SummaryCards from "@/components/tutor-dashboard/SummaryCards";
import RunningClasses from "@/components/tutor-dashboard/RunningClasses";
import EarningsOverview from "@/components/tutor-dashboard/EarningsOverview";

const TutorDashboardPage: React.FC = () => {
  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Sidebar */}
      <TutorSidebar />

      {/* Main Content */}
      <div
        className="flex-1 ml-64 flex flex-col"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Header */}
        <TutorHeader />

        {/* Dashboard Content */}
        <main
          className="flex-1 p-6 overflow-y-auto"
          style={{
            backgroundColor: "#FFFFFF",
          }}
        >
          <div className="w-full mx-auto space-y-8">
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


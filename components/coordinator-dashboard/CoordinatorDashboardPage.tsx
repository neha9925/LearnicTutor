"use client";

import React from "react";
import CoordinatorSidebar from "@/components/coordinator-dashboard/CoordinatorSidebar";
import CoordinatorHeader from "@/components/coordinator-dashboard/CoordinatorHeader";
import CoordinatorSummaryCards from "@/components/coordinator-dashboard/CoordinatorSummaryCards";
import EarningsOverview from "@/components/coordinator-dashboard/EarningsOverview";
import ReferredStudentsTable from "@/components/coordinator-dashboard/ReferredStudentsTable";
import NewBatchesSection from "@/components/coordinator-dashboard/NewBatchesSection";
import { FONT_FAMILY } from "@/theme";

const CoordinatorDashboardPage: React.FC = () => {
  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: "#F9FAFB",
      }}
    >
      <CoordinatorSidebar />
      <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        <CoordinatorHeader />
        <div className="p-6 overflow-y-auto flex-1">
          <CoordinatorSummaryCards />
          <EarningsOverview />
          <ReferredStudentsTable />
          <NewBatchesSection />
        </div>
      </div>
    </div>
  );
};

export default CoordinatorDashboardPage;


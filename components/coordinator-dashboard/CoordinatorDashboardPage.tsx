"use client";

import React from "react";
import CoordinatorSidebar from "@/components/coordinator-dashboard/CoordinatorSidebar";
import CoordinatorHeader from "@/components/coordinator-dashboard/CoordinatorHeader";
import CoordinatorSummaryCards from "@/components/coordinator-dashboard/CoordinatorSummaryCards";
import EarningsOverview from "@/components/coordinator-dashboard/EarningsOverview";
import ReferredStudentsTable from "@/components/coordinator-dashboard/ReferredStudentsTable";
import NewBatchesSection from "@/components/coordinator-dashboard/NewBatchesSection";
import { FONT_FAMILY } from "@/theme";

interface CoordinatorDashboardPageProps {
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

const CoordinatorDashboardPage: React.FC<CoordinatorDashboardPageProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: "#F9FAFB",
      }}
    >
      <CoordinatorSidebar isMobileMenuOpen={isMobileMenuOpen || false} setIsMobileMenuOpen={setIsMobileMenuOpen || (() => {})} />
      <div className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden w-full">
        <CoordinatorHeader isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <div className="p-4 md:p-6 overflow-y-auto flex-1">
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


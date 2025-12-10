"use client";

import React, { useState } from "react";
import CoordinatorDashboardPage from "@/components/coordinator-dashboard/CoordinatorDashboardPage";

export default function CoordinatorDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <CoordinatorDashboardPage isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />;
}


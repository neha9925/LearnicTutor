"use client";

import React, { useState } from "react";
import ScheduleClassPage from "@/components/tutor-dashboard/ScheduleClassPage";

export default function ScheduleClassRoute() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <ScheduleClassPage isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />;
}


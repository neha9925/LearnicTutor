"use client";

import React, { useState } from "react";
import SettingsPage from "@/components/tutor-dashboard/SettingsPage";

export default function SettingsRoute() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <SettingsPage isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />;
}


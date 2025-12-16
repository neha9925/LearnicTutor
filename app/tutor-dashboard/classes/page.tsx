"use client";

import React, { useState } from "react";
import TutorSidebar from "@/components/tutor-dashboard/TutorSidebar";
import ManageClassesPage from "@/components/tutor-dashboard/ManageClassesPage";

export default function ManageClassesRoute() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <TutorSidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <ManageClassesPage isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    </div>
  );
}


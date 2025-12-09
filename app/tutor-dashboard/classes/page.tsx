"use client";

import React from "react";
import TutorSidebar from "@/components/tutor-dashboard/TutorSidebar";
import ManageClassesPage from "@/components/tutor-dashboard/ManageClassesPage";

export default function ManageClassesRoute() {
  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <TutorSidebar />
      <ManageClassesPage />
    </div>
  );
}


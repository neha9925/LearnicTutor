"use client";

import React, { useState } from "react";
import NotificationsPage from "@/components/tutor-dashboard/NotificationsPage";

export default function TutorNotificationsRoute() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <NotificationsPage isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />;
}


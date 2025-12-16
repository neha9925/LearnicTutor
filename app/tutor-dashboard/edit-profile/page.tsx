"use client";

import React, { useState } from "react";
import EditProfilePage from "@/components/tutor-dashboard/EditProfilePage";

export default function EditProfileRoute() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <EditProfilePage isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />;
}


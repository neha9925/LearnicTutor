"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const DonationFormContent = dynamic(
  () => import("@/components/donation/DonationFormContent"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  }
);

const DonationFormPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <DonationFormContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default DonationFormPage;


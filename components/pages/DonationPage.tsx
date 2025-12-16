"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const DonationHeroSection = dynamic(
  () => import("@/components/donation/DonationHeroSection"),
  {
    loading: () => <div className="h-96 bg-purple-100 animate-pulse" />,
  }
);

const DonationBatchesSection = dynamic(
  () => import("@/components/donation/DonationBatchesSection"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  }
);

const DonationSponsorsSection = dynamic(
  () => import("@/components/donation/DonationSponsorsSection"),
  {
    loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
  }
);

const DonationWhySupportSection = dynamic(
  () => import("@/components/donation/DonationWhySupportSection"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  }
);

const DonationSuccessStoriesSection = dynamic(
  () => import("@/components/donation/DonationSuccessStoriesSection"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  }
);

const DonationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="h-96 bg-purple-100 animate-pulse" />}>
          <DonationHeroSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <DonationBatchesSection />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
          <DonationSponsorsSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <DonationWhySupportSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <DonationSuccessStoriesSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default DonationPage;


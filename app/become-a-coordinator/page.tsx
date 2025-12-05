"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CoordinatorHero = dynamic(() => import("@/components/become-coordinator/CoordinatorHero"), {
  loading: () => <div className="h-96 bg-purple-600 animate-pulse" />,
});

const CoordinatorBenefits = dynamic(() => import("@/components/become-coordinator/CoordinatorBenefits"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const HowToBecomeCoordinator = dynamic(() => import("@/components/become-coordinator/HowToBecomeCoordinator"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const EarningsStructure = dynamic(() => import("@/components/become-coordinator/EarningsStructure"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const WhatCoordinatorsDo = dynamic(() => import("@/components/become-coordinator/WhatCoordinatorsDo"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const ApplyNowCoordinatorSection = dynamic(() => import("@/components/become-coordinator/ApplyNowCoordinatorSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const BecomeCoordinatorPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="h-96 bg-purple-600 animate-pulse" />}>
          <CoordinatorHero />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <CoordinatorBenefits />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <HowToBecomeCoordinator />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <EarningsStructure />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <WhatCoordinatorsDo />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <ApplyNowCoordinatorSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeCoordinatorPage;


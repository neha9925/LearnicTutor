"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CareersHeroSection = dynamic(() => import("@/components/careers/CareersHeroSection"), {
  loading: () => <div className="h-96 bg-purple-100 animate-pulse" />,
});

const WhyWorkWithUs = dynamic(() => import("@/components/careers/WhyWorkWithUs"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
});

const CurrentOpenings = dynamic(() => import("@/components/careers/CurrentOpenings"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="h-96 bg-purple-100 animate-pulse" />}>
          <CareersHeroSection />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
          <WhyWorkWithUs />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <CurrentOpenings />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;







"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AboutHeroSection = dynamic(() => import("@/components/about/AboutHeroSection"), {
  loading: () => <div className="h-96 bg-purple-100 animate-pulse" />,
});

const MissionSection = dynamic(() => import("@/components/about/MissionSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const WhatMakesDifferent = dynamic(() => import("@/components/about/WhatMakesDifferent"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
});

const TeamSection = dynamic(() => import("@/components/about/TeamSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const WhyChooseSection = dynamic(() => import("@/components/about/WhyChooseSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const SuccessStories = dynamic(() => import("@/components/home/SuccessStories"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="h-96 bg-purple-100 animate-pulse" />}>
          <AboutHeroSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <MissionSection />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
          <WhatMakesDifferent />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <TeamSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <WhyChooseSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <SuccessStories />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;


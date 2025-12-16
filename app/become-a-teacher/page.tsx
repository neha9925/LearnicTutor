"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BecomeTeacherHero = dynamic(() => import("@/components/become-teacher/BecomeTeacherHero"), {
  loading: () => <div className="h-96 bg-purple-600 animate-pulse" />,
});

const WhyTeachSection = dynamic(() => import("@/components/become-teacher/WhyTeachSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const TutorEarningsInsight = dynamic(() => import("@/components/become-teacher/TutorEarningsInsight"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const WhatYouCanTeach = dynamic(() => import("@/components/become-teacher/WhatYouCanTeach"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
});

const HowToBecomeTutor = dynamic(() => import("@/components/become-teacher/HowToBecomeTutor"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const RequiredQualifications = dynamic(() => import("@/components/become-teacher/RequiredQualifications"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const FutureEarningsInsights = dynamic(() => import("@/components/become-teacher/FutureEarningsInsights"), {
  loading: () => <div className="h-64 bg-purple-600 animate-pulse" />,
});

const ApplyNowSection = dynamic(() => import("@/components/become-teacher/ApplyNowSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const BecomeTeacherPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="h-96 bg-purple-600 animate-pulse" />}>
          <BecomeTeacherHero />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <WhyTeachSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <TutorEarningsInsight />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
          <WhatYouCanTeach />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <HowToBecomeTutor />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <RequiredQualifications />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-purple-600 animate-pulse" />}>
          <FutureEarningsInsights />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <ApplyNowSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeTeacherPage;


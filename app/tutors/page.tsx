"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ExpertTutorsHeroSection = dynamic(() => import("@/components/tutors/ExpertTutorsHeroSection"), {
  loading: () => <div className="h-96 bg-purple-100 animate-pulse" />,
});

const ExpertTutorsList = dynamic(() => import("@/components/tutors/ExpertTutorsList"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const WhatMakesTutorsSpecial = dynamic(() => import("@/components/tutors/WhatMakesTutorsSpecial"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
});

const WantToTeachCTA = dynamic(() => import("@/components/tutors/WantToTeachCTA"), {
  loading: () => <div className="h-48 bg-purple-100 animate-pulse" />,
});

const TutorsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="h-96 bg-purple-100 animate-pulse" />}>
          <ExpertTutorsHeroSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <ExpertTutorsList />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
          <WhatMakesTutorsSpecial />
        </Suspense>
        <Suspense fallback={<div className="h-48 bg-purple-100 animate-pulse" />}>
          <WantToTeachCTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default TutorsPage;







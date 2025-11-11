"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const HeroSection = dynamic(() => import("@/components/home/HeroSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const LearningTools = dynamic(() => import("@/components/home/LearningTools"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
});

const Categories = dynamic(() => import("@/components/home/Categories"), {
  loading: () => <div className="h-48 bg-gray-50 animate-pulse" />,
});

const CourseSection = dynamic(() => import("@/components/home/CourseSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const JoinSection = dynamic(() => import("@/components/home/JoinSection"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
});

const TopTutors = dynamic(() => import("@/components/home/TopTutors"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const CtaBanner = dynamic(() => import("@/components/home/CtaBanner"), {
  loading: () => <div className="h-48 bg-gray-50 animate-pulse" />,
});

const SuccessStories = dynamic(() => import("@/components/home/SuccessStories"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const Newsletter = dynamic(() => import("@/components/home/Newsletter"), {
  loading: () => <div className="h-48 bg-gray-50 animate-pulse" />,
});

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
          <LearningTools />
        </Suspense>
        <Suspense fallback={<div className="h-48 bg-gray-50 animate-pulse" />}>
          <Categories />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <CourseSection />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
          <JoinSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <TopTutors />
        </Suspense>
        <Suspense fallback={<div className="h-48 bg-gray-50 animate-pulse" />}>
          <CtaBanner />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <SuccessStories />
        </Suspense>
        <Suspense fallback={<div className="h-48 bg-gray-50 animate-pulse" />}>
          <Newsletter />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;


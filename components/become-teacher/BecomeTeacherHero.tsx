"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { typography } from "@/theme";

const styles = {
  heading: {
    ...typography.hero.heading,
    color: "#FFFFFF",
  },
  description: {
    ...typography.hero.description,
    color: "rgba(255, 255, 255, 0.9)",
  },
} as const;

const BecomeTeacherHero: React.FC = () => {
  return (
    <section 
      className="py-12 md:py-16 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <h1 className="mb-6 leading-tight" style={styles.heading}>
              Share Your Knowledge.<br />Teach Millions.
            </h1>
            <p className="mb-8 leading-relaxed" style={styles.description}>
              Join Learnic as a certified tutor and start teaching students worldwide. Transform lives while building your career.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-[#572EEE] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg"
              style={typography.button.primary}
            >
              Apply as a Tutor
            </Button>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/banners/careers1.svg"
              alt="Tutor Collaboration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeTeacherHero;


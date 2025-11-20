"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { typography } from "@/theme";

const styles = {
  heading: {
    ...typography.hero.heading,
    color: "#FFFFFF",
  } as const,
  description: {
    ...typography.hero.description,
    color: "#FFFFFF",
  } as const,
} as const;

const ExpertTutorsHeroSection: React.FC = () => {
  return (
    <section
      className="pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24"
      style={{
        background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Panel - Content */}
          <div>
            <h1 className="text-white mb-6 leading-tight" style={styles.heading}>
              Meet Our Expert Tutors
            </h1>
            <p
              className="text-white mb-8 leading-relaxed"
              style={styles.description}
            >
              Learn from certified educators, industry professionals, and passionate mentors from around the world.
            </p>
            <Link href="/videos">
              <Button
                type="button"
                size="lg"
                className="text-[#572EEE] hover:bg-gray-100 transition-colors font-semibold"
                style={{
                  ...typography.button.primary,
                  width: "209.859375px",
                  height: "60px",
                  opacity: 1,
                  borderRadius: "12px",
                  background: "#FFFFFF",
                  boxShadow: "0px 10px 15px 0px #0000001A",
                  color: "#572EEE",
                }}
              >
                Explore Courses
              </Button>
            </Link>
          </div>

          {/* Right Panel - Image */}
          <div className="hidden lg:block relative w-full h-80 lg:h-96">
            <Image
              src="/images/banners/Tutors1.svg"
              alt="Expert Tutors"
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

export default ExpertTutorsHeroSection;



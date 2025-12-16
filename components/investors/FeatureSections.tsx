"use client";

import React from "react";
import Image from "next/image";
import { colors, typography } from "@/theme";

const styles = {
  tag: {
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    backgroundColor: colors.brand.primaryTint || "#F3E8FF",
    color: "#1F2937",
    padding: "8px 16px",
    borderRadius: "20px",
    display: "inline-block",
    marginBottom: "16px",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
  },
  heading: {
    ...typography.section.headingLg,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    fontSize: "clamp(28px, 4vw, 40px)",
    textAlign: "left" as const,
    marginBottom: "16px",
    color: "#1F2937",
    fontWeight: 700,
  },
  description: {
    ...typography.section.descriptionMd,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    textAlign: "left" as const,
    color: "#1F2937",
    fontSize: "16px",
    lineHeight: "1.6",
    fontWeight: 400,
  },
} as const;

const FeatureSections: React.FC = () => {
  return (
    <section 
      className="py-16 md:py-20 lg:py-24"
      style={{
        backgroundColor: "#F3F4F6",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="space-y-20">
          {/* Feature 1: Shaping the Future of Learning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col gap-12">
              <div>
                <div className="text-center lg:text-left mb-1">
                  <span style={styles.tag}>OUR VISION</span>
                </div>
                <h2
                  style={styles.heading}
                  className="text-3xl md:text-4xl lg:text-5xl"
                >
                  Shaping the Future of Learning
                </h2>
                <p
                  style={styles.description}
                  className="text-base md:text-lg mt-4"
                >
                  To make high-quality education accessible to every learner
                  across the globe, breaking down barriers and creating
                  opportunities for millions.
                </p>
              </div>

              <div>
                <div className="text-center lg:text-left mb-1">
                  <span style={styles.tag}>OUR MISSION</span>
                </div>
                <h2
                  style={styles.heading}
                  className="text-3xl md:text-4xl lg:text-5xl"
                >
                  Empowering Every Student
                </h2>
                <p
                  style={styles.description}
                  className="text-base md:text-lg mt-4"
                >
                  Empowering students with live interaction, personalized
                  learning paths, and measurable growth through innovative
                  technology and dedicated educators.
                </p>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/banners/Investors2.svg"
                alt="Network illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSections;

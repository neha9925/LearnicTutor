"use client";

import React from "react";
import Image from "next/image";
import { typography } from "@/theme";

const styles = {
  heading: {
    ...typography.section.headingLg,
    textAlign: "left" as const,
  },
  description: {
    ...typography.section.descriptionLg,
    textAlign: "left" as const,
  },
} as const;

const MissionSection: React.FC = () => {
  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
              <Image
                src="/images/banners/About1.svg"
                alt="Learning Together"
                width={600}
                height={500}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-gray-900 mb-6" style={styles.heading}>
              Our Mission
            </h2>
            <p
              className="text-gray-600 mb-4 leading-relaxed"
              style={styles.description}
            >
              Learnic aims to transform traditional learning into a digital-first experience. We bring together expert tutors and interactive technology to help students learn, practice, and excel anytime, anywhere.
            </p>
            <p
              className="text-gray-600 mb-4 leading-relaxed"
              style={styles.description}
            >
              Our platform bridges the gap between traditional classroom learning and modern digital education, creating an environment where knowledge flows freely and learning never stops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;


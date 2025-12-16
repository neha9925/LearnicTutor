"use client";

import React from "react";
import { colors, typography } from "@/theme";

const styles = {
  sectionHeading: typography.section.headingLg,
  sectionDescription: typography.section.descriptionLg,
} as const;

const WantToTeachCTA: React.FC = () => {
  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div
          className="text-center text-white mx-auto flex flex-col items-center justify-center"
          style={{
            width: "100%",
            maxWidth: "1400px",
            height: "336px",
            borderRadius: "24px",
            background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
            padding: "24px",
          }}
        >
          <h2 className="mb-6 text-white font-bold" style={styles.sectionHeading}>
            Want to Teach on Learnic?
          </h2>
          <p
            className="mb-10 text-white max-w-2xl mx-auto leading-relaxed"
            style={styles.sectionDescription}
          >
            Join our growing network of passionate educators and share your expertise with learners across the world. Make a difference in students&apos; lives while building your teaching career.
          </p>
          <button
            className="px-8 py-4 rounded-lg font-semibold bg-white text-[#572EEE] hover:bg-gray-50 transition-colors"
            style={{
              ...typography.button.primary,
              color: "#572EEE",
            }}
          >
            Apply as a Tutor
          </button>
        </div>
      </div>
    </section>
  );
};

export default WantToTeachCTA;


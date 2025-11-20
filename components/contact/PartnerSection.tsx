"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { colors, typography } from "@/theme";

const styles = {
  sectionHeading: {
    ...typography.section.headingLg,
    fontSize: "clamp(28px, 4vw, 36px)",
    marginBottom: "16px",
  },
  sectionDescription: {
    ...typography.section.descriptionMd,
    marginBottom: "32px",
  },
} as const;

const PartnerSection: React.FC = () => {
  return (
    <section 
      className="py-12 md:py-16 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 35.36%, #FDF2F8 70.71%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={styles.sectionHeading} className="text-3xl md:text-4xl">
            Looking to Partner with Us?
          </h2>
          <p style={styles.sectionDescription} className="text-base md:text-lg">
            We&apos;re always open to collaborations with educators, institutions, and content creators. Let&apos;s grow together!
          </p>
          <Button
            variant="primary"
            size="lg"
            className="rounded-lg !bg-[#5636FF] hover:!bg-[#4326D6] focus:ring-[#5636FF] px-8 py-4 text-white"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              textAlign: "center",
              boxShadow: "0px 4px 11.9px 0px #572EEE69",
            }}
          >
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;


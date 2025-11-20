"use client";

import React from "react";
import Image from "next/image";
import { TRUSTED_PARTNERS } from "@/data/investors";
import { typography } from "@/theme";

const styles = {
  sectionHeading: {
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    ...typography.section.headingLg,
    marginBottom: "12px",
    color: "#1F2937",
    fontWeight: 700,
    textAlign: "center" as const,
  },
  sectionDescription: {
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    ...typography.section.descriptionMd,
    marginBottom: "48px",
    color: "#6B7280",
    textAlign: "center" as const,
    fontWeight: 400,
  },
} as const;

const TrustedPartnersSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12">
          <h2 style={styles.sectionHeading} className="text-3xl md:text-4xl">
            Trusted by Leading Partners & Investors
          </h2>
          <p style={styles.sectionDescription} className="text-base md:text-lg max-w-2xl mx-auto">
            Backed by world-class organizations and visionary investors
          </p>
        </div>

        {/* Partners Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {TRUSTED_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center h-16 w-auto"
            >
              {partner.logo ? (
                <div className="relative h-full w-auto max-w-[120px]">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={64}
                    className="h-full w-auto object-contain"
                    style={{ filter: "brightness(0)" }}
                  />
                </div>
              ) : (
                <div className="text-gray-700 font-semibold text-lg">
                  {partner.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;


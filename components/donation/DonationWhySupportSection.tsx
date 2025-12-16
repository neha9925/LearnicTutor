"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CardGridContainer from "@/components/ui/CardGridContainer";
import { DONATION_WHY_SUPPORT } from "@/data/donation";
import { colors } from "@/theme";

const DonationWhySupportSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent || LucideIcons.Heart;
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="Why Your Support Matters"
          subtitle="Every sponsorship creates real impact in a student's life"
          bottomMargin="lg"
        />

        <CardGridContainer cols="grid-cols-1 md:grid-cols-3" gap="gap-6 lg:gap-8">
          {DONATION_WHY_SUPPORT.map((feature) => {
            const IconComponent = getIcon(feature.icon);
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "#E9D5FF",
                  }}
                >
                  <IconComponent
                    size={24}
                    style={{
                      color: colors.brand.primarySoft,
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-gray-900 mb-3"
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.4",
                    textAlign: "center",
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    textAlign: "center",
                    color: "#4B5563",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </CardGridContainer>

        {/* Bottom Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <LucideIcons.Sparkles
              size={24}
              style={{
                color: colors.brand.primarySoft,
              }}
            />
            <p
              className="text-sm text-gray-600"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              80G Tax Exemption
            </p>
          </div>
          <div className="flex items-center gap-3">
            <LucideIcons.Shield
              size={24}
              style={{
                color: colors.brand.primarySoft,
              }}
            />
            <p
              className="text-sm text-gray-600"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              100% Transparent Funding
            </p>
          </div>
          <div className="flex items-center gap-3">
            <LucideIcons.Award
              size={24}
              style={{
                color: colors.brand.primarySoft,
              }}
            />
            <p
              className="text-sm text-gray-600"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              Verified NGO Partner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationWhySupportSection;


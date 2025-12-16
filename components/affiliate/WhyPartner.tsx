"use client";

import React from "react";
import { Building2, Globe, TrendingUp, Plug, GraduationCap, Headphones } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { AFFILIATE_FEATURES } from "@/data/affiliate";
import { colors, typography } from "@/theme";

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  globe: Globe,
  "trending-up": TrendingUp,
  plug: Plug,
  "graduation-cap": GraduationCap,
  headset: Headphones,
};

const styles = {
  sectionHeading: {
    ...typography.section.headingLg,
    marginBottom: "12px",
  },
  sectionDescription: {
    ...typography.section.descriptionMd,
    marginBottom: "48px",
  },
  featureTitle: {
    ...typography.card.titleMd,
    color: colors.text.primary,
    marginBottom: "8px",
    fontSize: "18px",
    fontWeight: 700,
  },
  featureDescription: {
    ...typography.card.bodySm,
    color: colors.text.secondary,
    fontSize: "14px",
    lineHeight: "1.5",
  },
  iconSquare: {
    backgroundColor: "#5636FF",
    width: "64px",
    height: "64px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
} as const;

const WhyPartner: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12">
          <h2 style={styles.sectionHeading} className="text-3xl md:text-4xl">
            Why Partner with Learnic?
          </h2>
          <p style={styles.sectionDescription} className="text-base md:text-lg max-w-2xl mx-auto">
            Join a platform that values your contribution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AFFILIATE_FEATURES.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Building2;
            return (
              <Card key={feature.id} className="p-6 hover:shadow-xl transition-shadow">
                <div style={styles.iconSquare} className="mb-4">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 style={styles.featureTitle} className="mb-2">
                  {feature.title}
                </h3>
                <p style={styles.featureDescription}>
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;


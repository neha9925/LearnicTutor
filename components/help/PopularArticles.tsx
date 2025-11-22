"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Play } from "lucide-react";
import { Card } from "@/components/ui/Card";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { LEARNIC_GUIDES } from "@/data/helpCenter";
import { colors, typography } from "@/theme";

const styles = {
  sectionHeading: {
    ...typography.section.headingLg,
    marginBottom: "12px",
  },
  sectionDescription: {
    ...typography.section.descriptionMd,
    marginBottom: "48px",
  },
  guideTitle: {
    ...typography.card.titleMd,
    color: colors.text.primary,
    marginBottom: "8px",
    fontSize: "18px",
    fontWeight: 700,
  },
  guideDescription: {
    ...typography.card.bodySm,
    color: colors.text.secondary,
    marginBottom: "12px",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  duration: {
    ...typography.card.bodySm,
    color: colors.text.tertiary,
    fontSize: "12px",
  },
  illustrationArea: {
    background: "linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)",
    borderRadius: "12px 12px 0 0",
    minHeight: "180px",
    position: "relative" as const,
    overflow: "hidden" as const,
  },
} as const;

const PopularArticles: React.FC = () => {
  return (
    <section 
      className="py-12 md:py-16 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 35.36%, #FDF2F8 70.71%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12">
          <h2 style={styles.sectionHeading} className="text-3xl md:text-4xl">
            Learnic Guides & Tutorials
          </h2>
          <p style={styles.sectionDescription} className="text-base md:text-lg max-w-2xl mx-auto">
            Step-by-step instructions to get the most out of Learnic
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNIC_GUIDES.map((guide) => (
            <Link key={guide.id} href={`/help-center/guide/${guide.id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col p-0">
                {/* Illustration Area */}
                <div style={styles.illustrationArea} className="flex items-center justify-center">
                  {guide.image ? (
                    <ImageWithFallback
                      src={guide.image}
                      alt={guide.title}
                      width={180}
                      height={180}
                      className="w-full h-full"
                      objectFit={guide.image.endsWith('.svg') ? "contain" : "cover"}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/20 rounded-lg"></div>
                    </div>
                  )}
                </div>
                
                {/* Text Content Area */}
                <div className="p-6 flex flex-col flex-1 bg-white">
                  {/* Duration */}
                  <div className="flex items-center gap-2 mb-3">
                    {guide.type === "read" ? (
                      <Clock className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Play className="w-4 h-4 text-gray-400" />
                    )}
                    <span style={styles.duration}>
                      {guide.duration}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 style={styles.guideTitle} className="mb-2">
                    {guide.title}
                  </h3>
                  
                  {/* Description */}
                  <p style={styles.guideDescription} className="mb-4 flex-1">
                    {guide.description}
                  </p>
                  
                  {/* View Guide Link */}
                  <div className="flex items-center gap-1 text-[#5636FF]">
                    <span
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      View Guide
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularArticles;


"use client";

import React from "react";
import { Video, Play, ClipboardCheck } from "lucide-react";
import { colors, typography } from "@/theme";

const styles = {
  sectionHeading: typography.section.headingLg,
  sectionDescription: typography.section.descriptionLg,
  cardTitle: typography.card.titleMd,
  cardDescription: typography.card.bodySm,
} as const;

const features = [
  {
    id: "live-classes",
    icon: Video,
    title: "Live Classes",
    description:
      "Join expert-led interactive sessions and ask questions in real time. Experience the energy of classroom learning from anywhere.",
  },
  {
    id: "recorded-videos",
    icon: Play,
    title: "Recorded Videos",
    description:
      "Learn at your pace with high-quality video lessons available 24/7. Pause, rewind, and master every concept.",
  },
  {
    id: "test-series",
    icon: ClipboardCheck,
    title: "Test Series",
    description:
      "Evaluate your progress with mock tests and smart analytics. Track your improvement and identify areas for growth.",
  },
];

const WhatMakesDifferent: React.FC = () => {
  return (
    <section
      className="pt-12 pb-16 md:pt-16 md:pb-20"
      style={{
        background:
          "linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 35.36%, #FDF2F8 70.71%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-gray-900 mb-4" style={styles.sectionHeading}>
            What Makes Learnic Different
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={styles.sectionDescription}
          >
            Discover our comprehensive learning ecosystem.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-center md:justify-between items-center md:items-start">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white p-6 lg:p-8 transition-shadow w-full md:w-[560px] relative"
                style={{
                  height: "300px",
                  borderRadius: "16px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: colors.background.cardBorder || "rgba(0, 0, 0, 0.1)",
                  opacity: 1,
                  boxShadow: "0px 1px 2px 0px #0000000D",
                }}
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#E9D5FF" }}
                >
                  {feature.id === "recorded-videos" ? (
                    // Play button: light purple square with darker purple circle and white triangle
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#572EEE] flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-0.5"></div>
                      </div>
                    </div>
                  ) : (
                    // Video and Clipboard icons: vibrant purple icons
                    <IconComponent className="w-8 h-8 text-[#572EEE]" />
                  )}
                </div>
                <h3
                  className="text-gray-900 mb-4 font-bold"
                  style={{
                    ...styles.cardTitle,
                    fontSize: "24px",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "18px",
                    lineHeight: "130%",
                    letterSpacing: "0%",
                    width: "323.328125px",
                    height: "104px",
                    position: "absolute",
                    top: "169px",
                    left: "33px",
                    opacity: 1,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;


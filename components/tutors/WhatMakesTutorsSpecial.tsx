"use client";

import React from "react";
import { Settings, Globe, MessageCircle, Puzzle } from "lucide-react";
import { colors, typography, shadows } from "@/theme";

const styles = {
  sectionHeading: typography.section.headingLg,
  sectionDescription: typography.section.descriptionLg,
  featureTitle: typography.card.titleMd,
  featureDescription: typography.card.bodySm,
} as const;

const features = [
  {
    id: "certified-experts",
    icon: Settings,
    title: "Certified Experts",
    description: "All our tutors are certified professionals in their respective fields",
  },
  {
    id: "global-experience",
    icon: Globe,
    title: "Global Experience",
    description: "Tutors from around the world bringing diverse teaching perspectives",
  },
  {
    id: "interactive-methods",
    icon: MessageCircle,
    title: "Interactive Methods",
    description: "Engaging and interactive teaching methods for better learning outcomes",
  },
  {
    id: "personalized-support",
    icon: Puzzle,
    title: "Personalized Support",
    description: "Customized learning plans tailored to each student's unique needs",
  },
];

const WhatMakesTutorsSpecial: React.FC = () => {
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
            What Makes Our Tutors Special
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={styles.sectionDescription}
          >
            Discover the qualities that set our educators apart
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center"
                style={{
                  width: "280px",
                  height: "268px",
                  opacity: 1,
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#572EEE" }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-gray-900 mb-4 font-bold text-center"
                  style={styles.featureTitle}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-center"
                  style={styles.featureDescription}
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

export default WhatMakesTutorsSpecial;


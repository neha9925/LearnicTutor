"use client";

import React from "react";
import { Globe, Lightbulb, Handshake, Coins } from "lucide-react";
import { colors, typography } from "@/theme";

const styles = {
  sectionHeading: typography.section.headingLg,
  sectionDescription: typography.section.descriptionLg,
  featureTitle: typography.card.titleMd,
  featureDescription: typography.card.bodySm,
} as const;

const features = [
  {
    id: "remote-friendly",
    icon: Globe,
    title: "Remote-Friendly Culture",
    description: "Work from anywhere with flexible schedules that fit your lifestyle. We believe in work-life balance and trust our team to deliver results.",
  },
  {
    id: "growth-learning",
    icon: Lightbulb,
    title: "Growth & Learning",
    description: "Continuous professional development opportunities, mentorship programs, and access to the latest tools and technologies.",
  },
  {
    id: "collaborative-team",
    icon: Handshake,
    title: "Collaborative Team",
    description: "Join a diverse, inclusive team of passionate professionals who support each other and celebrate achievements together.",
  },
  {
    id: "competitive-rewards",
    icon: Coins,
    title: "Competitive Rewards",
    description: "Attractive compensation packages, health benefits, and performance-based bonuses that recognize your contributions.",
  },
];

const WhyWorkWithUs: React.FC = () => {
  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-gray-900 mb-4" style={styles.sectionHeading}>
            Why Work With Us
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={styles.sectionDescription}
          >
            Join a team that values growth, innovation, and making a difference
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-center md:justify-between items-center md:items-start flex-nowrap">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col p-6"
                style={{
                  width: "400px",
                  height: "296px",
                  opacity: 1,
                  borderRadius: "16px",
                  boxShadow: "0px 2px 4px 0px #0000001A",
                }}
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#E9D5FF" }}
                >
                  <IconComponent className="w-8 h-8 text-[#572EEE]" />
                </div>
                <h3
                  className="text-gray-900 mb-3 font-bold"
                  style={styles.featureTitle}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
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

export default WhyWorkWithUs;



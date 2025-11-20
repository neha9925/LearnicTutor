"use client";

import React from "react";
import {
  User,
  GraduationCap,
  Globe,
  Award,
  DollarSign,
  Clock,
  Share2,
  Settings,
  Presentation,
} from "lucide-react";
import { colors, typography } from "@/theme";

const styles = {
  sectionHeading: typography.section.headingLg,
  sectionDescription: typography.section.descriptionLg,
  featureTitle: typography.card.titleMd,
  featureDescription: typography.card.bodySm,
} as const;

const features = [
  {
    id: "personalized-learning",
    icon: Share2,
    title: "Personalized Learning Path",
    description:
      "Our AI-powered platform adapts to your learning style and pace, providing a customized educational journey.",
  },
  {
    id: "experienced-tutors",
    icon: Settings,
    title: "Experienced Tutors",
    description:
      "Learn from industry experts with years of teaching experience and a passion for education.",
  },
  {
    id: "multi-language",
    icon: Presentation,
    title: "Multi-Language Courses",
    description:
      "Access courses in multiple languages, breaking down barriers and making learning accessible to everyone.",
  },
  {
    id: "certifications",
    icon: DollarSign,
    title: "Certifications",
    description:
      "Earn recognized certifications upon completion of courses, enhancing your resume and career prospects.",
  },
  {
    id: "affordable-pricing",
    icon: Globe,
    title: "Affordable Pricing",
    description:
      "Quality education shouldn't break the bank. We offer flexible pricing plans to suit every budget.",
  },
  {
    id: "flexible-schedule",
    icon: Clock,
    title: "Flexible Schedule",
    description:
      "Learn anytime, anywhere, with 24/7 access to our platform and a variety of course timings.",
  },
];

const WhyChooseSection: React.FC = () => {
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
            Why Choose Learnic
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={styles.sectionDescription}
          >
            Experience the world&apos;s largest education platform with Learnic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="rounded-xl p-6 hover:shadow-lg transition-shadow flex gap-4 items-start"
                style={{
                  background: "transparent",
                }}
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#E9D5FF" }}
                >
                  <IconComponent className="w-8 h-8 text-[#572EEE]" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-gray-900 mb-2 font-bold text-left"
                    style={styles.featureTitle}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed text-left"
                    style={styles.featureDescription}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;


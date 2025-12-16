"use client";

import React from "react";
import {
  Target,
  GraduationCap,
  Globe,
  Award,
  DollarSign,
  Clock,
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
    icon: Target,
    title: "Personalized Learning Path",
    description: "Customized curriculum based on your goals and learning style",
  },
  {
    id: "experienced-tutors",
    icon: GraduationCap,
    title: "Experienced Tutors",
    description: "Learn from industry experts with years of teaching experience",
  },
  {
    id: "multi-language",
    icon: Globe,
    title: "Multi-language Courses",
    description: "Access content in multiple languages for better understanding",
  },
  {
    id: "certifications",
    icon: Award,
    title: "Certification",
    description: "Earn recognized certificates upon successful course completion",
  },
  {
    id: "affordable-pricing",
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Quality education at prices that won't break the bank",
  },
  {
    id: "flexible-schedule",
    icon: Clock,
    title: "Flexible Schedule",
    description: "Learn at your own pace with flexible timing options",
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
            Experience the advantages of modern digital learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col"
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: colors.brand.primarySofter }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
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

export default WhyChooseSection;


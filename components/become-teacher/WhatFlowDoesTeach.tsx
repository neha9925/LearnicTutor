"use client";

import React from "react";
import { Book, GraduationCap, Beaker, Globe, Music } from "lucide-react";
import { typography } from "@/theme";

const styles = {
  sectionHeading: typography.section.headingLg,
  sectionDescription: typography.section.descriptionLg,
  statNumber: {
    ...typography.hero.statValue,
    color: "#1F2937",
  },
  statLabel: {
    ...typography.card.bodyMd,
    color: "#374151",
    fontWeight: 500,
  },
} as const;

const stats = [
  {
    icon: Book,
    number: "25+",
    label: "Subjects",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: GraduationCap,
    number: "100+",
    label: "Students",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Beaker,
    number: "50+",
    label: "Courses",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Globe,
    number: "10+",
    label: "Countries",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Music,
    number: "5+",
    label: "Languages",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];

const WhatFlowDoesTeach: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-gray-800 mb-4" style={styles.sectionHeading}>
            What Flow Does Teach
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={styles.sectionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`${stat.bgColor} rounded-lg p-6 text-center hover:shadow-lg transition-shadow`}
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className={`w-8 h-8 ${stat.iconColor}`} />
                </div>
                <div className="mb-2" style={styles.statNumber}>
                  {stat.number}
                </div>
                <div style={styles.statLabel}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatFlowDoesTeach;


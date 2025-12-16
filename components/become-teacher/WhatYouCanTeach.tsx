"use client";

import React from "react";
import { Book, Trophy, Lightbulb, Code, Languages, Baby } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";


const categories = [
  {
    icon: Book,
    title: "Academic",
    subtitle: "Class 6-12",
    bgColor: "#EBF0FF",
    iconColor: "#572EEE",
  },
  {
    icon: Trophy,
    title: "Competitive",
    subtitle: "Exams",
    bgColor: "#E6FFF0",
    iconColor: "#4CAF50",
  },
  {
    icon: Lightbulb,
    title: "Skills &",
    subtitle: "Development",
    bgColor: "#F5E6FF",
    iconColor: "#9C27B0",
  },
  {
    icon: Code,
    title: "Coding &",
    subtitle: "Technology",
    bgColor: "#FFEBEE",
    iconColor: "#F44336",
  },
  {
    icon: Languages,
    title: "Languages",
    subtitle: "All levels",
    bgColor: "#FFFDE7",
    iconColor: "#FFC107",
  },
  {
    icon: Baby,
    title: "Kids",
    subtitle: "Learning",
    bgColor: "#FFF0F5",
    iconColor: "#E91E63",
  },
];

const WhatYouCanTeach: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="What You Can Teach"
          subtitle="Choose from various categories that match your expertise"
          variant="default"
          bottomMargin="lg"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => {
            return (
              <FeatureCard
                key={index}
                variant="colored"
                icon={category.icon}
                iconShape="none"
                iconColor={category.iconColor}
                iconSize={32}
                backgroundColor={category.bgColor}
                title={category.title}
                subtitle={category.subtitle}
                textAlign="center"
                cardClassName="hover:shadow-lg transition-shadow"
                titleStyle={{
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanTeach;


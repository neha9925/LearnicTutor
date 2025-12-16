"use client";

import React from "react";
import { Star, DollarSign, Clock, Globe, Wrench, Headphones } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CardGridContainer from "@/components/ui/CardGridContainer";


const features = [
  {
    icon: DollarSign,
    title: "Earn on Your Skills",
    description: "High payouts with monthly earning reports and transparent revenue sharing",
  },
  {
    icon: Globe,
    title: "Teach Anywhere",
    description: "Web and mobile teaching platform accessible from anywhere in the world",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Create your own timing and teach at your convenience",
  },
  {
    icon: Wrench,
    title: "Smart Tools",
    description: "Video hosting, quizzes, student management, and analytics tools",
  },
  {
    icon: Star,
    title: "Grow Your Brand",
    description: "Become a recognized educator and build your personal brand",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "24/7 tutor assistance and dedicated support team",
  },
];

const WhyTeachSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="Why Teach on Learnic?"
          subtitle="Discover the benefits of joining our teaching community"
          variant="default"
          bottomMargin="lg"
        />

        <CardGridContainer>
          {features.map((feature, index) => {
            return (
              <FeatureCard
                key={index}
                variant="default"
                icon={feature.icon}
                iconShape="circle"
                iconBgColor="#E9D5FF"
                iconColor="#572EEE"
                iconSize={24}
                title={feature.title}
                description={feature.description}
                textAlign="left"
              />
            );
          })}
        </CardGridContainer>
      </div>
    </section>
  );
};

export default WhyTeachSection;


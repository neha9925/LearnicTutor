"use client";

import React from "react";
import { Search, MessageCircle, UserCheck, FileText } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CardGridContainer from "@/components/ui/CardGridContainer";


const features = [
  {
    icon: Search,
    title: "Find Interested",
    titleLine2: "Students",
  },
  {
    icon: MessageCircle,
    title: "Share Course",
    titleLine2: "Details & Benefits",
  },
  {
    icon: UserCheck,
    title: "Help Students Sign",
    titleLine2: "Up",
  },
  {
    icon: FileText,
    title: "Track Your",
    titleLine2: "Earnings",
  },
];

const WhatCoordinatorsDo: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="What Coordinators Do"
          subtitle="Simple tasks that lead to great earnings."
          variant="default"
          bottomMargin="lg"
        />

        <CardGridContainer cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            return (
              <FeatureCard
                key={index}
                variant="default"
                icon={feature.icon}
                iconShape="square"
                iconBgColor="#572EEE"
                iconColor="#FFFFFF"
                iconSize={24}
                title={feature.title}
                titleLine2={feature.titleLine2}
                textAlign="center"
                cardClassName="text-center"
              />
            );
          })}
        </CardGridContainer>
      </div>
    </section>
  );
};

export default WhatCoordinatorsDo;


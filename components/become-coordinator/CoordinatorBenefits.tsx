"use client";

import React from "react";
import { Coins, HandCoins, MapPin, TrendingUp, Clock, Headphones } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CardGridContainer from "@/components/ui/CardGridContainer";


const features = [
  {
    icon: Coins,
    title: "Earn Commission on Every Enrollment",
    description: "Get paid for every student you successfully refer to our platform",
  },
  {
    icon: HandCoins,
    title: "No Investment Required",
    description: "Start earning without any upfront costs or fees",
  },
  {
    icon: MapPin,
    title: "Work From Anywhere",
    description: "Flexible work schedule and location independence",
  },
  {
    icon: TrendingUp,
    title: "Track Students & Earnings Easily",
    description: "Real-time dashboard to monitor your progress and earnings",
  },
  {
    icon: Clock,
    title: "Fast Weekly Payouts",
    description: "Get your earnings transferred every week without delays",
  },
  {
    icon: Headphones,
    title: "Dedicated Coordinator Support",
    description: "24/7 support team to help you succeed in your journey",
  },
];

const CoordinatorBenefits: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="Coordinator Benefits"
          subtitle="Unlock your earning potential with these amazing benefits."
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
                iconShape="square"
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

export default CoordinatorBenefits;


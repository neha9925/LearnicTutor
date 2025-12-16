"use client";

import React from "react";
import { UserPlus, Shield, Share2, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProcessSteps, { ProcessStep } from "@/components/ui/ProcessSteps";

const steps: ProcessStep[] = [
  {
    number: 1,
    icon: UserPlus,
    title: "Register Your Account",
    description: "Fill your details & choose \"Coordinator\"",
  },
  {
    number: 2,
    icon: Shield,
    title: "Verification",
    description: "Learnic verifies your profile & activates your dashboard",
  },
  {
    number: 3,
    icon: Share2,
    title: "Share Learnic Courses",
    description: "Invite students using your unique referral link",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Earn Commission",
    description: "Earn money every time a student enrolls for classes",
  },
];

const HowToBecomeCoordinator: React.FC = () => {
  return (
    <section 
      className="py-12 md:py-16 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 35.36%, #FDF2F8 70.71%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="How to Become a Coordinator"
          subtitle="Simple 4-step process to start your journey"
          variant="default"
          bottomMargin="lg"
        />

        <ProcessSteps
          steps={steps}
          variant="coordinator"
          lineColor="#D1D5DB"
          linePosition={32}
        />
      </div>
    </section>
  );
};

export default HowToBecomeCoordinator;


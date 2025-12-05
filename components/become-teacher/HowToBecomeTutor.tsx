"use client";

import React from "react";
import { UserPlus, Video, Check, Rocket } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProcessSteps, { ProcessStep } from "@/components/ui/ProcessSteps";

const steps: ProcessStep[] = [
  {
    number: 1,
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Upload your details, education, and expertise to get started.",
  },
  {
    number: 2,
    icon: Video,
    title: "Submit Demo Class",
    description: "Upload a sample lecture video or live demonstration.",
  },
  {
    number: 3,
    icon: Check,
    title: "Verification",
    description: "Our team reviews your submission and approves your profile.",
  },
  {
    number: 4,
    icon: Rocket,
    title: "Start Teaching",
    description: "Upload courses, take live classes, and earn continuously.",
  },
];

const HowToBecomeTutor: React.FC = () => {
  return (
    <section 
      className="py-12 md:py-16 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 35.36%, #FDF2F8 70.71%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="How to Become a Tutor"
          subtitle="Simple 4-step process to start your teaching journey"
          variant="default"
          bottomMargin="lg"
        />

        <ProcessSteps
          steps={steps}
          variant="tutor"
          lineColor="#E9D5FF"
          linePosition={104}
        />
      </div>
    </section>
  );
};

export default HowToBecomeTutor;


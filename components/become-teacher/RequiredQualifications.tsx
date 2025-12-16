"use client";

import React from "react";
import { Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import IconContainer from "@/components/ui/IconContainer";
import { typography } from "@/theme";

const styles = {
  qualificationTitle: {
    ...typography.card.titleMd,
    fontWeight: 700,
  },
  qualificationDescription: typography.card.bodySm,
} as const;

const qualifications = [
  {
    title: "Minimum Education Requirement",
    description: "Bachelor's degree or equivalent qualification in your subject area.",
  },
  {
    title: "Subject Expertise",
    description: "In-depth knowledge and teaching experience in your chosen subject.",
  },
  {
    title: "Basic Technical Setup",
    description: "Working camera, microphone, and stable internet connection.",
  },
  {
    title: "Good Presentation Skills",
    description: "Strong communication and presentation abilities to engage students.",
  },
  {
    title: "Live Class Capability",
    description: "Ability to record quality videos or conduct engaging live classes.",
  },
];

const RequiredQualifications: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="Required Qualifications"
          subtitle="Make sure you meet these criteria before applying"
          variant="default"
          bottomMargin="lg"
        />

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <IconContainer
                    size="xs"
                    shape="circle"
                    backgroundColor="#572EEE"
                    icon={Check}
                    iconColor="#FFFFFF"
                    iconSize={16}
                  />
                </div>
                <div>
                  <h3 className="text-gray-800 mb-2" style={styles.qualificationTitle}>
                    {qualification.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={styles.qualificationDescription}>
                    {qualification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequiredQualifications;


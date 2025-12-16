"use client";

import React from "react";
import { UserPlus, Megaphone, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { colors, typography } from "@/theme";

const styles = {
  sectionHeading: {
    ...typography.section.headingLg,
    marginBottom: "12px",
  },
  sectionDescription: {
    ...typography.section.descriptionMd,
    marginBottom: "48px",
  },
  stepTitle: {
    ...typography.card.titleMd,
    color: colors.text.primary,
    marginBottom: "12px",
    fontSize: "18px",
    fontWeight: 700,
  },
  stepDescription: {
    ...typography.card.bodyMd,
    color: colors.text.secondary,
    fontSize: "14px",
    lineHeight: "1.5",
  },
  iconCircle: {
    backgroundColor: "#5636FF",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stepBadge: {
    backgroundColor: "#5636FF",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "16px",
    fontWeight: 700,
    margin: "12px auto",
  },
  card: {
    background: "linear-gradient(135deg, #F3E8FF 0%, #FFFFFF 100%)",
    borderRadius: "16px",
  },
} as const;

const steps = [
  {
    id: 1,
    title: "Register",
    description: "Sign up for free and get your unique referral link instantly.",
    icon: UserPlus,
  },
  {
    id: 2,
    title: "Promote",
    description: "Share Learnic courses, live classes, or test series with your audience.",
    icon: Megaphone,
  },
  {
    id: 3,
    title: "Earn",
    description: "Get commission for every successful purchase made via your link.",
    icon: DollarSign,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12">
          <h2 style={styles.sectionHeading} className="text-3xl md:text-4xl">
            How the Affiliate Program Works
          </h2>
          <p style={styles.sectionDescription} className="text-base md:text-lg max-w-2xl mx-auto">
            Start earning in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={step.id} 
                className="p-8 text-center hover:shadow-xl transition-shadow"
                style={styles.card}
              >
                {/* Large Icon Circle */}
                <div style={styles.iconCircle} className="mx-auto mb-0">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                {/* Step Number Badge */}
                <div style={styles.stepBadge}>
                  {step.id}
                </div>
                
                {/* Title */}
                <h3 style={styles.stepTitle} className="mb-3">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p style={styles.stepDescription}>
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


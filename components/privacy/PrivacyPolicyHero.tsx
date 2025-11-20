"use client";

import React from "react";
import { Shield } from "lucide-react";
import { colors, typography } from "@/theme";

const styles = {
  heroContainer: {
    background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
  },
  title: {
    ...typography.hero.heading,
    color: colors.text.light,
    fontSize: "clamp(32px, 5vw, 48px)",
  },
  subtitle: {
    ...typography.hero.description,
    color: colors.text.light,
    opacity: 0.95,
  },
  lastUpdated: {
    ...typography.card.bodySm,
    color: colors.text.light,
    opacity: 0.8,
  },
} as const;

const PrivacyPolicyHero: React.FC = () => {
  return (
    <section style={styles.heroContainer} className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-[#5636FF]" />
          </div>
          <h1 style={styles.title} className="mb-6">
            Privacy Policy
          </h1>
          <p style={styles.subtitle} className="text-lg md:text-xl mb-4">
            Your trust matters to us. Here&apos;s how Learnic protects and uses your information.
          </p>
          <p style={styles.lastUpdated} className="text-sm">
            Last updated: October 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyHero;


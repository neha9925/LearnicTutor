"use client";

import React from "react";
import { Handshake } from "lucide-react";
import Button from "@/components/ui/Button";
import { colors, typography } from "@/theme";

const styles = {
  ctaContainer: {
    background: `linear-gradient(135deg, ${colors.brand.primarySofter} 0%, ${colors.brand.primarySoft} 100%)`,
  },
  heading: {
    ...typography.hero.heading,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: colors.text.light,
    fontSize: "clamp(32px, 5vw, 48px)",
    fontWeight: 700,
  },
  description: {
    ...typography.hero.description,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: colors.text.light,
    opacity: 0.95,
    fontWeight: 400,
  },
} as const;

const InvestorsCTA: React.FC = () => {
  return (
    <section style={styles.ctaContainer} className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={styles.heading} className="mb-6">
            Be Part of Learnic&apos;s Growth Journey
          </h2>
          <p style={styles.description} className="mb-8">
            Let&apos;s build the future of learning together and make quality education accessible to millions worldwide.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="rounded-lg !bg-white hover:!bg-gray-100 !text-[#5636FF] focus:ring-white/50 flex items-center justify-center gap-2 px-8 py-4 mx-auto border-2 border-[#5636FF]"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            <Handshake className="w-5 h-5" />
            Become an Investor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestorsCTA;


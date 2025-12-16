"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { colors, typography } from "@/theme";

const styles = {
  heroContainer: {
    background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
  },
  title: {
    ...typography.hero.heading,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: colors.text.light,
    fontSize: "clamp(32px, 5vw, 48px)",
    fontWeight: 700,
  },
  subtitle: {
    ...typography.hero.description,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: colors.text.light,
    opacity: 0.95,
    fontWeight: 400,
  },
} as const;

const AffiliateHero: React.FC = () => {
  return (
    <section style={styles.heroContainer} className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Panel - Content */}
          <div className="text-center lg:text-left">
            <h1 style={styles.title} className="mb-6">
              Join the Learnic Affiliate Program
            </h1>
            <p style={styles.subtitle} className="text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Earn rewards for every learner you bring to the platform.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="rounded-lg !bg-white hover:!bg-gray-100 !text-black focus:ring-white/50 flex items-center justify-center gap-2 px-8 py-4 mx-auto lg:mx-0"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                boxShadow: "0px 4px 6px 0px #0000001A",
              }}
            >
              Become an Affiliate
              <ArrowRight className="w-5 h-5 text-black" />
            </Button>
          </div>

          {/* Right Panel - Illustration */}
          <div className="hidden lg:block">
            <div 
              className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden p-8 shadow-2xl"
              
            >
              <Image
                src="/images/banners/Affiliate1.svg"
                alt="Affiliate Program"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateHero;


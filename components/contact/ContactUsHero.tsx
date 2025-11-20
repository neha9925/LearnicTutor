"use client";

import React from "react";
import Image from "next/image";
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
  description: {
    ...typography.hero.description,
    color: colors.text.light,
    opacity: 0.95,
  },
} as const;

const ContactUsHero: React.FC = () => {
  return (
    <section style={styles.heroContainer} className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Panel - Content */}
          <div className="text-center lg:text-left">
            <h1 style={styles.title} className="mb-6">
              We&apos;d Love to Hear From You!
            </h1>
            <p style={styles.description} className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              Whether you have a question, feedback, or partnership idea, we&apos;re here to listen.
            </p>
          </div>

          {/* Right Panel - Illustration */}
          <div className="hidden lg:block">
            <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden bg-white p-8 shadow-2xl">
              <Image
                src="/images/banners/contact1.svg"
                alt="Customer Support"
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

export default ContactUsHero;


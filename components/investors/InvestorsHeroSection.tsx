"use client";

import React from "react";
import Image from "next/image";
import { Download, Play } from "lucide-react";
import Button from "@/components/ui/Button";
import { colors, typography } from "@/theme";

const styles = {
  heroContainer: {
    background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
  },
  title: {
    ...typography.hero.heading,
    color: colors.text.light,
    fontSize: "clamp(32px, 5vw, 56px)",
  },
  description: {
    ...typography.hero.description,
    color: colors.text.light,
    opacity: 0.95,
  },
} as const;

const InvestorsHeroSection: React.FC = () => {
  return (
    <section style={styles.heroContainer} className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Panel - Content */}
          <div className="text-center lg:text-left">
            <h1 style={styles.title} className="mb-6">
              Invest in the Future of Education with Learnic
            </h1>
            <p style={styles.description} className="mb-8 max-w-xl mx-auto lg:mx-0">
              Join us in revolutionizing online learning and empowering millions of students worldwide through innovative educational technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                className="rounded-lg !bg-white hover:!bg-gray-100 !text-[#5636FF] focus:ring-white/50 flex items-center justify-center gap-2 px-6 py-4"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  boxShadow: "0px 4px 6px 0px #0000001A",
                }}
              >
                <Download className="w-5 h-5" />
                Download Learnic App
              </Button>
              <Button
                variant="primary"
                size="lg"
                className="rounded-lg !bg-transparent hover:!bg-transparent focus:ring-[#5636FF] flex items-center justify-center gap-2 px-6 py-4 border-2 border-white"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  boxShadow: "0px 4px 6px 0px #0000001A",
                }}
              >
                <Play className="w-5 h-5" />
                Explore Our Tools
              </Button>
            </div>
          </div>

          {/* Right Panel - Image */}
          <div className="hidden lg:block relative w-full h-80 lg:h-96">
            <Image
              src="/images/banners/Investors.svg"
              alt="Investors"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsHeroSection;


"use client";

import React from "react";
import Image from "next/image";
import { typography, FONT_FAMILY } from "@/theme";

const DonationHeroSection: React.FC = () => {
  return (
    <section
      className="pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32"
      style={{
        background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{
                fontFamily: FONT_FAMILY,
                lineHeight: "1.2",
              }}
            >
              Sponsor a Class. Support India&apos;s Future.
            </h1>
            <p
              className="text-lg md:text-xl text-white/90 max-w-xl"
              style={{
                fontFamily: FONT_FAMILY,
                lineHeight: "1.6",
              }}
            >
              Help students from Class 6–12 access top-quality learning in
              Mathematics, Science, English & more.
            </p>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/images/banners/donation1.svg"
                alt="Students learning"
                width={600}
                height={500}
                className="w-full h-auto"
                style={{
                  objectFit: "contain",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationHeroSection;


"use client";

import React from "react";
import { Shield } from "lucide-react";

const TermsHero: React.FC = () => {
  return (
    <section 
      className="py-16 md:py-20 lg:py-24"
      style={{
        background: 'linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)',
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Shield Icon */}
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-[#572EEE]" />
          </div>
          
          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Terms & Conditions
          </h1>
          
          {/* Descriptive Text */}
          <p 
            className="text-lg md:text-xl text-white mb-4"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Please read these terms carefully before using Learnic.
          </p>
          
          {/* Last Updated */}
          <p 
            className="text-sm md:text-base text-white opacity-90"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Last updated: October 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsHero;


"use client";

import React from "react";
import Link from "next/link";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { typography } from "@/theme";

const CtaBanner: React.FC = () => {
  return (
    <section className="pt-0 pb-12 md:pb-16 bg-white">
      <div className="mx-auto w-full px-4 sm:px-10 lg:px-16 xl:px-24 2xl:px-28">
        
        <div className="relative overflow-hidden rounded-3xl shadow-lg min-h-[320px] md:min-h-[420px] bg-[#6B47ED] p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          
          <div className="w-full max-w-xl relative z-10 text-center md:text-left">
            <h2
              className="text-white mb-4"
              style={{
                ...typography.section.headingLg,
                color: "#FFFFFF",
                textAlign: "inherit",
              }}
            >
              Start Your Learning Journey Today!
            </h2>
            <p
              className="text-white mb-8"
              style={{
                ...typography.section.descriptionLg,
                color: "rgba(255,255,255,0.85)",
                textAlign: "inherit",
              }}
            >
              Join thousands of learners mastering new skills and subjects every day.
            </p>
            <Link
              href="/signup"
              className="inline-flex bg-white text-[#6B47ED] shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto rounded-[12px] items-center justify-center mx-auto md:mx-0 px-8 py-4 font-semibold text-base"
              style={{
                ...typography.button.primary,
                color: "#6B47ED",
                textAlign: "center",
              }}
            >
              Join Learnic Now
            </Link>
          </div>

          
          <div className="absolute top-0 right-0 h-full w-[50%] z-0 hidden md:block">
            <ImageWithFallback
              src="/images/banners/Banner3.png"
              alt="Learning Journey"
              width={800}
              height={400}
              className="w-full h-full object-contain"
              style={{
                objectPosition: 'right center',
              }}
              fallback={
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                  <span className="text-white text-2xl">Banner3</span>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;

"use client";

import React from "react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        
        <div className="relative overflow-hidden rounded-3xl shadow-lg min-h-[420px] bg-[#6B47ED] p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          
          <div className="w-full max-w-xl relative z-10 text-center md:text-left">
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                fontWeight: 700,
                fontSize: '36px',
                lineHeight: '40px',
                letterSpacing: '0%',
              }}
            >
              Start Your Learning Journey Today!
            </h2>
            <p
              className="text-white mb-8"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '28px',
                letterSpacing: '0%',
              }}
            >
              Join thousands of learners mastering new skills and subjects every day.
            </p>
            <button
              className="inline-flex bg-white text-[#6B47ED] shadow-md hover:shadow-lg transition-shadow w-full sm:w-[198.265625px] h-[60px] rounded-[12px] items-center justify-center mx-auto md:mx-0"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
              }}
            >
              Join Learnic Now
            </button>
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

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import { colors, typography } from "@/theme";

const styles = {
  heroContainer: {
    background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
  },
  title: {
    ...typography.hero.heading,
    color: colors.text.light,
    fontSize: "clamp(32px, 5vw, 48px)",
    fontWeight: 700,
  },
  description: {
    ...typography.hero.description,
    color: colors.text.light,
    opacity: 0.95,
    fontSize: "18px",
    lineHeight: "1.6",
  },
  illustrationPanel: {
    backgroundColor: colors.neutral.white,
    border: `1px solid ${colors.brand.primarySoft}`,
    borderRadius: "24px",
  },
} as const;

const HelpCenterHero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <section style={styles.heroContainer} className="py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-center">
          {/* Left Section: Text and Search (2/3 width) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h1 style={styles.title} className="mb-2">
              We&apos;re Here to Help You
            </h1>
            <p style={styles.description} className="mb-4">
              Find answers, explore guides, or contact our support team — all in one place.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-2xl">
              <TextField
                fullWidth
                placeholder="Search blogs, topics, or tutors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "4px",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "2px solid rgba(255, 255, 255, 0.5)",
                    },
                    "& input": {
                      padding: "12px 16px",
                      fontSize: "16px",
                      color: colors.text.secondary,
                      "&::placeholder": {
                        color: "#9CA3AF",
                        opacity: 1,
                      },
                    },
                  },
                }}
              />
            </form>
          </div>

          {/* Right Section: Illustration Panel (1/3 width) */}
          <div className="lg:col-span-1">
            <div 
              style={styles.illustrationPanel}
              className="relative w-full h-64 md:h-80 lg:h-96 p-6 md:p-8 lg:p-10 overflow-hidden"
            >
              <Image
                  src="/images/banners/Helpcenter1.svg"
                  alt="Support agents illustration"
                  fill
                  className="object-contain"
                  priority
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenterHero;


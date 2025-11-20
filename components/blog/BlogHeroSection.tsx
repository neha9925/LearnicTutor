"use client";

import React, { useState } from "react";
import Image from "next/image";
import { colors, typography } from "@/theme";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#FFFFFF",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiInputBase-input": {
    padding: "16px 14px",
    color: "#374151",
    "&::placeholder": {
      color: "#9CA3AF",
      opacity: 1,
    },
  },
  "& .MuiInputAdornment-root": {
    color: "#9CA3AF",
  },
});

const styles = {
  heroContainer: {
    background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
  },
  title: {
    ...typography.hero.heading,
    color: "#FFFFFF",
  },
  description: {
    ...typography.hero.description,
    color: "#FFFFFF",
  },
} as const;

const BlogHeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section style={styles.heroContainer} className="py-12 md:py-20 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Panel - Content */}
          <div className="text-center lg:text-left">
            <h1 style={styles.title} className="mb-6">
              Explore Learnic Insights
            </h1>
            <p style={styles.description} className="mb-8 max-w-xl mx-auto lg:mx-0">
              Read expert articles, tips, and updates on live learning, recorded courses, and test strategies to help you grow smarter every day.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto lg:mx-0">
              <StyledTextField
                fullWidth
                placeholder="Search blogs, topics, or tutors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                variant="outlined"
                sx={{
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              />
            </div>
          </div>

          {/* Right Panel - Illustration */}
          <div className="hidden lg:block relative w-full h-80 lg:h-96">
            <Image
              src="/images/banners/careers1.svg"
              alt="Explore Learnic Insights"
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

export default BlogHeroSection;


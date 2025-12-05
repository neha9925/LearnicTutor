"use client";

import React from "react";
import { typography } from "@/theme";

export type SectionHeaderVariant = "default" | "light" | "dark";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  variant?: SectionHeaderVariant;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
  // Custom styling overrides
  titleStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
  // Bottom margin variants
  bottomMargin?: "sm" | "md" | "lg" | "xl";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  variant = "default",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  containerClassName = "",
  titleStyle = {},
  subtitleStyle = {},
  bottomMargin = "md",
}) => {
  // Base container styles
  const baseContainerClass = "text-center";
  
  // Bottom margin classes
  const marginClasses: Record<NonNullable<SectionHeaderProps["bottomMargin"]>, string> = {
    sm: "mb-8",
    md: "mb-12",
    lg: "mb-12 md:mb-16",
    xl: "mb-16 md:mb-20",
  };

  // Variant-specific styles
  const variantStyles = {
    default: {
      title: {
        color: "#1F2937", // text-gray-800
        ...typography.section.headingLg,
      },
      subtitle: {
        color: "#4B5563", // text-gray-600
        ...typography.section.descriptionLg,
      },
    },
    light: {
      title: {
        color: "#111827", // text-gray-900
        ...typography.section.headingLg,
      },
      subtitle: {
        color: "#4B5563", // text-gray-600
        ...typography.section.descriptionLg,
      },
    },
    dark: {
      title: {
        color: "#FFFFFF", // text-white
        ...typography.section.headingLg,
      },
      subtitle: {
        color: "rgba(255, 255, 255, 0.9)", // text-white/90
        ...typography.section.descriptionLg,
      },
    },
  };

  const currentVariant = variantStyles[variant];

  // Title classes
  const titleClasses = `mb-4 ${titleClassName}`;
  
  // Subtitle classes
  const subtitleClasses = `max-w-2xl mx-auto ${subtitleClassName}`;

  // Combined container class
  const containerClasses = `${baseContainerClass} ${marginClasses[bottomMargin]} ${containerClassName}`.trim();

  return (
    <div className={containerClasses}>
      <h2
        className={titleClasses}
        style={{
          ...currentVariant.title,
          ...titleStyle,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={subtitleClasses}
          style={{
            ...currentVariant.subtitle,
            ...subtitleStyle,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;


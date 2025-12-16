"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { typography, FONT_FAMILY } from "@/theme";

export type FeatureCardVariant = 
  | "default"      // White card with shadow (WhyTeach, CoordinatorBenefits)
  | "colored"      // Colored background (WhatYouCanTeach)
  | "bordered"     // White card with border (EarningsStructure)
  | "minimal";     // Simple layout (RequiredQualifications)

export type IconShape = "circle" | "square" | "none";

export interface FeatureCardProps {
  // Content
  title: string;
  titleLine2?: string; // For two-line titles (WhatCoordinatorsDo)
  description?: string;
  subtitle?: string; // For WhatYouCanTeach style
  value?: string; // For EarningsStructure
  
  // Icon
  icon?: LucideIcon;
  iconShape?: IconShape;
  iconBgColor?: string;
  iconColor?: string;
  iconSize?: number;
  
  // Styling
  variant?: FeatureCardVariant;
  backgroundColor?: string;
  borderColor?: string;
  className?: string;
  cardClassName?: string;
  
  // Layout
  textAlign?: "left" | "center";
  
  // Custom styles
  titleStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  titleLine2,
  description,
  subtitle,
  value,
  icon: Icon,
  iconShape = "circle",
  iconBgColor = "#E9D5FF", // Default purple-100
  iconColor = "#572EEE", // Default purple
  iconSize = 24,
  variant = "default",
  backgroundColor,
  borderColor,
  className = "",
  cardClassName = "",
  textAlign = "left",
  titleStyle = {},
  descriptionStyle = {},
  valueStyle = {},
}) => {
  // Base card styles
  const baseCardStyles: React.CSSProperties = {
    fontFamily: FONT_FAMILY,
  };

  // Variant-specific styles
  const variantStyles: Record<FeatureCardVariant, React.CSSProperties> = {
    default: {
      backgroundColor: backgroundColor || "#FFFFFF",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
      padding: "24px",
    },
    colored: {
      backgroundColor: backgroundColor || "#EBF0FF",
      borderRadius: "8px",
      padding: "24px",
    },
    bordered: {
      backgroundColor: backgroundColor || "#FFFFFF",
      borderRadius: "8px",
      border: `1px solid ${borderColor || "#572EEE"}`,
      padding: "24px",
    },
    minimal: {
      backgroundColor: "transparent",
    },
  };

  // Icon container styles
  const getIconContainerClass = () => {
    if (iconShape === "circle") return "rounded-full";
    if (iconShape === "square") return "rounded-lg";
    return "";
  };

  const getIconContainerStyle = (): React.CSSProperties => {
    if (iconShape === "none" || !Icon) return {};
    
    return {
      width: "48px",
      height: "48px",
      backgroundColor: iconBgColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px",
      marginLeft: textAlign === "center" ? "auto" : "0",
      marginRight: textAlign === "center" ? "auto" : "0",
    };
  };

  // Title styles
  const defaultTitleStyle: React.CSSProperties = {
    ...typography.card.titleMd,
    color: "#1F2937",
    marginBottom: description || subtitle ? "12px" : "0",
    textAlign: textAlign as "left" | "center",
  };

  // Description styles
  const defaultDescriptionStyle: React.CSSProperties = {
    ...typography.card.bodySm,
    color: "#4B5563",
    lineHeight: "1.625",
    textAlign: textAlign as "left" | "center",
  };

  // Subtitle styles (for WhatYouCanTeach)
  const defaultSubtitleStyle: React.CSSProperties = {
    ...typography.card.bodySm,
    color: "#6B7280",
    textAlign: "center" as const,
  };

  // Value styles (for EarningsStructure)
  const defaultValueStyle: React.CSSProperties = {
    ...typography.hero.heading,
    color: "#572EEE",
    fontSize: "48px",
    fontWeight: 700,
    marginBottom: "12px",
    textAlign: "center" as const,
  };

  const cardStyles: React.CSSProperties = {
    ...baseCardStyles,
    ...variantStyles[variant],
  };

  const iconContainerClass = getIconContainerClass();
  const iconContainerStyle = getIconContainerStyle();

  return (
    <div
      className={`${variant === "default" ? "hover:shadow-lg transition-shadow" : ""} ${cardClassName} ${className}`}
      style={cardStyles}
    >
      {/* Icon */}
      {Icon && iconShape !== "none" && (
        <div
          className={iconContainerClass}
          style={iconContainerStyle}
        >
          <Icon
            size={iconSize}
            style={{ color: iconColor }}
          />
        </div>
      )}

      {/* Icon without container (WhatYouCanTeach style) */}
      {Icon && iconShape === "none" && (
        <div className="flex justify-center mb-4">
          <Icon
            size={32}
            style={{ color: iconColor }}
          />
        </div>
      )}

      {/* Value (EarningsStructure) */}
      {value && (
        <div style={{ ...defaultValueStyle, ...valueStyle }}>
          {value}
        </div>
      )}

      {/* Title */}
      <h3
        style={{
          ...defaultTitleStyle,
          ...titleStyle,
        }}
      >
        {title}
      </h3>

      {/* Title Line 2 (WhatCoordinatorsDo) */}
      {titleLine2 && (
        <h3
          style={{
            ...defaultTitleStyle,
            marginTop: "0",
            marginBottom: "0",
            ...titleStyle,
          }}
        >
          {titleLine2}
        </h3>
      )}

      {/* Subtitle (WhatYouCanTeach) */}
      {subtitle && (
        <p style={defaultSubtitleStyle}>
          {subtitle}
        </p>
      )}

      {/* Description */}
      {description && (
        <p
          style={{
            ...defaultDescriptionStyle,
            ...descriptionStyle,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default FeatureCard;


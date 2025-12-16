"use client";

import React from "react";
import { typography, colors, gradients, FONT_FAMILY } from "@/theme";

export type CategoryChipVariant = "default" | "tab";

export interface CategoryChipProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  variant?: CategoryChipVariant;
  className?: string;
  style?: React.CSSProperties;
}

const CategoryChip: React.FC<CategoryChipProps> = ({
  label,
  isActive = false,
  onClick,
  variant = "default",
  className = "",
  style = {},
}) => {
  // Default variant (for LiveClassesContent, TestSeriesContent, VideosContent)
  const getDefaultStyles = (): React.CSSProperties => {
    return {
      ...typography.labels.md,
      fontSize: "14px",
      fontFamily: FONT_FAMILY,
      color: isActive ? colors.text.light : colors.text.tertiary,
      background: isActive
        ? gradients.buttonPrimary
        : colors.neutral.white,
      boxShadow: isActive
        ? "0px 10px 20px rgba(107, 71, 237, 0.25)"
        : "0px 6px 12px rgba(107, 71, 237, 0.08)",
      border: isActive
        ? "1px solid rgba(107, 71, 237, 0.2)"
        : "1px solid rgba(107, 71, 237, 0.08)",
    };
  };

  // Tab variant (for Categories.tsx)
  const getTabStyles = (): React.CSSProperties => {
    return {
      ...typography.labels.md,
      fontFamily: FONT_FAMILY,
      ...(isActive
        ? {
            background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
            border: "none",
            color: "#FFFFFF",
          }
        : {
            backgroundColor: "#FFFFFF",
            color: "#374151",
            border: "1px solid #E5E7EB",
          }),
    };
  };

  const baseStyles: React.CSSProperties =
    variant === "tab" ? getTabStyles() : getDefaultStyles();

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...style,
  };

  // Default classes
  const defaultClasses =
    variant === "tab"
      ? "px-5 py-3 rounded-lg font-medium transition-all flex-shrink-0 whitespace-nowrap"
      : "px-4 py-2 rounded-xl transition-all";

  // Additional classes for tab variant
  const tabClasses = isActive
    ? "text-white shadow-md"
    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:text-gray-900 hover:shadow-md";

  const combinedClasses =
    variant === "tab"
      ? `${defaultClasses} ${tabClasses}`
      : `${defaultClasses} ${className}`;

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
      style={combinedStyles}
    >
      {label}
    </button>
  );
};

export default CategoryChip;


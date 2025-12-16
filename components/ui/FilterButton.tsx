"use client";

import React from "react";
import { Filter } from "lucide-react";
import { typography, FONT_FAMILY } from "@/theme";

export interface FilterButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  showHover?: boolean; // For TestSeriesContent which has hover effect
}

const FilterButton: React.FC<FilterButtonProps> = ({
  onClick,
  label = "Filter",
  className = "",
  style = {},
  showHover = false,
}) => {
  // Default button styles
  const defaultButtonStyle: React.CSSProperties = {
    ...typography.button.secondary,
    fontSize: "14px",
    fontFamily: FONT_FAMILY,
  };

  const combinedStyle: React.CSSProperties = {
    ...defaultButtonStyle,
    ...style,
  };

  // Base classes
  const baseClasses =
    "flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700";

  // Hover classes (for TestSeriesContent)
  const hoverClasses = showHover
    ? "bg-white hover:bg-gray-50 transition-colors"
    : "";

  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`.trim();

  return (
    <button
      className={combinedClasses}
      style={combinedStyle}
      onClick={onClick}
      type="button"
    >
      <Filter className="w-4 h-4" />
      {label}
    </button>
  );
};

export default FilterButton;


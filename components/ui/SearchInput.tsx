"use client";

import React from "react";
import { Search } from "lucide-react";
import { FONT_FAMILY, colors } from "@/theme";

export type SearchInputVariant = "default" | "minimal";

export interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  variant?: SearchInputVariant;
  className?: string;
  inputClassName?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  // Custom icon styling
  iconBgColor?: string;
  iconColor?: string;
  iconSize?: number;
  iconContainerSize?: number;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  variant = "default",
  className = "",
  inputClassName = "",
  style = {},
  inputStyle = {},
  iconBgColor,
  iconColor,
  iconSize = 20, // w-5 h-5 = 20px
  iconContainerSize = 36, // w-9 h-9 = 36px (default) or w-10 h-10 = 40px (TestSeries)
}) => {
  // Default variant (LiveClassesContent, VideosContent)
  const getDefaultIconStyles = () => {
    return {
      backgroundColor: iconBgColor || "#6B47ED",
      color: iconColor || "#FFFFFF",
      size: iconContainerSize || 36,
      shadow: "shadow-md",
    };
  };

  // Minimal variant (TestSeriesContent)
  const getMinimalIconStyles = () => {
    return {
      backgroundColor: "transparent",
      color: iconColor || "#9CA3AF", // gray-400
      size: iconContainerSize || 40,
      shadow: "",
    };
  };

  const iconStyles =
    variant === "minimal" ? getMinimalIconStyles() : getDefaultIconStyles();

  // Default input styles
  const defaultInputStyle: React.CSSProperties = {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    color: colors.text.primary,
    ...inputStyle,
  };

  // Default container classes
  const defaultContainerClasses = "relative";
  const defaultInputClasses =
    variant === "minimal"
      ? "w-full rounded-full border border-transparent bg-white px-5 py-4 pl-14 pr-6 text-base focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-shadow shadow-lg"
      : "w-full rounded-full border border-transparent bg-white px-5 py-4 pl-16 pr-6 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#6B47ED] focus:border-transparent transition-shadow shadow-[0px_10px_24px_rgba(107,71,237,0.08)]";

  const combinedContainerClasses = `${defaultContainerClasses} ${className}`.trim();
  const combinedInputClasses = `${defaultInputClasses} ${inputClassName}`.trim();

  return (
    <div className={combinedContainerClasses} style={style}>
      <div
        className={`absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center ${
          iconStyles.shadow
        }`}
        style={{
          width: `${iconStyles.size}px`,
          height: `${iconStyles.size}px`,
          backgroundColor: iconStyles.backgroundColor,
          borderRadius: iconStyles.backgroundColor !== "transparent" ? "50%" : "0",
        }}
      >
        <Search
          className="w-5 h-5"
          style={{
            color: iconStyles.color,
            width: `${iconSize}px`,
            height: `${iconSize}px`,
          }}
        />
        <span className="sr-only">Search</span>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={combinedInputClasses}
        style={defaultInputStyle}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;


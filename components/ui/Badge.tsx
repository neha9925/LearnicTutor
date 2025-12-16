"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { FONT_FAMILY } from "@/theme";

export type BadgeVariant = 
  | "default"
  | "success"
  | "warning"
  | "primary"
  | "info"
  | "bestseller"
  | "discount"
  | "category"
  | "duration"
  | "completed"
  | "custom";

export type BadgeSize = "xs" | "sm" | "md" | "lg";

export type BadgePosition = 
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "inline";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  position?: BadgePosition;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  style?: React.CSSProperties;
  // Custom colors override
  backgroundColor?: string;
  textColor?: string;
  // Custom styling
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: number | string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "sm",
  position = "inline",
  icon: Icon,
  iconPosition = "left",
  className = "",
  style = {},
  backgroundColor,
  textColor,
  borderRadius,
  padding,
  fontSize,
  fontWeight,
}) => {
  // Base styles
  const baseStyles: React.CSSProperties = {
    fontFamily: FONT_FAMILY,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
  };

  // Variant-specific styles
  const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
    default: {
      backgroundColor: backgroundColor || "#86EFAC",
      color: textColor || "#065F46",
      fontWeight: fontWeight || 500,
      fontSize: fontSize || "14.75px",
      padding: padding || "8px 16px",
      borderRadius: borderRadius || "10533.21px",
    },
    success: {
      backgroundColor: backgroundColor || "#10B981",
      color: textColor || "#FFFFFF",
      fontWeight: fontWeight || 600,
      fontSize: fontSize || "12px",
      padding: padding || "3px 12px",
      borderRadius: borderRadius || "8px",
    },
    warning: {
      backgroundColor: backgroundColor || "#FBBF24",
      color: textColor || "#FFFFFF",
      fontWeight: fontWeight || 600,
      fontSize: fontSize || "12px",
      padding: padding || "3px 12px",
      borderRadius: borderRadius || "8px",
    },
    primary: {
      backgroundColor: backgroundColor || "#572EEE",
      color: textColor || "#FFFFFF",
      fontWeight: fontWeight || 600,
      fontSize: fontSize || "12px",
      padding: padding || "3px 12px",
      borderRadius: borderRadius || "8px",
    },
    info: {
      backgroundColor: backgroundColor || "#EEF4FF",
      color: textColor || "#4338CA",
      fontWeight: fontWeight || 600,
      fontSize: fontSize || "14px",
      padding: padding || "8px 16px",
      borderRadius: borderRadius || "9999px",
    },
    bestseller: {
      backgroundColor: backgroundColor || "#F48C06",
      color: textColor || "#FFFFFF",
      fontWeight: fontWeight || 600,
      fontSize: fontSize || "12px",
      padding: padding || "6px 10px",
      borderRadius: borderRadius || "20px",
    },
    discount: {
      backgroundColor: backgroundColor || "#86EFAC",
      color: textColor || "#FFFFFF",
      fontWeight: fontWeight || 600,
      fontSize: fontSize || "12px",
      padding: padding || "4px 10px",
      borderRadius: borderRadius || "20px",
    },
    category: {
      backgroundColor: backgroundColor || "rgba(255, 255, 255, 0.9)",
      color: textColor || "#1F2937",
      fontWeight: fontWeight || 600,
      fontSize: fontSize || "12px",
      padding: padding || "4px 12px",
      borderRadius: borderRadius || "9999px",
    },
    duration: {
      backgroundColor: backgroundColor || "rgba(0, 0, 0, 0.7)",
      color: textColor || "#FFFFFF",
      fontWeight: fontWeight || 500,
      fontSize: fontSize || "12px",
      padding: padding || "4px 10px",
      borderRadius: borderRadius || "9999px",
    },
    completed: {
      backgroundColor: backgroundColor || "#10B981",
      color: textColor || "#FFFFFF",
      fontWeight: fontWeight || 600,
      fontSize: fontSize || "12px",
      padding: padding || "3px 12px",
      borderRadius: borderRadius || "6px",
    },
    custom: {
      backgroundColor: backgroundColor || "#86EFAC",
      color: textColor || "#065F46",
      fontWeight: fontWeight || 500,
      fontSize: fontSize || "12px",
      padding: padding || "4px 12px",
      borderRadius: borderRadius || "8px",
    },
  };

  // Size-specific adjustments
  const sizeStyles: Record<BadgeSize, Partial<React.CSSProperties>> = {
    xs: {
      fontSize: fontSize || "10px",
      padding: padding || "2px 8px",
    },
    sm: {
      fontSize: fontSize || "12px",
      padding: padding || "3px 12px",
    },
    md: {
      fontSize: fontSize || "14px",
      padding: padding || "6px 16px",
    },
    lg: {
      fontSize: fontSize || "16px",
      padding: padding || "8px 20px",
    },
  };

  // Position classes
  const positionClasses: Record<BadgePosition, string> = {
    "top-left": "absolute top-3 left-3 z-10",
    "top-right": "absolute top-3 right-3 z-10",
    "bottom-left": "absolute bottom-3 left-3 z-10",
    "bottom-right": "absolute bottom-3 right-3 z-10",
    "inline": "",
  };

  // Combine all styles
  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  // Icon size based on badge size
  const iconSize = size === "xs" ? 12 : size === "sm" ? 14 : size === "md" ? 16 : 18;

  const badgeContent = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon 
          className="flex-shrink-0" 
          size={iconSize} 
          style={{ marginRight: "4px" }}
          fill={variant === "bestseller" ? "currentColor" : undefined}
        />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon 
          className="flex-shrink-0" 
          size={iconSize} 
          style={{ marginLeft: "4px" }}
          fill={variant === "bestseller" ? "currentColor" : undefined}
        />
      )}
    </>
  );

  return (
    <span
      className={`${positionClasses[position]} ${className}`}
      style={combinedStyles}
    >
      {badgeContent}
    </span>
  );
};

export default Badge;


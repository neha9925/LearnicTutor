"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

export type IconContainerSize = "xs" | "sm" | "md" | "lg" | "xl";
export type IconContainerShape = "circle" | "square" | "rounded";

export interface IconContainerProps {
  icon?: LucideIcon;
  children?: React.ReactNode; // For custom content like numbers, text
  size?: IconContainerSize;
  shape?: IconContainerShape;
  backgroundColor?: string;
  iconColor?: string;
  iconSize?: number;
  className?: string;
  style?: React.CSSProperties;
  // For numbered badges (HowToBecomeCoordinator)
  badge?: {
    number: number | string;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
  };
}

const IconContainer: React.FC<IconContainerProps> = ({
  icon: Icon,
  children,
  size = "md",
  shape = "circle",
  backgroundColor,
  iconColor,
  iconSize,
  className = "",
  style = {},
  badge,
}) => {
  // Size mappings
  const sizeMap: Record<IconContainerSize, { container: string; defaultIcon: number }> = {
    xs: { container: "w-6 h-6", defaultIcon: 16 },
    sm: { container: "w-12 h-12", defaultIcon: 24 },
    md: { container: "w-16 h-16", defaultIcon: 32 },
    lg: { container: "w-20 h-20", defaultIcon: 40 },
    xl: { container: "w-24 h-24", defaultIcon: 48 },
  };

  // Shape classes
  const shapeClasses: Record<IconContainerShape, string> = {
    circle: "rounded-full",
    square: "rounded-lg",
    rounded: "rounded-lg",
  };

  const { container: containerSizeClass, defaultIcon: defaultIconSize } = sizeMap[size];
  const finalIconSize = iconSize || defaultIconSize;
  const shapeClass = shapeClasses[shape];

  // Badge size based on container size
  const badgeSizeMap: Record<IconContainerSize, string> = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
  };

  const badgePositionClasses = {
    "top-right": "absolute -top-1 -right-1",
    "top-left": "absolute -top-1 -left-1",
    "bottom-right": "absolute -bottom-1 -right-1",
    "bottom-left": "absolute -bottom-1 -left-1",
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: backgroundColor,
    ...style,
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className={`${containerSizeClass} ${shapeClass} flex items-center justify-center`}
        style={containerStyle}
      >
        {Icon && (
          <Icon
            size={finalIconSize}
            style={{ color: iconColor }}
          />
        )}
        {children}
      </div>
      
      {/* Badge (for HowToBecomeCoordinator style) */}
      {badge && (
        <div
          className={`${badgeSizeMap[size]} ${shapeClasses.circle} ${badgePositionClasses[badge.position || "top-right"]} flex items-center justify-center`}
          style={{
            backgroundColor: badge.bgColor || "#FFFFFF",
            border: `2px solid ${badge.borderColor || "#572EEE"}`,
            color: badge.textColor || "#572EEE",
            fontSize: size === "md" ? "14px" : size === "sm" ? "10px" : "12px",
            fontWeight: 600,
          }}
        >
          {badge.number}
        </div>
      )}
    </div>
  );
};

export default IconContainer;


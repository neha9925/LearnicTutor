"use client";

import React from "react";

export interface CardGridContainerProps {
  children: React.ReactNode;
  cols?: string; // Tailwind grid classes like "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  gap?: string;
  className?: string;
  style?: React.CSSProperties;
  justifyItems?: "start" | "center" | "end" | "stretch";
  maxWidth?: string;
}

const CardGridContainer: React.FC<CardGridContainerProps> = ({
  children,
  cols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  gap = "gap-6 lg:gap-8",
  className = "",
  style = {},
  justifyItems,
  maxWidth,
}) => {
  // Build justify items class
  const justifyItemsClass = justifyItems ? `justify-items-${justifyItems}` : "";

  const gridClasses = `grid ${cols} ${gap} ${justifyItemsClass} ${className}`.trim();

  if (maxWidth) {
    return (
      <div className={maxWidth} style={style}>
        <div className={gridClasses}>{children}</div>
      </div>
    );
  }

  return (
    <div className={gridClasses} style={style}>
      {children}
    </div>
  );
};

export default CardGridContainer;


"use client";

import React from "react";
import { typography, FONT_FAMILY } from "@/theme";

export interface FormLabelProps {
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  // Custom styling overrides
  labelStyle?: React.CSSProperties;
}

const FormLabel: React.FC<FormLabelProps> = ({
  htmlFor,
  required = false,
  children,
  className = "",
  style = {},
  labelStyle = {},
}) => {
  // Default label styles (matching ApplyNowSection pattern)
  const defaultLabelStyle: React.CSSProperties = {
    ...typography.card.bodyMd,
    color: "#374151",
    fontWeight: 500,
    fontFamily: FONT_FAMILY,
    display: "block",
    marginBottom: "8px",
  };

  const combinedStyle: React.CSSProperties = {
    ...defaultLabelStyle,
    ...labelStyle,
    ...style,
  };

  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 ${className}`}
      style={combinedStyle}
    >
      {children}
      {required && (
        <span style={{ color: "#EF4444", marginLeft: "4px" }}>*</span>
      )}
    </label>
  );
};

export default FormLabel;


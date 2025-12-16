"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { typography, FONT_FAMILY } from "@/theme";

export interface SubmitButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  gradient?: string;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  onClick,
  type = "submit",
  className = "",
  style = {},
  gradient = "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
  disabled = false,
}) => {
  const defaultStyle: React.CSSProperties = {
    ...typography.button.primary,
    fontFamily: FONT_FAMILY,
    background: gradient,
    ...style,
  };

  const defaultClasses = "w-full text-white font-semibold py-4 rounded-lg text-lg";
  const combinedClasses = `${defaultClasses} ${className}`.trim();

  return (
    <Button
      type={type}
      variant="primary"
      size="lg"
      className={combinedClasses}
      style={defaultStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;


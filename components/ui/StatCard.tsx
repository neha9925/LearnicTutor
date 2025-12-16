"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { typography, FONT_FAMILY } from "@/theme";

export type StatCardVariant = "default" | "glass";

export interface StatCardProps {
  value: string | number;
  label: string;
  description?: string;
  icon?: LucideIcon;
  variant?: StatCardVariant;
  // Styling
  backgroundColor?: string;
  textColor?: string;
  valueColor?: string;
  borderColor?: string;
  className?: string;
  // Custom styles
  valueStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  cardStyle?: React.CSSProperties;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  icon: Icon,
  variant = "default",
  backgroundColor,
  textColor,
  valueColor,
  borderColor,
  className = "",
  valueStyle = {},
  labelStyle = {},
  descriptionStyle = {},
  cardStyle = {},
}) => {
  // Default variant styles (for EarningsStructure)
  const getDefaultStyles = () => {
    const defaultValueStyle: React.CSSProperties = {
      ...typography.hero.heading,
      color: valueColor || "#572EEE",
      fontSize: "48px",
      fontWeight: 700,
      marginBottom: "12px",
      fontFamily: FONT_FAMILY,
    };

    const defaultLabelStyle: React.CSSProperties = {
      ...typography.card.titleMd,
      color: textColor || "#1F2937",
      marginBottom: description ? "8px" : "0",
      fontFamily: FONT_FAMILY,
    };

    const defaultDescriptionStyle: React.CSSProperties = {
      ...typography.card.bodySm,
      color: textColor || "#4B5563",
      fontFamily: FONT_FAMILY,
    };

    return {
      value: { ...defaultValueStyle, ...valueStyle },
      label: { ...defaultLabelStyle, ...labelStyle },
      description: { ...defaultDescriptionStyle, ...descriptionStyle },
    };
  };

  // Glass variant styles (for FutureEarningsInsights)
  const getGlassStyles = () => {
    const defaultValueStyle: React.CSSProperties = {
      ...typography.hero.statValue,
      color: valueColor || "#FFFFFF",
      fontSize: "clamp(36px, 5vw, 64px)",
      fontWeight: 700,
      marginBottom: "12px",
      fontFamily: FONT_FAMILY,
    };

    const defaultLabelStyle: React.CSSProperties = {
      ...typography.card.bodyMd,
      color: textColor || "#FFFFFF",
      fontWeight: 400,
      fontSize: "clamp(16px, 2vw, 20px)",
      fontFamily: FONT_FAMILY,
    };

    return {
      value: { ...defaultValueStyle, ...valueStyle },
      label: { ...defaultLabelStyle, ...labelStyle },
      description: undefined,
    };
  };

  const styles = variant === "glass" ? getGlassStyles() : getDefaultStyles();

  // Default card styles
  const defaultCardStyle: React.CSSProperties =
    variant === "glass"
      ? {
          backgroundColor: backgroundColor || "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          borderRadius: "8px",
          padding: "32px 40px",
          textAlign: "center" as const,
        }
      : {
          backgroundColor: backgroundColor || "#FFFFFF",
          border: borderColor ? `1px solid ${borderColor}` : "1px solid #572EEE",
          borderRadius: "8px",
          padding: "24px",
          textAlign: "center" as const,
        };

  const combinedCardStyle: React.CSSProperties = {
    ...defaultCardStyle,
    ...cardStyle,
  };

  return (
    <div className={className} style={combinedCardStyle}>
      {Icon && variant === "default" && (
        <div className="mb-4 flex justify-center">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#E9D5FF" }}
          >
            <Icon className="w-6 h-6" style={{ color: "#572EEE" }} />
          </div>
        </div>
      )}

      <div className="mb-3" style={styles.value}>
        {value}
      </div>

      <div style={styles.label}>{label}</div>

      {description && variant === "default" && (
        <div style={styles.description}>{description}</div>
      )}
    </div>
  );
};

export default StatCard;


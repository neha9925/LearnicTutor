"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import IconContainer from "@/components/ui/IconContainer";
import { typography } from "@/theme";

export type ProcessStepVariant = "tutor" | "coordinator";

export interface ProcessStep {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStepsProps {
  steps: ProcessStep[];
  variant?: ProcessStepVariant;
  lineColor?: string;
  linePosition?: number; // Top position for connection line
  className?: string;
  // Custom styling
  titleStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  stepNumberStyle?: React.CSSProperties;
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({
  steps,
  variant = "tutor",
  lineColor,
  linePosition,
  className = "",
  titleStyle = {},
  descriptionStyle = {},
  stepNumberStyle = {},
}) => {
  // Default styles
  const defaultTitleStyle: React.CSSProperties = {
    ...typography.card.titleMd,
    color: "#1F2937",
    fontWeight: 700,
    marginBottom: "12px",
    textAlign: "center" as const,
  };

  const defaultDescriptionStyle: React.CSSProperties = {
    ...typography.card.bodySm,
    color: "#4B5563",
    lineHeight: "1.625",
    textAlign: "center" as const,
  };

  // Variant-specific line colors and positions
  const variantConfig = {
    tutor: {
      lineColor: lineColor || "#E9D5FF",
      linePosition: linePosition || 104, // Between icon squares
      lineHeight: "4px", // h-1
    },
    coordinator: {
      lineColor: lineColor || "#D1D5DB", // gray-300
      linePosition: linePosition || 32, // Between purple circles
      lineHeight: "2px", // h-0.5
    },
  };

  const config = variantConfig[variant];

  return (
    <div className={`relative ${className}`}>
      {/* Connection Line */}
      <div
        className="hidden lg:block absolute"
        style={{
          height: config.lineHeight,
          backgroundColor: config.lineColor,
          top: `${config.linePosition}px`,
          left: "12.5%",
          right: "12.5%",
          zIndex: 0,
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step, index) => {
          const IconComponent = step.icon;

          if (variant === "tutor") {
            // Tutor variant: 2 containers (number circle + icon square)
            return (
              <div key={index} className="relative flex flex-col items-center">
                {/* Step Circle with Number */}
                <div className="mb-4 relative z-10">
                  <IconContainer
                    size="md"
                    shape="circle"
                    backgroundColor="#572EEE"
                  >
                    <span
                      className="text-white font-bold"
                      style={{
                        ...typography.hero.statValue,
                        color: "#FFFFFF",
                        fontSize: "24px",
                        ...stepNumberStyle,
                      }}
                    >
                      {step.number}
                    </span>
                  </IconContainer>
                </div>

                {/* Icon Square */}
                <div className="mb-4 relative z-10">
                  <IconContainer
                    size="md"
                    shape="square"
                    backgroundColor="#E8DEFF"
                    icon={IconComponent}
                    iconColor="#572EEE"
                    iconSize={32}
                  />
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h3
                    className="text-gray-800 mb-3 font-bold"
                    style={{ ...defaultTitleStyle, ...titleStyle }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ ...defaultDescriptionStyle, ...descriptionStyle }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          } else {
            // Coordinator variant: 1 container with icon and badge
            return (
              <div key={index} className="relative flex flex-col items-center">
                {/* Purple Circle with Icon and Numbered Badge */}
                <div className="mb-4 z-10">
                  <IconContainer
                    size="md"
                    shape="circle"
                    backgroundColor="#572EEE"
                    icon={IconComponent}
                    iconColor="#FFFFFF"
                    iconSize={32}
                    badge={{
                      number: step.number,
                      position: "top-right",
                      bgColor: "#FFFFFF",
                      borderColor: "#572EEE",
                      textColor: "#572EEE",
                    }}
                    style={{
                      ...typography.hero.statValue,
                      color: "#572EEE",
                      fontSize: "14px",
                      fontWeight: 600,
                      ...stepNumberStyle,
                    }}
                  />
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h3
                    className="text-gray-800 mb-3 font-bold"
                    style={{ ...defaultTitleStyle, ...titleStyle }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ ...defaultDescriptionStyle, ...descriptionStyle }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProcessSteps;


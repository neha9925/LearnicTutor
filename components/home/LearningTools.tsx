"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { HOME_LEARNING_TOOLS } from "@/data/home";
import { colors, radii, shadows, typography } from "@/theme";

const styles = {
  sectionHeading: typography.section.headingXl,
  sectionDescription: typography.section.descriptionLg,
  card: {
    borderRadius: "16.82px",
    borderWidth: "1.05px",
    borderStyle: "solid",
    borderColor: colors.background.cardBorder,
    position: "relative" as const,
    top: "-0.21px",
  },
  iconCircle: (backgroundColor: string) =>
    ({
      backgroundColor,
    }) as const,
  cardTitle: {
    ...typography.card.titleLg,
    textAlign: "left" as const,
  },
  cardBody: {
    ...typography.card.bodyMd,
    textAlign: "left" as const,
  },
  exploreButton: (backgroundColor: string, color: string) =>
    ({
      ...typography.button.secondary,
      backgroundColor,
      color,
      height: "50px",
      padding: "0 24px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }) as const,
} as const;

const LearningTools: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-gray-900 mb-4"
            style={styles.sectionHeading}
          >
            All Learning Tools in One Place
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            style={styles.sectionDescription}
          >
            Comprehensive learning experience designed for your success
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-items-center max-w-[1320px] mx-auto w-full px-2 sm:px-4"
        >
          {HOME_LEARNING_TOOLS.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-shadow w-full max-w-[404px]"
                style={{
                  backgroundColor: tool.cardBg,
                  ...styles.card,
                }}
              >
                <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                  
                  <div className="flex justify-start mb-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={styles.iconCircle(tool.iconCircleBg)}
                    >
                      <Icon
                        className="w-8 h-8"
                        style={{
                          color: tool.iconColor,
                        }}
                      />
                    </div>
                  </div>
                  
                  
                  <h3 
                    className="mb-4 text-left font-bold"
                    style={{
                      ...styles.cardTitle,
                      color: tool.titleColor ?? colors.text.primary,
                    }}
                  >
                    {tool.title}
                  </h3>
                  
                  
                  <p 
                    className="mb-6 text-left"
                    style={{
                      ...styles.cardBody,
                      color: tool.descColor ?? colors.text.tertiary,
                    }}
                  >
                    {tool.description}
                  </p>
                  
                  
                  <button
                    className="px-6 rounded-lg font-medium transition-colors mt-auto self-start"
                    style={styles.exploreButton(
                      tool.buttonBg,
                      tool.buttonTextColor ?? colors.text.light
                    )}
                  >
                    Explore
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningTools;


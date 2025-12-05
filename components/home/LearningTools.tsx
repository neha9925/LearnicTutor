"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import IconContainer from "@/components/ui/IconContainer";
import CardGridContainer from "@/components/ui/CardGridContainer";
import { HOME_LEARNING_TOOLS } from "@/data/home";
import { colors, radii, shadows, typography } from "@/theme";

const styles = {
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
  exploreButtonBase: {
    ...typography.button.secondary,
    height: "50px",
    padding: "0 24px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  } as const,
} as const;

const LearningTools: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <SectionHeader
          title="All Learning Tools in One Place"
          subtitle="Comprehensive learning experience designed for your success"
          variant="light"
          bottomMargin="md"
        />

        <CardGridContainer
          cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          justifyItems="stretch"
          maxWidth="mx-auto w-full max-w-7xl px-2 sm:px-4"
        >
          {HOME_LEARNING_TOOLS.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-shadow w-full max-w-full"
                style={{
                  backgroundColor: tool.cardBg,
                  ...styles.card,
                }}
              >
                <CardContent className="p-6 lg:p-8 h-full flex flex-col min-h-[300px]">
                  
                  <div className="flex justify-start mb-4">
                    <IconContainer
                      size="md"
                      shape="circle"
                      backgroundColor={tool.iconCircleBg}
                      icon={Icon}
                      iconColor={tool.iconColor}
                      iconSize={32}
                    />
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
                  
                  
                  {(() => {
                    // Determine navigation route based on tool title
                    let href = "#";
                    if (tool.title === "Live Classes") {
                      href = "/live-classes";
                    } else if (tool.title === "Recorded Videos") {
                      href = "/videos";
                    } else if (tool.title === "Interactive Test Series") {
                      href = "/test-series";
                    }
                    
                    return (
                      <Link
                        href={href}
                        className={`px-6 rounded-lg font-medium transition-colors mt-auto self-start ${
                          tool.title === "Recorded Videos"
                            ? "bg-[#FC921C] hover:bg-[#D47914] text-white"
                            : "bg-[#572EEE] hover:bg-[#3311B2] text-white"
                        }`}
                        style={styles.exploreButtonBase}
                      >
                        Explore
                      </Link>
                    );
                  })()}
                </CardContent>
              </Card>
            );
          })}
        </CardGridContainer>
      </div>
    </section>
  );
};

export default LearningTools;


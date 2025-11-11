"use client";

import React, { useState } from "react";
import StarRating from "@/components/ui/StarRating";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { cn } from "@/lib/utils";
import { HOME_SUCCESS_STORIES } from "@/data/home";
import { colors, gradients, shadows, typography } from "@/theme";

const styles = {
  sectionHeading: typography.section.headingLg,
  sectionDescription: typography.section.descriptionLg,
  card: (isActive: boolean, gradient: boolean) =>
    ({
      borderRadius: "16px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: colors.border.subtle,
      boxShadow: isActive
        ? "0px 8.61px 12.91px 0px rgba(0, 0, 0, 0.1), 0px 3.44px 5.17px 0px rgba(0, 0, 0, 0.1)"
        : "0px 3.44px 5.17px 0px rgba(0, 0, 0, 0.1)",
      background: isActive
        ? gradient
          ? gradients.successStoryActive
          : gradients.successStoryActive
        : colors.background.cardLight,
    }) as const,
  quote: (isActive: boolean) =>
    ({
      ...typography.card.bodySm,
      color: isActive ? colors.text.light : colors.text.secondary,
      display: "flex",
      alignItems: "center",
      lineHeight: "24px",
    }) as const,
  name: (isActive: boolean) =>
    ({
      ...typography.card.titleMd,
      color: isActive ? colors.text.light : colors.text.primary,
      textAlign: "center" as const,
    }) as const,
  role: (isActive: boolean) =>
    ({
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      color: isActive ? "rgba(255, 255, 255, 0.9)" : colors.text.tertiary,
      textAlign: "center" as const,
    }) as const,
  indicator: (isActive: boolean) =>
    ({
      backgroundColor: isActive ? colors.brand.purple : colors.neutral.gray300,
    }) as const,
} as const;

const SuccessStories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Center card is active by default

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-gray-900 mb-4"
            style={styles.sectionHeading}
          >
            Success Stories from Every Field
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={styles.sectionDescription}
          >
            Join thousands of learners who have transformed their careers
          </p>
        </div>

        
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-6 mb-8 pb-4 md:min-h-[500px]">
          {HOME_SUCCESS_STORIES.map((story, index) => {
            const isActive = index === activeIndex;
            
            return (
              <div
                key={story.id}
                className={cn(
                  "flex-shrink-0 transition-all duration-300 cursor-pointer w-full max-w-[390px]",
                  "md:w-[390px]",
                  isActive ? "md:scale-110 md:z-10" : "md:scale-100 md:z-0"
                )}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className={cn(
                    "p-6 rounded-xl flex flex-col items-center text-center h-full",
                    story.gradient && isActive ? "" : "bg-white"
                  )}
                  style={styles.card(isActive, Boolean(story.gradient))}
                >
                  
                  <div className="flex items-center justify-center gap-1 mb-6">
                    <StarRating rating={story.rating} size="sm" />
                  </div>

                  
                  <p
                    className="mb-6 flex-1 flex items-center"
                    style={styles.quote(isActive)}
                  >
                    &ldquo;{story.quote}&rdquo;
                  </p>

                  
                  <div className="mb-4">
                    <ImageWithFallback
                      src={story.image || `/images/students/${story.id}.jpg`}
                      alt={story.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover mx-auto"
                      fallback={
                        <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mx-auto">
                          <span className="text-gray-600 text-2xl font-bold">
                            {story.name.charAt(0)}
                          </span>
                        </div>
                      }
                    />
                  </div>

                  
                  <div className="text-center">
                    <p
                      className="font-bold mb-1"
                      style={styles.name(isActive)}
                    >
                      {story.name}
                    </p>
                    <p
                      className="text-sm"
                      style={styles.role(isActive)}
                    >
                      {story.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
        <div className="flex justify-center gap-2">
          {HOME_SUCCESS_STORIES.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="w-3 h-3 rounded-full transition-all"
              style={styles.indicator(index === activeIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

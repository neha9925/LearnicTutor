"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
      backgroundColor: isActive ? "#572EEE" : colors.neutral.gray300,
    }) as const,
} as const;

const SuccessStories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Center card is active by default
  const [isDesktop, setIsDesktop] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateMatch = (matches: boolean) => setIsDesktop(matches);

    updateMatch(mediaQuery.matches);
    const listener = (event: MediaQueryListEvent) => updateMatch(event.matches);
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const scrollToActive = useCallback(
    (behavior: ScrollBehavior = "smooth") => {
      const container = carouselRef.current;
      if (!container) return;

      const activeCard = container.querySelector<HTMLDivElement>(
        `[data-original-index="${activeIndex}"]`
      );

      if (!activeCard) return;

      const cardElement = activeCard as HTMLElement;
      const targetScrollLeft =
        cardElement.offsetLeft -
        container.clientWidth / 2 +
        cardElement.clientWidth / 2;

      container.scrollTo({
        left: Math.max(targetScrollLeft, 0),
        behavior,
      });
    },
    [activeIndex]
  );

  useEffect(() => {
    if (isDesktop) return;
    scrollToActive("auto");
  }, [isDesktop, scrollToActive]);

  useEffect(() => {
    if (isDesktop) return;
    scrollToActive("smooth");
  }, [activeIndex, isDesktop, scrollToActive]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HOME_SUCCESS_STORIES.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const handleScroll = useCallback(() => {
    if (isDesktop || !carouselRef.current) return;

    const container = carouselRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = activeIndex;
    let minDistance = Number.POSITIVE_INFINITY;

    container
      .querySelectorAll<HTMLDivElement>("[data-original-index]")
      .forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - containerCenter);

        if (distance < minDistance) {
          minDistance = distance;
          const value = card.getAttribute("data-original-index");
          if (value !== null) {
            closestIndex = Number(value);
          }
        }
      });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  }, [activeIndex, isDesktop]);

  const storiesWithIndex = useMemo(
    () =>
      HOME_SUCCESS_STORIES.map((story, index) => ({
        story,
        originalIndex: index,
      })),
    []
  );

  const arrangedStories = useMemo(() => {
    const activeStory = storiesWithIndex.find(
      (entry) => entry.originalIndex === activeIndex
    );

    if (!activeStory) {
      return storiesWithIndex;
    }

    const others = storiesWithIndex.filter(
      (entry) => entry.originalIndex !== activeIndex
    );

    const centerPosition = Math.floor(storiesWithIndex.length / 2);
    const ordered = [...others];
    ordered.splice(Math.min(centerPosition, ordered.length), 0, activeStory);

    return ordered;
  }, [activeIndex, storiesWithIndex]);

  const displayedStories = isDesktop ? arrangedStories : storiesWithIndex;

  return (
    <section className="pt-0 pb-12 md:pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
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

        
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto md:overflow-visible md:justify-center md:items-center md:gap-8 lg:gap-10 pb-4 md:min-h-[520px] snap-x snap-mandatory -mx-4 px-6 sm:px-4 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mt-6 sm:mt-8"
          onScroll={handleScroll}
        >
          {displayedStories.map(({ story, originalIndex }) => {
            const isActive = originalIndex === activeIndex;
            
            return (
              <div
                key={story.id}
                data-original-index={originalIndex}
                className={cn(
                  "flex-shrink-0 transition-all duration-300 cursor-pointer w-full max-w-[390px] min-w-[85vw] sm:min-w-[340px] snap-center md:min-w-0 px-2 sm:px-0",
                  isActive
                    ? "md:scale-[1.15] md:z-10"
                    : "md:scale-100 md:z-0 md:blur-[1px]"
                )}
                onClick={() => setActiveIndex(originalIndex)}
              >
                <div
                  className={cn(
                    "p-6 rounded-xl flex flex-col items-center text-center h-full",
                    story.gradient && isActive ? "" : "bg-white"
                  )}
                  style={styles.card(isActive, Boolean(story.gradient))}
                >
                  
                  <div className="flex items-center justify-center gap-1 mb-6">
                    <StarRating rating={story.rating} size="md" />
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

        
        <div className="flex justify-center gap-1">
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

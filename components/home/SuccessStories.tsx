"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : React.useEffect;

const SuccessStories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const isDesktopRef = useRef(false);
  const programmaticScrollRef = useRef(false);
  const programmaticScrollTimeoutRef = useRef<number | null>(null);
  const scrollRafRef = useRef<number | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const resumeAutoplayTimeoutRef = useRef<number | null>(null);

  useIsomorphicLayoutEffect(() => {
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

  useIsomorphicLayoutEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    isDesktopRef.current = isDesktop;
    if (
      isDesktop &&
      programmaticScrollTimeoutRef.current &&
      typeof window !== "undefined"
    ) {
      window.clearTimeout(programmaticScrollTimeoutRef.current);
      programmaticScrollTimeoutRef.current = null;
      programmaticScrollRef.current = false;
    }
  }, [isDesktop]);

  const scrollToIndex = useCallback(
    (
      index: number,
      behavior: ScrollBehavior = "smooth",
      options?: { programmatic?: boolean }
    ) => {
      const container = carouselRef.current;
      if (!container) {
        return;
      }

      const isScrollable =
        container.scrollWidth - container.clientWidth > 2;
      if (!isScrollable) {
        return;
      }

      const targetCard = container.querySelector<HTMLDivElement>(
        `[data-original-index="${index}"]`
      );

      if (!targetCard) {
        return;
      }

      if (
        options?.programmatic &&
        typeof window !== "undefined" &&
        isScrollable
      ) {
        programmaticScrollRef.current = true;
        if (programmaticScrollTimeoutRef.current) {
          window.clearTimeout(programmaticScrollTimeoutRef.current);
        }
        programmaticScrollTimeoutRef.current = window.setTimeout(() => {
          programmaticScrollRef.current = false;
          programmaticScrollTimeoutRef.current = null;
        }, behavior === "smooth" ? 650 : 0);
      }

      const cardElement = targetCard as HTMLElement;
      const targetScrollLeft =
        cardElement.offsetLeft -
        container.clientWidth / 2 +
        cardElement.clientWidth / 2;

      const left = Math.max(targetScrollLeft, 0);

      if (typeof container.scrollTo === "function") {
        container.scrollTo({
          left,
          behavior,
        });
      } else {
        container.scrollLeft = left;
      }
    },
    []
  );

  const scrollToActive = useCallback(
    (behavior: ScrollBehavior = "smooth", options?: { programmatic?: boolean }) => {
      scrollToIndex(activeIndex, behavior, options);
    },
    [activeIndex, scrollToIndex]
  );

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleScrollToActive = () => {
      const isLargeScreen = window.matchMedia("(min-width: 768px)").matches;
      scrollToActive(isLargeScreen ? "auto" : "smooth", {
        programmatic: !isLargeScreen,
      });
    };

    handleScrollToActive();

    window.addEventListener("resize", handleScrollToActive);
    return () => window.removeEventListener("resize", handleScrollToActive);
  }, [scrollToActive]);

  useEffect(() => {
    if (!hasHydrated || isDesktop) {
      return;
    }
    scrollToActive("smooth", { programmatic: true });
  }, [activeIndex, isDesktop, hasHydrated, scrollToActive]);

  const handleScroll = useCallback(() => {
    if (isDesktop || !carouselRef.current || programmaticScrollRef.current) return;

    if (scrollRafRef.current) {
      cancelAnimationFrame(scrollRafRef.current);
    }

    scrollRafRef.current = window.requestAnimationFrame(() => {
      const container = carouselRef.current;
      if (!container) return;

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
    });
  }, [activeIndex, isDesktop]);

  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current || HOME_SUCCESS_STORIES.length <= 1) {
      return;
    }

    autoplayRef.current = window.setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % HOME_SUCCESS_STORIES.length;
        scrollToIndex(nextIndex, "smooth", { programmatic: true });
        return nextIndex;
      });
    }, 5000);
  }, [scrollToIndex]);

  const scheduleAutoplayResume = useCallback(() => {
    if (resumeAutoplayTimeoutRef.current) {
      window.clearTimeout(resumeAutoplayTimeoutRef.current);
    }

    resumeAutoplayTimeoutRef.current = window.setTimeout(() => {
      startAutoplay();
    }, 6000);
  }, [startAutoplay]);

  const pauseAutoplay = useCallback(() => {
    clearAutoplay();
    scheduleAutoplayResume();
  }, [clearAutoplay, scheduleAutoplayResume]);

  React.useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    startAutoplay();

    return () => {
      clearAutoplay();
      if (resumeAutoplayTimeoutRef.current) {
        window.clearTimeout(resumeAutoplayTimeoutRef.current);
        resumeAutoplayTimeoutRef.current = null;
      }
    };
  }, [hasHydrated, startAutoplay, clearAutoplay]);

  React.useEffect(() => {
    return () => {
      if (scrollRafRef.current) {
        cancelAnimationFrame(scrollRafRef.current);
      }
      if (programmaticScrollTimeoutRef.current) {
        if (typeof window !== "undefined") {
          window.clearTimeout(programmaticScrollTimeoutRef.current);
        }
        programmaticScrollTimeoutRef.current = null;
        programmaticScrollRef.current = false;
      }
    };
  }, []);

  const storiesWithIndex = useMemo(
    () =>
      HOME_SUCCESS_STORIES.map((story, index) => ({
        story,
        originalIndex: index,
      })),
    []
  );

  const totalStories = storiesWithIndex.length;
  const prevIndex = (activeIndex - 1 + totalStories) % totalStories;
  const nextIndex = (activeIndex + 1) % totalStories;
  const dotCount = Math.min(3, totalStories);
  const dotTargets = useMemo(() => {
    if (dotCount === 0) {
      return [];
    }

    if (totalStories <= dotCount) {
      return Array.from({ length: dotCount }).map((_, idx) =>
        idx < totalStories ? idx : totalStories - 1
      );
    }

    return [prevIndex, activeIndex, nextIndex];
  }, [dotCount, totalStories, prevIndex, activeIndex, nextIndex]);
  const highlightSlot =
    totalStories <= dotCount || dotCount === 0
      ? null
      : activeIndex % dotCount;

  const useDesktopLayout = hasHydrated && isDesktop && totalStories > 2;

  const displayedStories = useMemo(() => {
    if (!useDesktopLayout) {
      return storiesWithIndex;
    }

    return [
      storiesWithIndex[prevIndex],
      storiesWithIndex[activeIndex],
      storiesWithIndex[nextIndex],
    ];
  }, [useDesktopLayout, storiesWithIndex, prevIndex, activeIndex, nextIndex]);

  if (!hasHydrated) {
    return (
      <section className="pt-0 pb-12 md:pb-16 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl h-[520px] rounded-[40px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(79,70,229,0.08)] flex items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="h-12 w-12 border-4 border-[#D1D5DB] border-t-[#572EEE] rounded-full animate-spin" />
                <p className="text-gray-600 font-medium">Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
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

        <div className="relative md:flex md:justify-center mt-6 sm:mt-8">

          <div className="relative w-full md:px-24 overflow-visible">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto md:overflow-visible md:justify-center md:items-stretch md:gap-8 mb-12 pb-4 w-full scroll-smooth px-4 md:px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:snap-x md:snap-mandatory"
              onScroll={handleScroll}
            >
              {displayedStories.map(({ story, originalIndex }, sliderIndex) => {
                const isActive = originalIndex === activeIndex;
                const offset = useDesktopLayout ? sliderIndex - 1 : 0;
                const distance = Math.abs(offset);
                const desktopScale = useDesktopLayout
                  ? offset === 0
                    ? 1.08
                    : 0.94
                  : 1;
                const desktopTranslateY = useDesktopLayout
                  ? offset === 0
                    ? 30
                    : 30
                  : 0;
                const desktopZ =
                  useDesktopLayout && offset === 0
                    ? 20
                    : useDesktopLayout && distance === 1
                    ? 10
                    : 0;

                return (
                  <div
                    key={story.id}
                    data-original-index={originalIndex}
                    className={cn(
                      "flex-shrink-0 transition-all duration-300 cursor-pointer w-full max-w-[390px] min-w-[85vw] sm:min-w-[340px] px-2 sm:px-0",
                      useDesktopLayout
                        ? isActive
                          ? "md:scale-[1.15] md:z-10 md:snap-center"
                          : "md:scale-100 md:z-0 md:blur-[1px] md:snap-center"
                        : ""
                    )}
                    style={
                      useDesktopLayout
                        ? {
                            transform: `translateY(${desktopTranslateY}px) scale(${desktopScale})`,
                            zIndex: desktopZ,
                            transition: "transform 0.45s ease, opacity 0.45s ease",
                          }
                        : undefined
                    }
                    onClick={() => {
                      pauseAutoplay();
                      setActiveIndex(originalIndex);
                    }}
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
                        className="mb-6 flex-1 flex items-center text-base"
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
          </div>
        </div>

        {dotCount > 0 && (
          <div className="flex justify-center gap-1">
            {dotTargets.map((targetIndex, slot) => {
              const isActive =
                totalStories <= dotCount
                  ? targetIndex === activeIndex
                  : slot === highlightSlot;

              return (
                <button
                  key={`story-dot-${slot}`}
                  onClick={() => {
                    if (targetIndex === undefined) {
                      return;
                    }
                    pauseAutoplay();
                    setActiveIndex(targetIndex);
                  }}
                  className="w-3 h-3 rounded-full transition-all"
                  style={styles.indicator(isActive)}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessStories;

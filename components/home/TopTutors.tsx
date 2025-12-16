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
import { GraduationCap, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { HOME_TOP_TUTORS } from "@/data/home";
import { colors, shadows, typography } from "@/theme";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const styles = {
  sectionHeading: typography.section.headingLg,
  sectionDescription: typography.section.descriptionLg,
  card: (isActive: boolean) =>
    ({
      borderRadius: "26px",
      boxShadow: isActive ? shadows.cardElevatedStrong : shadows.cardElevated,
      border: `1px solid rgba(147, 197, 253, 0.35)`,
      backgroundColor: colors.neutral.white,
    } as const),
  tutorName: typography.card.titleMd,
  badge: {
    color: colors.neutral.white,
  } as const,
  subjectChip: {
    ...typography.labels.md,
    justifyContent: "center",
  } as const,
  detailText: {
    ...typography.card.bodySm,
    color: colors.text.secondary,
  },
  primaryButton: {
    ...typography.button.secondary,
  } as const,
} as const;

const TopTutors: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Center card is active by default
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

  const tutorsWithIndex = useMemo(
    () =>
      HOME_TOP_TUTORS.map((tutor, index) => ({
        tutor,
        originalIndex: index,
      })),
    []
  );

  const totalTutors = tutorsWithIndex.length;
  const dotCount = Math.min(3, totalTutors);
  const prevIndex = (activeIndex - 1 + totalTutors) % totalTutors;
  const nextIndex = (activeIndex + 1) % totalTutors;
  const dotTargets = useMemo(() => {
    if (dotCount === 0) {
      return [];
    }

    if (totalTutors <= dotCount) {
      return Array.from({ length: dotCount }).map((_, idx) =>
        idx < totalTutors ? idx : totalTutors - 1
      );
    }

    return [prevIndex, activeIndex, nextIndex];
  }, [dotCount, totalTutors, prevIndex, activeIndex, nextIndex]);

  const highlightSlot =
    totalTutors <= dotCount || dotCount === 0
      ? null
      : activeIndex % dotCount;

  const useDesktopLayout = hasHydrated && isDesktop && totalTutors > 2;
  const shouldHideDesktopCarousel = isDesktop && !hasHydrated;

  const displayedTutors = useMemo(() => {
    if (!useDesktopLayout) {
      return tutorsWithIndex;
    }

    return [
      tutorsWithIndex[prevIndex],
      tutorsWithIndex[activeIndex],
      tutorsWithIndex[nextIndex],
    ];
  }, [useDesktopLayout, tutorsWithIndex, prevIndex, activeIndex, nextIndex]);

  const setActiveTutor = useCallback(
    (nextIndex: number | ((previousIndex: number) => number)) => {
      if (totalTutors === 0) {
        return;
      }

      setActiveIndex((prev) => {
        const rawNext =
          typeof nextIndex === "function" ? nextIndex(prev) : nextIndex;
        const normalized =
          ((rawNext % totalTutors) + totalTutors) % totalTutors;

        return normalized;
      });
    },
    [totalTutors]
  );

  const handleScroll = useCallback(() => {
    if (isDesktop || !carouselRef.current || programmaticScrollRef.current) return;

    if (scrollRafRef.current) {
      cancelAnimationFrame(scrollRafRef.current);
    }

    scrollRafRef.current = window.requestAnimationFrame(() => {
      const container = carouselRef.current;
      if (!container) {
        return;
      }

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
        setActiveTutor(closestIndex);
      }
    });
  }, [activeIndex, isDesktop, setActiveTutor]);

  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current || totalTutors <= 1) {
      return;
    }

    autoplayRef.current = window.setInterval(() => {
      setActiveTutor((prev) => {
        const nextIndex = (prev + 1) % totalTutors;
        scrollToIndex(nextIndex, "smooth", { programmatic: true });
        return nextIndex;
      });
    }, 5000);
  }, [scrollToIndex, setActiveTutor, totalTutors]);

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

  useEffect(() => {
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

  useEffect(() => {
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

  if (!hasHydrated) {
    return (
      <section className="pt-0 pb-12 md:pb-16 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl h-[520px] rounded-[40px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(79,70,229,0.08)] flex items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="h-12 w-12 border-4 border-[#D1D5DB] border-t-[#572EEE] rounded-full animate-spin" />
                <p className="text-gray-600 font-medium">
                  Loading...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-0 pb-10 md:pb-10 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-gray-900 mb-4" style={styles.sectionHeading}>
            Meet Our Top Tutors
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={styles.sectionDescription}
          >
            Learn from industry experts and certified professionals who are
            passionate about sharing their knowledge and helping you succeed.
          </p>
        </div>

        <div
          className={cn(
            "relative md:flex md:justify-center transition-opacity duration-300",
            shouldHideDesktopCarousel ? "md:opacity-0 md:pointer-events-none" : "md:opacity-100"
          )}
        >

          <div className="relative w-full md:px-24 overflow-visible">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto md:overflow-visible md:justify-center md:items-stretch md:gap-8 mb-6 pb-2 md:mb-12 md:pb-4 w-full scroll-smooth px-4 md:px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:snap-x md:snap-mandatory"
              onScroll={handleScroll}
            >
              {displayedTutors.map(({ tutor, originalIndex }, sliderIndex) => {
                const isActive = originalIndex === activeIndex;
                const offset = useDesktopLayout ? sliderIndex - 1 : 0;
              const distance = Math.abs(offset);
              const desktopScale = useDesktopLayout
                ? offset === 0
                  ? 1.08
                  : 0.92
                : 1;
              const desktopTranslateY = useDesktopLayout
                ? offset === 0
                  ? 20
                  : 30
                : 0;
              const desktopOpacity = useDesktopLayout ? 1 : 1;
              const desktopZ =
                useDesktopLayout && offset === 0 ? 20 : useDesktopLayout && distance === 1 ? 10 : 0;

              return (
                <div
                  key={tutor.id}
                  data-original-index={originalIndex}
                  className={cn(
                    "flex-shrink-0 transition-all duration-300 cursor-pointer w-full max-w-none min-w-[calc(100vw-3rem)] mx-auto sm:mx-0 sm:w-auto sm:min-w-[360px] sm:max-w-md md:snap-center md:min-w-[320px]",
                    "md:w-auto md:origin-center"
                  )}
                  style={
                    useDesktopLayout
                      ? {
                          transform: `translateY(${desktopTranslateY}px) scale(${desktopScale})`,
                          opacity: desktopOpacity,
                          zIndex: desktopZ,
                          transition: "transform 0.45s ease, opacity 0.45s ease",
                        }
                      : undefined
                  }
                  onClick={() => {
                    pauseAutoplay();
                    setActiveTutor(originalIndex);
                  }}
                >
                  <div
                    className={cn(
                      "bg-white relative overflow-hidden flex flex-col h-full transition-all duration-300",
                      useDesktopLayout
                        ? "md:rounded-[36px] md:shadow-[0_20px_60px_rgba(79,70,229,0.08)]"
                        : ""
                    )}
                    style={styles.card(isActive)}
                  >
                    <div className="relative w-full h-52 md:h-[220px] overflow-hidden flex-shrink-0 rounded-t-[28px]">
                      <ImageWithFallback
                        src={tutor.image || `/images/tutors/${tutor.id}.jpg`}
                        alt={tutor.name}
                        width={349}
                        height={256}
                        className="absolute inset-0 w-[103%] h-full object-cover transition-all duration-300"
                        fallback={
                          <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                            <span className="text-white text-4xl font-bold">
                              {tutor.name.charAt(0)}
                            </span>
                          </div>
                        }
                      />

                      <span
                        className="absolute top-4 right-4 text-sm font-semibold drop-shadow-lg"
                        style={styles.badge}
                      >
                        {tutor.badge}
                      </span>
                    </div>

                    <div
                      className="p-5 md:p-6 flex flex-col flex-1"
                      style={{ backgroundColor: colors.neutral.white }}
                    >
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h3
                          className="font-bold"
                          style={{
                            ...styles.tutorName,
                            color: colors.text.primary,
                          }}
                        >
                          {tutor.name}
                        </h3>
                        <StarRating rating={tutor.rating} size="md" />
                      </div>

                      <div
                        className="inline-flex items-center px-4 py-2 rounded-full mb-4"
                        style={{
                          backgroundColor:
                            tutor.subject === "Mathematics"
                              ? "#DBEAFE"
                              : tutor.subject === "Computer Science"
                              ? "#DCFCE7"
                              : tutor.subject === "Physics"
                              ? "#F3E8FF"
                              : tutor.subjectColor,
                          color: colors.text.primary,
                          ...styles.subjectChip,
                          maxWidth: "180px",
                        }}
                      >
                        {tutor.subject}
                      </div>

                      <div className="space-y-3 mb-6 flex-1">
                        <div className="flex flex-col items-center md:flex-row md:items-center gap-2 text-center md:text-left">
                          <GraduationCap className="w-5 h-5 md:mr-1 text-[#3B82F6]" />
                          <span style={styles.detailText}>{tutor.degree}</span>
                        </div>
                        <div className="flex flex-col items-center md:flex-row md:items-center gap-2 text-center md:text-left">
                          <Users className="w-5 h-5 md:mr-1 text-[#3B82F6]" />
                          <span style={styles.detailText}>
                            {tutor.students.toLocaleString()} Students
                          </span>
                        </div>
                        <div className="flex flex-col items-center md:flex-row md:items-center gap-2 text-center md:text-left">
                          <Clock className="w-5 h-5 md:mr-1 text-[#3B82F6]" />
                          <span style={styles.detailText}>
                            {tutor.experience}
                          </span>
                        </div>
                      </div>

                      <button
                        className="w-full py-4 px-4 rounded-lg font-medium text-white mt-auto bg-[#572EEE] hover:bg-[#3311B2] transition-colors"
                        style={styles.primaryButton}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        {dotCount > 0 && (
          <div className="flex justify-center gap-2 mt-2 md:mt-4">
            {dotTargets.map((targetIndex, slot) => {
              const isActive =
                totalTutors <= dotCount
                  ? targetIndex === activeIndex
                  : slot === highlightSlot;

              return (
                <button
                  key={`dot-${slot}`}
                  onClick={() => {
                    if (targetIndex === undefined) {
                      return;
                    }
                    pauseAutoplay();
                    setActiveTutor(targetIndex);
                  }}
                  className="w-3 h-3 rounded-full transition-all"
                  style={{
                    backgroundColor: isActive ? "#572EEE" : "#D1D5DB",
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default TopTutors;
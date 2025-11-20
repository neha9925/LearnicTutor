"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { cn } from "@/lib/utils";
import { colors, typography } from "@/theme";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : React.useEffect;

const styles = {
  sectionHeading: typography.section.headingLg,
  sectionDescription: typography.section.descriptionLg,
  memberName: typography.card.titleMd,
  memberTitle: {
    ...typography.card.bodySm,
    color: colors.brand.primarySofter,
    fontWeight: 600,
  } as const,
  memberQuote: {
    ...typography.card.bodySm,
    color: colors.text.secondary,
    fontStyle: "italic",
  } as const,
  indicator: (isActive: boolean) =>
    ({
      backgroundColor: isActive ? "#572EEE" : colors.neutral.gray300,
    }) as const,
} as const;

const teamMembers = [
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    title: "Mathematics Mentor",
    quote: "Empowering students through simplicity and clarity.",
    image: "/images/instructors/sarah.jpg",
  },
  {
    id: "david-chen",
    name: "David Chen",
    title: "Learning Strategist",
    quote: "Designing experiences that inspire curiosity.",
    image: "/images/instructors/david.jpg",
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    title: "Content Creator",
    quote: "Making complex concepts beautifully simple.",
    image: "/images/instructors/emily.jpg",
  },
  {
    id: "james-thompson",
    name: "James Thompson",
    title: "Innovation Lead",
    quote: "Building tomorrow's learning experiences today.",
    image: "/images/instructors/james.jpg",
  },
  {
    id: "michael-brown",
    name: "Michael Brown",
    title: "Science Educator",
    quote: "Inspiring the next generation of scientists and innovators.",
    image: "/images/instructors/michael.jpg",
  },
  {
    id: "lisa-wang",
    name: "Lisa Wang",
    title: "Language Specialist",
    quote: "Breaking down language barriers one lesson at a time.",
    image: "/images/instructors/lisa.jpg",
  },
  {
    id: "robert-taylor",
    name: "Robert Taylor",
    title: "Tech Mentor",
    quote: "Transforming complex tech into accessible learning paths.",
    image: "/images/instructors/robert.jpg",
  },
  {
    id: "amanda-johnson",
    name: "Amanda Johnson",
    title: "Creative Director",
    quote: "Blending creativity with education for engaging experiences.",
    image: "/images/instructors/amanda.jpg",
  },
  {
    id: "christopher-lee",
    name: "Christopher Lee",
    title: "Physics Expert",
    quote: "Making physics accessible and exciting for every learner.",
    image: "/images/instructors/christopher.jpg",
  },
  {
    id: "jennifer-martinez",
    name: "Jennifer Martinez",
    title: "History Professor",
    quote: "Bringing history to life through engaging storytelling.",
    image: "/images/instructors/jennifer.jpg",
  },
  {
    id: "william-anderson",
    name: "William Anderson",
    title: "Chemistry Mentor",
    quote: "Simplifying complex chemical concepts for better understanding.",
    image: "/images/instructors/william.jpg",
  },
  {
    id: "sophia-wright",
    name: "Sophia Wright",
    title: "Language Coach",
    quote: "Helping students master languages through immersive learning.",
    image: "/images/instructors/sophia.jpg",
  },
];

const TeamSection: React.FC = () => {
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
    if (autoplayRef.current || teamMembers.length <= 1) {
      return;
    }

    autoplayRef.current = window.setInterval(() => {
      setActiveIndex((prev) => {
        const cardsPerView = 4;
        const currentPage = Math.floor(prev / cardsPerView);
        const totalPages = Math.ceil(teamMembers.length / cardsPerView);
        const nextPage = (currentPage + 1) % totalPages;
        const nextIndex = nextPage * cardsPerView;
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

  const membersWithIndex = useMemo(
    () =>
      teamMembers.map((member, index) => ({
        member,
        originalIndex: index,
      })),
    []
  );

  const totalMembers = membersWithIndex.length;
  const cardsPerView = 4;
  const totalPages = Math.ceil(totalMembers / cardsPerView);
  const currentPage = Math.floor(activeIndex / cardsPerView);
  
  const dotTargets = useMemo(() => {
    return Array.from({ length: totalPages }).map((_, idx) => idx * cardsPerView);
  }, [totalPages, cardsPerView]);
  
  const highlightSlot = currentPage;

  const useDesktopLayout = hasHydrated && isDesktop;

  const displayedMembers = useMemo(() => {
    if (!useDesktopLayout) {
      return membersWithIndex;
    }

    // Show 4 cards at a time based on activeIndex
    const cardsPerView = 4;
    const startIndex = activeIndex;
    const endIndex = Math.min(startIndex + cardsPerView, totalMembers);
    
    // If we're near the end and can't show 4 cards, show the last 4
    if (endIndex - startIndex < cardsPerView && endIndex === totalMembers) {
      return membersWithIndex.slice(-cardsPerView);
    }
    
    return membersWithIndex.slice(startIndex, endIndex);
  }, [useDesktopLayout, membersWithIndex, activeIndex, totalMembers]);

  if (!hasHydrated) {
    return (
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
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
    <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-gray-900 mb-4" style={styles.sectionHeading}>
            Meet our top team
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={styles.sectionDescription}
          >
            Learn from industry experts and certified professionals who are passionate about sharing their knowledge and helping you succeed.
          </p>
        </div>

        <div className="relative md:flex md:justify-center">
          <div className="relative w-full overflow-hidden">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto md:overflow-hidden md:justify-center md:items-stretch md:gap-6 mb-12 pb-4 w-full scroll-smooth px-4 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:snap-x md:snap-mandatory"
              onScroll={handleScroll}
            >
              {displayedMembers.map(({ member, originalIndex }, sliderIndex) => {
                const isActive = originalIndex === activeIndex;

                return (
                  <div
                    key={member.id}
                    data-original-index={originalIndex}
                    className="flex-shrink-0 min-w-[280px] sm:min-w-[280px] md:min-w-0 px-2 sm:px-0 flex items-center justify-center"
                    style={{
                      height: "379px",
                    }}
                  >
                    <div 
                    className="bg-white text-center flex flex-col"
                    style={{
                      width: "280px",
                      height: "379px",
                      borderRadius: "17.47px",
                      background: "#FFFFFF",
                      boxShadow: "0px 4.37px 6.55px 0px #0000001A",
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                      <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 flex-shrink-0 shadow-md" style={{ borderColor: colors.brand.primarySofter || "#5636FF" }}>
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                          fallback={
                            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
                              <span className="text-white text-3xl font-bold">
                                {member.name.charAt(0)}
                              </span>
                            </div>
                          }
                        />
                      </div>
                      <h3
                        className="text-gray-900 mb-3 font-bold flex-shrink-0"
                        style={{
                          ...styles.memberName,
                          fontSize: "24px",
                          fontWeight: 700,
                          color: "#1F2937",
                        }}
                      >
                        {member.name}
                      </h3>
                      <p 
                        className="mb-6 flex-shrink-0 font-bold" 
                        style={{
                          ...styles.memberTitle,
                          fontSize: "18px",
                          fontWeight: 700,
                          color: colors.brand.primarySofter || "#5636FF",
                        }}
                      >
                        {member.title}
                      </p>
                      <p
                        className="text-gray-500 leading-relaxed flex-shrink-0 text-center"
                        style={{
                          ...styles.memberQuote,
                          fontSize: "16px",
                          fontWeight: 400,
                          color: "#6B7280",
                          fontStyle: "normal",
                        }}
                      >
                        &ldquo;{member.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {dotTargets.length > 0 && (
          <div className="flex justify-center gap-1">
            {dotTargets.map((targetIndex, slot) => {
              const isActive = slot === highlightSlot;

              return (
                <button
                  key={`team-dot-${slot}`}
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

export default TeamSection;

"use client";

import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useLayoutEffect,
  useMemo,
} from "react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { Check, GraduationCap, Infinity, Trophy, Award, Users, Star, Clock, Sparkles } from "lucide-react";
import type { TutorDetail as TutorDetailType } from "@/data/tutorDetails";
import { liveClassCards } from "@/data/liveClassesList";
import { colors, gradients, shadows, typography } from "@/theme";
import { cn } from "@/lib/utils";

interface TutorDetailProps {
  tutor: TutorDetailType;
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

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
    } as const),
  quote: (isActive: boolean) =>
    ({
      ...typography.card.bodySm,
      color: isActive ? colors.text.light : colors.text.secondary,
      display: "flex",
      alignItems: "center",
      lineHeight: "24px",
    } as const),
  name: (isActive: boolean) =>
    ({
      ...typography.card.titleMd,
      color: isActive ? colors.text.light : colors.text.primary,
      textAlign: "center" as const,
    } as const),
  role: (isActive: boolean) =>
    ({
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      color: isActive ? "rgba(255, 255, 255, 0.9)" : colors.text.tertiary,
      textAlign: "center" as const,
    } as const),
  indicator: (isActive: boolean) =>
    ({
      backgroundColor: isActive ? "#572EEE" : colors.neutral.gray300,
    } as const),
} as const;

const TutorDetail: React.FC<TutorDetailProps> = ({ tutor }) => {
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
    if (autoplayRef.current || tutor.reviewList.length <= 1) {
      return;
    }

    autoplayRef.current = window.setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % tutor.reviewList.length;
        scrollToIndex(nextIndex, "smooth", { programmatic: true });
        return nextIndex;
      });
    }, 5000);
  }, [scrollToIndex, tutor.reviewList.length]);

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

  const reviewsWithIndex = useMemo(
    () =>
      tutor.reviewList.map((review: any, index: number) => ({
        review,
        originalIndex: index,
      })),
    [tutor.reviewList]
  );

  const totalReviews = reviewsWithIndex.length;
  const prevIndex = (activeIndex - 1 + totalReviews) % totalReviews;
  const nextIndex = (activeIndex + 1) % totalReviews;
  const dotCount = Math.min(3, totalReviews);
  const dotTargets = useMemo(() => {
    if (dotCount === 0) {
      return [];
    }

    if (totalReviews <= dotCount) {
      return Array.from({ length: dotCount }).map((_, idx) =>
        idx < totalReviews ? idx : totalReviews - 1
      );
    }

    return [prevIndex, activeIndex, nextIndex];
  }, [dotCount, totalReviews, prevIndex, activeIndex, nextIndex]);
  const highlightSlot =
    totalReviews <= dotCount || dotCount === 0
      ? null
      : activeIndex % dotCount;

  const useDesktopLayout = hasHydrated && isDesktop && totalReviews > 2;

  const displayedReviews = useMemo(() => {
    if (!useDesktopLayout) {
      return reviewsWithIndex;
    }

    return [
      reviewsWithIndex[prevIndex],
      reviewsWithIndex[activeIndex],
      reviewsWithIndex[nextIndex],
    ];
  }, [useDesktopLayout, reviewsWithIndex, prevIndex, activeIndex, nextIndex]);

  return (
    <div>
      {/* Instructor Profile Section */}
      <section className="py-12 md:py-16 lg:py-12">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={tutor.image}
                      alt={tutor.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      fallback={
                        <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                          <span className="text-white text-4xl font-bold">
                            {tutor.name.charAt(0)}
                          </span>
                        </div>
                      }
                    />
                  </div>
                  {/* Green Checkmark Badge */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 min-w-0">
                  <h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-gray-900"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    }}
                  >
                    {tutor.name}
                  </h1>
                  <p
                    className="text-base md:text-lg lg:text-xl text-[#572EEE] mb-4"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    }}
                  >
                    {tutor.specialization}
                  </p>

                  {/* Rating & Students */}
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4">
                    <div className="flex items-center gap-2">
                      <StarRating rating={tutor.rating} size="md" />
                      <span
                        className="text-gray-900"
                        style={{
                          fontFamily: "var(--font-poppins), Poppins, sans-serif",
                          fontSize: "16px",
                          fontWeight: 400,
                        }}
                      >
                        {tutor.rating} ({tutor.reviews >= 1000 ? `${(tutor.reviews / 1000).toFixed(1)}k` : tutor.reviews.toLocaleString()} Reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-700" />
                      <span
                        className="text-gray-900"
                        style={{
                          fontFamily: "var(--font-poppins), Poppins, sans-serif",
                          fontSize: "16px",
                          fontWeight: 400,
                        }}
                      >
                        {tutor.students.toLocaleString()} Students
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                  >
                    {tutor.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About, Education & Achievements Combined Card */}
      <section className="py-8 md:py-12">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100">
              {/* About Section */}
              <div className="mb-8">
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6 text-gray-900"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  About {tutor.name.split(" ")[0]}
                </h2>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  {tutor.about}
                </p>
              </div>

              {/* Education & Qualifications */}
              <div className="mb-8">
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6 text-gray-900"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  Education & Qualifications
                </h2>
                <div className="space-y-4">
                  {tutor.education.map((edu) => (
                    <div
                      key={edu.id}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#F3E8FF] flex items-center justify-center flex-shrink-0">
                        {edu.icon === "graduation" ? (
                          <GraduationCap className="w-6 h-6 text-[#572EEE]" />
                        ) : (
                          <Award className="w-6 h-6 text-[#572EEE]" />
                        )}
                      </div>
                      <div>
                        <h3
                          className="font-bold text-lg mb-1 text-gray-900"
                          style={{
                            fontFamily: "var(--font-poppins), Poppins, sans-serif",
                          }}
                        >
                          {edu.degree}
                        </h3>
                        <p
                          className="text-gray-600"
                          style={{
                            fontFamily: "var(--font-poppins), Poppins, sans-serif",
                            fontSize: "16px",
                          }}
                        >
                          {edu.university} • {edu.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements & Certifications */}
              <div className="mb-8">
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6 text-gray-900"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  Achievements & Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tutor.achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="rounded-lg p-6 relative"
                      style={{
                        background: "linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)",
                      }}
                    >
                      {achievement.icon === "trophy" ? (
                        <Trophy className="w-6 h-6 text-blue-600 absolute top-4 left-4" />
                      ) : (
                        <Sparkles className="w-6 h-6 text-blue-600 absolute top-4 left-4" />
                      )}
                      <div className="pt-8">
                        <h3
                          className="font-bold text-lg mb-1 text-gray-900"
                          style={{
                            fontFamily: "var(--font-poppins), Poppins, sans-serif",
                          }}
                        >
                          {achievement.title}
                        </h3>
                        <p
                          className="text-gray-600"
                          style={{
                            fontFamily: "var(--font-poppins), Poppins, sans-serif",
                            fontSize: "16px",
                          }}
                        >
                          {achievement.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Courses */}
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6 text-gray-900"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  Available Courses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {liveClassCards.slice(0, 3).map((course) => (
                    <Link
                      key={course.id}
                      href={course.href || `/live-classes/${course.id}`}
                      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 relative hover:shadow-lg transition-shadow"
                    >
                      <div className="relative w-full h-48 overflow-hidden">
                        <ImageWithFallback
                          src={course.image}
                          alt={course.title}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover"
                          fallback={
                            <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400" />
                          }
                        />
                        {course.tag && (
                          <Badge
                            variant="custom"
                            position="top-right"
                            style={{
                              backgroundColor: course.tag === "CBSE" ? "#10B981" : course.tag === "ICSE" ? "#F97316" : "#8B5CF6",
                              color: "#FFFFFF",
                              fontSize: "12px",
                              fontWeight: 500,
                              padding: "3px 12px",
                              borderRadius: "8px",
                            }}
                          >
                            {course.tag}
                          </Badge>
                        )}
                      </div>
                      <div className="p-4">
                        <h3
                          className="font-bold text-lg mb-2 text-gray-900"
                          style={{
                            fontFamily: "var(--font-poppins), Poppins, sans-serif",
                          }}
                        >
                          {course.title}
                        </h3>
                        <p
                          className="text-sm text-gray-600 mb-4 line-clamp-2"
                          style={{
                            fontFamily: "var(--font-poppins), Poppins, sans-serif",
                          }}
                        >
                          {course.description}
                        </p>
                        
                        {/* Details Section */}
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span
                              style={{
                                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                              }}
                            >
                              {course.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span
                              style={{
                                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                              }}
                            >
                              {course.students.toLocaleString()} enrolled
                            </span>
                          </div>
                        </div>

                        {/* Instructor Section */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <ImageWithFallback
                              src={course.instructor.image}
                              alt={course.instructor.name}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                              fallback={
                                <div className="w-full h-full bg-gray-300" />
                              }
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="font-bold text-sm text-gray-900 truncate"
                              style={{
                                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                              }}
                            >
                              {course.instructor.name}
                            </p>
                            {course.instructor.expertise && (
                              <p
                                className="text-xs text-gray-600 truncate"
                                style={{
                                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                                }}
                              >
                                {course.instructor.expertise}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Rating */}
                        {/* <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span
                            className="text-sm font-medium text-gray-900"
                            style={{
                              fontFamily: "var(--font-poppins), Poppins, sans-serif",
                            }}
                          >
                            {course.rating}
                          </span>
                        </div> */}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="py-8 md:py-12">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
          <div className="text-center mb-8">
            <h2
              className="text-gray-900 mb-4"
              style={styles.sectionHeading}
            >
              Student Review
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={styles.sectionDescription}
            >
              Join thousands of learners who have transformed their careers
            </p>
          </div>

          {!hasHydrated ? (
            <div className="flex justify-center">
              <div className="w-full max-w-5xl h-[520px] rounded-[40px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(79,70,229,0.08)] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="h-12 w-12 border-4 border-[#D1D5DB] border-t-[#572EEE] rounded-full animate-spin" />
                  <p className="text-gray-600 font-medium">Loading...</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="relative md:flex md:justify-center">
                <div className="relative w-full md:px-24 overflow-visible">
                  <div
                    ref={carouselRef}
                    className="flex gap-4 overflow-x-auto md:overflow-visible md:justify-center md:items-stretch md:gap-8 mb-12 pb-4 w-full scroll-smooth px-4 md:px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:snap-x md:snap-mandatory"
                    onScroll={handleScroll}
                  >
                    {displayedReviews.map(({ review, originalIndex }: { review: any; originalIndex: number }, sliderIndex: number) => {
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
                          key={review.id}
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
                              isActive ? "" : "bg-white"
                            )}
                            style={styles.card(isActive, true)}
                          >
                            <div className="flex items-center justify-center gap-1 mb-6">
                              <StarRating rating={review.rating} size="md" />
                            </div>

                            <p
                              className="mb-6 flex-1 flex items-center text-base"
                              style={styles.quote(isActive)}
                            >
                              &ldquo;{review.quote}&rdquo;
                            </p>

                            <div className="mb-4">
                              <ImageWithFallback
                                src={review.image || `/images/students/${review.id}.jpg`}
                                alt={review.name}
                                width={80}
                                height={80}
                                className="w-20 h-20 rounded-full object-cover mx-auto"
                                fallback={
                                  <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mx-auto">
                                    <span className="text-gray-600 text-2xl font-bold">
                                      {review.name.charAt(0)}
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
                                {review.name}
                              </p>
                              <p
                                className="text-sm"
                                style={styles.role(isActive)}
                              >
                                {review.role}
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
                      totalReviews <= dotCount
                        ? targetIndex === activeIndex
                        : slot === highlightSlot;

                    return (
                      <button
                        key={`review-dot-${slot}`}
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
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default TutorDetail;


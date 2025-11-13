"use client";

import React, {
  useCallback,
  useEffect,
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
    backgroundColor: "rgba(79, 70, 229, 0.9)",
    color: colors.text.light,
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
  statHighlight: {
    color: colors.utility.infoMuted,
  } as const,
} as const;

const TopTutors: React.FC = () => {
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
      setActiveIndex((prev) => (prev + 1) % HOME_TOP_TUTORS.length);
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

  const tutorsWithIndex = useMemo(
    () =>
      HOME_TOP_TUTORS.map((tutor, index) => ({
        tutor,
        originalIndex: index,
      })),
    []
  );

  const arrangedTutors = useMemo(() => {
    const activeTutor = tutorsWithIndex.find(
      (entry) => entry.originalIndex === activeIndex
    );

    if (!activeTutor) {
      return tutorsWithIndex;
    }

    const others = tutorsWithIndex.filter(
      (entry) => entry.originalIndex !== activeIndex
    );

    const centerPosition = Math.floor(tutorsWithIndex.length / 2);
    const ordered = [...others];
    ordered.splice(Math.min(centerPosition, ordered.length), 0, activeTutor);

    return ordered;
  }, [activeIndex, tutorsWithIndex]);

  const displayedTutors = isDesktop ? arrangedTutors : tutorsWithIndex;

  return (
    <section className="pt-0 pb-12 md:pb-16 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="text-center mb-12">
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
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto md:overflow-visible md:justify-center md:items-stretch md:gap-8 mb-12 pb-4 w-full snap-x snap-mandatory px-4 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          onScroll={handleScroll}
        >
          {displayedTutors.map(({ tutor, originalIndex }) => {
            const isActive = originalIndex === activeIndex;

            return (
              <div
                key={tutor.id}
                data-original-index={originalIndex}
                className={cn(
                  "flex-shrink-0 transition-all duration-300 cursor-pointer w-full max-w-none min-w-[calc(100vw-3rem)] mx-auto sm:mx-0 sm:w-auto sm:min-w-[360px] sm:max-w-md snap-center md:min-w-0",
                  "md:w-auto md:origin-center",
                  isActive ? "md:z-10 md:scale-110" : "md:z-0 md:scale-100"
                )}
                onClick={() => setActiveIndex(originalIndex)}
              >
                <div
                  className="bg-white relative overflow-hidden flex flex-col h-full"
                  style={styles.card(isActive)}
                >
                  <div className="relative w-full h-64 overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={tutor.image || `/images/tutors/${tutor.id}.jpg`}
                      alt={tutor.name}
                      width={349}
                      height={256}
                      className="w-full h-full object-cover"
                      fallback={
                        <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                          <span className="text-white text-4xl font-bold">
                            {tutor.name.charAt(0)}
                          </span>
                        </div>
                      }
                    />

                    <div
                      className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-semibold"
                      style={styles.badge}
                    >
                      {tutor.badge}
                    </div>
                  </div>

                  <div
                    className="p-6 flex flex-col flex-1"
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
                      <StarRating rating={tutor.rating} size="sm" />
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

        <div className="flex justify-center gap-2 mt-4 md:mt-0">
          {HOME_TOP_TUTORS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="w-3 h-3 rounded-full transition-all"
              style={{
                backgroundColor: index === activeIndex ? "#572EEE" : "#D1D5DB",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopTutors;
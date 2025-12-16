"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { MdOutlineExplore } from "react-icons/md";
import Button from "@/components/ui/Button";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { HOME_HERO_SLIDES } from "@/data/home";
import { colors, gradients, textEffects, typography } from "@/theme";
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const transitionTimeoutRef = useRef<number | null>(null);
  const settleTimeoutRef = useRef<number | null>(null);

  const activeSlide = useMemo(
    () => HOME_HERO_SLIDES[activeIndex],
    [activeIndex]
  );

  const startTransition = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex || isFading) {
        return;
      }

      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
      if (settleTimeoutRef.current) {
        window.clearTimeout(settleTimeoutRef.current);
      }

      setIsFading(true);
      transitionTimeoutRef.current = window.setTimeout(() => {
        setActiveIndex(nextIndex);
        settleTimeoutRef.current = window.setTimeout(() => {
          setIsFading(false);
        }, 150);
      }, 150);
    },
    [activeIndex, isFading]
  );

  const goToNextSlide = useCallback(() => {
    const nextIndex = (activeIndex + 1) % HOME_HERO_SLIDES.length;
    startTransition(nextIndex);
  }, [activeIndex, startTransition]);

  useEffect(() => {
    if (isHovered) return;

    const timer = window.setInterval(() => {
      goToNextSlide();
    }, 15000);

    return () => window.clearInterval(timer);
  }, [isHovered, goToNextSlide]);

  useEffect(
    () => () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
      if (settleTimeoutRef.current) {
        window.clearTimeout(settleTimeoutRef.current);
      }
    },
    []
  );

  const transitionClass = cn(
    "transition-opacity duration-500",
    isFading ? "opacity-0" : "opacity-100"
  );

  return (
    <section
      className="pt-12 pb-10 md:pt-6 md:pb-16 lg:pt-10 lg:pb-20"
      style={{
        background:
          "linear-gradient(135deg, #F4F1FF 0%, #FFFFFF 35.36%, #FFF3E6 70.71%)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
            transitionClass
          )}
        >
          <div className="text-center lg:text-left">
            <h1 className="text-gray-900 mb-6" style={typography.hero.heading}>
              {activeSlide.title}{" "}
              <span
                style={{
                  ...textEffects.gradientBrand,
                }}
              >
                {activeSlide.highlight}
              </span>{" "}
              {activeSlide.suffix}
            </h1>
            <p
              className="text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              style={typography.hero.description}
            >
              {activeSlide.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/videos" className="w-full sm:w-auto">
                <Button
                  type="button"
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-[230px] min-h-[64px] flex items-center justify-center gap-2 rounded-xl text-white shadow-lg bg-[#572EEE] hover:bg-[#3311B2] transition-colors px-8 py-5"
                  style={{
                    ...typography.button.primary,
                  }}
                >
                  <Play className="w-4 h-4 text-white" fill="currentColor" /> Start Learning
                </Button>
              </Link>
              <Link href="/live-classes" className="w-full sm:w-auto">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-[230px] min-h-[64px] flex items-center justify-center gap-2 rounded-xl border-2 border-[#F48C06] text-[#F48C06] hover:bg-[#FDA647] hover:text-white hover:border-[#FDA647] transition-colors px-8 py-5"
                  style={{
                    ...typography.button.primary,
                    textAlign: "center",
                  }}
                >
                  <MdOutlineExplore className="w-5 h-5 pointer-events-none select-none" />
                  Explore Courses
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-[420px] mx-auto lg:mx-0 gap-y-4 sm:gap-y-0">
              {activeSlide.stats.map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div
                    className="mb-0.5"
                    style={{
                      ...typography.hero.statValue,
                      ...(index === 0 || index === 2
                        ? { color: "#572EEE" }
                        : index === 1
                        ? { color: "#FC921C" }
                        : {}),
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-gray-600"
                    style={typography.hero.statLabel}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start gap-3 mt-10">
              {HOME_HERO_SLIDES.map((slide, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => startTransition(index)}
                    className={`transition-all rounded-full ${
                      isActive ? "w-3 h-3 bg-[#572EEE]" : "w-3 h-3 bg-gray-300"
                    }`}
                    aria-label={`Go to ${slide.highlight}`}
                  />
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex justify-end w-full">
            <div className="relative w-full max-w-[640px] translate-x-12 xl:translate-x-16">
              <div className="relative pt-[78%] overflow-hidden">
                <ImageWithFallback
                  key={activeSlide.image}
                  src={activeSlide.image}
                  alt={activeSlide.highlight}
                  width={720}
                  height={500}
                  priority
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-[10px] right-[-14vw] w-[48vw] h-[160px] bg-[#FDA647] rounded-l-full shadow-[0px_26px_45px_rgba(247,148,30,0.35)] -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

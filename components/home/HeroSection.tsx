"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
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

  const sharedButtonStyle = useMemo(
    () => ({
      minWidth: "220px",
      height: "56px",
      padding: "16px 28px",
      borderRadius: "10px"
    }),
    []
  );

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
      className="py-12 md:py-20 lg:py-24"
      style={{
        background: "linear-gradient(135deg, #F4F1FF 0%, #FFFFFF 35.36%, #FFF3E6 70.71%)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center", transitionClass)}>
          
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
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full text-white shadow-lg"
                  style={{
                    ...typography.button.primary,
                    ...sharedButtonStyle,
                    backgroundColor: "#572EEE",
                  }}
                >
                  <Play className="w-4 h-4" /> Start Learning
                </Button>
              </Link>
              <Link href="/live-classes" className="w-full sm:w-auto">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border-2"
                  style={{
                    ...typography.button.primary,
                    ...sharedButtonStyle,
                    borderColor: colors.brand.secondaryDark,
                    color: colors.brand.secondaryDark,
                    textAlign: "center",
                  }}
                >
                  <ArrowRight className="w-4 h-4" /> Explore Courses
                </Button>
              </Link>
            </div>

            
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              {activeSlide.stats.map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div
                    className="mb-1"
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
                  <div className="text-gray-600" style={typography.hero.statLabel}>
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
                    className="h-3 rounded-full transition-all"
                    style={{
                      width: isActive ? "28px" : "12px",
                      background: isActive ? "#572EEE" : colors.brand.primaryTintLight,
                    }}
                    aria-label={`Go to ${slide.highlight}`}
                  />
                );
              })}
            </div>
          </div>

          
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                key={activeSlide.image}
                src={activeSlide.image}
                alt={activeSlide.highlight}
                width={720}
                height={500}
                priority
                className="w-full h-full object-cover rounded-2xl transition-opacity duration-500"
                fallback={
                  <div className="w-full h-full bg-gradient-to-br from-[#6B47ED] to-[#8F57FF] flex items-center justify-center text-white text-4xl font-bold">
                    {activeSlide.highlight}
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


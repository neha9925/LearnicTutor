"use client";

import React, { useState } from "react";
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
    }) as const,
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
    backgroundColor: colors.brand.primarySoft,
    color: colors.text.light,
  } as const,
  statHighlight: {
    color: colors.utility.infoMuted,
  } as const,
} as const;

const TopTutors: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Center card is active by default

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-gray-900 mb-4"
            style={styles.sectionHeading}
          >
            Meet Our Top Tutors
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={styles.sectionDescription}
          >
            Learn from industry experts and certified professionals who are passionate about sharing their knowledge and helping you succeed.
          </p>
        </div>

        
        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-end gap-6 md:gap-8 mb-12 pb-4 md:min-h-[620px]">
          {HOME_TOP_TUTORS.map((tutor, index) => {
            const isActive = index === activeIndex;
            
            return (
              <div
                key={tutor.id}
                className={cn(
                  "flex-shrink-0 transition-all duration-300 cursor-pointer w-full max-w-[360px]",
                  "md:w-[360px]",
                  isActive ? "md:translate-y-0 md:z-10" : "md:translate-y-6 md:z-0"
                )}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className="bg-white relative overflow-hidden flex flex-col h-full md:h-[570px]"
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
                          <span className="text-white text-4xl font-bold">{tutor.name.charAt(0)}</span>
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

                  
                  <div className="p-6 flex flex-col flex-1" style={{ backgroundColor: colors.neutral.white }}>
                    
                    <h3
                      className="font-bold mb-2"
                      style={{ ...styles.tutorName, color: colors.text.primary }}
                    >
                      {tutor.name}
                    </h3>

                    
                    <div className="flex items-center gap-1 mb-3">
                      <StarRating rating={tutor.rating} size="sm" />
                    </div>

                    
                    <div
                      className="inline-flex items-center px-4 py-2 rounded-full mb-4"
                      style={{
                        backgroundColor: tutor.subjectColor,
                        color: colors.text.light,
                        ...styles.subjectChip,
                        maxWidth: "180px",
                      }}
                    >
                      {tutor.subject}
                    </div>

                    
                    <div className="space-y-3 mb-6 flex-1">
                    <div className="flex flex-col items-center md:flex-row md:items-center gap-2 text-center md:text-left">
                      <GraduationCap className="w-5 h-5 md:mr-1 text-[#3B82F6]" />
                      <span
                        style={styles.detailText}
                      >
                        {tutor.degree}
                      </span>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:items-center gap-2 text-center md:text-left">
                      <Users className="w-5 h-5 md:mr-1 text-[#3B82F6]" />
                      <span
                        style={styles.detailText}
                      >
                        {tutor.students.toLocaleString()} Students
                      </span>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:items-center gap-2 text-center md:text-left">
                      <Clock className="w-5 h-5 md:mr-1 text-[#3B82F6]" />
                      <span
                        style={styles.detailText}
                      >
                        {tutor.experience}
                      </span>
                    </div>
                    </div>

                    
                    <button
                      className="w-full py-3 px-4 rounded-lg font-medium text-white mt-auto"
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

        
        <div className="hidden md:flex justify-center gap-2">
          {HOME_TOP_TUTORS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="w-3 h-3 rounded-full transition-all"
              style={{
                backgroundColor: index === activeIndex ? '#9333EA' : '#D1D5DB',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopTutors;

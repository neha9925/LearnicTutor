"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Check, User, Handshake } from "lucide-react";
import {
  JOIN_SECTION_COORDINATOR_FEATURES,
  JOIN_SECTION_TUTOR_FEATURES,
} from "@/data/home";
import { colors, radii, typography } from "@/theme";

const tutorAccentColor = "#FC921C";
const coordinatorAccentColor = "#572EEE";

const styles = {
  heading: {
    ...typography.section.headingLg,
    color: "#572EEE",
    lineHeight: "120%",
  },
  description: {
    ...typography.section.descriptionLg,
    color: colors.text.secondary,
    textAlign: "inherit" as const,
  },
  card: {
    borderRadius: "24px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    boxShadow: "0px 4px 11.9px 0px rgba(209, 209, 209, 0.25)",
    opacity: 1,
  },
  cardTitle: {
    ...typography.card.titleMd,
    color: colors.text.primary,
  },
  cardBody: {
    ...typography.card.bodySm,
    color: colors.text.secondary,
  },
  featureText: {
    ...typography.card.bodySm,
    color: colors.text.secondary,
  },
  primaryButton: {
    ...typography.button.primary,
    color: colors.text.light,
    textAlign: "center" as const,
  } as const,
  primaryButtonWithBg: (backgroundColor: string) =>
    ({
      ...typography.button.primary,
      backgroundColor,
      color: colors.text.light,
      textAlign: "center" as const,
    }) as const,
} as const;

const JoinSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-10xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-8 xl:gap-12 items-center">
          
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-3 text-center lg:text-left mx-auto lg:mx-0 w-full lg:max-w-xl">
            <h2
              className="text-gray-900"
              style={styles.heading}
            >
              Join the World of Seamless
              <span style={{ display: 'block' }}>Learning</span>
            </h2>
            <p
              className="text-gray-600"
              style={styles.description}
            >
              Whether you&apos;re here to <span style={{ fontWeight: 600 }}>teach or learn</span> — our platform empowers your journey.
            </p>
          </div>

          
          <div className="flex flex-col md:flex-row lg:flex-row gap-3 sm:gap-4 lg:gap-3 xl:gap-4 items-stretch justify-center lg:justify-start w-full">
            
            <div className="bg-white p-5 sm:p-6 lg:p-8 relative overflow-hidden flex flex-col w-full md:flex-1 lg:flex-1 lg:flex-basis-0 lg:min-w-0 max-w-md mx-auto md:mx-0 lg:mx-0 lg:max-w-[400px] xl:max-w-none rounded-3xl" style={styles.card}>
              
              <div
                className="absolute top-0 right-0 w-20 h-20"
                style={{
                  background: "linear-gradient(135deg, #FFEDD5 0%, #FED7AA 70.71%)",
                  borderRadius: "0 0 0 100%",
                }}
              />
              
              
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 relative z-10"
                style={{ backgroundColor: tutorAccentColor }}
              >
                <User className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>

              
              <h3
                className="font-bold mb-3 sm:mb-4 lg:mb-4 relative z-10"
                style={styles.cardTitle}
              >
                Become a Tutor
              </h3>

              
              <p
                className="mb-4 sm:mb-5 lg:mb-5 relative z-10"
                style={styles.cardBody}
              >
                Teach millions, build your brand, and earn with flexible teaching hours on our global platform.
              </p>

              
              <ul className="space-y-2 sm:space-y-3 lg:space-y-3 mb-4 sm:mb-5 lg:mb-5 relative z-10">
                {JOIN_SECTION_TUTOR_FEATURES.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: tutorAccentColor }}
                    />
                    <span
                      style={styles.featureText}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              
              <button
                onClick={() => router.push("/tutor-dashboard")}
                className="w-full py-3 sm:py-4 lg:py-4 px-4 rounded-lg font-medium text-white relative z-10 mt-auto bg-[#FC921C] hover:bg-[#D47914] transition-colors text-sm sm:text-base lg:text-base"
                style={styles.primaryButton}
              >
                Start Teaching
              </button>
            </div>

            
            <div className="bg-white p-5 sm:p-6 lg:p-8 relative overflow-hidden flex flex-col w-full md:flex-1 lg:flex-1 lg:flex-basis-0 lg:min-w-0 max-w-md mx-auto md:mx-0 lg:mx-0 lg:max-w-[400px] xl:max-w-none rounded-3xl" style={styles.card}>
              
              <div
                className="absolute top-0 right-0 w-20 h-20"
                style={{
                  background: "linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 70.71%)",
                  borderRadius: "0 0 0 100%",
                }}
              />
              
              
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 relative z-10"
                style={{ backgroundColor: coordinatorAccentColor }}
              >
                <Handshake className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>

              
              <h3
                className="font-bold mb-3 sm:mb-4 lg:mb-4 relative z-10"
                style={styles.cardTitle}
              >
                Become a Coordinator
              </h3>

              
              <p
                className="mb-4 sm:mb-5 lg:mb-5 relative z-10"
                style={styles.cardBody}
              >
                Refer students to courses and earn commission — be the bridge between learners & tutors.
              </p>

              
              <ul className="space-y-2 sm:space-y-3 lg:space-y-3 mb-4 sm:mb-5 lg:mb-5 relative z-10">
                {JOIN_SECTION_COORDINATOR_FEATURES.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <feature.icon
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: coordinatorAccentColor }}
                    />
                    <span
                      style={styles.featureText}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              
              <button
                onClick={() => router.push("/coordinator-dashboard")}
                className="w-full py-3 sm:py-4 lg:py-4 px-4 rounded-lg font-medium text-white relative z-10 mt-auto bg-[#572EEE] hover:bg-[#3311B2] transition-colors text-sm sm:text-base lg:text-base"
                style={styles.primaryButton}
              >
                Become a Coordinator
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;

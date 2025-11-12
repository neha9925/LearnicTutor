"use client";

import React from "react";
import { Check, User, Handshake } from "lucide-react";
import {
  JOIN_SECTION_COORDINATOR_FEATURES,
  JOIN_SECTION_TUTOR_FEATURES,
} from "@/data/home";
import { colors, radii, typography } from "@/theme";

const styles = {
  heading: {
    ...typography.section.headingLg,
    color: "#572EEE",
    lineHeight: "120%",
    textAlign: "left" as const,
  },
  description: {
    ...typography.section.descriptionLg,
    color: colors.text.secondary,
    textAlign: "left" as const,
  },
  card: {
    borderRadius: "24px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    boxShadow: "0px 4px 11.9px 0px rgba(209, 209, 209, 0.25)",
    width: "363px",
    height: "491px",
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
  primaryButton: (backgroundColor: string) =>
    ({
      ...typography.button.primary,
      backgroundColor,
      color: colors.text.light,
      textAlign: "center" as const,
    }) as const,
} as const;

const JoinSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div
            className="flex flex-col gap-3 text-center lg:text-left mx-auto lg:mx-0 w-full max-w-[502px]"
          >
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

          
          <div
            className="flex flex-col sm:flex-row gap-6 lg:gap-10 items-center justify-center lg:justify-end"
          >
            
            <div
              className="bg-white p-6 relative overflow-hidden flex flex-col"
              style={styles.card}
            >
              
              <div
                className="absolute top-0 right-0 w-24 h-24"
                style={{
                  backgroundColor: colors.brand.orangeSoft,
                  borderRadius: '0 0 0 100%',
                  clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                }}
              />
              
              
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-7 relative z-10"
                style={{ backgroundColor: colors.brand.secondary }}
              >
                <User className="w-8 h-8 text-white" />
              </div>

              
              <h3
                className="font-bold mb-5 relative z-10"
                style={styles.cardTitle}
              >
                Become a Tutor
              </h3>

              
              <p
                className="mb-7 relative z-10"
                style={styles.cardBody}
              >
                Teach millions, build your brand, and earn with flexible teaching hours on our global platform.
              </p>

              
              <ul className="space-y-4 mb-6 relative z-10">
                {JOIN_SECTION_TUTOR_FEATURES.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: colors.brand.secondary }}
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
                className="w-full py-4 px-4 rounded-lg font-medium text-white relative z-10 mt-auto"
                style={styles.primaryButton(colors.brand.secondary)}
              >
                Start Teaching
              </button>
            </div>

            
            <div
              className="bg-white p-6 relative overflow-hidden flex flex-col"
              style={styles.card}
            >
              
              <div
                className="absolute top-0 right-0 w-24 h-24"
                style={{
                  backgroundColor: colors.brand.purpleSoft,
                  borderRadius: '0 0 0 100%',
                  clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                }}
              />
              
              
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-7 relative z-10"
                style={{ backgroundColor: colors.brand.purple }}
              >
                <Handshake className="w-8 h-8 text-white" />
              </div>

              
              <h3
                className="font-bold mb-5 relative z-10"
                style={styles.cardTitle}
              >
                Become a Coordinator
              </h3>

              
              <p
                className="mb-7 relative z-10"
                style={styles.cardBody}
              >
                Refer students to courses and earn commission — be the bridge between learners & tutors.
              </p>

              
              <ul className="space-y-4 mb-6 relative z-10">
                {JOIN_SECTION_COORDINATOR_FEATURES.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <feature.icon
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: colors.brand.purple }}
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
                className="w-full py-4 px-4 rounded-lg font-medium text-white relative z-10 mt-auto"
                style={styles.primaryButton(colors.brand.purple)}
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

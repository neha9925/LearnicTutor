"use client";

import React from "react";
import { Mail, MessageCircle } from "lucide-react";
import { colors, typography } from "@/theme";

const styles = {
  wrapper: {
    backgroundImage: "url('/images/banners/mailBanner.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: colors.background.newsletter,
  },
  glow: (color: string) =>
    ({
      width: "500px",
      height: "500px",
      backgroundColor: color,
      filter: "blur(80px)",
    }) as const,
  iconWrapper: {
    backgroundColor: "#E6F0FF",
  },
  icon: {
    color: colors.utility.info,
  },
  heading: {
    ...typography.hero.heading,
    fontSize: "clamp(32px, 4vw, 48px)",
    textAlign: "center" as const,
  },
  description: {
    ...typography.section.descriptionLg,
    color: colors.text.muted,
  },
  button: {
    ...typography.button.primary,
    gap: "12px",
  } as const,
} as const;
// 
const Newsletter: React.FC = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden" style={styles.wrapper}>
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-sm"
              style={styles.iconWrapper}
            >
              <Mail className="w-8 h-8" style={styles.icon} />
            </div>
          </div>

          <h2
            className="mb-4"
            style={{ ...styles.heading, color: colors.text.primary }}
          >
            Never Miss an Update Again!
          </h2>

          <p
            className="mb-8 max-w-xl mx-auto"
            style={styles.description}
          >
            Get instant notifications about new courses, exclusive content, and learning opportunities directly on WhatsApp.
          </p>

          <button
            className="px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all bg-[#572EEE] hover:bg-[#3311B2] text-white transition-colors"
            style={styles.button}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Subscribe Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

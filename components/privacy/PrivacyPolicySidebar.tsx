"use client";

import React from "react";
import { POLICY_SECTIONS } from "@/data/privacyPolicy";
import { colors, typography } from "@/theme";

const styles = {
  sidebarTitle: {
    ...typography.section.headingLg,
    fontSize: "18px",
    fontWeight: 700,
    color: colors.text.primary,
    marginBottom: "20px",
  },
  link: {
    ...typography.card.bodyMd,
    color: colors.text.secondary,
    display: "block",
    padding: "8px 0 8px 12px",
    transition: "color 0.2s",
    fontSize: "14px",
  },
  linkActive: {
    color: colors.brand.primarySofter,
    fontWeight: 600,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
  },
} as const;

const PrivacyPolicySidebar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(/\s+/g, "-"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="sticky top-24">
      <div style={styles.card}>
        <h3 style={styles.sidebarTitle}>
          Quick Navigation
        </h3>
        <nav className="space-y-1">
          {POLICY_SECTIONS.map((section) => {
            const sectionId = section.toLowerCase().replace(/\s+/g, "-");
            return (
              <a
                key={section}
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                style={styles.link}
                className="hover:text-[#5636FF] transition-colors cursor-pointer"
              >
                {section}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default PrivacyPolicySidebar;


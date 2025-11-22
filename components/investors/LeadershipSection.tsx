"use client";

import React, { useState, useMemo } from "react";
import { Linkedin, Mail } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { LEADERSHIP_TEAM, ADVISORS, INVESTORS, TeamMember } from "@/data/investors";
import { colors, typography } from "@/theme";

const styles = {
  sectionHeading: {
    ...typography.section.headingLg,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    marginBottom: "12px",
    color: "#1F2937",
    fontWeight: 700,
    textAlign: "center" as const,
  },
  sectionDescription: {
    ...typography.section.descriptionMd,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    marginBottom: "48px",
    color: "#1F2937",
    textAlign: "center" as const,
  },
  filterButton: {
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    padding: "10px 24px",
    borderRadius: "8px",
    border: "none",
    transition: "all 0.2s",
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer",
  },
  filterButtonActive: {
    backgroundColor: colors.brand.primarySofter || "#572EEE",
    color: "#FFFFFF",
  },
  filterButtonInactive: {
    backgroundColor: "#F3F4F6",
    color: "#1F2937",
  },
  memberName: {
    ...typography.card.titleMd,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: "#1F2937",
    marginBottom: "8px",
    fontWeight: 700,
    fontSize: "18px",
    textAlign: "center" as const,
  },
  memberRole: {
    ...typography.card.bodySm,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: colors.brand.primarySofter || "#5636FF",
    marginBottom: "12px",
    fontWeight: 600,
    fontSize: "16px",
    textAlign: "center" as const,
  },
  memberQuote: {
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: "#6B7280",
    fontStyle: "italic",
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "16px",
    textAlign: "center" as const,
    fontWeight: 400,
    letterSpacing: "0%",
  },
} as const;

type FilterType = "leadership" | "advisors" | "investors";

const LeadershipSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("leadership");

  const allMembers = useMemo(() => {
    return [...LEADERSHIP_TEAM, ...ADVISORS, ...INVESTORS];
  }, []);

  const filteredMembers = useMemo(() => {
    return allMembers.filter((member) => member.category === activeFilter);
  }, [allMembers, activeFilter]);

  const filters: { label: string; value: FilterType }[] = [
    { label: "Leadership", value: "leadership" },
    { label: "Advisors", value: "advisors" },
    { label: "Investors", value: "investors" },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12">
          <h2 style={styles.sectionHeading} className="text-3xl md:text-4xl">
            Meet Our Leadership & Investors
          </h2>
          <p style={styles.sectionDescription} className="text-base md:text-lg max-w-2xl mx-auto">
            A team of innovators, educators, and strategic investors driving Learnic forward
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              style={{
                ...styles.filterButton,
                ...(activeFilter === filter.value
                  ? styles.filterButtonActive
                  : styles.filterButtonInactive),
              }}
              className="hover:opacity-90 transition-opacity"
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 text-center rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 flex-shrink-0 bg-gray-100" style={{ borderColor: colors.brand.primarySofter || "#5636FF" }}>
                <ImageWithFallback
                  src={member.avatar}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full"
                  objectFit={member.avatar.endsWith('.svg') ? "contain" : "cover"}
                />
              </div>
              <h3 style={styles.memberName}>
                {member.name}
              </h3>
              <p style={styles.memberRole}>
                {member.role}
              </p>
              {member.quote && (
                <p style={styles.memberQuote}>
                  &ldquo;{member.quote}&rdquo;
                </p>
              )}
              <div className="flex justify-center gap-3 mt-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:opacity-80 transition-opacity"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-900 hover:opacity-80 transition-opacity"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;


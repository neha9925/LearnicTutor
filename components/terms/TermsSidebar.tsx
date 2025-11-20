"use client";

import React from "react";
import { TERMS_SECTIONS } from "@/data/termsConditions";

// Mapping for display names and section IDs in sidebar
const sidebarConfig: Record<string, { displayName: string; sectionId: string }> = {
  "Introduction": { displayName: "Introduction", sectionId: "introduction" },
  "Acceptance of Terms": { displayName: "Acceptance of Terms", sectionId: "acceptance-of-terms" },
  "User Accounts & Responsibilities": { displayName: "User Accounts", sectionId: "user-accounts-&-responsibilities" },
  "Course Enrollment & Access": { displayName: "Course Enrollment", sectionId: "course-enrollment-&-access" },
  "Payments & Refunds": { displayName: "Payments & Refunds", sectionId: "payments-&-refunds" },
  "Intellectual Property": { displayName: "Intellectual Property", sectionId: "intellectual-property" },
  "Content Usage & Restrictions": { displayName: "Content Usage", sectionId: "content-usage-&-restrictions" },
  "Limitations of Liability": { displayName: "Limitation of Liability", sectionId: "limitations-of-liability" },
  "Termination Policy": { displayName: "Termination Policy", sectionId: "termination-policy" },
  "Modifications to Terms": { displayName: "Modifications", sectionId: "modifications-to-terms" },
  "Governing Law": { displayName: "Governing Law", sectionId: "governing-law" },
  "Contact Information": { displayName: "Contact Information", sectionId: "contact-information" },
};

const TermsSidebar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="sticky top-24">
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 
          className="text-lg font-bold mb-6 text-gray-900"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
          }}
        >
          Quick Navigation
        </h3>
        <nav className="space-y-3">
          {TERMS_SECTIONS.map((section) => {
            const config = sidebarConfig[section];
            if (!config) return null;
            
            return (
              <a
                key={section}
                href={`#${config.sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(config.sectionId);
                }}
                className="block text-base text-gray-700 hover:text-[#572EEE] transition-colors cursor-pointer"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                }}
              >
                {config.displayName}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default TermsSidebar;


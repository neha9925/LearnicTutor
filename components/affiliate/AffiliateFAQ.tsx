"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { AFFILIATE_FAQS } from "@/data/affiliate";
import { colors, typography } from "@/theme";

const styles = {
  sectionHeading: {
    ...typography.section.headingLg,
    marginBottom: "12px",
  },
  sectionDescription: {
    ...typography.section.descriptionMd,
    marginBottom: "48px",
  },
  question: {
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "28px",
    letterSpacing: "0%",
    color: colors.text.primary,
  },
  answer: {
    ...typography.card.bodyMd,
    color: colors.text.secondary,
    lineHeight: "1.7",
  },
} as const;

const AffiliateFAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12">
          <h2 style={styles.sectionHeading} className="text-3xl md:text-4xl">
            Popular Articles
          </h2>
          <p style={styles.sectionDescription} className="text-base md:text-lg max-w-2xl mx-auto">
            Find answers to your questions & more.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-2">
          {AFFILIATE_FAQS.map((faq) => (
            <Card key={faq.id} className="overflow-hidden">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <h3 style={styles.question} className="text-lg font-semibold pr-8 flex-1">
                  {faq.question}
                </h3>
                {openFAQ === faq.id ? (
                  <ChevronDown className="w-5 h-5 text-[#5636FF] flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openFAQ === faq.id && (
                <div className="px-6 pb-6">
                  <p style={styles.answer}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/help-center"
            className="text-[#5636FF] hover:underline"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default AffiliateFAQ;


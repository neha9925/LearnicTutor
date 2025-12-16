"use client";

import React from "react";
import Link from "next/link";
import { PlayCircle, User, Book, Video, CreditCard, Settings, ArrowRight, Award, FileText } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { HELP_CATEGORIES } from "@/data/helpCenter";
import { colors, typography } from "@/theme";

const iconMap: Record<string, React.ElementType> = {
  "play-circle": PlayCircle,
  "user": User,
  "book": Book,
  "video": Video,
  "credit-card": CreditCard,
  "settings": Settings,
  "award": Award,
  "file-text": FileText,
};

const styles = {
  sectionHeading: {
    ...typography.section.headingLg,
    marginBottom: "12px",
  },
  sectionDescription: {
    ...typography.section.descriptionMd,
    marginBottom: "48px",
  },
  categoryTitle: {
    ...typography.card.titleMd,
    color: colors.text.primary,
    marginBottom: "8px",
    fontSize: "18px",
    fontWeight: 700,
  },
  categoryDescription: {
    ...typography.card.bodySm,
    color: colors.text.secondary,
    marginBottom: "12px",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  iconCircle: {
    backgroundColor: "#F3E8FF",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
  },
  articleCount: {
    ...typography.card.bodySm,
    color: colors.text.tertiary,
  },
  card: {
    width: "290px",
    height: "256px",
    opacity: 1,
    borderRadius: "16px",
    background: "#FFFFFF",
    boxShadow: "0px 1px 2px 0px #0000000D",
  },
} as const;

const HelpCategories: React.FC = () => {
  return (
    <section 
      className="py-12 md:py-16 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 35.36%, #FDF2F8 70.71%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12">
          <h2 style={styles.sectionHeading} className="text-3xl md:text-4xl">
            Browse by Category
          </h2>
          <p style={styles.sectionDescription} className="text-base md:text-lg max-w-2xl mx-auto">
            Find answers organized by topic to quickly get the help you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {HELP_CATEGORIES.map((category) => {
            const IconComponent = iconMap[category.icon] || Book;
            return (
              <Link key={category.id} href={`/help-center/${category.id}`}>
                <Card 
                  className="p-6 transition-shadow cursor-pointer flex flex-col"
                  style={styles.card}
                >
                  {/* Icon at top left */}
                  <div style={styles.iconCircle}>
                    <IconComponent className="w-7 h-7 text-[#5636FF]" />
                  </div>
                  
                  {/* Heading */}
                  <h3 style={styles.categoryTitle} className="mb-2">
                    {category.title}
                  </h3>
                  
                  {/* Description */}
                  <p style={styles.categoryDescription} className="mb-4">
                    {category.description}
                  </p>
                  
                  {/* Article count and arrow at bottom */}
                  <div className="flex items-center justify-between mt-auto">
                    <span style={styles.articleCount}>
                      {category.articleCount} articles
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#5636FF]" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HelpCategories;


"use client";

import React, { useMemo, useState } from "react";
import { HOME_CATEGORIES, HOME_CATEGORY_TABS } from "@/data/home";
import { colors, radii, shadows, typography } from "@/theme";

const styles = {
  sectionHeading: typography.section.headingXl,
  sectionDescription: typography.section.descriptionLg,
  filtersContainer: {
    backgroundColor: colors.background.categoryFilter,
  } as const,
  tabButton: {
    ...typography.labels.md,
  } as const,
  card: {
    borderRadius: radii.lg,
    top: "-5px",
    overflow: "hidden",
    border: `1px solid ${colors.background.cardBorder}`,
    position: "relative",
    boxShadow: shadows.cardNeutral,
  } as const,
  cardTitle: {
    ...typography.card.titleMd,
    textAlign: "center" as const,
  },
  cardDescription: {
    ...typography.card.bodySm,
    textAlign: "center" as const,
  },
  cardChip: {
    ...typography.chips.text,
    textAlign: "center" as const,
  },
  tabButtonActive: {
    ...typography.labels.md,
  },
} as const;

type CategoryTab = (typeof HOME_CATEGORY_TABS)[number];

const Categories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryTab>(HOME_CATEGORY_TABS[0]);
  const tabs = useMemo(() => HOME_CATEGORY_TABS, []);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-gray-900 mb-4"
            style={styles.sectionHeading}
          >
            Explore Categories
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            style={styles.sectionDescription}
          >
            Choose your field of learning and start mastering new skills.
          </p>
        </div>

        <div 
          className="flex flex-wrap justify-center gap-3 mb-8 p-4 rounded-lg"
          style={styles.filtersContainer}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
              }`}
            style={styles.tabButton}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mx-auto max-w-[1260px] w-full px-2 sm:px-4">
          {HOME_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            const chipStyle = {
              ...styles.cardChip,
              backgroundColor: category.buttonBg,
              color: category.buttonText,
            } as const;
            return (
              <div
                key={index}
                className="hover:shadow-lg transition-all cursor-pointer bg-white w-full max-w-[301.3px]"
                style={styles.card}
              >
                <div
                  style={{
                    backgroundColor: category.borderColor,
                    height: '4.16px',
                    width: '100%',
                    borderRadius: '12px 12px 0 0',
                    flexShrink: 0,
                  }}
                />
                <div className="p-6 flex flex-col h-full">
                  
                  <div className="flex justify-center mb-4">
                    <Icon
                      className="w-12 h-12"
                      style={{
                        color: colors.brand.purple,
                      }}
                    />
                  </div>
                  
                  <h3 
                    className="text-center font-bold mb-2"
                    style={{
                      ...styles.cardTitle,
                      color: colors.neutral.gray700,
                    }}
                  >
                    {category.name}
                  </h3>
                  
                  <p 
                    className="text-center mb-4"
                    style={{
                      ...styles.cardDescription,
                      color: colors.neutral.gray500,
                    }}
                  >
                    {category.description}
                  </p>
                  
                  <div className="flex justify-center">
                    <button
                      className="py-2 px-4 rounded-full font-medium"
                      style={chipStyle}
                    >
                      {category.courses} Courses
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;


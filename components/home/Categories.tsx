"use client";

import React, { useMemo, useState } from "react";
import { HOME_CATEGORIES, HOME_CATEGORY_TABS } from "@/data/home";
import CategoryChip from "@/components/ui/CategoryChip";
import { colors, radii, shadows, typography } from "@/theme";

const styles = {
  sectionHeading: typography.section.headingXl,
  sectionDescription: typography.section.descriptionLg,
  filtersContainer: {
    backgroundColor: colors.background.categoryFilter,
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
} as const;

type CategoryTab = (typeof HOME_CATEGORY_TABS)[number];

const Categories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryTab>(HOME_CATEGORY_TABS[0]);
  const tabs = useMemo(() => HOME_CATEGORY_TABS, []);

  const filteredCategories = useMemo(() => {
    if (activeTab === "All") {
      return HOME_CATEGORIES;
    }

    const matches = HOME_CATEGORIES.filter((category) =>
      category.tabs.includes(activeTab)
    );

    return matches.length > 0 ? matches : HOME_CATEGORIES;
  }, [activeTab]);

  return (
    <section className="pt-0 pb-12 md:pb-16 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
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
          className="flex gap-3 mb-8 p-4 rounded-2xl bg-white shadow-sm w-full overflow-x-auto flex-nowrap px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 md:flex-wrap md:justify-center md:overflow-visible"
          style={styles.filtersContainer}
        >
          {tabs.map((tab) => (
            <CategoryChip
              key={tab}
              label={tab}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              variant="tab"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mx-auto w-full">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            const chipStyle = {
              ...styles.cardChip,
              backgroundColor: category.buttonBg,
              color: category.buttonText,
            } as const;
            return (
              <div
                key={category.name}
                className="transition-all cursor-pointer bg-white w-full hover:translate-y-[-4px] hover:shadow-xl"
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


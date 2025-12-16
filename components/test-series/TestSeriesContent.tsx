"use client";

import React, { useMemo, useState } from "react";
import FilterButton from "@/components/ui/FilterButton";
import SearchInput from "@/components/ui/SearchInput";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import TestSeriesCard from "./TestSeriesCard";
import CategoryChip from "@/components/ui/CategoryChip";
import { testSeriesData, testSeriesCategories, type TestSeries } from "@/data/testSeries";
import {
  baseSelectStyles,
  colors,
  gradients,
  shadows,
  spacing,
  typography,
} from "@/theme";

const styles = {
  heroBanner: {
    background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
    boxShadow: shadows.banner,
    width: "100%",
  },
  heroTitle: {
    ...typography.section.headingLg,
    fontSize: "48px",
    lineHeight: "56px",
    color: colors.text.light,
    fontWeight: 700,
  },
  heroDescription: {
    fontFamily: "var(--font-poppins), sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "28px",
    color: "rgba(255, 255, 255, 0.9)",
  },
  searchInput: {
    fontFamily: "var(--font-poppins), sans-serif",
    fontWeight: 400,
    color: colors.text.primary,
    fontSize: "16px",
  },
  sectionTitle: {
    ...typography.section.headingLg,
    fontSize: "32px",
    lineHeight: "40px",
    color: colors.text.primary,
    textAlign: "left" as const,
  },
  sectionSubtitle: {
    ...typography.card.bodySm,
    fontSize: "16px",
    lineHeight: "24px",
    color: colors.text.tertiary,
  },
  filterButton: {
    ...typography.button.secondary,
    fontSize: "14px",
  },
  sortMenu: {
    minWidth: 180,
    ...baseSelectStyles,
    "& .MuiOutlinedInput-root": {
      ...baseSelectStyles["& .MuiOutlinedInput-root"],
      paddingRight: "36px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.border.highlight,
    },
  },
  sortMenuItem: {
    fontFamily: "var(--font-poppins), sans-serif",
    fontWeight: 500,
    color: colors.text.secondary,
  },
  gridWrapper: {
    maxWidth: spacing.containerMax,
    margin: "0 auto",
  },
  popularSectionTitle: {
    ...typography.section.headingLg,
    fontSize: "28px",
    lineHeight: "36px",
    color: colors.text.primary,
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
} as const;

const TestSeriesContent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Popularity");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTestSeries = useMemo(() => {
    let list: TestSeries[] = [...testSeriesData];

    // Filter by category
    if (activeCategory !== "All") {
      list = list.filter((item) => item.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortOption) {
      case "Price: Low to High":
        list.sort((a, b) => a.currentPrice - b.currentPrice);
        break;
      case "Price: High to Low":
        list.sort((a, b) => b.currentPrice - a.currentPrice);
        break;
      case "Rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "Students":
        list.sort((a, b) => b.students - a.students);
        break;
      case "Popularity":
      default:
        list.sort((a, b) => {
          if (a.isPopular && !b.isPopular) return -1;
          if (!a.isPopular && b.isPopular) return 1;
          return b.students - a.students;
        });
        break;
    }

    return list;
  }, [activeCategory, sortOption, searchQuery]);

  const popularTestSeries = useMemo(
    () => filteredTestSeries.filter((item) => item.isPopular).slice(0, 3),
    [filteredTestSeries]
  );

  const allTestSeries = useMemo(
    () => filteredTestSeries,
    [filteredTestSeries]
  );

  return (
    <section className="pt-0 pb-16 md:pb-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        {/* Hero Section */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-12 xl:-mx-20 2xl:-mx-24 mb-12">
          <div
            className="px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24 py-16 md:py-20 text-center"
            style={styles.heroBanner}
          >
            <h1 style={styles.heroTitle}>Test Series</h1>
            <p className="mt-4" style={styles.heroDescription}>
              Choose from a wide range of test series to enhance your preparation.
            </p>

            <div className="mt-10 max-w-2xl mx-auto">
              <SearchInput
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search test series"
                variant="minimal"
                inputStyle={styles.searchInput}
                iconContainerSize={40}
              />
            </div>
          </div>
        </div>

        {/* Filters and Sort Section */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 style={styles.sectionTitle}>Test Series</h2>
              <p style={styles.sectionSubtitle}>
                {filteredTestSeries.length} classes found
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-center">
              <FilterButton
                showHover={true}
                style={styles.filterButton}
              />
              <FormControl size="small" sx={styles.sortMenu}>
                <Select
                  value={sortOption}
                  displayEmpty
                  renderValue={(selected) => selected || "Sort By Popularity"}
                  inputProps={{ "aria-label": "Sort test series" }}
                  onChange={(event: SelectChangeEvent<string>) =>
                    setSortOption(event.target.value)
                  }
                >
                  {[
                    "Popularity",
                    "Price: Low to High",
                    "Price: High to Low",
                    "Rating",
                    "Students",
                  ].map((option) => (
                    <MenuItem key={option} value={option} sx={styles.sortMenuItem}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          {/* Category Filters */}
          <div className="bg-purple-50 rounded-2xl p-3 md:p-4 overflow-x-auto">
            <div className="flex items-center gap-2 md:gap-3 min-w-max">
              {testSeriesCategories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <CategoryChip
                    key={category}
                    label={category}
                    isActive={isActive}
                    onClick={() => setActiveCategory(category)}
                    variant="default"
                    className="whitespace-nowrap"
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Popular Now Section */}
        {popularTestSeries.length > 0 && (
          <div className="mb-12">
            <h2 style={styles.popularSectionTitle} className="mb-6">
              <span>🔥</span> Popular Now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularTestSeries.map((testSeries) => (
                <TestSeriesCard
                  key={testSeries.id}
                  testSeries={testSeries}
                  variant="popular"
                />
              ))}
            </div>
          </div>
        )}

        {/* All Test Series Section */}
        <div>
          <h2 style={styles.sectionTitle} className="mb-6">
            All Test Series
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            style={styles.gridWrapper}
          >
            {allTestSeries.map((testSeries) => (
              <TestSeriesCard
                key={testSeries.id}
                testSeries={testSeries}
                variant="default"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestSeriesContent;


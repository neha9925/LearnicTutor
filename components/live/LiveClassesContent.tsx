"use client";

import React, { useMemo, useState } from "react";
import CourseCard from "@/components/home/CourseCard";
import AcademicCourseCard from "@/components/live/AcademicCourseCard";
import SideDrawer from "@/components/ui/SideDrawer";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import CategoryChip from "@/components/ui/CategoryChip";
import FilterButton from "@/components/ui/FilterButton";
import SearchInput from "@/components/ui/SearchInput";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { liveClassCards } from "@/data/liveClassesList";
import { getLiveClassById } from "@/data/liveClasses";
import {
  baseSelectStyles,
  colors,
  gradients,
  shadows,
  spacing,
  typography,
} from "@/theme";

const LiveClassesContent: React.FC = () => {
  const categoryList = useMemo(() => {
    const unique = Array.from(new Set(liveClassCards.map((course) => course.category)));
    return ["All", ...unique];
  }, []);

  const subcategoryOptions = useMemo(() => {
    const tags = new Set<string>();
    liveClassCards.forEach((course) => {
      course.categoryTags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const priceRangeOptions = useMemo(() => {
    const ranges = new Set<string>();
    liveClassCards.forEach((course) => ranges.add(course.priceRangeLabel));
    return Array.from(ranges).sort();
  }, []);

  const levelOptions = useMemo(() => {
    const levels = new Set<string>(liveClassCards.map((course) => course.level));
    return Array.from(levels);
  }, []);

  const languageOptions = useMemo(() => {
    const languages = new Set<string>(liveClassCards.map((course) => course.language));
    return Array.from(languages);
  }, []);

  const ratingOptions = useMemo(() => {
    const thresholds = Array.from(
      new Set(liveClassCards.map((course) => Math.floor(course.rating * 2) / 2))
    ).sort((a, b) => b - a);

    return thresholds.map((value) => ({
      label: `⭐ ${value.toFixed(1)}+`,
      value: value.toFixed(1),
    }));
  }, []);

  const [activeCategory, setActiveCategory] = useState(categoryList[0] ?? "All");
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState("Popularity");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedFilters, setSelectedFilters] = useState({
    categories: new Set<string>(),
    subcategories: new Set<string>(),
    priceRange: "",
    difficulty: new Set<string>(),
    rating: new Set<string>(),
    language: new Set<string>(),
  });

  const filteredCourses = useMemo(() => {
    const sorted = [...liveClassCards];

    switch (sortOption) {
      case "Highest Rated":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "Trending":
        sorted.sort((a, b) => b.students - a.students);
        break;
      case "Popularity":
        sorted.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      case "Newest":
      default:
        sorted.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
    }

    const categoryFilterSet = selectedFilters.categories as Set<string>;
    const subCategoryFilterSet = selectedFilters.subcategories as Set<string>;
    const difficultyFilterSet = selectedFilters.difficulty as Set<string>;
    const ratingFilterSet = selectedFilters.rating as Set<string>;
    const languageFilterSet = selectedFilters.language as Set<string>;

    const normalizedSearch = searchQuery.trim().toLowerCase();

    return sorted.filter((course) => {
      if (activeCategory !== "All" && course.category !== activeCategory) {
        return false;
      }

      if (categoryFilterSet.size > 0 && !categoryFilterSet.has(course.category)) {
        return false;
      }

      if (
        subCategoryFilterSet.size > 0 &&
        !course.categoryTags.some((tag) => subCategoryFilterSet.has(tag))
      ) {
        return false;
      }

      if (
        selectedFilters.priceRange &&
        course.priceRangeLabel !== selectedFilters.priceRange
      ) {
        return false;
      }

      if (difficultyFilterSet.size > 0 && !difficultyFilterSet.has(course.level)) {
        return false;
      }

      if (
        ratingFilterSet.size > 0 &&
        !Array.from(ratingFilterSet).some(
          (threshold) => course.rating >= parseFloat(threshold)
        )
      ) {
        return false;
      }

      if (languageFilterSet.size > 0 && !languageFilterSet.has(course.language)) {
        return false;
      }

      if (normalizedSearch.length) {
        const haystack = [
          course.title,
          course.description,
          course.instructor.name,
          course.category,
          ...course.categoryTags,
        ]
          .join(" ")
          .toLowerCase();

        if (!haystack.includes(normalizedSearch)) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, sortOption, selectedFilters, searchQuery]);

  const handleToggle = (group: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters((prev) => {
      if (group === "priceRange") {
        return { ...prev, priceRange: prev.priceRange === value ? "" : value };
      }

      const updated = new Set(prev[group] as Set<string>);
      if (updated.has(value)) {
        updated.delete(value);
      } else {
        updated.add(value);
      }
      return { ...prev, [group]: updated };
    });
  };

  const resetFilters = () => {
    setSelectedFilters({
      categories: new Set(),
      subcategories: new Set(),
      priceRange: "",
      difficulty: new Set(),
      rating: new Set(),
      language: new Set(),
    });
  };

  const styles = {
    heroBanner: {
      background: gradients.bannerBackground,
      boxShadow: shadows.banner,
      width: "100%",
    },
    heroTitle: {
      ...typography.section.headingLg,
      fontSize: "32px",
      lineHeight: "40px",
      color: "#0F172A",
      textAlign: "center" as const,
    },
    heroDescription: {
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      color: "rgba(15, 23, 42, 0.7)",
      textAlign: "center" as const,
    },
    searchInput: {
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 400,
      color: colors.text.primary,
    },
    sectionTitle: {
      ...typography.section.headingLg,
      fontSize: "32px",
      lineHeight: "40px",
      color: colors.text.primary,
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
    selectControl: {
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
    selectMenuItem: {
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 500,
      fontSize: "14px",
      color: colors.text.secondary,
    },
    categoryChip: (isActive: boolean) =>
      ({
        ...typography.labels.md,
        fontSize: "14px",
        color: isActive ? colors.text.light : colors.text.tertiary,
        background: isActive ? gradients.buttonPrimary : colors.neutral.white,
        boxShadow: isActive
          ? "0px 10px 20px rgba(107, 71, 237, 0.25)"
          : "0px 6px 12px rgba(107, 71, 237, 0.08)",
        border: isActive
          ? "1px solid rgba(107, 71, 237, 0.2)"
          : "1px solid rgba(107, 71, 237, 0.08)",
      }) as const,
    gridWrapper: {
      maxWidth: spacing.containerMax,
      margin: "0 auto",
    },
    filterHeading: {
      ...typography.card.titleMd,
      fontWeight: 600,
      color: colors.text.primary,
    },
    applyButton: {
      ...typography.button.primary,
      background: gradients.buttonPrimary,
      boxShadow: "0px 12px 24px rgba(107, 71, 237, 0.35)",
      color: colors.text.light,
    },
  } as const;

  return (
    <section className="pt-0 pb-16 md:pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 sm:-mx-6 lg:-mx-8 mb-12">
          <div
            className="px-6 py-12 md:px-12 md:py-16 text-center"
            style={styles.heroBanner}
          >
            <h1 style={styles.heroTitle}>
              Explore Learning Videos
            </h1>
            <p
              className="mt-3"
              style={styles.heroDescription}
            >
              Watch academic & skill-based video lessons by top tutors on Learnic
            </p>

            <div className="mt-8 max-w-2xl mx-auto">
              <SearchInput
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by topic, skill, or tutor..."
                variant="default"
                inputStyle={styles.searchInput}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6" style={styles.gridWrapper}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 style={styles.sectionTitle}>Live Classes</h1>
              <p style={styles.sectionSubtitle}>1,247 classes found</p>
            </div>

            <div className="flex items-center gap-5 self-start md:self-center">
              <FilterButton
                onClick={() => setIsFilterOpen(true)}
                style={styles.filterButton}
              />
              <FormControl
                variant="outlined"
                size="small"
                sx={styles.selectControl}
              >
                <Select
                  value={sortOption}
                  onChange={(event: SelectChangeEvent<string>) =>
                    setSortOption(event.target.value)
                  }
                  aria-label="Sort live classes"
                >
                  {['Popularity', 'Newest', 'Highest Rated', 'Trending'].map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      sx={styles.selectMenuItem}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-3 md:p-4 overflow-x-auto">
            <div className="flex items-center gap-2 md:gap-3 min-w-max">
              {categoryList.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <CategoryChip
                    key={category}
                    label={category}
                    isActive={isActive}
                    onClick={() => {
                      setActiveCategory(category);
                      if (category !== "Academic") {
                        setSelectedClass(null);
                      }
                    }}
                    variant="default"
                  />
                );
              })}
            </div>
          </div>
        </div>

        {activeCategory === "Academic" ? (
          selectedClass ? (
            <>
              <div
                className="mt-16 pt-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                style={styles.gridWrapper}
              >
                {[
                  { board: "CBSE", batch: 1, timing: "9:00 AM - 10:00 AM", startDate: "15 Dec 2024" },
                  { board: "CBSE", batch: 2, timing: "10:00 AM - 11:00 AM", startDate: "20 Dec 2024" },
                  { board: "CBSE", batch: 3, timing: "4:00 PM - 5:00 PM", startDate: "25 Dec 2024" },
                  { board: "Bihar Board", batch: 1, timing: "9:00 AM - 10:00 AM", startDate: "18 Dec 2024" },
                  { board: "RBSE", batch: 1, timing: "10:00 AM - 11:00 AM", startDate: "22 Dec 2024" },
                  { board: "CBSE", batch: 4, timing: "5:00 PM - 6:00 PM", startDate: "28 Dec 2024" },
                ].map((course, index) => {
                  // Generate unique ID for each course: class-{classNumber}-{board}-batch-{batchNumber}
                  const courseId = `class-${selectedClass}-${course.board.toLowerCase().replace(/\s+/g, '-')}-batch-${course.batch}`;
                  const courseData = getLiveClassById(courseId);
                  
                  // Get price from course data or use default
                  const price = courseData?.price || 1200;
                  const formattedPrice = `₹ ${price}/M`;
                  
                  return (
                    <AcademicCourseCard
                      key={`${course.board}-${course.batch}-${index}`}
                      classNumber={selectedClass}
                      batchNumber={course.batch}
                      timing={course.timing}
                      nextBatchStart={course.startDate}
                      price={formattedPrice}
                      board={course.board}
                      isNew={index < 3} // First 3 are new
                      href={`/live-classes/${courseId}`}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <div
              className="mt-16 pt-6 pb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
              style={styles.gridWrapper}
            >
              {[
                { number: 3, color: "#FB923C" }, // Orange
                { number: 4, color: "#3B82F6" }, // Blue
                { number: 5, color: "#10B981" }, // Green
                { number: 6, color: "#FBBF24" }, // Yellow
                { number: 7, color: "#A855F7" }, // Purple
                { number: 8, color: "#EC4899" }, // Pink
                { number: 9, color: "#6366F1" }, // Indigo
                { number: 10, color: "#EF4444" }, // Red
                { number: 11, color: "#14B8A6" }, // Teal
                { number: 12, color: "#FB923C" }, // Orange
              ].map((classItem) => (
                <div
                  key={classItem.number}
                  className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedClass(classItem.number)}
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center"
                    style={{
                      backgroundColor: classItem.color,
                    }}
                  >
                    <span
                      className="text-white font-bold"
                      style={{
                        fontSize: "24px",
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      {classItem.number}
                    </span>
                  </div>
                  <p
                    className="text-gray-800 font-medium"
                    style={{
                      fontSize: "16px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    Class {classItem.number}
                  </p>
                </div>
              ))}
            </div>
          )
        ) : (
          <div
            className="mt-16 pt-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            style={styles.gridWrapper}
          >
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                instructor={course.instructor}
                image={course.image}
                rating={course.rating}
                price={course.price}
                originalPrice={course.originalPrice}
                students={course.students}
                duration={course.duration}
                tag={course.tag}
                href={course.href ?? `/live-classes/${course.id}`}
                descriptionClamp={1}
                variant="skills"
              />
            ))}
          </div>
        )}
      </div>

      <SideDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        title="Filters"
        width="w-full max-w-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-4 text-gray-900" style={styles.filterHeading}>Categories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categoryList
                  .filter((category) => category !== "All")
                  .map((category) => (
                  <Checkbox
                    key={category}
                    label={category}
                    checked={(selectedFilters.categories as Set<string>).has(category)}
                    onChange={() => handleToggle("categories", category)}
                  />
                  ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-gray-900" style={styles.filterHeading}>Price Range</h3>
              <div className="flex flex-col gap-3">
                {priceRangeOptions.map((price) => (
                  <Checkbox
                    key={price}
                    label={price}
                    checked={selectedFilters.priceRange === price}
                    onChange={() => handleToggle("priceRange", price)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-gray-900" style={styles.filterHeading}>Rating</h3>
              <div className="flex flex-col gap-3">
                {ratingOptions.map((rating) => (
                  <Checkbox
                    key={rating.value}
                    label={rating.label}
                    checked={(selectedFilters.rating as Set<string>).has(rating.value)}
                    onChange={() => handleToggle("rating", rating.value)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-4 text-gray-900" style={styles.filterHeading}>Subcategory</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subcategoryOptions.map((sub) => (
                  <Checkbox
                    key={sub}
                    label={sub}
                    checked={(selectedFilters.subcategories as Set<string>).has(sub)}
                    onChange={() => handleToggle("subcategories", sub)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-gray-900" style={styles.filterHeading}>Difficulty Level</h3>
              <div className="flex flex-col gap-3">
                {levelOptions.map((level) => (
                  <Checkbox
                    key={level}
                    label={level}
                    checked={(selectedFilters.difficulty as Set<string>).has(level)}
                    onChange={() => handleToggle("difficulty", level)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-gray-900" style={styles.filterHeading}>Language</h3>
              <div className="flex flex-col gap-3">
                {languageOptions.map((lang) => (
                  <Checkbox
                    key={lang}
                    label={lang}
                    checked={(selectedFilters.language as Set<string>).has(lang)}
                    onChange={() => handleToggle("language", lang)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-between gap-4">
          <Button
            variant="ghost"
            className="w-full sm:w-auto border border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
            onClick={() => {
              resetFilters();
              setActiveCategory(categoryList[0] ?? "All");
              setSearchQuery("");
            }}
          >
            Reset
          </Button>
          <Button
            variant="primary"
            className="w-full sm:w-auto text-white"
            style={styles.applyButton}
            onClick={() => setIsFilterOpen(false)}
          >
            Apply Filter
          </Button>
        </div>
      </SideDrawer>
    </section>
  );
};

export default LiveClassesContent;

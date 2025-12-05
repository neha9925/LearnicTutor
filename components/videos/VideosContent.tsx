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
import VideoCard from "@/components/videos/VideoCard";
import SideDrawer from "@/components/ui/SideDrawer";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import CategoryChip from "@/components/ui/CategoryChip";
import { videoLibrary } from "@/data/videoLibrary";
import {
  baseSelectStyles,
  colors,
  gradients,
  radii,
  shadows,
  spacing,
  typography,
} from "@/theme";

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
  },
  heroDescription: {
    fontFamily: "var(--font-poppins), sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    color: "rgba(15, 23, 42, 0.7)",
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
  filterHeading: {
    ...typography.card.titleMd,
    fontWeight: 600,
    color: colors.text.primary,
    textAlign: "left" as const,
  },
  applyButton: {
    ...typography.button.primary,
    background: gradients.buttonPrimary,
    boxShadow: "0px 12px 24px rgba(107, 71, 237, 0.35)",
    color: colors.text.light,
  },
} as const;

const getDurationBucket = (minutes: number): string => {
  if (minutes < 20) return "Under 20 mins";
  if (minutes < 40) return "20 – 40 mins";
  return "40+ mins";
};

const VideosContent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Trending");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState({
    categories: new Set<string>(),
    tags: new Set<string>(),
    duration: new Set<string>(),
    level: new Set<string>(),
    language: new Set<string>(),
  });

  const categories = useMemo(() => {
    const base = Array.from(new Set(videoLibrary.map((video) => video.category)));
    return ["All", ...base];
  }, []);

  const tagOptions = useMemo(() => {
    const tags = new Set<string>();
    videoLibrary.forEach((video) => video.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const durationOptions = useMemo(() => {
    const buckets = new Set<string>();
    videoLibrary.forEach((video) => buckets.add(getDurationBucket(video.durationMinutes)));
    return Array.from(buckets);
  }, []);

  const levelOptions = useMemo(() => {
    return Array.from(new Set(videoLibrary.map((video) => video.level)));
  }, []);

  const languageOptions = useMemo(
    () => Array.from(new Set(videoLibrary.map((video) => video.language))),
    []
  );

  const filteredVideos = useMemo(() => {
    const list = [...videoLibrary];

    list.sort((a, b) => {
      switch (sortOption) {
        case "Most Viewed":
          return b.views - a.views;
        case "Most Liked":
          return b.likes - a.likes;
        case "Recently Added":
          return new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();
        case "Shortest":
          return a.durationMinutes - b.durationMinutes;
        case "Longest":
          return b.durationMinutes - a.durationMinutes;
        case "Trending":
        default:
          return b.likes + b.views * 0.4 - (a.likes + a.views * 0.4);
      }
    });

    const searchTerm = searchQuery.trim().toLowerCase();
    const categorySet = selectedFilters.categories as Set<string>;
    const tagSet = selectedFilters.tags as Set<string>;
    const durationSet = selectedFilters.duration as Set<string>;
    const levelSet = selectedFilters.level as Set<string>;
    const languageSet = selectedFilters.language as Set<string>;

    return list.filter((video) => {
      if (activeCategory !== "All" && video.category !== activeCategory) {
        return false;
      }

      if (categorySet.size > 0 && !categorySet.has(video.category)) {
        return false;
      }

      if (
        tagSet.size > 0 &&
        !video.tags.some((tag) => tagSet.has(tag))
      ) {
        return false;
      }

      if (
        durationSet.size > 0 &&
        !durationSet.has(getDurationBucket(video.durationMinutes))
      ) {
        return false;
      }

      if (levelSet.size > 0 && !levelSet.has(video.level)) {
        return false;
      }

      if (languageSet.size > 0 && !languageSet.has(video.language)) {
        return false;
      }

      if (searchTerm.length > 0) {
        const haystack = [
          video.title,
          video.description,
          video.creator.name,
          video.category,
          ...video.tags,
        ]
          .join(" ")
          .toLowerCase();

        if (!haystack.includes(searchTerm)) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, sortOption, searchQuery, selectedFilters]);

  const handleToggle = (group: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters((prev) => {
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
      tags: new Set(),
      duration: new Set(),
      level: new Set(),
      language: new Set(),
    });
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <section className="pt-0 pb-16 md:pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 sm:-mx-6 lg:-mx-8 mb-12">
          <div
            className="px-6 py-12 md:px-12 md:py-16 text-center"
            style={styles.heroBanner}
          >
            <h1
              style={styles.heroTitle}
            >
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
              <h2
                style={styles.sectionTitle}
              >
                Featured Video Lessons
              </h2>
              <p
                style={styles.sectionSubtitle}
              >
                {filteredVideos.length} videos available
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-center">
              <FilterButton
                onClick={() => setIsFilterOpen(true)}
                style={styles.filterButton}
              />
              <FormControl
                size="small"
                sx={styles.sortMenu}
              >
                <Select
                  value={sortOption}
                  displayEmpty
                  renderValue={(selected) => selected || "Trending"}
                  inputProps={{ "aria-label": "Sort videos" }}
                  onChange={(event: SelectChangeEvent<string>) =>
                    setSortOption(event.target.value)
                  }
                >
                  {["Trending", "Most Viewed", "Most Liked", "Recently Added", "Shortest", "Longest"].map(
                    (option) => (
                      <MenuItem
                        key={option}
                        value={option}
                        sx={styles.sortMenuItem}
                      >
                        {option}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="bg-purple-50 rounded-2xl p-3 md:p-4 overflow-x-auto">
            <div className="flex items-center gap-2 md:gap-3 min-w-max">
              {categories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <CategoryChip
                    key={category}
                    label={category}
                    isActive={isActive}
                    onClick={() => setActiveCategory(category)}
                    variant="default"
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="mt-16 pt-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          style={styles.gridWrapper}
        >
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              description={video.description}
              thumbnail={video.thumbnail}
              duration={video.duration}
              creator={video.creator}
              views={video.views}
              likes={video.likes}
              comments={video.comments}
              level={video.level}
              language={video.language}
              category={video.category}
            />
          ))}
        </div>
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
              <h3
                className="mb-4 text-gray-900"
                style={styles.filterHeading}
              >
                Categories
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories
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
              <h3
                className="mb-4 text-gray-900"
                style={styles.filterHeading}
              >
                Duration
              </h3>
              <div className="flex flex-col gap-3">
                {durationOptions.map((duration) => (
                  <Checkbox
                    key={duration}
                    label={duration}
                    checked={(selectedFilters.duration as Set<string>).has(duration)}
                    onChange={() => handleToggle("duration", duration)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3
                className="mb-4 text-gray-900"
                style={styles.filterHeading}
              >
                Tags
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tagOptions.map((tag) => (
                  <Checkbox
                    key={tag}
                    label={tag}
                    checked={(selectedFilters.tags as Set<string>).has(tag)}
                    onChange={() => handleToggle("tags", tag)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3
                className="mb-4 text-gray-900"
                style={styles.filterHeading}
              >
                Level
              </h3>
              <div className="flex flex-col gap-3">
                {levelOptions.map((level) => (
                  <Checkbox
                    key={level}
                    label={level}
                    checked={(selectedFilters.level as Set<string>).has(level)}
                    onChange={() => handleToggle("level", level)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3
                className="mb-4 text-gray-900"
                style={styles.filterHeading}
              >
                Language
              </h3>
              <div className="flex flex-col gap-3">
                {languageOptions.map((language) => (
                  <Checkbox
                    key={language}
                    label={language}
                    checked={(selectedFilters.language as Set<string>).has(language)}
                    onChange={() => handleToggle("language", language)}
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
            onClick={resetFilters}
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

export default VideosContent;



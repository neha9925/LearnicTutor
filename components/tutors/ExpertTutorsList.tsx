"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { GraduationCap, Users, Clock } from "lucide-react";
import { HOME_TOP_TUTORS } from "@/data/home";
import { colors, shadows, typography } from "@/theme";
import { TextField, Select, MenuItem, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";

const styles = {
  card: {
    borderRadius: "26px",
    boxShadow: shadows.cardElevated,
    border: `1px solid rgba(147, 197, 253, 0.35)`,
    backgroundColor: colors.neutral.white,
  } as const,
  tutorName: typography.card.titleMd,
  badge: {
    color: colors.neutral.white,
  } as const,
  subjectChip: {
    ...typography.labels.md,
    justifyContent: "center",
  } as const,
  detailText: {
    ...typography.card.bodySm,
    color: colors.text.secondary,
  },
  primaryButton: {
    ...typography.button.secondary,
  } as const,
} as const;

const sortOptions = [
  { label: "Sort by Popularity", value: "popularity" },
  { label: "Sort by Rating", value: "rating" },
  { label: "Sort by Experience", value: "experience" },
  { label: "Sort by Students", value: "students" },
];

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "#E5E7EB",
    },
    "&:hover fieldset": {
      borderColor: "#D1D5DB",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#572EEE",
    },
  },
  "& .MuiInputBase-input": {
    padding: "12px 14px",
  },
});

const StyledSelect = styled(Select)({
  borderRadius: "8px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#E5E7EB",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D1D5DB",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#572EEE",
  },
  "& .MuiSelect-select": {
    padding: "12px 14px",
    color: "#6B7280",
  },
});

const ExpertTutorsList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity");

  const filteredAndSortedTutors = useMemo(() => {
    let filtered = HOME_TOP_TUTORS.filter(
      (tutor) =>
        tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.degree.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === "rating") {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "experience") {
      filtered = [...filtered].sort((a, b) => {
        const aExp = parseInt(a.experience);
        const bExp = parseInt(b.experience);
        return bExp - aExp;
      });
    } else if (sortBy === "students") {
      filtered = [...filtered].sort((a, b) => b.students - a.students);
    } else if (sortBy === "popularity") {
      // Sort by popularity (combination of rating and students)
      filtered = [...filtered].sort((a, b) => {
        const aScore = a.rating * 0.6 + (a.students / 1000) * 0.4;
        const bScore = b.rating * 0.6 + (b.students / 1000) * 0.4;
        return bScore - aScore;
      });
    }

    return filtered;
  }, [searchQuery, sortBy]);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        {/* Search and Sort Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <StyledTextField
              fullWidth
              placeholder="Search tutor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search className="w-5 h-5 text-gray-400" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="w-full sm:w-48">
            <StyledSelect
              fullWidth
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as string)}
              displayEmpty
            >
              {sortOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledSelect>
          </div>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredAndSortedTutors.map((tutor) => (
            <Link
              key={tutor.id}
              href={`/tutors/${tutor.id}`}
              className="bg-white relative overflow-hidden flex flex-col h-full transition-all duration-300 rounded-[26px] hover:shadow-lg cursor-pointer"
              style={styles.card}
            >
              <div className="relative w-full h-72 md:h-[380px] overflow-hidden flex-shrink-0 rounded-t-[28px]">
                <ImageWithFallback
                  src={tutor.image || `/images/tutors/${tutor.id}.jpg`}
                  alt={tutor.name}
                  width={349}
                  height={256}
                  className="absolute inset-0 w-full h-full object-contain transition-all duration-300"
                  fallback={
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">
                        {tutor.name.charAt(0)}
                      </span>
                    </div>
                  }
                />

                <span
                  className="absolute top-4 right-4 text-sm font-semibold drop-shadow-lg"
                  style={styles.badge}
                >
                  {tutor.badge}
                </span>
              </div>

              <div
                className="p-5 md:p-6 flex flex-col flex-1"
                style={{ backgroundColor: colors.neutral.white }}
              >
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3
                    className="font-bold"
                    style={{
                      ...styles.tutorName,
                      color: colors.text.primary,
                    }}
                  >
                    {tutor.name}
                  </h3>
                  <StarRating rating={tutor.rating} size="md" />
                </div>

                <div
                  className="inline-flex items-center px-4 py-2 rounded-full mb-4"
                  style={{
                    backgroundColor:
                      tutor.subject === "Mathematics"
                        ? "#DBEAFE"
                        : tutor.subject === "Computer Science"
                        ? "#DCFCE7"
                        : tutor.subject === "Physics"
                        ? "#F3E8FF"
                        : tutor.subject === "Business Strategy"
                        ? "#FED7AA"
                        : tutor.subject === "Biology"
                        ? "#DCFCE7"
                        : tutor.subject === "Robotics"
                        ? "#E9D5FF"
                        : tutor.subject === "Data Analytics"
                        ? "#DBEAFE"
                        : tutor.subject === "Creative Writing"
                        ? "#FCE7F3"
                        : tutor.subjectColor,
                    color: colors.text.primary,
                    ...styles.subjectChip,
                    maxWidth: "180px",
                  }}
                >
                  {tutor.subject}
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#3B82F6] flex-shrink-0" />
                    <span style={styles.detailText}>{tutor.degree}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#3B82F6] flex-shrink-0" />
                    <span style={styles.detailText}>
                      {tutor.students.toLocaleString()} Students
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#3B82F6] flex-shrink-0" />
                    <span style={styles.detailText}>
                      {tutor.experience}
                    </span>
                  </div>
                </div>

                <div
                  className="w-full py-4 px-4 rounded-lg font-medium text-white mt-auto bg-[#572EEE] hover:bg-[#3311B2] transition-colors text-center"
                  style={styles.primaryButton}
                >
                  View Profile
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTutorsList;


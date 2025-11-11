"use client";

import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CourseCard from "@/components/home/CourseCard";
import { liveClassCards } from "@/data/liveClassesList";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Filter as FilterIcon } from "lucide-react";
import { colors, gradients, radii, shadows, spacing, typography, baseSelectStyles } from "@/theme";

const styles = {
  sectionHeading: typography.section.headingLg,
  sectionDescription: typography.section.descriptionLg,
  filterPanel: {
    boxShadow: shadows.cardSoft,
  },
  filterLabel: {
    ...typography.labels.md,
    color: colors.text.tertiary,
    textAlign: "left" as const,
  },
  gridWrapper: {
    maxWidth: spacing.containerMax,
    margin: "0 auto",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  exploreButton: {
    ...typography.button.primary,
    backgroundColor: colors.brand.primarySoft,
    color: colors.text.light,
    width: "198.265625px",
    height: "60px",
    borderRadius: radii.lg,
  },
} as const;

const selectStyles = {
  ...baseSelectStyles,
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: colors.border.light,
  },
} as const;

const CourseSection: React.FC = () => {
  const [classValue, setClassValue] = useState("Class 10");
  const [stateValue, setStateValue] = useState("State");
  const [boardValue, setBoardValue] = useState("All Boards");
  const [subjectValue, setSubjectValue] = useState("All Subjects");

  const courses = useMemo(() => liveClassCards.slice(0, 6), []);

  const handleClassChange = useCallback((e: SelectChangeEvent) => {
    setClassValue(e.target.value);
  }, []);

  const handleStateChange = useCallback((e: SelectChangeEvent) => {
    setStateValue(e.target.value);
  }, []);

  const handleBoardChange = useCallback((e: SelectChangeEvent) => {
    setBoardValue(e.target.value);
  }, []);

  const handleSubjectChange = useCallback((e: SelectChangeEvent) => {
    setSubjectValue(e.target.value);
  }, []);

  return (
    <section
      className="py-16 md:py-20"
      style={{
        background: gradients.courseSectionBackground,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-gray-900 mb-4"
            style={styles.sectionHeading}
          >
            Virtual Face-to-Face Academic Classes
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            style={styles.sectionDescription}
          >
            Join interactive live sessions with expert teachers and boost your academic performance
          </p>
        </div>

        <div className="flex justify-center mb-10 px-0 sm:px-4">
          <div className="w-full max-w-[1300px] flex flex-wrap items-center gap-3 bg-white rounded-2xl px-5 py-4" style={styles.filterPanel}>
            <div className="flex items-center gap-2 text-gray-500 font-medium" style={styles.filterLabel}>
              <FilterIcon className="w-4 h-4" />
              Filter by:
            </div>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select
                value={classValue}
                onChange={handleClassChange}
                displayEmpty
                inputProps={{ "aria-label": "Class filter" }}
                sx={selectStyles}
              >
                <MenuItem value="Class 10">Class 10</MenuItem>
                <MenuItem value="Class 11">Class 11</MenuItem>
                <MenuItem value="Class 12">Class 12</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select
                value={stateValue}
                onChange={handleStateChange}
                displayEmpty
                inputProps={{ "aria-label": "State filter" }}
                sx={selectStyles}
              >
                <MenuItem value="State">State</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Maharashtra">Maharashtra</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 140 }}>
              <Select
                value={boardValue}
                onChange={handleBoardChange}
                displayEmpty
                inputProps={{ "aria-label": "Board filter" }}
                sx={selectStyles}
              >
                <MenuItem value="All Boards">All Boards</MenuItem>
                <MenuItem value="CBSE">CBSE</MenuItem>
                <MenuItem value="ICSE">ICSE</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <Select
                value={subjectValue}
                onChange={handleSubjectChange}
                displayEmpty
                inputProps={{ "aria-label": "Subject filter" }}
                sx={selectStyles}
              >
                <MenuItem value="All Subjects">All Subjects</MenuItem>
                <MenuItem value="Maths">Maths</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 justify-items-center px-0 sm:px-4"
          style={{ ...styles.gridWrapper, paddingLeft: "0", paddingRight: "0" }}
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
              href={course.href ?? `/live-classes/${course.id}`}
            />
          ))}
        </div>

        <div className="text-center pt-6">
          <Link href="/live-classes" className="inline-block">
            <Button
              variant="primary"
              size="lg"
              className="text-white"
              style={styles.exploreButton}
            >
              Explore More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;


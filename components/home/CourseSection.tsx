"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CourseCard from "@/components/home/CourseCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { liveClassCards } from "@/data/liveClassesList";
import { Filter as FilterIcon } from "lucide-react";
import Select, {
  type CSSObjectWithLabel,
  type ControlProps,
  type DropdownIndicatorProps,
  type GroupBase,
  type OptionProps,
  type SingleValue,
  type StylesConfig,
  type ValueContainerProps,
} from "react-select";
import { colors, gradients, radii, shadows, spacing, typography, FONT_FAMILY } from "@/theme";

const styles = {
  filterPanel: {
    boxShadow: shadows.cardSoft,
  },
  filterLabel: {
    ...typography.labels.md,
    color: colors.text.tertiary,
  },
} as const;

type Option = {
  label: string;
  value: string;
};

const classOptions: Option[] = [
  { label: "Class 10", value: "Class 10" },
  { label: "Class 11", value: "Class 11" },
  { label: "Class 12", value: "Class 12" },
];

const stateOptions: Option[] = [
  { label: "All States", value: "All States" },
  { label: "Delhi", value: "Delhi" },
  { label: "Maharashtra", value: "Maharashtra" },
];

const boardOptions: Option[] = [
  { label: "All Boards", value: "All Boards" },
  { label: "CBSE", value: "CBSE" },
  { label: "ICSE", value: "ICSE" },
];

const subjectOptions: Option[] = [
  { label: "All Subjects", value: "All Subjects" },
  { label: "Maths", value: "Maths" },
  { label: "Science", value: "Science" },
];

const selectStyles: StylesConfig<Option, false, GroupBase<Option>> = {
  control: (
    base: CSSObjectWithLabel,
    state: ControlProps<Option, false, GroupBase<Option>>
  ) => ({
    ...base,
    borderRadius: radii.md,
    borderColor: state.isFocused ? colors.brand.primarySoft : colors.border.light,
    boxShadow: state.isFocused ? `0 0 0 1px ${colors.brand.primarySoft}` : "none",
    paddingLeft: 4,
    paddingRight: 4,
    minHeight: "42px",
    fontFamily: FONT_FAMILY,
    fontWeight: 500,
    fontSize: "14px",
    color: colors.text.secondary,
    "&:hover": {
      borderColor: colors.brand.primarySoft,
    },
  }),
  valueContainer: (
    base: CSSObjectWithLabel,
    _props: ValueContainerProps<Option, false, GroupBase<Option>>
  ) => ({
    ...base,
    paddingLeft: 0,
  }),
  placeholder: (base: CSSObjectWithLabel) => ({
    ...base,
    color: colors.text.tertiary,
  }),
  singleValue: (base: CSSObjectWithLabel) => ({
    ...base,
    color: colors.text.secondary,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (
    base: CSSObjectWithLabel,
    state: DropdownIndicatorProps<Option, false, GroupBase<Option>>
  ) => ({
    ...base,
    color: colors.brand.primarySoft,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s ease",
  }),
  menu: (base: CSSObjectWithLabel) => ({
    ...base,
    borderRadius: radii.md,
    boxShadow: shadows.cardSoft,
    overflow: "hidden",
    zIndex: 30,
  }),
  option: (
    base: CSSObjectWithLabel,
    state: OptionProps<Option, false, GroupBase<Option>>
  ) => ({
    ...base,
    fontFamily: FONT_FAMILY,
    fontSize: "14px",
    fontWeight: 500,
    color: state.isSelected ? "#fff" : colors.text.secondary,
    backgroundColor: state.isSelected
      ? colors.brand.primarySoft
      : state.isFocused
      ? `${colors.brand.primarySoft}1A`
      : "#fff",
    cursor: "pointer",
  }),
};

const CourseSection: React.FC = () => {
  const [classValue, setClassValue] = useState<Option>(classOptions[0]);
  const [stateValue, setStateValue] = useState<Option>(stateOptions[0]);
  const [boardValue, setBoardValue] = useState<Option>(boardOptions[0]);
  const [subjectValue, setSubjectValue] = useState<Option>(subjectOptions[0]);

  const courses = useMemo(() => liveClassCards.slice(0, 6), []);

  return (
    <section
      className="py-12 md:py-16"
      style={{
        background: gradients.courseSectionBackground,
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
        <SectionHeader
          title="Virtual Face-to-Face Academic Classes"
          subtitle="Join interactive live sessions with expert teachers and boost your academic performance"
          variant="light"
          bottomMargin="md"
        />

        <div className="flex justify-center mb-10 px-0 sm:px-4">
          <div
            className="w-full max-w-4xl grid grid-cols-1 min-[420px]:grid-cols-2 gap-3 justify-items-stretch items-stretch sm:flex sm:flex-wrap sm:items-center justify-center bg-white rounded-2xl px-4 sm:px-6 py-5 text-center sm:text-left"
            style={styles.filterPanel}
          >
            <div className="flex items-center gap-2 text-gray-500 font-medium justify-center sm:justify-start col-span-full" style={styles.filterLabel}>
              <FilterIcon className="w-4 h-4" />
              Filter by:
            </div>
            <div className="w-full sm:flex-1 md:w-auto md:min-w-[140px]">
              <Select
                options={classOptions}
                value={classValue}
                onChange={(option: SingleValue<Option>) => option && setClassValue(option)}
                isSearchable={false}
                styles={selectStyles}
                placeholder="Select class"
                aria-label="Class filter"
              />
            </div>
            <div className="w-full sm:flex-1 md:w-auto md:min-w-[140px]">
              <Select
                options={stateOptions}
                value={stateValue}
                onChange={(option: SingleValue<Option>) => option && setStateValue(option)}
                isSearchable={false}
                styles={selectStyles}
                placeholder="Select state"
                aria-label="State filter"
              />
            </div>
            <div className="w-full sm:flex-1 md:w-auto md:min-w-[160px]">
              <Select
                options={boardOptions}
                value={boardValue}
                onChange={(option: SingleValue<Option>) => option && setBoardValue(option)}
                isSearchable={false}
                styles={selectStyles}
                placeholder="Select board"
                aria-label="Board filter"
              />
            </div>
            <div className="w-full sm:flex-1 md:w-auto md:min-w-[180px]">
              <Select
                options={subjectOptions}
                value={subjectValue}
                onChange={(option: SingleValue<Option>) => option && setSubjectValue(option)}
                isSearchable={false}
                styles={selectStyles}
                placeholder="Select subject"
                aria-label="Subject filter"
              />
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 mb-8 w-full max-w-[1400px] mx-auto items-stretch"
        >
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              {...course}
              href={course.href ?? `/live-classes/${course.id}`}
              footerPaddingTop="11px"
              isNew={index < 3}
            />
          ))}
        </div>

        <div className="text-center pt-6">
          <Link href="/live-classes" className="inline-block">
            <Button
              variant="primary"
              size="lg"
              className="text-white bg-[#572EEE] hover:bg-[#3311B2] transition-colors w-full sm:w-auto px-8 py-5 rounded-xl font-semibold"
              style={{
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center" as const,
              }}
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


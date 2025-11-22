"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { colors, typography } from "@/theme";
import { TextField, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { styled } from "@mui/material/styles";
import SideDrawer from "@/components/ui/SideDrawer";

const styles = {
  sectionHeading: typography.section.headingLg,
  sectionDescription: typography.section.descriptionLg,
  jobTitle: typography.card.titleMd,
  jobDescription: typography.card.bodySm,
  primaryButton: {
    ...typography.button.secondary,
  } as const,
} as const;

interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  postedDate: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    description: "Build scalable, responsive web applications using modern frameworks. Collaborate with cross-functional teams to deliver exceptional user experiences.",
    postedDate: "Posted 1 day ago",
  },
  {
    id: "2",
    title: "UX/UI Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
    description: "Create intuitive and beautiful user interfaces for our learning platform. Work closely with product managers and developers to bring designs to life.",
    postedDate: "Posted 2 days ago",
  },
  {
    id: "3",
    title: "Content Marketing Manager",
    department: "Marketing",
    type: "Full-time",
    location: "Remote",
    description: "Develop and execute content strategies to engage our audience. Create compelling content across multiple channels to drive growth and brand awareness.",
    postedDate: "Posted 3 days ago",
  },
  {
    id: "4",
    title: "Product Manager",
    department: "Product",
    type: "Full-time",
    location: "Remote",
    description: "Lead product development initiatives from conception to launch. Work with engineering, design, and business teams to deliver innovative solutions.",
    postedDate: "Posted 5 days ago",
  },
  {
    id: "5",
    title: "Data Analyst",
    department: "Analytics",
    type: "Full-time",
    location: "Remote",
    description: "Analyze user behavior and platform metrics to drive data-informed decisions. Create reports and dashboards to support business objectives.",
    postedDate: "Posted 1 week ago",
  },
  {
    id: "6",
    title: "Customer Success Manager",
    department: "Support",
    type: "Full-time",
    location: "Remote",
    description: "Ensure customer satisfaction and retention. Build relationships with clients and help them achieve their learning goals on our platform.",
    postedDate: "Posted 1 week ago",
  },
];

const departmentOptions = [
  { label: "All Departments", value: "all" },
  { label: "Engineering", value: "Engineering" },
  { label: "Design", value: "Design" },
  { label: "Marketing", value: "Marketing" },
  { label: "Product", value: "Product" },
  { label: "Analytics", value: "Analytics" },
  { label: "Support", value: "Support" },
];

const locationOptions = [
  { label: "All Locations", value: "all" },
  { label: "Remote", value: "Remote" },
  { label: "On-site", value: "On-site" },
  { label: "Hybrid", value: "Hybrid" },
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
    color: "#374151",
  },
});

const CurrentOpenings: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  const filteredJobs = useMemo(() => {
    let filtered = jobOpenings.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDepartment =
        selectedDepartment === "all" || job.department === selectedDepartment;
      const matchesLocation =
        selectedLocation === "all" || job.location === selectedLocation;

      return matchesSearch && matchesDepartment && matchesLocation;
    });

    return filtered;
  }, [searchQuery, selectedDepartment, selectedLocation]);

  const getTagColor = (type: string, tagType: "department" | "jobType" | "location") => {
    if (tagType === "department") {
      // Engineering: light purple background, dark purple text
      return { bg: "#F3E8FF", text: "#6B21A8" };
    } else if (tagType === "jobType") {
      // Full-time: light green background, dark green text
      return { bg: "#DCFCE7", text: "#166534" };
    } else if (tagType === "location") {
      // Remote: light blue background, dark blue text
      return { bg: "#DBEAFE", text: "#1E40AF" };
    }
    return { bg: "#F3F4F6", text: "#374151" };
  };

  return (
    <section
      className="py-12 md:py-16"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 35.36%, #FDF2F8 70.71%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-gray-900 mb-4" style={styles.sectionHeading}>
            Current Openings
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={styles.sectionDescription}
          >
            Find your perfect role and start making an impact today
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 bg-white rounded-xl p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <StyledTextField
                fullWidth
                placeholder="Search by role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                variant="outlined"
              />
            </div>
            <div className="w-full sm:w-48">
              <StyledSelect
                fullWidth
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value as string)}
                displayEmpty
              >
                {departmentOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </StyledSelect>
            </div>
            <div className="w-full sm:w-48">
              <StyledSelect
                fullWidth
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value as string)}
                displayEmpty
              >
                {locationOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </StyledSelect>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => {
            const deptColor = getTagColor(job.department, "department");
            const jobTypeColor = getTagColor(job.type, "jobType");
            const locationColor = getTagColor(job.location, "location");
            return (
              <div
                key={job.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow relative"
              >
                {/* Title and Button Row */}
                <div className="flex items-start justify-between mb-4">
                  <h3
                    className="font-bold text-gray-900 text-xl"
                    style={styles.jobTitle}
                  >
                    {job.title}
                  </h3>
                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setIsDrawerOpen(true);
                    }}
                    className="px-6 py-3 rounded-lg text-white bg-[#572EEE] hover:bg-[#3311B2] transition-colors whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 500,
                      fontStyle: "normal",
                      fontSize: "16px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                    }}
                  >
                    Apply Now
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className="px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: deptColor.bg,
                      color: deptColor.text,
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 500,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                    }}
                  >
                    {job.department}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: jobTypeColor.bg,
                      color: jobTypeColor.text,
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 500,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                    }}
                  >
                    {job.type}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: locationColor.bg,
                      color: locationColor.text,
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 500,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                    }}
                  >
                    {job.location}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="text-gray-600 mb-4 leading-relaxed"
                  style={styles.jobDescription}
                >
                  {job.description}
                </p>

                {/* Date Posted */}
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    {job.postedDate}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No job openings match your criteria. Try adjusting your filters.</p>
          </div>
        )}
      </div>

      {/* Application Drawer */}
      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setSelectedJob(null);
        }}
        title=""
        width="max-w-2xl"
      >
        {selectedJob && (
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-gray-900 mb-2"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "30px",
                  lineHeight: "36px",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                Apply for this <span className="text-[#572EEE]">Position</span>
              </h2>
              <p className="text-gray-600"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "23px",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                Join Learnic and help us make education smarter with live classes, recorded videos, and interactive test series.
              </p>
            </div>

            {/* Application Form */}
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission here
                alert("Application submitted successfully!");
                setIsDrawerOpen(false);
                setSelectedJob(null);
              }}
            >
              {/* Row 1: Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label 
                    className="block text-gray-700 mb-2"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 500,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    Full Name
                  </label>
                  <StyledTextField
                    fullWidth
                    placeholder="John Doe"
                    variant="outlined"
                    required
                  />
                </div>
                <div>
                  <label 
                    className="block text-gray-700 mb-2"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 500,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    Email Address
                  </label>
                  <StyledTextField
                    fullWidth
                    type="email"
                    placeholder="john@example.com"
                    variant="outlined"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Phone Number and Position */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label 
                    className="block text-gray-700 mb-2"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 500,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    Phone Number
                  </label>
                  <StyledTextField
                    fullWidth
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    variant="outlined"
                    required
                  />
                </div>
                <div>
                  <label 
                    className="block text-gray-700 mb-2"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 500,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    Position Applying For
                  </label>
                  <StyledSelect
                    fullWidth
                    value={selectedJob.title}
                    displayEmpty
                  >
                    <MenuItem value={selectedJob.title}>{selectedJob.title}</MenuItem>
                  </StyledSelect>
                </div>
              </div>

              {/* Row 3: Upload Resume */}
              <div>
                <label 
                  className="block text-gray-700 mb-2"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  Upload resume
                </label>
                <label
                  htmlFor="resume-upload"
                  className="block border-2 border-dashed border-[#C084FC] rounded-lg p-8 text-center hover:bg-[#F3E8FF] transition-colors cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <svg
                        className="w-full h-full text-[#572EEE]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <p 
                      className="text-gray-700 mb-1"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0%",
                        textAlign: "center",
                      }}
                    >
                      Drop your resume here or click to upload
                    </p>
                    <p 
                      className="text-gray-500"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontSize: "12px",
                        lineHeight: "16px",
                        letterSpacing: "0%",
                        textAlign: "center",
                      }}
                    >
                      PDF, DOC up to 5MB
                    </p>
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="resume-upload"
                  />
                </label>
              </div>

              {/* Row 4: Portfolio / LinkedIn URL */}
              <div>
                <label 
                  className="block text-gray-700 mb-2"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  Portfolio / LinkedIn URL <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <StyledTextField
                  fullWidth
                  placeholder="https://linkedin.com/in/yourprofile"
                  variant="outlined"
                />
              </div>

              {/* Row 5: Cover Letter */}
              <div>
                <label 
                  className="block text-gray-700 mb-2"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  Cover Letter / Message
                </label>
                <StyledTextField
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="Tell us why you're a great fit for this role..."
                  variant="outlined"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 w-4 h-4 text-[#572EEE] border-gray-300 rounded focus:ring-[#572EEE]"
                  required
                />
                <label 
                  htmlFor="consent" 
                  className="text-gray-700"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  I agree to Learnic&apos;s{" "}
                  <Link href="/terms-and-conditions" className="font-bold text-[#572EEE] hover:underline">
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="font-bold text-[#572EEE] hover:underline">
                    privacy policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg text-white bg-[#572EEE] hover:bg-[#3311B2] transition-colors"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 600,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0.4px",
                  textAlign: "center",
                }}
              >
                Submit Application
              </button>

              {/* Footer Text */}
              <p 
                className="text-gray-500 text-center"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0%",
                  textAlign: "center",
                }}
              >
                Our team will get in touch if your profile matches the role.
              </p>
            </form>
          </div>
        )}
      </SideDrawer>
    </section>
  );
};

export default CurrentOpenings;



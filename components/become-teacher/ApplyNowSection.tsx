"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import FileUpload from "@/components/ui/FileUpload";
import FormLabel from "@/components/ui/FormLabel";
import FormContainer from "@/components/ui/FormContainer";
import SubmitButton from "@/components/ui/SubmitButton";
import { CloudUpload, Video } from "lucide-react";
import { TextField, Select, MenuItem, FormControl, Checkbox, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { typography, FONT_FAMILY } from "@/theme";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    "& fieldset": {
      borderColor: "#D1D5DB",
    },
    "&:hover fieldset": {
      borderColor: "#9CA3AF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#572EEE",
    },
  },
  "& .MuiInputBase-input": {
    padding: "12px 14px",
    color: "#1F2937",
    fontFamily: FONT_FAMILY,
    "&::placeholder": {
      color: "#9CA3AF",
      opacity: 1,
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: FONT_FAMILY,
    color: "#374151",
    "&.Mui-focused": {
      color: "#572EEE",
    },
  },
});

const StyledSelect = styled(Select<string>)({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D1D5DB",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#9CA3AF",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#572EEE",
  },
  "& .MuiSelect-select": {
    padding: "12px 14px",
    fontFamily: FONT_FAMILY,
    color: "#1F2937",
    "&.MuiSelect-select[aria-disabled='true']": {
      color: "#9CA3AF",
    },
  },
  "& .MuiMenuItem-root.Mui-disabled": {
    color: "#9CA3AF",
  },
  borderRadius: "8px",
  backgroundColor: "#FFFFFF",
});

const StyledFormControl = styled(FormControl)({
  "& .MuiInputLabel-root": {
    fontFamily: FONT_FAMILY,
    color: "#374151",
    "&.Mui-focused": {
      color: "#572EEE",
    },
  },
});

const styles = {
  label: {
    ...typography.card.bodyMd,
    color: "#374151",
    fontWeight: 500,
    fontFamily: FONT_FAMILY,
  },
} as const;

const ApplyNowSection: React.FC = () => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [subject, setSubject] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="Apply Now"
          subtitle="Fill out the form below to start your teaching journey"
          variant="default"
          bottomMargin="lg"
        />

        <FormContainer>
          <form className="space-y-6">
            <div>
              <FormLabel labelStyle={styles.label}>
                Full Name
              </FormLabel>
              <StyledTextField
                fullWidth
                placeholder="Enter your full name"
                variant="outlined"
              />
            </div>

            <div>
              <FormLabel labelStyle={styles.label}>
                Email Address
              </FormLabel>
              <StyledTextField
                fullWidth
                type="email"
                placeholder="your.email@example.com"
                variant="outlined"
              />
            </div>

            <div>
              <FormLabel labelStyle={styles.label}>
                Phone Number
              </FormLabel>
              <StyledTextField
                fullWidth
                type="tel"
                placeholder="+91 4512 556 522"
                variant="outlined"
              />
            </div>

            <div>
              <FormLabel labelStyle={styles.label}>
                Choose Subject
              </FormLabel>
              <StyledFormControl fullWidth>
                <StyledSelect
                  value={subject}
                  onChange={(e) => setSubject(e.target.value as string)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select a subject
                  </MenuItem>
                  <MenuItem value="math">Mathematics</MenuItem>
                  <MenuItem value="science">Science</MenuItem>
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="history">History</MenuItem>
                </StyledSelect>
              </StyledFormControl>
            </div>

            <div>
              <FormLabel labelStyle={styles.label}>
                Teaching Experience
              </FormLabel>
              <StyledFormControl fullWidth>
                <StyledSelect
                  value={experience}
                  onChange={(e) => setExperience(e.target.value as string)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select experience level
                  </MenuItem>
                  <MenuItem value="beginner">Beginner (0-2 years)</MenuItem>
                  <MenuItem value="intermediate">Intermediate (2-5 years)</MenuItem>
                  <MenuItem value="advanced">Advanced (5+ years)</MenuItem>
                </StyledSelect>
              </StyledFormControl>
            </div>

            <FileUpload
              id="resume-upload"
              label="Upload Resume"
              accept=".pdf,.doc,.docx"
              maxSize="5MB"
              icon={CloudUpload}
              labelStyle={styles.label}
            />

            <FileUpload
              id="video-upload"
              label="Upload Demo Video"
              accept=".mp4,.mov,.avi"
              maxSize="100MB"
              icon={Video}
              labelStyle={styles.label}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  sx={{
                    color: "#572EEE",
                    "&.Mui-checked": {
                      color: "#572EEE",
                    },
                  }}
                />
              }
              label="I agree to the terms and conditions and confirm that all information provided is accurate."
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "var(--font-poppins), sans-serif",
                  color: "#4B5563",
                  fontSize: "14px",
                },
              }}
            />

            <div className="pt-4">
              <SubmitButton>
                Submit Tutor Application
              </SubmitButton>
            </div>
          </form>
        </FormContainer>
      </div>
    </section>
  );
};

export default ApplyNowSection;


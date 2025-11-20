"use client";

import React, { useState } from "react";
import { TextField, Select, MenuItem, Button as MuiButton } from "@mui/material";
import { colors, typography } from "@/theme";

const styles = {
  sectionHeading: {
    ...typography.section.headingLg,
    marginBottom: "12px",
  },
  sectionDescription: {
    ...typography.section.descriptionMd,
    marginBottom: "48px",
  },
} as const;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const subjectOptions = [
    "General Inquiry",
    "Technical Support",
    "Course Information",
    "Partnership",
    "Billing",
    "Feedback",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", formData);
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  return (
    <section 
      className="py-12 md:py-16 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 35.36%, #FDF2F8 70.71%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={styles.sectionHeading} className="text-3xl md:text-4xl">
              Get In Touch
            </h2>
            <p style={styles.sectionDescription} className="text-base md:text-lg">
              We&apos;re here to help and answer any question you might have.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block mb-2"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#374151",
                  }}
                >
                  Full Name
                </label>
                <TextField
                  fullWidth
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#9CA3AF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#5636FF",
                      },
                    },
                    "& .MuiInputBase-input": {
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    },
                  }}
                />
              </div>
              <div>
                <label
                  className="block mb-2"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#374151",
                  }}
                >
                  Email Address
                </label>
                <TextField
                  fullWidth
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#9CA3AF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#5636FF",
                      },
                    },
                    "& .MuiInputBase-input": {
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    },
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block mb-2"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#374151",
                  }}
                >
                  Phone Number (Optional)
                </label>
                <TextField
                  fullWidth
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#9CA3AF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#5636FF",
                      },
                    },
                    "& .MuiInputBase-input": {
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    },
                  }}
                />
              </div>
              <div>
                <label
                  className="block mb-2"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#374151",
                  }}
                >
                  Subject
                </label>
                <Select
                  fullWidth
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  variant="outlined"
                  sx={{
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#D1D5DB",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#9CA3AF",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#5636FF",
                    },
                    "& .MuiSelect-select": {
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    },
                  }}
                >
                  {subjectOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <label
                className="block mb-2"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#374151",
                }}
              >
                Message
              </label>
              <TextField
                fullWidth
                multiline
                rows={6}
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#D1D5DB",
                    },
                    "&:hover fieldset": {
                      borderColor: "#9CA3AF",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#5636FF",
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  },
                }}
              />
            </div>

            <div className="text-center">
              <MuiButton
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#5636FF",
                  borderRadius: "8px",
                  padding: "12px 32px",
                  fontSize: "16px",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#4326D6",
                  },
                }}
              >
                Send Message
              </MuiButton>
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  X,
  Check,
  Plus,
  Trash2,
  User,
  ChevronDown,
  Camera,
} from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Input from "@/components/ui/Input";
import { FONT_FAMILY, colors } from "@/theme";

interface Qualification {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

const EditProfileContent: React.FC = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("Dr. Emily Watson");
  const [shortTitle, setShortTitle] = useState("Advanced Mathematics & Statistics Expert");
  const [subjectTags, setSubjectTags] = useState<string[]>(["Mathematics", "Physics"]);
  const [subjectInput, setSubjectInput] = useState("");
  const [teachingExperience, setTeachingExperience] = useState("5-7 years");
  const [languages, setLanguages] = useState({
    English: true,
    Hindi: true,
    Tamil: false,
    Telugu: false,
  });
  const [aboutMe, setAboutMe] = useState(
    "Passionate mathematics educator with 7+ years of experience helping students excel in advanced mathematics and statistics. I believe in making complex concepts simple through real-world applications and interactive problem-solving sessions."
  );
  const [qualifications, setQualifications] = useState<Qualification[]>([
    { id: "1", degree: "M.Sc Mathematics", institution: "Delhi University", year: "2015" },
    { id: "2", degree: "B.Ed.", institution: "Delhi University", year: "2017" },
  ]);
  const [certifications, setCertifications] = useState<Certification[]>([
    { id: "1", title: "CTET Qualified", issuer: "CBSE", year: "2018" },
    { id: "2", title: "Google for Education", issuer: "Google", year: "2020" },
  ]);
  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);
  const [showQualificationYearDropdowns, setShowQualificationYearDropdowns] = useState<{ [key: string]: boolean }>({});
  const [showCertificationYearDropdowns, setShowCertificationYearDropdowns] = useState<{ [key: string]: boolean }>({});

  const experienceOptions = [
    "Less than 1 year",
    "1-3 years",
    "3-5 years",
    "5-7 years",
    "7-10 years",
    "10+ years",
  ];

  const yearOptions = Array.from({ length: 30 }, (_, i) => (2024 - i).toString());

  const handleAddSubject = () => {
    if (subjectInput.trim() && !subjectTags.includes(subjectInput.trim())) {
      setSubjectTags([...subjectTags, subjectInput.trim()]);
      setSubjectInput("");
    }
  };

  const handleRemoveSubject = (tag: string) => {
    setSubjectTags(subjectTags.filter((t) => t !== tag));
  };

  const handleAddQualification = () => {
    const newQual: Qualification = {
      id: Date.now().toString(),
      degree: "",
      institution: "",
      year: "",
    };
    setQualifications([...qualifications, newQual]);
  };

  const handleRemoveQualification = (id: string) => {
    setQualifications(qualifications.filter((q) => q.id !== id));
  };

  const handleUpdateQualification = (id: string, field: keyof Qualification, value: string) => {
    setQualifications(
      qualifications.map((q) => (q.id === id ? { ...q, [field]: value } : q))
    );
  };

  const handleAddCertification = () => {
    const newCert: Certification = {
      id: Date.now().toString(),
      title: "",
      issuer: "",
      year: "",
    };
    setCertifications([...certifications, newCert]);
  };

  const handleRemoveCertification = (id: string) => {
    setCertifications(certifications.filter((c) => c.id !== id));
  };

  const handleUpdateCertification = (id: string, field: keyof Certification, value: string) => {
    setCertifications(
      certifications.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const toggleQualificationYearDropdown = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setShowCertificationYearDropdowns({}); // Close certification dropdowns
    setShowQualificationYearDropdowns((prev) => {
      const newState: { [key: string]: boolean } = {};
      // Close all other dropdowns and toggle the clicked one
      if (!prev[id]) {
        newState[id] = true;
      }
      return newState;
    });
  };

  const toggleCertificationYearDropdown = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setShowQualificationYearDropdowns({}); // Close qualification dropdowns
    setShowCertificationYearDropdowns((prev) => {
      const newState: { [key: string]: boolean } = {};
      // Close all other dropdowns and toggle the clicked one
      if (!prev[id]) {
        newState[id] = true;
      }
      return newState;
    });
  };

  const closeAllYearDropdowns = () => {
    setShowQualificationYearDropdowns({});
    setShowCertificationYearDropdowns({});
  };

  const handleSaveAllChanges = () => {
    // Collect all form data
    const profileData = {
      fullName,
      shortTitle,
      subjectTags,
      teachingExperience,
      languages,
      aboutMe,
      qualifications,
      certifications,
    };

    // Log the data (in production, this would be sent to an API)
    console.log("Saving profile data:", profileData);

    // Here you would typically make an API call to save the data
    // Example:
    // try {
    //   await fetch('/api/tutor/profile', {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(profileData),
    //   });
    //   router.push('/tutor-dashboard');
    // } catch (error) {
    //   alert('Failed to update profile. Please try again.');
    // }

    // Navigate to dashboard after saving
    router.push("/tutor-dashboard");
  };

  return (
    <div className="space-y-4 md:space-y-6" style={{ fontFamily: FONT_FAMILY }}>
      {/* Basic Information */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
        <h2
          className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Basic Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative">
                <ImageWithFallback
                  src="/images/avatars/tutor-profile.jpg"
                  alt="Dr. Emily Watson"
                  width={100}
                  height={100}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                  fallback={
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-300 flex items-center justify-center">
                      <User size={32} className="md:w-10 md:h-10 text-gray-600" />
                    </div>
                  }
                />
                <div
                  className="absolute bottom-0 right-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: colors.brand.primarySoft,
                  }}
                >
                  <Camera size={14} className="md:w-4 md:h-4" style={{ color: "#FFFFFF" }} />
                </div>
              </div>
              <div>
                <p
                  className="text-xs md:text-sm font-semibold text-gray-900 mb-1"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  Profile Photo
                </p>
                <p
                  className="text-xs text-gray-600 mb-2"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  Upload a professional photo
                </p>
                <button
                  className="text-xs md:text-sm font-semibold"
                  style={{
                    color: colors.brand.primarySoft,
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Change Photo
                </button>
              </div>
            </div>

            {/* Full Name */}
            <div>
              <Input
                label="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mb-1"
              />
              <div className="flex items-center gap-1 mt-1">
                <Check size={16} style={{ color: "#10B981" }} />
                <span
                  className="text-xs"
                  style={{ color: "#10B981", fontFamily: FONT_FAMILY }}
                >
                  Valid
                </span>
              </div>
            </div>

            {/* Short Title/Bio Line */}
            <div>
              <Input
                label="Short Title/Bio Line"
                value={shortTitle}
                onChange={(e) => setShortTitle(e.target.value)}
                maxLength={80}
              />
              <p
                className="text-xs text-gray-500 mt-1"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {shortTitle.length}/80 characters
              </p>
            </div>

            {/* Languages You Teach In */}
            <div>
              <label
                className="block text-xs md:text-sm font-medium text-gray-700 mb-2 md:mb-3"
                style={{ fontFamily: FONT_FAMILY }}
              >
                Languages You Teach In
              </label>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                {Object.entries(languages).map(([lang, checked]) => (
                  <label
                    key={lang}
                    className="flex items-center gap-2 cursor-pointer"
                    style={{ fontFamily: FONT_FAMILY }}
                    onClick={() =>
                      setLanguages({ ...languages, [lang]: !checked })
                    }
                  >
                    <div
                      className="w-4 h-4 flex items-center justify-center flex-shrink-0"
                      style={{
                        width: "16px",
                        height: "16px",
                        backgroundColor: checked ? colors.brand.primarySoft : "#FFFFFF",
                        border: "1px solid #D1D5DB",
                        borderRadius: "0",
                        cursor: "pointer",
                      }}
                    >
                      {checked && (
                        <Check size={12} style={{ color: "#FFFFFF" }} />
                      )}
                    </div>
                    <span className="text-sm" style={{ color: "#9CA3AF", fontFamily: FONT_FAMILY }}>{lang}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Subject Expertise */}
            <div>
              <label
                className="block text-xs md:text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: FONT_FAMILY }}
              >
                Subject Expertise
              </label>
              <input
                type="text"
                placeholder="Add subject..."
                value={subjectInput}
                onChange={(e) => setSubjectInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddSubject();
                  }
                }}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-xs md:text-sm mb-2"
                style={{ fontFamily: FONT_FAMILY }}
              />
              <div className="flex flex-wrap gap-2">
                {subjectTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg text-xs md:text-sm font-medium bg-purple-100 text-purple-700"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    {tag}
                    <button
                      onClick={() => handleRemoveSubject(tag)}
                      className="hover:bg-purple-200 rounded-full p-0.5"
                    >
                      <X size={12} className="md:w-3.5 md:h-3.5" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Teaching Experience */}
            <div className="relative">
              <label
                className="block text-xs md:text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: FONT_FAMILY }}
              >
                Teaching Experience
              </label>
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeAllYearDropdowns();
                    setShowExperienceDropdown(!showExperienceDropdown);
                  }}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 bg-white text-left flex items-center justify-between text-xs md:text-sm"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  <span>{teachingExperience}</span>
                  <ChevronDown size={16} className="md:w-[18px] md:h-[18px] text-gray-400" />
                </button>
                {showExperienceDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => {
                        closeAllYearDropdowns();
                        setShowExperienceDropdown(false);
                      }}
                      style={{ backgroundColor: "transparent", pointerEvents: "auto" }}
                    />
                    <div className="absolute z-40 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto" style={{ pointerEvents: "auto" }}>
                      {experienceOptions.map((option) => (
                        <button
                          key={option}
                          onClick={(e) => {
                            e.stopPropagation();
                            setTeachingExperience(option);
                            closeAllYearDropdowns();
                            setShowExperienceDropdown(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
        <h2
          className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          About Me
        </h2>
        <textarea
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          rows={6}
          className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-xs md:text-sm"
          style={{ fontFamily: FONT_FAMILY }}
        />
      </div>

      {/* Education & Qualifications */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
        <h2
          className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Education & Qualifications
        </h2>
        <div className="space-y-3 md:space-y-4">
          {qualifications.map((qual) => (
            <div key={qual.id} className="flex flex-col md:flex-row gap-3 md:gap-4 items-start">
              <Input
                placeholder="Degree"
                value={qual.degree}
                onChange={(e) =>
                  handleUpdateQualification(qual.id, "degree", e.target.value)
                }
                className="flex-1"
              />
              <Input
                placeholder="Institution"
                value={qual.institution}
                onChange={(e) =>
                  handleUpdateQualification(qual.id, "institution", e.target.value)
                }
                className="flex-1"
              />
              <div className="relative w-full md:w-32">
                <button
                  onClick={(e) => toggleQualificationYearDropdown(qual.id, e)}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 bg-white text-left flex items-center justify-between text-xs md:text-sm"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  <span>{qual.year || "Year"}</span>
                  <ChevronDown size={16} className="md:w-[18px] md:h-[18px] text-gray-400" />
                </button>
                {showQualificationYearDropdowns[qual.id] && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={closeAllYearDropdowns}
                      style={{ backgroundColor: "transparent", pointerEvents: "auto" }}
                    />
                    <div className="absolute z-40 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto" style={{ pointerEvents: "auto" }}>
                      {yearOptions.map((year) => (
                        <button
                          key={year}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleUpdateQualification(qual.id, "year", year);
                            closeAllYearDropdowns();
                          }}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <button
                onClick={() => handleRemoveQualification(qual.id)}
                className="p-2 text-gray-400 hover:text-red-600 transition-colors self-start md:self-auto"
              >
                <Trash2 size={16} className="md:w-[18px] md:h-[18px]" />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={handleAddQualification}
          className="mt-3 md:mt-4 text-xs md:text-sm font-semibold flex items-center gap-1"
          style={{
            color: colors.brand.primarySoft,
            fontFamily: FONT_FAMILY,
          }}
        >
          <Plus size={14} className="md:w-4 md:h-4" />
          Add Qualification
        </button>
      </div>

      {/* Achievements & Certifications */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
        <h2
          className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Achievements & Certifications
        </h2>
        <div className="space-y-3 md:space-y-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col md:flex-row gap-3 md:gap-4 items-start">
              <Input
                placeholder="Title"
                value={cert.title}
                onChange={(e) =>
                  handleUpdateCertification(cert.id, "title", e.target.value)
                }
                className="flex-1"
              />
              <Input
                placeholder="Issuer"
                value={cert.issuer}
                onChange={(e) =>
                  handleUpdateCertification(cert.id, "issuer", e.target.value)
                }
                className="flex-1"
              />
              <div className="relative w-full md:w-32">
                <button
                  onClick={(e) => toggleCertificationYearDropdown(cert.id, e)}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-gray-300 bg-white text-left flex items-center justify-between text-xs md:text-sm"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  <span>{cert.year || "Year"}</span>
                  <ChevronDown size={16} className="md:w-[18px] md:h-[18px] text-gray-400" />
                </button>
                {showCertificationYearDropdowns[cert.id] && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={closeAllYearDropdowns}
                      style={{ backgroundColor: "transparent", pointerEvents: "auto" }}
                    />
                    <div className="absolute z-40 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto" style={{ pointerEvents: "auto" }}>
                      {yearOptions.map((year) => (
                        <button
                          key={year}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleUpdateCertification(cert.id, "year", year);
                            closeAllYearDropdowns();
                          }}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <button
                onClick={() => handleRemoveCertification(cert.id)}
                className="p-2 text-gray-400 hover:text-red-600 transition-colors self-start md:self-auto"
              >
                <Trash2 size={16} className="md:w-[18px] md:h-[18px]" />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={handleAddCertification}
          className="mt-3 md:mt-4 text-xs md:text-sm font-semibold flex items-center gap-1"
          style={{
            color: colors.brand.primarySoft,
            fontFamily: FONT_FAMILY,
          }}
        >
          <Plus size={14} className="md:w-4 md:h-4" />
          Add Certification
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 md:gap-4 pt-3 md:pt-4">
        <button
          onClick={() => {
            // Reset form or navigate back
            window.history.back();
          }}
          className="px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-xs md:text-sm font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors w-full sm:w-auto"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Cancel
        </button>
        <button
          onClick={handleSaveAllChanges}
          className="px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-xs md:text-sm font-semibold text-white hover:opacity-90 transition-opacity w-full sm:w-auto"
          style={{
            backgroundColor: colors.brand.primarySoft,
            fontFamily: FONT_FAMILY,
          }}
        >
          Save All Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfileContent;


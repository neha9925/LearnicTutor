"use client";

import React, { useState, useRef, useEffect } from "react";
import { Calendar, Upload, Check, Heart, ChevronDown } from "lucide-react";
import {
  TextField,
  InputAdornment,
} from "@mui/material";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { colors, typography, FONT_FAMILY } from "@/theme";

const DonationFormContent: React.FC = () => {
  const [donationType, setDonationType] = useState<"sponsor" | "custom">("sponsor");
  const [selectedStudents, setSelectedStudents] = useState(1);
  const [customAmount, setCustomAmount] = useState("");
  const [citizenship, setCitizenship] = useState<"indian" | "foreign">("indian");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    panCard: "",
    mobile: "",
    alternateNumber: "",
    sameOnWhatsapp: false,
    address: "",
    pincode: "",
    state: "",
    city: "",
    receive80G: false,
    agreeTerms: false,
  });

  // Dummy States Data
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
    "Puducherry",
  ];

  // Dummy Cities Data (mapped by state)
  const citiesByState: { [key: string]: string[] } = {
    "Andhra Pradesh": ["Hyderabad", "Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Bomdila"],
    "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
    "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Karnal"],
    "Himachal Pradesh": ["Shimla", "Mandi", "Solan", "Dharamshala", "Kullu"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    "Kerala": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "Manipur": ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Ukhrul"],
    "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh", "Baghmara"],
    "Mizoram": ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur"],
    "Punjab": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer"],
    "Sikkim": ["Gangtok", "Namchi", "Mangan", "Gyalshing", "Singtam"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
    "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailasahar", "Belonia"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rishikesh"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
    "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
    "Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam"],
  };

  const availableCities = formData.state ? citiesByState[formData.state] || [] : [];

  const perStudentCost = 2500;
  const totalStudents = 24;
  const fullBatchAmount = totalStudents * perStudentCost;
  const totalAmount =
    donationType === "sponsor"
      ? selectedStudents * perStudentCost
      : customAmount
      ? parseInt(customAmount) || 0
      : 0;

  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const stateDropdownRef = useRef<HTMLDivElement>(null);
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        stateDropdownRef.current &&
        !stateDropdownRef.current.contains(event.target as Node)
      ) {
        setStateDropdownOpen(false);
      }
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target as Node)
      ) {
        setCityDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      // Reset city when state changes
      if (field === "state") {
        updated.city = "";
      }
      return updated;
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="flex items-center justify-center min-h-[400px] md:min-h-[500px]"
        style={{
          background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
        }}
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{
              fontFamily: FONT_FAMILY,
              lineHeight: "1.2",
            }}
          >
            Sponsor a Class. Support
            <br />
            India&apos;s Future.
          </h1>
          <p
            className="text-lg md:text-xl text-white max-w-2xl mx-auto"
            style={{
              fontFamily: FONT_FAMILY,
              lineHeight: "1.6",
            }}
          >
            Help students from Class 6–12 access top-quality learning
            <br />
            in Mathematics, Science, English & more.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Class Heading */}
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Class 9 - Mathematics
                </h2>
              </div>

              {/* Choose Your Donation Type */}
              <div
                className="bg-white rounded-lg p-6 space-y-6"
                style={{
                  border: "1px solid #E5E7EB",
                }}
              >
                <h3
                  className="text-xl font-bold text-gray-900"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Choose Your Donation Type
                </h3>

                {/* Sponsor Students */}
                <div className="space-y-4">
                  <label
                    className="block text-sm font-semibold text-gray-700"
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    Sponsor Students
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[1, 2, 3, 5, 10].map((num) => (
                      <button
                        key={num}
                        onClick={() => {
                          setDonationType("sponsor");
                          setSelectedStudents(num);
                        }}
                        className={`w-12 h-12 rounded-full font-semibold transition-all ${
                          donationType === "sponsor" && selectedStudents === num
                            ? "bg-purple-600 text-white border-2 border-purple-600"
                            : "bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400"
                        }`}
                        style={{
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <p
                    className="text-sm text-gray-600"
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    Per student cost:{" "}
                    <span
                      style={{
                        color: colors.brand.primarySoft,
                        fontWeight: 600,
                      }}
                    >
                      ₹{perStudentCost.toLocaleString()}
                    </span>
                  </p>
                </div>

                {/* Custom Donation */}
                <div className="space-y-4">
                  <label
                    className="block text-sm font-semibold text-gray-700"
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    Custom Donation
                  </label>
                  <Input
                    type="text"
                    placeholder="₹ Enter Amount (INR)"
                    value={customAmount}
                    onChange={(e) => {
                      setDonationType("custom");
                      setCustomAmount(e.target.value);
                    }}
                    className="w-full"
                  />
                </div>

                {/* Full Batch Sponsorship */}
                <div
                  className="rounded-lg p-4 sm:p-5 md:p-6 relative"
                  style={{
                    backgroundColor: "#F3E8FF",
                    borderColor: colors.brand.primarySoft,
                  }}
                >
                  <div className="md:pr-0">
                    <h4
                      className="font-bold text-gray-900 mb-1.5 sm:mb-2 text-base sm:text-lg md:text-[18px]"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      Full Batch Sponsorship
                    </h4>
                    <p
                      className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      Sponsor all {totalStudents} students in Class 6.
                    </p>
                    <p
                      className="text-xl sm:text-2xl font-bold mb-3 md:mb-0"
                      style={{
                        color: colors.brand.primarySoft,
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      ₹{fullBatchAmount.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setDonationType("sponsor");
                      setSelectedStudents(totalStudents);
                    }}
                    className="w-full md:w-auto md:absolute md:bottom-6 md:right-6 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg text-white text-xs sm:text-sm md:text-base font-semibold"
                    style={{
                      background: colors.brand.primarySoft,
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    Recommended
                  </button>
                </div>
              </div>

              {/* Donor Details */}
              <div
                className="bg-white rounded-lg p-6 space-y-6"
                style={{
                  border: "1px solid #E5E7EB",
                }}
              >
                <h3
                  className="text-xl font-bold text-gray-900"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Donor Details
                </h3>

                {/* Select Citizenship */}
                <div className="space-y-3">
                  <label
                    className="block text-sm font-semibold text-gray-700"
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    Select Citizenship
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="citizenship"
                        value="indian"
                        checked={citizenship === "indian"}
                        onChange={(e) =>
                          setCitizenship(e.target.value as "indian" | "foreign")
                        }
                        className="w-4 h-4"
                        style={{
                          accentColor: colors.brand.primarySoft,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        Indian
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="citizenship"
                        value="foreign"
                        checked={citizenship === "foreign"}
                        onChange={(e) =>
                          setCitizenship(e.target.value as "indian" | "foreign")
                        }
                        className="w-4 h-4"
                        style={{
                          accentColor: colors.brand.primarySoft,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        Foreign
                      </span>
                    </label>
                  </div>
                </div>

                {/* Profile Picture Upload */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <Upload
                      size={28}
                      style={{
                        color: "#6B7280",
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    Upload Profile Pic
                  </button>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-2"
                        style={{
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        Full Name*
                      </label>
                      <Input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-2"
                        style={{
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        Date of Birth
                      </label>
                      <TextField
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        placeholder="mm/dd/yyyy"
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Calendar
                                size={20}
                                style={{
                                  color: "#6B7280",
                                  pointerEvents: "none",
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          fontFamily: FONT_FAMILY,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            "& fieldset": {
                              borderColor: "#D1D5DB",
                            },
                            "&:hover fieldset": {
                              borderColor: "#9CA3AF",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: colors.brand.primarySoft,
                              borderWidth: "2px",
                            },
                            "& input": {
                              padding: "12px 14px",
                              fontSize: "14px",
                            },
                            "& input[type='date']::-webkit-calendar-picker-indicator": {
                              opacity: 0,
                              position: "absolute",
                              right: "40px",
                              width: "100%",
                              height: "100%",
                              cursor: "pointer",
                            },
                          },
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-2"
                        style={{
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        Mobile Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange("mobile", e.target.value)}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.sameOnWhatsapp}
                        onChange={(e) => handleInputChange("sameOnWhatsapp", e.target.checked)}
                        className="w-4 h-4"
                        style={{
                          accentColor: colors.brand.primarySoft,
                        }}
                      />
                      <label
                        className="text-sm text-gray-700"
                        style={{
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        Same on whatsapp
                      </label>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-2"
                        style={{
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        Email*
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-2"
                        style={{
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        PAN Card Number
                      </label>
                      <Input
                        type="text"
                        value={formData.panCard}
                        onChange={(e) => handleInputChange("panCard", e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-700 mb-2"
                        style={{
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        Alternate Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.alternateNumber}
                        onChange={(e) => handleInputChange("alternateNumber", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    Address
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows={3}
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  />
                </div>

                {/* Pincode, State, City */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-700 mb-2"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      Pincode
                    </label>
                    <Input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => handleInputChange("pincode", e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-700 mb-2"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      State
                    </label>
                    <div className="relative" ref={stateDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
                        className="w-full px-4 py-3 text-left border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:border-gray-400 transition-colors flex items-center justify-between bg-white"
                        style={{
                          fontFamily: FONT_FAMILY,
                          fontSize: "14px",
                          color: formData.state ? "#111827" : "#9CA3AF",
                        }}
                      >
                        <span>{formData.state || "select state"}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            stateDropdownOpen ? "rotate-180" : ""
                          }`}
                          style={{
                            color: "#6B7280",
                          }}
                        />
                      </button>
                      {stateDropdownOpen && (
                        <div
                          className="absolute z-40 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-[300px] overflow-y-auto"
                          style={{
                            fontFamily: FONT_FAMILY,
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => {
                              handleInputChange("state", "");
                              setStateDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors text-sm"
                            style={{
                              color: "#9CA3AF",
                            }}
                          >
                            select state
                          </button>
                          {states.map((state) => (
                            <button
                              key={state}
                              type="button"
                              onClick={() => {
                                handleInputChange("state", state);
                                setStateDropdownOpen(false);
                              }}
                              className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors text-sm"
                              style={{
                                color: "#111827",
                              }}
                            >
                              {state}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-700 mb-2"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      City
                    </label>
                    <div className="relative" ref={cityDropdownRef}>
                      <button
                        type="button"
                        onClick={() => !formData.state || setCityDropdownOpen(!cityDropdownOpen)}
                        disabled={!formData.state}
                        className="w-full px-4 py-3 text-left border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:border-gray-400 transition-colors flex items-center justify-between bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
                        style={{
                          fontFamily: FONT_FAMILY,
                          fontSize: "14px",
                          color: formData.city ? "#111827" : "#9CA3AF",
                        }}
                      >
                        <span>{formData.city || "select City"}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            cityDropdownOpen ? "rotate-180" : ""
                          }`}
                          style={{
                            color: "#6B7280",
                          }}
                        />
                      </button>
                      {cityDropdownOpen && formData.state && (
                        <div
                          className="absolute z-40 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-[300px] overflow-y-auto"
                          style={{
                            fontFamily: FONT_FAMILY,
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => {
                              handleInputChange("city", "");
                              setCityDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors text-sm"
                            style={{
                              color: "#9CA3AF",
                            }}
                          >
                            select City
                          </button>
                          {availableCities.map((city) => (
                            <button
                              key={city}
                              type="button"
                              onClick={() => {
                                handleInputChange("city", city);
                                setCityDropdownOpen(false);
                              }}
                              className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors text-sm"
                              style={{
                                color: "#111827",
                              }}
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Certificates & Terms */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.receive80G}
                      onChange={(e) => handleInputChange("receive80G", e.target.checked)}
                      className="w-4 h-4"
                      style={{
                        accentColor: colors.brand.primarySoft,
                      }}
                    />
                    <span
                      className="text-sm text-gray-700"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      I would like to receive the 80G Certificate.
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => handleInputChange("agreeTerms", e.target.checked)}
                      className="w-4 h-4"
                      style={{
                        accentColor: colors.brand.primarySoft,
                      }}
                    />
                    <span
                      className="text-sm text-gray-700"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      I agree to{" "}
                      <a
                        href="/terms-and-conditions"
                        className="underline hover:no-underline"
                        style={{
                          color: colors.brand.primarySoft,
                        }}
                      >
                        Terms & Conditions
                      </a>
                      .
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column - Donation Summary */}
            <div className="lg:col-span-1">
              <div
                className="bg-white rounded-lg p-6 sticky top-4"
                style={{
                  fontFamily: FONT_FAMILY,
                  border: "1px solid #E5E7EB",
                }}
              >
                <h3
                  className="text-xl font-bold text-gray-900 mb-6"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Donation Summary
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span
                      className="text-gray-600"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      Donation Type:
                    </span>
                    <span
                      className="font-semibold text-gray-900"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      {donationType === "sponsor" ? "Sponsor Students" : "Custom Donation"}
                    </span>
                  </div>
                  {donationType === "sponsor" && (
                    <>
                      <div className="flex justify-between">
                        <span
                          className="text-gray-600"
                          style={{
                            fontFamily: FONT_FAMILY,
                          }}
                        >
                          Students:
                        </span>
                        <span
                          className="font-semibold text-gray-900"
                          style={{
                            fontFamily: FONT_FAMILY,
                          }}
                        >
                          {selectedStudents} Students
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span
                          className="text-gray-600"
                          style={{
                            fontFamily: FONT_FAMILY,
                          }}
                        >
                          Per Student:
                        </span>
                        <span
                          className="font-semibold text-gray-900"
                          style={{
                            fontFamily: FONT_FAMILY,
                          }}
                        >
                          ₹{perStudentCost.toLocaleString()}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div
                  className="border-t border-b py-4 my-6"
                  style={{
                    borderColor: "#E5E7EB",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span
                      className="text-lg font-semibold text-gray-900"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      Total Amount:
                    </span>
                    <span
                      className="text-2xl font-bold"
                      style={{
                        color: colors.brand.primarySoft,
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      ₹{totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* 80G Benefit */}
                <div
                  className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3"
                  style={{
                    backgroundColor: "#F0FDF4",
                    borderColor: "#BBF7D0",
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "#16A34A",
                    }}
                  >
                    <Check
                      size={14}
                      style={{
                        color: "#FFFFFF",
                      }}
                    />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: "#16A34A",
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    Tax benefit under Section 80G
                  </span>
                </div>

                {/* Impact Message */}
                <div className="flex flex-col items-center mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                    style={{
                      backgroundColor: "#FCE7F3",
                    }}
                  >
                    <Heart
                      size={24}
                      style={{
                        color: "#EF4444",
                        fill: "#EF4444",
                      }}
                    />
                  </div>
                  <span
                    className="text-sm text-gray-900 text-center"
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    You&apos;re making a difference!
                  </span>
                </div>

                {/* Donate Now Button */}
                <button
                  className="w-full py-4 px-6 rounded-lg text-white font-semibold text-lg mb-4 transition-all hover:opacity-90"
                  style={{
                    background: colors.brand.primarySoft,
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Donate Now
                </button>

                {/* Payment Gateway */}
                <p
                  className="text-xs text-center text-gray-500"
                  style={{
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Secure payment powered by Razorpay
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationFormContent;


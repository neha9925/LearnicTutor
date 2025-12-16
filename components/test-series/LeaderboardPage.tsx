"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Users, Trophy, MapPin, Search, ChevronLeft, ChevronRight, ArrowLeft, Award, Star } from "lucide-react";
import { TextField, Select, MenuItem, InputAdornment } from "@mui/material";
import { colors, gradients, radii, shadows, typography } from "@/theme";
import type { LeaderboardData } from "@/data/leaderboard";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

interface LeaderboardPageProps {
  leaderboard: LeaderboardData;
}

const LeaderboardPage: React.FC<LeaderboardPageProps> = ({ leaderboard }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Get state badge color
  const getStateBadgeColor = (state: string) => {
    const stateColors: Record<string, { bg: string; icon: string }> = {
      Punjab: { bg: "#DBEAFE", icon: "#3B82F6" }, // Light blue background, blue text
      "West Bengal": { bg: "#D1FAE5", icon: "#10B981" }, // Light green background, green text
      Haryana: { bg: "#FED7AA", icon: "#F97316" }, // Light orange background, orange text
    };
    return stateColors[state] || { bg: "#F3F0FF", icon: "#6B47ED" }; // Default light purple background, purple text
  };

  // Get unique states and cities
  const states = useMemo(() => {
    const uniqueStates = Array.from(new Set(leaderboard.allParticipants.map((p) => p.state)));
    return ["All States", ...uniqueStates];
  }, [leaderboard.allParticipants]);

  const cities = useMemo(() => {
    const uniqueCities = Array.from(
      new Set(leaderboard.allParticipants.map((p) => p.city).filter(Boolean))
    );
    return ["All Cities", ...uniqueCities];
  }, [leaderboard.allParticipants]);

  // Filter participants
  const filteredParticipants = useMemo(() => {
    return leaderboard.allParticipants.filter((participant) => {
      if (searchQuery && !participant.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      if (selectedState !== "All States" && participant.state !== selectedState) {
        return false;
      }
      if (selectedCity !== "All Cities" && participant.city !== selectedCity) {
        return false;
      }
      return true;
    });
  }, [searchQuery, selectedState, selectedCity, leaderboard.allParticipants]);

  // Pagination
  const totalPages = Math.ceil(filteredParticipants.length / itemsPerPage);
  const paginatedParticipants = filteredParticipants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const styles = {
    topPerformerCard: {
      backgroundColor: colors.neutral.white,
      borderRadius: radii.xl,
      boxShadow: shadows.cardSoft,
      border: `1px solid ${colors.background.cardBorder}`,
    },
    topPerformerCardHighlighted: {
      backgroundColor: "#FEF3C7",
      borderRadius: radii.xl,
      boxShadow: shadows.cardSoft,
      border: `2px solid #FBBF24`,
    },
    userRankCard: {
      backgroundColor: "#F3F0FF",
      borderRadius: radii.xl,
      boxShadow: shadows.cardSoft,
      border: `1px solid #6B47ED`,
    },
    rankingCard: {
      backgroundColor: colors.neutral.white,
      borderRadius: radii.lg,
      boxShadow: shadows.cardSoft,
      border: `1px solid ${colors.background.cardBorder}`,
    },
    tableRow: {
      borderBottom: `1px solid ${colors.border.light}`,
    },
  } as const;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Custom Header with Back Button */}
          <div className="mb-8 flex items-center justify-center relative border-b border-gray-200 pb-4">
            <button
              onClick={() => router.back()}
              className="absolute left-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6" style={{ color: "#4B5563" }} />
            </button>
            <h1
              style={{
                fontSize: "20px",
                color: "#1F2937",
                fontWeight: 700,
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              {leaderboard.title}
            </h1>
          </div>

          {/* Total Participants Banner */}
          <div
            className="mb-8 p-4 rounded-lg flex items-center gap-3"
            style={{
              backgroundColor: "#F3F0FF",
            }}
          >
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6" style={{ color: "#6B47ED" }} />
            </div>
            <span
              style={{
                ...typography.card.bodyMd,
                color: colors.text.secondary,
                fontSize: "16px",
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              Total Participants: Students across India{" "}
              <span
                style={{
                  color: "#6B47ED",
                  fontWeight: 700,
                }}
              >
                {leaderboard.totalParticipants.toLocaleString()}
              </span>
            </span>
          </div>

          {/* Top Performers */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leaderboard.topPerformers.map((performer, index) => {
                const isHighlighted = performer.rank === 1; // First rank
                const borderColor = isHighlighted ? "#FBBF24" : performer.rank === 2 ? "#9CA3AF" : "#F97316";
                return (
                  <div
                    key={performer.rank}
                    style={isHighlighted ? styles.topPerformerCardHighlighted : styles.topPerformerCard}
                    className={`text-center relative ${isHighlighted ? 'py-16 px-6' : 'p-6'}`}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <div
                          className="rounded-full p-1"
                          style={{
                            border: `3px solid ${borderColor}`,
                            display: "inline-block",
                          }}
                        >
                          <ImageWithFallback
                            src={performer.avatar || ""}
                            alt={performer.name}
                            width={100}
                            height={100}
                            className="w-24 h-24 rounded-full object-cover"
                            fallback={
                              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">
                                  {performer.name.charAt(0)}
                                </span>
                              </div>
                            }
                          />
                        </div>
                        {/* Rank Badge */}
                        <div
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: isHighlighted ? "#FBBF24" : borderColor,
                          }}
                        >
                          {isHighlighted ? (
                            <Trophy className="w-5 h-5 text-white" fill="currentColor" />
                          ) : (
                            <Award className="w-4 h-4 text-white" fill="currentColor" />
                          )}
                        </div>
                      </div>
                    </div>
                    <h3
                      style={{
                        ...typography.card.titleMd,
                        fontSize: "18px",
                        color: colors.text.primary,
                        fontWeight: 700,
                        marginBottom: "6px",
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      {performer.name}
                    </h3>
                    <div className="space-y-2">
                      <span
                        style={{
                          ...typography.card.bodySm,
                          color: colors.text.tertiary,
                          fontSize: "14px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {performer.state}
                      </span>
                      <div className="flex items-center justify-center gap-2">
                        <span
                          style={{
                            ...typography.card.titleMd,
                            fontSize: "20px",
                            color: "#6B47ED",
                            fontWeight: 700,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {performer.score}%
                        </span>
                        <span
                          style={{
                            color: colors.text.tertiary,
                            fontSize: "14px",
                          }}
                        >
                          •
                        </span>
                        <span
                          style={{
                            ...typography.card.bodySm,
                            color: colors.text.tertiary,
                            fontSize: "14px",
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {performer.time} min
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* User's Rank */}
          <div style={styles.userRankCard} className="p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <ImageWithFallback
                    src={leaderboard.userRank.avatar || ""}
                    alt={leaderboard.userRank.name}
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover"
                    style={{ boxShadow: shadows.cardSoft }}
                    fallback={
                      <div className="w-15 h-15 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center" style={{ boxShadow: shadows.cardSoft }}>
                        <span className="text-white text-lg font-bold">
                          {leaderboard.userRank.name.charAt(0)}
                        </span>
                      </div>
                    }
                  />
                </div>
                <div>
                  <div
                    style={{
                      ...typography.card.bodySm,
                      color: colors.text.tertiary,
                      fontSize: "14px",
                      marginBottom: "4px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    Your Rank
                  </div>
                  <div
                    style={{
                      ...typography.section.headingLg,
                      fontSize: "32px",
                      color: "#6B47ED",
                      fontWeight: 700,
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    #{leaderboard.userRank.rank}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div
                  style={{
                    ...typography.card.bodySm,
                    color: colors.text.tertiary,
                    fontSize: "14px",
                    marginBottom: "4px",
                    fontFamily: "var(--font-poppins), sans-serif",
                  }}
                >
                  Score
                </div>
                <div
                  style={{
                    ...typography.section.headingLg,
                    fontSize: "24px",
                    color: colors.text.primary,
                    fontWeight: 700,
                    fontFamily: "var(--font-poppins), sans-serif",
                  }}
                >
                  {leaderboard.userRank.score}%
                </div>
              </div>
              <div className="text-center">
                <div
                  style={{
                    ...typography.card.bodySm,
                    color: colors.text.tertiary,
                    fontSize: "14px",
                    marginBottom: "4px",
                    fontFamily: "var(--font-poppins), sans-serif",
                  }}
                >
                  Time
                </div>
                <div
                  style={{
                    ...typography.section.headingLg,
                    fontSize: "24px",
                    color: colors.text.primary,
                    fontWeight: 700,
                    fontFamily: "var(--font-poppins), sans-serif",
                  }}
                >
                  {leaderboard.userRank.time} min
                </div>
              </div>
              <button
                className="px-6 py-3 rounded-lg font-semibold whitespace-nowrap flex items-center gap-2"
                style={{
                  backgroundColor: colors.neutral.white,
                  border: `1px solid ${colors.border.light}`,
                  color: colors.text.tertiary,
                  fontFamily: "var(--font-poppins), sans-serif",
                }}
              >
                Keep Improving! <Star className="w-4 h-4" style={{ color: "#FBBF24" }} fill="#FBBF24" />
              </button>
            </div>
          </div>

          {/* Top 10 Rankings */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-6 h-6" style={{ color: "#6B47ED" }} fill="currentColor" />
              <h2
                style={{
                  ...typography.card.titleMd,
                  fontSize: "20px",
                  color: colors.text.primary,
                  fontWeight: 700,
                  fontFamily: "var(--font-poppins), sans-serif",
                }}
              >
                Top 10 Rankings
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {leaderboard.top10.map((participant) => (
                <div
                  key={participant.rank}
                  style={styles.rankingCard}
                  className="p-4 flex items-center gap-4"
                >
                  <div
                    style={{
                      ...typography.section.headingLg,
                      fontSize: "24px",
                      color: "#6B47ED",
                      fontWeight: 700,
                      minWidth: "50px",
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    {participant.rank}
                  </div>
                  <ImageWithFallback
                    src={participant.avatar || ""}
                    alt={participant.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    fallback={
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold">
                          {participant.name.charAt(0)}
                        </span>
                      </div>
                    }
                  />
                  <div className="flex-1">
                    <div
                      style={{
                        ...typography.card.titleMd,
                        fontSize: "16px",
                        color: colors.text.primary,
                        fontWeight: 700,
                        marginBottom: "4px",
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      {participant.name}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" style={{ color: "#6B47ED" }} />
                      <span
                        style={{
                          ...typography.card.bodySm,
                          color: colors.text.tertiary,
                          fontSize: "12px",
                          fontFamily: "var(--font-poppins), sans-serif",
                        }}
                      >
                        {participant.state}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      style={{
                        ...typography.card.titleMd,
                        fontSize: "16px",
                        color: "#6B47ED",
                        fontWeight: 700,
                        marginBottom: "4px",
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      {participant.score}%
                    </div>
                    <span
                      style={{
                        ...typography.card.bodySm,
                        color: colors.text.tertiary,
                        fontSize: "12px",
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      {participant.time} min
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Participants */}
          <div>
            <h2
              style={{
                ...typography.card.titleMd,
                fontSize: "20px",
                color: colors.text.primary,
                fontWeight: 700,
                marginBottom: "20px",
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              All Participants
            </h2>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <TextField
                fullWidth
                placeholder="Search by Name"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search className="w-5 h-5" style={{ color: "#9CA3AF" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    fontFamily: "var(--font-poppins), sans-serif",
                    "& fieldset": {
                      borderColor: "#D1D5DB",
                    },
                    "&:hover fieldset": {
                      borderColor: "#9CA3AF",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#6B47ED",
                      borderWidth: "2px",
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "var(--font-poppins), sans-serif",
                  },
                }}
              />
              <Select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setCurrentPage(1);
                }}
                displayEmpty
                sx={{
                  borderRadius: "8px",
                  fontFamily: "var(--font-poppins), sans-serif",
                  minWidth: 150,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D1D5DB",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#9CA3AF",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#6B47ED",
                    borderWidth: "2px",
                  },
                  "& .MuiSelect-select": {
                    fontFamily: "var(--font-poppins), sans-serif",
                  },
                }}
              >
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
              <Select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setCurrentPage(1);
                }}
                displayEmpty
                sx={{
                  borderRadius: "8px",
                  fontFamily: "var(--font-poppins), sans-serif",
                  minWidth: 150,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D1D5DB",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#9CA3AF",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#6B47ED",
                    borderWidth: "2px",
                  },
                  "& .MuiSelect-select": {
                    fontFamily: "var(--font-poppins), sans-serif",
                  },
                }}
              >
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </div>

            {/* Table */}
            <div style={styles.rankingCard} className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={styles.tableRow}>
                    <th
                      className="px-4 py-3 text-left"
                      style={{
                        ...typography.card.bodySm,
                        color: colors.text.secondary,
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      Rank
                    </th>
                    <th
                      className="px-4 py-3 text-left"
                      style={{
                        ...typography.card.bodySm,
                        color: colors.text.secondary,
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      Profile
                    </th>
                    <th
                      className="px-4 py-3 text-left"
                      style={{
                        ...typography.card.bodySm,
                        color: colors.text.secondary,
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      Name
                    </th>
                    <th
                      className="px-4 py-3 text-left"
                      style={{
                        ...typography.card.bodySm,
                        color: colors.text.secondary,
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      State
                    </th>
                    <th
                      className="px-4 py-3 text-left"
                      style={{
                        ...typography.card.bodySm,
                        color: colors.text.secondary,
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      Score
                    </th>
                    <th
                      className="px-4 py-3 text-left"
                      style={{
                        ...typography.card.bodySm,
                        color: colors.text.secondary,
                        fontSize: "14px",
                        fontWeight: 600,
                        fontFamily: "var(--font-poppins), sans-serif",
                      }}
                    >
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedParticipants.map((participant) => {
                    const stateColor = getStateBadgeColor(participant.state);
                    return (
                      <tr key={participant.rank} style={styles.tableRow}>
                        <td className="px-4 py-4">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{
                              backgroundColor: "#F3F0FF",
                              color: "#6B47ED",
                              fontFamily: "var(--font-poppins), sans-serif",
                              fontSize: "16px",
                              fontWeight: 700,
                            }}
                          >
                            {participant.rank}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <ImageWithFallback
                            src={participant.avatar || ""}
                            alt={participant.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full object-cover"
                            fallback={
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                <span className="text-white text-sm font-bold">
                                  {participant.name.charAt(0)}
                                </span>
                              </div>
                            }
                          />
                        </td>
                        <td className="px-4 py-4">
                          <span
                            style={{
                              ...typography.card.bodyMd,
                              color: colors.text.primary,
                              fontSize: "16px",
                              fontFamily: "var(--font-poppins), sans-serif",
                            }}
                          >
                            {participant.name}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: stateColor.bg,
                              color: stateColor.icon,
                            }}
                          >
                            <MapPin className="w-3 h-3" style={{ color: stateColor.icon }} />
                            <span
                              style={{
                                ...typography.card.bodySm,
                                fontSize: "14px",
                                fontWeight: 500,
                                fontFamily: "var(--font-poppins), sans-serif",
                              }}
                            >
                              {participant.state}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span
                            style={{
                              ...typography.card.bodyMd,
                              color: "#6B47ED",
                              fontSize: "16px",
                              fontWeight: 700,
                              fontFamily: "var(--font-poppins), sans-serif",
                            }}
                          >
                            {participant.score}%
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span
                            style={{
                              ...typography.card.bodyMd,
                              color: colors.text.primary,
                              fontSize: "16px",
                              fontFamily: "var(--font-poppins), sans-serif",
                            }}
                          >
                            {participant.time} min
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-end gap-2 mt-6">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  style={{
                    color: currentPage === 1 ? colors.text.tertiary : colors.text.primary,
                  }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                {/* Always show page 1 */}
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`px-4 py-2 rounded-lg border ${
                    currentPage === 1
                      ? "bg-[#6B47ED] text-white border-[#6B47ED]"
                      : "border-gray-300 hover:bg-gray-50 text-gray-700"
                  }`}
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                  }}
                >
                  1
                </button>
                {/* Show page 2 if not on page 1 */}
                {totalPages >= 2 && (
                  <button
                    onClick={() => setCurrentPage(2)}
                    className={`px-4 py-2 rounded-lg border ${
                      currentPage === 2
                        ? "bg-[#6B47ED] text-white border-[#6B47ED]"
                        : "border-gray-300 hover:bg-gray-50 text-gray-700"
                    }`}
                    style={{
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    2
                  </button>
                )}
                {/* Show ellipsis if there are more pages */}
                {totalPages > 3 && <span className="px-2 text-gray-500">...</span>}
                {/* Show second to last page */}
                {totalPages > 2 && (
                  <button
                    onClick={() => setCurrentPage(totalPages - 1)}
                    className={`px-4 py-2 rounded-lg border ${
                      currentPage === totalPages - 1
                        ? "bg-[#6B47ED] text-white border-[#6B47ED]"
                        : "border-gray-300 hover:bg-gray-50 text-gray-700"
                    }`}
                    style={{
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    {totalPages - 1}
                  </button>
                )}
                {/* Show last page */}
                {totalPages > 1 && (
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className={`px-4 py-2 rounded-lg border ${
                      currentPage === totalPages
                        ? "bg-[#6B47ED] text-white border-[#6B47ED]"
                        : "border-gray-300 hover:bg-gray-50 text-gray-700"
                    }`}
                    style={{
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    {totalPages}
                  </button>
                )}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  style={{
                    color: currentPage === totalPages ? colors.text.tertiary : colors.text.primary,
                  }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeaderboardPage;


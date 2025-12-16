"use client";

import React from "react";
import { useRouter } from "next/navigation";
import * as LucideIcons from "lucide-react";
import { Calendar } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CardGridContainer from "@/components/ui/CardGridContainer";
import { DONATION_BATCHES } from "@/data/donation";
import { colors, typography, FONT_FAMILY } from "@/theme";

const DonationBatchesSection: React.FC = () => {
  const router = useRouter();

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent || LucideIcons.BookOpen;
  };

  const handleDonateClick = () => {
    router.push("/donate/form");
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="Upcoming Batches Requiring Sponsorship"
          bottomMargin="lg"
        />

        <CardGridContainer cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4" gap="gap-6">
          {DONATION_BATCHES.map((batch) => {
            const IconComponent = getIcon(batch.icon);
            const totalStudents = batch.totalStudents || 50;
            const sponsored = totalStudents - batch.studentsNeedingSupport;
            const progressPercentage = (sponsored / totalStudents) * 100;

            return (
              <div
                key={batch.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col"
                style={{
                  fontFamily: FONT_FAMILY,
                }}
              >
                {/* Icon and Title Section */}
                <div className="mb-4">
                  {/* Icon - Top Left */}
                  <div className="mb-3">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "#E9D5FF",
                      }}
                    >
                      <IconComponent
                        size={24}
                        style={{
                          color: colors.brand.primarySoft,
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Class Details - Below Icon */}
                  <div>
                    <h3
                      className="font-bold text-gray-900 mb-1"
                      style={{
                        ...typography.card.titleMd,
                        fontSize: "18px",
                        lineHeight: "1.4",
                      }}
                    >
                      {batch.class} - {batch.subject}
                    </h3>
                    <p
                      className="text-sm text-gray-500"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      {batch.board}
                    </p>
                  </div>
                </div>

                {/* Sponsorship Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p
                      className="text-sm text-gray-500"
                      style={{
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      Students needing support
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        color: colors.brand.primarySoft,
                        fontFamily: FONT_FAMILY,
                      }}
                    >
                      {batch.studentsNeedingSupport} left
                    </p>
                  </div>
                  {/* Progress Bar */}
                  <div
                    className="w-full h-2 rounded-full overflow-hidden"
                    style={{
                      backgroundColor: "#E5E7EB",
                    }}
                  >
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${progressPercentage}%`,
                        background: colors.brand.primarySoft,
                      }}
                    />
                  </div>
                </div>

                {/* Batch Schedule */}
                <div className="flex items-center gap-2 mb-4">
                  <Calendar
                    size={16}
                    style={{
                      color: "#6B7280",
                    }}
                  />
                  <p
                    className="text-sm text-gray-500"
                    style={{
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    Starts: {batch.startDate} • {batch.duration}
                  </p>
                </div>

                {/* Sponsorship Amount */}
                <div className="mb-6">
                  <p
                    className="text-base font-bold"
                    style={{
                      color: colors.brand.primarySoft,
                      fontFamily: FONT_FAMILY,
                    }}
                  >
                    Sponsor 1 Student - ₹{batch.sponsorAmount.toLocaleString()}
                  </p>
                </div>

                {/* Donate Button */}
                <button
                  onClick={handleDonateClick}
                  className="w-full py-3 px-4 rounded-lg text-white font-semibold transition-all hover:opacity-90 mt-auto"
                  style={{
                    background: "linear-gradient(135deg, #6B47ED 0%, #5A32FF 100%)",
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  Donate Now
                </button>
              </div>
            );
          })}
        </CardGridContainer>
      </div>
    </section>
  );
};

export default DonationBatchesSection;


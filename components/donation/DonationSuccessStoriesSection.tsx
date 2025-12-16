"use client";

import React from "react";
import { Heart } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import SectionHeader from "@/components/ui/SectionHeader";
import CardGridContainer from "@/components/ui/CardGridContainer";
import { DONATION_SUCCESS_STORIES } from "@/data/donation";
import { colors, typography, FONT_FAMILY } from "@/theme";

const DonationSuccessStoriesSection: React.FC = () => {
  return (
    <section
      className="py-12 md:py-16 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 35.36%, #FDF2F8 70.71%)",
      }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="Student Success Stories"
          subtitle="Real stories from students whose lives were transformed"
          bottomMargin="lg"
        />

        <CardGridContainer cols="grid-cols-1 md:grid-cols-3" gap="gap-6 lg:gap-8">
          {DONATION_SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              style={{
                fontFamily: FONT_FAMILY,
              }}
            >
              {/* Avatar and Student Info */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src={story.avatar}
                    alt={story.name}
                    width={60}
                    height={60}
                    className="w-16 h-16 rounded-full object-cover"
                    fallback={
                      <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                        <span
                          className="text-gray-600 text-xl font-bold"
                          style={{
                            fontFamily: FONT_FAMILY,
                          }}
                        >
                          {story.name.charAt(0)}
                        </span>
                      </div>
                    }
                  />
                </div>
                <div className="flex-1">
                  <h4
                    className="font-bold text-gray-900 mb-1"
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontSize: "18px",
                      lineHeight: "1.4",
                    }}
                  >
                    {story.name}
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontSize: "14px",
                    }}
                  >
                    {story.class} • {story.location}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p
                className="text-gray-700 mb-4 leading-relaxed"
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "#374151",
                }}
              >
                &ldquo;{story.quote}&rdquo;
              </p>

              {/* Sponsor Acknowledgment with Heart Icon */}
              <div className="flex items-center gap-2">
                <Heart
                  size={16}
                  style={{
                    color: "#EF4444",
                    fill: "#EF4444",
                  }}
                />
                <p
                  className="text-sm text-gray-700"
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: "14px",
                  }}
                >
                  Sponsored by{" "}
                  <span
                    style={{
                      color: colors.brand.primarySoft,
                      fontWeight: 600,
                    }}
                  >
                    {story.sponsorName}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </CardGridContainer>
      </div>
    </section>
  );
};

export default DonationSuccessStoriesSection;


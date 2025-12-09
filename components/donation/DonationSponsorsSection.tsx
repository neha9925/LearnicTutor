"use client";

import React from "react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import SectionHeader from "@/components/ui/SectionHeader";
import { DONATION_SPONSORS, TOTAL_SPONSORS } from "@/data/donation";
import { colors, typography, FONT_FAMILY } from "@/theme";

const DonationSponsorsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: "#FAF5FF" }}>
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <SectionHeader
          title="Our Amazing Sponsors"
          subtitle="Join these generous sponsors who are making education accessible"
          bottomMargin="lg"
        />

        {/* Sponsor Count */}
        <div className="text-center mb-12">
          <div
            className="text-5xl md:text-6xl font-bold mb-2"
            style={{
              color: colors.brand.primarySoft,
              fontFamily: FONT_FAMILY,
            }}
          >
            {TOTAL_SPONSORS.toLocaleString()}
          </div>
          <p
            className="text-lg text-gray-600"
            style={{
              fontFamily: FONT_FAMILY,
            }}
          >
            Total Sponsors & Growing
          </p>
        </div>

        {/* Sponsor Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {DONATION_SPONSORS.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center min-w-[200px] max-w-[220px]"
              style={{
                fontFamily: FONT_FAMILY,
              }}
            >
              {/* Avatar */}
              <div className="mb-4">
                <ImageWithFallback
                  src={sponsor.avatar}
                  alt={sponsor.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover"
                  fallback={
                    <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                      <span
                        className="text-gray-600 text-2xl font-bold"
                        style={{
                          fontFamily: FONT_FAMILY,
                        }}
                      >
                        {sponsor.name.charAt(0)}
                      </span>
                    </div>
                  }
                />
              </div>

              {/* Name */}
              <h4
                className="font-bold text-gray-900 mb-2"
                style={{
                  ...typography.card.titleMd,
                  fontSize: "16px",
                }}
              >
                {sponsor.name}
              </h4>

              {/* Class/Subject/Board Details */}
              <p
                className="text-sm text-gray-500 mb-4"
                style={{
                  fontFamily: FONT_FAMILY,
                  lineHeight: "1.4",
                }}
              >
                {sponsor.class} – {sponsor.subject} ({sponsor.board})
              </p>

              {/* Amount Button - Pill Shaped */}
              <div
                className="px-4 py-2 rounded-full font-semibold text-sm"
                style={{
                  backgroundColor: "#E9D5FF",
                  border: `1px solid ${colors.brand.primarySoft}`,
                  color: colors.brand.primarySoft,
                  fontFamily: FONT_FAMILY,
                }}
              >
                ₹{sponsor.amount.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationSponsorsSection;


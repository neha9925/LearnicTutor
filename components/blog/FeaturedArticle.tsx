"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { FEATURED_ARTICLE } from "@/data/blog";
import { colors, typography } from "@/theme";

const styles = {
  categoryTag: {
    backgroundColor: colors.brand.primarySofter,
    color: colors.text.light,
    ...typography.button.secondary,
    padding: "8px 16px",
    borderRadius: "20px",
    display: "inline-block",
    marginBottom: "16px",
    fontSize: "14px",
  },
  title: {
    ...typography.card.titleLg,
    color: colors.text.primary,
    marginBottom: "12px",
  },
  description: {
    ...typography.card.bodyMd,
    color: colors.text.secondary,
    marginBottom: "16px",
  },
  meta: {
    ...typography.card.bodySm,
    color: colors.text.tertiary,
    marginBottom: "24px",
  },
} as const;

const FeaturedArticle: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="flex justify-center">
          <div
            className="bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row w-full max-w-[1600px]"
            style={{
              width: "1600px",
              height: "400px",
              opacity: 1,
              borderRadius: "16px",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: colors.brand.primarySofter || "#572EEE",
              boxShadow: "0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A",
            }}
          >
            {/* Left - Image */}
            <div className="relative w-full lg:w-1/2 h-64 lg:h-full flex-shrink-0">
              <Image
                src="/images/banners/Blog2.svg"
                alt={FEATURED_ARTICLE.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right - Content */}
            <div className="flex flex-col p-6 lg:p-8 flex-1 justify-between">
              <div>
                <span style={styles.categoryTag}>
                  Featured
                </span>
                
                <h2 style={styles.title} className="text-xl md:text-2xl lg:text-3xl mt-3">
                  {FEATURED_ARTICLE.title}
                </h2>
                
                <p style={styles.description} className="text-sm md:text-base mt-3">
                  {FEATURED_ARTICLE.description}
                </p>
                
                <div style={styles.meta} className="text-xs md:text-sm mt-3">
                  {FEATURED_ARTICLE.author} • {FEATURED_ARTICLE.date}
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Link href={`/blog/${FEATURED_ARTICLE.id}`}>
                  <Button
                    variant="primary"
                    size="md"
                    className="rounded-lg !bg-[#572EEE] hover:!bg-[#3311B2] focus:ring-[#572EEE] text-white"
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
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;


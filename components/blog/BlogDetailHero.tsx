"use client";

import React from "react";
import Image from "next/image";
import { BlogArticle } from "@/data/blog";
import { typography } from "@/theme";

interface BlogDetailHeroProps {
  article: BlogArticle;
}

const styles = {
  heroContainer: {
    background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
  },
  categoryTag: {
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#FFFFFF",
    padding: "8px 16px",
    borderRadius: "20px",
    display: "inline-block",
    marginBottom: "24px",
    fontSize: "14px",
    fontWeight: 500,
  },
  title: {
    ...typography.hero.heading,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: "#FFFFFF",
    fontSize: "clamp(32px, 5vw, 48px)",
  },
  meta: {
    ...typography.card.bodyMd,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: "#FFFFFF",
    opacity: 0.9,
  },
} as const;

const BlogDetailHero: React.FC<BlogDetailHeroProps> = ({ article }) => {
  return (
    <section style={styles.heroContainer} className="py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Panel - Content */}
          <div className="text-center lg:text-left">
            <span style={styles.categoryTag}>
              {article.category}
            </span>
            
            <h1 style={styles.title} className="mb-6">
              {article.title}
            </h1>
            
            <div style={styles.meta} className="flex flex-wrap items-center gap-2 justify-center lg:justify-start mb-6">
              <span>By {article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
          </div>

          {/* Right Panel - Image */}
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <Image
              src="/images/banners/BlogDetail1.svg"
              alt={article.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailHero;


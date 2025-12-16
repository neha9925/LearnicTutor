"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import ArticleCard from "./ArticleCard";
import { LATEST_ARTICLES } from "@/data/blog";
import { typography } from "@/theme";

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

const LatestArticles: React.FC = () => {
  const [displayCount, setDisplayCount] = useState(6);

  const displayedArticles = LATEST_ARTICLES.slice(0, displayCount);
  const hasMore = displayCount < LATEST_ARTICLES.length;

  const loadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 6, LATEST_ARTICLES.length));
  };

  return (
    <>
      <div className="text-center mb-12">
        <h2 style={styles.sectionHeading} className="text-3xl md:text-4xl text-gray-900 font-bold">
          Latest Articles
        </h2>
        <p style={styles.sectionDescription} className="text-base md:text-lg max-w-2xl mx-auto text-gray-600">
          Stay updated with the latest insights from our educators and learning community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {displayedArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="lg"
            onClick={loadMore}
            className="rounded-lg !bg-[#572EEE] hover:!bg-[#3311B2] focus:ring-[#572EEE] px-8 py-3 text-white font-medium"
          >
            Load More Articles
          </Button>
        </div>
      )}
    </>
  );
};

export default LatestArticles;


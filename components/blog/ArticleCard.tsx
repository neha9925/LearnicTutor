"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { BlogArticle } from "@/data/blog";
import { colors, typography } from "@/theme";

interface ArticleCardProps {
  article: BlogArticle;
}

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "live learning":
      return { bg: "#F3E8FF", text: "#6B21A8" }; // Light purple
    case "exam prep":
      return { bg: "#DCFCE7", text: "#166534" }; // Light green
    case "skill growth":
      return { bg: "#DBEAFE", text: "#1E40AF" }; // Light blue
    default:
      return { bg: "#FED7AA", text: "#92400E" }; // Light orange
  }
};

const styles = {
  title: {
    ...typography.card.titleMd,
    color: colors.text.primary,
    marginBottom: "8px",
  },
  description: {
    ...typography.card.bodySm,
    color: colors.text.secondary,
    marginBottom: "12px",
  },
  meta: {
    ...typography.card.bodySm,
    color: colors.text.tertiary,
    marginBottom: "12px",
  },
  readMore: {
    ...typography.button.secondary,
    color: colors.brand.primarySofter,
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    fontWeight: 500,
  },
} as const;

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const categoryColor = getCategoryColor(article.category);

  return (
    <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col shadow-md hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          width={400}
          height={192}
          className="w-full h-full"
          objectFit={article.image.endsWith('.svg') ? "contain" : "cover"}
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <span
          className="px-3 py-1 rounded-full mb-3 inline-block w-fit"
          style={{
            backgroundColor: categoryColor.bg,
            color: categoryColor.text,
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          {article.category}
        </span>
        
        <h3 style={styles.title} className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {article.title}
        </h3>
        
        <p style={styles.description} className="text-gray-600 mb-3 line-clamp-2">
          {article.description}
        </p>
        
        <div style={styles.meta} className="text-sm text-gray-500 mb-4">
          {article.author} • {article.date}
        </div>
        
        <Link 
          href={`/blog/${article.id}`}
          className="mt-auto"
        >
          <span style={styles.readMore} className="hover:underline text-[#572EEE] font-medium">
            Read More
            <ArrowRight className="w-4 h-4 inline ml-1" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;


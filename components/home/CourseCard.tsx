"use client";

import React from "react";
import Link from "next/link";
import StarRating from "@/components/ui/StarRating";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { User, Users, Clock } from "lucide-react";
import { colors, radii, shadows, typography } from "@/theme";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: {
    name: string;
    image: string;
    expertise?: string;
  };
  image: string;
  rating: number;
  price: number;
  originalPrice?: number;
  students: number;
  duration?: string;
  tag?: string;
  href?: string;
  descriptionClamp?: 1 | 2 | 3 | 4 | 5;
  footerPaddingTop?: string;
}

const CourseCardComponent: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  instructor,
  image,
  rating,
  price,
  originalPrice,
  students,
  duration = "1 hr",
  tag,
  href,
  descriptionClamp = 2,
  footerPaddingTop = "16px",
}) => {
  const linkHref = href ?? `/courses/${id}`;
  const styles = {
    card: {
      height: "423px",
      borderRadius: radii.lg,
      borderWidth: "1.05px",
      borderStyle: "solid",
      borderColor: colors.background.cardBorder,
      boxShadow: shadows.cardSoft,
    },
    tag: {
      backgroundColor: "#86EFAC",
      color: "#065F46",
      fontFamily: "var(--font-poppins), sans-serif",
      fontWeight: 500,
      fontSize: "14.75px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center" as const,
      width: "101.57339477539062px",
      height: "29.49595069885254px",
      borderRadius: "10533.21px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      ...typography.card.titleMd,
      color: colors.neutral.gray700,
    },
    description: {
      ...typography.card.bodySm,
      color: colors.text.tertiary,
    },
    metaText: {
      ...typography.card.bodySm,
      color: colors.text.tertiary,
      lineHeight: "100%",
    },
    instructorName: {
      ...typography.card.bodySm,
      color: colors.neutral.gray700,
      fontWeight: 600,
    },
    instructorRole: {
      fontFamily: "var(--font-poppins), sans-serif",
      fontSize: "12px",
      color: colors.text.tertiary,
    },
    rating: {
      ...typography.card.bodySm,
      color: colors.neutral.gray700,
      fontWeight: 600,
    },
  } as const;
  return (
    <Link href={linkHref}>
      <div 
        className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer flex flex-col w-full max-w-[410px]"
        style={styles.card}
      >
        <div className="relative w-full flex-shrink-0 overflow-hidden" style={{ backgroundColor: colors.brand.tealSoft, height: "200px" }}>
          <ImageWithFallback
            src={image || `/images/courses/${id}.jpg`}
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-cover opacity-80"
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-teal-700 to-teal-800 flex items-center justify-center">
                <span className="text-white text-xl font-bold">{title.charAt(0)}</span>
              </div>
            }
          />
          {tag && (
            <div
              className="absolute top-3 right-3 px-3 py-1 rounded-full"
              style={styles.tag}
            >
              {tag}
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-1 bg-white">
          <h3 
            className="font-bold mb-2 line-clamp-2"
            style={styles.title}
          >
            {title}
          </h3>
          
          <p 
            className={`mb-4 ${
              descriptionClamp === 1
                ? "line-clamp-1"
                : descriptionClamp === 3
                ? "line-clamp-3"
                : descriptionClamp === 4
                ? "line-clamp-4"
                : descriptionClamp === 5
                ? "line-clamp-5"
                : "line-clamp-2"
            }`}
            style={styles.description}
          >
            {description}
          </p>
          
          <div className="flex items-center justify-between mb-4 text-sm" style={{ color: colors.text.tertiary }}>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span
                style={styles.metaText}
              >
                {duration}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span
                style={styles.metaText}
              >
                {students.toLocaleString()} enrolled
              </span>
            </div>
          </div>
          
          <div
            className="flex items-center justify-between mt-auto border-t border-gray-100"
            style={{ paddingTop: footerPaddingTop }}
          >
            <div className="flex items-center gap-2">
              <ImageWithFallback
                src={instructor.image || `/images/instructors/${instructor.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                alt={instructor.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
                fallback={
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                }
              />
              <div>
                <p 
                  className="font-semibold"
                  style={styles.instructorName}
                >
                  {instructor.name}
                </p>
                {instructor.expertise && (
                  <p 
                    className="text-xs"
                    style={styles.instructorRole}
                  >
                    {instructor.expertise}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <StarRating rating={rating} size="sm" />
              <span 
                className="font-semibold"
                style={styles.rating}
              >
                {rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CourseCard = React.memo(CourseCardComponent);

CourseCard.displayName = "CourseCard";

export default CourseCard;


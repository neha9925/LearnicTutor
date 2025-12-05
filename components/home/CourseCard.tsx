"use client";

import React from "react";
import Link from "next/link";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Clock, Users, Star } from "lucide-react";
import { typography } from "@/theme";

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
  isNew?: boolean;
  variant?: "default" | "skills"; // "default" for home page, "skills" for Skills filter
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
  isNew = false,
  variant = "default",
}) => {
  const linkHref = href ?? `/courses/${id}`;
  const formattedPrice = `₹ ${price}/M`;
  return (
    <Link href={linkHref} className="block">
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col w-full"
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
        }}
      >
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={image || `/images/courses/${id}.jpg`}
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-cover"
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-teal-700 to-teal-800 flex items-center justify-center">
                <span className="text-white text-xl font-bold">{title.charAt(0)}</span>
              </div>
            }
          />

          {/* Tags */}
          {tag && (
            <Badge
              variant="success"
              position="top-right"
              size="sm"
              style={{
                fontSize: "12px",
                padding: "3px 12px",
                borderRadius: "8px",
              }}
            >
              {tag}
            </Badge>
          )}
          
          {isNew && (
            <Badge
              variant="warning"
              position="bottom-left"
              size="sm"
              style={{
                fontSize: "12px",
                padding: "3px 12px",
                borderRadius: "8px",
              }}
            >
              New
            </Badge>
          )}
          
          <Badge
            variant="primary"
            position="bottom-right"
            size="sm"
            style={{
              fontSize: "12px",
              padding: "3px 12px",
              borderRadius: "8px",
            }}
          >
            {formattedPrice}
          </Badge>
        </div>
        <div className="p-5">
          <h3
            className="text-gray-800 font-bold mb-3"
            style={{
              fontSize: "18px",
              fontFamily: "var(--font-poppins), sans-serif",
              color: "#1F2937",
            }}
          >
            {title}
          </h3>

          {variant === "skills" ? (
            <>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" style={{ color: "#6A3EEF" }} />
                  <span
                    style={{
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                      color: "#6A3EEF",
                    }}
                  >
                    {duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" style={{ color: "#6A3EEF" }} />
                  <span
                    style={{
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                      color: "#6A3EEF",
                    }}
                  >
                    {students.toLocaleString()} enrolled
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2.5">
                  <ImageWithFallback
                    src={instructor.image || `/images/instructors/${instructor.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={instructor.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    fallback={
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-gray-600" />
                      </div>
                    }
                  />
                  <div className="min-w-0">
                    <p 
                      className="font-semibold truncate"
                      style={{
                        fontSize: "14px",
                        fontFamily: "var(--font-poppins), sans-serif",
                        color: "#1F2937",
                        lineHeight: "20px",
                      }}
                    >
                      {instructor.name}
                    </p>
                    {instructor.expertise && (
                      <p 
                        className="text-xs truncate"
                        style={{
                          fontSize: "12px",
                          fontFamily: "var(--font-poppins), sans-serif",
                          color: "#6B7280",
                          lineHeight: "16px",
                          marginTop: "2px",
                        }}
                      >
                        {instructor.expertise}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#F59E0B] flex-shrink-0">
                  <Star className="w-4 h-4 fill-current" />
                  <span 
                    className="font-semibold text-gray-700"
                    style={{
                      fontSize: "14px",
                      fontFamily: "var(--font-poppins), sans-serif",
                      lineHeight: "20px",
                    }}
                  >
                    {rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4" style={{ color: "#6A3EEF" }} />
                <span
                  style={{
                    fontSize: "14px",
                    fontFamily: "var(--font-poppins), sans-serif",
                    color: "#6A3EEF",
                  }}
                >
                  {duration}
                </span>
              </div>

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
                style={{
                  fontSize: "14px",
                  fontFamily: "var(--font-poppins), sans-serif",
                  color: "#6B7280",
                  fontWeight: 400,
                }}
              >
                {description}
              </p>

              <Button
                variant="primary"
                className="text-white font-semibold rounded-lg"
                style={{
                  ...typography.button.primary,
                  background: "#6A3EEF",
                  fontSize: "13px",
                  border: "none",
                  width: "126px",
                  height: "35px",
                  opacity: 1,
                  borderRadius: "8px",
                }}
              >
                Enroll Now
              </Button>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

const CourseCard = React.memo(CourseCardComponent);

CourseCard.displayName = "CourseCard";

export default CourseCard;


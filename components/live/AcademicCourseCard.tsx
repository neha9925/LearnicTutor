"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { typography } from "@/theme";

interface AcademicCourseCardProps {
  classNumber: number;
  batchNumber: number;
  timing: string;
  nextBatchStart: string;
  price: string;
  board?: string;
  isNew?: boolean;
  href?: string;
}

const AcademicCourseCard: React.FC<AcademicCourseCardProps> = ({
  classNumber,
  batchNumber,
  timing,
  nextBatchStart,
  price,
  board = "CBSE",
  isNew = true,
  href = "#",
}) => {
  return (
    <Link href={href} className="block">
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
        }}
      >
        {/* Chalkboard Image Section */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src="/images/courses/V1.jpg"
            alt="Course"
            fill
            className="object-cover"
          />

          {/* Tags */}
          {board && (
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
              {board}
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
            {price}
          </Badge>
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h3
            className="text-gray-800 font-bold mb-3"
            style={{
              fontSize: "18px",
              fontFamily: "var(--font-poppins), sans-serif",
              color: "#1F2937",
            }}
          >
            Class{classNumber} Full course (Batch {batchNumber})
          </h3>

          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4" style={{ color: "#6A3EEF" }} />
            <span
              style={{
                fontSize: "14px",
                fontFamily: "var(--font-poppins), sans-serif",
                color: "#6A3EEF",
              }}
            >
              {timing}
            </span>
          </div>

          <p
            className="mb-4"
            style={{
              fontSize: "14px",
              fontFamily: "var(--font-poppins), sans-serif",
              color: "#6B7280",
              fontWeight: 400,
            }}
          >
            Next Batch start on {nextBatchStart}
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
        </div>
      </div>
    </Link>
  );
};

export default AcademicCourseCard;


"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FONT_FAMILY, colors } from "@/theme";

interface Batch {
  id: string;
  title: string;
  tutor: string;
  studentsReferred: number;
}

const NewBatchesSection: React.FC = () => {
  const router = useRouter();
  
  const batches: Batch[] = [
    {
      id: "1",
      title: "Class 10 Science - Batch A",
      tutor: "Dr. Rajesh Kumar",
      studentsReferred: 12,
    },
    {
      id: "2",
      title: "Class 12 Maths - Batch B",
      tutor: "Prof. Anita Desai",
      studentsReferred: 8,
    },
    {
      id: "3",
      title: "Class 10 Science - Batch A",
      tutor: "Dr. Rajesh Kumar",
      studentsReferred: 12,
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-xl font-bold text-gray-900"
          style={{ fontFamily: FONT_FAMILY }}
        >
          New Batches
        </h2>
        <button
          className="text-sm font-semibold"
          style={{
            color: colors.brand.primarySoft,
            fontFamily: FONT_FAMILY,
          }}
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <h3
              className="text-base font-bold text-gray-900 mb-2"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {batch.title}
            </h3>
            <p
              className="text-sm text-gray-600 mb-3"
              style={{ fontFamily: FONT_FAMILY }}
            >
              Tutor: {batch.tutor}
            </p>
            <div className="mb-4">
              <span
                className="text-sm text-gray-500"
                style={{ fontFamily: FONT_FAMILY }}
              >
                Students Referred:{" "}
              </span>
              <span
                className="text-sm font-bold text-gray-900"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {batch.studentsReferred}
              </span>
            </div>
            <button
              onClick={() => router.push("/coordinator-dashboard/refer-students")}
              className="w-full px-4 py-2 rounded-lg text-sm font-semibold border flex items-center justify-center gap-2 bg-white"
              style={{
                borderColor: colors.brand.primarySoft,
                color: colors.brand.primarySoft,
                fontFamily: FONT_FAMILY,
              }}
            >
              Refer Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewBatchesSection;


"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CoordinatorSidebar from "@/components/coordinator-dashboard/CoordinatorSidebar";
import { Search, Bell, User } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { FONT_FAMILY, colors } from "@/theme";

interface Batch {
  id: string;
  title: string;
  tutor: string;
  studentsReferred: number;
}

const NewBatchesPage: React.FC = () => {
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
    {
      id: "4",
      title: "Class 10 Science - Batch A",
      tutor: "Dr. Rajesh Kumar",
      studentsReferred: 12,
    },
    {
      id: "5",
      title: "Class 10 Science - Batch A",
      tutor: "Dr. Rajesh Kumar",
      studentsReferred: 12,
    },
    {
      id: "6",
      title: "Class 10 Science - Batch A",
      tutor: "Dr. Rajesh Kumar",
      studentsReferred: 12,
    },
    {
      id: "7",
      title: "Class 10 Science - Batch A",
      tutor: "Dr. Rajesh Kumar",
      studentsReferred: 12,
    },
    {
      id: "8",
      title: "Class 10 Science - Batch A",
      tutor: "Dr. Rajesh Kumar",
      studentsReferred: 12,
    },
  ];

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <CoordinatorSidebar />
      <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <div
          className="border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-shrink-0"
          style={{
            fontFamily: FONT_FAMILY,
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Left Side - Title */}
          <div>
            <h1
              className="text-2xl font-bold text-gray-900"
              style={{
                fontFamily: FONT_FAMILY,
              }}
            >
              New Batches
            </h1>
          </div>

          {/* Right Side - Search, Notifications, Profile */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search students, classes..."
                className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-64 text-sm"
                style={{
                  fontFamily: FONT_FAMILY,
                }}
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Picture */}
            <button
              onClick={() => router.push("/coordinator-dashboard/profile")}
              className="w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all cursor-pointer"
            >
              <ImageWithFallback
                src="/images/avatars/tutor-profile.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                fallback={
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <User size={20} className="text-gray-600" />
                  </div>
                }
              />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 overflow-y-auto flex-1">
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
                  className="w-full px-4 py-2 rounded-lg text-sm font-semibold border bg-white flex items-center justify-center"
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
      </div>
    </div>
  );
};

export default NewBatchesPage;


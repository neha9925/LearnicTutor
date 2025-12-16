import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiveClassDetail from "@/components/live/LiveClassDetail";
import { getLiveClassById, liveClasses } from "@/data/liveClasses";
import Link from "next/link";

interface LiveClassPageProps {
  params: { id: string };
}

const LiveClassPage: React.FC<LiveClassPageProps> = ({ params }) => {
  const course = getLiveClassById(params.id);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center gap-6 text-center px-4">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-gray-900">Class not found</h1>
            <p className="text-gray-600">
              The class you are looking for might have been moved or no longer exists.
            </p>
          </div>
          <Link
            href="/live-classes"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6B47ED] to-[#8F57FF] text-white font-semibold shadow-lg"
          >
            Explore Live Classes
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <LiveClassDetail course={course} />
      </main>
      <Footer />
    </div>
  );
};

export default LiveClassPage;

export function generateStaticParams() {
  const staticParams = liveClasses.map((course) => ({
    id: course.id,
  }));

  // Generate academic course IDs (classes 3-12, with different boards and batches)
  const academicClasses = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const boards = ["cbse", "bihar-board", "rbse"];
  const batches = [1, 2, 3, 4];
  
  const academicParams = academicClasses.flatMap((classNumber) =>
    boards.flatMap((board) =>
      batches.map((batch) => ({
        id: `class-${classNumber}-${board}-batch-${batch}`,
      }))
    )
  );

  return [...staticParams, ...academicParams];
}


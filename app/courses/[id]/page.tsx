import CourseDetailPage from "@/components/pages/CourseDetailPage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COURSE_DETAILS, getCourseDetailById } from "@/data/courseDetails";

export const metadata: Metadata = {
  title: "Course Details | Learnic",
  description: "View detailed information about the course, curriculum, instructor, and enrollment options.",
  openGraph: {
    title: "Course Details | Learnic",
    description: "View detailed information about the course, curriculum, instructor, and enrollment options.",
    type: "website",
  },
};

interface CourseDetailRouteProps {
  params: { id: string };
}

export default function CourseDetail({ params }: CourseDetailRouteProps) {
  const course = getCourseDetailById(params.id);

  if (!course) {
    notFound();
  }

  return <CourseDetailPage course={course} />;
}

export function generateStaticParams() {
  return COURSE_DETAILS.map((course) => ({
    id: course.id,
  }));
}


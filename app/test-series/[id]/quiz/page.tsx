import TestQuizPage from "@/components/test-series/TestQuizPage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getQuizByTestSeriesId, testQuizzes } from "@/data/testQuiz";
import { testSeriesData } from "@/data/testSeries";

export const metadata: Metadata = {
  title: "Test Quiz | Learnic",
  description: "Take the test series quiz and assess your knowledge.",
  openGraph: {
    title: "Test Quiz | Learnic",
    description: "Take the test series quiz and assess your knowledge.",
    type: "website",
  },
};

interface TestQuizRouteProps {
  params: { id: string };
}

export default function TestQuiz({ params }: TestQuizRouteProps) {
  const quiz = getQuizByTestSeriesId(params.id);

  if (!quiz) {
    notFound();
  }

  return <TestQuizPage quiz={quiz} />;
}

export function generateStaticParams() {
  // Return only test series IDs that have quizzes
  return testQuizzes.map((quiz) => ({
    id: quiz.testSeriesId,
  }));
}


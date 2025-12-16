import TestSeriesDetailPage from "@/components/test-series/TestSeriesDetailPage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { testSeriesDetails, getTestSeriesDetailById, type TestSeriesDetail } from "@/data/testSeriesDetails";
import { testSeriesData } from "@/data/testSeries";

export const metadata: Metadata = {
  title: "Test Series Details | Learnic",
  description: "View detailed information about the test series, syllabus, and purchase options.",
  openGraph: {
    title: "Test Series Details | Learnic",
    description: "View detailed information about the test series, syllabus, and purchase options.",
    type: "website",
  },
};

interface TestSeriesDetailRouteProps {
  params: { id: string };
}

// Helper function to get test series by ID
function getTestSeriesById(id: string) {
  return testSeriesData.find((test) => test.id === id);
}

// Helper function to convert basic test series to detail format
function convertToDetailFormat(basicTest: ReturnType<typeof getTestSeriesById>): TestSeriesDetail | undefined {
  if (!basicTest) return undefined;
  
  return {
    id: basicTest.id,
    title: basicTest.title,
    description: `Comprehensive test series for ${basicTest.title}`,
    category: basicTest.category,
    rating: basicTest.rating,
    reviews: basicTest.reviews,
    enrolled: basicTest.students,
    updatedAt: "Recently updated",
    duration: parseInt(basicTest.duration),
    questions: basicTest.questions,
    difficulty: "Expert Level",
    originalPrice: basicTest.originalPrice,
    currentPrice: basicTest.currentPrice,
    discount: basicTest.discount,
    whatsIncluded: [
      {
        title: "Complete Syllabus Coverage",
        description: "All topics covered comprehensively",
        icon: "check-circle",
      },
      {
        title: "Detailed Analytics",
        description: "Performance tracking & insights",
        icon: "bar-chart",
      },
      {
        title: "Solutions & Explanations",
        description: "Step-by-step explanations",
        icon: "lightbulb",
      },
      {
        title: "Certificate",
        description: "Completion certificate",
        icon: "award",
      },
    ],
    syllabus: [
      {
        subject: "Main Subject",
        questions: basicTest.questions,
      },
    ],
    relatedTests: [],
  };
}

export default function TestSeriesDetail({ params }: TestSeriesDetailRouteProps) {
  // First try to get detailed data
  let testSeries = getTestSeriesDetailById(params.id);
  
  // If not found, try to get basic data and convert it
  if (!testSeries) {
    const basicTest = getTestSeriesById(params.id);
    if (!basicTest) {
      notFound();
    }
    testSeries = convertToDetailFormat(basicTest);
    if (!testSeries) {
      notFound();
    }
  }

  return <TestSeriesDetailPage testSeries={testSeries} />;
}

export function generateStaticParams() {
  // Return all test series IDs from testSeriesData to ensure all pages are generated
  return testSeriesData.map((testSeries) => ({
    id: testSeries.id,
  }));
}


export interface TestSeriesDetail {
  id: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  enrolled: number;
  updatedAt: string;
  duration: number; // in minutes
  questions: number;
  difficulty: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  whatsIncluded: {
    title: string;
    description: string;
    icon: string;
  }[];
  syllabus: {
    subject: string;
    questions: number;
  }[];
  relatedTests: {
    id: string;
    title: string;
    questions: number;
    duration: number;
    price: number;
  }[];
  package?: {
    title: string;
    description: string;
    price: number;
    tag?: string;
    combinedPrice?: number;
  };
}

export const testSeriesDetails: TestSeriesDetail[] = [
  {
    id: "cbse-10-science",
    title: "CBSE Class 10 Science Test Series",
    description: "Comprehensive test covering all sections of Class 10 examination.",
    category: "Academic",
    rating: 4.8,
    reviews: 2047,
    enrolled: 8254,
    updatedAt: "2 weeks ago",
    duration: 120,
    questions: 100,
    difficulty: "Expert Level",
    originalPrice: 999,
    currentPrice: 499,
    discount: 50,
    whatsIncluded: [
      {
        title: "Complete Syllabus Coverage",
        description: "All topics from Phase 1 & Phase 2",
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
        subject: "Mathematics",
        questions: 20,
      },
      {
        subject: "Science",
        questions: 20,
      },
      {
        subject: "Social Science",
        questions: 20,
      },
      {
        subject: "English Language & Literature",
        questions: 20,
      },
      {
        subject: "Hindi (Course A / B)",
        questions: 20,
      },
    ],
    relatedTests: [
      {
        id: "cbse-10-social",
        title: "CBSE Class 10 Social Science Test Series",
        questions: 50,
        duration: 90,
        price: 199,
      },
      {
        id: "cbse-10-social-2",
        title: "CBSE Class 10 Social Science Test Series",
        questions: 40,
        duration: 45,
        price: 549,
      },
    ],
    package: {
      title: "Advance CBSE Test",
      description: "Complete preparation package",
      price: 600,
      tag: "Important + Most Popular",
      combinedPrice: 900,
    },
  },
];

export function getTestSeriesDetailById(id: string): TestSeriesDetail | undefined {
  return testSeriesDetails.find((test) => test.id === id);
}


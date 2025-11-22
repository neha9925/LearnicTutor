export interface LastTestResult {
  testName: string;
  rank: number;
  totalParticipants: number;
  score: number;
  totalQuestions: number;
  time: string;
  accuracy: number;
}

export interface LearningStat {
  title: string;
  count: number;
  label: string;
}

export interface MyClass {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar?: string;
  image: string;
  status?: "completed" | "upcoming";
  nextClass?: string;
  buttonText: string;
}

export interface MyVideo {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar?: string;
  instructorRole?: string;
  image: string;
  rating: number;
}

export interface MyTestSeries {
  id: string;
  title: string;
  image: string;
  rating: number;
  questions: number;
  duration: string;
  price: number;
  originalPrice?: number;
  status?: "completed" | "available";
  rank?: number;
  reviews?: number;
  students?: string;
}

export interface MyLearningData {
  lastTest: LastTestResult;
  stats: LearningStat[];
  classes: MyClass[];
  videos: MyVideo[];
  testSeries: MyTestSeries[];
}

export const myLearningData: MyLearningData = {
  lastTest: {
    testName: "CBSE Class 10 Science",
    rank: 42,
    totalParticipants: 6280,
    score: 46,
    totalQuestions: 50,
    time: "1h 02m",
    accuracy: 92,
  },
  stats: [
    {
      title: "My Classes",
      count: 8,
      label: "Active Classes",
    },
    {
      title: "My Videos",
      count: 25,
      label: "Watched Videos",
    },
    {
      title: "My Test Series",
      count: 4,
      label: "Enrolled Series",
    },
  ],
  classes: [
    {
      id: "advanced-math",
      title: "Advanced Mathematics",
      instructor: "Dr. John Smith",
      instructorAvatar: "/images/avatars/john-smith.jpg",
      image: "/images/banners/ml1.svg",
      status: "completed",
      nextClass: "Next Batch start on 15 Dec 2024",
      buttonText: "Join Again",
    },
    {
      id: "physics-fundamentals",
      title: "Physics Fundamentals",
      instructor: "Dr. Sarah Wilson",
      instructorAvatar: "/images/avatars/sarah-wilson.jpg",
      image: "/images/banners/ml2.svg",
      status: "upcoming",
      nextClass: "Next Class start Tomorrow at 10:00 AM",
      buttonText: "Start",
    },
    {
      id: "organic-chemistry",
      title: "Organic Chemistry",
      instructor: "Prof. Michael Brown",
      instructorAvatar: "/images/avatars/michael-brown.jpg",
      image: "/images/banners/ml3.svg",
      status: "upcoming",
      nextClass: "Next Class start Tomorrow at 10:00 AM",
      buttonText: "Start",
    },
  ],
  videos: [
    {
      id: "advanced-algebra-intro",
      title: "Introduction to Advanced Algebra",
      instructor: "Esther Howard",
      instructorAvatar: "/images/avatars/esther-howard.jpg",
      instructorRole: "Mathematics Expert",
      image: "/images/courses/V1.jpg",
      rating: 4.9,
    },
    {
      id: "web-development-fundamentals",
      title: "Web Development Fundamentals",
      instructor: "Annette Black",
      instructorAvatar: "/images/avatars/annette-black.jpg",
      instructorRole: "Mathematics Expert",
      image: "/images/courses/V2.jpg",
      rating: 4.9,
    },
    {
      id: "physics-newton-laws",
      title: "Physics: Newton's Laws of Motion",
      instructor: "Jane Cooper",
      instructorAvatar: "/images/avatars/jane-cooper.jpg",
      instructorRole: "Mathematics Expert",
      image: "/images/courses/V3.jpg",
      rating: 4.9,
    },
  ],
  testSeries: [
    {
      id: "cbse-10-science",
      title: "CBSE Class 10 Science Test Series",
      image: "/images/banners/mts1.svg",
      rating: 4.8,
      questions: 100,
      duration: "90 mins",
      price: 2499,
      originalPrice: 8499,
      status: "completed",
      rank: 24,
      reviews: 2000,
      students: "12.8k+",
    },
    {
      id: "cbse-10-math",
      title: "CBSE Class 10 Mathematics Test Series",
      image: "/images/banners/mts2.svg",
      rating: 4.8,
      questions: 100,
      duration: "90 mins",
      price: 2559,
      originalPrice: 8599,
      status: "available",
      reviews: 2000,
      students: "18.8k+",
    },
    {
      id: "cbse-10-english",
      title: "CBSE Class 10 English Test Series",
      image: "/images/banners/mts3.svg",
      rating: 4.7,
      questions: 50,
      duration: "90 mins",
      price: 2449,
      originalPrice: 8299,
      status: "available",
      reviews: 3000,
      students: "9.8k+",
    },
    {
      id: "cbse-10-social",
      title: "CBSE Class 10 Social Science Test Series",
      image: "/images/banners/mts1.svg",
      rating: 4.8,
      questions: 100,
      duration: "90 mins",
      price: 2399,
      originalPrice: 8399,
      status: "available",
      reviews: 7000,
      students: "8.2k+",
    },
  ],
};


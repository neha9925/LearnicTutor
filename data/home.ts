import type { LucideIcon } from "lucide-react";
import {
  Camera,
  DollarSign,
  Dumbbell,
  FileQuestion,
  Guitar,
  Handshake,
  Utensils,
  Heart,
  Link2,
  MessageCircle,
  Music2,
  Palette,
  Piano,
  PlayCircle,
  Video,
} from "lucide-react";

export interface HomeHeroSlideStat {
  label: string;
  value: string;
}

export interface HomeHeroSlide {
  id: string;
  title: string;
  highlight: string;
  suffix: string;
  description: string;
  stats: HomeHeroSlideStat[];
  image: string;
  primaryLink: string;
  secondaryLink: string;
}

export const HOME_HERO_SLIDES: HomeHeroSlide[] = [
  {
    id: "slide-one",
    title: "Empower Your",
    highlight: "Learning Journey",
    suffix: "with Learnic",
    description:
      "Learn, grow, and achieve through live classes, expert videos, and interactive quizzes.",
    stats: [
      { label: "Students", value: "50K+" },
      { label: "Courses", value: "1K+" },
      { label: "Instructors", value: "500+" },
    ],
    image: "/images/banners/Banner1.png",
    primaryLink: "/courses",
    secondaryLink: "/courses",
  },
  {
    id: "slide-two",
    title: "Master Skills with",
    highlight: "Live Mentors",
    suffix: "Anytime",
    description:
      "Interactive learning paths designed with industry experts and daily doubt clearing sessions.",
    stats: [
      { label: "Learners", value: "65K+" },
      { label: "Workshops", value: "250+" },
      { label: "Mentors", value: "650+" },
    ],
    image: "/images/banners/Banner2.svg",
    primaryLink: "/live-classes",
    secondaryLink: "/videos",
  },
  {
    id: "slide-three",
    title: "Upgrade with",
    highlight: "Personalised Learning",
    suffix: "Today",
    description:
      "Tailored curriculum, adaptive assessments, and real-time analytics to track your progress.",
    stats: [
      { label: "Active Classes", value: "120+" },
      { label: "Practice Sets", value: "900+" },
      { label: "Expert Tutors", value: "350+" },
    ],
    image: "/images/banners/Banner3.png",
    primaryLink: "/dashboard",
    secondaryLink: "/about",
  },
];

const getLightShade = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const lightR = Math.round(r * 0.1 + 255 * 0.9);
  const lightG = Math.round(g * 0.1 + 255 * 0.9);
  const lightB = Math.round(b * 0.1 + 255 * 0.9);

  return `rgb(${lightR}, ${lightG}, ${lightB})`;
};

export const HOME_CATEGORY_TABS = [
  "Skills",
  "Banking Exams",
  "Learnic Kids",
  "Academic",
  "General Studies",
  "Medical",
  "Railways",
  "Law",
  "Defense",
  "Teaching",
] as const;

export interface HomeCategory {
  icon: LucideIcon;
  name: string;
  description: string;
  courses: number;
  borderColor: string;
  buttonBg: string;
  buttonText: string;
}

const homeCategoryBase: Array<Omit<HomeCategory, "buttonBg">> = [
  {
    icon: Guitar,
    name: "Guitar",
    description: "Play your favorite songs",
    courses: 24,
    borderColor: "#14B8A6",
    buttonText: "#546E7A",
  },
  {
    icon: Piano,
    name: "Piano",
    description: "Master melodies & chords",
    courses: 20,
    borderColor: "#3B82F6",
    buttonText: "#546E7A",
  },
  {
    icon: Music2,
    name: "Dance",
    description: "Move with rhythm & style",
    courses: 15,
    borderColor: "#EC4899",
    buttonText: "#546E7A",
  },
  {
    icon: Heart,
    name: "Yoga",
    description: "Find inner balance",
    courses: 10,
    borderColor: "#10B981",
    buttonText: "#546E7A",
  },
  {
    icon: Utensils,
    name: "Cooking",
    description: "Cook with confidence",
    courses: 26,
    borderColor: "#F97316",
    buttonText: "#546E7A",
  },
  {
    icon: Camera,
    name: "Photography",
    description: "Capture your creativity",
    courses: 20,
    borderColor: "#9333EA",
    buttonText: "#546E7A",
  },
  {
    icon: Dumbbell,
    name: "Fitness",
    description: "Get stronger every day",
    courses: 52,
    borderColor: "#EF4444",
    buttonText: "#546E7A",
  },
  {
    icon: Palette,
    name: "Drawing",
    description: "Sketch your imagination",
    courses: 16,
    borderColor: "#A78BFA",
    buttonText: "#546E7A",
  },
];

export const HOME_CATEGORIES: HomeCategory[] = homeCategoryBase.map((category) => ({
  ...category,
  buttonBg: getLightShade(category.borderColor),
}));

export interface HomeLearningTool {
  icon: LucideIcon;
  title: string;
  description: string;
  cardBg: string;
  iconCircleBg: string;
  iconColor: string;
  buttonBg: string;
  titleColor: string;
  descColor: string;
  buttonTextColor: string;
}

export const HOME_LEARNING_TOOLS: HomeLearningTool[] = [
  {
    icon: Video,
    title: "Live Classes",
    description: "Interactive live sessions with expert instructors and real-time Q&A",
    cardBg: "#572EEE0F",
    iconCircleBg: "#DCD2FF",
    iconColor: "#6B47ED",
    buttonBg: "#6B47ED",
    titleColor: "#1F2937",
    descColor: "#4B5563",
    buttonTextColor: "#FFFFFF",
  },
  {
    icon: PlayCircle,
    title: "Recorded Videos",
    description: "High-quality video content available 24/7 for flexible learning",
    cardBg: "#FACC150F",
    iconCircleBg: "#FFE3BC",
    iconColor: "#F97316",
    buttonBg: "#F59E0B",
    titleColor: "#1F2937",
    descColor: "#4B5563",
    buttonTextColor: "#FFFFFF",
  },
  {
    icon: FileQuestion,
    title: "Interactive Test Series",
    description: "Test your knowledge with engaging series and instant feedback",
    cardBg: "#572EEE0F",
    iconCircleBg: "#DCD2FF",
    iconColor: "#6B47ED",
    buttonBg: "#6B47ED",
    titleColor: "#1F2937",
    descColor: "#4B5563",
    buttonTextColor: "#FFFFFF",
  },
];

export interface HomeTutor {
  id: string;
  name: string;
  subject: string;
  subjectColor: string;
  rating: number;
  degree: string;
  students: number;
  experience: string;
  badge: string;
  image: string;
}

export const HOME_TOP_TUTORS: HomeTutor[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    subject: "Mathematics",
    subjectColor: "#3B82F6",
    rating: 5.0,
    degree: "PhD in Mathematics, MIT",
    students: 2847,
    experience: "8 Years Experience",
    badge: "#1",
    image: "/images/tutors/Tutors.jpg",
  },
  {
    id: "2",
    name: "Michael Chen",
    subject: "Computer Science",
    subjectColor: "#10B981",
    rating: 5.0,
    degree: "MS Computer Science, Stanford",
    students: 2156,
    experience: "6 Years Experience",
    badge: "#2",
    image: "/images/tutors/Tutors2.jpg",
  },
  {
    id: "3",
    name: "Dr. Emily Watson",
    subject: "Physics",
    subjectColor: "#A78BFA",
    rating: 5.0,
    degree: "PhD Physics, Harvard",
    students: 1923,
    experience: "10 Years Experience",
    badge: "#3",
    image: "/images/tutors/Tutors3.jpg",
  },
];

export interface HomeSuccessStory {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
  gradient: boolean;
}

export const HOME_SUCCESS_STORIES: HomeSuccessStory[] = [
  {
    id: "1",
    name: "David Kim",
    role: "Senior Developer at Microsoft",
    quote:
      "From zero coding experience to building full-stack applications. The curriculum is perfectly structured and the support is incredible.",
    rating: 5.0,
    image: "",
    gradient: false,
  },
  {
    id: "2",
    name: "Lisa Thompson",
    role: "Data Analyst at Netflix",
    quote:
      "The hands-on projects with real datasets prepared me perfectly for my role. I now lead data initiatives at my company.",
    rating: 5.0,
    image: "",
    gradient: true,
  },
  {
    id: "3",
    name: "Jessica Park",
    role: "Senior UX Designer at Airbnb",
    quote:
      "The design thinking approach and portfolio guidance helped me transition from marketing to UX design seamlessly.",
    rating: 5.0,
    image: "",
    gradient: false,
  },
];

export const JOIN_SECTION_TUTOR_FEATURES = [
  "Create courses",
  "Live teaching tools",
  "Global reach",
] as const;

export interface JoinSectionCoordinatorFeature {
  text: string;
  icon: LucideIcon;
}

export const JOIN_SECTION_COORDINATOR_FEATURES: JoinSectionCoordinatorFeature[] = [
  { text: "Earn per enrollment", icon: DollarSign },
  { text: "Unique referral dashboard", icon: Link2 },
  { text: "Support & training provided", icon: MessageCircle },
];



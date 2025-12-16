import type { LucideIcon } from "lucide-react";
import {
  DollarSign,
  Dumbbell,
  FileQuestion,
  Handshake,
  Utensils,
  Heart,
  Link2,
  MessageCircle,
  Music2,
  Palette,
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
      { label: "Workshop", value: "250+" },
      { label: "Mentors", value: "650+" },
    ],
    image: "/images/banners/Banner1.png",
    primaryLink: "/live-classes",
    secondaryLink: "/videos",
  },
  {
    id: "slide-three",
    title: "Upgrade with",
    highlight: "Personalised Learning",
    suffix: "",
    description:
      "Tailored curriculum, adaptive assessments, and real-time analytics to track your progress.",
    stats: [
      { label: "Classes", value: "120+" },
      { label: "Practice", value: "900+" },
      { label: "Tutors", value: "350+" },
    ],
    image: "/images/banners/Banner1.png",
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
  "All",
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

export type HomeCategoryTab = (typeof HOME_CATEGORY_TABS)[number];

export interface HomeCategory {
  icon: LucideIcon;
  name: string;
  description: string;
  courses: number;
  borderColor: string;
  buttonBg: string;
  buttonText: string;
  tabs: HomeCategoryTab[];
}

const homeCategoryBase: Array<Omit<HomeCategory, "buttonBg">> = [
  {
    icon: Video,
    name: "Digital Marketing",
    description: "Grow brands with data-driven",
    courses: 32,
    borderColor: "#6366F1",
    buttonText: "#1F2937",
    tabs: ["Skills", "General Studies", "Banking Exams"],
  },
  {
    icon: PlayCircle,
    name: "Full-Stack Development",
    description: "Build modern web & mobile applications",
    courses: 28,
    borderColor: "#2563EB",
    buttonText: "#1F2937",
    tabs: ["Skills", "Academic", "Railways"],
  },
  {
    icon: Palette,
    name: "Creative Arts Studio",
    description: "Master UI/UX, illustration, and branding",
    courses: 24,
    borderColor: "#EC4899",
    buttonText: "#1F2937",
    tabs: ["Skills", "Learnic Kids", "Teaching"],
  },
  {
    icon: DollarSign,
    name: "Bank PO Mastery",
    description: "Crack SBI & IBPS exams with structured",
    courses: 18,
    borderColor: "#0EA5E9",
    buttonText: "#0B3C5D",
    tabs: ["Banking Exams", "General Studies"],
  },
  {
    icon: FileQuestion,
    name: "UPSC GS Pro",
    description: "Tackle GS papers with expert mentorship",
    courses: 22,
    borderColor: "#8B5CF6",
    buttonText: "#1F2937",
    tabs: ["General Studies", "Law", "Defense"],
  },
  {
    icon: Heart,
    name: "Medical NEET Prep",
    description: "Concept clarity sessions by top doctors",
    courses: 20,
    borderColor: "#10B981",
    buttonText: "#0B3C5D",
    tabs: ["Medical", "Academic"],
  },
  {
    icon: Link2,
    name: "Railway JE Prep",
    description: "Score high in technical & aptitude",
    courses: 16,
    borderColor: "#F97316",
    buttonText: "#1F2937",
    tabs: ["Railways", "Defense"],
  },
  {
    icon: Handshake,
    name: "Law Entrance Bootcamp",
    description: "Ace CLAT & legal reasoning assessments",
    courses: 14,
    borderColor: "#F59E0B",
    buttonText: "#1F2937",
    tabs: ["Law", "General Studies"],
  },
  {
    icon: Dumbbell,
    name: "Defense Physical Training",
    description: "Get battle-ready with guided drills",
    courses: 26,
    borderColor: "#EF4444",
    buttonText: "#1F2937",
    tabs: ["Defense", "Skills", "Railways"],
  },
  {
    icon: Music2,
    name: "Learnic Kids Explorer",
    description: "STEM, arts, and language fun for kids",
    courses: 30,
    borderColor: "#9333EA",
    buttonText: "#1F2937",
    tabs: ["Learnic Kids", "Teaching"],
  },
  {
    icon: MessageCircle,
    name: "Teaching Aptitude",
    description: "Crack CTET & hone classroom skills",
    courses: 19,
    borderColor: "#14B8A6",
    buttonText: "#0B3C5D",
    tabs: ["Teaching", "Academic", "Skills"],
  },
  {
    icon: Utensils,
    name: "Culinary Mastery",
    description: "Professional cooking & baking journeys",
    courses: 21,
    borderColor: "#F87171",
    buttonText: "#1F2937",
    tabs: ["Skills", "Learnic Kids"],
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
  {
    id: "4",
    name: "Liam Martinez",
    subject: "Business Strategy",
    subjectColor: "#F97316",
    rating: 4.9,
    degree: "MBA, Wharton School",
    students: 1740,
    experience: "9 Years Experience",
    badge: "#4",
    image: "/images/tutors/Tutors.jpg",
  },
  {
    id: "5",
    name: "Aisha Khan",
    subject: "Biology",
    subjectColor: "#22C55E",
    rating: 4.8,
    degree: "MS Biology, Johns Hopkins",
    students: 1613,
    experience: "7 Years Experience",
    badge: "#5",
    image: "/images/tutors/Tutors2.jpg",
  },
  {
    id: "6",
    name: "Noah Williams",
    subject: "Robotics",
    subjectColor: "#8B5CF6",
    rating: 4.9,
    degree: "MEng Robotics, Carnegie Mellon",
    students: 1890,
    experience: "8 Years Experience",
    badge: "#6",
    image: "/images/tutors/Tutors3.jpg",
  },
  {
    id: "7",
    name: "Priya Mehta",
    subject: "Data Analytics",
    subjectColor: "#0EA5E9",
    rating: 5.0,
    degree: "MTech Data Analytics, IIT Bombay",
    students: 2055,
    experience: "10 Years Experience",
    badge: "#7",
    image: "/images/tutors/Tutors.jpg",
  },
  {
    id: "8",
    name: "Ethan Brooks",
    subject: "Creative Writing",
    subjectColor: "#EC4899",
    rating: 4.7,
    degree: "MFA Creative Writing, NYU",
    students: 1388,
    experience: "6 Years Experience",
    badge: "#8",
    image: "/images/tutors/Tutors2.jpg",
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
    image: "/images/students/student1.jpg",
    gradient: false,
  },
  {
    id: "2",
    name: "Lisa Thompson",
    role: "Data Analyst at Netflix",
    quote:
      "The hands-on projects with real datasets prepared me perfectly for my role. I now lead data initiatives at my company.",
    rating: 5.0,
    image: "/images/students/student2.jpg",
    gradient: true,
  },
  {
    id: "3",
    name: "Jessica Park",
    role: "Senior UX Designer at Airbnb",
    quote:
      "The design thinking approach and portfolio guidance helped me transition from marketing to UX design seamlessly.",
    rating: 4.9,
    image: "/images/students/student3.jpg",
    gradient: false,
  },
  {
    id: "4",
    name: "Marco Alvarez",
    role: "Product Manager at Spotify",
    quote:
      "Capstone reviews and mentor feedback helped me craft a product portfolio that stood out in every interview.",
    rating: 4.8,
    image: "/images/students/student4.jpg",
    gradient: true,
  },
  {
    id: "5",
    name: "Sophia Turner",
    role: "Cybersecurity Analyst at Cisco",
    quote:
      "Labs felt like real on-call scenarios. I was ready for the SOC from day one because of Learnic Tutor's simulations.",
    rating: 5.0,
    image: "/images/students/student5.jpg",
    gradient: false,
  },
  {
    id: "6",
    name: "Ahmed Farouk",
    role: "AI Researcher at DeepMind",
    quote:
      "Advanced ML modules and community hackathons pushed me to publish my first paper. The experience here is unmatched.",
    rating: 5.0,
    image: "/images/students/student6.jpg",
    gradient: true,
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



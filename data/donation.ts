export interface BatchCard {
  id: string;
  class: string;
  subject: string;
  board: string;
  studentsNeedingSupport: number;
  totalStudents?: number; // Total students in batch (for progress calculation)
  startDate: string;
  duration: string;
  sponsorAmount: number;
  icon: string; // Icon name for lucide-react
}

export interface Sponsor {
  id: string;
  name: string;
  avatar: string;
  amount: number;
  class: string;
  subject: string;
  board: string;
}

export interface WhySupportFeature {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name for lucide-react
}

export interface DonationSuccessStory {
  id: string;
  name: string;
  class: string;
  location: string;
  quote: string;
  sponsorName: string;
  avatar: string;
}

export const DONATION_BATCHES: BatchCard[] = [
  {
    id: "batch-1",
    class: "Class 9",
    subject: "Mathematics",
    board: "CBSE Board",
    studentsNeedingSupport: 11,
    totalStudents: 40,
    startDate: "Jan 15, 2025",
    duration: "3 months",
    sponsorAmount: 2499,
    icon: "Calculator",
  },
  {
    id: "batch-2",
    class: "Class 10",
    subject: "Science",
    board: "CBSE Board",
    studentsNeedingSupport: 5,
    totalStudents: 45,
    startDate: "Jan 20, 2025",
    duration: "3 months",
    sponsorAmount: 2499,
    icon: "FlaskConical",
  },
  {
    id: "batch-3",
    class: "Class 8",
    subject: "English",
    board: "CBSE Board",
    studentsNeedingSupport: 3,
    totalStudents: 35,
    startDate: "Jan 18, 2025",
    duration: "3 months",
    sponsorAmount: 2499,
    icon: "BookOpen",
  },
  {
    id: "batch-4",
    class: "Class 10",
    subject: "Physics",
    board: "CBSE Board",
    studentsNeedingSupport: 4,
    totalStudents: 42,
    startDate: "Jan 22, 2025",
    duration: "3 months",
    sponsorAmount: 2499,
    icon: "Zap",
  },
  {
    id: "batch-5",
    class: "Class 8",
    subject: "Chemistry",
    board: "CBSE Board",
    studentsNeedingSupport: 1,
    totalStudents: 38,
    startDate: "Jan 16, 2025",
    duration: "3 months",
    sponsorAmount: 2499,
    icon: "FlaskConical",
  },
  {
    id: "batch-6",
    class: "Class 7",
    subject: "Social Studies",
    board: "CBSE Board",
    studentsNeedingSupport: 6,
    totalStudents: 40,
    startDate: "Jan 25, 2025",
    duration: "3 months",
    sponsorAmount: 2499,
    icon: "Globe",
  },
  {
    id: "batch-7",
    class: "Class 8",
    subject: "Hindi",
    board: "CBSE Board",
    studentsNeedingSupport: 2,
    totalStudents: 36,
    startDate: "Jan 19, 2025",
    duration: "3 months",
    sponsorAmount: 2499,
    icon: "BookOpen",
  },
  {
    id: "batch-8",
    class: "Class 10",
    subject: "Biology",
    board: "CBSE Board",
    studentsNeedingSupport: 3,
    totalStudents: 44,
    startDate: "Jan 21, 2025",
    duration: "3 months",
    sponsorAmount: 2499,
    icon: "Beaker",
  },
];

export const DONATION_SPONSORS: Sponsor[] = [
  {
    id: "sponsor-1",
    name: "Priya Sharma",
    avatar: "/images/avatars/sponsor-1.jpg",
    amount: 2999,
    class: "Class 9",
    subject: "Science",
    board: "CBSE",
  },
  {
    id: "sponsor-2",
    name: "Rajesh Kumar",
    avatar: "/images/avatars/sponsor-2.jpg",
    amount: 2499,
    class: "Class 10",
    subject: "Mathematics",
    board: "ICSE",
  },
  {
    id: "sponsor-3",
    name: "Amit Patel",
    avatar: "/images/avatars/sponsor-3.jpg",
    amount: 1799,
    class: "Class 8",
    subject: "English",
    board: "CBSE",
  },
  {
    id: "sponsor-4",
    name: "Neha Gupta",
    avatar: "/images/avatars/sponsor-4.jpg",
    amount: 2799,
    class: "Class 11",
    subject: "Chemistry",
    board: "State",
  },
  {
    id: "sponsor-5",
    name: "Vikram Singh",
    avatar: "/images/avatars/sponsor-5.jpg",
    amount: 3499,
    class: "Class 12",
    subject: "Physics",
    board: "CBSE",
  },
  {
    id: "sponsor-6",
    name: "Anjali Reddy",
    avatar: "/images/avatars/sponsor-6.jpg",
    amount: 1999,
    class: "Class 7",
    subject: "SST",
    board: "ICSE",
  },
];

export const DONATION_WHY_SUPPORT: WhySupportFeature[] = [
  {
    id: "feature-1",
    title: "Enable Quality Education",
    description:
      "Underprivileged students gain access to proper live education with expert teachers and comprehensive course material",
    icon: "HeartHandshake",
  },
  {
    id: "feature-2",
    title: "Support All Boards",
    description:
      "Teaching across CBSE, ICSE & State Boards ensures every student gets relevant, board-specific education",
    icon: "School",
  },
  {
    id: "feature-3",
    title: "Bridge Learning Gaps",
    description:
      "Help overcome learning gaps in India with personalized attention, doubt solving sessions, and continuous assessments",
    icon: "TrendingUp",
  },
];

export const DONATION_SUCCESS_STORIES: DonationSuccessStory[] = [
  {
    id: "story-1",
    name: "Riya Mehta",
    class: "Class 10",
    location: "Mumbai",
    quote:
      "Thanks to my sponsor, I could attend live classes and clear my doubts instantly. I scored 94% in my board exams!",
    sponsorName: "Anil Verma",
    avatar: "/images/students/riya.jpg",
  },
  {
    id: "story-2",
    name: "Arjun Das",
    class: "Class 12",
    location: "Kolkata",
    quote:
      "The quality of teaching was amazing! My Physics concepts became crystal clear and I cracked JEE Mains.",
    sponsorName: "Meera Shah",
    avatar: "/images/students/arjun.jpg",
  },
  {
    id: "story-3",
    name: "Kavya Nair",
    class: "Class 9",
    location: "Bangalore",
    quote:
      "I never thought I could understand Math so well. Now it's my favorite subject! Thank you to my sponsor.",
    sponsorName: "Rohit Kapoor",
    avatar: "/images/students/kavya.jpg",
  },
];

export const TOTAL_SPONSORS = 3890;


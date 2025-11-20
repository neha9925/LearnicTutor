export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  category: "leadership" | "advisors" | "investors";
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Co-Founder & CEO",
    avatar: "/images/tutors/tutor-1.jpg",
    quote: "Education is the most powerful weapon to change the world.",
    linkedin: "https://linkedin.com/in/michaelchen",
    email: "michael@learnic.com",
    category: "leadership",
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Co-Founder & CTO",
    avatar: "/images/tutors/tutor-2.jpg",
    quote: "Technology should serve learning, not replace human connection.",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    email: "sarah@learnic.com",
    category: "leadership",
  },
  {
    id: "david-martinez",
    name: "David Martinez",
    role: "Lead Investor",
    avatar: "/images/tutors/tutor-3.jpg",
    quote: "Investing in education is investing in humanity's future.",
    linkedin: "https://linkedin.com/in/davidmartinez",
    email: "david@learnic.com",
    category: "leadership",
  },
  {
    id: "emily-roberts",
    name: "Emily Roberts",
    role: "Chief Learning Officer",
    avatar: "/images/instructors/instructor-1.jpg",
    quote: "Every student deserves a personalized learning journey.",
    linkedin: "https://linkedin.com/in/emilyroberts",
    email: "emily@learnic.com",
    category: "leadership",
  },
];

export const ADVISORS: TeamMember[] = [
  {
    id: "advisor-1",
    name: "Dr. James Wilson",
    role: "Education Technology Advisor",
    avatar: "/images/tutors/tutor-1.jpg",
    linkedin: "https://linkedin.com/in/jameswilson",
    category: "advisors",
  },
  {
    id: "advisor-2",
    name: "Lisa Chen",
    role: "Strategic Growth Advisor",
    avatar: "/images/instructors/instructor-2.jpg",
    linkedin: "https://linkedin.com/in/lisachen",
    category: "advisors",
  },
  {
    id: "advisor-3",
    name: "Robert Martinez",
    role: "Investment Advisor",
    avatar: "/images/tutors/tutor-2.jpg",
    linkedin: "https://linkedin.com/in/robertmartinez",
    category: "advisors",
  },
];

export const INVESTORS: TeamMember[] = [
  {
    id: "investor-1",
    name: "Tech Ventures Capital",
    role: "Series A Lead Investor",
    avatar: "/images/tutors/tutor-3.jpg",
    linkedin: "https://linkedin.com/company/techventures",
    category: "investors",
  },
  {
    id: "investor-2",
    name: "EduGrowth Partners",
    role: "Seed Round Investor",
    avatar: "/images/instructors/instructor-1.jpg",
    linkedin: "https://linkedin.com/company/edugrowth",
    category: "investors",
  },
  {
    id: "investor-3",
    name: "Future Learning Fund",
    role: "Strategic Investor",
    avatar: "/images/tutors/tutor-1.jpg",
    linkedin: "https://linkedin.com/company/futurelearning",
    category: "investors",
  },
  {
    id: "investor-4",
    name: "Innovation Capital",
    role: "Series A Co-Investor",
    avatar: "/images/instructors/instructor-2.jpg",
    linkedin: "https://linkedin.com/company/innovationcapital",
    category: "investors",
  },
];

export const TRUSTED_PARTNERS: Partner[] = [
  {
    id: "google",
    name: "Google",
    logo: "/logos/partners/google.svg",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "/logos/partners/microsoft.svg",
  },
  {
    id: "aws",
    name: "AWS",
    logo: "/logos/partners/aws.svg",
  },
  {
    id: "apple",
    name: "Apple",
    logo: "/logos/partners/apple.svg",
  },
  {
    id: "meta",
    name: "Meta",
    logo: "/logos/partners/meta.svg",
  },
];


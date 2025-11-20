export interface PolicySection {
  id: string;
  title: string;
  content: string;
}

export interface InfoCollectionItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  description: string;
}

export interface SecurityItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface UserRightItem {
  id: string;
  title: string;
  description: string;
}

export const POLICY_SECTIONS = [
  "Introduction",
  "Information We Collect",
  "How We Use Your Information",
  "Cookies & Tracking",
  "Data Protection & Security",
  "Sharing of Information",
  "User Rights & Choices",
  "Third-Party Links",
  "Policy Updates",
  "Contact Information",
];

export const INFORMATION_COLLECTED: InfoCollectionItem[] = [
  {
    id: "personal",
    title: "Personal Information",
    description: "Name, Email, Phone Number",
    icon: "user",
  },
  {
    id: "payment",
    title: "Payment Data",
    description: "Transactions via secure gateways",
    icon: "credit-card",
  },
  {
    id: "educational",
    title: "Educational Data",
    description: "Courses, Progress, Test Scores",
    icon: "graduation-cap",
  },
  {
    id: "device",
    title: "Device & Usage Data",
    description: "Browser, IP, Time of access",
    icon: "monitor",
  },
];

export const USE_CASES: UseCaseItem[] = [
  {
    id: "service-delivery",
    title: "Service Delivery",
    description: "To provide and improve learning services",
  },
  {
    id: "personalization",
    title: "Personalization",
    description: "To personalize your dashboard and recommendations",
  },
  {
    id: "payment-processing",
    title: "Payment Processing",
    description: "To process payments and manage subscriptions",
  },
  {
    id: "communication",
    title: "Communication",
    description: "To communicate updates, offers, and feedback requests",
  },
];

export const SECURITY_MEASURES: SecurityItem[] = [
  {
    id: "encryption",
    title: "Secure Encryption",
    description: "SSL Protection",
    icon: "lock",
  },
  {
    id: "access-control",
    title: "Limited Access",
    description: "Authorized Personnel Only",
    icon: "users",
  },
  {
    id: "audits",
    title: "Security Audits",
    description: "Regular Reviews",
    icon: "search",
  },
  {
    id: "compliance",
    title: "Legal Compliance",
    description: "Data Protection Laws",
    icon: "gavel",
  },
];

export const USER_RIGHTS: UserRightItem[] = [
  {
    id: "access",
    title: "Access or update your data",
    description: "",
  },
  {
    id: "deletion",
    title: "Request data deletion",
    description: "",
  },
  {
    id: "opt-out",
    title: "Opt-out of marketing emails",
    description: "",
  },
  {
    id: "cookies",
    title: "Manage cookies",
    description: "",
  },
];

export const LAST_UPDATED = "January 1, 2024";


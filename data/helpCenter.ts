export interface HelpCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  articleCount: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface HelpArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  views: number;
}

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Learn the basics of using Learnic platform",
    icon: "play-circle",
    articleCount: 12,
  },
  {
    id: "account",
    title: "Account & Settings",
    description: "Manage your account, profile, and preferences",
    icon: "user",
    articleCount: 8,
  },
  {
    id: "courses",
    title: "Courses & Learning",
    description: "Everything about courses, videos, and learning",
    icon: "book",
    articleCount: 15,
  },
  {
    id: "live-classes",
    title: "Live Classes",
    description: "Join and participate in live sessions",
    icon: "video",
    articleCount: 10,
  },
  {
    id: "payments",
    title: "Payments & Billing",
    description: "Payment methods, subscriptions, and refunds",
    icon: "credit-card",
    articleCount: 9,
  },
  {
    id: "technical",
    title: "Technical Support",
    description: "Troubleshooting and technical issues",
    icon: "settings",
    articleCount: 14,
  },
  {
    id: "certificates",
    title: "Certificates",
    description: "Download and verify your course certificates",
    icon: "award",
    articleCount: 7,
  },
  {
    id: "refunds",
    title: "Refunds & Policies",
    description: "Learn about refunds and platform policies",
    icon: "file-text",
    articleCount: 11,
  },
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "How do I create an account on Learnic?",
    answer: "Creating an account is easy! Click on the 'Sign Up' button in the top right corner, enter your email address and create a password. You can also sign up using your Google or Facebook account for faster registration.",
    category: "getting-started",
  },
  {
    id: "faq-2",
    question: "How do I enroll in a course?",
    answer: "Browse our course catalog, select a course you're interested in, and click 'Enroll Now'. For paid courses, you'll be redirected to the checkout page to complete your payment. Once enrolled, you can access the course content immediately.",
    category: "courses",
  },
  {
    id: "faq-3",
    question: "Can I access courses on mobile devices?",
    answer: "Yes! Learnic is fully responsive and works on all devices including smartphones and tablets. You can download our mobile app from the App Store or Google Play for the best mobile experience.",
    category: "technical",
  },
  {
    id: "faq-4",
    question: "How do I join a live class?",
    answer: "Navigate to the 'Live Classes' section, browse available classes, and click on a class to see its schedule. Click 'Join Class' when the class is live. Make sure you have a stable internet connection for the best experience.",
    category: "live-classes",
  },
  {
    id: "faq-5",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted payment gateway.",
    category: "payments",
  },
  {
    id: "faq-6",
    question: "Can I get a refund for a course?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with a course within 30 days of purchase, contact our support team and we'll process a full refund. Refunds are processed within 5-7 business days.",
    category: "payments",
  },
  {
    id: "faq-7",
    question: "How do I reset my password?",
    answer: "Click on 'Login' and then 'Forgot Password'. Enter your email address and we'll send you a password reset link. Click the link in the email to create a new password. Make sure to check your spam folder if you don't see the email.",
    category: "account",
  },
  {
    id: "faq-8",
    question: "How can I contact support?",
    answer: "You can reach our support team through the contact form on this page, email us at support@learnic.com, or use the live chat feature available on our website. Our support team is available 24/7 to assist you.",
    category: "technical",
  },
  {
    id: "faq-9",
    question: "Do courses have certificates?",
    answer: "Yes! Upon successful completion of a course, you'll receive a digital certificate that you can download and share on LinkedIn or print. Certificates are verified and can be used for professional development and career advancement.",
    category: "courses",
  },
  {
    id: "faq-10",
    question: "Can I download course videos?",
    answer: "Course videos can be downloaded for offline viewing through our mobile app. On the web platform, videos are available for streaming. This ensures you always have access to your learning materials when you need them.",
    category: "courses",
  },
];

export interface Guide {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: "read" | "video";
  image?: string;
}

export const LEARNIC_GUIDES: Guide[] = [
  {
    id: "guide-1",
    title: "Getting Started with Learnic",
    description: "Learn the basics of navigating the platform and setting up your profile",
    duration: "3 min read",
    type: "read",
    image: "/images/banners/blogA.svg",
  },
  {
    id: "guide-2",
    title: "How to Purchase a Course",
    description: "Step-by-step guide to browsing, selecting, and purchasing courses",
    duration: "2 min video",
    type: "video",
    image: "/images/banners/blogB.svg",
  },
  {
    id: "guide-3",
    title: "Understanding Test Modules",
    description: "Discover how to take tests, review results, and track your progress",
    duration: "4 min read",
    type: "read",
    image: "/images/banners/blogC.svg",
  },
];

export const POPULAR_ARTICLES: HelpArticle[] = [
  {
    id: "article-1",
    title: "Getting Started with Learnic: A Complete Guide",
    description: "Learn everything you need to know to get started on Learnic platform",
    category: "getting-started",
    views: 12500,
  },
  {
    id: "article-2",
    title: "How to Join and Participate in Live Classes",
    description: "Step-by-step guide to joining live classes and making the most of them",
    category: "live-classes",
    views: 9800,
  },
  {
    id: "article-3",
    title: "Troubleshooting Video Playback Issues",
    description: "Common video playback problems and their solutions",
    category: "technical",
    views: 8700,
  },
  {
    id: "article-4",
    title: "Understanding Your Course Progress and Certificates",
    description: "Track your learning progress and earn certificates",
    category: "courses",
    views: 7600,
  },
  {
    id: "article-5",
    title: "Payment Methods and Subscription Plans",
    description: "Everything about payments, subscriptions, and billing",
    category: "payments",
    views: 6500,
  },
  {
    id: "article-6",
    title: "Managing Your Account Settings",
    description: "Update your profile, preferences, and account information",
    category: "account",
    views: 5400,
  },
];


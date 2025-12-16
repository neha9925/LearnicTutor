export interface AffiliateFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AffiliateFAQ {
  id: string;
  question: string;
  answer: string;
}

export const AFFILIATE_FEATURES: AffiliateFeature[] = [
  {
    id: "high-commissions",
    title: "High Commissions",
    description: "Get up to 25% on every sale you refer to our platform.",
    icon: "building",
  },
  {
    id: "global-reach",
    title: "Global Reach",
    description: "Promote courses to learners worldwide and expand your network.",
    icon: "globe",
  },
  {
    id: "real-time-dashboard",
    title: "Real-Time Dashboard",
    description: "Track clicks, conversions, and payouts with detailed analytics.",
    icon: "trending-up",
  },
  {
    id: "easy-integration",
    title: "Easy Integration",
    description: "Share links, banners, and social content effortlessly.",
    icon: "plug",
  },
  {
    id: "trusted-brand",
    title: "Trusted Brand",
    description: "Partner with a fast-growing E-learning platform.",
    icon: "graduation-cap",
  },
  {
    id: "dedicated-support",
    title: "Dedicated Support",
    description: "Get help from our affiliate support team whenever you need.",
    icon: "headset",
  },
];

export const AFFILIATE_FAQS: AffiliateFAQ[] = [
  {
    id: "faq-1",
    question: "How do I become an affiliate?",
    answer: "Becoming an affiliate is easy! Simply click the 'Get Started Now' button, fill out our affiliate application form, and wait for approval. Once approved, you'll receive access to your affiliate dashboard with unique tracking links and promotional materials.",
  },
  {
    id: "faq-2",
    question: "What is the commission structure?",
    answer: "Our commission structure is tiered based on performance. You can earn up to 40% commission on every successful sale. The more you promote, the higher your commission rate. Commission rates range from 20% for new affiliates to 40% for top performers.",
  },
  {
    id: "faq-3",
    question: "When will I receive my payouts?",
    answer: "Payouts are processed monthly on the 15th of each month for all earnings from the previous month. You can track your earnings in real-time through your affiliate dashboard. Minimum payout threshold is $50, and payments are made via PayPal, bank transfer, or other secure methods.",
  },
  {
    id: "faq-4",
    question: "Can I promote Learnic on social media?",
    answer: "Absolutely! We encourage affiliates to promote Learnic on all social media platforms including Facebook, Instagram, Twitter, YouTube, LinkedIn, and more. We provide ready-to-use social media templates, banners, and promotional content to make it easy for you.",
  },
  {
    id: "faq-5",
    question: "How do I track my earnings?",
    answer: "Your affiliate dashboard provides real-time tracking of clicks, conversions, and earnings. You can view detailed analytics including which courses are performing best, your conversion rates, and your total earnings. All data is updated in real-time so you always know where you stand.",
  },
  {
    id: "faq-6",
    question: "Can I get custom promo codes?",
    answer: "Yes! Top-performing affiliates can request custom promo codes for special promotions or campaigns. These codes can be personalized and tracked separately. Contact our affiliate support team to discuss custom promo code options based on your performance level.",
  },
];


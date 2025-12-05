import type { LucideIcon } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export interface FooterSocialLink {
  icon: LucideIcon;
  name: string;
}

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  { icon: Facebook, name: "Facebook" },
  { icon: Twitter, name: "Twitter" },
  { icon: Instagram, name: "Instagram" },
  { icon: Linkedin, name: "LinkedIn" },
];

export const FOOTER_COMPANY_LINKS = [
  "About Us",
  "Careers",
  "Blog",
  "Investors",
] as const;

export const FOOTER_QUICK_LINKS = [
  "Help Center",
  "Contact Us",
  "Affiliate",
  "Help and Support",
  "Meet our tutors",
  "Become a tutor",
  "Become a coordinator",
] as const;

export interface FooterHighlightStat {
  value: string;
  label: string;
  color: string;
}

export const FOOTER_HIGHLIGHT_STATS: FooterHighlightStat[] = [
  { value: "50K+", label: "Active Students", color: "#3B82F6" },
  { value: "1,200+", label: "Courses Available", color: "#10B981" },
  { value: "95%", label: "Completion Rate", color: "#9333EA" },
  { value: "24/7", label: "Support Available", color: "#F97316" },
];

export const FOOTER_LEGAL_LINKS = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
  "Accessibility",
] as const;



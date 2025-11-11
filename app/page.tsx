import HomePage from "@/components/pages/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learnic - Online Learning Platform",
  description: "Empower Your Learning Journey with Learnic - An online learning platform that makes it easy to learn and teach courses online.",
  keywords: ["online learning", "courses", "education", "tutoring", "e-learning"],
  openGraph: {
    title: "Learnic - Online Learning Platform",
    description: "Empower Your Learning Journey with Learnic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learnic - Online Learning Platform",
    description: "Empower Your Learning Journey with Learnic",
  },
};

export default function Home() {
  return <HomePage />;
}


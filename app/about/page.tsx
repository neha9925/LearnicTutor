import AboutPage from "@/components/pages/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Learnic",
  description: "Learn about Learnic's mission to revolutionize education and empower learners worldwide.",
  keywords: ["about", "mission", "team", "education", "online learning"],
  openGraph: {
    title: "About Us - Learnic",
    description: "Learn about Learnic's mission to revolutionize education",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Learnic",
    description: "Learn about Learnic's mission to revolutionize education",
  },
};

export default function About() {
  return <AboutPage />;
}


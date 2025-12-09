import { Metadata } from "next";
import TutorDashboardPage from "@/components/pages/TutorDashboardPage";

export const metadata: Metadata = {
  title: "Tutor Dashboard | Learnic",
  description: "Manage your classes, students, and earnings from your tutor dashboard.",
  openGraph: {
    title: "Tutor Dashboard | Learnic",
    description: "Manage your classes, students, and earnings.",
    type: "website",
  },
};

export default function TutorDashboard() {
  return <TutorDashboardPage />;
}


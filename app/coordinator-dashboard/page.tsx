import { Metadata } from "next";
import CoordinatorDashboardPage from "@/components/coordinator-dashboard/CoordinatorDashboardPage";

export const metadata: Metadata = {
  title: "Coordinator Dashboard | Learnic",
  description: "Manage your referrals, earnings, and batches from your coordinator dashboard.",
  openGraph: {
    title: "Coordinator Dashboard | Learnic",
    description: "Manage your referrals and earnings.",
    type: "website",
  },
};

export default function CoordinatorDashboard() {
  return <CoordinatorDashboardPage />;
}


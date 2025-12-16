import NotificationsPage from "@/components/pages/NotificationsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications - Learnic",
  description: "View all your notifications and stay updated with your learning journey.",
  openGraph: {
    title: "Notifications - Learnic",
    description: "View all your notifications and stay updated",
    type: "website",
  },
};

export default function Notifications() {
  return <NotificationsPage />;
}


import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiveClassesContent from "@/components/live/LiveClassesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Classes | Learnic",
  description: "Join our interactive live classes and learn from expert instructors in real-time. Enroll now and enhance your skills.",
  openGraph: {
    title: "Live Classes | Learnic",
    description: "Join our interactive live classes and learn from expert instructors in real-time.",
    type: "website",
  },
};

const LiveClassesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <LiveClassesContent />
      </main>
      <Footer />
    </div>
  );
};

export default LiveClassesPage;

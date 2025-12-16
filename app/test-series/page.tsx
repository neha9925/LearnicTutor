import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TestSeriesContent from "@/components/test-series/TestSeriesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Series | Learnic",
  description: "Choose from a wide range of test series to enhance your preparation.",
  openGraph: {
    title: "Test Series | Learnic",
    description: "Choose from a wide range of test series to enhance your preparation.",
    type: "website",
  },
};

const TestSeriesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <TestSeriesContent />
      </main>
      <Footer />
    </div>
  );
};

export default TestSeriesPage;


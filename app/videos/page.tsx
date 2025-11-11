import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideosContent from "@/components/videos/VideosContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Library | Learnic",
  description: "Browse our extensive video library with educational content across various subjects and topics.",
  openGraph: {
    title: "Video Library | Learnic",
    description: "Browse our extensive video library with educational content.",
    type: "website",
  },
};

const VideosPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <VideosContent />
      </main>
      <Footer />
    </div>
  );
};

export default VideosPage;



import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogContent from "@/components/blog/BlogContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Learnic Insights",
  description: "Explore expert articles, tips, and updates on live learning, recorded courses, and test strategies to help you grow smarter every day.",
  openGraph: {
    title: "Blog | Learnic Insights",
    description: "Explore expert articles and learning tips from Learnic.",
    type: "website",
  },
};

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <BlogHeroSection />
        <BlogContent />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;


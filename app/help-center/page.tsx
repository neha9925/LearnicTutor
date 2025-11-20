import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HelpCenterHero from "@/components/help/HelpCenterHero";
import HelpCategories from "@/components/help/HelpCategories";
import FAQSection from "@/components/help/FAQSection";
import PopularArticles from "@/components/help/PopularArticles";
import ContactSupport from "@/components/help/ContactSupport";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | Learnic",
  description: "Find answers to your questions, browse help articles, and get support from our team. We're here to help you succeed on Learnic.",
  openGraph: {
    title: "Help Center | Learnic",
    description: "Find answers and get support on Learnic.",
    type: "website",
  },
};

const HelpCenterPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <HelpCenterHero />
        <HelpCategories />
        <FAQSection />
        <PopularArticles />
        <ContactSupport />
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenterPage;


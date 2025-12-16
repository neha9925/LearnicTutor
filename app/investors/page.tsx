import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InvestorsHeroSection from "@/components/investors/InvestorsHeroSection";
import FeatureSections from "@/components/investors/FeatureSections";
import LeadershipSection from "@/components/investors/LeadershipSection";
import TrustedPartnersSection from "@/components/investors/TrustedPartnersSection";
import InvestorsCTA from "@/components/investors/InvestorsCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors | Learnic",
  description: "Invest in the future of education with Learnic. Join us in revolutionizing online learning and empowering millions of students worldwide.",
  openGraph: {
    title: "Investors | Learnic",
    description: "Invest in the future of education with Learnic.",
    type: "website",
  },
};

const InvestorsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <InvestorsHeroSection />
        <FeatureSections />
        <LeadershipSection />
        <TrustedPartnersSection />
        <InvestorsCTA />
      </main>
      <Footer />
    </div>
  );
};

export default InvestorsPage;


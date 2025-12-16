import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AffiliateHero from "@/components/affiliate/AffiliateHero";
import HowItWorks from "@/components/affiliate/HowItWorks";
import WhyPartner from "@/components/affiliate/WhyPartner";
import AffiliateFAQ from "@/components/affiliate/AffiliateFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program | Learnic",
  description: "Join the Learnic Affiliate Program and earn up to 40% commission on every sale. Promote our courses and start earning money today.",
  openGraph: {
    title: "Affiliate Program | Learnic",
    description: "Earn money by promoting Learnic courses. Get up to 40% commission on every sale.",
    type: "website",
  },
};

const AffiliatePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <AffiliateHero />
        <HowItWorks />
        <WhyPartner />
        <AffiliateFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default AffiliatePage;


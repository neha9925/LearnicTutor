import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TermsHero from "@/components/terms/TermsHero";
import TermsSidebar from "@/components/terms/TermsSidebar";
import TermsContent from "@/components/terms/TermsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Learnic",
  description: "Please read our terms and conditions before using our platform. Learn about your rights and responsibilities as a Learnic user.",
  openGraph: {
    title: "Terms & Conditions | Learnic",
    description: "Please read our terms and conditions before using our platform.",
    type: "website",
  },
};

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <TermsHero />
        
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <TermsSidebar />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <TermsContent />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;


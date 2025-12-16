import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PrivacyPolicyHero from "@/components/privacy/PrivacyPolicyHero";
import PrivacyPolicySidebar from "@/components/privacy/PrivacyPolicySidebar";
import PrivacyPolicyContent from "@/components/privacy/PrivacyPolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Learnic",
  description: "Learn how Learnic protects your data and information. Your trust matters to us.",
  openGraph: {
    title: "Privacy Policy | Learnic",
    description: "Learn how Learnic protects your data and information.",
    type: "website",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <PrivacyPolicyHero />
        
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <PrivacyPolicySidebar />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <PrivacyPolicyContent />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;


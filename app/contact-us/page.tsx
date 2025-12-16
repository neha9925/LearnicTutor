import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactUsHero from "@/components/contact/ContactUsHero";
import ContactForm from "@/components/contact/ContactForm";
import ReachUsDirectly from "@/components/contact/ReachUsDirectly";
import LocateUs from "@/components/contact/LocateUs";
import PartnerSection from "@/components/contact/PartnerSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Learnic",
  description: "Get in touch with Learnic. We're here to help and answer any question you might have. Contact us through email, phone, or visit our office.",
  openGraph: {
    title: "Contact Us | Learnic",
    description: "Get in touch with Learnic. We're here to help.",
    type: "website",
  },
};

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <ContactUsHero />
        <ContactForm />
        <ReachUsDirectly />
        <LocateUs />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsPage;


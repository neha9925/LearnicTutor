import { Metadata } from "next";
import DonationFormPage from "@/components/pages/DonationFormPage";

export const metadata: Metadata = {
  title: "Donation Form - Sponsor a Student | Learnic",
  description:
    "Sponsor students and make a difference. Fill out the donation form to support quality education.",
  openGraph: {
    title: "Donation Form - Sponsor a Student | Learnic",
    description: "Sponsor students and make a difference.",
    type: "website",
  },
};

export default function DonateFormPage() {
  return <DonationFormPage />;
}


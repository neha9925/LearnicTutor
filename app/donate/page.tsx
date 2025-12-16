import { Metadata } from "next";
import DonationPage from "@/components/pages/DonationPage";

export const metadata: Metadata = {
  title: "Donate - Sponsor a Class | Learnic",
  description:
    "Sponsor a class and support India's future. Help students access top quality learning in Mathematics, Science, English & more.",
  openGraph: {
    title: "Donate - Sponsor a Class | Learnic",
    description:
      "Sponsor a class and support India's future. Help students access top quality learning.",
    type: "website",
  },
};

export default function DonatePage() {
  return <DonationPage />;
}


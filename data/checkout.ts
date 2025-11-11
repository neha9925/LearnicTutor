import type { LucideIcon } from "lucide-react";
import { CreditCard, Landmark, Wallet, MessageCircle, Video, Download } from "lucide-react";

export interface CheckoutPaymentMethod {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export const CHECKOUT_PAYMENT_METHODS: CheckoutPaymentMethod[] = [
  {
    id: "card",
    label: "Credit/Debit Card",
    description: "Pay securely using your card",
    icon: CreditCard,
  },
  {
    id: "upi",
    label: "UPI (Google Pay, PhonePe, Paytm)",
    description: "Instant payment via UPI apps",
    icon: Wallet,
  },
  {
    id: "netbanking",
    label: "Net Banking",
    description: "Pay using your preferred bank",
    icon: Landmark,
  },
];

export interface CheckoutInclusion {
  label: string;
  icon: LucideIcon;
}

export const CHECKOUT_INCLUSIONS: CheckoutInclusion[] = [
  { label: "Access to live Q&A", icon: MessageCircle },
  { label: "Recording for 30 days", icon: Video },
  { label: "Downloadable practice materials", icon: Download },
];

export const CHECKOUT_BANK_OPTIONS = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "Yes Bank",
] as const;



export interface TermsSection {
  id: string;
  title: string;
}

export interface UserResponsibility {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PaymentPolicyItem {
  id: string;
  text: string;
}

export interface RefundPolicyItem {
  id: string;
  text: string;
  icon?: string;
}

export interface ContentRestriction {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ModificationItem {
  id: string;
  text: string;
}

export interface UpdateHistoryItem {
  id: string;
  text: string;
  isCurrent?: boolean;
}

export const TERMS_SECTIONS = [
  "Introduction",
  "Acceptance of Terms",
  "User Accounts & Responsibilities",
  "Course Enrollment & Access",
  "Payments & Refunds",
  "Intellectual Property",
  "Content Usage & Restrictions",
  "Limitations of Liability",
  "Termination Policy",
  "Modifications to Terms",
  "Governing Law",
  "Contact Information",
];

export const USER_RESPONSIBILITIES: UserResponsibility[] = [
  {
    id: "age-requirement",
    title: "Age Requirement",
    description: "You must be at least 13 years old to use Learnic.",
    icon: "user",
  },
  {
    id: "account-security",
    title: "Account Security",
    description: "You are responsible for maintaining the confidentiality of your login credentials.",
    icon: "lock",
  },
  {
    id: "account-misuse",
    title: "Account Misuse",
    description: "Misuse or fraudulent activity may lead to suspension or termination.",
    icon: "alert",
  },
];

export const PAYMENT_POLICY_ITEMS: PaymentPolicyItem[] = [
  {
    id: "secure-transactions",
    text: "All transactions are processed securely",
  },
  {
    id: "pricing",
    text: "Prices shown in IQD or local currency",
  },
];

export const REFUND_POLICY_ITEMS: RefundPolicyItem[] = [
  {
    id: "refund-allowed",
    text: "Refunds allowed within 7 days for non-accessed content",
    icon: "check",
  },
  {
    id: "no-refund",
    text: "No refund once course is accessed or downloaded",
    icon: "x",
  },
];

export const CONTENT_RESTRICTIONS: ContentRestriction[] = [
  {
    id: "allowed-usage",
    title: "Allowed Usage",
    description: "You may view and download content for personal learning only.",
    icon: "check",
  },
  {
    id: "prohibited-activities",
    title: "Prohibited Activities",
    description: "Reselling, recording, or public sharing is not permitted.",
    icon: "lock",
  },
];

export const MODIFICATION_ITEMS: ModificationItem[] = [
  {
    id: "notification",
    text: "Notification: Users will be notified of any changes via email or platform notification.",
  },
  {
    id: "effective-date",
    text: "Effective Date: Changes will take effect 30 days after notification.",
  },
  {
    id: "continued-use",
    text: "Continued Use: Continued use of the platform after changes constitutes acceptance.",
  },
];

export const UPDATE_HISTORY_ITEMS: UpdateHistoryItem[] = [
  {
    id: "november-2025",
    text: "November 2025 - Current Version",
    isCurrent: true,
  },
  {
    id: "august-2025",
    text: "August 2025 - Previous Update",
    isCurrent: false,
  },
  {
    id: "march-2025",
    text: "March 2025 - Initial Release",
    isCurrent: false,
  },
];

export const LAST_UPDATED_TERMS = "2023-10-26";


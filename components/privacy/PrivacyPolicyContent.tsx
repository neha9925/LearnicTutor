"use client";

import React from "react";
import {
  User,
  BarChart3,
  CreditCard,
  MapPin,
  Lock,
  Shield,
  Search,
  Bell,
  Check,
  Mail,
  Phone,
  MapPin as LocationPin,
  GraduationCap,
  Monitor,
  Settings,
  Users,
  Gavel,
  Info,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Calendar } from "lucide-react";
import {
  INFORMATION_COLLECTED,
  USE_CASES,
  SECURITY_MEASURES,
  USER_RIGHTS,
  LAST_UPDATED,
} from "@/data/privacyPolicy";
import { colors, typography } from "@/theme";

const iconMap: Record<string, React.ElementType> = {
  user: User,
  "bar-chart": BarChart3,
  "credit-card": CreditCard,
  "map-pin": MapPin,
  lock: Lock,
  shield: Shield,
  search: Search,
  bell: Bell,
  "graduation-cap": GraduationCap,
  monitor: Monitor,
  users: Users,
  gavel: Gavel,
};

const styles = {
  sectionHeading: {
    ...typography.section.headingLg,
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "16px",
    textAlign: "left" as const,
    color: colors.text.primary,
  },
  paragraph: {
    ...typography.card.bodyMd,
    color: colors.text.secondary,
    lineHeight: "1.6",
    marginBottom: "24px",
    fontSize: "16px",
  },
  divider: {
    borderTop: "1px solid #D1D5DB",
    marginTop: "24px",
    marginBottom: "24px",
  },
  contentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    padding: "32px",
    boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
  },
  subsectionTitle: {
    ...typography.card.titleMd,
    color: colors.text.primary,
    marginBottom: "8px",
    fontSize: "16px",
    fontWeight: 700,
  },
  subsectionDescription: {
    ...typography.card.bodySm,
    color: colors.text.secondary,
    fontSize: "14px",
  },
  iconSquare: {
    backgroundColor: "#F3E8FF",
    width: "48px",
    height: "48px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircle: {
    backgroundColor: "#F3E8FF",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
} as const;

const PrivacyPolicyContent: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Introduction */}
      <section id="introduction">
        <div style={styles.contentCard}>
          <h2 style={styles.sectionHeading}>Introduction</h2>
          <p style={styles.paragraph}>
            Learnic is committed to protecting your personal data and ensuring
            your learning experience remains safe and secure. This policy
            explains how we collect, use, and safeguard your information to
            provide you with the best educational platform possible.
          </p>
          <div style={styles.divider}></div>
        </div>
      </section>

      {/* Information We Collect */}
      <section id="information-we-collect">
        <div style={styles.contentCard}>
          <h2 style={styles.sectionHeading}>Information We Collect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {INFORMATION_COLLECTED.map((item) => {
              const IconComponent = iconMap[item.icon] || User;
              return (
                <div key={item.id} className="flex items-start gap-4">
                  <div style={styles.iconSquare}>
                    <IconComponent className="w-6 h-6 text-[#5636FF]" />
                  </div>
                  <div>
                    <h3 style={styles.subsectionTitle} className="mb-1">
                      {item.title}
                    </h3>
                    <p style={styles.subsectionDescription}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={styles.divider}></div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section id="how-we-use-your-information">
        <div style={styles.contentCard}>
          <h2 style={styles.sectionHeading} className="text-center">
            How We Use Your Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {USE_CASES.map((item) => (
              <div key={item.id}>
                <h3 style={styles.subsectionTitle} className="mb-2">
                  {item.title}
                </h3>
                <p style={styles.subsectionDescription}>{item.description}</p>
              </div>
            ))}
          </div>
          <div style={styles.divider}></div>
        </div>
      </section>

      {/* Cookies & Tracking Technologies */}
      <section id="cookies-&-tracking">
        <div style={styles.contentCard}>
          <h2 style={styles.sectionHeading}>Cookies & Tracking Technologies</h2>
          <p style={styles.paragraph}>
            We use cookies to improve your experience. You can manage
            preferences anytime.
          </p>
          <div className="mt-6">
            <Button
              variant="primary"
              size="md"
              className="rounded-lg !bg-[#5636FF] hover:!bg-[#4326D6] focus:ring-[#5636FF] flex items-center gap-2 text-white"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              <Settings className="w-5 h-5 text-white" />
              Manage Cookie Settings
            </Button>
          </div>
          <div style={styles.divider}></div>
        </div>
      </section>

      {/* Data Protection & Security */}
      <section id="data-protection-&-security">
        <div style={styles.contentCard}>
          <h2 style={styles.sectionHeading}>Data Protection & Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {SECURITY_MEASURES.map((item) => {
              const IconComponent = iconMap[item.icon] || Lock;
              return (
                <div key={item.id} className="text-center">
                  <div style={styles.iconCircle} className="mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-[#5636FF]" />
                  </div>
                  <h3 style={styles.subsectionTitle} className="mb-1">
                    {item.title}
                  </h3>
                  <p style={styles.subsectionDescription}>{item.description}</p>
                </div>
              );
            })}
          </div>
          <div style={styles.divider}></div>
        </div>
      </section>

      {/* Sharing of Information */}
      <section id="sharing-of-information">
        <div style={styles.contentCard}>
          <h2 style={styles.sectionHeading}>Sharing of Information</h2>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-white" />
              </div>
              <p style={styles.paragraph} className="mb-0">
                Learnic does not sell or rent your data. We only share
                information with trusted partners necessary to deliver our
                services (like payment gateways or email providers).
              </p>
            </div>
          </div>
          <div style={styles.divider}></div>
        </div>
      </section>

      {/* User Rights & Choices */}
      <section id="user-rights-&-choices">
        <div style={styles.contentCard}>
          <h2 style={styles.sectionHeading}>User Rights & Choices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {USER_RIGHTS.map((item) => (
              <div key={item.id} className="p-4 bg-gray-100 rounded-lg">
                <p style={styles.subsectionDescription} className="mb-0">
                  • {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-start">
            <Button
              variant="secondary"
              size="md"
              className="rounded-lg bg-white border-2 border-[#5636FF] text-[#5636FF] hover:bg-[#5636FF] hover:text-white focus:ring-[#5636FF]"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              Request Data Access
            </Button>
          </div>
          <div style={styles.divider}></div>
        </div>
      </section>

      {/* Third-Party Links */}
      <section id="third-party-links">
        <div style={styles.contentCard}>
          <h2 style={styles.sectionHeading}>Third-Party Links</h2>
          <p style={styles.paragraph}>
            Our platform may contain links to external websites. We are not
            responsible for their privacy practices. We encourage you to review
            the privacy policies of any third-party sites you visit.
          </p>
          <div style={styles.divider}></div>
        </div>
      </section>

      {/* Updates to This Policy */}
      <section id="policy-updates">
        <div style={styles.contentCard}>
          <h2 style={styles.sectionHeading}>Updates to This Policy</h2>
          <div className="flex items-start gap-6 mt-6">
            {/* Timeline Indicator */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#5636FF]"></div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
            {/* Text Content */}
            <div className="flex-1">
              <p style={styles.paragraph} className="mb-0">
                This Privacy Policy may be updated periodically. We encourage
                you to check this page regularly for any changes.
              </p>
            </div>
          </div>
          <div style={styles.divider}></div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact-information">
        <div style={styles.contentCard}>
          {/* Heading */}
          <h2 style={styles.sectionHeading}>Contact Information</h2>

          <div className="flex flex-col items-center mt-6">
            {/* Large Icon at Top */}
            <Mail className="w-12 h-12 text-[#5636FF] mb-6" />

            {/* Introductory Text */}
            <p style={styles.paragraph} className="text-center mb-8">
              If you have any questions about our Privacy Policy, please contact
              us:
            </p>

            {/* Contact Details */}
            <div className="space-y-4 flex flex-col items-center w-full">
              <div className="flex items-center justify-center gap-3">
                <div>
                  <Mail className="w-6 h-6 text-[#5636FF]" />
                </div>
                <div>
                  <span style={styles.paragraph} className="mb-0">
                    privacy@learnic.com
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div>
                  <Phone className="w-6 h-6 text-[#5636FF]" />
                </div>
                <div>
                  <span style={styles.paragraph} className="mb-0">
                    +91-XXXX-XXX-XXX
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div>
                  <LocationPin className="w-6 h-6 text-[#5636FF]" />
                </div>
                <div>
                  <span style={styles.paragraph} className="mb-0">
                    Learnic HQ, Bengaluru, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyContent;

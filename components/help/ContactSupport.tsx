"use client";

import React from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { colors, typography } from "@/theme";

const styles = {
  sectionHeading: {
    ...typography.section.headingLg,
    marginBottom: "12px",
  },
  sectionDescription: {
    ...typography.section.descriptionMd,
    marginBottom: "48px",
  },
  contactCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #572EEE",
    borderRadius: "12px",
  },
  contactTitle: {
    ...typography.card.titleMd,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: "#1F2937",
    marginBottom: "8px",
    fontSize: "20px",
    fontWeight: 700,
    textAlign: "center" as const,
  },
  contactDescription: {
    ...typography.card.bodySm,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: "#6B7280",
    fontSize: "14px",
    marginBottom: "16px",
    textAlign: "center" as const,
    fontWeight: 400,
  },
  iconCircle: {
    backgroundColor: "#F3E8FF",
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
} as const;

const ContactSupport: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12">
          <h2 style={styles.sectionHeading} className="text-3xl md:text-4xl">
            Still Need Help?
          </h2>
          <p style={styles.sectionDescription} className="text-base md:text-lg max-w-2xl mx-auto">
            If you didn&apos;t find what you&apos;re looking for, we&apos;re just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Chat Support */}
          <Card style={styles.contactCard} className="p-6 text-center">
            <div style={styles.iconCircle} className="mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-[#5636FF]" />
            </div>
            <h3 style={styles.contactTitle} className="mb-2">
              Live Chat Support
            </h3>
            <p style={styles.contactDescription}>
              Chat instantly with our support team.
            </p>
            <Button
              variant="primary"
              size="md"
              className="w-full rounded-lg !bg-[#5636FF] hover:!bg-[#4326D6] text-white"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              Start Chat
            </Button>
          </Card>

          {/* Email Support */}
          <Card style={styles.contactCard} className="p-6 text-center">
            <div style={styles.iconCircle} className="mx-auto mb-4">
              <Mail className="w-7 h-7 text-[#5636FF]" />
            </div>
            <h3 style={styles.contactTitle} className="mb-2">
              Email Support
            </h3>
            <p style={styles.contactDescription}>
              Drop us a mail at support@learnic.com
            </p>
            <Button
              variant="primary"
              size="md"
              className="w-full rounded-lg !bg-[#5636FF] hover:!bg-[#4326D6] text-white"
              onClick={() => window.location.href = "mailto:support@learnic.com"}
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              Send Email
            </Button>
          </Card>

          {/* Call Support */}
          <Card style={styles.contactCard} className="p-6 text-center">
            <div style={styles.iconCircle} className="mx-auto mb-4">
              <Phone className="w-7 h-7 text-[#5636FF]" />
            </div>
            <h3 style={styles.contactTitle} className="mb-2">
              Call Support
            </h3>
            <p style={styles.contactDescription}>
              Reach us at +91 800-123-4567 (Mon-Fri, 10AM-6PM)
            </p>
            <Button
              variant="primary"
              size="md"
              className="w-full rounded-lg !bg-[#5636FF] hover:!bg-[#4326D6] text-white"
              onClick={() => window.location.href = "tel:+918001234567"}
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              Request Callback
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;


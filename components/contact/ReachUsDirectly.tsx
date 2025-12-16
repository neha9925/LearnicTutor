"use client";

import React from "react";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
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
  cardTitle: {
    ...typography.card.titleMd,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: "#1F2937",
    marginBottom: "8px",
    fontSize: "18px",
    fontWeight: 700,
    textAlign: "center" as const,
  },
  cardDescription: {
    ...typography.card.bodySm,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: "#6B7280",
    fontSize: "14px",
    lineHeight: "1.5",
    textAlign: "center" as const,
    fontWeight: 400,
  },
  iconCircle: {
    backgroundColor: "#5636FF",
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
} as const;

const ReachUsDirectly: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="text-center mb-12">
          <h2 style={styles.sectionHeading} className="text-3xl md:text-4xl">
            Reach Us Directly
          </h2>
          <p style={styles.sectionDescription} className="text-base md:text-lg max-w-2xl mx-auto">
            Choose the best way to connect with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Office Address */}
          <Card className="p-6 text-center hover:shadow-xl transition-shadow rounded-xl">
            <div style={styles.iconCircle} className="mx-auto mb-4">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 style={styles.cardTitle} className="text-lg font-bold mb-3">
              Office Address
            </h3>
            <div style={styles.cardDescription} className="space-y-1">
              <p>Learnic HQ, 42 Knowledge Park</p>
              <p>Bengaluru, India</p>
              <p className="mt-2">Mon-Fri, 10 AM - 6 PM</p>
            </div>
          </Card>

          {/* Email Support */}
          <Card className="p-6 text-center hover:shadow-xl transition-shadow rounded-xl">
            <div style={styles.iconCircle} className="mx-auto mb-4">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 style={styles.cardTitle} className="text-lg font-bold mb-3">
              Email Support
            </h3>
            <div style={styles.cardDescription} className="space-y-1">
              <p>support@learnic.com</p>
              <p className="mt-2">We reply within 24 hours</p>
            </div>
          </Card>

          {/* Call Us */}
          <Card className="p-6 text-center hover:shadow-xl transition-shadow rounded-xl">
            <div style={styles.iconCircle} className="mx-auto mb-4">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 style={styles.cardTitle} className="text-lg font-bold mb-3">
              Call Us
            </h3>
            <div style={styles.cardDescription} className="space-y-1">
              <p>+91 800-123-4567</p>
              <p className="mt-2">Available Mon-Fri, 10 AM - 6 PM</p>
            </div>
          </Card>

          {/* Live Chat */}
          <Card className="p-6 text-center hover:shadow-xl transition-shadow flex flex-col rounded-xl">
            <div style={styles.iconCircle} className="mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 style={styles.cardTitle} className="text-lg font-bold mb-3">
              Live Chat
            </h3>
            <p style={styles.cardDescription} className="mb-4 flex-1">
              Chat with us instantly through our website or app
            </p>
            <Button
              variant="primary"
              size="sm"
              className="rounded-lg !bg-[#5636FF] hover:!bg-[#4326D6] focus:ring-[#5636FF] w-full text-white"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              Start Chat
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReachUsDirectly;


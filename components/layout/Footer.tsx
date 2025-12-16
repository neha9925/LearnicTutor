"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_HIGHLIGHT_STATS,
  FOOTER_LEGAL_LINKS,
  FOOTER_QUICK_LINKS,
  FOOTER_SOCIAL_LINKS,
} from "@/data/footer";
import { colors, gradients, shadows, typography } from "@/theme";

const styles = {
  footer: {
    backgroundColor: colors.background.page,
  },
  description: typography.footer.body,
  heading: typography.footer.heading,
  socialButton: {
    backgroundColor: colors.neutral.gray200,
    color: colors.text.secondary,
  },
  link: typography.footer.body,
  statValue: (color: string) =>
    ({
      ...typography.footer.heading,
      fontSize: "32px",
      color,
    }) as const,
  statLabel: typography.footer.body,
  legalText: typography.footer.legal,
  appBadge: {
    maxWidth: "145px",
  },
  borderHighlight: {
    borderColor: colors.border.gradientPurple,
  },
  footerBottom: {
    borderColor: colors.border.gradientPurple,
  },
  brandHighlight: {
    color: colors.text.highlight,
  },
} as const;

const Footer: React.FC = React.memo(() => {
  return (
    <footer style={styles.footer}>
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/logos/Logo.svg"
                  alt="Learnic Logo"
                  width={119}
                  height={47}
                  className="h-auto"
                  style={{ width: "auto" }}
                />
              </Link>
            </div>
            <p
              className="mb-6"
              style={styles.description}
            >
              Empowering learners worldwide with cutting-edge online education and personalized learning experiences.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              {FOOTER_SOCIAL_LINKS.map((social) => (
                <button
                  key={social.name}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  style={styles.socialButton}
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h3
              className="mb-4"
              style={styles.heading}
            >
              Company
            </h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              {FOOTER_COMPANY_LINKS.map((link) => {
                // Handle "About Us" to link to /about instead of /about-us
                const href = link === "About Us" 
                  ? "/about" 
                  : `/${link.toLowerCase().replace(/\s+/g, '-')}`;
                
                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className="hover:text-primary-600 transition-colors"
                      style={styles.link}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h3
              className="mb-4"
              style={styles.heading}
            >
              Quick Links
            </h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              {FOOTER_QUICK_LINKS.map((link) => {
                // Handle custom links
                let href: string;
                if (link === "Help and Support") {
                  href = "/help-center";
                } else if (link === "Meet our tutors") {
                  href = "/tutors";
                } else if (link === "Become a tutor") {
                  href = "/become-a-teacher";
                } else if (link === "Become a coordinator") {
                  href = "/become-a-coordinator";
                } else {
                  href = `/${link.toLowerCase().replace(/\s+/g, '-')}`;
                }
                
                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className="hover:text-primary-600 transition-colors"
                      style={{
                        ...styles.link,
                      }}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h3
              className="mb-4"
              style={styles.heading}
            >
              Get The App
            </h3>
            <div className="space-y-3 w-full flex flex-col items-center md:items-start">
              <Link
                href="#"
                className="block w-full hover:opacity-90 transition-opacity md:w-auto"
              >
                <Image
                  src="/logos/AppStoreLogo.svg"
                  alt="Download on the App Store"
                  width={145}
                  height={49}
                  className="w-full h-auto mx-auto md:mx-0"
                  style={styles.appBadge}
                />
              </Link>

              <Link
                href="#"
                className="block w-full hover:opacity-90 transition-opacity md:w-auto"
              >
                <Image
                  src="/logos/GooglePlayLogo.svg"
                  alt="GET IT ON Google Play"
                  width={145}
                  height={43}
                  className="w-full h-auto mx-auto md:mx-0"
                  style={styles.appBadge}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="border-t border-b"
        style={styles.borderHighlight}
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FOOTER_HIGHLIGHT_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="mb-2"
                  style={styles.statValue(stat.color)}
                >
                  {stat.value}
                </div>
                <div
                  style={styles.statLabel}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="border-t"
        style={styles.footerBottom}
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div
              style={styles.legalText}
            >
              © 2025{" "}
              <span style={styles.brandHighlight}>Learnic</span>
              . All rights reserved.
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-primary-600 transition-colors"
                  style={styles.link}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;

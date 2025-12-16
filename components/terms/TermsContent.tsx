"use client";

import React from "react";
import { Check, User, Lock, Eye, GraduationCap, CreditCard, DollarSign, Lightbulb, X, AlertTriangle, FileText, MapPin, Phone, Mail, Sparkles, RotateCcw, Handshake } from "lucide-react";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  USER_RESPONSIBILITIES,
  PAYMENT_POLICY_ITEMS,
  REFUND_POLICY_ITEMS,
  CONTENT_RESTRICTIONS,
  MODIFICATION_ITEMS,
  UPDATE_HISTORY_ITEMS,
} from "@/data/termsConditions";
import { colors, typography } from "@/theme";

const iconMap: Record<string, React.ElementType> = {
  user: User,
  lock: Lock,
  eye: Eye,
  check: Check,
  x: X,
  alert: AlertTriangle,
};

const styles = {
  sectionHeading: {
    ...typography.section.headingLg,
    fontSize: "28px",
    marginBottom: "24px",
    textAlign: "left" as const,
  },
  paragraph: {
    ...typography.card.bodyMd,
    color: colors.text.secondary,
    lineHeight: "1.8",
    marginBottom: "24px",
  },
  bulletPoint: {
    ...typography.card.bodySm,
    color: colors.text.secondary,
  },
} as const;

const TermsContent: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Introduction */}
      <section id="introduction">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 
            className="text-3xl font-bold mb-6 text-gray-900"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Introduction
          </h2>
          <p 
            className="text-base text-gray-700 leading-relaxed"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Welcome to Learnic! By using our website, you agree to comply with the following terms and conditions.
            Please read them carefully before accessing or purchasing any service. These terms govern your access
            to and use of the Learnic platform, including all content, features, and services offered through our website
            and mobile applications.
          </p>
        </div>
      </section>

      {/* Acceptance of Terms */}
      <section id="acceptance-of-terms">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100 relative">
          {/* Vertical purple accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5636FF] rounded-l-lg"></div>
          
          <div className="pl-6">
            <h2 
              className="text-3xl font-bold mb-6 text-gray-900"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
              }}
            >
              Acceptance of Terms
            </h2>
            <p 
              className="text-base text-gray-700 leading-relaxed mb-6"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
              }}
            >
              By creating an account or using Learnic&apos;s services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
            </p>
            
            {/* Checkbox with light purple background */}
            <div className="bg-purple-50 rounded-lg p-4 -mx-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="w-5 h-5 rounded border-2 border-[#5636FF] text-[#5636FF] focus:ring-[#5636FF] focus:ring-2 cursor-pointer"
                  style={{
                    accentColor: '#5636FF',
                  }}
                />
                <span 
                  className="text-base text-gray-700"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  I have read and agree to the Terms and Conditions
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* User Accounts & Responsibilities */}
      <section id="user-accounts-&-responsibilities">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 
            className="text-3xl font-bold mb-6 text-gray-900"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            User Accounts & Responsibilities
          </h2>
          <div className="space-y-6">
            {USER_RESPONSIBILITIES.map((item) => {
              const IconComponent = iconMap[item.icon] || User;
              return (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-[#5636FF]" />
                  </div>
                  <div>
                    <h3 
                      className="font-bold text-lg mb-2 text-gray-900"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-base text-gray-700 leading-relaxed"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Enrollment & Access */}
      <section id="course-enrollment-&-access">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 
            className="text-3xl font-bold mb-6 text-gray-900"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Course Enrollment & Access
          </h2>
          <p 
            className="text-base text-gray-700 leading-relaxed mb-6"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Enrolled users receive non-transferable access to purchased courses, live classes, and test series. Sharing login credentials is strictly prohibited.
          </p>
          
          {/* Digital Course Pass Section */}
          <div className="bg-purple-50 rounded-lg p-4 md:p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Sparkles className="w-6 h-6 text-[#5636FF]" />
              </div>
              <div>
                <h3 
                  className="font-bold text-lg mb-1 text-gray-900"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  Digital Course Pass
                </h3>
                <p 
                  className="text-base text-gray-700 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  Your personal access to premium learning content
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payments & Refunds */}
      <section id="payments-&-refunds">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 
            className="text-3xl font-bold mb-6 text-gray-900"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Payments & Refunds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Payment Policy */}
            <div className="bg-purple-50 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#5636FF] flex items-center justify-center mb-3">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 
                  className="text-xl font-bold text-gray-900"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  Payment Policy
                </h3>
              </div>
              <ul className="space-y-3">
                {PAYMENT_POLICY_ITEMS.map((item) => (
                  <li key={item.id} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#5636FF] flex-shrink-0 mt-0.5" />
                    <p 
                      className="text-base text-gray-700 leading-relaxed"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      }}
                    >
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Refund Policy */}
            <div className="bg-purple-50 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#5636FF] flex items-center justify-center mb-3">
                  <RotateCcw className="w-6 h-6 text-white" />
                </div>
                <h3 
                  className="text-xl font-bold text-gray-900"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  Refund Policy
                </h3>
              </div>
              <ul className="space-y-3">
                {REFUND_POLICY_ITEMS.map((item) => {
                  const IconComponent = item.icon === "x" ? X : Check;
                  const iconColor = item.icon === "x" ? "text-red-600" : "text-[#5636FF]";
                  return (
                    <li key={item.id} className="flex items-start gap-2">
                      <IconComponent className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
                      <p 
                        className="text-base text-gray-700 leading-relaxed"
                        style={{
                          fontFamily: "var(--font-poppins), Poppins, sans-serif",
                        }}
                      >
                        {item.text}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section id="intellectual-property">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 
            className="text-3xl font-bold mb-6 text-gray-900"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Intellectual Property
          </h2>
          <p 
            className="text-base text-gray-700 leading-relaxed mb-6"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            All content on Learnic, including text, graphics, videos, and software, is owned by Learnic or its content partners and protected by intellectual property laws.
          </p>
          
          {/* Important Notice Box */}
          <div className="bg-blue-50 rounded-lg p-5 relative">
            {/* Vertical blue accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-lg"></div>
            
            <div className="pl-6 flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 
                  className="font-bold text-lg mb-2 text-gray-900"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  Important Notice
                </h3>
                <p 
                  className="text-base text-gray-700 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  Reproduction or redistribution without permission is strictly prohibited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Usage & Restrictions */}
      <section id="content-usage-&-restrictions">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 
            className="text-3xl font-bold mb-6 text-gray-900"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Content Usage & Restrictions
          </h2>
          <div className="space-y-6">
            {CONTENT_RESTRICTIONS.map((item) => {
              const IconComponent = iconMap[item.icon] || Check;
              const isAllowed = item.icon === "check";
              return (
                <div key={item.id} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${isAllowed ? "bg-green-100" : "bg-red-100"}`}>
                    <IconComponent className={`w-5 h-5 ${isAllowed ? "text-green-600" : "text-red-600"}`} />
                  </div>
                  <div>
                    <h3 
                      className="font-bold text-lg mb-2 text-gray-900"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-base text-gray-700 leading-relaxed"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Limitations of Liability */}
      <section id="limitations-of-liability">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 
            className="text-3xl font-bold mb-6 text-gray-900"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Limitation of Liability
          </h2>
          <p 
            className="text-base text-gray-700 leading-relaxed mb-6"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Learnic shall not be liable for any indirect or incidental damages arising from the use of our services.
          </p>
          
          {/* Legal Disclaimer Box */}
          <div className="bg-yellow-50 rounded-lg p-5 relative">
            {/* Vertical yellow accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 rounded-l-lg"></div>
            
            <div className="pl-6 flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 
                  className="font-bold text-lg mb-2 text-gray-900"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  Legal Disclaimer
                </h3>
                <p 
                  className="text-base text-gray-700 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  This limitation applies to the fullest extent permitted by applicable law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Termination Policy */}
      <section id="termination-policy">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 
            className="text-3xl font-bold mb-6 text-gray-900"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Termination Policy
          </h2>
          <p 
            className="text-base text-gray-700 leading-relaxed"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Learnic reserves the right to suspend or terminate accounts found violating these terms without prior notice. We maintain the right to take appropriate action to protect our platform, users, and content integrity.
          </p>
        </div>
      </section>

      {/* Modifications to Terms */}
      <section id="modifications-to-terms">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 
            className="text-3xl font-bold mb-6 text-gray-900"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Modifications to Terms
          </h2>
          <p 
            className="text-base text-gray-700 leading-relaxed mb-6"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Learnic may update these Terms periodically. We encourage users to review this page regularly for changes.
          </p>
          
          {/* Update History Section */}
          <div className="bg-purple-50 rounded-lg p-5 md:p-6">
            <h3 
              className="font-bold text-lg mb-4 text-gray-900"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
              }}
            >
              Update History
            </h3>
            <ul className="space-y-3">
              {UPDATE_HISTORY_ITEMS.map((item) => (
                <li key={item.id} className="flex items-start gap-2">
                  <span className={`mt-1 ${item.isCurrent ? "text-[#5636FF]" : "text-gray-400"}`}>•</span>
                  <p 
                    className={`text-base leading-relaxed ${item.isCurrent ? "text-gray-900" : "text-gray-500"}`}
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    }}
                  >
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section id="governing-law">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
          <h2 
            className="text-3xl font-bold mb-6 text-gray-900"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Governing Law
          </h2>
          <p 
            className="text-base text-gray-700 leading-relaxed mb-4"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
          </p>
          <p 
            className="text-base text-gray-700 leading-relaxed"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Bengaluru, India.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact-information">
        <div 
          className="rounded-lg p-8 md:p-10 text-white shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #572EEE 0%, #7E22CE 70.71%)',
          }}
        >
          <h2 
            className="text-3xl font-bold mb-4 text-white"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Contact Information
          </h2>
          <p 
            className="text-white/90 mb-8 text-base"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
          >
            Have questions about our terms? We&apos;re here to help. Reach out to our legal team for any clarifications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Email Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#572EEE] flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="font-semibold mb-2 text-gray-900"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                }}
              >
                Email
              </h3>
              <a 
                href="mailto:legal@learnic.com" 
                className="text-gray-700 text-sm hover:text-[#572EEE] transition-colors"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                }}
              >
                legal@learnic.com
              </a>
            </div>
            
            {/* Phone Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#572EEE] flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="font-semibold mb-2 text-gray-900"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                }}
              >
                Phone
              </h3>
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="text-gray-700 text-sm hover:text-[#572EEE] transition-colors"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                }}
              >
                +91-XXXX-XXXXXX
              </a>
            </div>
            
            {/* Address Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#572EEE] flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="font-semibold mb-2 text-gray-900"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                }}
              >
                Address
              </h3>
              <p 
                className="text-gray-700 text-sm"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                }}
              >
                Learnic HQ, Bengaluru, India
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              className="rounded-lg !bg-white hover:!bg-gray-100 !text-[#572EEE] focus:ring-white/50 shadow-sm"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              Contact Support
            </Button>
          </div>
        </div>

        {/* Acknowledgement */}
        <div className="bg-white rounded-lg p-8 md:p-10 mt-8 border-2 border-[#572EEE] shadow-sm">
          <div className="flex flex-col items-center text-center">
            {/* Handshake Icon */}
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <Handshake className="w-8 h-8 text-[#572EEE]" />
            </div>
            
            {/* Title */}
            <h2 
              className="text-3xl font-bold mb-4 text-gray-900"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
              }}
            >
              Acknowledgment
            </h2>
            
            {/* Descriptive Text */}
            <p 
              className="text-base text-gray-700 leading-relaxed mb-8 max-w-2xl"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
              }}
            >
              By continuing to use Learnic, you acknowledge that you have read and agree to these Terms and Conditions.
            </p>
            
            {/* Button */}
            <Button
              variant="primary"
              size="lg"
              className="rounded-lg !bg-[#572EEE] hover:!bg-[#7E22CE] !text-white focus:ring-[#572EEE] px-8"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              I Agree
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsContent;


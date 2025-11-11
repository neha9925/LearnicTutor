"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";
import Modal from "@/components/ui/Modal";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Calendar,
  Clock,
} from "lucide-react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { liveClasses } from "@/data/liveClasses";
import {
  CHECKOUT_BANK_OPTIONS,
  CHECKOUT_INCLUSIONS,
  CHECKOUT_PAYMENT_METHODS,
} from "@/data/checkout";
import {
  baseSelectStyles,
  colors,
  gradients,
  radii,
  shadows,
  typography,
} from "@/theme";

const styles = {
  page: {
    backgroundColor: colors.background.page,
  },
  heading: {
    ...typography.section.headingLg,
    fontSize: "24px",
    lineHeight: "32px",
    color: colors.text.primary,
  },
  subheading: {
    ...typography.card.bodySm,
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "24px",
    color: colors.text.secondary,
  },
  orderInfo: {
    ...typography.card.bodySm,
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "24px",
    color: colors.text.secondary,
  },
  sectionLabel: {
    ...typography.card.titleMd,
    color: colors.text.primary,
  },
  sectionTitle: typography.card.titleMd,
  listItem: {
    ...typography.card.bodySm,
    color: colors.text.secondary,
  },
  priceBreakdownText: {
    ...typography.card.bodySm,
    fontSize: "14px",
    color: colors.text.secondary,
  },
  primaryActionButton: {
    ...typography.button.primary,
    background: gradients.buttonPrimary,
    height: "62px",
    borderRadius: radii.md,
    color: colors.text.light,
  },
  paymentLabel: {
    ...typography.labels.md,
    color: colors.text.primary,
    textAlign: "left" as const,
  },
  paymentInput: {
    fontFamily: "var(--font-poppins), sans-serif",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
    color: colors.text.primary,
    verticalAlign: "middle",
  } as const,
  checkboxLabel: {
    ...typography.labels.md,
    color: colors.text.secondary,
  },
  upiNote: {
    ...typography.card.bodySm,
    fontSize: "12px",
    color: colors.text.tertiary,
  },
  bankSelectControl: {
    ...baseSelectStyles,
    "& .MuiOutlinedInput-root": {
      ...baseSelectStyles["& .MuiOutlinedInput-root"],
      backgroundColor: colors.neutral.white,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.border.light,
    },
  },
  bankMenuItem: {
    fontFamily: "var(--font-poppins), sans-serif",
    color: colors.text.secondary,
  },
  bankSelectInput: {
    fontFamily: "var(--font-poppins), sans-serif",
    fontSize: "15px",
    color: colors.text.primary,
  },
  paymentMethodButton: (isActive: boolean) =>
    ({
      borderColor: isActive ? colors.brand.primarySoft : "rgba(148, 163, 184, 0.35)",
      backgroundColor: isActive ? colors.brand.primaryTint : colors.neutral.white,
      boxShadow: isActive ? shadows.modal : "none",
      ...typography.card.bodySm,
      fontWeight: 500,
    }) as const,
  paymentMethodIcon: (isActive: boolean) =>
    ({
      backgroundColor: isActive ? colors.brand.primarySoft : colors.brand.primaryTint,
      color: isActive ? colors.text.light : colors.brand.primarySoft,
    }) as const,
  orderCard: {
    backgroundColor: colors.neutral.white,
    borderRadius: radii.xxl,
    border: `1px solid ${colors.border.light}`,
  },
  badgeIcon: {
    backgroundColor: colors.brand.primarySoft,
    color: colors.text.light,
  },
  successBadge: {
    backgroundColor: colors.brand.primaryTint,
  },
  secureText: {
    ...typography.card.bodySm,
    fontSize: "12px",
    color: colors.text.tertiary,
    textAlign: "center" as const,
  },
  modalHeadline: {
    ...typography.card.titleMd,
    color: colors.text.primary,
  },
  modalBody: {
    ...typography.card.bodySm,
    color: colors.text.tertiary,
  },
  modalList: {
    ...typography.card.bodySm,
    color: colors.text.secondary,
  },
  modalActionButton: {
    ...typography.button.primary,
    background: gradients.buttonPrimary,
    height: "48px",
    borderRadius: radii.md,
    color: colors.text.light,
  },
} as const;

const CheckoutPage: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("card");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedBank, setSelectedBank] = useState<string>("");

  const paymentMethods = CHECKOUT_PAYMENT_METHODS;
  const inclusions = CHECKOUT_INCLUSIONS;
  const bankOptions = CHECKOUT_BANK_OPTIONS;

  useEffect(() => {
    if (selectedMethod !== "netbanking") {
      setSelectedBank("");
    }
  }, [selectedMethod]);
  const course = useMemo(() => liveClasses[0], []);
  const primaryTiming = course.timings[0];
  const summarySchedule = [
    course.startDate,
    primaryTiming?.timeRange ?? primaryTiming?.label,
  ]
    .filter(Boolean)
    .join(" – ");
  const durationLabel = course.durationSummary ?? course.duration;

  const renderPaymentFields = () => {
    if (selectedMethod === "card") {
      return (
        <>
          <Input
            label="Cardholder Name"
            placeholder="Enter cardholder name"
            labelStyle={styles.paymentLabel}
            style={styles.paymentInput}
          />
          <Input
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            labelStyle={styles.paymentLabel}
            style={styles.paymentInput}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Expiry Date"
              placeholder="MM/YY"
              labelStyle={styles.paymentLabel}
              style={styles.paymentInput}
            />
            <Input
              label="CVV"
              placeholder="123"
              labelStyle={styles.paymentLabel}
              style={styles.paymentInput}
            />
          </div>
          <Checkbox
            label="Save this payment method for future classes"
            labelStyle={styles.checkboxLabel}
          />
        </>
      );
    }

    if (selectedMethod === "upi") {
      return (
        <>
          <Input
            label="UPI ID"
            placeholder="username@bank"
            labelStyle={styles.paymentLabel}
            style={styles.paymentInput}
          />
          <p className="text-xs text-gray-500" style={styles.upiNote}>
            We&apos;ll redirect you to your UPI app to approve the payment.
          </p>
          <Checkbox
            label="Save this UPI ID for future classes"
            labelStyle={styles.checkboxLabel}
          />
        </>
      );
    }

    return (
      <>
        <FormControl
          fullWidth
          sx={styles.bankSelectControl}
        >
          <InputLabel id="checkout-select-bank-label">Select Bank</InputLabel>
          <Select
            labelId="checkout-select-bank-label"
            id="checkout-select-bank"
            value={selectedBank}
            label="Select Bank"
            onChange={(event: SelectChangeEvent<string>) => setSelectedBank(event.target.value)}
            sx={styles.bankSelectInput}
          >
            {bankOptions.map((bank) => (
              <MenuItem
                key={bank}
                value={bank}
                sx={styles.bankMenuItem}
              >
                {bank}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <p className="text-xs text-gray-500" style={styles.upiNote}>
          You will be securely redirected to your bank to complete the payment.
        </p>
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col" style={styles.page}>
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12">
              <div className="bg-white border border-gray-100 rounded-[28px] shadow-sm p-6 md:p-8 space-y-6">
                <div className="space-y-4">
                  <h2
                    className="text-2xl font-semibold text-gray-900"
                    style={styles.heading}
                  >
                    Order Summary
                  </h2>

                  <div className="rounded-2xl border border-[#E5E7FF] bg-white p-5 flex gap-4 items-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#6B47ED] flex items-center justify-center shadow-sm">
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900" style={styles.sectionLabel}>
                        {course.title}
                      </p>
                      <p className="text-gray-700" style={styles.orderInfo}>
                        {summarySchedule ? `Starts ${summarySchedule}` : "Flexible schedule"}
                      </p>
                      <p className="text-gray-700" style={styles.orderInfo}>
                        Tutor: {course.instructor.name}
                      </p>
                      <p className="text-gray-700" style={styles.orderInfo}>
                        Duration: {durationLabel}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F3F0FF] rounded-2xl p-6 space-y-5">
                  <h3 className="font-semibold text-gray-900" style={styles.sectionLabel}>
                    What You Get
                  </h3>
                  <ul className="space-y-3">
                    {inclusions.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li
                          key={item.label}
                          className="flex items-center gap-3 text-sm text-gray-700"
                          style={styles.listItem}
                        >
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                            <Icon className="w-5 h-5 text-[#6B47ED]" />
                          </div>
                          {item.label}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900" style={styles.sectionLabel}>
                    Price Breakdown
                  </h3>
                  <div className="flex items-center justify-between text-sm" style={styles.priceBreakdownText}>
                    <span className="text-gray-600">Class Price</span>
                    <span className="font-semibold text-gray-900">{`₹${course.price.toLocaleString()}`}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Input
                      placeholder="Discount Code"
                      className="flex-1 border-[#D4CCFF] focus:ring-[#6B47ED] focus:border-[#6B47ED]"
                    />
                    <Button
                      className="sm:w-auto bg-[#6B47ED] hover:bg-[#5B3DD4] text-white px-6"
                      style={typography.button.primary}
                    >
                      Apply
                    </Button>
                  </div>
                  <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-base" style={styles.orderInfo}>
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="text-[#6B47ED] font-bold text-lg">{`₹${course.price.toLocaleString()}`}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-[28px] shadow-sm p-6 md:p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900" style={styles.heading}>
                  Payment & Checkout
                </h2>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-900" style={styles.sectionLabel}>
                    Choose Payment Method
                  </p>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      const isActive = method.id === selectedMethod;
                      return (
                        <button
                          type="button"
                          key={method.id}
                          onClick={() => setSelectedMethod(method.id)}
                          className="w-full flex items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all"
                        style={styles.paymentMethodButton(isActive)}
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={styles.paymentMethodIcon(isActive)}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{method.label}</p>
                            <p className="text-xs text-gray-500">{method.description}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <form key={selectedMethod} className="space-y-4">
                  {renderPaymentFields()}
                </form>

                <div className="space-y-4 pt-2">
                  <Button
                    type="button"
                    className="w-full md:w-[563.12px] py-3 rounded-full text-white"
                    style={styles.primaryActionButton}
                    onClick={() => setShowSuccessModal(true)}
                  >
                    Complete Purchase – {`₹${course.price.toLocaleString()}`}
                  </Button>
                  <div className="flex flex-col items-center gap-3 text-xs text-gray-500" style={styles.secureText}>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 rounded border text-[11px]">VISA</span>
                      <span className="px-2 py-1 rounded border text-[11px]">Mastercard</span>
                      <span className="px-2 py-1 rounded border text-[11px]">RuPay</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: colors.utility.success }}>
                      <ShieldCheck className="w-4 h-4" />
                      100% Secure Payment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        size="sm"
        showCloseButton={false}
      >
        <div className="space-y-6 text-center">
          <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center" style={styles.successBadge}>
            <CheckCircle2 className="w-8 h-8" style={{ color: colors.brand.primarySoft }} />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-[#1F2937]" style={styles.modalHeadline}>
              Purchase Successful!
            </h3>
            <p className="text-sm text-gray-500" style={styles.modalBody}>
              You&apos;re enrolled in the live class.
            </p>
          </div>

          <div className="border border-[#E5E7FF] rounded-2xl p-5 text-left space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-900" style={styles.sectionLabel}>
                {course.title}
              </p>
            </div>
            <div className="space-y-3 text-sm" style={styles.modalList}>
              <div className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-4 h-4" style={{ color: colors.brand.primarySoft }} />
                {course.instructor.name}
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-4 h-4" style={{ color: colors.brand.primarySoft }} />
                Starts: {course.startDate}
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-4 h-4" style={{ color: colors.brand.primarySoft }} />
                7:00 AM – 8:00 AM IST
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <BookOpen className="w-4 h-4" style={{ color: colors.brand.primarySoft }} />
                1-hour interactive session
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500" style={styles.upiNote}>
            Don&apos;t forget to join on time! A reminder will be sent.
          </p>

          <Link href="/dashboard/classes" className="block w-full md:w-[384px] mx-auto">
            <Button
              type="button"
              className="w-full py-3 rounded-full text-white"
              style={styles.modalActionButton}
              onClick={() => setShowSuccessModal(false)}
            >
              Go to My Classes
            </Button>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;

"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, DollarSign, MessageCircle, AlertTriangle, Star } from "lucide-react";
import { colors, gradients, typography, FONT_FAMILY } from "@/theme";

const notifications = [
  {
    id: 1,
    icon: Calendar,
    iconBg: "#6B47ED",
    title: "New Class Scheduled",
    description: "Mathematics session with Priya Sharma scheduled for tomorrow at 4:00 PM",
    timestamp: "2 hours ago",
    hasViewButton: false,
    isNew: true,
    cardBg: "#F3F0FF",
  },
  {
    id: 2,
    icon: DollarSign,
    iconBg: "#10B981",
    title: "Payment Received",
    description: "₹2,500 payment received from Rahul Kumar for Physics classes",
    timestamp: "Yesterday 5:30 PM",
    hasViewButton: false,
    isNew: false,
    cardBg: "#FFFFFF",
  },
  {
    id: 3,
    icon: MessageCircle,
    iconBg: "#3B82F6",
    title: "New Message from Student",
    description: "Ananya Gupta has a question about today's chemistry assignment",
    timestamp: "Yesterday 2:15 PM",
    hasViewButton: false,
    isNew: false,
    cardBg: "#FFFFFF",
  },
  {
    id: 4,
    icon: AlertTriangle,
    iconBg: "#EF4444",
    title: "Class Cancellation Request",
    description: "Vikash Singh requested to cancel tomorrow's English session",
    timestamp: "2 days ago",
    hasViewButton: false,
    isNew: false,
    cardBg: "#FFFFFF",
  },
  {
    id: 5,
    icon: Star,
    iconBg: "#9333EA",
    title: "New Review Received",
    description: "Meera Patel left a 5-star review for your Biology classes",
    timestamp: "3 days ago",
    hasViewButton: false,
    isNew: false,
    cardBg: "#FFFFFF",
  },
];

const NotificationsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Purple Gradient */}
        <div
          className="pt-20 pb-10 md:pt-24 md:pb-12"
          style={{
            background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
          }}
        >
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12">
            <h1
              className="text-white font-bold text-center"
              style={{
                fontSize: "40px",
                lineHeight: "48px",
                fontFamily: FONT_FAMILY,
                fontWeight: 700,
              }}
            >
              Notifications
            </h1>
          </div>
        </div>

        {/* Notifications List */}
        <div className="py-8 md:py-12 bg-white">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-4xl">
            <div className="space-y-4">
              {notifications.map((notification) => {
                const Icon = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className="rounded-lg shadow-sm border border-gray-200 p-5 md:p-6 flex items-start gap-4 hover:shadow-md transition-shadow relative"
                    style={{
                      backgroundColor: notification.cardBg,
                    }}
                  >
                    {/* New Badge */}
                    {notification.isNew && (
                      <div
                        className="absolute top-4 right-4 px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: colors.brand.primarySoft,
                          fontSize: "12px",
                          lineHeight: "16px",
                          fontFamily: FONT_FAMILY,
                          fontWeight: 500,
                          color: "#FFFFFF",
                        }}
                      >
                        New
                      </div>
                    )}

                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${notification.iconBg}20`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{
                          color: notification.iconBg,
                        }}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-semibold mb-2"
                        style={{
                          fontSize: "16px",
                          lineHeight: "22px",
                          fontFamily: FONT_FAMILY,
                          color: colors.text.primary,
                          fontWeight: 600,
                        }}
                      >
                        {notification.title}
                      </h3>
                      <p
                        className="mb-2"
                        style={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          fontFamily: FONT_FAMILY,
                          color: colors.text.secondary,
                          fontWeight: 400,
                        }}
                      >
                        {notification.description}
                      </p>
                      <p
                        className="text-sm"
                        style={{
                          fontSize: "12px",
                          lineHeight: "16px",
                          fontFamily: FONT_FAMILY,
                          color: colors.text.tertiary,
                          fontWeight: 400,
                        }}
                      >
                        {notification.timestamp}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotificationsPage;


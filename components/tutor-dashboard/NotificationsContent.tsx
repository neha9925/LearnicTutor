"use client";

import React from "react";
import {
  Calendar,
  DollarSign,
  MessageCircle,
  AlertTriangle,
  Star,
} from "lucide-react";
import { FONT_FAMILY, colors } from "@/theme";

interface Notification {
  id: string;
  type: "class" | "payment" | "message" | "cancellation" | "review";
  title: string;
  description: string;
  timestamp: string;
  isNew?: boolean;
  backgroundColor?: string;
}

const NotificationsContent: React.FC = () => {
  const notifications: Notification[] = [
    {
      id: "1",
      type: "class",
      title: "New Class Scheduled",
      description: "Mathematics session with Priya Sharma scheduled for tomorrow at 4:00 PM",
      timestamp: "2 hours ago",
      isNew: true,
      backgroundColor: "#F3E8FF",
    },
    {
      id: "2",
      type: "payment",
      title: "Payment Received",
      description: "₹2,500 payment received from Rahul Kumar for Physics classes",
      timestamp: "Yesterday 5:30 PM",
    },
    {
      id: "3",
      type: "message",
      title: "New Message from Student",
      description: "Ananya Gupta has a question about today's chemistry assignment",
      timestamp: "Yesterday 2:15 PM",
    },
    {
      id: "4",
      type: "cancellation",
      title: "Class Cancellation Request",
      description: "Vikash Singh requested to cancel tomorrow's English session",
      timestamp: "2 days ago",
    },
    {
      id: "5",
      type: "review",
      title: "New Review Received",
      description: "Meera Patel left a 5-star review for your Biology classes",
      timestamp: "3 days ago",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "class":
        return <Calendar size={24} style={{ color: "#FFFFFF" }} />;
      case "payment":
        return <DollarSign size={24} style={{ color: "#FFFFFF" }} />;
      case "message":
        return <MessageCircle size={24} style={{ color: "#FFFFFF" }} />;
      case "cancellation":
        return <AlertTriangle size={24} style={{ color: "#FFFFFF" }} />;
      case "review":
        return <Star size={24} style={{ color: "#FFFFFF" }} />;
      default:
        return null;
    }
  };

  const getIconBackground = (type: string) => {
    switch (type) {
      case "class":
        return colors.brand.primarySoft; // Purple
      case "payment":
        return "#10B981"; // Green
      case "message":
        return "#3B82F6"; // Blue
      case "cancellation":
        return "#EF4444"; // Red
      case "review":
        return colors.brand.primarySoft; // Purple
      default:
        return "#6B7280";
    }
  };

  return (
    <div className="space-y-4" style={{ fontFamily: FONT_FAMILY }}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="rounded-lg border border-gray-200 p-4 flex items-start gap-4 relative"
          style={{
            backgroundColor: notification.backgroundColor || "#FFFFFF",
            fontFamily: FONT_FAMILY,
          }}
        >
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: getIconBackground(notification.type),
            }}
          >
            {getIcon(notification.type)}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3
                  className="text-base font-bold text-gray-900 mb-1"
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  {notification.title}
                </h3>
                <p
                  className="text-sm text-gray-600 mb-2"
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  {notification.description}
                </p>
                <p
                  className="text-xs text-gray-500"
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: "12px",
                  }}
                >
                  {notification.timestamp}
                </p>
              </div>
              {notification.isNew && (
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0"
                  style={{
                    backgroundColor: colors.brand.primarySoft,
                    color: "#FFFFFF",
                    fontFamily: FONT_FAMILY,
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  New
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsContent;


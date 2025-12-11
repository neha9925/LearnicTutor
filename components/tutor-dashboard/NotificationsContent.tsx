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
  const [activeNotificationId, setActiveNotificationId] = React.useState<string>("1");

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
    const iconProps = { size: 20, className: "md:w-6 md:h-6", style: { color: "#FFFFFF" } };
    switch (type) {
      case "class":
        return <Calendar {...iconProps} />;
      case "payment":
        return <DollarSign {...iconProps} />;
      case "message":
        return <MessageCircle {...iconProps} />;
      case "cancellation":
        return <AlertTriangle {...iconProps} />;
      case "review":
        return <Star {...iconProps} />;
      default:
        return <Calendar {...iconProps} />;
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

  const handleNotificationClick = (notification: Notification) => {
    // Set the clicked notification as active
    setActiveNotificationId(notification.id);
  };

  return (
    <div className="space-y-3 md:space-y-4" style={{ fontFamily: FONT_FAMILY }}>
      {notifications.map((notification) => {
        const isActive = activeNotificationId === notification.id;
        return (
          <div
            key={notification.id}
            onClick={() => handleNotificationClick(notification)}
            className="rounded-lg border border-gray-200 p-3 md:p-4 flex items-start gap-3 md:gap-4 relative cursor-pointer hover:shadow-md transition-all hover:border-purple-300 active:scale-[0.98]"
            style={{
              backgroundColor: isActive ? "#F3E8FF" : "#FFFFFF",
              fontFamily: FONT_FAMILY,
            }}
          >
          {/* Icon */}
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: getIconBackground(notification.type),
            }}
          >
            <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
              {getIcon(notification.type)}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 md:gap-4">
              <div className="flex-1 min-w-0">
                <h3
                  className="text-sm md:text-base font-bold text-gray-900 mb-1"
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  {notification.title}
                </h3>
                <p
                  className="text-xs md:text-sm text-gray-600 mb-2 leading-tight md:leading-normal"
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
                  className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-semibold flex-shrink-0"
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
        );
      })}
    </div>
  );
};

export default NotificationsContent;


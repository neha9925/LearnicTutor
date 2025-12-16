"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CoordinatorSidebar from "@/components/coordinator-dashboard/CoordinatorSidebar";
import { Search, Bell, User, Calendar, DollarSign, MessageCircle, AlertTriangle, Star, Menu, X } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
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

const CoordinatorNotificationsPage: React.FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
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
    <div
      className="flex min-h-screen"
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <CoordinatorSidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <div className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden w-full">
        {/* Header */}
        <div
          className="border-b border-gray-200 pl-20 md:pl-6 pr-4 md:pr-6 py-3 md:py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 flex-shrink-0 relative"
          style={{
            fontFamily: FONT_FAMILY,
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Mobile Menu Button */}
          {setIsMobileMenuOpen && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden absolute top-3 left-3 z-10 p-2 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
              style={{ fontFamily: FONT_FAMILY }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-gray-700" />
              ) : (
                <Menu size={20} className="text-gray-700" />
              )}
            </button>
          )}
          {/* Left Side - Title */}
          <div className="w-full md:w-auto flex-shrink-0">
            <h1
              className="text-lg md:text-2xl font-bold text-gray-900"
              style={{
                fontFamily: FONT_FAMILY,
              }}
            >
              Notifications
            </h1>
          </div>

          {/* Right Side - Search, Notifications, Profile */}
          <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative flex-1 md:flex-initial min-w-0">
              <Search
                size={16}
                className="absolute left-2.5 md:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search students, classes..."
                className="pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-64 text-xs md:text-sm"
                style={{
                  fontFamily: FONT_FAMILY,
                }}
              />
            </div>

            {/* Notifications */}
            <button className="relative p-1.5 md:p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
              <Bell size={18} className="md:w-5 md:h-5 text-gray-600" />
              <span className="absolute top-1 right-1 md:top-1.5 md:right-1.5 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Picture */}
            <button
              onClick={() => router.push("/coordinator-dashboard/profile")}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all cursor-pointer flex-shrink-0"
            >
              <ImageWithFallback
                src="/images/avatars/tutor-profile.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                fallback={
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <User size={18} className="md:w-5 md:h-5 text-gray-600" />
                  </div>
                }
              />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1">
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
                  {getIcon(notification.type)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 md:gap-4">
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-sm md:text-base font-bold text-gray-900 mb-1"
                        style={{
                          fontFamily: FONT_FAMILY,
                          fontWeight: 700,
                        }}
                      >
                        {notification.title}
                      </h3>
                      <p
                        className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2"
                        style={{
                          fontFamily: FONT_FAMILY,
                          lineHeight: "1.5",
                        }}
                      >
                        {notification.description}
                      </p>
                      <p
                        className="text-xs text-gray-500"
                        style={{
                          fontFamily: FONT_FAMILY,
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
        </div>
      </div>
    </div>
  );
};

export default CoordinatorNotificationsPage;


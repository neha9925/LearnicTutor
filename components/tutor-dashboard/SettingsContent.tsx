"use client";

import React, { useState } from "react";
import {
  Clock,
  User,
  FileText,
  HelpCircle,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import Input from "@/components/ui/Input";
import { FONT_FAMILY, colors } from "@/theme";

interface NotificationPreference {
  id: string;
  label: string;
  icon: React.ElementType;
  enabled: boolean;
}

const SettingsContent: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationPreference[]>([
    { id: "1", label: "Class Session Reminders", icon: Clock, enabled: true },
    { id: "2", label: "New Student Enquiry", icon: User, enabled: true },
    { id: "3", label: "Assignment Uploaded", icon: FileText, enabled: false },
    { id: "4", label: "Student Doubt Asked", icon: HelpCircle, enabled: true },
    { id: "5", label: "Payout Reminder", icon: DollarSign, enabled: true },
    { id: "6", label: "Weekly Progress Summary", icon: TrendingUp, enabled: false },
  ]);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const toggleNotification = (id: string) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
      )
    );
  };

  const calculatePasswordStrength = (password: string) => {
    if (password.length === 0) {
      setPasswordStrength("");
      return;
    }
    if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
      setPasswordStrength("Strong");
    } else if (password.length >= 6) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
    calculatePasswordStrength(e.target.value);
  };

  return (
    <div className="space-y-4 md:space-y-6" style={{ fontFamily: FONT_FAMILY }}>
      {/* Notification Preferences */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
        <h2
          className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Notification Preferences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {notifications.map((notif) => {
            const Icon = notif.icon;
            return (
              <div
                key={notif.id}
                className="flex items-center justify-between p-3 md:p-4 rounded-lg"
                style={{
                  backgroundColor: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                }}
              >
                <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                  <div
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: notif.enabled
                        ? colors.brand.primarySoft + "20"
                        : "#F3F4F6",
                    }}
                  >
                    <Icon
                      size={18}
                      className="md:w-5 md:h-5"
                      style={{
                        color: notif.enabled
                          ? colors.brand.primarySoft
                          : "#6B7280",
                      }}
                    />
                  </div>
                  <span
                    className="text-xs md:text-sm font-medium text-gray-900 truncate"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    {notif.label}
                  </span>
                </div>
                <button
                  onClick={() => toggleNotification(notif.id)}
                  className="relative w-11 h-6 md:w-12 md:h-6 rounded-full transition-colors flex-shrink-0 ml-2"
                  style={{
                    backgroundColor: notif.enabled
                      ? colors.brand.primarySoft
                      : "#D1D5DB",
                  }}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${
                      notif.enabled ? "translate-x-5 md:translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Security & Login */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
        <h2
          className="text-lg md:text-xl font-bold text-gray-900 mb-2"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Security & Login
        </h2>
        <h3
          className="text-sm md:text-base font-medium text-gray-900 mb-4 md:mb-6"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Change Password
        </h3>
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="flex-1 w-full md:w-auto">
            <Input
              label="Current Password"
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            {/* Desktop Submit Button */}
            <button
              className="hidden md:block px-6 py-3 rounded-lg text-sm font-semibold text-white mt-4"
              style={{
                backgroundColor: colors.brand.primarySoft,
                fontFamily: FONT_FAMILY,
              }}
            >
              Submit
            </button>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <Input
              label="New Password"
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            {passwordStrength && (
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{
                      width:
                        passwordStrength === "Strong"
                          ? "100%"
                          : passwordStrength === "Medium"
                          ? "66%"
                          : "33%",
                      backgroundColor:
                        passwordStrength === "Strong"
                          ? "#10B981"
                          : passwordStrength === "Medium"
                          ? "#FBBF24"
                          : "#EF4444",
                    }}
                  />
                </div>
                <span
                  className="text-xs font-medium"
                  style={{
                    color:
                      passwordStrength === "Strong"
                        ? "#10B981"
                        : passwordStrength === "Medium"
                        ? "#FBBF24"
                        : "#EF4444",
                    fontFamily: FONT_FAMILY,
                  }}
                >
                  {passwordStrength}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1 w-full md:w-auto">
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* Mobile Submit Button */}
            <button
              className="block md:hidden px-5 py-2.5 rounded-lg text-xs font-semibold text-white mt-4 w-full"
              style={{
                backgroundColor: colors.brand.primarySoft,
                fontFamily: FONT_FAMILY,
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;


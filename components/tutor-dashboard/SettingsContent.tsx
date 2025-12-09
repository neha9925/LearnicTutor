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
    <div className="space-y-6" style={{ fontFamily: FONT_FAMILY }}>
      {/* Notification Preferences */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2
          className="text-xl font-bold text-gray-900 mb-6"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Notification Preferences
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {notifications.map((notif) => {
            const Icon = notif.icon;
            return (
              <div
                key={notif.id}
                className="flex items-center justify-between p-4 rounded-lg"
                style={{
                  backgroundColor: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: notif.enabled
                        ? colors.brand.primarySoft + "20"
                        : "#F3F4F6",
                    }}
                  >
                    <Icon
                      size={20}
                      style={{
                        color: notif.enabled
                          ? colors.brand.primarySoft
                          : "#6B7280",
                      }}
                    />
                  </div>
                  <span
                    className="text-sm font-medium text-gray-900"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    {notif.label}
                  </span>
                </div>
                <button
                  onClick={() => toggleNotification(notif.id)}
                  className="relative w-12 h-6 rounded-full transition-colors flex-shrink-0"
                  style={{
                    backgroundColor: notif.enabled
                      ? colors.brand.primarySoft
                      : "#D1D5DB",
                  }}
                >
                  <span
                    className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-sm"
                    style={{
                      transform: notif.enabled ? "translateX(24px)" : "translateX(0)",
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Security & Login */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2
          className="text-xl font-bold text-gray-900 mb-2"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Security & Login
        </h2>
        <h3
          className="text-base font-medium text-gray-900 mb-6"
          style={{
            fontFamily: FONT_FAMILY,
          }}
        >
          Change Password
        </h3>
        <div className="flex gap-4 items-start">
          <div className="flex-1">
            <Input
              label="Current Password"
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <button
              className="px-6 py-3 rounded-lg text-sm font-semibold text-white mt-4"
              style={{
                backgroundColor: colors.brand.primarySoft,
                fontFamily: FONT_FAMILY,
              }}
            >
              Submit
            </button>
          </div>
          <div className="flex-1">
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
          <div className="flex-1">
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;


"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Bell, Settings } from "lucide-react";
import { FONT_FAMILY, colors } from "@/theme";

interface SidebarLink {
  href: string;
  label: string;
  icon: React.ElementType;
}

const sidebarLinks: SidebarLink[] = [
  { href: "/tutor-dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/tutor-dashboard/classes", label: "Manage Classes", icon: BookOpen },
  { href: "/tutor-dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/tutor-dashboard/settings", label: "Settings", icon: Settings },
];

interface TutorSidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const TutorSidebar: React.FC<TutorSidebarProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`w-64 h-screen fixed left-0 top-0 flex flex-col border-r border-gray-200 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        style={{
          fontFamily: FONT_FAMILY,
          backgroundColor: "#FFFFFF",
        }}
      >
      {/* Logo */}
      <div className="p-6">
        <Image
          src="/logos/logo.svg"
          alt="Learnic Logo"
          width={150}
          height={50}
          className="mb-2"
          style={{
            width: "auto",
            height: "auto",
          }}
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            if (target.parentElement) {
              target.parentElement.innerHTML = `
                <div style="font-family: var(--font-poppins), sans-serif;">
                  <div style="font-size: 24px; font-weight: bold; color: #572EEE; margin-bottom: 4px;">Learnic</div>
                  <div style="font-size: 14px; color: #6B7280;">Smart Home Tutor</div>
                </div>
              `;
            }
          }}
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const isActive = 
            pathname === link.href || 
            (link.href === "/tutor-dashboard" && pathname === "/tutor-dashboard") ||
            (link.href === "/tutor-dashboard/classes" && (pathname.startsWith("/tutor-dashboard/classes") || pathname.startsWith("/tutor-dashboard/schedule-class"))) ||
            (link.href === "/tutor-dashboard/notifications" && pathname.startsWith("/tutor-dashboard/notifications")) ||
            (link.href === "/tutor-dashboard/settings" && pathname.startsWith("/tutor-dashboard/settings")) ||
            (link.href === "/tutor-dashboard/edit-profile" && pathname.startsWith("/tutor-dashboard/edit-profile"));

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? "" : "text-gray-700 hover:bg-gray-200"
              }`}
              style={{
                fontFamily: FONT_FAMILY,
                backgroundColor: isActive ? "#572EEE" : "transparent",
                color: isActive ? "#FFFFFF" : "#374151",
              }}
            >
              <Icon
                size={20}
                style={{
                  color: isActive ? "#FFFFFF" : "#374151",
                }}
              />
              <span
                className="font-medium"
                style={{
                  color: isActive ? "#FFFFFF" : "#374151",
                }}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
    </>
  );
};

export default TutorSidebar;


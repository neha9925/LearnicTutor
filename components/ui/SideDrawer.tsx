"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { typography } from "@/theme";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  width?: string;
}

const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  width = "max-w-xl",
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      const timeout = setTimeout(() => {
        setShouldRender(false);
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    if (shouldRender) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className={cn(
          "flex-1 bg-black bg-opacity-0 transition-opacity duration-300",
          isVisible ? "bg-opacity-50" : "bg-opacity-0"
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "relative ml-auto h-full w-full md:w-auto bg-white shadow-2xl transform transition-transform duration-300 ease-in-out will-change-transform",
          width,
          isVisible ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          {title && (
            <h2
              className="text-lg md:text-xl text-gray-900"
              style={typography.section.headingLg}
            >
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="px-6 py-6 h-[calc(100%-73px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;

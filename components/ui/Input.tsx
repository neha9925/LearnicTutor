import React from "react";
import { cn } from "@/lib/utils";
import { typography } from "@/theme";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  labelStyle?: React.CSSProperties;
  labelClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  labelStyle,
  labelClassName,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label
          className={cn("block text-sm font-medium text-gray-700 mb-2 text-left", labelClassName)}
          style={{ ...(labelStyle ?? typography.labels.md), textAlign: "left" }}
        >
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;


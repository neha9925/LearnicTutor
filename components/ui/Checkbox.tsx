import React from "react";
import { cn } from "@/lib/utils";
import { typography } from "@/theme";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelStyle?: React.CSSProperties;
  labelClassName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className,
  labelStyle,
  labelClassName,
  ...props
}) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer group">
      <input
        type="checkbox"
        className={cn(
          "w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer",
          className
        )}
        {...props}
      />
      {label && (
        <span
          className={cn("text-gray-700 group-hover:text-gray-900", labelClassName)}
          style={labelStyle ?? typography.labels.md}
        >
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;


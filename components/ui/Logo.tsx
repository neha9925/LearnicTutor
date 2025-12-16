"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

const Logo: React.FC<LogoProps> = ({
  variant = "default",
  size = "md",
  className,
  href = "/",
}) => {
  const [imageError, setImageError] = useState(false);

  const sizes = {
    sm: { width: 120, height: 40 },
    md: { width: 150, height: 50 },
    lg: { width: 200, height: 70 },
  };

  const logoPath =
    variant === "white"
      ? "/logos/logo-white.png"
      : "/logos/logo.png";

  const logoContent = (
    <div className={cn("flex items-center gap-2", className)}>
      {!imageError ? (
        <Image
          src={logoPath}
          alt="Learnic Logo"
          width={sizes[size].width}
          height={sizes[size].height}
          className="object-contain"
          style={{ width: 'auto', height: 'auto' }}
          priority
          onError={() => setImageError(true)}
          unoptimized={logoPath.startsWith('/') && !logoPath.includes('http')}
        />
      ) : (
        <span
          className={cn(
            "font-bold",
            variant === "white" ? "text-white" : "text-primary-600",
            size === "sm" && "text-xl",
            size === "md" && "text-2xl",
            size === "lg" && "text-3xl"
          )}
        >
          Learnic
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;


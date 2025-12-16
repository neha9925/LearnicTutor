"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallback?: React.ReactNode;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  priority?: boolean;
  style?: React.CSSProperties;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  width,
  height,
  className,
  fallback,
  objectFit = "cover",
  priority = false,
  style,
}) => {
  const [hasError, setHasError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  if (hasError || !imgSrc) {
    const wrapperClasses = cn(
      "flex items-center justify-center",
      !fallback && "bg-gray-200",
      className
    );
    return (
      <div
        className={wrapperClasses}
        style={{ width: width || "100%", height: height || "100%", ...style }}
      >
        {fallback || <span className="text-gray-400 text-sm">No Image</span>}
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width || 400}
      height={height || 300}
      className={className}
      onError={() => {
        setHasError(true);
        setImgSrc('');
      }}
      style={{ ...style, objectFit }}
      priority={priority}
      unoptimized={imgSrc.startsWith('/') && !imgSrc.includes('http')}
    />
  );
};

export default ImageWithFallback;


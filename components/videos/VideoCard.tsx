"use client";

import React from "react";
import Link from "next/link";
import { Clock, User } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { Card } from "@/components/ui/Card";

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  creator: {
    name: string;
    image: string;
    role?: string;
  };
  views: number;
  likes: number;
  comments: number;
  level: string;
  language: string;
  category: string;
}

const VideoCard: React.FC<VideoCardProps> = React.memo(
  ({ id, title, description, thumbnail, duration, creator, category }) => {
    return (
      <Link href={`/videos/${id}`} className="block w-full max-w-[392px]">
        <Card
          className="overflow-hidden transition-all hover:shadow-xl flex flex-col h-full"
          style={{
            borderRadius: "16px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgba(15, 23, 42, 0.08)",
            boxShadow: "0px 8px 24px rgba(15, 23, 42, 0.04)",
          }}
        >
          <div className="relative w-full flex-shrink-0" style={{ height: "200px" }}>
            <ImageWithFallback
              src={thumbnail || `/images/videos/${id}.jpg`}
              alt={title}
              width={392}
              height={200}
              className="w-full h-full object-cover"
              fallback={
                <div className="w-full h-full bg-gradient-to-br from-[#6B47ED] to-[#8F57FF] flex items-center justify-center text-white text-2xl font-bold">
                  {title.charAt(0)}
                </div>
              }
            />
            <div className="absolute top-3 left-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full text-gray-800">
              {category}
            </div>
            <div className="absolute bottom-3 right-3 bg-black/70 text-xs text-white px-2.5 py-1 rounded-full flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5" />
              {duration}
            </div>
          </div>

          <div className="flex flex-col flex-1 p-4 gap-4">
            <div>
              <h3
                className="font-semibold text-gray-900 mb-1 line-clamp-2"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "18px",
                }}
              >
                {title}
              </h3>
              <p
                className="text-sm text-gray-600 line-clamp-2"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "14px",
                }}
              >
                {description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <ImageWithFallback
                src={
                  creator.image ||
                  `/images/instructors/${creator.name.toLowerCase().replace(/\s+/g, "-")}.jpg`
                }
                alt={creator.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
                fallback={
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-500" />
                  </div>
                }
              />
              <div>
                <p
                  className="font-medium text-gray-900 leading-tight"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "14px",
                  }}
                >
                  {creator.name}
                </p>
                {creator.role && (
                  <p
                    className="text-xs text-gray-500"
                    style={{
                      fontFamily: "var(--font-poppins), sans-serif",
                    }}
                  >
                    {creator.role}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-auto pt-1" />
          </div>
        </Card>
      </Link>
    );
  }
);

VideoCard.displayName = "VideoCard";

export default VideoCard;


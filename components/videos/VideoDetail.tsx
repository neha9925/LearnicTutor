"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import LiveClassDetail from "@/components/live/LiveClassDetail";
import {
  LiveClassBenefit,
  LiveClassCurriculumSection,
  LiveClassData,
  LiveClassHighlight,
  LiveClassReview,
  LiveClassSuggestion,
  LiveClassTiming,
  LiveClassBatch,
} from "@/data/liveClasses";
import { videoLibrary, VideoLibraryEntry } from "@/data/videoLibrary";
import { Heart, Download, Share2 } from "lucide-react";

interface VideoDetailProps {
  video: VideoLibraryEntry;
}

const numberFormatter = new Intl.NumberFormat("en-IN");
const compactNumberFormatter = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const formatCompact = (value: number) => compactNumberFormatter.format(value);

const benefitPalette: Array<{ icon: string; bgColor: string; textColor: string }> = [
  { icon: "🎥", bgColor: "#F5ECFF", textColor: "#6B47ED" },
  { icon: "📥", bgColor: "#E0F2FE", textColor: "#0C4A6E" },
  { icon: "💡", bgColor: "#FEF3C7", textColor: "#92400E" },
  { icon: "🚀", bgColor: "#FBEAFF", textColor: "#7E22CE" },
  { icon: "🛠", bgColor: "#DCFCE7", textColor: "#047857" },
];

const mapVideoToCourse = (video: VideoLibraryEntry): LiveClassData => {
  const basePrice = video.price;
  const originalPrice = video.originalPrice ?? Math.round(basePrice * 1.25);
  const discountValue = Math.max(originalPrice - basePrice, 0);
  const discountLabel =
    discountValue > 0 ? `Save ₹${numberFormatter.format(discountValue)}` : undefined;

  const moduleSections = video.modules ?? [
    {
      id: `${video.id}-module-1`,
      title: video.title,
      lessonsCount: video.curriculum.length,
      totalDuration: video.duration,
      lessons: video.curriculum.map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
        duration: lesson.duration,
        isPreview: lesson.isPreview,
        isLocked: !lesson.isPreview,
      })),
    },
  ];

  const highlights: LiveClassHighlight[] = [
    {
      title: "Structured Modules",
      description: `${moduleSections.length} curated modules with layered concepts.`,
    },
    {
      title: "Downloadable Assets",
      description: video.includes[0] || "Project files and checklists to keep learning on track.",
    },
    {
      title: "Career-aligned Skillset",
      description: `Curated for ${video.level.toLowerCase()} learners focusing on practical outcomes.`,
    },
  ];

  const curriculum: LiveClassCurriculumSection[] = moduleSections.map((module) => ({
    title: module.title,
    lessonsCount: module.lessonsCount ?? module.lessons.length,
    totalDuration: module.totalDuration,
    lessons: module.lessons.map((lesson, index) => ({
      title: lesson.title,
      duration: lesson.duration,
      isPreview: lesson.isPreview,
      isLocked: lesson.isLocked ?? (!lesson.isPreview && index !== 0),
    })),
  }));

  const reviews: LiveClassReview[] = video.reviews.map((review) => ({
    id: review.id,
    name: review.name,
    rating: review.rating,
    role: review.role,
    date: review.date,
    comment: review.comment,
    avatar: review.avatar,
  }));

  const suggestions: LiveClassSuggestion[] = video.suggestedIds
    .map((id) => videoLibrary.find((entry) => entry.id === id))
    .filter((entry): entry is VideoLibraryEntry => Boolean(entry))
    .map((entry) => ({
      id: entry.id,
      title: entry.title,
      tutor: entry.creator.name,
      rating: entry.rating,
      duration: entry.duration,
      image: entry.thumbnail,
      tag: entry.category,
    }));

  const benefits: LiveClassBenefit[] = video.includes.slice(0, 4).map((include, index) => {
    const palette = benefitPalette[index % benefitPalette.length];
    return {
      label: include,
      icon: palette.icon,
      bgColor: palette.bgColor,
      textColor: palette.textColor,
    };
  });

  return {
    id: video.id,
    title: video.title,
    subtitle: video.description,
    shortDescription: video.description,
    description: "",
    categoryTags: [video.category, ...video.tags],
    category: video.category,
    tag: video.tags[0],
    rating: video.rating,
    reviewsCount: video.reviewsCount,
    students: video.learners,
    duration: video.duration,
    durationSummary: `${video.curriculum.length} Lessons • ${video.duration}`,
    level: video.level,
    language: video.language,
    lastUpdated: video.uploadedAt,
    liveSessions: video.curriculum.length,
    startDate: video.uploadedAt,
    image: video.thumbnail,
    instructor: {
      name: video.creator.name,
      image: video.creator.image,
      experience: video.creator.role,
      rating: video.rating,
      learners: `${numberFormatter.format(video.learners)} learners`,
    },
    price: basePrice,
    originalPrice,
    discountLabel,
    batches: [],
    timings: [],
    highlights,
    includes: video.includes,
    outcomes: video.tags,
    curriculum,
    reviews,
    suggestions,
    benefits,
    supportContact: "support@learnic.com",
    supportHours: "Mon - Sat • 9 AM to 8 PM IST",
  };
};

const VideoDetail: React.FC<VideoDetailProps> = ({ video }) => {
  const courseData = useMemo(() => mapVideoToCourse(video), [video]);

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(video.likes);
  const [shareStatus, setShareStatus] = useState<"default" | "shared" | "copied" | "error">("default");

  const handleLike = useCallback(() => {
    setLikeCount((prev) => prev + (isLiked ? -1 : 1));
    setIsLiked((prev) => !prev);
  }, [isLiked]);

  const handleShare = useCallback(async () => {
    if (typeof window === "undefined") {
      return;
    }

    const shareUrl = window.location.href;
    const shareData = {
      title: video.title,
      text: `Watch "${video.title}" on Learnic Tutor`,
      url: shareUrl,
    };

    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share(shareData);
        setShareStatus("shared");
        return;
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
    }

    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        setShareStatus("copied");
        return;
      }
    } catch (error) {
    }

    setShareStatus("error");
  }, [video.title]);

  useEffect(() => {
    if (shareStatus === "default") {
      return;
    }
    const timer = window.setTimeout(() => {
      setShareStatus("default");
    }, shareStatus === "error" ? 3000 : 2000);

    return () => window.clearTimeout(timer);
  }, [shareStatus]);

  const likeLabel = useMemo(() => formatCompact(likeCount), [likeCount]);
  const learnerLabel = useMemo(() => formatCompact(video.learners), [video.learners]);

  const shareLabel = useMemo(() => {
    switch (shareStatus) {
      case "shared":
        return "Shared!";
      case "copied":
        return "Link Copied";
      case "error":
        return "Try Again";
      default:
        return "Share";
    }
  }, [shareStatus]);

  const shareLabelClass = useMemo(() => {
    switch (shareStatus) {
      case "shared":
      case "copied":
        return "text-emerald-600";
      case "error":
        return "text-rose-500";
      default:
        return undefined;
    }
  }, [shareStatus]);

  const videoStats = useMemo(
    () => [
      {
        icon: <Heart className="w-4 h-4" fill={isLiked ? "currentColor" : "none"} />,
        label: likeLabel,
        onClick: handleLike,
        isActive: isLiked,
        ariaLabel: isLiked ? "Unlike video" : "Like video",
      },
      {
        icon: <Download className="w-4 h-4 text-[#475569]" />,
        label: learnerLabel,
        ariaLabel: `${video.learners.toLocaleString()} learners`,
      },
      {
        icon: <Share2 className="w-4 h-4 text-[#475569]" />,
        label: shareLabel,
        labelClassName: shareLabelClass,
        onClick: handleShare,
        ariaLabel: "Share video",
      },
    ],
    [handleLike, handleShare, isLiked, learnerLabel, likeLabel, shareLabel, shareLabelClass, video.learners]
  );

  return <LiveClassDetail course={courseData} variant="video" videoStats={videoStats} />;
};

export default VideoDetail;

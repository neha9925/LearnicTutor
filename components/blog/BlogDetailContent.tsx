"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Home, BookOpen, Users, Clock, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { BlogArticle, Author } from "@/data/blog";
import { colors, typography } from "@/theme";

interface BlogDetailContentProps {
  article: BlogArticle;
  author?: Author;
}

const iconMap: Record<string, React.ElementType> = {
  calendar: Calendar,
  home: Home,
  book: BookOpen,
  users: Users,
  clock: Clock,
};

const styles = {
  introText: {
    ...typography.card.bodyMd,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    fontSize: "18px",
    lineHeight: "1.8",
    color: colors.text.secondary,
  },
  sectionTitle: {
    ...typography.card.titleLg,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: colors.text.primary,
    marginBottom: "12px",
  },
  sectionDescription: {
    ...typography.card.bodyMd,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: colors.text.secondary,
    lineHeight: "1.7",
  },
  quoteBox: {
    background: `linear-gradient(135deg, ${colors.brand.primarySofter} 0%, ${colors.brand.primarySoft} 100%)`,
  },
  quoteText: {
    ...typography.card.titleMd,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: colors.text.light,
    fontSize: "20px",
    lineHeight: "1.6",
    fontStyle: "italic",
  },
  shareButton: {
    backgroundColor: colors.neutral.gray100,
    color: colors.text.secondary,
    ...typography.button.secondary,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    padding: "10px 16px",
    borderRadius: "8px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
  },
  authorName: {
    ...typography.card.titleMd,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: colors.text.primary,
  },
  authorRole: {
    ...typography.card.bodySm,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: colors.text.tertiary,
  },
  authorBio: {
    ...typography.card.bodyMd,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: colors.text.secondary,
    lineHeight: "1.7",
  },
  commentAuthor: {
    ...typography.card.titleMd,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    fontSize: "16px",
    color: colors.text.primary,
  },
  commentText: {
    ...typography.card.bodyMd,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: colors.text.secondary,
    lineHeight: "1.6",
  },
  commentTime: {
    ...typography.card.bodySm,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    color: colors.text.tertiary,
  },
} as const;

const BlogDetailContent: React.FC<BlogDetailContentProps> = ({ article, author }) => {
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;
    
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    } else if (platform === "copy") {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    console.log("Comment submitted:", commentForm);
    setCommentForm({ name: "", email: "", comment: "" });
  };

  if (!article.content) {
    return null;
  }

  return (
    <div className="space-y-12">
      {/* Featured Image */}
      <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
        <Image
          src="/images/banners/BlogDetail2.svg"
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Introduction */}
      <div>
        <p style={styles.introText} className="text-lg leading-relaxed">
          Online learning has revolutionized education, offering flexibility and accessibility like never before. However, mastering the art of studying effectively in a digital environment requires specific strategies and techniques.
        </p>
      </div>

      {/* Study Techniques Sections */}
      <div className="space-y-6">
        {article.content.sections.map((section, index) => {
          const IconComponent = iconMap[section.icon] || BookOpen;
          // Update descriptions to match screenshot
          const descriptions = [
            "Establish consistent study hours that align with your peak productivity times. This helps build routine and signals to your brain that it's time to focus and learn.",
            "Create a distraction-free zone with proper lighting, comfortable seating, and all necessary materials within reach. Your environment significantly impacts your ability to concentrate.",
            "Engage with the material through note-taking, summarizing, and self-testing. Active participation helps improve retention and understanding compared to passive reading.",
            "Connect with fellow learners through online study groups, forums, or virtual meetups. Collaborative learning enhances understanding and provides motivation.",
            "Implement the Pomodoro Technique or similar break strategies. Short, frequent breaks help maintain focus and prevent mental fatigue during long study sessions.",
          ];
          return (
            <div 
              key={section.id} 
              className="bg-white rounded-xl p-6 flex gap-4"
              style={{
                border: "1.04px solid #F3F4F6",
                boxShadow: "0px 1.04px 2.08px 0px #0000000D",
              }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-[#E9D5FF] flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-[#572EEE]" />
                </div>
              </div>
              <div className="flex-1">
                <h3 
                  className="mb-3 font-bold"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#572EEE",
                  }}
                >
                  {index + 1}. {section.title}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#6B7280",
                    lineHeight: "1.6",
                  }}
                >
                  {descriptions[index] || section.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quote Box */}
      {article.content.quote && (
        <div
          className="p-8 md:p-12 rounded-xl relative"
          style={{
            background: "#F3E8FF",
            borderLeft: "4px solid #572EEE",
          }}
        >
          <p 
            className="text-gray-700 text-lg md:text-xl leading-relaxed"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#374151",
            }}
          >
            &quot;{article.content.quote}&quot;
          </p>
        </div>
      )}

      {/* Share Article */}
      <div 
        className="bg-white rounded-xl p-6"
        style={{
          border: "1.04px solid #F3F4F6",
        }}
      >
        <h3 
          className="mb-4 font-bold"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            color: "#374151",
          }}
        >
          Share this article
        </h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleShare("facebook")}
            className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              backgroundColor: "#1877F2",
            }}
          >
            <Facebook className="w-4 h-4" />
            Facebook
          </button>
          <button
            onClick={() => handleShare("twitter")}
            className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              backgroundColor: "#1DA1F2",
            }}
          >
            <Twitter className="w-4 h-4" />
            Twitter
          </button>
          <button
            onClick={() => handleShare("linkedin")}
            className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              backgroundColor: "#0A66C2",
            }}
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </button>
          <button
            onClick={() => handleShare("copy")}
            className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              backgroundColor: "#6B7280",
            }}
          >
            <Link2 className="w-4 h-4" />
            Copy Link
          </button>
        </div>
      </div>

      {/* Author Bio */}
      {author && (
        <div 
          className="bg-white rounded-xl p-6"
          style={{
            boxShadow: "0px 1px 2px 0px #0000000D",
          }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <ImageWithFallback
                  src={author.avatar}
                  alt={author.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 
                className="mb-2 font-bold"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#1F2937",
                }}
              >
                {author.name}
              </h3>
              <p 
                className="mb-4"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#572EEE",
                }}
              >
                {author.role}
              </p>
              <p 
                className="mb-4 leading-relaxed"
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#6B7280",
                  lineHeight: "1.6",
                }}
              >
                {author.bio}
              </p>
              <div className="flex gap-4">
                {author.twitter && (
                  <a
                    href={author.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#572EEE] hover:text-[#3311B2] transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#572EEE] hover:text-[#3311B2] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Comments Section */}
      <div>
        <h3 
          className="mb-6 font-bold"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            color: "#1F2937",
          }}
        >
          Leave a Comment
        </h3>
        
        <form 
          onSubmit={handleCommentSubmit} 
          className="bg-white rounded-xl p-6 mb-8 space-y-4"
          style={{
            boxShadow: "0px 1px 2px 0px #0000000D",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={commentForm.name}
              onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#572EEE] focus:border-transparent"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
              }}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={commentForm.email}
              onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#572EEE] focus:border-transparent"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
              }}
              required
            />
          </div>
          <textarea
            placeholder="Write your comment..."
            value={commentForm.comment}
            onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#572EEE] focus:border-transparent resize-none"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
            rows={6}
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-[#572EEE] text-white font-medium hover:bg-[#3311B2] transition-colors"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            Submit Comment
          </button>
        </form>

        {/* Existing Comments */}
        <div className="space-y-6">
          {(article.id === "featured-1" || article.id === "article-1") && (
            <div 
              className="bg-white rounded-xl p-6"
              style={{
                boxShadow: "0px 1px 2px 0px #0000000D",
              }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src="/images/tutors/tutor-2.jpg"
                      alt="Mike Chen"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 
                      className="font-bold"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#1F2937",
                      }}
                    >
                      Mike Chen
                    </h4>
                    <span 
                      className="text-gray-500"
                      style={{
                        fontFamily: "var(--font-poppins), Poppins, sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#6B7280",
                      }}
                    >
                      2 days ago
                    </span>
                  </div>
                  <p 
                    className="leading-relaxed"
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#374151",
                      lineHeight: "1.6",
                    }}
                  >
                    Great article! The study schedule tip really helped me organize my online learning routine. Thanks for sharing these practical techniques.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailContent;


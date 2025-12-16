"use client";

import React, { useState } from "react";
import Link from "next/link";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { POPULAR_POSTS, BLOG_TOPICS } from "@/data/blog";

const styles = {
  sidebarTitle: {
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    color: "#1F2937",
    marginBottom: "24px",
  },
  popularPostTitle: {
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    fontSize: "16px",
    fontWeight: 600,
    color: "#1F2937",
    marginBottom: "4px",
  },
  popularPostDate: {
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    color: "#6B7280",
  },
} as const;

const BlogSidebar: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing:", email);
    setEmail("");
  };

  // Filter topics to show only the first 5 as per screenshot
  const displayTopics = BLOG_TOPICS.slice(0, 5);

  return (
    <aside className="space-y-8">
      {/* Popular Posts */}
      <div className="bg-white rounded-xl p-8">
        <h3 style={styles.sidebarTitle}>
          Popular Posts
        </h3>
        <div className="space-y-8">
          {POPULAR_POSTS.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="flex gap-4 group cursor-pointer">
                <div className="relative w-20 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    width={80}
                    height={56}
                    className="w-full h-full group-hover:scale-110 transition-transform"
                    objectFit={post.image.endsWith('.svg') ? "contain" : "cover"}
                  />
                </div>
                <div className="flex-1">
                  <h4 style={styles.popularPostTitle} className="group-hover:text-[#572EEE] transition-colors">
                    {post.title}
                  </h4>
                  <p style={styles.popularPostDate}>{post.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Topics */}
      <div className="bg-white rounded-xl p-6">
        <h3 style={styles.sidebarTitle}>
          Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {displayTopics.map((topic) => (
            <button
              key={topic.id}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {topic.name}
            </button>
          ))}
        </div>
      </div>

      {/* Subscribe Box */}
      <div
        className="rounded-xl p-6"
        style={{
          background: "linear-gradient(135deg, #572EEE 0%, #C084FC 70.71%)",
        }}
      >
        <h3 
          className="text-white mb-3"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: "18px",
            lineHeight: "28px",
            letterSpacing: "0%",
          }}
        >
          Subscribe to Learnic Updates
        </h3>
        <p 
          className="text-white mb-4 opacity-90"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0%",
          }}
        >
          Get the latest articles and learning tips delivered to your inbox.
        </p>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
            }}
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-lg bg-white text-[#572EEE] hover:bg-gray-100 transition-colors"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
};

export default BlogSidebar;


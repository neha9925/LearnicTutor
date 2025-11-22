"use client";

import React, { useState } from "react";
import Link from "next/link";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { POPULAR_POSTS } from "@/data/blog";

const styles = {
  sidebarTitle: {
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    fontSize: "20px",
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

// Tags to display (matching screenshot)
const displayTags = [
  "Study",
  "Online Learning",
  "Motivation",
  "Productivity",
  "Education",
];

const BlogDetailSidebar: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing:", email);
    setEmail("");
  };

  // Show only first 2 popular posts
  const displayPosts = POPULAR_POSTS.slice(0, 2);

  return (
    <aside className="space-y-8">
      {/* Popular Posts */}
      <div 
        className="bg-white rounded-xl p-6"
        style={{
          boxShadow: "0px 1px 2px 0px #0000000D",
        }}
      >
        <h3 style={styles.sidebarTitle}>
          Popular Posts
        </h3>
        <div className="space-y-8">
          {displayPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="flex gap-4 group cursor-pointer">
                <div className="relative w-20 h-12 flex-shrink-0 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    width={80}
                    height={48}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    objectFit="cover"
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

      {/* Tags */}
      <div 
        className="bg-white rounded-xl p-6"
        style={{
          boxShadow: "0px 1px 2px 0px #0000000D",
        }}
      >
        <h3 style={styles.sidebarTitle}>
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {displayTags.map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-[#F3E8FF] text-[#572EEE] hover:bg-[#E9D5FF] transition-colors"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              {tag}
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
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "1.4",
          }}
        >
          Get the latest study tips from Learnic
        </h3>
        <p 
          className="text-white mb-4 opacity-90"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "1.5",
          }}
        >
          Join thousands of students improving their learning.
        </p>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
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
              fontSize: "16px",
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

export default BlogDetailSidebar;


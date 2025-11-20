"use client";

import React from "react";
import FeaturedArticle from "./FeaturedArticle";
import LatestArticles from "./LatestArticles";
import BlogSidebar from "./BlogSidebar";

const BlogContent: React.FC = () => {
  return (
    <>
      <FeaturedArticle />
      
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Main Content - Latest Articles */}
            <div className="lg:col-span-3">
              <LatestArticles />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContent;


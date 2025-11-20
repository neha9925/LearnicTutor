import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogDetailHero from "@/components/blog/BlogDetailHero";
import BlogDetailContent from "@/components/blog/BlogDetailContent";
import BlogDetailSidebar from "@/components/blog/BlogDetailSidebar";
import { getArticleById, getAuthorById, FEATURED_ARTICLE, LATEST_ARTICLES } from "@/data/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface BlogDetailRouteProps {
  params: { id: string };
}

export async function generateMetadata({ params }: BlogDetailRouteProps): Promise<Metadata> {
  const article = getArticleById(params.id);
  
  if (!article) {
    return {
      title: "Article Not Found | Learnic",
    };
  }

  return {
    title: `${article.title} | Learnic Blog`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      images: [article.image],
    },
  };
}

export default function BlogDetail({ params }: BlogDetailRouteProps) {
  const article = getArticleById(params.id);

  if (!article) {
    notFound();
  }

  const author = article.authorId ? getAuthorById(article.authorId) : undefined;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <BlogDetailHero article={article} />
        
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <BlogDetailContent article={article} author={author} />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <BlogDetailSidebar />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  const allArticles = [FEATURED_ARTICLE, ...LATEST_ARTICLES];
  return allArticles.map((article) => ({
    id: article.id,
  }));
}


import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Press - Learnic",
  description: "Press releases, media kit, and news about Learnic - Your trusted online learning platform.",
};

export default function PressPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Press</h1>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-gray-600 mb-4">
                Welcome to the Learnic Press Center. Here you&apos;ll find the latest news, press releases, and media resources.
              </p>
              <p className="text-gray-600">
                For media inquiries, please contact us at{" "}
                <a href="mailto:press@learnic.com" className="text-primary-600 hover:underline">
                  press@learnic.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


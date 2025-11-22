import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MyLearningsPage from "@/components/my-learning/MyLearningsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Learnings | Learnic",
  description: "Track your learning journey and discover what's waiting for you.",
  openGraph: {
    title: "My Learnings | Learnic",
    description: "Track your learning journey and discover what's waiting for you.",
    type: "website",
  },
};

const MyLearningPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MyLearningsPage />
      </main>
      <Footer />
    </div>
  );
};

export default MyLearningPage;


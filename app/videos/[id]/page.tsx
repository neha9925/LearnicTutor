import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideoDetail from "@/components/videos/VideoDetail";
import { videoLibrary } from "@/data/videoLibrary";
import { notFound } from "next/navigation";

interface VideoDetailPageProps {
  params: {
    id: string;
  };
}

const VideoDetailPage: React.FC<VideoDetailPageProps> = ({ params }) => {
  const video = videoLibrary.find((entry) => entry.id === params.id);

  if (!video) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#F8F9FC]">
        <VideoDetail video={video} />
      </main>
      <Footer />
    </div>
  );
};

export default VideoDetailPage;

export function generateStaticParams() {
  return videoLibrary.map((video) => ({
    id: video.id,
  }));
}



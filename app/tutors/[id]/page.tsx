import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TutorDetail from "@/components/tutors/TutorDetail";
import { TUTOR_DETAILS } from "@/data/tutorDetails";
import { HOME_TOP_TUTORS } from "@/data/home";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  // Generate static params for all tutors that can be clicked from the tutors page
  return HOME_TOP_TUTORS.map((tutor) => ({
    id: tutor.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const tutor = TUTOR_DETAILS.find((t) => t.id === params.id);

  if (!tutor) {
    return {
      title: "Tutor Not Found | Learnic",
    };
  }

  return {
    title: `${tutor.name} - ${tutor.specialization} | Learnic`,
    description: tutor.description,
    openGraph: {
      title: `${tutor.name} - ${tutor.specialization}`,
      description: tutor.description,
      type: "profile",
    },
  };
}

const TutorDetailPage = ({ params }: { params: { id: string } }) => {
  const tutor = TUTOR_DETAILS.find((t) => t.id === params.id);

  if (!tutor) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main 
        className="flex-1"
        style={{
          background: "linear-gradient(90deg, rgba(87, 46, 238, 0.1) 0%, #FAF5FF 100%)",
        }}
      >
        <TutorDetail tutor={tutor} />
      </main>
      <Footer />
    </div>
  );
};

export default TutorDetailPage;


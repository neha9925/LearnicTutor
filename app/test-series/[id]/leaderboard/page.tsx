import LeaderboardPage from "@/components/test-series/LeaderboardPage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLeaderboardByTestSeriesId, leaderboardData } from "@/data/leaderboard";

export const metadata: Metadata = {
  title: "Leaderboard | Learnic",
  description: "View the leaderboard and rankings for the test series.",
  openGraph: {
    title: "Leaderboard | Learnic",
    description: "View the leaderboard and rankings for the test series.",
    type: "website",
  },
};

interface LeaderboardRouteProps {
  params: { id: string };
}

export default function Leaderboard({ params }: LeaderboardRouteProps) {
  const leaderboard = getLeaderboardByTestSeriesId(params.id);

  if (!leaderboard) {
    notFound();
  }

  return <LeaderboardPage leaderboard={leaderboard} />;
}

export function generateStaticParams() {
  return leaderboardData.map((lb) => ({
    id: lb.testSeriesId,
  }));
}


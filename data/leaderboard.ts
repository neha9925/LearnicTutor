import { testSeriesData } from "./testSeries";

export interface LeaderboardEntry {
  rank: number;
  name: string;
  state: string;
  city?: string;
  score: number;
  time: number; // in minutes
  avatar?: string;
}

export interface LeaderboardData {
  testSeriesId: string;
  title: string;
  totalParticipants: number;
  topPerformers: LeaderboardEntry[];
  userRank: LeaderboardEntry;
  top10: LeaderboardEntry[];
  allParticipants: LeaderboardEntry[];
}

export const leaderboardData: LeaderboardData[] = [
  {
    testSeriesId: "cbse-10-science",
    title: "CBSE Class 10 Science Test Series",
    totalParticipants: 34520,
    topPerformers: [
      {
        rank: 2,
        name: "Priya Sharma",
        state: "Maharashtra",
        score: 98.5,
        time: 28,
        avatar: "/images/avatars/priya.jpg",
      },
      {
        rank: 1,
        name: "Rahul Verma",
        state: "Uttar Pradesh",
        score: 99.2,
        time: 25,
        avatar: "/images/avatars/rahul.jpg",
      },
      {
        rank: 3,
        name: "Ananya Patel",
        state: "Gujarat",
        score: 97.8,
        time: 30,
        avatar: "/images/avatars/ananya.jpg",
      },
    ],
    userRank: {
      rank: 186,
      name: "Your Name",
      state: "Delhi",
      score: 92.5,
      time: 38,
      avatar: "/images/avatars/user.jpg",
    },
    top10: [
      {
        rank: 4,
        name: "Arjun Singh",
        state: "Delhi",
        score: 97.3,
        time: 32,
        avatar: "/images/avatars/arjun.jpg",
      },
      {
        rank: 5,
        name: "Sneha Reddy",
        state: "Telangana",
        score: 96.8,
        time: 29,
        avatar: "/images/avatars/sneha.jpg",
      },
      {
        rank: 6,
        name: "Karan Mehta",
        state: "Rajasthan",
        score: 96.5,
        time: 27,
        avatar: "/images/avatars/karan.jpg",
      },
      {
        rank: 7,
        name: "Divya Iyer",
        state: "Tamil Nadu",
        score: 96.7,
        time: 30,
        avatar: "/images/avatars/divya.jpg",
      },
      {
        rank: 8,
        name: "Aditya Kumar",
        state: "Bihar",
        score: 95.8,
        time: 30,
        avatar: "/images/avatars/aditya.jpg",
      },
      {
        rank: 9,
        name: "Meena Nair",
        state: "Kerala",
        score: 95.6,
        time: 34,
        avatar: "/images/avatars/meena.jpg",
      },
      {
        rank: 10,
        name: "Rohan Joshi",
        state: "Karnataka",
        score: 95.3,
        time: 25,
        avatar: "/images/avatars/rohan.jpg",
      },
    ],
    allParticipants: [
      {
        rank: 11,
        name: "Vikram Desai",
        state: "Punjab",
        score: 95.7,
        time: 36,
        avatar: "/images/avatars/vikram.jpg",
      },
      {
        rank: 12,
        name: "Ishita Bansal",
        state: "West Bengal",
        score: 94.8,
        time: 37,
        avatar: "/images/avatars/ishita.jpg",
      },
      {
        rank: 13,
        name: "Nikhil Gupta",
        state: "Haryana",
        score: 94.5,
        time: 39,
        avatar: "/images/avatars/nikhil.jpg",
      },
      {
        rank: 14,
        name: "Vikram Desai",
        state: "Punjab",
        score: 95.7,
        time: 36,
        avatar: "/images/avatars/vikram.jpg",
      },
      {
        rank: 15,
        name: "Ishita Bansal",
        state: "West Bengal",
        score: 94.8,
        time: 37,
        avatar: "/images/avatars/ishita.jpg",
      },
      {
        rank: 16,
        name: "Nikhil Gupta",
        state: "Haryana",
        score: 94.5,
        time: 39,
        avatar: "/images/avatars/nikhil.jpg",
      },
      // Add more participants for pagination
      ...Array.from({ length: 50 }, (_, i) => ({
        rank: i + 17,
        name: `Participant ${i + 17}`,
        state: ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai"][i % 5],
        score: 94 - (i * 0.1),
        time: 35 + (i % 10),
        avatar: `/images/avatars/user${i + 17}.jpg`,
      })),
    ],
  },
  // Add default leaderboard for other test series
  ...testSeriesData
    .filter((ts) => ts.id !== "cbse-10-science")
    .map((testSeries, index) => ({
      testSeriesId: testSeries.id,
      title: testSeries.title,
      totalParticipants: 10000 + index * 1000,
      topPerformers: [
        {
          rank: 2,
          name: "Priya Sharma",
          state: "Maharashtra",
          score: 95.5,
          time: 30,
        },
        {
          rank: 1,
          name: "Rahul Verma",
          state: "Uttar Pradesh",
          score: 96.2,
          time: 25,
        },
        {
          rank: 3,
          name: "Ananya Patel",
          state: "Gujarat",
          score: 91.0,
          time: 30,
        },
      ],
      userRank: {
        rank: 186 + index * 10,
        name: "Your Name",
        state: "Delhi",
        score: 92.5,
        time: 38,
      },
      top10: Array.from({ length: 7 }, (_, i) => ({
        rank: i + 4,
        name: `Participant ${i + 4}`,
        state: ["Delhi", "Mumbai", "Bangalore"][i % 3],
        score: 97 - i * 0.2,
        time: 25 + i * 2,
      })),
      allParticipants: Array.from({ length: 100 }, (_, i) => ({
        rank: i + 11,
        name: `Participant ${i + 11}`,
        state: ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai"][i % 5],
        score: 95 - (i * 0.1),
        time: 30 + (i % 15),
      })),
    })),
];

export function getLeaderboardByTestSeriesId(testSeriesId: string): LeaderboardData | undefined {
  return leaderboardData.find((lb) => lb.testSeriesId === testSeriesId);
}


export interface VideoLesson {
  id: string;
  title: string;
  duration: string;
  isPreview?: boolean;
}

export interface VideoModuleLesson {
  id: string;
  title: string;
  duration?: string;
  isPreview?: boolean;
  isLocked?: boolean;
}

export interface VideoModule {
  id: string;
  title: string;
  lessonsCount: number;
  totalDuration: string;
  lessons: VideoModuleLesson[];
}

export interface VideoReview {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface VideoLibraryEntry {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  durationMinutes: number;
  category: string;
  tags: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  language: string;
  uploadedAt: string;
  creator: {
    name: string;
    image: string;
    role?: string;
  };
  views: number;
  likes: number;
  comments: number;
  rating: number;
  reviewsCount: number;
  learners: number;
  price: number;
  originalPrice?: number;
  includes: string[];
  curriculum: VideoLesson[];
  modules?: VideoModule[];
  reviews: VideoReview[];
  suggestedIds: string[];
}

const courseThumbnailPool = [
  "/images/courses/V1.jpg",
  "/images/courses/V2.jpg",
  "/images/courses/V3.jpg",
  "/images/courses/V4.jpg",
  "/images/courses/V5.jpg",
];

const baseVideoLibrary: VideoLibraryEntry[] = [
  {
    id: "advanced-algebra-intro",
    title: "Introduction to Advanced Algebra",
    description:
      "Master algebraic identities, polynomials, and complex numbers with real-world applications.",
    thumbnail: "/images/videos/advanced-algebra.jpg",
    duration: "42m 18s",
    durationMinutes: 42,
    category: "Academic",
    tags: ["Mathematics", "STEM", "Board Prep"],
    level: "Advanced",
    language: "English",
    uploadedAt: "2025-09-18",
    creator: {
      name: "Esther Howard",
      image: "/images/instructors/esther-howard.jpg",
      role: "Mathematics Expert",
    },
    views: 25800,
    likes: 1840,
    comments: 126,
    rating: 4.8,
    reviewsCount: 214,
    learners: 16400,
    price: 2499,
    originalPrice: 3599,
    includes: ["Downloadable practice sheets", "Lifetime access", "Certificate of completion"],
    curriculum: [
      { id: "lesson-1", title: "Advanced Algebra Foundations", duration: "12m 45s", isPreview: true },
      { id: "lesson-2", title: "Polynomial Identities & Factorization", duration: "9m 20s" },
      { id: "lesson-3", title: "Complex Numbers & Geometry", duration: "11m 12s" },
      { id: "lesson-4", title: "Problem Solving Workshop", duration: "9m 01s" },
    ],
    reviews: [
      {
        id: "r1",
        name: "Monica Patel",
        role: "Class 12 Student",
        rating: 5,
        comment: "Loved the clarity and the downloadable notes. Practice problems are exam-focused!",
        date: "Oct 12, 2025",
        avatar: "/images/students/ananya.jpg",
      },
      {
        id: "r2",
        name: "Rahul Khanna",
        role: "Engineering Aspirant",
        rating: 4.5,
        comment: "Great pace and examples. The recap quizzes were super helpful.",
        date: "Sep 28, 2025",
      },
    ],
    suggestedIds: ["physics-newton-laws", "data-analytics-foundations", "creative-writing-workshop"],
  },
  {
    id: "web-development-fundamentals",
    title: "Web Development Fundamentals",
    description:
      "Build responsive web pages using HTML, CSS, and modern JavaScript tooling.",
    thumbnail: "/images/videos/web-development.jpg",
    duration: "36m 12s",
    durationMinutes: 36,
    category: "Technology",
    tags: ["Frontend", "JavaScript", "Career"],
    level: "Intermediate",
    language: "English",
    uploadedAt: "2025-08-22",
    creator: {
      name: "Annette Black",
      image: "/images/instructors/annette-black.jpg",
      role: "Software Engineer",
    },
    views: 31240,
    likes: 2650,
    comments: 208,
    rating: 4.7,
    reviewsCount: 198,
    learners: 20150,
    price: 1999,
    originalPrice: 2799,
    includes: ["Source code bundle", "Weekly Q&A live call", "Career roadmap checklist"],
    curriculum: [
      { id: "lesson-1", title: "Setting Up the Dev Environment", duration: "7m 58s", isPreview: true },
      { id: "lesson-2", title: "HTML5 Semantic Structure", duration: "8m 37s" },
      { id: "lesson-3", title: "Modern CSS Layouts", duration: "10m 02s" },
      { id: "lesson-4", title: "JavaScript Essentials", duration: "9m 35s" },
    ],
    reviews: [
      {
        id: "r1",
        name: "Hitesh Singh",
        role: "Aspiring Frontend Developer",
        rating: 4.5,
        comment: "Perfect starter kit. Loved the resource checklist and realistic projects.",
        date: "Sep 05, 2025",
      },
      {
        id: "r2",
        name: "Priya Kamat",
        role: "College Student",
        rating: 4.8,
        comment: "Clear explanations with hands-on demos. Bonus Q&A recording was gold.",
        date: "Aug 30, 2025",
      },
    ],
    suggestedIds: ["creative-writing-workshop", "data-analytics-foundations", "financial-literacy-essentials"],
  },
  {
    id: "physics-newton-laws",
    title: "Physics: Newton's Laws of Motion",
    description:
      "Understand inertia, momentum, and force with engaging experiments and animations.",
    thumbnail: "https://images.pexels.com/photos/2220336/pexels-photo-2220336.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    duration: "48m 05s",
    durationMinutes: 48,
    category: "Academic",
    tags: ["Physics", "STEM", "Concepts"],
    level: "Intermediate",
    language: "English + Hindi",
    uploadedAt: "2025-09-02",
    creator: {
      name: "Jane Cooper",
      image: "/images/instructors/jane-cooper.jpg",
      role: "Physics Instructor",
    },
    views: 28600,
    likes: 1985,
    comments: 164,
    rating: 4.6,
    reviewsCount: 176,
    learners: 15480,
    price: 1799,
    originalPrice: 2499,
    includes: [
      "Class Recordings",
      "Study Notes PDF",
      "Assignments & Tests",
      "Certificate",
      "Doubt Sessions",
    ],
    curriculum: [
      { id: "lesson-1", title: "Inertia & First Law", duration: "10m 48s", isPreview: true },
      { id: "lesson-2", title: "Force & Free Body Diagrams", duration: "12m 05s" },
      { id: "lesson-3", title: "Momentum & Impulse", duration: "13m 12s" },
      { id: "lesson-4", title: "Applications & Case Studies", duration: "12m 00s" },
    ],
    modules: [
      {
        id: "module-1",
        title: "Foundations of Motion",
        lessonsCount: 3,
        totalDuration: "3 Lessons • 32 mins",
        lessons: [
          {
            id: "lesson-1",
            title: "Inertia & First Law",
            duration: "10m 48s",
            isPreview: true,
          },
          {
            id: "lesson-2",
            title: "Balanced vs Unbalanced Forces",
            duration: "9m 36s",
            isLocked: true,
          },
          {
            id: "lesson-3",
            title: "Motion Graphs Workshop",
            duration: "11m 22s",
            isLocked: true,
          },
        ],
      },
      {
        id: "module-2",
        title: "Forces & Free Body Diagrams",
        lessonsCount: 3,
        totalDuration: "3 Lessons • 32 mins",
        lessons: [
          {
            id: "lesson-4",
            title: "Force & Free Body Diagrams",
            duration: "12m 05s",
            isLocked: true,
          },
          {
            id: "lesson-5",
            title: "Friction & Normal Reaction",
            duration: "10m 54s",
            isLocked: true,
          },
          {
            id: "lesson-6",
            title: "Circular Motion Case Studies",
            duration: "9m 18s",
            isLocked: true,
          },
        ],
      },
      {
        id: "module-3",
        title: "Momentum & Real-world Applications",
        lessonsCount: 3,
        totalDuration: "3 Lessons • 36 mins",
        lessons: [
          {
            id: "lesson-7",
            title: "Momentum & Impulse",
            duration: "13m 12s",
            isLocked: true,
          },
          {
            id: "lesson-8",
            title: "Collisions & Safety Mechanisms",
            duration: "11m 04s",
            isLocked: true,
          },
          {
            id: "lesson-9",
            title: "Applications & Case Studies",
            duration: "12m 00s",
            isLocked: true,
          },
        ],
      },
    ],
    reviews: [
      {
        id: "r1",
        name: "Arjun Mehra",
        role: "JEE Aspirant",
        rating: 4.5,
        comment: "Experiments make the concepts very visual. Great for revising motion chapters.",
        date: "Sep 22, 2025",
      },
      {
        id: "r2",
        name: "Neha Kapoor",
        role: "Class 11 Student",
        rating: 4.7,
        comment: "Loved the mind maps. Notes were concise and exam oriented.",
        date: "Sep 10, 2025",
      },
    ],
    suggestedIds: ["advanced-algebra-intro", "spanish-for-beginners", "financial-literacy-essentials"],
  },
  {
    id: "graphic-design-masterclass",
    title: "Graphic Design Masterclass",
    description:
      "Explore color theory, typography, and layout through creative design challenges.",
    thumbnail: "/images/videos/graphic-design.jpg",
    duration: "54m 47s",
    durationMinutes: 55,
    category: "Creative",
    tags: ["Design", "Creativity", "Photoshop"],
    level: "Advanced",
    language: "English",
    uploadedAt: "2025-07-18",
    creator: {
      name: "Ronald Richards",
      image: "/images/instructors/ronald-richards.jpg",
      role: "Creative Director",
    },
    views: 19870,
    likes: 1750,
    comments: 142,
    rating: 4.9,
    reviewsCount: 142,
    learners: 11840,
    price: 2199,
    originalPrice: 2999,
    includes: ["Editable Figma templates", "Design critique guide", "Portfolio checklist"],
    curriculum: [
      { id: "lesson-1", title: "Design Thinking Fundamentals", duration: "13m 34s", isPreview: true },
      { id: "lesson-2", title: "Typography & Color Systems", duration: "14m 42s" },
      { id: "lesson-3", title: "Layout & Composition", duration: "12m 06s" },
      { id: "lesson-4", title: "Project Showcase & Feedback", duration: "14m 25s" },
    ],
    reviews: [
      {
        id: "r1",
        name: "Simran Kaur",
        role: "Design Student",
        rating: 5,
        comment: "Exactly the inspiration I needed. Loved the downloadable assets.",
        date: "Aug 18, 2025",
      },
      {
        id: "r2",
        name: "Ankit Bansal",
        role: "Freelance Designer",
        rating: 4.8,
        comment: "Color theory section was superb. Real client examples helped a lot.",
        date: "Jul 29, 2025",
      },
    ],
    suggestedIds: ["creative-writing-workshop", "web-development-fundamentals", "data-analytics-foundations"],
  },
  {
    id: "business-communication-skills",
    title: "Business Communication Skills",
    description:
      "Learn persuasive storytelling, professional email etiquette, and presentation frameworks.",
    thumbnail: "/images/videos/business-communication.jpg",
    duration: "31m 29s",
    durationMinutes: 31,
    category: "Professional",
    tags: ["Communication", "Soft Skills", "Career"],
    level: "Beginner",
    language: "English",
    uploadedAt: "2025-08-05",
    creator: {
      name: "Albert Flores",
      image: "/images/instructors/albert-flores.jpg",
      role: "Corporate Trainer",
    },
    views: 17450,
    likes: 1520,
    comments: 118,
    rating: 4.5,
    reviewsCount: 132,
    learners: 9800,
    price: 1599,
    originalPrice: 2299,
    includes: ["Email templates pack", "Presentation decks", "Interview scripts"],
    curriculum: [
      { id: "lesson-1", title: "Storytelling for Business", duration: "8m 22s", isPreview: true },
      { id: "lesson-2", title: "Effective Presentation Design", duration: "10m 01s" },
      { id: "lesson-3", title: "Persuasive Communication", duration: "6m 55s" },
      { id: "lesson-4", title: "Handling Q&A & Follow-ups", duration: "6m 11s" },
    ],
    reviews: [
      {
        id: "r1",
        name: "Nitesh Yadav",
        role: "Sales Associate",
        rating: 4.4,
        comment: "Short, crisp, and practical tips. Email templates were useful.",
        date: "Sep 01, 2025",
      },
      {
        id: "r2",
        name: "Aishwarya Das",
        role: "College Placement Prep",
        rating: 4.6,
        comment: "Role-play demos made it easy to practice. Loved the bonus checklist.",
        date: "Aug 12, 2025",
      },
    ],
    suggestedIds: ["financial-literacy-essentials", "creative-writing-workshop", "spanish-for-beginners"],
  },
  {
    id: "spanish-for-beginners",
    title: "Spanish for Beginners",
    description:
      "Kick-start your Spanish journey with easy conversational phrases and cultural insights.",
    thumbnail: "/images/videos/spanish.jpg",
    duration: "27m 44s",
    durationMinutes: 28,
    category: "Languages",
    tags: ["Spanish", "Beginner", "Culture"],
    level: "Beginner",
    language: "Spanish + English",
    uploadedAt: "2025-06-28",
    creator: {
      name: "Eleanor Cooper",
      image: "/images/instructors/eleanor-cooper.jpg",
      role: "Language Coach",
    },
    views: 20560,
    likes: 1675,
    comments: 132,
    rating: 4.7,
    reviewsCount: 156,
    learners: 12550,
    price: 1799,
    originalPrice: 2499,
    includes: ["Printable phrasebook", "Weekly speaking club access", "Grammar quick sheets"],
    curriculum: [
      { id: "lesson-1", title: "Spanish Essentials & Pronunciation", duration: "7m 42s", isPreview: true },
      { id: "lesson-2", title: "Daily Conversation Builders", duration: "8m 55s" },
      { id: "lesson-3", title: "Listening & Response Drills", duration: "10m 09s" },
      { id: "lesson-4", title: "Culture & Practical Scenarios", duration: "8m 58s" },
    ],
    reviews: [
      {
        id: "r1",
        name: "Manisha Rao",
        role: "Travel Enthusiast",
        rating: 4.8,
        comment: "Pronunciation hacks were super helpful. Loved the culture bits!",
        date: "Jul 21, 2025",
      },
      {
        id: "r2",
        name: "Santiago Gomez",
        role: "Beginner Learner",
        rating: 4.6,
        comment: "Very friendly pace. Speaking club invite was a nice surprise.",
        date: "Jul 10, 2025",
      },
    ],
    suggestedIds: ["business-communication-skills", "financial-literacy-essentials", "advanced-algebra-intro"],
  },
  {
    id: "data-analytics-foundations",
    title: "Data Analytics Foundations",
    description:
      "Work with datasets, dashboards, and insights using spreadsheets and SQL basics.",
    thumbnail: "/images/videos/data-analytics.jpg",
    duration: "39m 56s",
    durationMinutes: 40,
    category: "Technology",
    tags: ["Data", "Analytics", "Career"],
    level: "Intermediate",
    language: "English",
    uploadedAt: "2025-09-10",
    creator: {
      name: "Courtney Henry",
      image: "/images/instructors/courtney-henry.jpg",
      role: "Data Analyst",
    },
    views: 22340,
    likes: 1832,
    comments: 150,
    rating: 4.6,
    reviewsCount: 168,
    learners: 13400,
    price: 1899,
    originalPrice: 2699,
    includes: ["Case study dataset", "Dashboard template", "SQL cheat sheet"],
    curriculum: [
      { id: "lesson-1", title: "Understanding the Analytics Process", duration: "8m 15s", isPreview: true },
      { id: "lesson-2", title: "Cleaning Data Efficiently", duration: "9m 48s" },
      { id: "lesson-3", title: "Building Dashboards", duration: "10m 20s" },
      { id: "lesson-4", title: "Sharing Insights & Storytelling", duration: "11m 33s" },
    ],
    reviews: [
      {
        id: "r1",
        name: "Deepika Verma",
        role: "Business Analyst",
        rating: 4.5,
        comment: "Solid intro. Loved the dataset and dashboard walkthrough.",
        date: "Sep 14, 2025",
      },
      {
        id: "r2",
        name: "Rohit Agarwal",
        role: "MBA Student",
        rating: 4.7,
        comment: "Practical examples and clear SQL explanations.",
        date: "Aug 25, 2025",
      },
    ],
    suggestedIds: ["web-development-fundamentals", "graphic-design-masterclass", "financial-literacy-essentials"],
  },
  {
    id: "creative-writing-workshop",
    title: "Creative Writing Workshop",
    description:
      "Unlock storytelling frameworks, character arcs, and narrative pacing exercises.",
    thumbnail: "/images/videos/creative-writing.jpg",
    duration: "33m 08s",
    durationMinutes: 33,
    category: "Creative",
    tags: ["Writing", "Storytelling", "Creativity"],
    level: "Intermediate",
    language: "English",
    uploadedAt: "2025-07-30",
    creator: {
      name: "Theresa Webb",
      image: "/images/instructors/theresa-webb.jpg",
      role: "Author & Mentor",
    },
    views: 16540,
    likes: 1425,
    comments: 109,
    rating: 4.8,
    reviewsCount: 149,
    learners: 10220,
    price: 1699,
    originalPrice: 2399,
    includes: ["Story arc worksheets", "Character development guide", "Monthly writing prompts"],
    curriculum: [
      { id: "lesson-1", title: "Finding Your Premise", duration: "6m 45s", isPreview: true },
      { id: "lesson-2", title: "Building Characters that Live", duration: "8m 32s" },
      { id: "lesson-3", title: "Plotting & Structure Essentials", duration: "9m 04s" },
      { id: "lesson-4", title: "Editing & Feedback Techniques", duration: "8m 47s" },
    ],
    reviews: [
      {
        id: "r1",
        name: "Leena Joseph",
        role: "Aspiring Novelist",
        rating: 4.9,
        comment: "Theresa's energy is infectious! The worksheets are super actionable.",
        date: "Aug 08, 2025",
      },
      {
        id: "r2",
        name: "Harshad Kulkarni",
        role: "Content Writer",
        rating: 4.7,
        comment: "Loved the editing techniques section. Really elevates storytelling.",
        date: "Jul 27, 2025",
      },
    ],
    suggestedIds: ["graphic-design-masterclass", "business-communication-skills", "spanish-for-beginners"],
  },
  {
    id: "financial-literacy-essentials",
    title: "Financial Literacy Essentials",
    description:
      "Budgeting, investing, and risk management simplified for young professionals.",
    thumbnail: "/images/videos/financial-literacy.jpg",
    duration: "29m 11s",
    durationMinutes: 29,
    category: "Professional",
    tags: ["Finance", "Career", "Life Skills"],
    level: "Beginner",
    language: "English + Hindi",
    uploadedAt: "2025-05-26",
    creator: {
      name: "Marvin McKinney",
      image: "/images/instructors/marvin-mckinney.jpg",
      role: "Finance Coach",
    },
    views: 18870,
    likes: 1544,
    comments: 121,
    rating: 4.6,
    reviewsCount: 133,
    learners: 11240,
    price: 1499,
    originalPrice: 2099,
    includes: ["Monthly budget planner", "Investment tracker", "Goal setting workbook"],
    curriculum: [
      { id: "lesson-1", title: "Building a Personal Budget", duration: "7m 12s", isPreview: true },
      { id: "lesson-2", title: "Understanding Investments", duration: "8m 58s" },
      { id: "lesson-3", title: "Risk & Insurance Basics", duration: "6m 35s" },
      { id: "lesson-4", title: "Long-term Money Plan", duration: "6m 26s" },
    ],
    reviews: [
      {
        id: "r1",
        name: "Anjali Deshmukh",
        role: "Young Professional",
        rating: 4.6,
        comment: "Explained finance without jargon. Planners were super useful.",
        date: "Aug 03, 2025",
      },
      {
        id: "r2",
        name: "Nilesh Gupta",
        role: "Startup Founder",
        rating: 4.5,
        comment: "Good starting point. Would love a follow-up advanced series!",
        date: "Jul 30, 2025",
      },
    ],
    suggestedIds: ["business-communication-skills", "data-analytics-foundations", "web-development-fundamentals"],
  },
];

export const videoLibrary: VideoLibraryEntry[] = baseVideoLibrary.map((entry, index) => ({
  ...entry,
  thumbnail: courseThumbnailPool[index % courseThumbnailPool.length],
}));



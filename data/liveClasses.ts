export interface LiveClassBatch {
  id: string;
  title: string;
  startDate: string;
  price: number;
  badge?: string;
  seatsLeft?: string;
  classesPerWeek?: string;
  durationWeeks?: string;
  studentsCount?: number;
  badgeLabel?: string;
  badgeBg?: string;
  badgeTextColor?: string;
}

export interface LiveClassTiming {
  id: string;
  label: string;
  timeRange: string;
  isRecommended?: boolean;
  category?: string;
}

export interface LiveClassHighlight {
  title: string;
  description: string;
}

export interface LiveClassCurriculumSection {
  title: string;
  lessonsCount?: number;
  totalDuration?: string;
  lessons?: LiveClassCurriculumLesson[];
  topics?: string[];
}

export interface LiveClassCurriculumLesson {
  title: string;
  duration?: string;
  isPreview?: boolean;
  isLocked?: boolean;
}

export interface LiveClassReview {
  id: string;
  name: string;
  rating: number;
  role: string;
  date: string;
  comment: string;
  avatar?: string;
}

export interface LiveClassSuggestion {
  id: string;
  title: string;
  tutor: string;
  rating: number;
  duration: string;
  image?: string;
  tag?: string;
  cardId?: string;
}

export interface LiveClassInstructor {
  name: string;
  image: string;
  expertise?: string;
  experience?: string;
  qualification?: string;
  bio?: string;
  achievements?: string[];
  rating?: number;
  learners?: string;
}

export interface LiveClassBenefit {
  label: string;
  icon?: string;
  bgColor: string;
  textColor: string;
  borderColor?: string;
}

export interface LiveClassData {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  categoryTags: string[];
  category: string;
  tag?: string;
  rating: number;
  reviewsCount: number;
  students: number;
  duration: string;
  durationSummary?: string;
  level: string;
  language: string;
  lastUpdated: string;
  liveSessions: number;
  startDate: string;
  image: string;
  instructor: LiveClassInstructor;
  price: number;
  originalPrice: number;
  discountLabel?: string;
  batches: LiveClassBatch[];
  timings: LiveClassTiming[];
  highlights: LiveClassHighlight[];
  includes: string[];
  outcomes: string[];
  curriculum: LiveClassCurriculumSection[];
  reviews: LiveClassReview[];
  suggestions: LiveClassSuggestion[];
  benefits?: LiveClassBenefit[];
  supportContact?: string;
  supportHours?: string;
}

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export const liveClasses: LiveClassData[] = [
  {
    id: "1",
    title: "Advanced Mathematics – Live Masterclass",
    subtitle: "Master Calculus, Algebra, Probability & Advanced Concepts",
    shortDescription:
      "Structured curriculum covering calculus, algebra, trigonometry, and real exam practice sets.",
    description:
      "Experience immersive live classes with personalised feedback, weekly assessments, and dedicated doubt clearing support. Designed for senior secondary students preparing for board and competitive examinations.",
    categoryTags: ["Academic", "Skills"],
    category: "Academic",
    tag: "CBSE",
    rating: 4.8,
    reviewsCount: 1542,
    students: 5200,
    duration: "3 Months",
    durationSummary: "3 Months | 60+ Classes",
    level: "Advanced",
    language: "English",
    lastUpdated: "Oct 18, 2025",
    liveSessions: 60,
    startDate: "Oct 25, 2025",
    image: "/images/courses/V11.jpg",
    instructor: {
      name: "Dr. Rajesh Kumar",
      image: "/images/instructors/james-wilson.jpg",
      expertise: "Mathematics Mentor",
      experience: "15+ Years Experience",
      qualification: "IIT Delhi",
      bio: "Former IIT guest faculty & author of bestselling mathematics workbooks.",
      achievements: ["Mentored 2,000+ students", "AIR 56 in JEE Advanced 2012"],
      rating: 4.9,
      learners: "12k+ learners",
    },
    price: 4499,
    originalPrice: 6499,
    discountLabel: "Save ₹2,000",
    batches: [
      {
        id: "math-small",
        title: "Small Batch",
        startDate: "Oct 28, 2025",
        price: 7999,
        studentsCount: 10,
        badgeLabel: "Personal Attention",
        badgeBg: "#E9F8EF",
        badgeTextColor: "#047857",
      },
      {
        id: "math-medium",
        title: "Medium Batch",
        startDate: "Nov 2, 2025",
        price: 5999,
        studentsCount: 20,
        badgeLabel: "Most Popular",
        badgeBg: "#EEF0FF",
        badgeTextColor: "#4C1D95",
      },
      {
        id: "math-large",
        title: "Large Batch",
        startDate: "Nov 9, 2025",
        price: 3999,
        studentsCount: 30,
        badgeLabel: "Budget Friendly",
        badgeBg: "#FFF2E5",
        badgeTextColor: "#9A3412",
      },
    ],
    timings: [
      {
        id: "morning-1",
        label: "7:00 AM – 8:00 AM",
        timeRange: "7:00 AM – 8:00 AM",
        isRecommended: true,
        category: "Morning",
      },
      {
        id: "morning-2",
        label: "9:00 AM – 10:00 AM",
        timeRange: "9:00 AM – 10:00 AM",
        category: "Morning",
      },
      {
        id: "morning-3",
        label: "11:00 AM – 12:00 PM",
        timeRange: "11:00 AM – 12:00 PM",
        category: "Morning",
      },
      {
        id: "evening-1",
        label: "4:00 PM – 5:00 PM",
        timeRange: "4:00 PM – 5:00 PM",
        category: "Evening",
      },
      {
        id: "evening-2",
        label: "6:00 PM – 7:00 PM",
        timeRange: "6:00 PM – 7:00 PM",
        category: "Evening",
      },
      {
        id: "evening-3",
        label: "8:00 PM – 9:00 PM",
        timeRange: "8:00 PM – 9:00 PM",
        category: "Evening",
      },
    ],
    highlights: [
      {
        title: "Live Doubt Clinics",
        description: "Dedicated doubt-solving room after every class with teaching assistants.",
      },
      {
        title: "Adaptive Practice",
        description: "AI-powered practice sets tailored to your performance each week.",
      },
      {
        title: "Exam Simulations",
        description: "6 full-length mock tests with detailed analytics dashboard.",
      },
      {
        title: "Notes & Assignments",
        description: "Downloadable handwritten notes and curated advanced problem sets.",
      },
    ],
    includes: [
      "24 Live interactive sessions with mentor",
      "365-day access to recorded lectures",
      "Weekly performance analytics & leaderboard",
      "1:1 mentorship calls every alternate week",
    ],
    outcomes: [
      "Master advanced calculus, algebra, and trigonometry",
      "Develop exam temperament through live proctored mocks",
      "Build strong analytical problem-solving methodology",
      "Prepare personalised revision maps for board & competitive exams",
    ],
    curriculum: [
      {
        title: "Advanced Algebra",
        lessonsCount: 5,
        totalDuration: "8 Hours",
        lessons: [
          {
            title: "Polynomial Equations & Factorization",
            duration: "",
            isPreview: true,
          },
          {
            title: "Matrices & Complex Numbers",
            duration: "2h 15m",
            isLocked: true,
          },
          {
            title: "Real-world Problem Solving",
            duration: "1h 45m",
            isLocked: true,
          },
        ],
      },
      {
        title: "Calculus Mastery",
        lessonsCount: 6,
        totalDuration: "10 Hours",
        lessons: [
          {
            title: "Limits, Continuity & Differentiability",
            duration: "2h 30m",
            isLocked: true,
          },
          {
            title: "Applications of Derivatives",
            duration: "2h 10m",
            isLocked: true,
          },
          {
            title: "Definite Integrals & Area",
            duration: "2h 05m",
            isLocked: true,
          },
        ],
      },
      {
        title: "Probability & Statistics",
        lessonsCount: 4,
        totalDuration: "6 Hours",
        lessons: [
          {
            title: "Conditional Probability Fundamentals",
            duration: "1h 50m",
            isLocked: true,
          },
          {
            title: "Bayes Theorem Applications",
            duration: "1h 35m",
            isLocked: true,
          },
          {
            title: "Statistical Distributions",
            duration: "1h 20m",
            isLocked: true,
          },
        ],
      },
    ],
    reviews: [
      {
        id: "r1",
        name: "Ananya Sharma",
        rating: 5,
        role: "Class 12 CBSE Student",
        date: "Aug 12, 2025",
        comment:
          "The pace and clarity of concepts are amazing. Live quizzes kept me engaged and the doubt-solving support is top-notch!",
        avatar: "/images/students/ananya.jpg",
      },
      {
        id: "r2",
        name: "Rahul Mehta",
        rating: 4.5,
        role: "JEE Aspirant",
        date: "Jul 28, 2025",
        comment:
          "Loved the personalised mentorship. The mock tests analysis showed me exactly where to improve. Highly recommended!",
      },
    ],
    suggestions: [
      {
        id: "2",
        cardId: "physics-fundamentals",
        title: "Physics Fundamentals",
        tutor: "Dr. Sarah Chen",
        rating: 4.7,
        duration: "1.5 hrs",
        image: "/images/courses/V12.jpg",
        tag: "ICSE",
      },
      {
        id: "3",
        cardId: "chemistry-basics",
        title: "Chemistry Basics",
        tutor: "Prof. Anjali Bose",
        rating: 4.6,
        duration: "1 hr",
        image: "/images/courses/V13.jpg",
        tag: "NEET",
      },
      {
        id: "5",
        cardId: "biology-essentials",
        title: "Biology Essentials",
        tutor: "Dr. Robert Lee",
        rating: 4.8,
        duration: "1 hr",
        image: "/images/courses/V14.jpg",
        tag: "Academic",
      },
    ],
    benefits: [
      {
        label: "Notes PDF",
        icon: "📄",
        bgColor: "#F5ECFF",
        textColor: "#6B47ED",
      },
      {
        label: "Doubt Sessions",
        icon: "❓",
        bgColor: "#E7F1FF",
        textColor: "#2563EB",
      },
      {
        label: "Certificate",
        icon: "🏆",
        bgColor: "#FFF7E6",
        textColor: "#B45309",
      },
      {
        label: "Assignments",
        icon: "📝",
        bgColor: "#FEEBDD",
        textColor: "#9A3412",
      },
    ],
    supportContact: "+91 98765 43210",
    supportHours: "Mon - Sun • 9:00 AM to 9:00 PM",
  },
  {
    id: "5",
    title: "Biology Essentials – Live Lab Series",
    subtitle: "Master human anatomy, genetics, and ecology with interactive diagrams",
    shortDescription:
      "Live biology classes with virtual lab walkthroughs, timed quizzes, and teacher-led diagram practice.",
    description:
      "Designed for senior secondary students preparing for NEET and board examinations. Every module blends concept explanation with live labelled diagram practice, application-based questions, and mentor feedback.",
    categoryTags: ["Academic", "Science", "Biology"],
    category: "Academic",
    tag: "NEET",
    rating: 4.7,
    reviewsCount: 1284,
    students: 6100,
    duration: "2 Months",
    durationSummary: "2 Months | 32+ Classes",
    level: "Intermediate",
    language: "English",
    lastUpdated: "Oct 02, 2025",
    liveSessions: 32,
    startDate: "Nov 12, 2025",
    image: "/images/courses/V14.jpg",
    instructor: {
      name: "Dr. Robert Lee",
      image: "/images/instructors/robert-lee.jpg",
      expertise: "Biology Expert",
      experience: "12+ years",
      qualification: "MBBS, AIIMS Delhi",
      bio: "Medical professor and former NEET mentor known for interactive learning aids.",
      achievements: ["Authored 'Biology Made Simple'", "Mentored 500+ NEET selections"],
      rating: 4.8,
      learners: "9k+ learners",
    },
    price: 4199,
    originalPrice: 5699,
    discountLabel: "Save ₹1,500",
    batches: [
      {
        id: "bio-regular",
        title: "Regular Batch",
        startDate: "Nov 12, 2025",
        price: 4199,
        studentsCount: 22,
        badgeLabel: "High Success Rate",
        badgeBg: "#E9F8EF",
        badgeTextColor: "#047857",
      },
      {
        id: "bio-fasttrack",
        title: "Fast-Track Revision",
        startDate: "Nov 28, 2025",
        price: 3999,
        studentsCount: 18,
        badgeLabel: "Weekend Focus",
        badgeBg: "#FEF3C7",
        badgeTextColor: "#B45309",
      },
    ],
    timings: [
      {
        id: "bio-morning",
        label: "7:30 AM – 8:30 AM",
        timeRange: "7:30 AM – 8:30 AM",
        category: "Morning",
        isRecommended: true,
      },
      {
        id: "bio-evening",
        label: "7:00 PM – 8:00 PM",
        timeRange: "7:00 PM – 8:00 PM",
        category: "Evening",
      },
      {
        id: "bio-weekend",
        label: "4:00 PM – 6:00 PM (Sat)",
        timeRange: "4:00 PM – 6:00 PM",
        category: "Weekend Lab",
      },
    ],
    highlights: [
      {
        title: "Interactive Lab Demonstrations",
        description: "Virtual dissections and microscope sessions streamed live every week.",
      },
      {
        title: "Diagram Mastery Workshops",
        description: "Step-by-step labelled diagram practice with downloadable templates.",
      },
      {
        title: "Unit Tests & Analytics",
        description: "Bi-weekly unit tests with concept-wise analytics dashboard.",
      },
      {
        title: "Mentor Doubt Clinics",
        description: "Dedicated doubt resolution window after each live class.",
      },
    ],
    includes: [
      "32 Live interactive classes",
      "Downloadable biology diagram kit",
      "Chapter-wise NEET-style question banks",
      "Weekly mentor feedback reports",
    ],
    outcomes: [
      "Gain conceptual clarity in human anatomy and physiology",
      "Improve labelled diagram accuracy for exams",
      "Develop speed in solving application-based questions",
      "Build confidence for NEET and board practicals",
    ],
    curriculum: [
      {
        title: "Module 1 · Human Anatomy",
        lessonsCount: 6,
        totalDuration: "12 hrs",
        lessons: [
          { title: "Circulatory & Lymphatic Systems", duration: "2 hrs 15 mins", isPreview: true },
          { title: "Digestive & Excretory Systems", duration: "1 hr 45 mins", isLocked: true },
          { title: "Nervous & Endocrine Systems", duration: "2 hrs 10 mins", isLocked: true },
        ],
      },
      {
        title: "Module 2 · Genetics & Evolution",
        lessonsCount: 5,
        totalDuration: "9 hrs",
        lessons: [
          { title: "Mendelian Genetics Deep Dive", duration: "1 hr 50 mins", isLocked: true },
          { title: "Molecular Basis of Inheritance", duration: "1 hr 40 mins", isLocked: true },
          { title: "Evolution & Population Genetics", duration: "1 hr 35 mins", isLocked: true },
        ],
      },
      {
        title: "Module 3 · Ecology & Environment",
        lessonsCount: 5,
        totalDuration: "11 hrs",
        lessons: [
          { title: "Ecosystem Dynamics & Energy Flow", duration: "1 hr 45 mins", isLocked: true },
          { title: "Environmental Issues & Pollution", duration: "1 hr 30 mins", isLocked: true },
          { title: "Biodiversity & Conservation", duration: "1 hr 40 mins", isLocked: true },
        ],
      },
    ],
    reviews: [
      {
        id: "bio1",
        name: "Neha Kulkarni",
        rating: 4.7,
        role: "NEET Aspirant",
        date: "Oct 2, 2025",
        comment: "Live diagrams and timed quizzes were a game changer for revision!",
      },
      {
        id: "bio2",
        name: "Raghav Nanda",
        rating: 4.6,
        role: "Class 12 Student",
        date: "Sep 20, 2025",
        comment: "The mentor feedback after every test helped me fix silly mistakes quickly.",
      },
    ],
    suggestions: [
      {
        id: "2",
        title: "Physics Fundamentals – Concept Builder",
        tutor: "Dr. Sarah Chen",
        rating: 4.7,
        duration: "1.5 hrs",
        image: "/images/courses/3.jpg",
      },
      {
        id: "1",
        title: "Advanced Mathematics – Live Masterclass",
        tutor: "Dr. James Wilson",
        rating: 4.8,
        duration: "1 hr 30 mins",
    image: "/images/courses/V11.jpg",
      },
    ],
    supportContact: "+91 98765 43210",
    supportHours: "Mon - Sat • 9:00 AM to 9:00 PM",
  },
  {
    id: "6",
    title: "World History – Timeline Masterclass",
    subtitle: "Journey through global events with interactive maps and storytelling",
    shortDescription:
      "Chronological storytelling of major world events using timelines, infographics, and debate sessions.",
    description:
      "Perfect for humanities students preparing for board examinations and competitive exams. Explore world civilizations, revolutions, and modern history with mentor-led discussions, source-based questions, and analytical essays.",
    categoryTags: ["Academic", "Humanities", "History"],
    category: "Academic",
    tag: "Live",
    rating: 4.5,
    reviewsCount: 980,
    students: 4500,
    duration: "8 Weeks",
    level: "Beginner",
    language: "English",
    lastUpdated: "Sep 12, 2025",
    liveSessions: 24,
    startDate: "Nov 18, 2025",
    image: "/images/courses/V15.jpg",
    instructor: {
      name: "Prof. Michael Brown",
      image: "/images/instructors/michael-brown.jpg",
      expertise: "History Scholar",
      experience: "11+ years",
      bio: "Historian and author known for his engaging narrative style and historical podcasts.",
      rating: 4.7,
      learners: "5k+ learners",
    },
    price: 2999,
    originalPrice: 4299,
    discountLabel: "Limited Slots Left",
    batches: [
      {
        id: "history-weekday",
        title: "Weekday Narratives",
        startDate: "Nov 18, 2025",
        price: 2999,
        studentsCount: 25,
        badgeLabel: "Storytelling Focus",
        badgeBg: "#E0F2FE",
        badgeTextColor: "#0C4A6E",
      },
      {
        id: "history-weekend",
        title: "Weekend Deep Dive",
        startDate: "Dec 1, 2025",
        price: 3099,
        studentsCount: 20,
        badgeLabel: "Case Study Labs",
        badgeBg: "#F5ECFF",
        badgeTextColor: "#6B47ED",
      },
    ],
    timings: [
      {
        id: "history-evening-1",
        label: "5:00 PM – 6:30 PM",
        timeRange: "5:00 PM – 6:30 PM",
        category: "Evening",
        isRecommended: true,
      },
      {
        id: "history-evening-2",
        label: "7:30 PM – 9:00 PM",
        timeRange: "7:30 PM – 9:00 PM",
        category: "Evening",
      },
      {
        id: "history-weekend-1",
        label: "10:00 AM – 12:00 PM (Sun)",
        timeRange: "10:00 AM – 12:00 PM",
        category: "Weekend",
      },
    ],
    highlights: [
      {
        title: "Interactive Map Sessions",
        description: "Live mapping exercises to visualise historical trade routes and battlefields.",
      },
      {
        title: "Debate & Discussion Clubs",
        description: "Weekly debates on historical interpretations and perspectives.",
      },
      {
        title: "Source-based Question Practice",
        description: "Practice DBQs with exam-style marking rubrics and feedback.",
      },
    ],
    includes: [
      "24 Live storytelling sessions",
      "Downloadable history timeline charts",
      "Chapter-wise analytical question banks",
      "Weekly mentor feedback summaries",
    ],
    outcomes: [
      "Understand cause-effect relationships of major world events",
      "Develop analytical writing skills for history examinations",
      "Gain confidence in interpreting historical sources",
      "Build a strong recall using visual memory aids",
    ],
    curriculum: [
      {
        title: "Module 1 · Ancient Civilisations",
        lessonsCount: 4,
        totalDuration: "8 hrs",
        lessons: [
          { title: "Mesopotamia & Egyptian Civilisations", duration: "1 hr 30 mins", isPreview: true },
          { title: "Indus Valley & Chinese Dynasties", duration: "1 hr 20 mins", isLocked: true },
        ],
      },
      {
        title: "Module 2 · Revolutions & Renaissance",
        lessonsCount: 5,
        totalDuration: "10 hrs",
        lessons: [
          { title: "Renaissance & Age of Discovery", duration: "1 hr 40 mins", isLocked: true },
          { title: "American & French Revolutions", duration: "1 hr 45 mins", isLocked: true },
          { title: "Industrial Revolution Impacts", duration: "1 hr 35 mins", isLocked: true },
        ],
      },
      {
        title: "Module 3 · Modern World Order",
        lessonsCount: 5,
        totalDuration: "10 hrs",
        lessons: [
          { title: "World Wars Overview", duration: "1 hr 45 mins", isLocked: true },
          { title: "Cold War & Decolonisation", duration: "1 hr 35 mins", isLocked: true },
          { title: "Contemporary Globalisation", duration: "1 hr 20 mins", isLocked: true },
        ],
      },
    ],
    reviews: [
      {
        id: "hist1",
        name: "Ananya Malik",
        rating: 4.6,
        role: "Humanities Student",
        date: "Sep 30, 2025",
        comment: "Loved the storytelling approach and the interactive map sessions!",
      },
      {
        id: "hist2",
        name: "Yash Patel",
        rating: 4.5,
        role: "UPSC Aspirant",
        date: "Sep 18, 2025",
        comment: "Debate clubs helped me build perspective for mains answers.",
      },
    ],
    suggestions: [
      {
        id: "2",
        cardId: "physics-fundamentals",
        title: "Physics Fundamentals",
        tutor: "Dr. Sarah Chen",
        rating: 4.7,
        duration: "1.5 hrs",
        image: "/images/courses/V12.jpg",
      },
      {
        id: "1",
        cardId: "advanced-mathematics",
        title: "Advanced Mathematics – Live Masterclass",
        tutor: "Dr. Rajesh Kumar",
        rating: 4.8,
        duration: "1 hr 30 mins",
        image: "/images/courses/V11.jpg",
      },
      {
        id: "5",
        cardId: "biology-essentials",
        title: "Biology Essentials",
        tutor: "Dr. Robert Lee",
        rating: 4.7,
        duration: "1 hr",
        image: "/images/courses/V14.jpg",
      },
    ],
    supportContact: "+91 98765 43210",
    supportHours: "Mon - Sun • 9:00 AM to 8:00 PM",
  },
  {
    id: "2",
    title: "Physics Fundamentals – Concept Builder",
    subtitle: "Strengthen your physics foundation with immersive live classes",
    shortDescription:
      "Step-by-step conceptual learning with visual labs, simulations, and exam practice questions.",
    description:
      "A balanced batch for board and competitive aspirants with visual demos, conceptual clarity sessions, and weekly assignments reviewed by mentors.",
    categoryTags: ["Academic", "General Studies"],
    category: "Academic",
    tag: "ICSE",
    rating: 4.7,
    reviewsCount: 1890,
    students: 980,
    duration: "1.5 hrs",
    level: "Intermediate",
    language: "English + Hindi",
    lastUpdated: "Sep 30, 2025",
    liveSessions: 20,
    startDate: "Oct 30, 2025",
    image: "/images/courses/V12.jpg",
    instructor: {
      name: "Dr. Sarah Chen",
      image: "/images/instructors/sarah-chen.jpg",
      expertise: "Physics Professor",
      experience: "10+ years",
      bio: "Ex-NASA research scholar with expertise in modern physics.",
      rating: 4.8,
      learners: "8k+ learners",
    },
    price: 3999,
    originalPrice: 5499,
    discountLabel: "Save ₹1,500",
    batches: [
      {
        id: "physics-weekday",
        title: "Weekday Smart Batch",
        startDate: "Oct 30, 2025",
        price: 3999,
        badge: "Recommended",
        classesPerWeek: "Tue • Thu • Sat",
        durationWeeks: "7 Weeks",
        studentsCount: 18,
        badgeLabel: "Balanced Pace",
        badgeBg: "#E7F1FF",
        badgeTextColor: "#2563EB",
      },
      {
        id: "physics-weekend",
        title: "Weekend Revision",
        startDate: "Nov 10, 2025",
        price: 4199,
        classesPerWeek: "Sat • Sun",
        durationWeeks: "8 Weeks",
        studentsCount: 24,
        badgeLabel: "Working Learners",
        badgeBg: "#FFF7E6",
        badgeTextColor: "#B45309",
      },
    ],
    timings: [
      {
        id: "phys-morning-1",
        label: "6:30 AM – 7:30 AM",
        timeRange: "6:30 AM – 7:30 AM",
        category: "Morning",
      },
      {
        id: "phys-morning-2",
        label: "9:30 AM – 10:30 AM",
        timeRange: "9:30 AM – 10:30 AM",
        category: "Morning",
      },
      {
        id: "phys-evening-1",
        label: "6:45 PM – 7:45 PM",
        timeRange: "6:45 PM – 7:45 PM",
        category: "Evening",
        isRecommended: true,
      },
      {
        id: "phys-evening-2",
        label: "8:30 PM – 9:30 PM",
        timeRange: "8:30 PM – 9:30 PM",
        category: "Evening",
      },
    ],
    highlights: [
      {
        title: "Visual Experiments",
        description: "Real-time simulations and lab demonstrations for every concept.",
      },
      {
        title: "Personalised Assignments",
        description: "Topic-wise worksheets with detailed solution PDFs.",
      },
      {
        title: "Exam Strategy Workshops",
        description: "Monthly sessions focused on time management and scoring techniques.",
      },
      {
        title: "Peer Doubt Forum",
        description: "Dedicated community channel moderated by mentors.",
      },
    ],
    includes: [
      "20 Live concept sessions",
      "Unlimited doubt support on app",
      "Weekly mentor feedback reports",
      "Lifetime access to recorded classes",
    ],
    outcomes: [
      "Strengthen physics fundamentals with conceptual clarity",
      "Gain confidence through practice quizzes and assignments",
      "Develop exam-oriented answer writing skills",
      "Understand real-life applications of every topic",
    ],
    curriculum: [
      {
        title: "Module 1 · Mechanics",
        topics: ["Motion in a straight line", "Laws of motion", "Work, energy & power"],
      },
      {
        title: "Module 2 · Electrodynamics",
        topics: ["Electrostatics", "Current electricity", "Magnetism"],
      },
      {
        title: "Module 3 · Modern Physics",
        topics: ["Dual nature of matter", "Atoms & nuclei", "Semiconductors"],
      },
    ],
    reviews: [
      {
        id: "p1",
        name: "Manya Gupta",
        rating: 4.8,
        role: "ICSE Grade 11",
        date: "Aug 4, 2025",
        comment: "Concepts finally started making sense! Visual demos were super helpful.",
      },
      {
        id: "p2",
        name: "Vishal Rao",
        rating: 4.6,
        role: "NEET Aspirant",
        date: "Jul 21, 2025",
        comment: "Assignments and mentor feedback really improved my understanding.",
      },
    ],
    suggestions: [
      {
        id: "2",
        cardId: "physics-fundamentals",
        title: "Physics Fundamentals – Concept Builder",
        tutor: "Dr. Sarah Chen",
        rating: 4.7,
        duration: "1.5 hrs",
        image: "/images/courses/V12.jpg",
        tag: "ICSE",
      },
      {
        id: "1",
        cardId: "advanced-mathematics",
        title: "Advanced Mathematics – Live Masterclass",
        tutor: "Dr. Rajesh Kumar",
        rating: 4.8,
        duration: "1 hr 30 mins",
        image: "/images/courses/V11.jpg",
        tag: "CBSE",
      },
      {
        id: "5",
        cardId: "biology-essentials",
        title: "Biology Essentials – Live Lab Series",
        tutor: "Dr. Robert Lee",
        rating: 4.7,
        duration: "2 hrs",
        image: "/images/courses/V14.jpg",
        tag: "NEET",
      },
      {
        id: "6",
        cardId: "world-history",
        title: "World History – Timeline Masterclass",
        tutor: "Prof. Michael Brown",
        rating: 4.5,
        duration: "1 hr 30 mins",
        image: "/images/courses/V15.jpg",
        tag: "Live",
      },
    ],
    supportContact: "+91 98765 43210",
    supportHours: "Mon - Sat • 10:00 AM to 8:00 PM",
  },
  {
    id: "3",
    title: "Interactive English Literature Lab",
    subtitle: "Decode poetry, prose & drama with live performances",
    shortDescription:
      "Engaging storytelling sessions with literature mentors, author interactions, and writing labs.",
    description:
      "Ideal for literature enthusiasts and board aspirants to understand themes, characters, and critical analysis through interactive sessions.",
    categoryTags: ["Academic", "Learnic Kids"],
    category: "Academic",
    tag: "ICSE",
    rating: 4.6,
    reviewsCount: 1420,
    students: 850,
    duration: "1 hr",
    level: "Beginner",
    language: "English",
    lastUpdated: "Aug 14, 2025",
    liveSessions: 18,
    startDate: "Nov 5, 2025",
    image: "/images/courses/V13.jpg",
    instructor: {
      name: "Dr. Lisa Anderson",
      image: "/images/instructors/lisa-anderson.jpg",
      expertise: "Literature Expert",
      experience: "9+ years",
      bio: "Cambridge certified trainer & published poet.",
      rating: 4.8,
      learners: "6k+ learners",
    },
    price: 3299,
    originalPrice: 4599,
    discountLabel: "Early Bird Discount",
    batches: [
      {
        id: "lit-weekday",
        title: "Weekday Express",
        startDate: "Nov 5, 2025",
        price: 3299,
        badge: "New",
        classesPerWeek: "Tue • Thu",
        durationWeeks: "9 Weeks",
        studentsCount: 15,
        badgeLabel: "Story Circles",
        badgeBg: "#F5ECFF",
        badgeTextColor: "#6B47ED",
      },
      {
        id: "lit-weekend",
        title: "Weekend Story Lab",
        startDate: "Nov 16, 2025",
        price: 3399,
        classesPerWeek: "Sat • Sun",
        durationWeeks: "9 Weeks",
        studentsCount: 22,
        badgeLabel: "Creative Boost",
        badgeBg: "#E9F8EF",
        badgeTextColor: "#047857",
      },
    ],
    timings: [
      {
        id: "lit-afternoon-1",
        label: "2:00 PM – 3:00 PM",
        timeRange: "2:00 PM – 3:00 PM",
        category: "Afternoon",
        isRecommended: true,
      },
      {
        id: "lit-afternoon-2",
        label: "3:30 PM – 4:30 PM",
        timeRange: "3:30 PM – 4:30 PM",
        category: "Afternoon",
      },
      {
        id: "lit-evening-1",
        label: "6:00 PM – 7:00 PM",
        timeRange: "6:00 PM – 7:00 PM",
        category: "Evening",
      },
      {
        id: "lit-evening-2",
        label: "7:30 PM – 8:30 PM",
        timeRange: "7:30 PM – 8:30 PM",
        category: "Evening",
      },
    ],
    highlights: [
      {
        title: "Group Performances",
        description: "Recreate iconic scenes & poetry recitations to boost confidence.",
      },
      {
        title: "Critical Writing Labs",
        description: "Weekly writing prompts with mentor feedback.",
      },
      {
        title: "Guest Author Sessions",
        description: "Interact with published authors every fortnight.",
      },
      {
        title: "Vocabulary Boosters",
        description: "Daily interactive vocabulary games and quizzes.",
      },
    ],
    includes: [
      "18 Live storytelling sessions",
      "Access to curated reading lists",
      "Monthly book-club discussions",
      "Certificate of completion",
    ],
    outcomes: [
      "Develop critical reading and comprehension skills",
      "Improve creative writing & expression",
      "Gain confidence in literature examinations",
      "Learn to analyse themes and literary devices",
    ],
    curriculum: [
      {
        title: "Module 1 · Poetry Appreciation",
        topics: ["Understanding poetic devices", "Analysing modern poetry", "Writing reflective commentary"],
      },
      {
        title: "Module 2 · Prose & Drama",
        topics: ["Plot and character analysis", "Drama interpretation", "Comparative literature"],
      },
    ],
    reviews: [
      {
        id: "l1",
        name: "Saanvi Kapoor",
        rating: 4.7,
        role: "Grade 10 Student",
        date: "Aug 10, 2025",
        comment: "Absolutely loved the storytelling approach. Sessions felt like performing arts!",
      },
    ],
    suggestions: [
      {
        id: "2",
        title: "Physics Fundamentals – Concept Builder",
        tutor: "Dr. Sarah Chen",
        rating: 4.7,
        duration: "1.5 hrs",
        image: "/images/courses/3.jpg",
      },
      {
        id: "1",
        title: "Advanced Mathematics – Live Masterclass",
        tutor: "Dr. James Wilson",
        rating: 4.9,
        duration: "1 hr",
        image: "/images/courses/1.jpg",
      },
    ],
    supportContact: "+91 98765 43210",
    supportHours: "Daily • 9:00 AM to 6:00 PM",
  },
];

export const getLiveClassById = (id: string) =>
  liveClasses.find((item) => item.id === id);

export const formatCurrency = (value: number) => formatter.format(value);


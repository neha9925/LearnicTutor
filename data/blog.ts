export interface BlogSection {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogComment {
  id: string;
  author: string;
  comment: string;
  timeAgo: string;
  avatar?: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  twitter?: string;
  linkedin?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  description: string;
  author: string;
  authorId?: string;
  date: string;
  readTime?: string;
  category: string;
  image: string;
  featured?: boolean;
  content?: {
    introduction: string;
    sections: BlogSection[];
    quote?: string;
  };
}

export interface PopularPost {
  id: string;
  title: string;
  date: string;
  image: string;
}

export interface BlogTopic {
  id: string;
  name: string;
}

export const FEATURED_ARTICLE: BlogArticle = {
  id: "featured-1",
  title: "10 Effective Study Techniques for Online Learning Success",
  description: "Discover proven strategies that top students use to excel in their online courses. From time management to active learning techniques.",
  author: "Sarah Johnson",
  authorId: "sarah-johnson",
  date: "13 Oct 2020",
  readTime: "5 min read",
  category: "Study Tips",
  image: "/images/students/student-collab.jpg",
  featured: true,
  content: {
    introduction: "Online learning has revolutionized the way we acquire knowledge, offering flexibility and accessibility like never before. However, succeeding in online courses requires a different approach compared to traditional classroom settings. In this comprehensive guide, we'll explore 10 effective study techniques that can help you maximize your online learning experience and achieve academic success.",
    sections: [
      {
        id: "section-1",
        title: "Create a Dedicated Study Schedule",
        description: "Establish a consistent routine by setting aside specific times each day for studying. Use a calendar or planner to block out study sessions and treat them as non-negotiable appointments. This helps build discipline and ensures you stay on track with your coursework.",
        icon: "calendar",
      },
      {
        id: "section-2",
        title: "Design Your Perfect Study Environment",
        description: "Set up a distraction-free workspace with good lighting, comfortable seating, and all necessary materials at hand. Keep your study area organized and free from interruptions to maintain focus and productivity throughout your learning sessions.",
        icon: "home",
      },
      {
        id: "section-3",
        title: "Practice Active Learning Techniques",
        description: "Engage with the material actively by taking notes, asking questions, and summarizing key concepts in your own words. Use techniques like mind mapping, flashcards, and teaching concepts to others to reinforce your understanding.",
        icon: "book",
      },
      {
        id: "section-4",
        title: "Join Study Groups and Forums",
        description: "Connect with fellow learners through online study groups, discussion forums, or virtual study sessions. Collaborating with others can provide new perspectives, clarify doubts, and keep you motivated throughout your learning journey.",
        icon: "users",
      },
      {
        id: "section-5",
        title: "Take Regular Breaks",
        description: "Avoid burnout by incorporating regular breaks into your study routine. Follow techniques like the Pomodoro method (25 minutes of focused study followed by a 5-minute break) to maintain high levels of concentration and prevent mental fatigue.",
        icon: "clock",
      },
    ],
    quote: "The key to successful online learning is consistency and active engagement. Small, regular study sessions are more effective than cramming.",
  },
};

export const LATEST_ARTICLES: BlogArticle[] = [
  {
    id: "article-1",
    title: "How to Make the Most of Live Online Classes",
    description: "Learn how to engage effectively during live sessions and maximize your learning potential.",
    author: "Michael Chen",
    authorId: "michael-chen",
    date: "Nov 10, 2024",
    category: "Live Learning",
    image: "/images/banners/blogA.svg",
    content: {
      introduction: "Online learning has revolutionized education, offering flexibility and accessibility like never before. However, mastering the art of studying effectively in a digital environment requires specific strategies and techniques.",
      sections: [
        {
          id: "section-1",
          title: "Create a Dedicated Study Schedule",
          description: "Establish consistent study hours that align with your peak productivity times. This helps build routine and signals to your brain that it's time to focus and learn.",
          icon: "calendar",
        },
        {
          id: "section-2",
          title: "Design Your Perfect Study Environment",
          description: "Create a distraction-free zone with proper lighting, comfortable seating, and all necessary materials within reach. Your environment significantly impacts your ability to concentrate.",
          icon: "home",
        },
        {
          id: "section-3",
          title: "Practice Active Learning Techniques",
          description: "Engage with the material through note-taking, summarizing, and self-testing. Active participation helps improve retention and understanding compared to passive reading.",
          icon: "book",
        },
        {
          id: "section-4",
          title: "Join Study Groups and Forums",
          description: "Connect with fellow learners through online study groups, forums, or virtual meetups. Collaborative learning enhances understanding and provides motivation.",
          icon: "users",
        },
        {
          id: "section-5",
          title: "Take Regular Breaks",
          description: "Implement the Pomodoro Technique or similar break strategies. Short, frequent breaks help maintain focus and prevent mental fatigue during long study sessions.",
          icon: "clock",
        },
      ],
      quote: "The key to successful online learning is consistency and active engagement. Small, regular study sessions are more effective than cramming.",
    },
  },
  {
    id: "article-2",
    title: "Test-Taking Strategies That Actually Work",
    description: "Expert tips and techniques to help you perform better in exams and assessments.",
    author: "Emily Rodriguez",
    date: "Nov 8, 2024",
    category: "Exam Prep",
    image: "/images/banners/blogB.svg",
  },
  {
    id: "article-3",
    title: "Building a Consistent Learning Routine",
    description: "Discover how to create and maintain a study schedule that fits your lifestyle.",
    author: "David Kumar",
    date: "Nov 6, 2024",
    category: "Skill Growth",
    image: "/images/banners/blogC.svg",
  },
  {
    id: "article-4",
    title: "The Power of Peer Learning in Virtual Classrooms",
    description: "Explore how collaborative learning can enhance your understanding and retention.",
    author: "Jessica Wang",
    date: "Nov 4, 2024",
    category: "Live Learning",
    image: "/images/banners/blogD.svg",
  },
  {
    id: "article-5",
    title: "Time Management for Busy Students",
    description: "Practical advice on balancing studies, work, and personal life effectively.",
    author: "Alex Thompson",
    date: "Nov 2, 2024",
    category: "Skill Growth",
    image: "/images/banners/blogA.svg",
  },
  {
    id: "article-6",
    title: "Essential Tools for Online Learning Success",
    description: "A curated list of digital tools and resources to boost your learning productivity.",
    author: "Maria Garcia",
    date: "Oct 30, 2024",
    category: "Exam Prep",
    image: "/images/banners/blogB.svg",
  },
];

export const POPULAR_POSTS: PopularPost[] = [
  {
    id: "popular-1",
    title: "Study Tips for better Focus",
    date: "Oct 25, 2024",
    image: "/images/banners/blogA.svg",
  },
  {
    id: "popular-2",
    title: "Exam Anxiety Solutions",
    date: "Oct 20, 2024",
    image: "/images/banners/blogB.svg",
  },
  {
    id: "popular-3",
    title: "Building Motivation for Learning",
    date: "Oct 15, 2024",
    image: "/images/banners/blogC.svg",
  },
];

export const BLOG_TOPICS: BlogTopic[] = [
  { id: "topic-1", name: "Study Tips" },
  { id: "topic-2", name: "Online Learning" },
  { id: "topic-3", name: "Exam Prep" },
  { id: "topic-4", name: "Time Management" },
  { id: "topic-5", name: "Motivation" },
  { id: "topic-6", name: "Skill Growth" },
  { id: "topic-7", name: "Live Learning" },
];

export const AUTHORS: Author[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Senior Learning Specialist at Learnic",
    bio: "Sarah is an experienced educator with over 10 years of expertise in online learning methodologies. She has helped thousands of students achieve their academic goals through effective study techniques and personalized learning strategies.",
    avatar: "/images/tutors/tutor-1.jpg",
    twitter: "https://twitter.com/sarahjohnson",
    linkedin: "https://linkedin.com/in/sarahjohnson",
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Senior Learning Specialist at Learnic",
    bio: "Michael has over 8 years of experience in educational technology and online learning methodologies. He specializes in creating effective study strategies for digital learners.",
    avatar: "/images/tutors/tutor-2.jpg",
    twitter: "https://twitter.com/michaelchen",
    linkedin: "https://linkedin.com/in/michaelchen",
  },
];

export const BLOG_COMMENTS: BlogComment[] = [
  {
    id: "comment-1",
    author: "Mike Chet",
    comment: "Great advice! The study schedule tip really helped me organize my online learning routine. Thanks for sharing these practical techniques.",
    timeAgo: "2 hrs ago",
  },
];

// Helper function to get article by id
export const getArticleById = (id: string): BlogArticle | undefined => {
  return [FEATURED_ARTICLE, ...LATEST_ARTICLES].find((article) => article.id === id);
};

// Helper function to get author by id
export const getAuthorById = (id: string): Author | undefined => {
  return AUTHORS.find((author) => author.id === id);
};


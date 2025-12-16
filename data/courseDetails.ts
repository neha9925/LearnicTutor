export interface CourseDetailInstructor {
  name: string;
  credentials: string;
  image: string;
  rating: number;
}

export interface CourseDetailBatch {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  duration: string;
}

export interface CourseDetailCurriculumModule {
  id: string;
  title: string;
  topics: string[];
}

export interface CourseDetailReview {
  id: string;
  name: string;
  rating: number;
  text: string;
  image: string;
}

export interface CourseDetail {
  id: string;
  title: string;
  subtitle: string;
  instructor: CourseDetailInstructor;
  tags: string[];
  batches: CourseDetailBatch[];
  curriculum: CourseDetailCurriculumModule[];
  reviews: CourseDetailReview[];
}

export const COURSE_DETAILS: CourseDetail[] = [
  {
    id: "1",
    title: "Advanced Bioinformatics - Live Mentorship Batch",
    subtitle: "Master Data Science, Machine Learning & Advanced Genomics",
    instructor: {
      name: "Dr. Sangeeta Roy",
      credentials: "Ph.D. in Bioinformatics",
      image: "",
      rating: 4.5,
    },
    tags: [
      "Live Classes",
      "24/7 Support",
      "Doubt Solving",
      "Practical Projects",
      "Case Study",
      "Interview Prep",
    ],
    batches: [
      {
        id: "weekend",
        name: "Weekend Batch",
        price: 23999,
        originalPrice: 27999,
        duration: "12 weeks",
      },
      {
        id: "weekday",
        name: "Weekday Batch",
        price: 21999,
        originalPrice: 25999,
        duration: "10 weeks",
      },
      {
        id: "edge",
        name: "Edge Batch",
        price: 23999,
        originalPrice: 27999,
        duration: "12 weeks",
      },
    ],
    curriculum: [
      {
        id: "module1",
        title: "Module 1: Advanced Algebra",
        topics: [
          "Linear Algebra for Machine Learning",
          "Matrix Operations",
          "Eigenvalues and Eigenvectors",
        ],
      },
      {
        id: "module2",
        title: "Module 2: Advanced Python",
        topics: [
          "Python Data Structures",
          "Object-Oriented Programming",
          "Advanced Python Concepts",
        ],
      },
      {
        id: "module3",
        title: "Module 3: Data Structures & Algorithms",
        topics: [
          "Algorithm Design",
          "Complexity Analysis",
          "Common Data Structures",
        ],
      },
    ],
    reviews: [
      {
        id: "1",
        name: "Vivek Sharma",
        rating: 5,
        text: "Excellent course with practical examples!",
        image: "",
      },
      {
        id: "2",
        name: "Rahul Patel",
        rating: 5,
        text: "Best investment for my career growth.",
        image: "",
      },
    ],
  },
];

export const getCourseDetailById = (id: string): CourseDetail | undefined =>
  COURSE_DETAILS.find((course) => course.id === id);

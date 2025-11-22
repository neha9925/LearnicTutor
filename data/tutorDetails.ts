export interface TutorEducation {
  id: string;
  degree: string;
  university: string;
  year: string;
  icon: "graduation" | "award";
}

export interface TutorAchievement {
  id: string;
  title: string;
  subtitle: string;
  icon: "trophy" | "sparkles";
}

export interface TutorCourse {
  id: string;
  title: string;
  image: string;
  enrolled: number;
  instructor: {
    name: string;
    image: string;
  };
  rating: number;
}

export interface TutorReview {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
}

export interface TutorDetail {
  id: string;
  name: string;
  specialization: string;
  image: string;
  rating: number;
  reviews: number;
  students: number;
  description: string;
  about: string;
  education: TutorEducation[];
  achievements: TutorAchievement[];
  courses: TutorCourse[];
  reviewList: TutorReview[];
}

export const TUTOR_DETAILS: TutorDetail[] = [
  {
    id: "1",
    name: "Dr. Emily Watson",
    specialization: "Advanced Mathematics & Statistics",
    image: "/images/tutors/Tutors3.jpg",
    rating: 4.9,
    reviews: 1200,
    students: 2450,
    description:
      "Experienced mathematics professor with 12+ years of teaching. Specialises in making complex mathematical concepts simple and engaging for students of all levels.",
    about:
      "Dr. Emily Watson is a distinguished mathematics professor with over 12 years of experience in academia and online education. He holds a Ph.D. in Applied Mathematics from Baghdad University and has taught thousands of students worldwide. Her teaching methodology focuses on building strong foundational concepts, making mathematics accessible and enjoyable, and her belief that every student can excel with the right guidance and practice.",
    education: [
      {
        id: "1",
        degree: "Ph.D. in Applied Mathematics",
        university: "Baghdad University",
        year: "2010",
        icon: "graduation",
      },
      {
        id: "2",
        degree: "Master's in Pure Mathematics",
        university: "University of Technology",
        year: "2006",
        icon: "award",
      },
    ],
    achievements: [
      {
        id: "1",
        title: "Top Rated Instructor",
        subtitle: "2023 Excellence Award",
        icon: "trophy",
      },
      {
        id: "2",
        title: "Certified Online Educator",
        subtitle: "International Teaching Board",
        icon: "sparkles",
      },
    ],
    courses: [
      {
        id: "1",
        title: "Advanced Mathematics",
        image: "/images/courses/course1.jpg",
        enrolled: 17000,
        instructor: {
          name: "Dr. James Wilson",
          image: "/images/tutors/Tutors.jpg",
        },
        rating: 4.8,
      },
      {
        id: "2",
        title: "Physics Fundamentals",
        image: "/images/courses/course2.jpg",
        enrolled: 12000,
        instructor: {
          name: "Dr. Sarah Chen",
          image: "/images/tutors/Tutors2.jpg",
        },
        rating: 4.6,
      },
      {
        id: "3",
        title: "Chemistry Basics",
        image: "/images/courses/course3.jpg",
        enrolled: 15000,
        instructor: {
          name: "Dr. John Doe",
          image: "/images/tutors/Tutors.jpg",
        },
        rating: 4.7,
      },
    ],
    reviewList: [
      {
        id: "1",
        name: "David Kline",
        role: "Senior Developer at Microsoft",
        image: "/images/tutors/Tutors.jpg",
        rating: 5,
        quote:
          "The decoding experience was exceptional. The hands-on projects with real datasets helped me build robust applications and prepared me perfectly for my role.",
      },
      {
        id: "2",
        name: "Lisa Thompson",
        role: "Data Analyst at Netflix",
        image: "/images/tutors/Tutors2.jpg",
        rating: 5,
        quote:
          "The hands-on projects with real datasets were incredibly valuable. The course prepared me perfectly for my role and gave me the confidence to tackle complex data challenges.",
      },
      {
        id: "3",
        name: "Jessica Park",
        role: "Senior UI Designer at Google",
        image: "/images/tutors/Tutors3.jpg",
        rating: 5,
        quote:
          "The design principles and best practices taught in this course have transformed my approach to UI design. I highly recommend it to anyone looking to improve their skills.",
      },
    ],
  },
  {
    id: "2",
    name: "Michael Chen",
    specialization: "Computer Science & Programming",
    image: "/images/tutors/Tutors2.jpg",
    rating: 5.0,
    reviews: 856,
    students: 2156,
    description:
      "Expert computer science instructor with 6+ years of experience. Specializes in full-stack development and modern programming languages.",
    about:
      "Michael Chen is a passionate computer science educator with extensive experience in software development and teaching. He holds an MS in Computer Science from Stanford University and has worked with leading tech companies before transitioning to education. His teaching style emphasizes practical, real-world applications of programming concepts.",
    education: [
      {
        id: "1",
        degree: "MS Computer Science",
        university: "Stanford University",
        year: "2015",
        icon: "graduation",
      },
    ],
    achievements: [
      {
        id: "1",
        title: "Top Rated Instructor",
        subtitle: "2023 Excellence Award",
        icon: "trophy",
      },
    ],
    courses: [
      {
        id: "1",
        title: "Full-Stack Development",
        image: "/images/courses/course1.jpg",
        enrolled: 15000,
        instructor: {
          name: "Michael Chen",
          image: "/images/tutors/Tutors2.jpg",
        },
        rating: 4.9,
      },
    ],
    reviewList: [
      {
        id: "1",
        name: "Alex Johnson",
        role: "Software Engineer at Amazon",
        image: "/images/tutors/Tutors.jpg",
        rating: 5,
        quote:
          "Excellent course that covers everything from basics to advanced topics. The instructor's teaching style is clear and engaging.",
      },
    ],
  },
  {
    id: "3",
    name: "Sarah Johnson",
    specialization: "Mathematics & Statistics",
    image: "/images/tutors/Tutors.jpg",
    rating: 5.0,
    reviews: 1200,
    students: 2847,
    description:
      "PhD in Mathematics from MIT with 8+ years of teaching experience. Specializes in making mathematics accessible and enjoyable.",
    about:
      "Sarah Johnson is a dedicated mathematics educator with a PhD from MIT. She has been teaching for over 8 years and has helped thousands of students excel in mathematics.",
    education: [
      {
        id: "1",
        degree: "Ph.D. in Applied Mathematics",
        university: "Baghdad University",
        year: "2010",
        icon: "graduation",
      },
      {
        id: "2",
        degree: "Master's in Pure Mathematics",
        university: "University of Technology",
        year: "2006",
        icon: "award",
      },
    ],
    achievements: [
      {
        id: "1",
        title: "Top Rated Instructor",
        subtitle: "2023 Excellence Award",
        icon: "trophy",
      },
      {
        id: "2",
        title: "Certified Online Educator",
        subtitle: "International Teaching Board",
        icon: "sparkles",
      },
    ],
    courses: [
      {
        id: "1",
        title: "Advanced Mathematics",
        image: "/images/courses/course1.jpg",
        enrolled: 20000,
        instructor: {
          name: "Sarah Johnson",
          image: "/images/tutors/Tutors.jpg",
        },
        rating: 5.0,
      },
    ],
    reviewList: [
      {
        id: "1",
        name: "John Smith",
        role: "Data Scientist at Google",
        image: "/images/tutors/Tutors2.jpg",
        rating: 5,
        quote:
          "Amazing instructor! The course helped me understand complex mathematical concepts easily.",
      },
    ],
  },
];


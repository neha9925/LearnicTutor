import { testSeriesData } from "./testSeries";

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  image?: string;
  imageDescription?: string;
  explanation?: string;
}

export interface TestQuiz {
  id: string;
  testSeriesId: string;
  title: string;
  totalQuestions: number;
  totalTime: number; // in minutes
  questions: QuizQuestion[];
}

export const testQuizzes: TestQuiz[] = [
  {
    id: "cbse-10-science-quiz",
    testSeriesId: "cbse-10-science",
    title: "CBSE Class 10 Science Test Series",
    totalQuestions: 50,
    totalTime: 120, // 120 minutes
    questions: [
      {
        id: 1,
        question: "What is the chemical formula of water?",
        options: [
          "H2O",
          "CO2",
          "O2",
          "H2SO4"
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which gas is released during photosynthesis?",
        options: [
          "Carbon dioxide",
          "Oxygen",
          "Nitrogen",
          "Hydrogen"
        ],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "What is the pH of pure water?",
        options: [
          "5",
          "6",
          "7",
          "8"
        ],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "Which organelle is known as the powerhouse of the cell?",
        options: [
          "Nucleus",
          "Mitochondria",
          "Ribosome",
          "Golgi apparatus"
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "What is the unit of electric current?",
        options: [
          "Volt",
          "Ampere",
          "Ohm",
          "Watt"
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Which metal is liquid at room temperature?",
        options: [
          "Iron",
          "Mercury",
          "Gold",
          "Silver"
        ],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "What is the speed of light in vacuum?",
        options: [
          "3 × 10^8 m/s",
          "3 × 10^6 m/s",
          "3 × 10^10 m/s",
          "3 × 10^4 m/s"
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What is the role of the acid in our stomach during the digestion process? Which component of food is primarily broken down by this acid?",
        options: [
          "It helps in breaking down carbohydrates into simpler sugars",
          "It kills harmful bacteria and activates pepsinogen into pepsin for protein digestion",
          "It emulsifies fats to make them easier to digest",
          "It neutralizes the food to prepare it for intestinal absorption"
        ],
        correctAnswer: 1,
        image: "/images/test-series/digestive-system.jpg",
        imageDescription: "Refer to the diagram below:",
      },
      {
        id: 9,
        question: "What is the process by which plants make their food?",
        options: [
          "Respiration",
          "Photosynthesis",
          "Transpiration",
          "Digestion"
        ],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: [
          "Oxygen",
          "Carbon dioxide",
          "Nitrogen",
          "Argon"
        ],
        correctAnswer: 2,
      },
      // Add more questions to reach 50
      ...Array.from({ length: 40 }, (_, i) => ({
        id: i + 11,
        question: `Sample question ${i + 11} for CBSE Class 10 Science Test Series?`,
        options: [
          `Option A for question ${i + 11}`,
          `Option B for question ${i + 11}`,
          `Option C for question ${i + 11}`,
          `Option D for question ${i + 11}`
        ],
        correctAnswer: i % 4,
      })),
    ],
  },
  // Add default quizzes for other test series
  ...testSeriesData
    .filter((ts) => ts.id !== "cbse-10-science")
    .map((testSeries) => ({
      id: `${testSeries.id}-quiz`,
      testSeriesId: testSeries.id,
      title: testSeries.title,
      totalQuestions: testSeries.questions,
      totalTime: parseInt(testSeries.duration),
      questions: Array.from({ length: testSeries.questions }, (_, i) => ({
        id: i + 1,
        question: `Question ${i + 1} for ${testSeries.title}?`,
        options: [
          `Option A for question ${i + 1}`,
          `Option B for question ${i + 1}`,
          `Option C for question ${i + 1}`,
          `Option D for question ${i + 1}`,
        ],
        correctAnswer: i % 4,
      })),
    })),
];

export function getQuizByTestSeriesId(testSeriesId: string): TestQuiz | undefined {
  return testQuizzes.find((quiz) => quiz.testSeriesId === testSeriesId);
}

export function getQuizById(quizId: string): TestQuiz | undefined {
  return testQuizzes.find((quiz) => quiz.id === quizId);
}


export const gradients = {
  heroHighlight: "linear-gradient(90deg, #6B47ED 0%, #FF7B54 100%)",
  buttonPrimary: "linear-gradient(135deg, #6B47ED 0%, #5A32FF 100%)",
  bannerBackground:
    "linear-gradient(135deg, rgba(108, 99, 255, 0.12) 0%, rgba(78, 205, 196, 0.12) 35.36%, rgba(255, 101, 132, 0.12) 70.71%)",
  courseSectionBackground:
    "linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 35.36%, #FDF2F8 70.71%)",
  heroBackground:
    "linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb))",
  successStoryActive: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
  footerHighlightShadow: "0px 24px 60px rgba(79, 70, 229, 0.20)",
} as const;

export type GradientToken = keyof typeof gradients;


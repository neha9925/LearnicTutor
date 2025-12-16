export const FONT_FAMILY = "var(--font-poppins), sans-serif";

export const typography = {
  hero: {
    heading: {
      fontFamily: FONT_FAMILY,
      fontWeight: 700,
      fontSize: "clamp(32px, 5vw, 52px)",
      lineHeight: "1.1",
      letterSpacing: "0%",
    },
    description: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      fontSize: "clamp(16px, 3vw, 20px)",
      lineHeight: "1.6",
      letterSpacing: "0%",
    },
    statValue: {
      fontFamily: FONT_FAMILY,
      fontWeight: 700,
      fontSize: "36.99px",
      lineHeight: "100%",
      letterSpacing: "0%",
    },
    statLabel: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      fontSize: "21.58px",
      lineHeight: "100%",
      letterSpacing: "0%",
    },
  },
  section: {
    headingXl: {
      fontFamily: FONT_FAMILY,
      fontWeight: 700,
      fontSize: "clamp(28px, 4vw, 36px)",
      lineHeight: "1.3",
      letterSpacing: "0%",
      textAlign: "center",
    },
    headingLg: {
      fontFamily: FONT_FAMILY,
      fontWeight: 700,
      fontSize: "clamp(28px, 4vw, 36px)",
      lineHeight: "1.3",
      letterSpacing: "0%",
    },
    descriptionLg: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      fontSize: "clamp(16px, 3vw, 20px)",
      lineHeight: "1.6",
      letterSpacing: "0%",
      textAlign: "center",
    },
    descriptionMd: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      fontSize: "clamp(16px, 3vw, 20px)",
      lineHeight: "1.6",
      letterSpacing: "0%",
      textAlign: "center",
    },
  },
  card: {
    titleLg: {
      fontFamily: FONT_FAMILY,
      fontWeight: 700,
      fontSize: "clamp(20px, 3.5vw, 24px)",
      lineHeight: "1.2",
      letterSpacing: "0%",
    },
    titleMd: {
      fontFamily: FONT_FAMILY,
      fontWeight: 700,
      fontSize: "clamp(18px, 3vw, 20px)",
      color: "#1F2937",
    },
    bodyMd: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      fontSize: "clamp(14px, 2.8vw, 15px)",
      lineHeight: "1.5",
      letterSpacing: "0%",
    },
    bodySm: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      fontSize: "clamp(13px, 2.6vw, 14px)",
      lineHeight: "1.6",
    },
    badge: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
  },
  button: {
    primary: {
      fontFamily: FONT_FAMILY,
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
    secondary: {
      fontFamily: FONT_FAMILY,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
  },
  labels: {
    sm: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0%",
    },
    md: {
      fontFamily: FONT_FAMILY,
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "center",
    },
  },
  footer: {
    body: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
      color: "#4B5563",
    },
    heading: {
      fontFamily: FONT_FAMILY,
      fontWeight: 700,
      fontSize: "16px",
      color: "#1F2937",
    },
    highlight: {
      fontFamily: FONT_FAMILY,
      fontWeight: 700,
      fontSize: "32px",
    },
    legal: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      fontSize: "14px",
      color: "#4B5563",
    },
  },
  chips: {
    text: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "100%",
    },
  },
} as const;

export type TypographyToken = typeof typography;


export const shadows = {
  heroStat: "0px 4px 11.9px 0px rgba(209, 209, 209, 0.25)",
  cardHover: "0px 8px 24px rgba(15, 23, 42, 0.04)",
  cardElevatedStrong: "0px 24px 60px rgba(79, 70, 229, 0.20)",
  cardElevated: "0px 18px 45px rgba(79, 70, 229, 0.12)",
  cardNeutral: "0px 4px 11.9px 0px rgba(209, 209, 209, 0.25)",
  button: "0px 12px 28px rgba(86, 54, 255, 0.35)",
  banner: "0px 20px 45px rgba(107, 71, 237, 0.08)",
  cardSoft: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
  modal: "0px 18px 34px rgba(107, 71, 237, 0.14)",
} as const;

export type ShadowToken = keyof typeof shadows;


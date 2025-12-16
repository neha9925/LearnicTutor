export const radii = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  xxl: "28px",
  pill: "9999px",
} as const;

export const spacing = {
  containerMax: "1320px",
} as const;

export const zIndex = {
  modal: 50,
} as const;

export type RadiiToken = keyof typeof radii;


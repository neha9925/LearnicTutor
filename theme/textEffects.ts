import { gradients } from "./gradients";

export const textEffects = {
  gradientBrand: {
    background: gradients.heroHighlight,
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline-block",
  } as const,
} as const;

export type TextEffectToken = keyof typeof textEffects;


export const textEffects = {
  gradientBrand: {
    color: "#572EEE",
  } as const,
} as const;

export type TextEffectToken = keyof typeof textEffects;


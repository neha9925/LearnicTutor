import { colors } from "./colors";
import { radii } from "./layout";

export const baseSelectStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: radii.md,
    fontFamily: "var(--font-poppins), sans-serif",
    fontWeight: 500,
    fontSize: "14px",
    color: colors.text.secondary,
    paddingRight: "36px",
  },
  "& .MuiSelect-icon": {
    color: colors.brand.primarySoft,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: colors.border.light,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: colors.border.light,
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: colors.brand.primarySoft,
  },
} as const;


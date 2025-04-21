
import { fontFamily } from "tailwindcss/defaultTheme";
import { animations } from "./animations";
import { colors } from "./colors";

export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors,
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    fontFamily: {
      sans: ["Sora", ...fontFamily.sans],
    },
    ...animations,
  },
};

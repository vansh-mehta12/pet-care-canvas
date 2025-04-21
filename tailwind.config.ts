
import { Config } from "tailwindcss";
import { theme } from "./src/config/theme";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    ...theme,
    extend: {
      ...theme.extend,
      height: {
        ...theme.extend.height,
        'search-bar': '2.5rem', // 40px equivalent to h-10
      },
      padding: {
        ...theme.extend.padding,
        'search-bar-x': '1rem', // px-4 equivalent
        'search-bar-y': '0.5rem', // py-2 equivalent
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

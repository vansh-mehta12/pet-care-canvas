
import { Config } from "tailwindcss";
import { theme } from "./src/config/theme";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme,
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

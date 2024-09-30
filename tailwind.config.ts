import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        "theme-primary": {
          DEFAULT: "#003285",
        },
        "theme-secondary": {
          DEFAULT: "#2A629A",
        },
        "theme-tertiary": {
          DEFAULT: "#FF7F3E",
        },
        "theme-accent": {
          DEFAULT: "#FFDA78",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

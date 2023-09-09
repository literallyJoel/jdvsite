import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "jdvred": "#A50010",
        "jdvredlight": "#A3343F"
      }
    },
  },
  plugins: [],
} satisfies Config;

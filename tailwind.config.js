/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        consolas: ["Consolas", "monospace"],
      },
      colors: {
        primary: "#69FF00",
        dark: "#121212",
      },
      backgroundImage: {
        hero: "url('/heroBg.svg')",
      },
    },
  },
  plugins: [fluid],
};

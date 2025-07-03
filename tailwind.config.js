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
      keyframes: {
        "circle-pulse": {
          "0%, 100%": {
            opacity: "0.1",
          },
          "50%": {
            opacity: "1",
          },
        },
        "ellipse-pulse": {
          "0%, 100%": {
            opacity: "0.1",
          },
          "50%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "circle-pulse": "circle-pulse 3s 1.5s ease-in-out infinite",
        "ellipse-pulse": "ellipse-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [fluid],
};

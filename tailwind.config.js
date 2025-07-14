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
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "1rem" }],
      },
      colors: {
        primary: "#69FF00",
        "primary-medium": "#4fbd00",
        "primary-dark": "#255900",
        dark: "#121212",
      },
      backgroundImage: {
        hero: "url('/heroBg.svg')",
      },
      keyframes: {
        // Top left to bottom right diagonal movement
        "float-1": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(80px, 80px)",
            opacity: "0.3",
          },
          "45%": {
            transform: "translate(120px, 120px)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(120px, 120px)",
            opacity: "0.3",
          },
          "55%": {
            transform: "translate(-120px, -120px)",
            opacity: "0.3",
          },
          "60%": {
            transform: "translate(-120px, -120px)",
            opacity: "0.3",
          },
          "75%": {
            transform: "translate(-80px, -80px)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
        },
        // Top right to bottom left diagonal movement
        "float-2": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(-60px, 60px)",
            opacity: "0.3",
          },
          "45%": {
            transform: "translate(-100px, 100px)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(-100px, 100px)",
            opacity: "0.3",
          },
          "55%": {
            transform: "translate(100px, -100px)",
            opacity: "0.3",
          },
          "60%": {
            transform: "translate(100px, -100px)",
            opacity: "0.3",
          },
          "75%": {
            transform: "translate(60px, -60px)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
        },
        // Bottom right to top left diagonal movement
        "float-3": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(-70px, -70px)",
            opacity: "0.3",
          },
          "45%": {
            transform: "translate(-110px, -110px)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(-110px, -110px)",
            opacity: "0.3",
          },
          "55%": {
            transform: "translate(110px, 110px)",
            opacity: "0.3",
          },
          "60%": {
            transform: "translate(110px, 110px)",
            opacity: "0.3",
          },
          "75%": {
            transform: "translate(70px, 70px)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
        },
        // Bottom left to top right diagonal movement
        "float-4": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(90px, -90px)",
            opacity: "0.3",
          },
          "45%": {
            transform: "translate(130px, -130px)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(130px, -130px)",
            opacity: "0.3",
          },
          "55%": {
            transform: "translate(-130px, 130px)",
            opacity: "0.3",
          },
          "60%": {
            transform: "translate(-130px, 130px)",
            opacity: "0.3",
          },
          "75%": {
            transform: "translate(-90px, 90px)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
        },
        // Horizontal right to left movement
        "float-5": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(-50px, 0)",
            opacity: "0.3",
          },
          "45%": {
            transform: "translate(-100px, 0)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(-100px, 0)",
            opacity: "0.3",
          },
          "55%": {
            transform: "translate(100px, 0)",
            opacity: "0.3",
          },
          "60%": {
            transform: "translate(100px, 0)",
            opacity: "0.3",
          },
          "75%": {
            transform: "translate(50px, 0)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
        },
        // Circular/orbital movement
        "float-6": {
          "0%": {
            transform: "translate(0, 0) rotate(0deg)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(60px, 0) rotate(90deg)",
            opacity: "0.9",
          },
          "50%": {
            transform: "translate(0, 60px) rotate(180deg)",
            opacity: "0.3",
          },
          "75%": {
            transform: "translate(-60px, 0) rotate(270deg)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translate(0, 0) rotate(360deg)",
            opacity: "1",
          },
        },
        // Vertical up and down movement
        "float-7": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(0, -80px)",
            opacity: "0.6",
          },
          "45%": {
            transform: "translate(0, -120px)",
            opacity: "0.8",
          },
          "50%": {
            transform: "translate(0, -120px)",
            opacity: "0.3",
          },
          "55%": {
            transform: "translate(0, 120px)",
            opacity: "0.3",
          },
          "60%": {
            transform: "translate(0, 120px)",
            opacity: "0.3",
          },
          "75%": {
            transform: "translate(0, 80px)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
        },
        // Left to right horizontal movement
        "float-8": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(70px, 0)",
            opacity: "0.3",
          },
          "45%": {
            transform: "translate(120px, 0)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(120px, 0)",
            opacity: "0.3",
          },
          "55%": {
            transform: "translate(-120px, 0)",
            opacity: "0.3",
          },
          "60%": {
            transform: "translate(-120px, 0)",
            opacity: "0.3",
          },
          "75%": {
            transform: "translate(-70px, 0)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
        },
        // Zigzag movement pattern
        "float-9": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
          "20%": {
            transform: "translate(40px, -40px)",
            opacity: "0.3",
          },
          "40%": {
            transform: "translate(-40px, -80px)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(-40px, -80px)",
            opacity: "0.3",
          },
          "60%": {
            transform: "translate(40px, 80px)",
            opacity: "0.3",
          },
          "80%": {
            transform: "translate(-40px, 40px)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0.3",
          },
        },
        // Figure-8 movement pattern
        "float-10": {
          "0%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(50px, -30px) scale(1.1)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(0, 0) scale(0.8)",
            opacity: "0.3",
          },
          "75%": {
            transform: "translate(-50px, 30px) scale(1.1)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.3",
          },
        },
      },
      animation: {
        "float-1": "float-1 100s linear infinite",
        "float-2": "float-2 100s linear infinite",
        "float-3": "float-3 100s linear infinite",
        "float-4": "float-4 100s linear infinite",
        "float-5": "float-5 100s linear infinite",
        "float-6": "float-6 200s linear infinite",
        "float-7": "float-7 100s linear infinite",
        "float-8": "float-8 100s linear infinite",
        "float-9": "float-9 100s linear infinite",
        "float-10": "float-10 100s linear infinite",
      },
    },
  },
  plugins: [fluid],
};

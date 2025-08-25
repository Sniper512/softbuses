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
        xxxs: ["0.5rem", { lineHeight: "1rem" }],
        xxs: ["0.625rem", { lineHeight: "1rem" }],
      },
      colors: {
        primary: "#69FF00",
        "primary-medium": "#4fbd00",
        "primary-dark": "#255900",
        dark: "#121212",
      },
      boxShadow: {
        glow: "0 0 10px rgba(105, 255, 0, 0.1), 0 0 20px rgba(105, 255, 0, 0.2), 0 0 40px rgba(105, 255, 0, 0.1), -5px 0 15px rgba(105, 255, 0, 0.05), 5px 0 15px rgba(105, 255, 0, 0.05)",
        "glow-2":
          "0 0 5px rgba(105, 255, 0, 0.6), 0 0 10px rgba(105, 255, 0, 0.1), 0 0 20px rgba(105, 255, 0, 0.05), -3px 0 8px rgba(105, 255, 0, 0.03), 3px 0 8px rgba(105, 255, 0, 0.03)",
      },
      backgroundImage: {
        hero: "url('/heroBg.svg')",
      },
      keyframes: {
        // Top left to bottom right diagonal movement
        "float-1": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(20px, 20px)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(80px, 80px)",
            opacity: "0.3",
          },
          "45%": {
            transform: "translate(120px, 120px)",
            opacity: "0.9",
          },
          "70%": {
            transform: "translate(150px, 150px)",
            opacity: "0.8",
          },
          "85%": {
            transform: "translate(170px, 170px)",
            opacity: "0.1",
          },
          "98%": {
            transform: "translate(180px, 180px)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
        },
        // Top right to bottom left diagonal movement
        "float-2": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(-15px, 15px)",
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
          "70%": {
            transform: "translate(-130px, 130px)",
            opacity: "0.2",
          },
          "85%": {
            transform: "translate(-150px, 150px)",
            opacity: "0.1",
          },
          "95%": {
            transform: "translate(-160px, 160px)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
        },
        // Bottom right to top left diagonal movement
        "float-3": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(-18px, -18px)",
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
          "70%": {
            transform: "translate(-140px, -140px)",
            opacity: "0.2",
          },
          "85%": {
            transform: "translate(-160px, -160px)",
            opacity: "0.1",
          },
          "95%": {
            transform: "translate(-170px, -170px)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
        },
        // Bottom left to top right diagonal movement
        "float-4": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(22px, -22px)",
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
          "70%": {
            transform: "translate(160px, -160px)",
            opacity: "0.2",
          },
          "85%": {
            transform: "translate(180px, -180px)",
            opacity: "0.1",
          },
          "95%": {
            transform: "translate(190px, -190px)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
        },
        // Horizontal right to left movement
        "float-5": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(-12px, 0)",
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
          "70%": {
            transform: "translate(-130px, 0)",
            opacity: "0.2",
          },
          "85%": {
            transform: "translate(-150px, 0)",
            opacity: "0.1",
          },
          "95%": {
            transform: "translate(-160px, 0)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
        },
        // Circular/orbital movement
        "float-6": {
          "0%": {
            transform: "translate(0, 0) rotate(0deg)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(15px, 0) rotate(36deg)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(60px, 0) rotate(90deg)",
            opacity: "0.6",
          },
          "50%": {
            transform: "translate(0, 60px) rotate(180deg)",
            opacity: "0.8",
          },
          "75%": {
            transform: "translate(-60px, 0) rotate(270deg)",
            opacity: "0.6",
          },
          "85%": {
            transform: "translate(-30px, -30px) rotate(324deg)",
            opacity: "0.3",
          },
          "95%": {
            transform: "translate(-10px, -10px) rotate(350deg)",
            opacity: "0.1",
          },
          "100%": {
            transform: "translate(0, 0) rotate(360deg)",
            opacity: "0",
          },
        },
        // Vertical up and down movement
        "float-7": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(0, -20px)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(0, -80px)",
            opacity: "0.5",
          },
          "45%": {
            transform: "translate(0, -120px)",
            opacity: "0.6",
          },
          "70%": {
            transform: "translate(0, -150px)",
            opacity: "0.4",
          },
          "85%": {
            transform: "translate(0, -170px)",
            opacity: "0.2",
          },
          "95%": {
            transform: "translate(0, -180px)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
        },
        // Left to right horizontal movement
        "float-8": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(18px, 0)",
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
          "70%": {
            transform: "translate(150px, 0)",
            opacity: "0.2",
          },
          "85%": {
            transform: "translate(170px, 0)",
            opacity: "0.1",
          },
          "95%": {
            transform: "translate(180px, 0)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
        },
        // Vertical down to up movement
        "float-9": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(0, -25px)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(0, -100px)",
            opacity: "0.3",
          },
          "45%": {
            transform: "translate(0, -140px)",
            opacity: "0.3",
          },
          "70%": {
            transform: "translate(0, -170px)",
            opacity: "0.2",
          },
          "85%": {
            transform: "translate(0, -190px)",
            opacity: "0.1",
          },
          "95%": {
            transform: "translate(0, -200px)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
        },
        // Horizontal right to left movement (variant)
        "float-10": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(-20px, 0)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(-80px, 0)",
            opacity: "0.3",
          },
          "45%": {
            transform: "translate(-120px, 0)",
            opacity: "0.3",
          },
          "70%": {
            transform: "translate(-150px, 0)",
            opacity: "0.2",
          },
          "85%": {
            transform: "translate(-170px, 0)",
            opacity: "0.1",
          },
          "95%": {
            transform: "translate(-180px, 0)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
        },
        "bar-left-right": {
          "0%": {
            left: "0",
            transform: "translateX(0)",
          },
          "50%": {
            left: "100%",
            transform: "translateX(-100%)",
          },
          "100%": {
            left: "0",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "float-1": "float-1 30s linear infinite",
        "float-2": "float-2 30s linear infinite",
        "float-3": "float-3 30s linear infinite",
        "float-4": "float-4 30s linear infinite",
        "float-5": "float-5 30s linear infinite",
        "float-6": "float-6 100s linear infinite",
        "float-7": "float-7 30s linear infinite",
        "float-8": "float-8 30s linear infinite",
        "float-9": "float-9 30s linear infinite",
        "float-10": "float-10 30s linear infinite",
        "bar-left-right": "bar-left-right 40s linear infinite",
      },
    },
  },
  plugins: [fluid],
};

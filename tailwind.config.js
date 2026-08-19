/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#3B261C",
        "dark-coffee": "#5C3A29",
        "coffee-brown": "#6B4226",
        "medium-brown": "#8B5E3C",
        "coffee-beige": "#D9B99B",
        "warm-white": "#FFFDF8",
        cream: "#F7F0E8",
        white: "#FFFFFF",
        "card-border": "#E5D5C5",
        "soft-brown": "#765F50",
        "dark-espresso": "#4A2E1E",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "DM Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

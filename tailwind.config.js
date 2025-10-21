/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF4D6D",
        "background-light": "#F7F8FA",
        "background-dark": "#1A1A1B",
        "surface-light": "#FFFFFF",
        "surface-dark": "#2D2D2E",
        "text-light": "#1C1C1E",
        "text-dark": "#E5E5E7",
        "text-light-secondary": "#636366",
        "text-dark-secondary": "#A2A2A5",
        "border-light": "#E5E5E7",
        "border-dark": "#3A3A3C",
        "user-bubble-light": "#4A4A4A",
        "user-bubble-dark": "#3A3A3C",
      },
      fontFamily: {
        display: ["Noto Sans KR", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
        large: "16px",
      },
    },
  },
  plugins: [],
}

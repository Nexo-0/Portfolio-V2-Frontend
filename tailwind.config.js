/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#1a1a1a",
        secondary: "#a1a1aa",
        // CHANGE THIS TO GOLD:
        primary: "#FFD700", // Classic Gold
        // OR try "#F59E0B" for a deeper Amber/Gold
        accent: "#FBBF24",  // Lighter Gold for gradients
      },
    },
  },
  plugins: [],
}
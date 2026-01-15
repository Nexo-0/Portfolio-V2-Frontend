/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // Slate 950
        surface: "#1e293b",    // Slate 800
        primary: "#38bdf8",    // Sky 400
        secondary: "#94a3b8",  // Slate 400
        accent: "#6366f1",     // Indigo 500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
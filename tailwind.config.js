/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#0a0f1e",
        neonBlue: "#1b95e0",
        highlight: "#7ac7ff",
      },
    },
  },
  plugins: [],
};
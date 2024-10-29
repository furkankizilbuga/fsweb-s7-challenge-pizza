/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F2",
      },
      fontFamily: {
        quattrocento: ["Quattrocento", "serif"],
        satisfy: ["Satisfy", "cursive"],
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
}

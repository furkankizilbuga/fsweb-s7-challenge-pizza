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
        muted: "#5F5F5F"
      },
      fontFamily: {
        quattrocento: ["Quattrocento", "serif"],
        satisfy: ["Satisfy", "cursive"],
        barlow: ["Barlow", "sans-serif"],
        roboto: ["Roboto Condensed Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
        custom: ["Adihaus", "sans-serif"],
      },
      colors: {
        mustard: "#f5f5e5",
        highlight: "#ede734",
      },
    },
  },
  plugins: [],
};

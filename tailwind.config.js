/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //Colors used in this project
      colors:{
        // primary: "#F6A64F",
        primary: "#f10716",
        // secondary:"#B56141",
        secondary:"#921616",
        background:"#FFFCF8",
        white:"#FBFBFB"
      },
      backgroundImage:{
        // "gradient-primary": "linear-gradient(to right, #f4a44f, #ac573f)",
        "gradient-primary": "linear-gradient(to right, #921616, #f10716)",
      },
      fontFamily: {
        kablammo: ['Kablammo', 'serif'],
        agu: ["Agu Display", "serif"],
        allura: ["Allura", "serif"]
      },
    },
  },
  plugins: [],
}


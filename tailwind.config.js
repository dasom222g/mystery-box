/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mb-pink-700": "#FF384A",
        "mb-blue-600": "#5B4BEA",
        "mb-blue-700": "#4B5EFC",
        "mb-gray-800": "#181A20",
        "mb-gray-700": "#2D3342",
        "mb-green-400": "#05DB92",
        "mb-green-200": "#BFFFE9",
      },
      borderRadius: {
        "mb-lg": "0.625rem",
      },
      backgroundImage: {
        "box-shadow": "url('../public/images/box_shadow_green.svg')",
        lightning: "url('../public/images/lightning.svg')",
        correct: "url('../public/images/icon-correct.svg')",
        inCorrect: "url('../public/images/icon-incorrect.svg')",
      },
      backgroundSize: {
        6: "1.5rem",
      },
      backgroundPosition: {
        "top-3": "center top -0.75rem",
        "left-1": "center left -0.25rem",
      },
    },
  },
  plugins: [],
};

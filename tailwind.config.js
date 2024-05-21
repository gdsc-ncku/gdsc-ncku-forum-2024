/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        White: "#F0F2F3",
        Red: "#ED5346",
        Yellow: "#F9AB00",
        Green: "#34A853",
        Blue: "#8AB4F8",
      },
    },
  },
};

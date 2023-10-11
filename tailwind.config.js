/** @type {import('tailwindcss').Config} */
export default {
  content: ["node_modules/preline/dist/*.js", "./src/**/*.{html, js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        headings: ['Rosario', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        text: "hsl(246, 36%, 95%)",
        background: "hsl(240, 43%, 4%)",
        primary: "hsl(337, 95%, 29%)",
        secondary: "hsl(212, 100%, 26%)",
        accent: "hsl(201, 89%, 58%)",
        cardBackround: 'rgba(24, 7, 24, 0.997)'
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("preline/plugin"),
  ],
};

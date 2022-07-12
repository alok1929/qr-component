/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/src/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      White: "hsl(0, 0%, 100%)",
      Lightgray: "hsl(212, 45%, 89%)",
      Grayishblue: "hsl(220, 15%, 55%)",
      Darkblue: "hsl(218, 44%, 22%)",
    },
    fontSize: {
      size: "15px",
    },
    screens: {
      Mobile: "375px",
      Desktop: "1440px",
    },
    extend: {
      fontFamily: {
        outfit: ["outfit"],
      },
    },
  },
  plugins: [],
};

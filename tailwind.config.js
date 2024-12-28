/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#8f00ff",
        dark: "#0f172a",
        secondary: "#64748b",
        boxShadow: {
          primary: "0 10px 20px #8f00ff",
        },
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

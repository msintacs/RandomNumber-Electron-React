const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        "SUIT-Regular": ["SUIT-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
    },
  },
};

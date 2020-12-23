const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryBG: "var(--color-bg-primary)",
        secondaryBG: "var(--color-bg-secondary)",
        primaryTXT: "var(--color-text-primary)",
        secondaryTXT: "var(--color-text-secondary)",
        accentTXT: "var(--color-text-accent)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

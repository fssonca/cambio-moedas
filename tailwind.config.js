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
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

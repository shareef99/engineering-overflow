const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: {
          bg: {
            DEFAULT: "var(--primary-bg)",
            20: "var(--primary-bg-20)",
            40: "var(--primary-bg-40)",
            60: "var(--primary-bg-60)",
            80: "var(--primary-bg-80)",
            90: "var(--primary-bg-90)",
          },
          text: {
            DEFAULT: "var(--primary-text)",
            20: "var(--primary-text-20)",
            40: "var(--primary-text-40)",
            60: "var(--primary-text-60)",
            80: "var(--primary-text-80)",
            90: "var(--primary-text-90)",
          },
        },
      },
    },
  },
  plugins: [],
};

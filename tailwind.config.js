/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      background: {
        mainWhite: "var(--main-white)",
        mainGray: "var(--main-gray)",
        mainGrayLight: "var(--main-gray-light)",
        accent: "var(--accent)",
        accentHover: "var(--accent-hover)",
        accentLight: "var(--accent-light)",
      },
      colors: {
        mainWhite: "var(--main-white)",
        mainGray: "var(--main-gray)",
        mainGrayLight: "var(--main-gray-light)",
        accent: "var(--accent)",
        accentHover: "var(--accent-hover)",
        accentLight: "var(--accent-light)",
      },
      borderRadius: {
        custom: "4px",
      },
      boxShadow: {
        custom: "0px 0px 20px -10px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pingPong: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(50, 50))' },
        }
      },
      colors: {
        mainPurple: "#5709A7",
        black: "#000316",
        offWhite: "#D9D9D9",
        formbutton: "#00093D",
        borderPurple: "rgba(90, 1, 178, 0.37)",
      },
      fontFamily: {
        bebas: ["Bebas Neue"],
        oxanium: ["Oxanium", "sans-serif"],
      },
      fontSize: {
        xss:"0.75rem",
        xs: "1.5rem",
        sm: "1.625rem",
        md: "1.875rem",
        lg: "3.125rem",
        xl: "3.75rem",
      },
    },
  },
  plugins: [],
};

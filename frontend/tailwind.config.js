/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8700Fc", // Morado principal
        secondary: "#83E1EC", // Celeste
        white: "#FFFFFF",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"], // Tipografía Nunito
      },
    },
  },
  plugins: [],
};

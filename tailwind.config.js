/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
        Hind: ["Hind"],
        Amatic: ["Amatic SC"],
        Alegreya: ["Alegreya"],
        English: ["IM Fell English"],
        Cormorant: ["Cormorant Garamond"],
        Inconsolata: ["Inconsolata"],
      },
      colors: {
        accentDecoration: "#566E3D",
        primaryGreen: "#006633",
        primaryGreenDark: "#005229",
        primaryGreenLight: "#4FAF98",
        almostWhite: "#F6F6F5",
      },
      padding: {
        "1/2": "50%",
        full: "100%",
      },
      top: {
        "2/5": "40%",
      },
    },
  },
  plugins: [],
};

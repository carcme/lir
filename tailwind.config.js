/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
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
      screens: {
        xxs: "350px",
        xs: "480px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },

      padding: {
        "1/2": "50%",
        full: "100%",
      },
      top: {
        "2/5": "40%",
      },
      backgroundImage: {
        warmGlow: 'url("assets/images/lir_bar_warm_glow.webp")',
        warmGlowSm: 'url("assets/images/small/lir_bar_warm_glow.webp")',

        warmOutside: 'url("assets/images/lir_outside_warm.webp")',
        warmOutsideSm: 'url("assets/images/small/lir_outside_warm.webp")',

        sportsOutside: 'url("assets/images/lir_outside_sports.webp")',
        sportsOutsideSm: 'url("assets/images/small/lir_outside_sports.webp")',

        welcome: 'url("assets/images/lir_welcome.webp")',
        welcomeSm: 'url("assets/images/small/lir_welcome.webp")',

        relaxed: 'url("assets/images/lir_relaxed_pub_garden.webp")',
        relaxedSm: 'url("assets/images/small/lir_relaxed_pub_garden.webp")',
      },
      keyframes: {
        fall: {
          "0%": { transform: "translate(0%,-150%) skewX(0deg)" },
          "50%": { transform: "translate(0%,0%) skewX(-30deg)" },
          "100%": { transform: "translate(0%,150%) skewX(0deg)" },
        },
        txtBlur: {
          from: { filter: "blur(50px) opacity(0)" },
          to: { filter: "blur(0px) opacity(1)" },
        },
        bgBlur: {
          from: { filter: "blur(50px)", transform: "scale(1.2)" },
          to: { filter: "blur(0px)", transform: "scale(1)" },
        },
        shuffle: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(2px)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(-30deg)" },
          "50%": { transform: "rotate(30deg)" },
        },
        fadeIn: {
          from: { filter: "opacity(0)" },
          to: { filter: "opacity(1)" },
        },
        shimmer: {
          "100%": { left: "125%" },
        },

        flash: {
          from: {
            transform: "before:scale(0)",
          },
          to: {
            transform: "before:scale(1)",
          },
        },
      },
      animation: {
        fall: "fall 2s ease-in-out infinite",
        txtBlur: "txtBlur 0.8s 0.1s backwards",
        bgBlur: "bgBlur 1s",
        fadeIn: "fadeIn 1s 0.5s backwards",
        flash: "flash 0.5s ",
        shuffle: "shuffle 0.5s infinite linear",
        wave: "wave 1s ease-in-out infinite ",
        shimmer: "shimmer, 1s infinite linear",
      },
    },
  },
};

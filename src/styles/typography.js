import plugin from "tailwindcss/plugin";

export default plugin(({ matchUtilities, theme }) =>
  matchUtilities({
    "anim-delay": (value) => {
      return {
        "anim-delay": value,
      };
    },
    // more custom utility classes
  })
);

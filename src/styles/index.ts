import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",
      gray900: "#121214",
      gray800: "#202024",
      gray300: "#c4c4cc",
      gray400: "#e5e7eb",
      gray100: "#f0f0f0",

      blue500: "#083c99",
      blue300: "#2f6fe1",
    },
  },
  media: {
    bp1: "(max-width: 1023px)",
    bp2: "(max-width: 768px)",
    bp3: "(max-width: 400px)",
  },
});

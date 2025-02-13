import { roboto } from "@/app/fonts";
import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$white",
    color: "$gray800",
  },

  "body, input, textarea, button": {
    fontFamily: `${roboto.style.fontFamily}`,
    fontWeight: 400,
  },
});

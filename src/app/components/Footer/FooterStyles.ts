"use client";

import { styled } from "@/styles";
import { widthSidebar } from "@/styles/LayoutStyles";
import Image from "next/image";

export const FooterWrapper = styled("footer", {
  padding: "2rem",
  width: "100%",
  backgroundColor: "$blue500",
  position: "absolute",
  bottom: "0",
  color: "$white",
  p: {
    textAlign: "center",
  },
});

"use client";

import { styled } from "@/styles";
import { widthSidebar } from "@/styles/LayoutStyles";
import Image from "next/image";

export const HeaderWrapper = styled("header", {
  padding: "1.5rem",
  width: "100%",
  backgroundColor: "$blue500",
  margin: "0 auto",
  gap: "1rem",
  color: "$white",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
});

export const LogoWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "70%",
  maxWidth: widthSidebar,
  gap: "1rem",
  img: {
    width: "auto",
    height: "3rem",
  },
});

export const Avatar = styled(Image, {
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  "@bp1": {
    flex: "0 0 48px",
  },
});

export const ButtonHamburger = styled("button", {
  height: "2rem",
  width: "2rem",
  flex: "0 0 2rem",
  borderRadius: "0.3rem",
  border: 0,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: " center",
  color: "$blue300",
  backgroundColor: "white",
  cursor: "pointer",
  boxShadow: "0 2px 10px $gray800",
  "&:hover": {
    opacity: "0.6",
  },
  "&:focus": {
    boxShadow: "0 0 0 1px black",
  },
  svg: {
    width: "1.5rem",
    height: "1.5rem",
  },
});

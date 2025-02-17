"use client";
import Link from "next/link";
import { styled } from ".";

export const widthSidebar = "18.75rem";
export const Container = styled("div", {
  display: "flex",
  position: "relative",
});

export const ContainerWrapper = styled("div", {
  width: "100%",
  position: "relative",
});

export const MainWrapper = styled("main", {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "1.5rem 1.5rem 6.25rem",
  width: "100%",
  minHeight: "calc(100vh - 96px)",
  "@bp2": {
    padding: "0.8rem 0.8rem 6.875rem",
  },
});

export const Wrapper = styled("div", {
  marginTop: "1.5rem",
  display: "flex",
  gap: "1rem",
  img: {
    width: "467px",
    maxWidth: "100%",
  },
  div: {
    display: "flex",
    gap: "1rem",
    width: "100%",
    flexDirection: "column",
  },

  "@bp2": {
    flexDirection: "column",
  },
});

export const Button = styled(Link, {
  padding: "0.5rem",
  borderRadius: "0.3rem",
  border: 0,
  color: "$white",
  backgroundColor: "$blue500",
  opacity: "0.9",
  cursor: "pointer",
  textDecoration: "none",
  textAlign: "center",

  "&:hover": {
    opacity: "1",
    boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;",
  },
  "&:focus": {
    opacity: "1",
    boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;",
  },
});

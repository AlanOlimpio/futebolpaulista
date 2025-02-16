"use client";
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

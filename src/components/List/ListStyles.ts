"use client";

import { styled } from "@/styles";

export const WrapperTitleList = styled("div", {
  display: " flex",
  gap: "1rem",
  justifyContent: " space-between",
  marginTop: "1rem",
  background: "$blue300",
  padding: "1.5rem",
  color: "$white",
  width: "100%",
  h2: {
    fontSize: "1.4rem",
  },
});
export const ContentList = styled("div", {
  display: "grid",
  gap: "1rem",
  background: "$gray100",
  padding: "1.5rem",
  width: "100%",
  gridTemplateColumns: "1fr 1fr",
  "@bp1": {
    gridTemplateColumns: "1fr",
  },
});

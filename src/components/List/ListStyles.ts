"use client";

import { styled } from "@/styles";

export const WrapperTitleList = styled("div", {
  display: " flex",
  gap: "1rem",
  justifyContent: " space-between",
  marginTop: "1rem",
  background: "$gray400",
  padding: "1.5rem",
  color: "$gray900",
  alignItems: "center",
  width: "100%",
  h2: {
    fontSize: "1.4rem",
  },
  "@bp2": {
    padding: "0.8rem",
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
  "@bp2": {
    padding: "0.8rem",
  },
});

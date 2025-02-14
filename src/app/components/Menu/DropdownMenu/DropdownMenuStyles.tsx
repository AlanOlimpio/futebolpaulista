"use client";

import { styled } from "@/styles";

export const DropdownMenuWrapper = styled("li", {
  display: "block",
  marginBottom: "20px",
  transition: "0.3s",
  a: {
    marginBottom: "20px",
    padding: "8px",
    transition: " 0.3s",
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "$white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "$blue500",
      color: "$white",
    },
  },
});

export const WrapperContentDropdownMenu = styled("ul", {
  display: "block",
  width: "100%",
  padding: "1.5rem 1rem 0.5rem",
  borderRadius: "0.3rem",
  background: "$gray100",
});

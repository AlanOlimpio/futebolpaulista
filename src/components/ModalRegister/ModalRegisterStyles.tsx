"use client";

import { Dialog } from "radix-ui";

import { styled } from "@/styles";

export const ModalRegisterButton = styled("button", {
  padding: "0.5rem",
  borderRadius: "0.3rem",
  border: 0,
  color: "$white",
  backgroundColor: "$blue500",
  opacity: "0.9",
  cursor: "pointer",

  "&:hover": {
    opacity: "1",
    boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;",
    backgroundColor: "$gray800",
  },
  "&:focus": {
    opacity: "1",
    boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;",
  },
});

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: "0",
  background: "rgba(0, 0, 0, 0.75)",
  zIndex: "2",
});

export const Content = styled(Dialog.Content, {
  width: "100%",
  maxWidth: "32rem",
  borderRadius: "6px",
  padding: "2rem 3rem",
  backgroundColor: "$white",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "95%",
  overflowY: "auto",
  boxShadow: "0px 0px 5px 2px rgb(0, 0, 0, 0.6)",
  zIndex: "2",
  "@bp2": {
    padding: "2rem 1.5rem",
    width: "90%",
  },
  form: {
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    input: {
      borderRadius: "6px",
      border: "0",
      width: "100%",
      backgroundColor: "$gray400",
      color: "$gray900",
      padding: "1rem",
      "&::pacheholder": {
        color: "gray-500",
      },
    },
    button: {
      padding: "0.5rem",
      borderRadius: "0.3rem",
      border: 0,
      color: "$white",
      backgroundColor: "$blue500",
      opacity: "0.9",
      cursor: "pointer",
      gridColumn: "1 / span 2",
      "@bp2": {
        gridColumn: "1 / span 1",
      },
      "&:hover": {
        opacity: "1",
        boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;",
      },
      "&:focus": {
        opacity: "1",
        boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;",
      },
      "&:disabled": {
        opacity: "0.6",
        cursor: "not-allowed",
      },
      " &:not(:disabled):hover": {
        opacity: "0.6",
      },
    },
    "@bp2": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const CloseButtom = styled(Dialog.Close, {
  position: "absolute",
  backgroundColor: "transparent",
  border: "0",
  top: "1.5rem",
  right: "2.5rem",
  lineHeight: "0",
  cursor: "pointer",
  color: "$blue500",
});

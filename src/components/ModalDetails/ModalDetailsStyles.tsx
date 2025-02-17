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
  boxShadow: "0px 0px 5px 2px rgb(0, 0, 0, 0.6)",
  zIndex: "2",
  p: {
    wordBreak: "break-word",
  },
  "@bp2": {
    padding: "2rem 1.5rem",
    width: "90%",
  },
});

export const Wrapper = styled("div", {
  marginTop: "1.5rem",
  display: "grid",
  gap: "1rem",
  width: "100%",
  p: {
    wordBreak: "break-word",
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
  color: "blue",
});

export const ContentImageNameProps = styled("div", {
  display: "grid",
  gap: "0.5rem",
  width: "100%",
  gridTemplateColumns: "1fr",
  alignItems: "center",
  alignContent: "baseline",
});

export const WrapperAvatarIconProps = styled("div", {
  width: "80px",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "$gray100",
  marginBottom: "1rem",
});

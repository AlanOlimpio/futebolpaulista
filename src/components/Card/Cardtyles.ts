"use client";

import { styled } from "@/styles";

export const WrapperCardProps = styled("div", {
  display: " flex",
  gap: "1rem",
  background: "$white",
  flexDirection: "column",
});
export const ContentCardProps = styled("div", {
  display: "grid",
  gap: "1rem",
  padding: "1.5rem",
  width: "100%",
  gridTemplateColumns: "128px 1fr",
  "@bp2": {
    padding: "1rem  0.8rem",
    gridTemplateColumns: "112px 1fr",
    gap: "0.5rem",
  },
});

export const ContentImageNameProps = styled("div", {
  display: "grid",
  gap: "0.5rem",
  padding: "0 1.5rem",
  width: "100%",
  gridTemplateColumns: "1fr",
  alignItems: "center",
  img: {
    marginBottom: "1rem",
    objectFit: "cover",
  },
  p: {
    fontWeight: "500",
    background: "$blue300",
    color: "$white",
    padding: "0.2rem 0.5rem",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  alignContent: "baseline",
  borderRight: "1px solid $gray300",
  "@bp2": {
    padding: "0 0.5rem 0 1rem",
    p: {
      fontSize: "0.875rem",
    },
  },
  "@bp3": {
    padding: "0 0.5rem 0 1rem",
    p: {
      fontSize: "0.75rem",
    },
  },
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

export const WrapperInfoProps = styled("div", {
  display: "grid",
  gap: "0.5rem",
  padding: "0",
  width: "100%",
  gridTemplateColumns: "1fr",
  alignItems: "baseline",
  alignContent: "baseline",
  strong: {
    fontWeight: "500",
  },
  p: {
    fontWeight: "500",
    background: "$blue300",
    color: "$white",
    padding: "0.2rem 0.5rem",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  span: {
    wordBreak: "break-word",
  },
  "@bp2": {
    p: {
      fontSize: "0.875rem",
    },
    span: {
      fontSize: "0.75rem  ",
    },
  },
  "@bp3": {
    p: {
      fontSize: "0.75rem  ",
    },
    span: {
      fontSize: "0.625rem  ",
    },
  },
});

export const FooterCardProps = styled("div", {
  display: "flex",
  gap: "1rem",
  paddingTop: "1rem",
  width: "100%",
  justifyContent: "flex-end",
  borderTop: "1px solid $gray300",
  gridColumn: "1/ span 2",
});

export const Button = styled("button", {
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
  },
  "&:focus": {
    opacity: "1",
    boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;",
  },
});

"use client";

import { styled } from "@/styles";

export const MenuWrapper = styled("ul", {
  position: "relative",
  width: "100%",
  a: {
    textDecoration: "none",
    display: "block",
    fontWeight: "500",
    lineHeight: "1",
    borderRadius: "4px",
    fontSize: "1rem",
    color: "$gray900",
  },
});

export const LinkStyle = styled("li", {
  display: "block",
  marginBottom: "20px",
  a: {
    padding: "8px",
    transition: " 0.3s",
    backgroundColor: "$white",
    "&:hover": {
      backgroundColor: "$blue500",
      color: "$white",
    },
  },
});

type StitchesLinkProps = React.ComponentProps<typeof LinkStyle>;

type Props = {
  isActive?: boolean;
} & StitchesLinkProps;

export const CustomLink = ({ children, isActive }: Props) => {
  let isActiveCss = {};

  if (isActive) {
    isActiveCss = {
      a: {
        color: "$white",
        backgroundColor: "$blue500",
      },
      div: {
        a: {
          color: "$white",
          backgroundColor: "$blue500",
        },
      },
    };
  }

  return <LinkStyle css={isActiveCss}>{children}</LinkStyle>;
};

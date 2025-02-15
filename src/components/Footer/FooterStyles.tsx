"use client";

import { styled } from "@/styles";
import { widthSidebar } from "@/styles/LayoutStyles";

export const FooterWrapper = styled("footer", {
  padding: "2rem",
  width: "100%",
  backgroundColor: "$blue500",
  position: "fixed",
  bottom: "0",
  right: " 0",
  color: "$white",
  transition: "width 150ms linear 150ms",
  p: {
    textAlign: "center",
  },
});

type StitchesFooterProps = React.ComponentProps<typeof FooterWrapper>;

type Props = {
  isOpen: boolean;
} & StitchesFooterProps;

export const CustomFooter = ({ children, isOpen }: Props) => {
  let isOpenCss = {};

  if (isOpen) {
    isOpenCss = {
      width: `calc(100% - ${widthSidebar})`,
      "@bp1": {
        width: "100%",
      },
    };
  }
  if (!isOpen) {
    isOpenCss = {
      width: "100%",
    };
  }

  return <FooterWrapper css={isOpenCss}>{children}</FooterWrapper>;
};

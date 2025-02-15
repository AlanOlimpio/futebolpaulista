"use client";

import { styled } from "@/styles";
import { widthSidebar } from "@/styles/LayoutStyles";

export const SidebarWrapper = styled("div", {
  width: "100%",
  maxWidth: widthSidebar,
  minHeight: "100%",
  maxHeight: "100%",
  overflowY: "auto",
  flex: `1 0 ${widthSidebar}`,
  padding: "20px",
  borderRight: "solid 1px $gray300",
  background: "$white",
  transition: "margin-left 150ms linear 150ms",
  "@bp1": {
    position: "absolute",
    zIndex: "1",
    top: "0",
    left: "0",

    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 0px 3px 0px, rgba(0, 0, 0, 0.22) 0px 30px 30px 0px",
  },
});

type StitchesAsideProps = React.ComponentProps<typeof SidebarWrapper>;

type Props = {
  isOpen: boolean;
} & StitchesAsideProps;

export const CustomAside = ({ children, isOpen }: Props) => {
  let isOpenCss = {};

  if (isOpen) {
    isOpenCss = {
      marginLeft: "0px",
    };
  }
  if (!isOpen) {
    isOpenCss = {
      marginLeft: "-300px",
    };
  }

  return <SidebarWrapper css={isOpenCss}>{children}</SidebarWrapper>;
};

"use client";
import { useSidebarStore } from "@/stores/sidebar-store-provider";
import { WrapperTitle } from "./TitleStyles";

interface TitleProps {
  title: string;
}
function TitlePage({ title }: TitleProps) {
  return (
    <WrapperTitle>
      <h1>{title}</h1>
    </WrapperTitle>
  );
}

export default TitlePage;

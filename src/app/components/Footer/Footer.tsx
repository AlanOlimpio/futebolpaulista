"use client";
import { useSidebarStore } from "@/stores/sidebar-store-provider";
import { CustomFooter } from "./FooterStyles";

function Footer() {
  const { isOpen } = useSidebarStore((state) => state);
  const date = new Date();
  const year = date.getFullYear();
  return (
    <CustomFooter isOpen={isOpen}>
      <p>{year} - Futebol © Todos os direitos reservados.</p>
    </CustomFooter>
  );
}

export default Footer;

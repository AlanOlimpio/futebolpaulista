import Image from "next/image";
import {
  Avatar,
  ButtonHamburger,
  HeaderWrapper,
  LogoWrapper,
} from "./HeaderStyles";
import logoImg from "../../assets/logo.png";
import avatarImg from "../../assets/avatar.jpg";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useSidebarStore } from "@/stores/sidebar-store-provider";
function Header() {
  const { updateSidebar } = useSidebarStore((state) => state);

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <ButtonHamburger onClick={updateSidebar} aria-label="menu options">
          <HamburgerMenuIcon />
        </ButtonHamburger>
        <Image src={logoImg} alt="" />
        Federação Paulista
      </LogoWrapper>
      <Avatar src={avatarImg} alt="" />
    </HeaderWrapper>
  );
}

export default Header;

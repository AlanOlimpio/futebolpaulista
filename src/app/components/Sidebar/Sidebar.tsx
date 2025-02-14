import Image from "next/image";
import Link from "next/link";
import { CustomAside } from "./SidebarStyles";
import { useSidebarStore } from "@/stores/sidebar-store-provider";
import Menu from "../Menu";
function Sidebar() {
  const { isOpen } = useSidebarStore((state) => state);

  return (
    <CustomAside isOpen={isOpen}>
      <Menu />
    </CustomAside>
  );
}

export default Sidebar;

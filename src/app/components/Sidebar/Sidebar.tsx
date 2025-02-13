import Image from "next/image";
import Link from "next/link";
import { CustomAside, SidebarWrapper } from "./SidebarStyles";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/stores/sidebar-store-provider";
function Sidebar() {
  const { isOpen } = useSidebarStore((state) => state);

  return (
    <CustomAside isOpen={isOpen}>
      <p>Sidebar</p>
    </CustomAside>
  );
}

export default Sidebar;

"use client";
import * as React from "react";

import { usePathname } from "next/navigation";
import { CustomLink, MenuWrapper } from "./MenuStyles";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

function Menu() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <MenuWrapper>
      <CustomLink isActive={pathname === "/"}>
        <Link href="/">Home</Link>
      </CustomLink>
      <DropdownMenu title="Submenu">
        <CustomLink isActive={pathname === "/teste-1"}>
          <Link href="/teste-1">Teste 1</Link>
        </CustomLink>
        <CustomLink isActive={pathname === "/teste-2"}>
          <Link href="/teste-2">Teste 2</Link>
        </CustomLink>
        <CustomLink isActive={pathname === "/teste-3"}>
          <Link href="/teste-3">Teste 3</Link>
        </CustomLink>
      </DropdownMenu>
      <CustomLink isActive={pathname === "/dashboard"}>
        <Link href="/dashboard">Dashboard</Link>
      </CustomLink>
      <CustomLink>
        <Link target="_blank" href="https://github.com/AlanOlimpio">
          GitHub
        </Link>
      </CustomLink>
      <DropdownMenu title="Submenu 2">
        <CustomLink isActive={pathname === "/teste-4"}>
          <Link href="/teste-4">Dashboard 2</Link>
        </CustomLink>
      </DropdownMenu>
    </MenuWrapper>
  );
}

export default Menu;

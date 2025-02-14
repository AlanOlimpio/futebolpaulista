"use client";
import {
  DropdownMenuWrapper,
  WrapperContentDropdownMenu,
} from "./DropdownMenuStyles";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
interface DropdownMenuProps {
  title: string;
  children: React.ReactNode;
}

function DropdownMenu({ title, children }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenuWrapper>
      <a onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </a>
      {isOpen && (
        <WrapperContentDropdownMenu>{children}</WrapperContentDropdownMenu>
      )}
    </DropdownMenuWrapper>
  );
}

export default DropdownMenu;

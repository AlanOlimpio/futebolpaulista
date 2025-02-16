"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import {
  CloseButtom,
  Content,
  ModalRegisterButton,
  Overlay,
} from "./ModalRegisterStyles";

function ModalRegister() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ModalRegisterButton>Adicionar</ModalRegisterButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Description />
          <Dialog.Title>Adicionar</Dialog.Title>
          <CloseButtom>
            <X size={24} />
          </CloseButtom>
          Form
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ModalRegister;

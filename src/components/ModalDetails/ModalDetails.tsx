"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import {
  CloseButtom,
  Content,
  ContentImageNameProps,
  ModalRegisterButton,
  Overlay,
  Wrapper,
  WrapperAvatarIconProps,
} from "./ModalDetailsStyles";

import { CardProps } from "../Card/Card";
import Image from "next/image";
import { AvatarIcon } from "@radix-ui/react-icons";

function ModalDetails(person: CardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ModalRegisterButton>Cadastro completo</ModalRegisterButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Description />
          <Dialog.Title>Detalhes</Dialog.Title>
          <CloseButtom>
            <X size={24} />
          </CloseButtom>
          <Wrapper>
            <ContentImageNameProps>
              {person.photoPersonUrl ? (
                <Image
                  src={person.photoPersonUrl}
                  width={80}
                  height={80}
                  alt={person.name}
                />
              ) : (
                <WrapperAvatarIconProps>
                  <AvatarIcon width={50} height={50} />
                </WrapperAvatarIconProps>
              )}
            </ContentImageNameProps>
            <p>
              <strong>Nome:</strong> {person.name}
            </p>
            <p>
              <strong>Idade:</strong> {person.age}
            </p>
            {person.status && (
              <p>
                <strong>Status:</strong> {person.status}
              </p>
            )}
            <p>
              <strong>Data de nacimento:</strong> {person.dateBirth}
            </p>
            <p>
              <strong>CPF:</strong> {person.cpf}
            </p>
            <p>
              <strong>E-mail:</strong> {person.email}
            </p>
            <p>
              <strong>Endereço:</strong> {person.fullAddress}
            </p>
            <p>
              <strong>Telefone:</strong> {person.telephone}
            </p>
          </Wrapper>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ModalDetails;

"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";

import {
  CloseButtom,
  Content,
  ModalRegisterButton,
  Overlay,
} from "./ModalRegisterStyles";
import { useForm } from "react-hook-form";

const registerFormSchema = z.object({
  name: z.string(),
  age: z.string(),
  cpf: z
    .string({
      message: "CPF é obrigatório.",
    })
    .refine(
      (doc) => {
        const replacedDoc = doc.replace(/\D/g, "");
        return replacedDoc.length >= 11;
      },
      { message: "CPF deve conter no mínimo 11 caracteres." }
    ),
  email: z.string(),
  telephone: z.string(),
  fullAddress: z.string(),
  dateBirth: z.string(),
  status: z.string(),
});

type RegisterFormInputs = z.infer<typeof registerFormSchema>;

function ModalRegister() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerFormSchema),
  });
  function handleRegister(data: RegisterFormInputs) {
    console.log(data);

    reset();
  }
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
          <form onSubmit={handleSubmit(handleRegister)}>
            <input
              type="text"
              placeholder="Nome"
              required
              {...register("name")}
            />
            <div>
              <input
                type="text"
                placeholder="CPF"
                required
                {...register("cpf")}
              />
              <ErrorMessage errors={errors} name="cpf" />
            </div>
            <input
              type="text"
              placeholder="Data de Nacimento"
              required
              {...register("dateBirth")}
            />
            <input
              type="text"
              placeholder="Idade"
              required
              {...register("age")}
            />
            <input
              type="text"
              placeholder="E-mail"
              required
              {...register("email")}
            />
            <input
              type="text"
              placeholder="Telefone"
              required
              {...register("telephone")}
            />
            <input
              type="text"
              placeholder="Endereço"
              required
              {...register("fullAddress")}
            />
            <input
              type="text"
              placeholder="Status"
              required
              {...register("status")}
            />

            <button type="submit" disabled={isSubmitting}>
              Adicionar
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ModalRegister;

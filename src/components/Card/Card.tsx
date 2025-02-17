import {
  ContentCardProps,
  ContentImageNameProps,
  FooterCardProps,
  WrapperAvatarIconProps,
  WrapperCardProps,
  WrapperInfoProps,
} from "./Cardtyles";
import { AvatarIcon } from "@radix-ui/react-icons";

import Image, { StaticImageData } from "next/image";
import ModalDetails from "../ModalDetails";

export interface CardProps {
  photoPersonUrl?: string | StaticImageData;
  name: string;
  age: string;
  cpf?: string;
  email?: string;
  telephone?: string;
  fullAddress?: string;
  dateBirth?: string;
  status?: string;
}

function Card(person: CardProps) {
  return (
    <WrapperCardProps>
      <ContentCardProps>
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
          <p>{person.age}</p>
          {person.status && <p>{person.status}</p>}
        </ContentImageNameProps>
        <WrapperInfoProps>
          <p>{person.name}</p>
          <span>
            <strong>Data de nacimento:</strong> {person.dateBirth}
          </span>
          <span>
            <strong>CPF:</strong> {person.cpf}
          </span>
          <span>
            <strong>E-mail:</strong> {person.email}
          </span>
          <span>
            <strong>Endereço:</strong> {person.fullAddress}
          </span>
          <span>
            <strong>Telefone:</strong> {person.telephone}
          </span>
        </WrapperInfoProps>
        <FooterCardProps>
          <ModalDetails {...person} />
        </FooterCardProps>
      </ContentCardProps>
    </WrapperCardProps>
  );
}
export default Card;

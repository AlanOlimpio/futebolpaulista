import {
  Button,
  ContentCardProps,
  ContentImageNameProps,
  FooterCardProps,
  WrapperAvatarIconProps,
  WrapperCardProps,
  WrapperInfoProps,
} from "./Cardtyles";
import { AvatarIcon } from "@radix-ui/react-icons";

import Image, { StaticImageData } from "next/image";

interface CardProps {
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

function Card({
  name,
  age,
  cpf,
  dateBirth,
  email,
  fullAddress,
  photoPersonUrl,
  status,
  telephone,
}: CardProps) {
  return (
    <WrapperCardProps>
      <ContentCardProps>
        <ContentImageNameProps>
          {photoPersonUrl ? (
            <Image src={photoPersonUrl} width={80} height={80} alt={name} />
          ) : (
            <WrapperAvatarIconProps>
              <AvatarIcon width={50} height={50} />
            </WrapperAvatarIconProps>
          )}
          <p>{age}</p>
          {status && <p>{status}</p>}
        </ContentImageNameProps>
        <WrapperInfoProps>
          <p>{name}</p>
          <span>
            <strong>Data de nacimento:</strong> {dateBirth}
          </span>
          <span>
            <strong>CPF:</strong> {cpf}
          </span>
          <span>
            <strong>E-mail:</strong> {email}
          </span>
          <span>
            <strong>Endereço:</strong> {fullAddress}
          </span>
          <span>
            <strong>Telefone:</strong> {telephone}
          </span>
        </WrapperInfoProps>
        <FooterCardProps>
          <Button>Cadastro completo</Button>
        </FooterCardProps>
      </ContentCardProps>
    </WrapperCardProps>
  );
}
export default Card;

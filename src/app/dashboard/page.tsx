import Card from "@/components/Card/Card";
import List from "@/components/List";
import TitlePage from "@/components/TitlePage";
import { MainWrapper } from "@/styles/LayoutStyles";
import { Metadata } from "next";

import avatarImg from "../../assets/avatar.jpg";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard de informacões Usuário",
};

export default async function Page() {
  return (
    <MainWrapper>
      <TitlePage title="Dashboard" />
      <List title="Lista de Pessoas">
        <Card
          name="Alan Olimpio"
          photoPersonUrl={avatarImg}
          age="37 anos"
          status="Ativo"
          dateBirth="29/12/1987"
          cpf="49887987897"
          email="alancleyton.olimpio@gmail.com"
          fullAddress="Rua Antônio Ricardo, Carapicuíba - SP"
          telephone="11999999999"
        />
        <Card
          name="Alan Olimpio"
          photoPersonUrl={avatarImg}
          age="37 anos"
          status="Ativo"
          dateBirth="29/12/1987"
          cpf="49887987897"
          email="alancleyton.olimpio@gmail.com"
          fullAddress="Rua Antônio Ricardo, Carapicuíba - SP"
          telephone="11999999999"
        />
        <Card
          name="Alan Olimpio"
          age="37 anos"
          status="Ativo"
          dateBirth="29/12/1987"
          cpf="49887987897"
          email="alancleyton.olimpio@gmail.com"
          fullAddress="Rua Antônio Ricardo, Carapicuíba - SP"
          telephone="11999999999"
        />
      </List>
    </MainWrapper>
  );
}

import List from "@/components/List";
import TitlePage from "@/components/TitlePage";
import { MainWrapper } from "@/styles/LayoutStyles";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard de informacões Usuário",
};

export default async function Page() {
  return (
    <MainWrapper>
      <TitlePage title="Dashboard" />
      <List title="Lista de Pessoas">
        <span>1</span>
        <span>2</span>
      </List>
    </MainWrapper>
  );
}

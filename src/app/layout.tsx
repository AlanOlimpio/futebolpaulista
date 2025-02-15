import type { Metadata } from "next";

import { ServerStylesheet } from "@/ServerStylesheet";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Container, ContainerWrapper } from "@/styles/LayoutStyles";
import { SidebarStoreProvider } from "@/stores/sidebar-store-provider";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Futebol",
  description: "Portal de informações de Futebol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ServerStylesheet>
          <SidebarStoreProvider>
            <Header />
            <Container>
              <Sidebar />
              <ContainerWrapper>
                {children}
                <Footer />
              </ContainerWrapper>
            </Container>
          </SidebarStoreProvider>
        </ServerStylesheet>
      </body>
    </html>
  );
}

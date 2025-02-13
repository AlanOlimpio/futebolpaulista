import { FooterWrapper } from "./FooterStyles";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <FooterWrapper>
      <p>
        {year} - Federação Paulista de Futebol © Todos os direitos reservados.
      </p>
    </FooterWrapper>
  );
}

export default Footer;

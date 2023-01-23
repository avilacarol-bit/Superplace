import React from "react";
import cesta from "../../assests/cesta.png";
import { BasketLogo, ContainerHeader, ContainerLogo, SubTitle, Title } from "./styled";
function Header() {
  return (
    <ContainerHeader>
      <ContainerLogo>
        <BasketLogo src={cesta} />
        <Title>Superplace</Title>
        <SubTitle>Aqui tem qualidade.</SubTitle>
      </ContainerLogo>
    </ContainerHeader>
  );
}

export default Header;

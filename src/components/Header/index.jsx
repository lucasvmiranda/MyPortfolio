import React from "react";
import logo from "../../assets/images/logo.png";
import { Container, AreaButtons, AreaLogo, ButtonText, Button } from "./styles";

const Header = () => {
  return (
    <Container>
      <AreaLogo>
        <img src={logo} style={{ display: "none" }} />
      </AreaLogo>
      <AreaButtons>
        <Button>
          <ButtonText>Home</ButtonText>
        </Button>
        <Button>
          <ButtonText>Sobre</ButtonText>
        </Button>
        <Button>
          {" "}
          <ButtonText>Experiências</ButtonText>
        </Button>
        <Button>
          {" "}
          <ButtonText>Pessoal</ButtonText>
        </Button>
        <Button>
          <ButtonText>Contato</ButtonText>
        </Button>
      </AreaButtons>
    </Container>
  );
};

export default Header;

import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import {
  Container,
  AreaButtons,
  AreaLogo,
  ButtonText,
  Button,
  AreaMenu,
  AreaButtonsResponsive,
  BarHambuguerMenu,
  MenuHambuguerArea,
} from "./styles";

const Header = ({ home, about, experience, person, contact }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container>
      <AreaLogo>
        <img src={logo} style={{ display: "none" }} />
      </AreaLogo>

      <AreaButtons>
        <Button>
          <ButtonText>
            <a style={{ color: "white" }} href={home}>
              Home
            </a>
          </ButtonText>
        </Button>
        <Button>
          <ButtonText>
            <a style={{ color: "white" }} href={about}>
              Sobre
            </a>
          </ButtonText>
        </Button>
        <Button>
          {" "}
          <ButtonText>
            <a style={{ color: "white" }} href={experience}>
              Experiência
            </a>
          </ButtonText>
        </Button>
        <Button>
          {" "}
          <ButtonText>
            <a style={{ color: "white" }} href={person}>
              Pessoal
            </a>
          </ButtonText>
        </Button>
        <Button>
          <ButtonText>
            <a style={{ color: "white" }} href={contact}>
              Contato
            </a>
          </ButtonText>
        </Button>
      </AreaButtons>
      <MenuHambuguerArea onClick={() => setOpenMenu(!openMenu)}>
        <BarHambuguerMenu />
        <BarHambuguerMenu />
        <BarHambuguerMenu />
      </MenuHambuguerArea>
      {openMenu === true ? (
        <AreaMenu>
          <AreaButtonsResponsive>
            <Button>
              <ButtonText>
                <a style={{ color: "white" }} href={home}>
                  Home
                </a>
              </ButtonText>
            </Button>
            <Button>
              <ButtonText>
                <a style={{ color: "white" }} href={about}>
                  Sobre
                </a>
              </ButtonText>
            </Button>
            <Button>
              {" "}
              <ButtonText>
                <a style={{ color: "white" }} href={experience}>
                  Experiência
                </a>
              </ButtonText>
            </Button>
            <Button>
              {" "}
              <ButtonText>
                <a style={{ color: "white" }} href={person}>
                  Pessoal
                </a>
              </ButtonText>
            </Button>
            <Button>
              <ButtonText>
                <a style={{ color: "white" }} href={contact}>
                  Contato
                </a>
              </ButtonText>
            </Button>
          </AreaButtonsResponsive>
        </AreaMenu>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Header;

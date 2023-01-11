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
  Redirect,
} from "./styles";

const Header = ({ home, about, experience, person, contact }) => {
  const [openMenu, setOpenMenu] = useState(false);

  console.log("terste", openMenu);

  return (
    <Container>
      <AreaLogo>
        <img src={logo} style={{ display: "none" }} />
      </AreaLogo>

      <AreaButtons>
        <Button>
          <ButtonText>
            <Redirect href={home}>Home</Redirect>
          </ButtonText>
        </Button>
        <Button>
          <ButtonText>
            <Redirect href={about}>Sobre</Redirect>
          </ButtonText>
        </Button>
        <Button>
          {" "}
          <ButtonText>
            <Redirect href={experience}>Experiência</Redirect>
          </ButtonText>
        </Button>
        <Button>
          {" "}
          <ButtonText>
            <Redirect href={person}>Pessoal</Redirect>
          </ButtonText>
        </Button>
        <Button>
          <ButtonText>
            <Redirect href={contact}>Contato</Redirect>
          </ButtonText>
        </Button>
      </AreaButtons>

      {openMenu === true ? (
        <AreaMenu>
          <AreaButtonsResponsive>
            <Button>
              <ButtonText>
                <a
                  onClick={() => setOpenMenu(false)}
                  style={{ color: "white" }}
                  href={home}
                >
                  Home
                </a>
              </ButtonText>
            </Button>
            <Button>
              <ButtonText>
                <a
                  onClick={() => setOpenMenu(false)}
                  style={{ color: "white" }}
                  href={about}
                >
                  Sobre
                </a>
              </ButtonText>
            </Button>
            <Button>
              {" "}
              <ButtonText>
                <a
                  onClick={() => setOpenMenu(false)}
                  style={{ color: "white" }}
                  href={experience}
                >
                  Experiência
                </a>
              </ButtonText>
            </Button>
            <Button>
              {" "}
              <ButtonText>
                <a
                  onClick={() => setOpenMenu(false)}
                  style={{ color: "white" }}
                  href={person}
                >
                  Pessoal
                </a>
              </ButtonText>
            </Button>
            <Button>
              <ButtonText>
                <a
                  onClick={() => setOpenMenu(false)}
                  style={{ color: "white" }}
                  href={contact}
                >
                  Contato
                </a>
              </ButtonText>
            </Button>
          </AreaButtonsResponsive>
        </AreaMenu>
      ) : (
        ""
      )}
      <MenuHambuguerArea onClick={() => setOpenMenu(!openMenu)}>
        <BarHambuguerMenu />
        <BarHambuguerMenu />
        <BarHambuguerMenu />
      </MenuHambuguerArea>
    </Container>
  );
};

export default Header;

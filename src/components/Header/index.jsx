import React, { useState } from "react";
import * as S from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";

function Header() {
  const [open, setOpen] = useState(false);

  const Links = ({ margin }) => (
    <>
      <S.ButtonMenu style={{ marginTop: margin }}>
        <a href="#home">Home</a>
      </S.ButtonMenu>
      <S.ButtonMenu style={{ marginTop: margin }}>
        <a href="#about">Sobre</a>
      </S.ButtonMenu>
      <S.ButtonMenu style={{ marginTop: margin }}>
        <a href="#experience">Experiência</a>
      </S.ButtonMenu>
      <S.ButtonMenu style={{ marginTop: margin }}>
        <a href="#person">Pessoal</a>
      </S.ButtonMenu>
      <S.ButtonMenu style={{ marginTop: margin }}>
        <a href="#contact">Contato</a>
      </S.ButtonMenu>
    </>
  );

  return (
    <>
      <S.Container>
        <S.MenuHamburguerButton onClick={() => setOpen(!open)}>
          <GiHamburgerMenu size={24} color="white" />
        </S.MenuHamburguerButton>
        <S.Content>
          <S.AreaButtons>
            <Links margin={0} />
          </S.AreaButtons>
        </S.Content>
      </S.Container>
      {open ? (
        <S.BackgroundSideMenu onClick={() => setOpen(!!false)}>
          <S.SideMenu>
            <S.CloseButtonMenu onClick={() => setOpen(!!false)}>
              <AiOutlineCloseSquare size={24} color="white" />
            </S.CloseButtonMenu>
            <S.AreaButtonsHamburguerMenu>
              <Links margin={20} />
            </S.AreaButtonsHamburguerMenu>
          </S.SideMenu>
        </S.BackgroundSideMenu>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;

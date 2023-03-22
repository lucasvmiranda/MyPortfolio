import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeAnimation = keyframes`${fadeIn}`;

export const Container = styled.header`
  background: linear-gradient(63deg, rgba(0,212,255,0.25253851540616246) 0%, rgba(105,89,205,1) 65%);
  padding: 20px 0px;
  align-items: center;  
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  width: 100vw;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const Content = styled.div`
  width: 100vw;
  max-width: 1250px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;;
`;

export const AreaButtons = styled.div`
  width: 40%;
  margin-right:50px;
  align-items: flex-end;
  display: flex;
  justify-content: space-between;

  @media (max-width: 830px) {
    display: none;
  }
`;

export const ButtonMenu = styled.div`
  height: 20px;
  font-size: 14px;
  color: white;
  display: grid;
  justify-content: center;
  text-align: center;

  :hover {
    color: #dff5ff;
    transition: all 0.5s linear;
  }

  @media (max-width: 970px) {
    font-size: 12px;
    height: 30px;
  }
`;

export const AreaHamburguer = styled.div`
  height: 100%;
  align-items: center;
  display: grid;
  padding: 0 15px 0 0;
  justify-content: center;

  @media (min-width: 830px) {
    display: none;
  }
`;

export const AreaMenuHamburguer = styled.div`
  width: 400px;
  height: 600px;
`;

export const SideMenu = styled.div`
  width: 40%;
  height: 100vh;
  background-image: linear-gradient(
    0deg,
    rgba(16, 22, 47, 1) 4%,
    rgba(32, 41, 78, 1)
  );
  position: absolute;
  right: 0;
  z-index: 9999;
  animation: 1s ${fadeAnimation};

  @media (min-width: 830px) {
    display: none;
  }
`;

export const BackgroundSideMenu = styled.div`
  width: 100vw;
  height: 100%;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 99999;
  top: 0;

  @media (min-width: 830px) {
    display: none;
  }
`;

export const MenuHamburguerButton = styled.div`
  width: 50px;
  height: 30px;
  margin-left: 10px;
  align-items: center;
  display: grid;
  cursor: pointer;

  @media (min-width: 830px) {
    display: none;
  }
`;

export const CloseButtonMenu = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: grid;
  position: absolute;
`;

export const AreaButtonsHamburguerMenu = styled.div`
  width: 100%;
  height: 70%;
  padding: 20%;
  margin-top: 30px;
`;

export const HideForResponsive = styled.div`
  @media (max-width: 830px) {
    display: none;
  }
`;

export const Button = styled.a`
  padding: 5px 20px;
  background-color: white;
  border: 1.9px solid #000 !important;
  transition: all ease 0.2s;
  color: #10162f;
  display: grid;
  align-items: center;
  justify-content: center;

  :hover {
    box-shadow: #000 4.1px -3.6px 0px 1px;
    scale: 1.04;
    cursor: pointer;
  }
`;

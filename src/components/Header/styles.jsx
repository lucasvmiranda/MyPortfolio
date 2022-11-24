import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 0) 100%
  );

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  flex-direction: row;
  z-index: 10;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    backdrop-filter: blur(10px);
  }
`;

export const AreaLogo = styled.div`
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const AreaButtons = styled.div`
  width: 800px;
  align-items: center;
  display: flex;
  margin-top: 10px;
  @media (max-width: 800px) {
    width: 300px;
    justify-content: center;
    margin-right: 120px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const AreaButtonsResponsive = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  height: 80%;
`;

export const Button = styled.div`
  width: 140px;
  align-items: center;
  padding: 10px;
  justify-content: center;
  color: white;
  display: flex;
`;

export const ButtonText = styled.span`
  font-size: 20px;

  :hover {
    color: #6959cd;
    cursor: pointer;
    transition: all 0.2s;
  }
`;

export const AreaMenu = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 500px) {
    display: none;
  }
`;

export const BarHambuguerMenu = styled.div`
  height: 7px;
  background-color: #6959cd;
  margin-bottom: 10px;
`;

export const MenuHambuguerArea = styled.div`
  width: 60px;
  height: 50px;
  display: grid;
  display: none;
  padding: 15px;

  @media (max-width: 500px) {
    display: inline;
    margin-top: 10px;
  }
`;

export const Redirect = styled.a`
  color: white;
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  /* backdrop-filter: blur(10px); */
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 0) 100%
  );
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  flex-direction: row;
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

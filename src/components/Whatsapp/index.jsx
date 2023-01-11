import React from "react";
import { Container, Text } from "./styles";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <Container>
      <ReactWhatsapp
        style={{
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
          padding: 0,
        }}
        number="11952384664"
        message="Olá Lucas, gostaria de solicitar um orçamento."
      >
        {" "}
        <FaWhatsapp size={40} color="white" />
        <Text>Clique aqui para entrar em contato</Text>
      </ReactWhatsapp>
    </Container>
  );
};

export default Whatsapp;

import React, { useState } from "react";
import styled from "styled-components";
import {
  ContenedorTarjeta,
  Tarjeta,
  TextoTarjeta,
} from "./../elementos/TarjetasFondoAnimacion";

const ContenedorPrincipal = styled.div`
  width: 100vw;
  min-height: 60vh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 6rem;
`;

const TargetBanner = () => {
  const [data, cambiarData] = useState([
    { id: 1, texto: "Super mario" },
    { id: 2, texto: "Es el mejor juego" },
    { id: 3, texto: "De la historia!!!" }
  ]);

  return (
    <>
      <ContenedorPrincipal>
        {data.map(item => (
        <ContenedorTarjeta>
          <Tarjeta>
            <TextoTarjeta>{item.texto}</TextoTarjeta>
          </Tarjeta>
        </ContenedorTarjeta>
        ))}
      </ContenedorPrincipal>
    </>
  );
};

export default TargetBanner;

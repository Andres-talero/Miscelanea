import React from "react";
import styled from "styled-components";
import fondo from "./../imagenes/triangulos.png";
import fondoTitulo from "./../imagenes/fondo-t.png";


const ContenedorPrincipal = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${fondo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Contenedor = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 6rem;
`;

const ContenedorTitulo = styled.div`
background-image: url(${fondoTitulo});
-webkit-background-clip: text;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10rem;

  @media (max-width: 60rem) {
    padding: 0 2rem;
  }
`;

const Titulo = styled.h1`
  font-size: 3.5rem;
  color: transparent;
`;

const PrincipalBanner = () => {
  return (
    <>
      <ContenedorPrincipal>
        <Contenedor>
            <ContenedorTitulo>
          <Titulo>
            En la miscelanea Juan Andres ofrecemos productos de papeleria,
            belleza, detalles, regalos, accesorios, entre otros, siempre con
            calidad, confianza y una buena actitud, para ofrecerles siempre lo
            mejor.
          </Titulo>
            </ContenedorTitulo>
        </Contenedor>
      </ContenedorPrincipal>
    </>
  );
};

export default PrincipalBanner;

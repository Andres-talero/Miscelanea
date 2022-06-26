import React from "react";
import styled from "styled-components";
import fondo from "./../imagenes/triangulos.png";
import fondoTitulo from "./../imagenes/fondo-t.jpg";
import Typed from "react-typed";

const ContenedorPrincipal = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${fondo});
  filter: saturate(1.7);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Contenedor = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 6rem;
`;

const ContenedorTitulo = styled.div`
  background-image: url(${fondoTitulo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10rem;

  @media (max-width: 60rem) {
    padding: 0 1rem;
  }
`;

const ContenedorTyped = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 2rem;
`;

const Titulo = styled.h1`
  display: block;
  font-size: 3.5rem;
  color: transparent;

  @media (max-width: 60rem) {
    display: none;
  }
`;

const TituloResponsive = styled.h1`
  display: none;
  font-size: 3.5rem;
  color: transparent;
  @media (max-width: 60rem) {
    display: block;
  }
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
            <TituloResponsive>
              En la miscelanea Juan Andres, encontraras los mejores productos.
            </TituloResponsive>
            <ContenedorTyped>
              <Typed
                strings={[
                  "I'm a Full Stack Developer",
                  "I Love Software Development",
                  "I Love All My Subscribers",
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </ContenedorTyped>
          </ContenedorTitulo>
        </Contenedor>
      </ContenedorPrincipal>
    </>
  );
};

export default PrincipalBanner;

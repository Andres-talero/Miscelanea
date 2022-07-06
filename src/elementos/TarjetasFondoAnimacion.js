import styled from "styled-components";
import fondoMario from "./../imagenes/fondoMario.jpg";


const ContenedorTarjeta = styled.div`
  width: 30rem;
  height: 15rem;
  overflow: hidden;
  margin: 2rem 3rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);

  @media (max-width: 60rem) {
    width: 100%;
    margin: 2rem 0;
  }
`;

const Tarjeta = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.fondo ? props.fondo : fondoMario});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  transform: scale(1.08);
  transition: 0.3s ease-out;
  :hover {
    transform: scale(1);
  }
`;

const TextoTarjeta = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  padding-left: 2rem;
  padding-right: 9rem;
  display: flex;
  justify-content: start;
  align-items: center;
  color: white;
  font-size: 1.7rem;
  transition: 0.1s linear all;

  :hover {
    opacity: 1;
    animation: gradientBackgroud 0.3s linear;
    animation-fill-mode: forwards;
  }

  @keyframes gradientBackgroud {
    0% {
      background: linear-gradient(to right, rgba(0, 0, 0, 0), transparent);
    }
    25% {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.15), transparent);
    }
    50% {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.35), transparent);
    }
    75% {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.55), transparent);
    }
    100% {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.75), transparent);
    }
  }

  @media (max-width: 60rem) {
    opacity: 1;
    padding-left: 3.5rem;
    font-size: 1.3rem;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.75), transparent);
  }

`;

export {ContenedorTarjeta, Tarjeta, TextoTarjeta};

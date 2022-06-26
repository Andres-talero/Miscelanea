import styled from "styled-components";
import {  Navbar, Nav } from "react-bootstrap";

const Header = styled(Navbar)`
  backdrop-filter: blur(10px);
  font-size: 1.5rem;
  padding: 1rem 2.5rem;
  margin-bottom: 2rem;

  transition: all 0.5s ease;

  .brand {
    font-size: 2.2rem !important;
    font-weight: 80rem !important;
    display: flex;
    align-items: center;
  }

`;

const Titulo = styled.div`
  height: 100%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;

  @media (max-width: 60rem) {
    margin-left: 0;
  }
`;

const HeaderNav = styled(Nav)``;


export { Header, Titulo, HeaderNav };

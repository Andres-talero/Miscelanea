import React from "react";
import {
  Header,
  Titulo,
  HeaderNav,
} from "./../elementos/Header";
import Boton from "./../elementos/Boton";
import icono from "././../imagenes/icono_dark.png";
import { Link } from 'react-router-dom';


const HeaderComponent = () => {
  return (
    <>
      <Header collapseOnSelect expand="lg" variant="light" fixed="top">
        <Header.Brand className="brand" href="#home">
          <img
            alt=""
            src={icono}
            width="50"
            height="50"
            className="d-inline-block align-top mr-4"
          />{" "}
        </Header.Brand>
        <Titulo>Juan Andres</Titulo>
        <Header.Toggle aria-controls="responsive-navbar-nav" />
        <Header.Collapse id="responsive-navbar-nav">
          <HeaderNav className="me-auto"></HeaderNav>
          <HeaderNav>
            <Boton as={Link} to="/" primario header>Productos</Boton>
            <HeaderNav.Link eventKey={2} href="#memes">
              Dank memes
            </HeaderNav.Link>
          </HeaderNav>
        </Header.Collapse>
      </Header>
    </>
  );
};

export default HeaderComponent;

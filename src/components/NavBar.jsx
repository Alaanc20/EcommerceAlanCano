import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'; 
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
          <img src="/Lebron.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Nosotros</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action1">Zapatillas</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Indumentaria</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
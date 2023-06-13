import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Link to="/">
            <img src="/Lebron.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/Remeras">Remeras</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Pantalones">Pantalones</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/Zapatillas">Zapatillas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
// NavBar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import '../css/NavBar.css';
import { getProductByCategory, getProducts } from '../data/Products';

const NavBar = ({ onCategorySelect }) => {
  const [itemsMenu, setItemsMenu] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1170);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setItemsMenu(['Remeras', 'Pantalones', 'Zapatillas']);
  }, []);

  const handleCategorySelect = (category) => {
    onCategorySelect(category);
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          <nav className="navbar navbar-expand-lg m-auto">
            <div className="container-fluid">
              <Link to="/">
                <img src="/Lebron.png" alt="Logo" />
              </Link>
              <div className="hamDiv">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hamButton"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <>
          <Navbar bg="light" expand="lg">
            <Container>
              <Link to="/">
                <img src="/Lebron.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" onClick={() => handleCategorySelect('')}>
                    Inicio
                  </Nav.Link>
                  <NavDropdown title="Categorías" id="basic-nav-dropdown">
                    {itemsMenu?.map((item) => (
                      <NavDropdown.Item
                        as={Link}
                        to={`/category/${item}`}
                        key={item}
                        onClick={() => handleCategorySelect(item)}
                      >
                        {item}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </Nav>
                <Link to="/cart">
                  <CartWidget />
                </Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}
    </>
  );
};

export default NavBar;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './HeaderNav';


const HeaderNav = () => {

    return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <div>
          <p className="nav-name">Sayesta Goswami, PhD </p>
          {/* <p className="nav-tiny-text">CLINICAL PSYCHOLOGIST</p> */}
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
          <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contactus">CONTACT US</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
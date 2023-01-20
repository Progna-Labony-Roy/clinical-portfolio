import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import navlogo from './navlogo.png'
import './HeaderNav';


const HeaderNav = () => {

    return (
  <div className="nav-container">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <div>
          <img className='nav-image' src={navlogo} alt="" />
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
          <Link className='nav-link' to="/"><li>HOME</li></Link>
            <Link className='nav-link' to="/about">ABOUT</Link>
            <Link className='nav-link' to="/contact">CONTACT ME</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default HeaderNav;
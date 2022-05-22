import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
      <Navbar static="top" bg="primary" variant="dark">
        <Container>
          <Nav className="m-auto">
            <Link class='navbaritems' to="/home">Home</Link>
            <Link class='navbaritems' to="/about">About</Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;
import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <Navbar static="bottom" bg="primary" variant="dark">
            <Container>
                <Nav className="m-auto">
                    <p className="footertext">Ionian University</p>
                </Nav>
            </Container>
        </Navbar>
    );
  }
  
  export default Footer;

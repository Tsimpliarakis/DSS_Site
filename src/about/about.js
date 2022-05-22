import React from 'react';
import './about.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row className="aboutRow">
                <p>insert stuff here</p>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
  }
  
  export default About;
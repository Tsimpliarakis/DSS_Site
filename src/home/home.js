import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Button from 'react-bootstrap/Button'

function Home() {
    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row className="homeRow bg-light">
                <Col className="imagecol">
                        <input className="imageForm" type="file" accept=".jpg" />
                </Col>
                <Col className="choicecol">
                <Form.Group className="choiceForm">
                    <Form.Label>Additional Information</Form.Label>
                    <Form.Select className="formSelect">
                        <option>Age</option>
                    </Form.Select>
                    <Form.Select className="formSelect">
                        <option>Gender</option>
                    </Form.Select>
                    <Form.Select className="formSelect">
                        <option>Height</option>
                    </Form.Select>
                    <Form.Select className="formSelect">
                        <option>Weight</option>
                    </Form.Select>
                    <Form.Select className="formSelect">
                        <option>Stuff 1</option>
                    </Form.Select>
                    <Form.Select className="formSelect">
                        <option>Stuff 2</option>
                    </Form.Select>
                </Form.Group>
                </Col>
            </Row>
            <Row className="rowkoumpi">
                <Col>
                    <Button className="koumpi" variant="outline-success">Submit</Button>
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
  }
  
  export default Home;
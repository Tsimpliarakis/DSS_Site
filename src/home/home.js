import React,{useState,useEffect} from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Popup from './popup';
function Home() {
    // const axios = require('axios');
    const [data,setData] = useState(null);
    const [image,setImage] = useState(null);
    const [response,setResponse] = useState(null);
    const [showPop,setPopup] = useState(false);
    const handleChange =  (e) => {
         setData({
            
            ...data,
            [e.target.name]: e.target.value
        });
        
    }
    const handleImage =  (e) => {
        setImage(e.target.files[0]);

    }
    let ages = Array.from(Array(100).keys());
    const handleSumbit = async () => {
        let formData = new FormData();
        formData.append('sex',data.sex);
        formData.append('age',data.age);
        formData.append('localization',data.localization);
        formData.append('image',image);
       
        const resp = await fetch('http://localhost:5000/predict',{
            headers:{'Conntet-Type':'multipart/form-data', "Access-Control-Allow-Origin": "*"},
            method:'POST',
            body:formData
        })
        const resp_data = await resp.json()
        setResponse(resp_data)
    }
    useEffect(() => {
        console.log(data);
        console.log(image)
        console.log(response)
        if (response!=null){
            setPopup(true);
        }
    });
    return (
        <Container fluid>
            <Popup show={showPop} data={response}/>
            <Row>
                <Header />
            </Row>
            <Row className="homeRow bg-light">
                <Col className="imagecol">
                        <input className="imageForm" type="file" accept=".jpg" onChange={handleImage} />
                </Col>
                <Col className="choicecol">
                <Form.Group className="choiceForm">
                    <Form.Label>Additional Information</Form.Label>
                    <Form.Select className="formSelect" name={'age'} onChange={handleChange}>
                        <option selected disabled>Age</option>
                        {ages.map(age => <option key={age}>{age}</option>)}
                        
                    </Form.Select>
                    <Form.Select className="formSelect" onChange={handleChange} name={'sex'}>
                        <option selected disabled>Sex</option>
                        <option> male </option>
                        <option> female </option>
                        <option> unknown </option>
                    </Form.Select>
                    <Form.Select className="formSelect" name={'localization'} onChange={handleChange}>
                        <option selected disabled>Localization</option>
                        <option> scalp </option>
                        <option> ear </option>
                        <option> face </option>
                        <option> back </option>
                        <option> trunk </option>
                        <option> chest </option>
                        <option> upper extremity </option>
                        <option> abdomen </option>
                        <option> lower extremity </option>
                        <option> genital </option>
                        <option> neck </option>
                        <option> hand </option>
                        <option> foot </option>
                        <option> acral </option>
                        <option> unknown </option>
                    </Form.Select>
                </Form.Group>
                </Col>
            </Row>
            <Row className="rowkoumpi">
                <Col>
                    <Button className="koumpi" variant="outline-success" onClick={handleSumbit}>Submit</Button>
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
  }
  
  export default Home;
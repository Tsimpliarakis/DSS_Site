import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "bootstrap";
function Popup(props){
    return(
        <Modal
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Results
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.data!=null && <h5>Prediction: {props.data['prediction']}</h5>}
        </Modal.Body>
        <Modal.Footer>
            {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
        </Modal>
    )
}
Popup.defaultProps = {
    data:null,
    show:false
}

export default Popup;
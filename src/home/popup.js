import React from "react";
import Modal from "react-bootstrap/Modal";

function Popup(props){
    return(
        <Modal
        {...props}
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
            <h4>{props.response}</h4>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    )
}
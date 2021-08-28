//import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { React, useState } from "react";

import "../dash.css";
import LoginPatient from "./LoginPatient";

const AddForm = () => {
  const [show1, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function showalert() {
    alert("hello");
  }
  return (
    <>
      <Button className="btn1" onClick={handleShow}>
        
        SignIn
      </Button>

      <Modal
        show={show1}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        className="btn1"
      >
        <Modal.Header closeButton>
          <Modal.Title> Sign In </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginPatient> </LoginPatient>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"> Understood </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddForm;

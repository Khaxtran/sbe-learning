import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

export default function GameModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Arithmetics
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <Image
            thumbnail="true"
            style={{ width: "70%", border: "none" }}
            src="images/teacher-explaining-while-sitting-on-armchair.png"
            alt="game-thumbnail"
          />
        </div>
        <h4>{props.title}</h4>
        <span>{props.description}</span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button>Launch Game</Button>
      </Modal.Footer>
    </Modal>
  );
}

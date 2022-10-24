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
            style={{ width: "50%", border: "none" }}
            src={props.thumbnail}
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
        <Button>Generate Code</Button>
      </Modal.Footer>
    </Modal>
  );
}

import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

export default function GameModal(props, setPin) {
  const navigate = useNavigate()

  function handleGameLaunch() {
    let newPin = String(Math.floor(Math.random() * 9000) + 1000)
    setPin = newPin
    navigate("/games/host")
  }

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
        <Button onClick={handleGameLaunch}>Generate Code</Button>
      </Modal.Footer>
    </Modal>
  );
}

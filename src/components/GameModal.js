import React from "react";
import io from "socket.io-client"; 
import { Modal, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

export const newGame = {
  pin: String(Math.floor(Math.random() * 9000) + 1000),
}

export default function GameModal(props) {
  const socket = io.connect("http://localhost:3001")
  const navigate = useNavigate()

  function handleGameLaunch() { 
    socket.emit("init-game", newGame)
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

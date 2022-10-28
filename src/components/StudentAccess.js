import React, { useRef, useState, useEffect } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import io from "socket.io-client";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import StudentAccessAnimation from "../lotties/StudentAnimation/StudentAccessAnimation";
import JoinGameAnimation from "../lotties/JoinGameAnimation/JoinGameAnimation";

export default function StudentAccess() {
  // Initialisers
  const gamecodeRef = useRef();
  const nameRef = useRef();
  const [isPlayerAdded, setIsPlayerAdded] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Set to false by default since there is nothing to load
  const navigate = useNavigate(); // To go to lobby after enter the correct game code
  const socket = io.connect("http://localhost:3001");

  const joinGame = () => {
    socket.emit(
      "add-player",
      nameRef.current.value,
      socket.id,
      gamecodeRef.current.value,
      (message) => {
        if (message === "correct game code") {
          setIsPlayerAdded(true);
          setError(""); // Set to empty string as there is no error yet
          setLoading(false);
        } else {
          setError("Game code does not match! Please check your game code");
        }
      }
    );
  };

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing
    joinGame();
  }

  return (
    <div>
      <StudentAccessAnimation />
      {!isPlayerAdded ? (
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh", zIndex: "1" }}
        >
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <h2 className="text-center mb-4">Hello Student!</h2>

            <Card
              style={{
                backgroundColor: "rgba(245, 245, 245, 0.3)",
                border: "none",
              }}
            >
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      {/* back to homepage */}
                      <Button variant="secondary">
                        <Link
                          style={{ color: "white", textDecoration: "none" }}
                          to="/"
                        >
                          <FaArrowLeft />
                        </Link>
                      </Button>
                    </Col>

                    <Col>
                      <h2 className="m-1 text-center">Welcome!</h2>
                    </Col>
                    <Col></Col>
                  </Row>
                </Container>

                <Card.Subtitle className="m-2 text-muted text-center">
                  Enter Game Code to continue
                </Card.Subtitle>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="p-2">
                    <Form.Label>Game Code</Form.Label>
                    <Form.Control
                      type="text"
                      ref={gamecodeRef}
                      placeholder="1234"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="p-2">
                    <Form.Label>Your player's name?</Form.Label>
                    <Form.Control
                      type="text"
                      ref={nameRef}
                      placeholder="John"
                      required
                    />
                  </Form.Group>

                  {/* go to game lobby if enter correct code */}

                  <div className="text-center">
                    <Button
                      disabled={loading}
                      className="w-50 mt-4"
                      type="submit"
                    >
                      Enter the game
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      ) : (
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh", zIndex: "1" }}
        >
          <div className="text-center">
            <h4>Waiting for teacher to start the game</h4>
            <JoinGameAnimation />
            <p>
            <a href="https://liveswinburneeduau-my.sharepoint.com/:b:/g/personal/104070117_student_swin_edu_au/Ea4tnOEiXLhAlHhIS_cqTogBufdnxOjhXBLT7NZO1AlSZg?e=vT4LGE" target="_blank" >Gameplay instructions</a>
            </p>
          </div>
        </Container>
      )}
    </div>
  );
}

import React, { useRef, useState } from "react";
import { usePlayers } from '../contexts/PlayersProvider'
import { Form, Button, Card, Alert, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { v4 as uuidV4 } from 'uuid'

export default function StudentAccess({gamecode}) {
  // Initialisers
  const gamecodeRef = useRef();
  const nameRef = useRef();
  const { addPlayer } = usePlayers()
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Set to false by default since there is nothing to load
  const navigate = useNavigate(); // To go to lobby after enter the correct game code
  let pin = gamecode.toString();

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing

    // Check if game code match
    if (gamecodeRef.current.value !== pin) {
      return setError("Game code does not match! Please check your game code");
    }

    setError(""); // Set to empty string as there is no error yet
    setLoading(true);
    addPlayer(uuidV4(), nameRef.current.value)
    navigate("/game-lobby"); // Go to game lobby after enter the correct game code
    setLoading(false);
  }

  return (
    <div>
      <h2 className="text-center mb-4">Hello Student!</h2>
      <Card>
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
              <Button disabled={loading} className="w-50 mt-4" type="submit">
                Enter the game
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

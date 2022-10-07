import React, { useRef, useState } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function EnterGameCode() {
  // Initialisers
  const GameCodeRef = useRef();
  const GameCodeConfirmRef = useRef();

  const { EnterGameCode } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Set to false by default since there is nothing to load
  const navigate = useNavigate(); // To go to lobby after enter the correct game code

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing

    // Check if game code match
    if (GameCodeRef.current.value !== GameCodeConfirmRef.current.value) {
      return setError("Game Code do not match! Please check your game code");
    }

    try {
      setError(""); // Set to empty string as there is no error yet
      setLoading(true);
      await EnterGameCode(GameCodeRef.current.value);
      navigate("/"); // Go to game lobby after enter the correct game code
    } catch {
      setError("Failed to enter the game");
    }

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
            <Form.Group id="GameCode" className="p-2">
              <Form.Label placeholder="Please Enter the Game Code">
                Game Code
              </Form.Label>
              <Form.Control type="GameCode" ref={GameCodeRef} required />
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

import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom"; // Link to another route

// Card contains all Login informaiton

export default function Signup() {
  // Define refs
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Set to false by default since there is nothing to load
  const navigate = useNavigate(); // To go back to Dashboard when successfully authenticate

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing

    // User validation checks
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError(""); // Set to empty string as there is no error yet
      setLoading(true);
      // Call signup function and pass in email and password
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard"); // Go back to Dashboard after user logged in
    } catch {
      setError("Failed to create your account");
    }

    setLoading(false); // After waiting for signup
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="p-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <Form.Group id="password" className="p-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Form.Group id="password-confirm" className="p-2">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    disabled={loading}
                    className="w-50 mt-4"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
          <div className="2-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </Container>
    </>
  );
}

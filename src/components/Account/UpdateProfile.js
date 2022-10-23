import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom"; // Link to another route

// Card contains all Login informaiton

export default function UpdateProfile() {
  // Define refs
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Set to false by default since there is nothing to load
  const navigate = useNavigate(); // To go back to Account when successfully authenticate

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing

    // User validation checks
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    const promises = [];
    setLoading(true);
    setError(""); // Set to empty string as there is no error yet

    // Check if the email is not equal to the current email
    if (emailRef.current.value !== currentUser.email) {
      // If so, Pass the email user wants to update to the promise array
      promises.push(updateEmail(emailRef.current.value));
    }
    // Check if the password is not equal to the current password
    if (passwordRef.current.value !== currentUser.password) {
      // If so, Pass the password user wants to update to the promise array
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        // If all the promises are ran successfully:
        navigate("/login"); // Go back to Account page
      })
      .catch(() => {
        // Otherwise, catch errors
        setError("Failed to update your profile");
      })
      .finally(() => {
        // Set loading to false weather succeed or failure
        setLoading(false);
      });
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Update Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group id="email" className="p-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                  defaultValue={currentUser.email}
                />
              </Form.Group>

              <Form.Group id="password" className="p-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>

              <Form.Group id="password-confirm" className="p-2">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>

              <div className="text-center">
                <Button disabled={loading} className="w-50 mt-4" type="submit">
                  Update
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
        <div className="2-100 text-center mt-2">
          <Link to="/account">Cancel</Link>
        </div>
      </div>
    </Container>
  );
}

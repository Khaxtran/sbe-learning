import React from "react";
import Navbar from "../Navbar/Navbar";
import { Card, Button, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Account() {
  // Initialisers
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="w-100" style={{ maxWidth: "600px" }}>
          <Card className="m-5">
            <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>
              <strong>Email:</strong> {currentUser.email}
              <div className="text-center">
                <Link
                  to="/update-profile"
                  className="btn btn-primary w-100 mt-4"
                >
                  Update Profile
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection"
import GameCards from "./GameCards/GameCards"
import Footer from "./Footer/Footer"
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard({ gamecode }) {
  // Initialisers
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError(""); // Initially error message is empty

    // User presses "Log out", the method will:
    try {
      await logout();
      console.log(currentUser.email);
      navigate("/login"); // Go back to login page
    } catch {
      setError("Failed to log out");
    }
  }

  function onGameLaunch() {
    generatePin();
    navigate("/game-lobby");
  }

  function generatePin() {
    let newPin = Math.floor(Math.random() * 9000, 10000);
    return gamecode(newPin);
  }

  return (
    <div>
      <Navbar style={{top: 0}}/>
      <HeroSection />
      <GameCards />
      <Card className="m-5">
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <div className="text-center">
            <Link to="/update-profile" className="btn btn-primary w-100 mt-4">
              Update Profile
            </Link>
          </div>
        </Card.Body>

        <div className="2-100 text-center">
          <Button variant="link" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </Card>

      <Card className="text-center m-5">
        <Card.Body>
          <h2>Math game</h2>
          <p>This is math game for primary student</p>
          <Button onClick={onGameLaunch}>Launch Game</Button>
        </Card.Body>
      </Card>

      <Footer />
    </div>
  );
}

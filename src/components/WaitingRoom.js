import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";

export default function WaitingRoom({ pin }) {
  const [playerList, setPlayerList] = useState([]);

  return (
    <Container className="m-5 d-flex align-items-center justify-content-center">
      <div>
        <div className="m-3">
          <h1>Waiting for players to join</h1>
          <h5>Show this game code to your students</h5>
          <h1>{pin}</h1>
        </div>
        <Card className="m-auto">
          <h1>Player List</h1>
          {playerList.length > 0 ? (
            <ol>
              {playerList.map((player) => (
                <li>
                  <mark>{player.userName}</mark>
                </li>
              ))}
            </ol>
          ) : (
            <Card className="m-4">
                <h5>No players joining yet</h5>
            </Card>
          )}
        </Card>
      </div>
    </Container>
  );
}

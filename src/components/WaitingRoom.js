import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { newGame } from "./GameModal";
import WaitingRoomAnimation from "../lotties/WaitingRoomAnimation/WaitingRoomAnimation";

export default function WaitingRoom({ gamecode, socket }) {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    socket.on("player-added", (player) => {
      setPlayerList([...playerList, player]);
    });
  }, [playerList, socket]);

  console.log(gamecode);

  return (
    <>
      <Container className="m-5 d-flex align-items-center justify-content-center">
        <div>
        <WaitingRoomAnimation />
          <h1>Waiting for players to join</h1>
          <h1>{newGame.pin}</h1>

          <Card
            className="m-auto"
            style={{
              border: "none",
              maxWidth: "50%",
              backgroundColor: "rgba(243, 243, 243, 0.7)",
            }}
          >
            <h1>Player List</h1>
            {playerList.length > 0 ? (
              <ol>
                {playerList.map((player) => (
                  <li>
                    <Card
                      className="m-4"
                      style={{
                        padding: "5px",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "rgba(144, 217, 167, 0.5)",
                      }}
                    >
                      <b>{player.userName}</b>
                    </Card>
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
    </>
  );
}

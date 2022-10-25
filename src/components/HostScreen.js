import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import WaitingRoom from "./WaitingRoom";
import { Button } from "react-bootstrap";

export default function HostScreen() {
  const [gamecode, setGamecode] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isPreviewScreen, setIsPreviewScreen] = useState(false);
  const [timer, setTimer] = useState(0);
  const socket = io.connect("http://localhost:3001");

  useEffect(() => {
    setTimer(5);
  }, []);

  useEffect(() => {
    socket.on("send-gamecode", (game) => {
      setGamecode(game.pin);
    });
  });

  const startGame = () => {
    setIsGameStarted((prevstate) => !prevstate);
    setIsPreviewScreen(true);
    socket.emit("start-game");
    socket.emit("question-preview", () => {
      startPreviewCountdown(5);
    });
    setIsGameStarted((prevstate) => !prevstate);
    setIsPreviewScreen(true);
  };

  const startPreviewCountdown = (seconds) => {
    setIsPreviewScreen(true);
    let time = seconds;
    let interval = setInterval(() => {
      setTimer(time);
      if (time === 0) {
        clearInterval(interval);
        setIsPreviewScreen(false);
      }
      time--;
    }, 1000);
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      {!isGameStarted && (
        <div className="text-center">
          <WaitingRoom socket={socket} pin={gamecode} />
          <Button onClick={startGame}>Start Game</Button>
        </div>
      )}
      {isPreviewScreen && (
        <div className="text-center">
          <h1>{timer}</h1>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import WaitingRoom from "./WaitingRoom";
import { Button } from 'react-bootstrap'

export default function HostScreen({ pin }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isPreviewScreen, setIsPreviewScreen] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimer(5);
  }, []);

  const startGame = () => {
    setIsGameStarted((prevstate) => !prevstate);
    setIsPreviewScreen(true);
  };

  const startPreviewCountdown = (seconds, index) => {
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
      <div className="text-center">
        <WaitingRoom pin={pin} />
        <Button onClick={startGame}>Start Game</Button>
      </div>
    </div>
  );
}

import React from "react";
import Lottie from "react-lottie";
import animationData from "./84837-background-animation.json";

export default function WaitingRoomAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="lottie">
      <Lottie
        
        options={defaultOptions}
        isClickToPauseDisabled={true}
        style={{ width: "25%", zIndex: "-1" }}
      />
    </div>
  );
}

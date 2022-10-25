import React from "react";
import Lottie from "react-lottie";
import animationData from "./30206-loading.json";

export default function JoinGameAnimation() {
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
        style={{ width: "50%", zIndex: "1" }}
      />
    </div>
  );
}

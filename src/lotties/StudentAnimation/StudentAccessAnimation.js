import React from "react";
import Lottie from "react-lottie";
import animationData from "./student-access-background.json";

export default function StudentAccessAnimation() {
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
        className="w-full h-full"
        options={defaultOptions}
        isClickToPauseDisabled={true}
        style={{ objectFit: "cover", position: "fixed", zIndex: "-1" }}
      />
    </div>
  );
}

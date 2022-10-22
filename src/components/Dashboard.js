import React from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection"
import GameCards from "./GameCards/GameCards"
import Footer from "./Footer/Footer"

export default function Dashboard({ gamecode }) {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <GameCards />
      <Footer />
    </div>
  );
}

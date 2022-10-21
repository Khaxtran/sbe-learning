import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Welcome to Stray Balloon</h1>
      <p>Teach Arithmetics</p>
    </div>
  );
}

export default HeroSection;
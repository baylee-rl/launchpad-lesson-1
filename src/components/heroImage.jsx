import React from 'react'
import heroImage from './heroImage.png'
import "./heroImage.css";

function Hero() {
  return (
    <div className="Hero">
      <img src={heroImage} />
    </div>
  );
}

export default Hero;
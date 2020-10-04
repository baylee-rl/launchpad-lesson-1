import React, { useState, useEffect } from 'react'
import './navBar.css'
import mainLogo from './logo.png';

function NavigationBar() {
  const [DarkMode, setDarkMode] = useState(false);
  const [ButtonText, setButtonText] = useState(false);
  
  return (
    <div className="NavigationBar" id={DarkMode ? "dark" : "light"}>
      <img src={mainLogo} className="logo"></img>
      <button  
        id = {DarkMode ? "dark" : "light" }
        onClick={() => {
          setDarkMode(!DarkMode)
          setButtonText(!ButtonText)
        }}
      >
        {ButtonText ? "Enable Normal Mode" : "Enable Dark Mode"}
      </button>
    </div>
  );
}

export default NavigationBar;
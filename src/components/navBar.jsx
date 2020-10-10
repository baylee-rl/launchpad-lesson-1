import React, { useState, useEffect } from 'react'
import './navBar.css'
import mainLogo from './logo.png';

function NavigationBar({toggleDarkMode, DarkMode}) {  
  return (
    <div id="NavigationBar" className={DarkMode ? "dark-bg" : "light-bg"}>
      <img src={mainLogo} className="logo"></img>
      <button  
        className = {DarkMode ? "dark-button" : "light-button" }
        onClick = {toggleDarkMode}
      >
        {DarkMode ? "Enable Normal Mode" : "Enable Dark Mode"}
      </button>
    </div>
  );
}

export default NavigationBar;
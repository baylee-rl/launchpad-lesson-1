import React, { useState, useEffect } from 'react'
import './navBar.css'
import mainLogo from './logo.png'
import { DarkModeContext } from '../App.js';
import { useContext } from 'react';

function NavigationBar({ toggleDarkMode }) {

  const mode = useContext(DarkModeContext);

  return (
    <div id="NavigationBar" className={mode ? "dark-bg" : "light-bg"}>
      <img src={mainLogo} className="logo"></img>
      <button
        className={mode ? "dark-button" : "light-button"}
        onClick={toggleDarkMode}
      >
        {mode ? "Enable Normal Mode" : "Enable Dark Mode"}
      </button>
    </div>
  );
}

export default NavigationBar;
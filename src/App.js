import React, { useState } from 'react';
import './App.css'
import './fonts.css';
import NavigationBar from './components/navBar.jsx';
import Hero from './components/heroImage.jsx';
import Content from './components/Content.jsx';
import DarkModeContext from './DarkModeContext.jsx';


function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Content id={DarkMode ? "dark" : "light" }/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css'
import './fonts.css';
import NavigationBar from './components/navBar.jsx';
import Hero from './components/heroImage.jsx';
import Heading from './components/heading';
import DescriptionBoxes from './components/DescriptionBoxes';



function App() {
  const [DarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!DarkMode);
  }

  return (
    <div id="App" className={DarkMode ? "dark-mode" : "light-mode"}>
      <NavigationBar toggleDarkMode={toggleDarkMode} DarkMode={DarkMode}/>
      <Hero />
      <Heading />
      <DescriptionBoxes />
    </div>
  );
}

export default App;

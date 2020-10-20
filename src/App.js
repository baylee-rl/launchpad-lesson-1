import React, { createContext, useContext, useState } from 'react';
import './App.css'
import './fonts.css';
import NavigationBar from './components/navBar.jsx';
import Hero from './components/heroImage.jsx';
import Heading from './components/heading';
import DescriptionBoxes from './components/DescriptionBoxes';

export const DarkModeContext = createContext(false);

function App() {
  const [DarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!DarkMode);
  }
  const mode = useContext(DarkModeContext)

  return (
    <DarkModeContext.Provider value={DarkMode}>
      <div id="App" className={DarkMode ? "dark-mode" : "light-mode"}>
        <NavigationBar toggleDarkMode={toggleDarkMode} />
        <Hero />
        <Heading />
        <DescriptionBoxes />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;

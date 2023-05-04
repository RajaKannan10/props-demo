import React, { useState } from 'react';
import './header.css';
import Header from './header';
import MainContent from './mainContent';
import './footer.css'
import './App.css';
import Footer from './footer';

function App() {
  const [clicked, setClicked] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleClick() {
    setClicked(clicked + 1);
  }

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Header
        handleClick={handleClick}
        toggleDarkMode={toggleDarkMode}
      />
      <MainContent clicked={clicked}/>
     
      <Footer/>
    </div>
  );
}

export default App;

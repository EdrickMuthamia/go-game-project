import React from "react";
import Game from "./components/Game.jsx";
import LandingPage from "./components/LandingPage.jsx";
import "./styles/board.css";
import "./styles/landing.css";

function App() {
  const [currentView, setCurrentView] = React.useState('landing');

  // Apply specific body styling for consistent experience
  React.useEffect(() => {
    // Reset body styles to defaults
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "auto"; // Allow normal scrolling
    
    return () => {
      document.body.style.overflow = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
    };
  }, []);

  const handleStartGame = () => {
    setCurrentView('game');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  return (
    <>
      {currentView === 'landing' && (
        <LandingPage onStartGame={handleStartGame} />
      )}
      {currentView === 'game' && (
        <Game onBackToLanding={handleBackToLanding} />
      )}
    </>
  );
}

export default App;

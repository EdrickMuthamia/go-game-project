import React from "react";
import LandingPage from "./components/LandingPage.jsx";
import Game from "./components/Game.jsx";
import "./styles/board.css";
import "./styles/landing.css";

function App() {
  // Initialize state from localStorage or default to 'landing'
  const [currentView, setCurrentView] = React.useState(() => {
    return localStorage.getItem('goGameView') || 'landing';
  });

  const handleStartGame = () => {
    setCurrentView('game');
    localStorage.setItem('goGameView', 'game');
  };

  const handleBackToHome = () => {
    setCurrentView('landing');
    localStorage.setItem('goGameView', 'landing');
    // Clear game state when going back to home
    localStorage.removeItem('goGameState');
  };

  return (
    <div className="app">
      {currentView === 'landing' ? (
        <LandingPage onStartGame={handleStartGame} />
      ) : (
        <Game onBackToHome={handleBackToHome} />
      )}
    </div>
  );
}

export default App;

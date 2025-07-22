import React from "react";

function LandingPage({ onStartGame }) {
  return (
    <div className="landing-page">
      <div className="landing-header">
        <h1 className="landing-title">Go Game</h1>
        <p className="landing-subtitle">Ancient Strategy • Modern Play</p>
      </div>
      
      <div className="landing-content">
        <div className="landing-board-preview">
          <div className="preview-board">
            <div className="preview-stone black-stone"></div>
            <div className="preview-stone white-stone"></div>
            <div className="preview-stone black-stone"></div>
            <div className="preview-stone white-stone"></div>
          </div>
        </div>
        
        <div className="landing-description">
          <h2>Master the Ancient Game</h2>
          <p>
            Go is a strategic board game for two players, in which the aim is to surround more territory than the opponent. 
            The game was invented in China more than 2,500 years ago and is believed to be the oldest board game continuously played to the present day.
          </p>
          
          <div className="game-features">
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <span>Strategic Gameplay</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🧠</span>
              <span>Mental Challenge</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <span>Quick Setup</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="landing-actions">
        <button className="start-game-btn" onClick={onStartGame}>
          Start Playing
        </button>
        <div className="landing-info">
          <p>19x19 Traditional Board • Two Player Game</p>
        </div>
      </div>
      
      <div className="landing-footer">
        <p>Ready to test your strategic thinking?</p>
      </div>
    </div>
  );
}

export default LandingPage;

import React from "react";
import "../styles/landing.css";

function LandingPage({ onStartGame }) {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1 className="landing-title">Go Game</h1>
        <p className="landing-subtitle">Ancient Strategy • Modern Play</p>
      </header>

      <main className="landing-main">
        <div className="content-wrapper">
          <div className="game-preview">
            <div className="mini-board">
              <div className="board-grid">
                <div className="stone black"></div>
                <div className="stone white"></div>
                <div className="stone black"></div>
                <div className="stone white"></div>
              </div>
            </div>
          </div>

          <div className="game-description">
            <h2 className="section-title">Master the Ancient Game</h2>
            <p className="description-text">
              Go is a strategic board game for two players, in which the aim is to surround more territory than 
              the opponent. The game was invented in China more than 2,500 years ago and is believed to be 
              the oldest board game continuously played to the present day.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <span className="feature-text">Strategic Gameplay</span>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🧠</div>
                <span className="feature-text">Mental Challenge</span>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <span className="feature-text">Quick Setup</span>
              </div>
            </div>

            <button className="start-playing-btn" onClick={onStartGame}>
              Start Playing
            </button>

            <p className="game-info">19x19 Traditional Board • Two Player Game</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;

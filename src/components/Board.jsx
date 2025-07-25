import React from "react";
import Intersection from "./Intersection.jsx";
import "../styles/board.css";

/**
 * @param {Object} props
 * @param {Array<Array<string|null>>} props.board
 * @param {function} props.onPlay
 * @param {Array<number>|null} props.lastMove
 */
function Board({ board, onPlay, lastMove }) {
  const BOARD_SIZE = board.length;
  // Star points for 19x19
  const starPoints = [3, 9, 15];
  
  // Show popup on first entry, but remember if user has seen it
  const [showHowToPlay, setShowHowToPlay] = React.useState(() => {
    // Check if user has seen the tutorial before
    const hasSeenTutorial = localStorage.getItem('goGameTutorialSeen');
    return !hasSeenTutorial; // Show if they haven't seen it
  });

  const handleClosePopup = () => {
    setShowHowToPlay(false);
    // Remember that user has seen the tutorial
    localStorage.setItem('goGameTutorialSeen', 'true');
  };

  const handleShowPopup = () => {
    setShowHowToPlay(true);
  };

  return (
    <div className="board-container">
      <div className="board-header">
        <button 
          className="how-to-play-btn"
          onClick={handleShowPopup}
        >
          ? How to Play
        </button>
      </div>

      <div
        className="go-board go-board-large"
        style={{
          gridTemplateRows: `repeat(${BOARD_SIZE}, 1fr)`,
          gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`
        }}
      >
        {board.map((row, i) =>
          row.map((cell, j) => (
            <Intersection
              key={`${i}-${j}`}
              value={cell}
              onClick={() => onPlay(i, j)}
              isStarPoint={starPoints.includes(i) && starPoints.includes(j)}
              isLastMove={lastMove && lastMove[0] === i && lastMove[1] === j}
            />
          ))
        )}
      </div>

      {/* How to Play Popup */}
      {showHowToPlay && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h2>Welcome to Go!</h2>
              <button 
                className="close-btn"
                onClick={handleClosePopup}
              >
                ×
              </button>
            </div>
            
            <div className="popup-body">
              <div className="welcome-message">
                <p>Welcome to the ancient game of Go! Here's everything you need to know to start playing:</p>
              </div>

              <div className="rule-section">
                <h3>🎯 Objective</h3>
                <p>Control more territory than your opponent by placing stones strategically and capturing enemy stones.</p>
              </div>

              <div className="rule-section">
                <h3>⚫ Basic Rules</h3>
                <ul>
                  <li><strong>Turn Order:</strong> Black plays first, then players alternate</li>
                  <li><strong>Placing Stones:</strong> Click on any empty intersection to place a stone</li>
                  <li><strong>Liberties:</strong> Empty spaces adjacent to a stone or group of stones</li>
                  <li><strong>Capture:</strong> Remove opponent stones that have no liberties</li>
                </ul>
              </div>

              <div className="rule-section">
                <h3>🚫 Important Rules</h3>
                <ul>
                  <li><strong>No Suicide:</strong> You cannot place a stone that would have no liberties (unless it captures opponent stones)</li>
                  <li><strong>No Occupied Spaces:</strong> Cannot place stones on intersections that already have stones</li>
                </ul>
              </div>

              <div className="rule-section">
                <h3>🏆 Winning</h3>
                <p>The game ends when both players pass. The winner is determined by:</p>
                <ul>
                  <li>Territory controlled (empty spaces surrounded by your stones)</li>
                  <li>Captured opponent stones</li>
                </ul>
                <p><em>Note: This version shows stone count in real-time for simplified scoring.</em></p>
              </div>

              <div className="rule-section tips">
                <h3>💡 Quick Tips</h3>
                <ul>
                  <li>Start by claiming corners and edges - they're easier to secure</li>
                  <li>Connect your stones to form strong groups</li>
                  <li>Look for opportunities to capture isolated enemy stones</li>
                  <li>Balance between attacking and defending</li>
                </ul>
              </div>
            </div>

            <div className="popup-footer">
              <button 
                className="got-it-btn"
                onClick={handleClosePopup}
              >
                Start Playing!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Board; 
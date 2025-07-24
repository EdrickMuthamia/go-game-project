import React from "react";
import Board from "./Board.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import { useGoGame } from "../logic/useGoGame";
import "../styles/board.css";

const BOARD_SIZE = 19;

function Game({ onBackToHome }) {
  const game = useGoGame(BOARD_SIZE);
  const [showRestoredMessage, setShowRestoredMessage] = React.useState(false);

  // Check if game was restored from localStorage on mount
  React.useEffect(() => {
    const savedState = localStorage.getItem('goGameState');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        // Show restored message if there are stones on the board or it's not black's turn
        const hasStones = parsed.board.some(row => row.some(cell => cell !== null));
        const isNotFirstTurn = parsed.currentPlayer !== 'black' || parsed.lastMove !== null;
        
        if (hasStones || isNotFirstTurn) {
          setShowRestoredMessage(true);
          setTimeout(() => setShowRestoredMessage(false), 3000); // Hide after 3 seconds
        }
      } catch {
        // Ignore parsing errors
      }
    }
  }, []);

  const handleReset = () => {
    game.resetGame();
    setShowRestoredMessage(false);
  };

  return (
    <div className="game-container">
      <div className="game-header-simple">
        <button className="back-menu-btn" onClick={onBackToHome}>
          ← Back to Menu
        </button>
      </div>
      
      {showRestoredMessage && (
        <div className="restored-message">
          Game state restored from previous session
        </div>
      )}
      
      <div className="go-app go-app-large">
        <div className="go-board-outer">
          <Board board={game.board} onPlay={game.playMove} lastMove={game.lastMove} />
        </div>
        <div className="go-score-section">
          <ScoreBoard board={game.board} onReset={handleReset} />
        </div>
        <div className="go-current-player go-current-player-large">
          Current Player: <span className={game.currentPlayer}>{game.currentPlayer}</span>
        </div>
      </div>
    </div>
  );
}

export default Game;

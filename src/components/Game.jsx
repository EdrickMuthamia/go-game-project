import React from "react";
import Board from "./Board.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import { useGoGame } from "../logic/useGoGame";

const BOARD_SIZE = 19;

function Game({ onBackToLanding }) {
  const [resetKey, setResetKey] = React.useState(0);
  const game = useGoGame(BOARD_SIZE);

  // Reset handler: force re-mount the game state by changing the key
  const handleReset = () => {
    setResetKey((k) => k + 1);
  };

  return (
    <div className="go-app go-app-large">
      <div className="game-header">
        <button className="back-to-landing-btn" onClick={onBackToLanding}>
          ← Back to Menu
        </button>
      </div>
      <div className="go-board-outer">
        <Board key={resetKey} board={game.board} onPlay={game.playMove} lastMove={game.lastMove} />
      </div>
      <div className="go-score-section">
        <ScoreBoard board={game.board} onReset={handleReset} />
      </div>
      <div className="go-current-player go-current-player-large">
        Current Player: <span className={game.currentPlayer}>{game.currentPlayer}</span>
      </div>
    </div>
  );
}

export default Game;

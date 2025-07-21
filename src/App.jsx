import React from "react";
import Board from "./components/Board.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";
import { useGoGame } from "./logic/useGoGame";
import "./styles/board.css";

const BOARD_SIZE = 19;

function App() {
  const [resetKey, setResetKey] = React.useState(0);
  const game = useGoGame(BOARD_SIZE);

  // Reset handler: force re-mount the game state by changing the key
  const handleReset = () => {
    setResetKey((k) => k + 1);
  };

  // Re-mount the game state on reset by using the key prop
  return (
    <div className="go-app go-app-large">
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

export default App;

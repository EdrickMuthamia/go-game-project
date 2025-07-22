import React from "react";

/**
 * @param {Object} props
 * @param {Array<Array<string|null>>} props.board
 * @param {function} [props.onReset]
 */
function ScoreBoard({ board, onReset }) {
  const flat = board.flat();
  const black = flat.filter((s) => s === "black").length;
  const white = flat.filter((s) => s === "white").length;
  return (
    <div className="scoreboard-container">
      <div className="score-row">
        <div className="score-box black-box">Black: <span className="score-num">{black}</span></div>
        <div className="score-box white-box">White: <span className="score-num">{white}</span></div>
      </div>
      <button className="reset-btn" onClick={onReset}>RESET GAME</button>
    </div>
  );
}

export default ScoreBoard; 
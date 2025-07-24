import React from "react";
import Intersection from "./Intersection.jsx";
import "../styles/board.css";

/**
 * @param {Object} props
 * @param {Array<Array<string|null>>} props.board
 * @param {function} props.onPlay
 */
function Board({ board, onPlay }) {
  const BOARD_SIZE = board.length;
  // Star points for 19x19
  const starPoints = [3, 9, 15];

  return (
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
          />
        ))
      )}
    </div>
  );
}

export default Board; 
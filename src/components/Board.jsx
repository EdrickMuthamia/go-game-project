import React from "react";

const BOARD_SIZE = 19;
// Star points for a 19x19 board (0-based index)
const STAR_POINTS = [
  [2, 2], [2, 9], [2, 16],
  [9, 2], [9, 9], [9, 16],
  [16, 2], [16, 9], [16, 16]
];

const Board = () => {
  return (
    <div className="go-board">
      {Array.from({ length: BOARD_SIZE }).map((_, row) => (
        <div className="go-board-row" key={row}>
          {Array.from({ length: BOARD_SIZE }).map((_, col) => {
            const isStar = STAR_POINTS.some(([r, c]) => r === row && c === col);
            return (
              <div className="go-board-intersection" key={col}>
                {isStar && <div className="go-board-star-point" />}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;

import React from "react";
import ScoreBoard from "./ScoreBoard";

// Define the size of the Go board. A standard Go board is 19x19.
const BOARD_SIZE = 19;

/*
 * 
 *Define the coordinates of the star points on a 19x19 board.
 * These points are traditional markers on a Go board, often used for
 * handicap placement or as visual guides. The coordinates are 0-based.
 * 
 * The tengen is the center point of the board.
 */
const STAR_POINTS = [
  [2, 2], [2, 9], [2, 16],   // Top row star points
  [9, 2], [9, 9], [9, 16],   // Middle row star points (including the tengen)
  [16, 2], [16, 9], [16, 16] // Bottom row star points
];

/**
 * Board Component
 *
 * This functional component renders the Go board. It creates a grid of
 * intersections, and places "star points" at specific predefined coordinates.
 */
const Board = () => {
  // Placeholder values for demonstration
  const blackCount = 0;
  const whiteCount = 0;
  const currentPlayer = "black";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="go-board">
        {/*
        Render each row of the board.
        Array.from({ length: BOARD_SIZE }) creates an array of undefined values
        with a length equal to BOARD_SIZE, which is then mapped over to create rows.
      */}
        {Array.from({ length: BOARD_SIZE }).map((_, row) => (
          // Each row has a unique key based on its index.
          <div className="go-board-row" key={row}>
            {/*
            Render each intersection within the current row.
            Similar to rows, an array is created and mapped over for columns.
          */}
            {Array.from({ length: BOARD_SIZE }).map((_, col) => {
              // Check if the current intersection's coordinates match any of the STAR_POINTS.
              const isStar = STAR_POINTS.some(([r, c]) => r === row && c === col);
              return (
                // Each intersection has a unique key based on its column index.
                <div className="go-board-intersection" key={col}>
                  {/*
                  If the current intersection is a star point, render a div
                  to visually represent it. This div will likely be styled
                  (e.g., as a small circle) via CSS.
                */}
                  {isStar && 
                <div className="go-board-star-point" />}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <ScoreBoard blackCount={blackCount} whiteCount={whiteCount} currentPlayer={currentPlayer} />
    </div>
  );
};

export default Board;
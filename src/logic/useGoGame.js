import React from "react";
import { createEmptyBoard, placeStone } from "./gameEngine";

/**
 * @typedef {import('../types').Grid} Grid
 * @typedef {import('../types').Player} Player
 */

/**
 * Custom hook to manage Go game state
 * @param {number} boardSize
 */
export function useGoGame(boardSize) {
  const [board, setBoard] = React.useState(createEmptyBoard(boardSize));
  const [currentPlayer, setCurrentPlayer] = React.useState('black');
  const [lastMove, setLastMove] = React.useState(null);

  const playMove = (row, col) => {
    const newBoard = placeStone(board, row, col, currentPlayer);
    if (newBoard) {
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'black' ? 'white' : 'black');
      setLastMove([row, col]);
    } else {
      console.log("Invalid move");
    }
  };

  return { board, currentPlayer, playMove, lastMove };
} 
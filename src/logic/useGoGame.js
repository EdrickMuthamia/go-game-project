import React from "react";
import { createEmptyBoard, placeStone } from "./gameEngine";

/**
 * @typedef {import('../types').Grid} Grid
 * @typedef {import('../types').Player} Player
 */

/**
 * Custom hook to manage Go game state with persistence
 * @param {number} boardSize
 */
export function useGoGame(boardSize) {
  // Helper function to load game state from localStorage
  const loadGameState = () => {
    try {
      const savedState = localStorage.getItem('goGameState');
      if (savedState) {
        const parsed = JSON.parse(savedState);
        // Validate that the saved state has the correct board size
        if (parsed.board && parsed.board.length === boardSize) {
          return parsed;
        }
      }
    } catch (error) {
      console.warn('Failed to load game state from localStorage:', error);
    }
    // Return default state if no valid saved state
    return {
      board: createEmptyBoard(boardSize),
      currentPlayer: 'black',
      lastMove: null
    };
  };

  const initialState = loadGameState();
  
  const [board, setBoard] = React.useState(initialState.board);
  const [currentPlayer, setCurrentPlayer] = React.useState(initialState.currentPlayer);
  const [lastMove, setLastMove] = React.useState(initialState.lastMove);

  // Save game state to localStorage whenever it changes
  React.useEffect(() => {
    const gameState = {
      board,
      currentPlayer,
      lastMove
    };
    try {
      localStorage.setItem('goGameState', JSON.stringify(gameState));
    } catch (error) {
      console.warn('Failed to save game state to localStorage:', error);
    }
  }, [board, currentPlayer, lastMove]);

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

  const resetGame = () => {
    setBoard(createEmptyBoard(boardSize));
    setCurrentPlayer('black');
    setLastMove(null);
    // Clear saved game state
    localStorage.removeItem('goGameState');
  };

  return { board, currentPlayer, playMove, lastMove, resetGame };
} 
// Game engine for Go game

// Switch turns between players
export const switchTurn = (currentPlayer) => {
  return currentPlayer === 'black' ? 'white' : 'black';
};

// Check if stone placement is valid
export const isValidPlacement = (board, coord) => {
  const { row, col } = coord;
  
  // Check boundaries and if position is empty
  return row >= 0 && row < board.length && 
         col >= 0 && col < board[0].length && 
         board[row][col] === null;
};
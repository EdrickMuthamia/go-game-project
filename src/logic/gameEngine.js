// Switch turns between players
export const switchTurn = (currentPlayer) =>
  currentPlayer === 'black' ? 'white' : 'black';

// Check if a stone can be placed at the given coordinates
export const isValidPlacement = (board, coord) => {
  const { row, col } = coord;
  const isRowValid = row >= 0 && row < board.length;
  const isColValid = board[row] && col >= 0 && col < board[row].length;
  return isRowValid && isColValid && board[row][col] === null;
};

// Get valid adjacent positions (up, right, down, left)
const getAdjacentPositions = (board, row, col) => {
  const positions = [
    { row: row - 1, col },
    { row, col: col + 1 },
    { row: row + 1, col },
    { row, col: col - 1 }
  ];

  const height = board.length;
  const width = board[0]?.length || 0;

  return positions.filter(
    (pos) =>
      pos.row >= 0 &&
      pos.row < height &&
      pos.col >= 0 &&
      pos.col < width
  );
};

// Recursively collect all connected stones of the same color
const getConnectedGroup = (board, row, col, color, visited = new Set()) => {
  const key = `${row},${col}`;
  if (visited.has(key)) return [];

  visited.add(key);
  let group = [{ row, col }];

  const adjacent = getAdjacentPositions(board, row, col);
  for (const pos of adjacent) {
    if (board[pos.row][pos.col] === color) {
      group = group.concat(
        getConnectedGroup(board, pos.row, pos.col, color, visited)
      );
    }
  }

  return group;
};

// Check if any stone in the group has liberties
const groupHasLiberties = (board, group) => {
  return group.some((pos) => {
    const adj = getAdjacentPositions(board, pos.row, pos.col);
    return adj.some((p) => board[p.row][p.col] === null);
  });
};

// Check if a stone is part of a surrounded group (no liberties)
export const isStoneSurrounded = (board, coord) => {
  const { row, col } = coord;
  const color = board[row]?.[col];

  if (!color) return false;

  const group = getConnectedGroup(board, row, col, color);
  return !groupHasLiberties(board, group);
};

// Capture opponent groups with no liberties after the current move
export const captureStones = (board, lastMove) => {
  const { row, col } = lastMove;
  const currentPlayer = board[row][col];
  const opponent = currentPlayer === 'black' ? 'white' : 'black';
  const captured = [];

  const adjacent = getAdjacentPositions(board, row, col);

  for (const pos of adjacent) {
    if (board[pos.row][pos.col] === opponent) {
      const group = getConnectedGroup(board, pos.row, pos.col, opponent);
      if (!groupHasLiberties(board, group)) {
        group.forEach((stone) => {
          board[stone.row][stone.col] = null;
          captured.push(stone);
        });
      }
    }
  }

  return captured.length;
};

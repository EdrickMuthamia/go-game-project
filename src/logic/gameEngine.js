// Core Go game logic

/**
 * @typedef {import('../types').Grid} Grid
 * @typedef {import('../types').Player} Player
 */

/**
 * Create an empty Go board
 * @param {number} size
 * @returns {Grid}
 */
export function createEmptyBoard(size) {
  return Array.from({ length: size }, () => Array(size).fill(null));
}

/**
 * Get neighbors of a stone
 * @param {number} row
 * @param {number} col
 * @param {number} size
 * @returns {Array<[number, number]>}
 */
function getNeighbors(row, col, size) {
  const neighbors = [];
  if (row > 0) neighbors.push([row - 1, col]);
  if (row < size - 1) neighbors.push([row + 1, col]);
  if (col > 0) neighbors.push([row, col - 1]);
  if (col < size - 1) neighbors.push([row, col + 1]);
  return neighbors;
}

/**
 * Find a group of connected stones and its liberties
 * @param {number} startRow
 * @param {number} startCol
 * @param {Grid} board
 * @returns {{stones: Array<[number, number]>, liberties: number}}
 */
function findGroup(startRow, startCol, board) {
  const size = board.length;
  const player = board[startRow][startCol];
  if (!player) return { stones: [], liberties: 0 };

  const visited = new Set();
  const queue = [[startRow, startCol]];
  const groupStones = [];
  let liberties = 0;
  const libertyCoords = new Set();

  while (queue.length > 0) {
    const [row, col] = queue.shift();
    const key = `${row},${col}`;

    if (visited.has(key)) continue;
    visited.add(key);
    groupStones.push([row, col]);

    const neighbors = getNeighbors(row, col, size);
    for (const [nRow, nCol] of neighbors) {
      const neighborStone = board[nRow][nCol];
      if (neighborStone === player && !visited.has(`${nRow},${nCol}`)) {
        queue.push([nRow, nCol]);
      } else if (neighborStone === null) {
        if (!libertyCoords.has(`${nRow},${nCol}`)) {
          libertyCoords.add(`${nRow},${nCol}`);
          liberties++;
        }
      }
    }
  }

  return { stones: groupStones, liberties };
}

/**
 * Place a stone and handle captures
 * @param {Grid} board
 * @param {number} row
 * @param {number} col
 * @param {Player} player
 * @returns {Grid|null} - new board or null if invalid move
 */
export function placeStone(board, row, col, player) {
  const size = board.length;
  if (row < 0 || row >= size || col < 0 || col >= size || board[row][col]) {
    return null; // Invalid move
  }

  let newBoard = board.map(r => [...r]);
  newBoard[row][col] = player;

  // Check for captures
  const opponent = player === 'black' ? 'white' : 'black';
  const neighbors = getNeighbors(row, col, size);
  for (const [nRow, nCol] of neighbors) {
    if (newBoard[nRow][nCol] === opponent) {
      const group = findGroup(nRow, nCol, newBoard);
      if (group.liberties === 0) {
        for (const [sRow, sCol] of group.stones) {
          newBoard[sRow][sCol] = null;
        }
      }
    }
  }

  // Check for suicide
  const ownGroup = findGroup(row, col, newBoard);
  if (ownGroup.liberties === 0) {
    return null; // Suicide move
  }

  return newBoard;
}   
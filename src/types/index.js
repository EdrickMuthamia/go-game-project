// Player values: "black" or "white"
const PlayerColors = {
  BLACK: 'black',
  WHITE: 'white'
};

// A sample coordinate
const exampleCoord = {
  row: 0,
  col: 0
};

// A sample stone
const exampleStone = {
  color: PlayerColors.BLACK,
  position: { row: 2, col: 3 }
};

// A player object
const player1 = {
  id: 'p1',
  name: 'Black Player',
  color: PlayerColors.BLACK
};

const player2 = {
  id: 'p2',
  name: 'White Player',
  color: PlayerColors.WHITE
};

// A sample game state object
const gameState = {
  size: 9,
  board: Array(9).fill(null).map(() => Array(9).fill(null)),
  players: [player1, player2],
  currentPlayer: player1,
  stones: []
};

// Exporting values if you need to use them in other files
export {
  PlayerColors,
  exampleCoord,
  exampleStone,
  player1,
  player2,
  gameState
};

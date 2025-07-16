# Go Game

SDFT 14-

## Overview
This project is a simple implementation of the classic board game **Go**. The game is built using React and Vite, and features a basic playable version of Go on a configurable grid (e.g., 9x9 or 13x13).

## Features
- **Game State:** Represents the grid, showing empty intersections or whether they contain a black or white stone. Tracks whose turn it is.
- **Stone Placement:** Click on an empty intersection to place your color stone.
- **Basic Capture:** After a stone is placed, the game checks if any single, immediately adjacent opponent's stone is now completely surrounded on all four sides by the newly placed stone and existing friendly stones (i.e., has no "liberties"). If so, the captured stone is removed. (Group captures, suicide moves, and 'ko' rules are not implemented in this version.)
- **Turn Management:** Automatically switches between black and white turns after each placement.
- **Basic Score (Optional):** Simple count of each player's stones on the board for a rough idea of score.

## How to Play
1. The board starts empty. Black plays first.
2. Players take turns clicking on empty intersections to place their stones.
3. If a stone is placed such that an adjacent opponent's stone has no liberties (empty adjacent points), that stone is captured and removed from the board.
4. The game continues with players alternating turns.
5. (Optional) The score is a simple count of each player's stones on the board.

## Project Structure
- **Game State:** Manages the board and turn logic.
- **Stone Placement:** Handles user interaction for placing stones.
- **Capture Logic:** Implements basic single-stone capture rules.
- **Turn Management:** Switches turns after each move.
- **Scoring:** (Optional) Displays a simple count of stones for each player.

## Notes
- This implementation focuses on the core mechanics of Go for learning and demonstration purposes.
- Advanced rules such as group captures, suicide moves, and 'ko' are not included.

---

Enjoy playing Go!

## Collaborators
- Feysal Dahir
- Jane Kimei
- Bettson Kiptoo
- Edrick Muthamia

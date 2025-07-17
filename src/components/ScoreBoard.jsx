import React from "react";

// ScoreBoard component to display game scores and current turn.
export default function ScoreBoard({ blackCount, whiteCount, currentPlayer }) {
  // Capitalize the first letter of the current player's name (e.g., "black" becomes "Black").
  const prettyPlayer = currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1);

  return (
    // Main container for the scoreboard, styled with Tailwind CSS for layout and appearance.
    <div className="w-full max-w-xs mx-auto mb-4 p-4 bg-white rounded-lg shadow text-center border border-gray-300">
      {/* Game Score title */}
      <h2 className="text-xl font-bold mb-2">Game Score</h2>

      {/* Displays Black's score */}
      <div className="flex justify-between mb-2">
        <span className="text-black font-semibold">&#9899; Black:</span>
        <span className="font-mono">{blackCount}</span>
      </div>

      {/* Displays White's score */}
      <div className="flex justify-between mb-2">
        <span className="text-gray-600 font-semibold">&#9898; White:</span>
        <span className="font-mono">{whiteCount}</span>
      </div>

      {/* Displays whose turn it is */}
      <div className="mt-2">
        <span className="text-sm text-gray-700">
          Current Turn: <span className="font-semibold">{prettyPlayer}</span>
        </span>
      </div>
    </div>
  );
}
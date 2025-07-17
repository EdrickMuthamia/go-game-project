import React from "react";

export default function ScoreBoard({ blackCount, whiteCount, currentPlayer }) {
  const prettyPlayer = currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1);

  return (
    <div className="w-full max-w-xs mx-auto mb-4 p-4 bg-white rounded-lg shadow text-center border border-gray-300">
      <h2 className="text-xl font-bold mb-2">Game Score</h2>
      <div className="flex justify-between mb-2">
        <span className="text-black font-semibold">&#9899; Black:</span>
        <span className="font-mono">{blackCount}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600 font-semibold">&#9898; White:</span>
        <span className="font-mono">{whiteCount}</span>
      </div>
      <div className="mt-2">
        <span className="text-sm text-gray-700">
          Current Turn: <span className="font-semibold">{prettyPlayer}</span>
        </span>
      </div>
    </div>
  );
}

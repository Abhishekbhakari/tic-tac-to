import React from 'react'

const Info = ({onReset, winner, currentPlayer}) => {
  return (
    <div className="mt-6 flex flex-col items-center">
      {winner ? (
        <h2 className="text-xl font-semibold text-gray-800">
          {winner === "Draw" ? "It's a Draw!" : `Player ${winner} Wins!`}
        </h2>
      ) : (
        <h2 className="text-xl font-semibold text-gray-800">
          Current Player: <span className="text-blue-500">{currentPlayer}</span>
        </h2>
      )}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        onClick={onReset}
      >
        Restart Game
      </button>
    </div>
  )
}

export default Info

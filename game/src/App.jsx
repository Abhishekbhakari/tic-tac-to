import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Info from './components/Info';

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const winnerConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newBoard) => {
    for (let condition of winnerConditions) {
      const [a, b, c] = condition;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }

    if(newBoard.every((cell) => cell !== "")){
      return "draw";
    }

    return null;
  };
  const handleCellClick = (index) => {
    if (board[index] || winner) return; // Ignore clicks if the cell is filled or the game is over

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    const result = checkWinner(newBoard);

    setBoard(newBoard);
    setWinner(result);
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X")); // Switch player
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setWinner(null);
    setCurrentPlayer("X");
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Tic Tac Toe</h1>
      <Board board={board} handleCellClick={handleCellClick} winner={winner} />
      <Info winner={winner} currentPlayer={currentPlayer} onReset={resetGame} />
    </div>
  );
}

export default App;
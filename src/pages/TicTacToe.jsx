import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, X } from 'lucide-react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameWon, setGameWon] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [winningLine, setWinningLine] = useState([]);
  const navigate = useNavigate();

  // Winning combinations
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  // Computer moves - strategic positions to allow player to win
  const computerMoves = [1, 3]; // Top-middle and middle-left

  const checkWinner = (currentBoard) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        if (currentBoard[a] === 'heart') {
          return { winner: 'heart', line: combo };
        }
      }
    }
    return null;
  };

  const handleCellClick = (index) => {
    if (board[index] || gameWon) return;

    // Player places heart
    const newBoard = [...board];
    newBoard[index] = 'heart';
    setBoard(newBoard);

    // Check if player won
    const result = checkWinner(newBoard);
    if (result) {
      setGameWon(true);
      setWinningLine(result.line);
      setTimeout(() => setShowContinue(true), 1000);
      return;
    }

    // Computer's turn
    setTimeout(() => {
      if (computerMoves.length > 0) {
        const moveIndex = computerMoves.shift();
        if (!newBoard[moveIndex]) {
          newBoard[moveIndex] = 'cross';
          setBoard([...newBoard]);
        }
      }
    }, 500);
  };

  const handleContinue = () => {
    navigate('/valentine');
  };

  return (
    <div className="tictactoe-screen">
      <div className="tictactoe-content">
        <p className="step-label">STEP 3 OF 4</p>
        <h1 className="tictactoe-title">PLAY TO PROCEED</h1>
        <p className="turn-text">{gameWon ? '' : 'Their turn'}</p>

        <div className="game-board">
          {board.map((cell, index) => (
            <div
              key={index}
              className={`game-cell ${cell ? 'filled' : ''} ${winningLine.includes(index) ? 'winning' : ''}`}
              onClick={() => handleCellClick(index)}
            >
              {cell === 'heart' && (
                <Heart className="game-icon heart-icon" fill="#e85d75" color="#e85d75" />
              )}
              {cell === 'cross' && (
                <X className="game-icon cross-icon" color="#666" strokeWidth={3} />
              )}
            </div>
          ))}
        </div>

        {gameWon && (
          <div className="win-message">
            <p className="win-text">Yay! You just won my heart!</p>
            {showContinue && (
              <button className="continue-button" onClick={handleContinue}>
                Continue
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
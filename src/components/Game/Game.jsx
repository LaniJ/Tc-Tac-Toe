import { useState } from 'react';
import Board from '../Board/Board';
import History from '../History/History';
import Confetti from '../Confetti/Confetti';

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [winner, setWinner] = useState(null)
  const [showConfetti, setShowConfetti] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  
  const currentSquares = history[currentMove];

  const restartGame = () => {
    setShowConfetti(false);
    setXIsNext(true);
    setCurrentMove(0);
    setWinner(null);
    setGameOver(false);
    setHistory([Array(9).fill(null)]);
  }

  const checkWinner = (val, gameStatus) => {
    setGameOver(gameStatus);
    setWinner(val);
    setShowConfetti(true);
  }
  
  const handlePlay = (nextSquares) => {
    const updatedHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(updatedHistory);
    setCurrentMove(updatedHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  const jumpToMove = (move) => {
    setCurrentMove(move);
    setXIsNext( move % 2 === 0);
  }

  let status;

  if (!winner && history.length > 9) {
    status = "It's a draw! 😓"
  } else if (winner) {
    status = `${winner} wins! 🥳` 
  } else {
    status = `Next player: ${xIsNext? 'X' : 'O'}`
  }

  return (
    <div className="game">
      <h1 className='game-name'>Tic-Tac-Toe</h1>
      <p className='player-info'>{status}</p>

      <div className='game-body'>
        <Board
          xIsNext={xIsNext}
          gameOver={gameOver} 
          squares={currentSquares} 
          onPlay={handlePlay} 
          onRestart={restartGame}  
          onWinner={checkWinner}
        /> 
        <History
          history={history}
          jumpToMove={jumpToMove}
          currentMove={currentMove}
        />
      </div>
      <Confetti showConfetti={showConfetti}/>
    </div>
    );
}
 
export default Game;
import { useState } from 'react';
import Board from '../Board/Board';
import History from '../History/History'

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [winner, setWinner] = useState(null)
  const currentSquares = history[currentMove];

  const restartGame = () => {
    setXIsNext(true);
    setCurrentMove(0);
    setWinner(null);
    setHistory([Array(9).fill(null)]);
  }

  const onWinner = (val) => {
    console.log('winner', winner)
    setWinner(val)
  }
  
  const handlePlay = (nextSquares) => {
    // console.log('nextSquares ', nextSquares);
    const updatedHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(updatedHistory);
    setCurrentMove(updatedHistory.length - 1);
    setXIsNext(!xIsNext);
    // console.log('gamee -->> ', nextSquares, winner)
  }

  const jumpToMove = (move) => {
    console.log('moveing ', move)
    setCurrentMove(move);
    setXIsNext( move % 2 === 0);
  }

  // const winner = calculateWinner(currentSquares);
  // let winner;

  let status;

  if (winner) {
    console.log('winner', winner)
    status = `${winner} wins!` 
  } else {
    status = `Next player: ${xIsNext? 'X' : 'O'}`
  }

  return (
    <div className="game">
      <h1 className='game-name'>Tic-Tac-Toe</h1>
      <p className='player-info'>{status}</p>

      <div className='game-body'>
        {/* <div className='flex'> */}
          <Board
            xIsNext={xIsNext} 
            squares={currentSquares} 
            onPlay={handlePlay} 
            onRestart={restartGame}  
            checkWinner={onWinner}/> 
          <History history={history} jumpToMove={jumpToMove}/>
        {/* </div> */}
      </div>

    </div>
    );
}

// const calculateWinner = (squares) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ]

//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       console.log('in calc squ ', squares[a], squares[b], squares[c])
//       return squares[a];
//     }
//   }
//   return null;
// }
 
export default Game;
// import { useState } from 'react'
import Square from '../Square/square'

const Board = ({ xIsNext, onPlay, squares, onRestart, checkWinner }) => {

  // const [squares, setSquares] = useState(new Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);

  // console.log('winner', winner)
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log('in calc squ ', squares[a], squares[b], squares[c])
        checkWinner(squares[a])
        return squares[a];
      }
    }
    return null;
  }
  
  const handleRestart = () => {
    onRestart();
  }

  const handleClick = (index) => {

    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    
    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';
    
    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);

    onPlay(nextSquares);
  };
  
  // const winner = calculateWinner(squares);
  // console.log('winner here', winner)

  // let status;

  // if (winner) {
  //   console.log('winner', winner)
  //   status = `${winner} wins!` 
  // } else {
  //   status = `Next player: ${xIsNext? 'X' : 'O'}`
  // }

  return ( 
    <div className='container'>
      <div className='board'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button className='restart-btn' onClick={handleRestart}>Restart Game</button>
    </div>
  )
}

export default Board;
// import { useState } from 'react'
import { useState } from 'react'
import Square from '../Square/square'

const Board = ({ xIsNext, gameOver, onPlay, squares, onRestart, onWinner }) => {

  const [arr, setArr] = useState([]);

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
        setArr(lines[i]);
        onWinner(squares[a], true);
        return;
      }
    }
    return null;
  }
  
  const handleRestart = () => {
    setArr([]);
    onRestart();
  }

  const handleClick = (index) => {
    if (squares[index] || gameOver) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';
    calculateWinner(nextSquares);
    onPlay(nextSquares);
  };
  

  return ( 
    <div className='container'>
      <div className='board'>
        <Square
          winningSquare={arr.includes(0)} 
          value={squares[0]} 
          onSquareClick={() => handleClick(0)} 
        />
        <Square 
          winningSquare={arr.includes(1)}
          value={squares[1]} 
          onSquareClick={() => handleClick(1)} 
        />
        <Square 
          winningSquare={arr.includes(2)}
          value={squares[2]} 
          onSquareClick={() => handleClick(2)} 
        />
        <Square 
          winningSquare={arr.includes(3)}
          value={squares[3]} 
          onSquareClick={() => handleClick(3)} 
        />
        <Square 
          winningSquare={arr.includes(4)}
          value={squares[4]} 
          onSquareClick={() => handleClick(4)} 
        />
        <Square 
          winningSquare={arr.includes(5)}
          value={squares[5]} 
          onSquareClick={() => handleClick(5)} 
      />
        <Square 
          winningSquare={arr.includes(6)}
          value={squares[6]} 
          onSquareClick={() => handleClick(6)} 
        />
        <Square 
          winningSquare={arr.includes(7)}
          value={squares[7]} 
          onSquareClick={() => handleClick(7)} 
        />
        <Square 
          winningSquare={arr.includes(8)}
          value={squares[8]} 
          onSquareClick={() => handleClick(8)} 
        />
      </div>
      <button className='restart-btn' onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  )
}

export default Board;
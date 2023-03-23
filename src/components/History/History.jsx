import { useState } from 'react';
const History = ({ history, jumpToMove, currentMove }) => {
  const [showHistory, setShowHistory] = useState(false);

  
  const toggleHistory = () => {
    setShowHistory(!showHistory);
  }
  const jumpToPrev = (move) => {
    jumpToMove(move);
  }

  const pastMoves = history.map((item, index) => {

    let description;

    if (index > 0 && index !== currentMove) {
      description = `Go to move ${index}`
    } else if (index !== 0 && index === currentMove) {
      description = 'You are at move #' + index 
    } else {
      description = 'Go to game start'
    }

    return (
      <li key={index}>
        <button className='history-btn' onClick={() => jumpToPrev(index)}>
        {description}
        </button>
      </li>
    )
  })

  return ( 
    <div className='game-history'>
      <button className='history-btn' onClick={toggleHistory}>Show move history</button>

      {showHistory &&
        <ul className='box'>
          {pastMoves}
        </ul>
      }
    </div>
   );
}
 
export default History;
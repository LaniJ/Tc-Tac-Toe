import { useState } from 'react';
const History = ({ history, jumpToMove }) => {
  const [showHistory, setShowHistory] = useState(false);

  // console.log('history', history)
  
  const toggleHistory = () => {
    setShowHistory(!showHistory);
  }
  const jumpToPrev = (move) => {
    console.log('index val', move)
    jumpToMove(move);
  }

  const pastMoves = history.map((item, index) => {

    let description;

    if (index > 0) {
      description = `Go to move ${index}`
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
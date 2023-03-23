import './square.css';


const Square = ({ value, onSquareClick, winningSquare }) => {
  return ( 
    <button className={`square ${ winningSquare ? 'winning-squ' : ''}`} onClick={onSquareClick}>{value}</button>
   );
}
 
export default Square;
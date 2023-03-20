import './square.css';


const Square = ({ value, onSquareClick }) => {

  // const handleClick = () => {
  //   // modifySquareValue()
  //   console.log('modified')
  // }
  return ( 
    <button className="square" onClick={onSquareClick}>{value}</button>
   );
}
 
export default Square;
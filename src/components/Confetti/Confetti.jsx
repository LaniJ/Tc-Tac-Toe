import ReactConfetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'

const Confetti = ({ showConfetti }) => {
 


  const { width, height } = useWindowSize();


  return (
    <>
       {showConfetti && <ReactConfetti
        width={width}
        height={height}
        tweenDuration={1000}
       />}
    </>
   );
}
 
export default Confetti;
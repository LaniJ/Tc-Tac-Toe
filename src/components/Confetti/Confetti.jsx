import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = ({ showConfetti }) => {
  const [windowDimension, setWindowDimension] = useState({width: window.innerWidth, height: window.innerHeight});
  // const [btn, setBtn] = useState(true);

  const detectSize = () => {
    setWindowDimension({width: window.innerWidth, height: window.innerHeight});
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    }
  }, [windowDimension])

 
  return (
    <>
       {showConfetti && <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
        tweenDuration={1000}
       />}
    </>
   );
}
 
export default Confetti;
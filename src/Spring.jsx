import { useState } from 'react';
import { spring } from "motion"

const Spring = () => {
   const [isLeft, setIsLeft] = useState(true)
   const springStyleLeft = {
      transition: `transform ${spring(0.5, 0.8)}`,
      transform: 'translateX(100%) rotate(180deg)'
   }
   const springStyleRight = {
      transition: `transform ${spring(0.5, 0.8)}`,
      transform: 'translateX(-100%)'
   }
   return (
      <div className='box-container'>
         <div className='box' style={isLeft ? springStyleLeft : springStyleRight}></div>
         <button onClick={() => setIsLeft(!isLeft)}>Toggle position</button>
      </div>
   )

}
 export default Spring;
import { useEffect, useState } from 'react';
import TestMotionChild from './TestMotionChild';

const TestChild = ({refArr}) => {

   const [refReady, setRefReady] = useState(false)

   useEffect(() => {
      if (refArr && !refReady) setRefReady(true)
   }, [refArr])

   if (refReady) {
      const newArr = refArr.current.map(el => ({current: el}))

      return (
         <div style={containerStyle}>
            { newArr.map((el,i) => (<TestMotionChild key={i} refEl={el} />))}
         </div>
      )
   }
}

export default TestChild;

const containerStyle = {
   display: 'flex',
   justifyContent: 'space-between',
   position: 'sticky',
   top: 40,
}

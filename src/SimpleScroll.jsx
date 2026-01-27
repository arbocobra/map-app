import {motion, useScroll} from 'motion/react';
import { useRef } from 'react';

const SimpleScroll = () => {
   const ref = useRef()
   const boxA = useRef();
   const boxB = useRef();
   const boxC = useRef();
   const {scrollYProgress} = useScroll({ target: boxB, offset: ['start end', 'end end']});
   const containerStyle = {
      height: '300vh',
      display: 'flex',
      flexDirection: 'column',
      width: 1000,
      gap: 30,
      alignItems: 'center'
   }
   const extraDiv = {
      flex: 1,
      display: 'flex',
      border: 1,
      borderStyle: 'dashed',
      width: 400
   }

   return (
      <div ref={ref} style={containerStyle}>
         <motion.div className='box-progression' style={{ 
            scaleX: scrollYProgress,
            position: 'fixed',
            top: 400,
            left: 'calc(100% - 250)',
            width: 500,
            height: 10,
            originX: 0,
            backgroundColor: '#ff0088',
            }} />
         <div ref={boxA} style={extraDiv}></div>
         <div ref={boxB} style={extraDiv}></div>
         <div ref={boxC} style={extraDiv}></div>
      </div>
   )
}

export default SimpleScroll
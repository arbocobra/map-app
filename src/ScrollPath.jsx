import {motion, useScroll, useTransform} from 'motion/react';

const ScrollPath = () => {
   const path = 'M 10 30 L 10 20 C 10 0 40 0 40 20 C 40 40 70 40 70 20 C 70 0 100 0 100 20 C 100 40 130 40 130 20 C 130 0 160 0 160 20 C 160 40 190 40 190 20 L 190 10'
   const {scrollYProgress} = useScroll();
   const pathOffset = useTransform(scrollYProgress, [0, 1], [0, 1]);
   const pathOffsetPercent = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
   
   const box = {
         width: 20,
         height: 20,
         backgroundColor: '#ff0088',
         borderRadius: '100%',
         position: 'absolute',
         top: 0,
         left: 0,
         offsetPath: `path('${path}')`,
         offsetDistance: pathOffsetPercent,
   }

   return (
      <div style={{ position: 'relative', height: '200vh', width: 450, display: 'flex', alignContent: 'flex-start' }}>
         <div style={{position:'fixed'}}>
            <svg xmlns='http://www.w3.org/2000/svg' width='200' height='50'>
               <motion.path
                  d={path}
                  fill='transparent'
                  strokeWidth='4'
                  stroke='#ffffff'
                  strokeLinecap='round'
                  style = {{ pathLength: pathOffset }}
               />
            </svg>

            <motion.div
               style={box}
               initial={{ offsetDistance: '0%' }}
            />
         </div>
      </div>
   )
}

export default ScrollPath;
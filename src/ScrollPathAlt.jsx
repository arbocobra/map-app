import {motion, useScroll, useTransform} from 'motion/react';

const ScrollPathAlt = (props) => {
   const {targetRef} = props
   // const path = 'M 10 20 C 10 0 40 0 40 20 C 40 40 70 40 70 20 C 70 0 100 0 100 20 C 100 40 130 40 130 20 C 130 0 160 0 160 20 C 160 40 190 40 190 20'
  const pathArrayB = [
      ['M', 0, 25], 
      ['C', 0, 5, 30, 5, 30, 25], 
      ['C', 30, 25, 60, 25, 60, 25],
      ['C', 60, 5, 90, 5, 90, 25],
      ['C', 90, 25, 120, 25, 120, 25],
      ['C', 120, 5, 150, 5, 150, 25],
      ['C', 150, 25, 180, 25, 180, 25],
   ]
   const pathArray = [
      ['M', 10, 20], 
      ['C', 10, 0, 40, 0, 40, 20], 
      ['C', 40, 40, 70, 40, 70, 20],
      ['C', 70, 0, 100, 0, 100, 20],
      ['C', 100, 40, 130, 40, 130, 20],
      ['C', 130, 0, 160, 0, 160, 20],
      ['C', 160, 40, 190, 40, 190, 20],
   ]
   const offsetPath = pathArrayB.map(el => el.join(' ')).join(' ');
   const path = pathArrayB.map(el => {
      if (el[0] == 'M') {
         return `${el[0]} ${el[1] + 10} ${el[2]}`
      } else {
         return el.map((e,i) => (i % 2 == 0) ? e : e + 10).join(' ')
      }
   }).join(' ')

   const {scrollYProgress} = useScroll({target: targetRef, offset: ['start start', 'end start']});
   const pathOffset = useTransform(scrollYProgress, [0, 1], [0, 1]);
   // const pathOffsetPercent = useTransform(scrollYProgress, [-1, 0, 1, 2], ['0%', '0%', '100%', '100%']);
   const {pathOffsetPercent, opacity} = useTransform(scrollYProgress, [0, 0.01, 0.99, 1], {
      pathOffsetPercent: ['0%', '1%', '99%', '100%'],
      opacity: [0, 1, 1, 0]
   });
   

   // const {pathOffsetA, pathOffsetB} = useTransform(scrollYProgress, [0, 0.49, 0.5, 1], {
   //    pathOffsetA: [], 
   //    pathOffsetB: []
   // });
   // const pathOffsetPercent = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

   const mapContainerStyle = {
      position: 'relative',
      height: 50,
      width: 200,
      // margin: '-10px',
      // border: '2px #fff solid'
   }
   const dot = {
      width: 20,
      height: 20,
      backgroundColor: '#ff0088',
      borderRadius: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      offsetPath: `path('${offsetPath}')`,
      offsetDistance: pathOffsetPercent,
      opacity
   }
   // const dotB = {
   //    width: 20,
   //    height: 20,
   //    backgroundColor: '#0095ff',
   //    borderRadius: '100%',
   //    position: 'absolute',
   //    top: 0,
   //    left: 0,
   //    offsetPath: `path('${path}')`,
   //    offsetDistance: pathOffsetPercentB,
   // }

   return (
      <div style={ mapContainerStyle }>
         <svg xmlns='http://www.w3.org/2000/svg' width='200' height='50' viewBox='-10 -10 200 50' style={{backgroundColor: 'green'}}>
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
            style={dot}
            initial={{ offsetDistance: '0%' }}
         />
         {/* <motion.div
            style={dotB}
            initial={{ offsetDistance: '50%' }}
         /> */}
      </div>
   )
}

export default ScrollPathAlt;
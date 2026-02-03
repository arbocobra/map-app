import { motion, useScroll, useTransform } from 'motion/react';

const Dot = ({ pathArr, el, resize, text }) => {
   const { scrollYProgress } = useScroll({ target: el, offset: ['start start', 'end start'] });
   const { pathOffsetPercent, opacity } = useTransform(scrollYProgress, [0, 0.01, 0.99, 1], {
      pathOffsetPercent: ['0%', '1%', '99%', '100%'],
      opacity: [0, 1, 1, 0],
   });

   const offsetPath = pathArr.map((el) => (isNaN(el) ? el : el * resize)).join(' ');

   const dotStyle = {
      width: 3,
      height: 3,
      border: 'black solid 1px',
      backgroundColor: 'white',
      borderRadius: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      offsetPath: `path('${offsetPath}')`,
      offsetDistance: pathOffsetPercent,
      offsetRotate: '0deg',
      opacity,
   };
   const textStyle = {
      position: 'relative',
      bottom: 10,
      right: 35,
      height: 12,
      width: 30,
      background: 'white',
      color: 'black',
      fontSize: 8,
      textTransform: 'uppercase',
      border: '1px solid black',
   };

   return (
      <motion.div style={dotStyle} initial={{ offsetDistance: '0%' }}>
         <div style={textStyle}>{text}</div>
      </motion.div>
   );
};

export default Dot;
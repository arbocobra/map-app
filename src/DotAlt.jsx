import { motion, useScroll, useTransform } from 'motion/react';

const DotAlt = ({ pathArr, el }) => {
   const { scrollYProgress } = useScroll({ target: el, offset: ['start start', 'end start'] });
   const { pathOffsetPercent, opacity } = useTransform(scrollYProgress, [0, 0.01, 0.99, 1], {
      pathOffsetPercent: ['0%', '1%', '99%', '100%'],
      opacity: [0, 1, 1, 0],
   });

   // const offsetPath = pathArr.map((el) => (isNaN(el) ? el : el * resize)).join(' ');
   const offsetPath = pathArr.join(' ');

   const dotStyle = {
      // width: 3,
      // height: 3,
      // border: 'black solid 1px',
      // backgroundColor: 'white',
      // borderRadius: '100%',
      // position: 'absolute',
      // top: 0,
      // left: 0,
      zIndex: 5,
      offsetPath: `path('${offsetPath}')`,
      offsetDistance: pathOffsetPercent,
      offsetRotate: '0deg',
      opacity,
   };

   return (
      // <motion.div style={dotStyle} initial={{ offsetDistance: '0%' }}/>
      <motion.circle style={dotStyle} r='5' fill='black' initial={{ offsetDistance: '0%' }} />
   );
};

export default DotAlt;
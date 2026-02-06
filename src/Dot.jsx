import { motion, useScroll, useTransform } from 'motion/react';

const Dot = ({ pathArr, el}) => {
   const { scrollYProgress } = useScroll({ target: el, offset: ['start start', 'end start'] });
   const { pathOffsetPercent, opacity } = useTransform(scrollYProgress, [0, 0.01, 0.99, 1], {
      pathOffsetPercent: ['0%', '1%', '99%', '100%'],
      opacity: [0, 1, 1, 0],
   });

   const offsetPath = pathArr.join(' ');

   const dotStyle = {
      zIndex: 5,
      offsetPath: `path('${offsetPath}')`,
      offsetDistance: pathOffsetPercent,
      offsetRotate: '0deg',
      opacity,
   };

   return (
      <motion.circle style={dotStyle} r='4' fill='#fff' stroke='#000' strokeWidth={2} initial={{ offsetDistance: '0%' }} />
   );
};
export default Dot;
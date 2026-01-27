import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const Path = ({ pathArr, ref, colour }) => {
   const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
   const opacity = useTransform(scrollYProgress, [0, 0.01, 1], [0, 1, 1]);
   const pathMove = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
      restDelta: 0.05,
   });

   const path = pathArr.join(' ');
   const pathStyle = { pathLength: pathMove, opacity };

   return (
      <motion.path 
         style={pathStyle}
         d={path}
         fill='transparent'
         strokeWidth='4'
         stroke={colour}
         strokeLinecap='round'
      />
   );
};

export default Path;
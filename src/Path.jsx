import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'motion/react';
import { useEffect, useState } from 'react';

const Path = ({ id, pathArr, el, colour }) => {
   const { scrollYProgress } = useScroll({ target: el, offset: ['start start', 'end start'] });
   const opacity = useTransform(scrollYProgress, [0, 0.01, 1], [0, 1, 1]);
   const pathMove = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
      restDelta: 0.05,
   });

   const [display, setDisplay] = useState(false)

   const path = pathArr.join(' ');
   const pathStyle = { pathLength: pathMove, opacity };
   
   useMotionValueEvent(scrollYProgress, 'change', () => {
      if (!display) setDisplay(true)
   })

   // useEffect(() => {
   //    if (display) console.log(id)
   // }, [display])

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
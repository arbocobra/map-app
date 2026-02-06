import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

const DotAlt = ({ pathArr, viewRef, hideRef }) => {

   const startView = useScroll({ target: viewRef, offset: ['start start', 'end start'] }).scrollYProgress;
   const endView = useScroll({ target: hideRef, offset: ['start start', 'end start'] }).scrollYProgress;

   const [display, setDisplay] = useState(false)

   const active = { opacity: display ? 1 : 0, transition: { duration: 0.5 } }
   const pulse = {
      opacity: [0.7, 0],
      scale: [1, 1.9],
      transition: {duration: 1.8, repeat: Infinity, ease: "easeInOut"}
   }

   useMotionValueEvent(startView, "change", (latest) => {
      if (!display && latest < 1) setDisplay(true)
      else if (display && latest === 0) setDisplay(false)
   })
   
   useMotionValueEvent(endView, "change", (latest) => {
      if (display) setDisplay(false)
   })

   return (
      <motion.g animate={active} >
         {/* <motion.circle r='6' cx={pathArr[0]} cy={pathArr[1]} fill='#fff' /> */}
         <motion.circle r='5' cx={pathArr[0]} cy={pathArr[1]} fill='#000' animate={pulse}/>
         <motion.circle r='4' cx={pathArr[0]} cy={pathArr[1]} strokeWidth={2} stroke='#000' fill='#fff' />
      </motion.g>
   );
};

export default DotAlt;
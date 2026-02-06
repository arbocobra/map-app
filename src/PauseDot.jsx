import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { useState, useEffect } from 'react';

const PauseDot = ({ pathArr, el, pauseRef}) => {
   const startView = useScroll({ target: el, offset: ['start start', 'end start'] }).scrollYProgress;
   const endView = useScroll({ target: pauseRef, offset: ['start start', 'end start'] }).scrollYProgress;
   
   const [active, setActive] = useState(false)
   const [paused, setPaused] = useState(false)

   const pathOffsetPercent = useTransform(startView, [0, 0.01, 1], ['0%', '1%', '100%']);

   useMotionValueEvent(startView, 'change', (latest) => {
      if (active) {
         if (latest == 0) setActive(false)
         else if (latest == 1) setPaused(true)
         else if (latest < 1 && paused) setPaused(false)
      } else {
         if (latest < 1) setActive(true)
      }
   })
   
   useMotionValueEvent(endView, 'change', (latest) => {
      if (active) setActive(false)
      else {
         if (latest == 0) setActive(true)
      }
   })

   useEffect (() => {
      if (!active && paused) setPaused(false)
      else if (active && !paused && startView.current == 1) setPaused(true)
   }, [active])

   // useEffect (() => {
   //    // console.log('active: ' + active + ' | currentStart: ' + startView.current + ' | currentEnd: ' + endView.current)
   //    // console.log('active', startView.current)
   //    if (active) console.log('active on', startView.current)
   //    else console.log('active off', startView.current)

   //    // if (active && startView.current > 0.99) console.log('pulse on')
   //    // if (!active && startView.current > 0) console.log('pulse off')
   // }, [active])

   // useEffect(() => {
   //    if (paused) console.log('pause on')
   //    else console.log('pause off')
   // }, [paused])

   const offsetPath = pathArr.join(' ');

   const dotStyle = {
      zIndex: 5,
      offsetPath: `path('${offsetPath}')`,
      offsetDistance: pathOffsetPercent,
      offsetRotate: '0deg',
   };

   const pulseStyle = {
      offsetPath: `path('${offsetPath}')`,
      offsetDistance: pathOffsetPercent,
   }

   const pulse = {
      opacity: [0.7, 0],
      scale: [1, 1.9],
      display: paused ? 'inline' : 'none',
      transition: {
         default: {duration: 1.8, repeat: Infinity, ease: 'easeInOut'},
         display: { duration: 0.3, repeat: 0}
      }
   }

   return (
      <>
         <motion.circle r='5' style={pulseStyle} fill='#000' animate={pulse} initial={{ opacity: 0 }}/>
         <motion.circle style={dotStyle} r='4' fill='#fff' stroke='#000' strokeWidth={2} initial={{ offsetDistance: '0%' }} animate={{ opacity: active ? 1 : 0, transition: { duration: 0.5 } }} />
      </>
   );
};
export default PauseDot;
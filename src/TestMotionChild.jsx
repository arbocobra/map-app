import { motion, useScroll, useTransform } from 'motion/react';

const TestMotionChild = ({refEl}) => {
   
   const { scrollYProgress } = useScroll({target: refEl, layoutEffect: false, offset: ['start start', 'end start'] });
   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
   const childStyle = {
      height: 20,
      width: 20,
      borderRadius: '100%',
      background: 'blue',
      opacity,
   }

   return (
      <motion.div style={childStyle}></motion.div>
   )
}
export default TestMotionChild;
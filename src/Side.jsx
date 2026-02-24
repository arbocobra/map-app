import { motion, useScroll, useTransform } from 'motion/react';
// import { textA, textB, textB2, textC, textD, textE, textF, textG, textH, textI, textJ, textK, textL, textM, textN, textO, textP } from './paths/text'; textReference
import { textReference } from './paths/text'; 
import { path1Start } from './paths/pathStart';
import { useState, useEffect } from 'react';

const Side = ({ targetArray, ref1, ref2, ref3, ref4, ref5 }) => {

   const [refReady, setRefReady] = useState(false)

   useEffect(() => {
      if (targetArray && !refReady) setRefReady(true)
   }, [targetArray])
   
   if (refReady) {
      const refArray = targetArray.current.map(el => ({current: el}))
      return (
         <div className='side-container'>
         <div className='side-box'>
            <div className='text-box'>
               <TitleDisplay title={'Book One: The Eye of the World'} el={ref1} />
               { refArray.map((el,i) => (<TextDisplay key={`text-${i}`} val={textReference[i]} el={el} />))}
            </div>
         </div>
         </div>
      )
   }
}

export default Side;

const TitleDisplay = ({title, el}) => {
   const scroll = useScroll({ target: el, offset: ['start start', 'end start'] }).scrollYProgress;
   // const display = (el) => [scrollA].includes(section)
   const opacity = useTransform(scroll, [0, .6, 1], [0,1,0])
   
   return (
      <motion.div className='text book-title font-playfair' style={{opacity}}>{title}</motion.div>
   )
}

const TextDisplay = ({val, el}) => {

   const scroll = useScroll({ target: el, offset: ['start start', 'end start'] }).scrollYProgress;
   const opacity = useTransform(scroll, [0, .2, .8, 1], [0, 1, 1, 0])
   const translateY = useTransform(scroll, [0, 0.3, 0.7, 1], [0, -400, -400, -800])
   // const description = val.filter((_,i) => i > 0)
   const description = Array.isArray(val) ? val.filter((_,i) => i > 0) : val.description;

   const nameStyle = {
      fontSize: 14,
      color: '#333333',
      fontStyle: 'italic',
      paddingBottom: 10
   }

   return (
      <motion.div className='text description font-roboto font-light' style={{translateY}}>
         <motion.p style={{...nameStyle, opacity}}>{Array.isArray(val) ? val[0] : val.characters}</motion.p>
         { description.map((el,i) => (<motion.p key={`text-${i}`} style={{opacity}}>{el}</motion.p>))}
      </motion.div>
   )
}

// const tempSideStyle = {
//     flex: 1,
//     display: 'flex',
//     flexFlow: 'column nowrap',
//     gap: 30,
//     width: '100%',
//     height: 600,
//     alignItems: 'flex-end'
//   }
//   const infoBoxStyle = {
//     border: '1px dotted black',
//     width: 350,
//     position: 'fixed',
//     height: 600,
//     display: 'flex',
//   }
//   const calloutStyle = {
//     width:1400,
//     height: 100,
//     border: '1px red solid'
//   }
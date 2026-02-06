import { motion, useScroll, useTransform } from 'motion/react';
import { textA, textB, textB2, textC, textD, textE, textF, textG, textH, textI, textJ, textK, textL, textM, textN, textO, textP } from './paths/text';
import { path1Start } from './paths/pathStart';
import { useState, useEffect } from 'react';

const Side = (props) => {
   const { refA, refB, refB2, refC, refD, refE, refF, refG, refH, refI, refJ, refK, refL, refM, refN, refO, refP, ref1, ref2, ref3, ref4, ref5 } = props
   const [scrollStage, setScrollStage] = useState(0);
   const xPoint = path1Start[0] + 1250
   const yPoint = path1Start[1]
   // const topPoint = '1150,100'
   // const bottomPoint = '1150, 1500'
   // const scrollA = useScroll({ target: ref1, offset: ['start start', 'end start'] }).scrollYProgress;
   // const titleDisplay = (section) => [scrollA].includes(section)
   return (
      <div className='side-container'>
        <div className='side-box'>
         <div className='text-box'>
            <TitleDisplay title={'Book One'} el={ref1} />
            <TextDisplay val={textA} el={refA} />
            <TextDisplay val={textB} el={refB} />
            <TextDisplay val={textB2} el={refB2} />
            <TextDisplay val={textC} el={refC} />
            <TextDisplay val={textD} el={refD} />
            <TextDisplay val={textE} el={refE} />
            <TextDisplay val={textF} el={refF} />
            <TextDisplay val={textG} el={refG} />
            <TextDisplay val={textH} el={refH} />
            <TextDisplay val={textI} el={refI} />
            <TextDisplay val={textJ} el={refJ} />
            <TextDisplay val={textK} el={refK} />
            <TextDisplay val={textL} el={refL} />

            <TextDisplay val={textM} el={refM} />
            <TextDisplay val={textN} el={refN} />
            <TextDisplay val={textO} el={refO} />
            <TextDisplay val={textP} el={refP} />


            {/* <TextDisplay text={'Two'} el={refB} />
            <TextDisplay text={'Three'} el={refC} />
            <TextDisplay text={'Four'} el={refD} />
            <TextDisplay text={'Five'} el={refE} />
            <TextDisplay text={'Six'} el={refF} />
            <TextDisplay text={'Seven'} el={refG} />
            <TextDisplay text={'Eight'} el={refH} /> */}
         </div>
        </div>
        {/* <motion.div class='side-extend'>
            <motion.svg
               xmlns='http://www.w3.org/2000/svg'
               width={1278}
               height={600}
               
               viewBox='0 0 3195 1500'
               style={{ background:'red', opacity:0.3 }}
            >
               <motion.polygon points={`${xPoint},${yPoint} 1150,100 1150, 1500`} style={{fill:'blue',opacity:0.4}} />
               
            </motion.svg>
        </motion.div> */}
      </div>
   )
}

export default Side;

const TitleDisplay = ({title, el}) => {
   const scroll = useScroll({ target: el, offset: ['start start', 'end start'] }).scrollYProgress;
   // const display = (el) => [scrollA].includes(section)
   const opacity = useTransform(scroll, [0, .6, 1], [0,1,0])
   
   return (
      <motion.div className='text book-title' style={{opacity}}>{title}</motion.div>
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
      color: '#333333'
   }

   return (
      <motion.div className='text description' style={{translateY}}>
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
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import Path from './Path';
import Dot from './Dot';
import PauseDot from './PauseDot';
import { pathReference } from './paths/pathRef';

const Map = ({ targetArray, ref1, ref2, ref3, ref4, ref5 }) => {

   const [refReady, setRefReady] = useState(false)

   const [width, height] = [1945, 1500];
   const resize = 0.4;

   const [scrollStage, setScrollStage] = useState(0);
   const scrollA = useScroll({ target: ref1, offset: ['start start', 'end start'] }).scrollYProgress;
   const scrollB = useScroll({ target: ref2, offset: ['start start', 'end start'] }).scrollYProgress;
   const scrollC = useScroll({ target: ref3, offset: ['start start', 'end start'] }).scrollYProgress;
   const scrollD = useScroll({ target: ref4, offset: ['start start', 'end start'] }).scrollYProgress;
   const scrollE = useScroll({ target: ref5, offset: ['start start', 'end start'] }).scrollYProgress;
   
   scrollA.on('change', () => {
      if (scrollStage === 0) return;
      setScrollStage(0);
   });
   scrollB.on('change', () => {
      if (scrollStage === 1) return;
      setScrollStage(1);
   });
   scrollC.on('change', () => {
      if (scrollStage === 2) return;
      setScrollStage(2);
   });
   scrollD.on('change', () => {
      if (scrollStage === 3) return;
      setScrollStage(3);
   });
   scrollE.on('change', () => {
      if (scrollStage === 4) return;
      setScrollStage(4);
   });

   const scaleA = useTransform(scrollA, [0, 1], [1, 2])

   const scaleB = useTransform(scrollB, [0, 0.65], [2, 3.5]);

   const translateXC = useTransform(scrollC, [0, 0.65], [0, -500]);

   const scaleD = useTransform(scrollD, [0, 0.15, 0.35], [3.5, 2, 3.5]);
   const translateXD = useTransform(scrollD, [0, 0.35], [-500, -2050]);
   const translateYD = useTransform(scrollD, [0, .35], [0, 1400]);

   const scaleE = useTransform(scrollE, [0, 1], [3.5, 1]);
   const translateXE = useTransform(scrollE, [0, 1], [-2050, 0]);
   const translateYE = useTransform(scrollE, [0, 1], [1400, 0]);

   const calculatedDimensions = { width: width * resize, height: height * resize };

   // Stage 0 = A | Stage 1 = B | Stage 2 = C | Stage 3 = D
   const pathTransform = {
      translateX: scrollStage < 2 ? 0 : scrollStage == 2 ? translateXC : scrollStage == 3 ? translateXD : translateXE,
      translateY: scrollStage < 3 ? 0 : scrollStage == 3 ? translateYD : translateYE,
      scale: scrollStage == 0 ? scaleA : scrollStage == 1 ? scaleB : scrollStage == 2 ? scaleB : scrollStage == 3 ? scaleD : scaleE
   };

   useEffect(() => {
      if (targetArray && !refReady) setRefReady(true)
   }, [targetArray])
   
   if (refReady) {
      const refArray = targetArray.current.map(el => ({current: el}))
      return (
         <div className='map-container' style={calculatedDimensions}>
            <div className='map-inner' style={calculatedDimensions}>
               <motion.svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={width * resize}
                  height={height * resize}
                  viewBox='0 0 1945 1500'
               >
                  <motion.g style={pathTransform}>
                     <image width='1945' height='1500' href='/src/assets/WOT-RandlandMap-BW.jpg' />
                     { refArray.filter((_,i) => i < 16).map((r,i) => (<Path key={`path-${i}`} id={i} pathArr={pathReference[i].path} el={r} colour={pathReference[i].color} />)) }
                  </motion.g>
                  <motion.g style={pathTransform}>
                     { refArray.filter((_,i) => i < 16).map((r,i) => {
                        if (i == 15) return (<PauseDot key={`dot-${i}`} pathArr={pathReference[i].path} el={r} pauseRef={ref5} />)
                        else if (pathReference[i].pause) return (<PauseDot key={`dot-${i}`} pathArr={pathReference[i].path} el={r} pauseRef={refArray[pathReference[i].pause]} />)
                        else return (<Dot key={`dot-${i}`} pathArr={pathReference[i].path} el={r} />)
                     })}
                     <motion.rect width='1945' height='1500' fill='none' />
                  </motion.g>
               </motion.svg>
            </div>
         </div>
      );
   }
};

export default Map;
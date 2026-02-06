import { path1Array, path2Array, path3Array, path4Array, path5Array, path6Array, path7Array, path8Array, path9Array, path10Array, path11Array, path12Array, path13Array, path14Array, path15Array, path16Array } from './paths/shape1';
import { path1Start, path2Start, path3Start, path4Start, path5Start, path6Start, path7Start, path8Start, path9Start, path10Start, path11Start, path12Start, path13Start, path14Start, path15Start, path16Start } from './paths/pathStart';
import { textA, textB, textB2, textC, textD, textE } from './paths/text';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import Path from './Path';
import Dot from './Dot';
import DotAlt from './DotAlt';
import PauseDot from './PauseDot';

const Map = (props) => {
   const { refA, refB, refB2, refC, refD, refE, refF, refG, refH, refI, refJ, refK, refL, refM, refN, refO, refP, refQ, ref1, ref2, ref3, ref4, ref5 } = props

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

   const pathColour = {
      a: '#ff0032', //all
      b: '#ffc600', //EgPe
      c: '#0016ff', //RaMaTh
      d: '#0098ff', //RaMa
      e: '#00d165', //MoNaLa
      f: '#b0ff74', //MoNaLaEgPe
      g: '#ff6e39', //MoNaLaEgPeRaMaLo
      h: '#ff4398', //R
   }

   const calculatedDimensions = { width: width * resize, height: height * resize };

   // Stage 0 = A | Stage 1 = B | Stage 2 = C | Stage 3 = D
   const pathTransform = {
      translateX: scrollStage < 2 ? 0 : scrollStage == 2 ? translateXC : scrollStage == 3 ? translateXD : translateXE,
      translateY: scrollStage < 3 ? 0 : scrollStage == 3 ? translateYD : translateYE,
      scale: scrollStage == 0 ? scaleA : scrollStage == 1 ? scaleB : scrollStage == 2 ? scaleB : scrollStage == 3 ? scaleD : scaleE
   };

   // useEffect(() => {
   //    if (scrollStage === 0) console.log('stage 0');
   //    else if (scrollStage === 1) console.log('stage 1');
   //    else if (scrollStage === 2) console.log('stage 2');
   //    else if (scrollStage === 3) console.log('stage 3');
   //    else if (scrollStage === 4) console.log('stage 4');
   // }, [scrollStage]);
   
   return (
      <div className='map-container' style={calculatedDimensions}>
         <div className='map-inner' style={calculatedDimensions}>
            <motion.svg
               xmlns='http://www.w3.org/2000/svg'
               width={width * resize}
               height={height * resize}
               viewBox='0 0 1945 1500'
               // style={{ zIndex: 2 }}
            >
               <motion.g style={pathTransform}>
                  <mask id='frame'>
                     <motion.rect x={110} y={110} width={1725} height={1280} fill='white' />
                  </mask>
                  <image mask='url(#frame)' width='1945' height='1500' href='/src/assets/WOT-RandlandMap-BW.jpg' />
                  <Path id={'1A'} pathArr={path1Array} el={refA} colour={pathColour.a} />
                  <Path id={'2B'} pathArr={path2Array} el={refB} colour={pathColour.a} />
                  <Path id={'3C'} pathArr={path3Array} el={refC} colour={pathColour.b} />
                  <Path id={'4D'} pathArr={path4Array} el={refD} colour={pathColour.c} />
                  <Path id={'5E'} pathArr={path5Array} el={refE} colour={pathColour.b} />
                  <Path id={'6F'} pathArr={path6Array} el={refF} colour={pathColour.d} />
                  <Path id={'7G'} pathArr={path7Array} el={refG} colour={pathColour.d} />
                  <Path id={'8H'} pathArr={path8Array} el={refH} colour={pathColour.d} />
                  <Path id={'9I'} pathArr={path9Array} el={refI} colour={pathColour.e} />
                  <Path id={'10J'} pathArr={path10Array} el={refJ} colour={pathColour.f} />
                  <Path id={'11K'} pathArr={path11Array} el={refK} colour={pathColour.g} />
                  <Path id={'12L'} pathArr={path12Array} el={refL} colour={pathColour.g} />
                  <Path id={'13M'} pathArr={path13Array} el={refM} colour={pathColour.g} />
                  <Path id={'14N'} pathArr={path14Array} el={refN} colour={pathColour.h} />
                  <Path id={'15O'} pathArr={path15Array} el={refO} colour={pathColour.h} />
                  <Path id={'16P'} pathArr={path16Array} el={refP} colour={pathColour.g} />
               </motion.g>
               <motion.g style={pathTransform}>
                  <Dot pathArr={path1Array} el={refA} />
                  <PauseDot pathArr={path2Array} el={refB} pauseRef={refI} />
                  <Dot pathArr={path3Array} el={refC} />
                  <Dot pathArr={path4Array} el={refD} />
                  <Dot pathArr={path5Array} el={refE} />
                  <Dot pathArr={path6Array} el={refF} />
                  <Dot pathArr={path7Array} el={refG} />
                  <Dot pathArr={path8Array} el={refH} />
                  <Dot pathArr={path9Array} el={refI} />
                  <Dot pathArr={path10Array} el={refJ} />
                  <Dot pathArr={path11Array} el={refK} />
                  <Dot pathArr={path12Array} el={refL} />
                  <Dot pathArr={path13Array} el={refM} />
                  <Dot pathArr={path14Array} el={refN} />
                  <Dot pathArr={path15Array} el={refO} />
                  <Dot pathArr={path16Array} el={refP} />
                  <motion.rect width='1945' height='1500' fill='none' />
               </motion.g>
               {/* <motion.g style={pathTransform}>
                  <DotAlt pathArr={path1Start} viewRef={refA} hideRef={refB} /> 
                  <DotAlt pathArr={path2Start} viewRef={refB} hideRef={refC} />
                  <DotAlt pathArr={path3Start} viewRef={refC} hideRef={refJ} />
                  <DotAlt pathArr={path5Start} viewRef={refD} hideRef={refF} />
                  <DotAlt pathArr={path6Start} viewRef={refE} hideRef={refG} />
                  <DotAlt pathArr={path10Start} viewRef={refF} hideRef={refK} />
                  <DotAlt pathArr={path7Start} viewRef={refG} hideRef={refH} />
                  <DotAlt pathArr={path8Start} viewRef={refH} hideRef={refI} />
                  <DotAlt pathArr={path11Start} viewRef={refI} hideRef={refL} />
                  <DotAlt pathArr={path11Start} viewRef={refK} hideRef={refP} />
                  <DotAlt pathArr={path12Start} viewRef={refL} hideRef={refM} />
                  <DotAlt pathArr={path13Start} viewRef={refM} hideRef={refN} />
                  <DotAlt pathArr={path16Start} viewRef={refN} hideRef={refP} />
                  <DotAlt pathArr={path15Start} viewRef={refO} hideRef={refP} />
                  <DotAlt pathArr={path14Start} viewRef={refP} hideRef={refQ} />
                  <DotAlt pathArr={path13Start} viewRef={refQ} hideRef={ref5} />
                  <motion.rect width='1945' height='1500' fill='none' />
               </motion.g> */}
            </motion.svg>
         </div>
      </div>
   );
};

export default Map;
import {
   path1Array,
   path2Array,
   path3Array,
   path4Array,
   path5Array,
   path6Array,
   path7Array,
   path8Array,
   path9Array,
   path10Array,
   path11Array,
   path12Array,
   path13Array,
   path14Array,
   path15Array,
   path16Array
} from './paths/shape1';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import Path from './Path';
import Dot from './Dot';

const Map = (props) => {
   const { refA, refB, refC, refD, refE, refF, refG, refH, refI, refJ, refK, refL, refM, refN, refO, refP, ref1, ref2, ref3, ref4, ref5 } = props

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

   const scaleB = useTransform(scrollB, [0, 1], [2, 3.5]);

   // const translateXC = useTransform(scrollC, [0, 1], [0, -500]);
   // const translateXCOffset = useTransform(scrollC, [0, 1], [0, -500 * resize]);

   // const scaleD = useTransform(scrollD, [0, 0.4, 1], [3, 2, 3.5]);
   // const translateXD = useTransform(scrollD, [0, 1], [-500, -2050]);
   // const translateYD = useTransform(scrollD, [0, 1], [0, 1400]);
   // const translateXDOffset = useTransform(scrollD, [0, 1], [-500 * resize, -2050 * resize]);
   // const translateYDOffset = useTransform(scrollD, [0, 1], [0, 1400 * resize]);

   const translateXC = useTransform(scrollC, [0, 0.65], [0, -500]);
   const translateXCOffset = useTransform(scrollC, [0, 0.65], [0, -500 * resize]);

   const scaleD = useTransform(scrollD, [0, 0.15, 0.35], [3.5, 2, 3.5]);
   const translateXD = useTransform(scrollD, [0, 0.35], [-500, -2050]);
   const translateYD = useTransform(scrollD, [0, .35], [0, 1400]);
   const translateXDOffset = useTransform(scrollD, [0, .35], [-500 * resize, -2050 * resize]);
   const translateYDOffset = useTransform(scrollD, [0, .35], [0, 1400 * resize]);

   const scaleE = useTransform(scrollE, [0, 1], [3.5, 1]);
   const translateXE = useTransform(scrollE, [0, 1], [-2050, 0]);
   const translateYE = useTransform(scrollE, [0, 1], [1400, 0]);
   const translateXEOffset = useTransform(scrollE, [0, 1], [-2050 * resize, 0]);
   const translateYEOffset = useTransform(scrollE, [0, 1], [1400 * resize, 0]);

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

   // Stage 0 = A | Stage 1 = B | Stage 2 = C | Stage 3 = D
   const pathTransform = {
      translateX: scrollStage < 2 ? 0 : scrollStage == 2 ? translateXC : scrollStage == 3 ? translateXD : translateXE,
      translateY: scrollStage < 3 ? 0 : scrollStage == 3 ? translateYD : translateYE,
      scale: scrollStage == 0 ? scaleA : scrollStage == 1 ? scaleB : scrollStage == 2 ? scaleB : scrollStage == 3 ? scaleD : scaleE
   };
   const dotTransform = {
      translateX: scrollStage < 2 ? 0 : scrollStage == 2 ? translateXCOffset : scrollStage == 3 ? translateXDOffset : translateXEOffset,
      translateY: scrollStage < 3 ? 0 : scrollStage == 3 ? translateYDOffset : translateYEOffset,
      scale: scrollStage == 0 ? scaleA : scrollStage == 1 ? scaleB : scrollStage == 2 ? scaleB : scrollStage == 3 ? scaleD : scaleE
   };
   const mapContainerStyle = {
      position: 'fixed',
      top: 50,
      width: width * resize,
      height: height * resize,
   };
   const containerStyle = {
      position: 'relative',
      width: width * resize,
      height: height * resize,
   };
   const dotContainerStyle = {
      ...dotTransform,
      width: width * resize,
      height: height * resize,
      position: 'absolute',
      top: 0,
      zIndex: 3,
   };
   const pathContainerStyle = {
      ...pathTransform,
   };

   useEffect(() => {
      if (scrollStage === 0) console.log('stage 0');
      else if (scrollStage === 1) console.log('stage 1');
      else if (scrollStage === 2) console.log('stage 2');
      else if (scrollStage === 3) console.log('stage 3');
      else if (scrollStage === 4) console.log('stage 4');
   }, [scrollStage]);

   return (
      <div style={mapContainerStyle}>
         <div style={containerStyle}>
            <motion.svg
               xmlns='http://www.w3.org/2000/svg'
               width={width * resize}
               height={height * resize}
               viewBox='0 0 1945 1500'
               style={{ zIndex: 2 }}
            >
               <motion.g style={pathContainerStyle}>
                  <mask id='frame'>
                     <motion.rect x={110} y={110} width={1725} height={1280} fill='white' />
                  </mask>
                  <image mask='url(#frame)' width='1945' height='1500' href='/src/assets/WOT-RandlandMap-BW.webp' />
                  <Path pathArr={path1Array} ref={refA} colour={pathColour.a} />
                  <Path pathArr={path2Array} ref={refB} colour={pathColour.a} />
                  <Path pathArr={path3Array} ref={refC} colour={pathColour.b} />
                  <Path pathArr={path4Array} ref={refD} colour={pathColour.c} />
                  <Path pathArr={path5Array} ref={refE} colour={pathColour.b} />
                  <Path pathArr={path6Array} ref={refF} colour={pathColour.d} />
                  <Path pathArr={path7Array} ref={refG} colour={pathColour.d} />
                  <Path pathArr={path8Array} ref={refH} colour={pathColour.d} />
                  <Path pathArr={path9Array} ref={refI} colour={pathColour.e} />
                  <Path pathArr={path10Array} ref={refJ} colour={pathColour.f} />
                  <Path pathArr={path11Array} ref={refK} colour={pathColour.g} />
                  <Path pathArr={path12Array} ref={refL} colour={pathColour.g} />
                  <Path pathArr={path13Array} ref={refM} colour={pathColour.g} />
                  <Path pathArr={path14Array} ref={refN} colour={pathColour.h} />
                  <Path pathArr={path15Array} ref={refO} colour={pathColour.h} />
                  <Path pathArr={path16Array} ref={refP} colour={pathColour.g} />
               </motion.g>
            </motion.svg>
            <motion.div style={dotContainerStyle}>
               <Dot pathArr={path1Array} ref={refA} resize={resize} text={'all'} />
               <Dot pathArr={path2Array} ref={refB} resize={resize} text={'all'} />
               <Dot pathArr={path3Array} ref={refC} resize={resize} text={'p,e'} />
               <Dot pathArr={path4Array} ref={refD} resize={resize} text={'r,m,t'} />
               <Dot pathArr={path5Array} ref={refE} resize={resize} text={'p,e'} />
               <Dot pathArr={path6Array} ref={refF} resize={resize} text={'r,m'} />
               <Dot pathArr={path7Array} ref={refG} resize={resize} text={'r,m'} />
               <Dot pathArr={path8Array} ref={refH} resize={resize} text={'r,m'} />
               <Dot pathArr={path9Array} ref={refI} resize={resize} text={'m,l,n'} />
               <Dot pathArr={path10Array} ref={refJ} resize={resize} text={'m,l,n,p,e'} />
               <Dot pathArr={path11Array} ref={refK} resize={resize} text={'all'} />
               <Dot pathArr={path12Array} ref={refL} resize={resize} text={'all'} />
               <Dot pathArr={path13Array} ref={refM} resize={resize} text={'all'} />
               <Dot pathArr={path14Array} ref={refN} resize={resize} text={'r'} />
               <Dot pathArr={path15Array} ref={refO} resize={resize} text={'r'} />
               <Dot pathArr={path16Array} ref={refP} resize={resize} text={'all'} />
            </motion.div>
         </div>
      </div>
   );
};

export default Map;
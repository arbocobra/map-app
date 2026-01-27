import {motion, useScroll, useTransform} from 'motion/react';
import { useRef } from 'react';
import ScrollPathAlt from './ScrollPathAlt';
// import { ScrollPathParent, SVGPath } from './ScrollPathParent';

const MultiTest = () => {
   const targetRefA = useRef();
   const targetRefB = useRef();
   const targetRefC = useRef();
   const targetRefD = useRef();
   const targetRefE = useRef();
   const targetRefF = useRef();
   const containerStyle = {
      display: 'flex', 
      flexFlow: 'column nowrap',
      position: 'relative', 
      height: '300vh', 
      width: 700, 
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      gap: 10,
   }
   const rowStyle = {
      width: '100%',
      flex: 1,
      border: '1px #878787 solid'
   }
   const extraRowStyle = {
      width: '100%',
      flex: 4,
      border: '1px #878787 solid'
   }
   const pathContainers = {
      position: 'fixed',
      width: 500,
      height: 500,
      top: 40,
      display: 'flex',
      flexFlow: 'row wrap'
   }

   return (
      <div style={ containerStyle }>
         <div style={ pathContainers }>
            <ScrollPathAlt targetRef={targetRefA} />
            <ScrollPathAlt targetRef={targetRefB} />
            <ScrollPathAlt targetRef={targetRefC} />
            <ScrollPathAlt targetRef={targetRefD} />
            <ScrollPathAlt targetRef={targetRefE} />
            <ScrollPathAlt targetRef={targetRefF} />
         </div>
         {/* <ScrollPathAlt targetRef={targetRefA} offset={['start start', 'end start']} /> */}
         <div ref={targetRefA} style={ rowStyle }></div>
         <div ref={targetRefB} style={ rowStyle }></div>
         <div ref={targetRefC} style={ rowStyle }></div>
         <div ref={targetRefD} style={ rowStyle }></div>
         <div ref={targetRefE} style={ rowStyle }></div>
         <div ref={targetRefF} style={ rowStyle }></div>
         <div style={ extraRowStyle }></div>
      </div>
   )
}

export default MultiTest;
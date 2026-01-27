import { useRef } from 'react';
import Map from './Map';

const MapContainer = () => {
   
   const targetRefA = useRef();
   const targetRefB = useRef();
   const targetRefC = useRef();
   const targetRefD = useRef();
   const targetRefE = useRef();
   const targetRefF = useRef();
   const targetRefG = useRef();
   const targetRefH = useRef();
   const targetRefI = useRef();
   const targetRefJ = useRef();
   const targetRefK = useRef();
   const targetRefL = useRef();
   const targetRefM = useRef();
   const targetRefN = useRef();
   const targetRefO = useRef();
   const targetRefP = useRef();
   const lenseTargetRef1 = useRef();
   const lenseTargetRef2 = useRef();
   const lenseTargetRef3 = useRef();
   const lenseTargetRef4 = useRef();
   const lenseTargetRef5 = useRef();
   
   return (
      <div style={ containerStyle }>
         <Map 
            refA={targetRefA} 
            refB={targetRefB} 
            refC={targetRefC} 
            refD={targetRefD} 
            refE={targetRefE} 
            refF={targetRefF}
            refG={targetRefG}
            refH={targetRefH}
            refI={targetRefI}
            refJ={targetRefJ}
            refK={targetRefK}
            refL={targetRefL}
            refM={targetRefM}
            refN={targetRefN}
            refO={targetRefO}
            refP={targetRefP}

            ref1={lenseTargetRef1}
            ref2={lenseTargetRef2}
            ref3={lenseTargetRef3}
            ref4={lenseTargetRef4}
            ref5={lenseTargetRef5}
         />
         <div ref={lenseTargetRef1} style={ rowStyle(3) }></div>

         <div ref={lenseTargetRef2} style={ containerRow(6) }>
            <div ref={targetRefA} style={ rowStyle(1) }></div> {/* 0-3 */}
            <div ref={targetRefB} style={ rowStyle(1) }></div> {/* 1=3 */}
         </div>

         {/* <div ref={lenseTargetRef3} style={ containerRow(29) }>
            <div ref={targetRefC} style={ rowStyle(2) }></div>
            <div ref={targetRefD} style={ rowStyle(4) }></div>
            <div ref={targetRefE} style={ rowStyle(3) }></div>
            <div ref={targetRefF} style={ rowStyle(3) }></div>
            <div ref={targetRefG} style={ rowStyle(1) }></div>
            <div ref={targetRefH} style={ rowStyle(1) }></div>
         </div>
         
         <div ref={targetRefI} style={ rowStyle(8) }></div>
         <div ref={targetRefJ} style={ rowStyle(7) }></div>

         <div ref={lenseTargetRef4} style={ containerRow(10) }>
            <div ref={targetRefK} style={ rowStyle(1) }></div> 
         </div>

         <div ref={targetRefL} style={ rowStyle(1) }></div> 
         <div ref={targetRefM} style={ rowStyle(6) }></div> 
         <div ref={targetRefN} style={ rowStyle(3) }></div> 
         <div ref={targetRefO} style={ rowStyle(3) }></div> 
         <div ref={targetRefP} style={ rowStyle(6) }></div>  */}

         <div ref={lenseTargetRef3} style={ containerRow(45) }>
            <div ref={targetRefC} style={ rowStyle(4) }></div> {/* 2-3 */}
            <div ref={targetRefD} style={ rowStyle(8) }></div> {/* 3 -8*/}
            <div ref={targetRefE} style={ rowStyle(6) }></div> {/* 4-8 */}
            <div ref={targetRefF} style={ rowStyle(6) }></div>  {/* 5-8 */}
            <div ref={targetRefG} style={ rowStyle(2) }></div> {/* 6-1 */}
            <div ref={targetRefH} style={ rowStyle(2) }></div> {/* 7-1 */}

            <div ref={targetRefI} style={ rowStyle(10) }></div> {/* 8-12 */}
            <div ref={targetRefJ} style={ rowStyle(7) }></div> {/* 9-7 */}
         </div>
         
         

         <div ref={lenseTargetRef4} style={ containerRow(30) }>
            <div ref={targetRefK} style={ rowStyle(10) }></div> {/* 10-23/20/17/10 */}

            <div ref={targetRefL} style={ rowStyle(2) }></div> {/* 11-1 */}
            <div ref={targetRefM} style={ rowStyle(6) }></div> {/* 12-6 */}
            <div ref={targetRefN} style={ rowStyle(3) }></div> {/* 13-3 */}
            <div ref={targetRefO} style={ rowStyle(3) }></div> {/* 14-3  */}
            <div ref={targetRefP} style={ rowStyle(6) }></div> {/* 15-6 */}
         </div>

         

         <div ref={lenseTargetRef5} style={ rowStyle(5) }></div>
         <div style={ extraRowStyle(10) }></div>
      </div>
   )
}

export default MapContainer;

const containerStyle = {
      display: 'flex', 
      flexFlow: 'column nowrap',
      position: 'relative', 
      height: '1000vh', 
      width: 1000,
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: 10,
   }
const  containerRow  = (flex) => ({
   display: 'flex',
   flex, 
   flexFlow: 'column nowrap',
   position: 'relative', 
   width: '100%',
   justifyContent: 'flex-start',
   alignItems: 'center',
   gap: 10,
   // border: '1px blue solid',
   padding: '0 10px'
})
const rowStyle = (flex) => ({
   position: 'relative',
   width: '100%',
   flex,
   // border: '1px #2c2c2c solid'
})
const extraRowStyle = (flex) => ({
   width: '100%',
   flex,
})

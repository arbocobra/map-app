import { useRef } from 'react';
import Map from './Map';
import Side from './Side';

const MapContainer = () => {

   const targetRefA = useRef();
   const targetRefB = useRef();
   const targetRefB2 = useRef();
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
      <div className='map-container-outer'>
         <div className='map-container-inner'>
            <Side
               refA={targetRefA} 
               refB={targetRefB}
               refB2={targetRefB2} 
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
            <Map 
               refA={targetRefA} 
               refB={targetRefB} 
               refB2={targetRefB2} 
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
         </div>
         
         <div ref={lenseTargetRef1} style={ rowStyle(3) }></div>

         <div ref={lenseTargetRef2} style={ containerRow(6) }>
            <div ref={targetRefA} style={ rowStyle(1) }></div>
            <div ref={targetRefB} style={ rowStyle(1) }></div>
            <div ref={targetRefB2} style={ rowStyle(1) }></div>
         </div>

         <div ref={lenseTargetRef3} style={ containerRow(45) }>
            <div ref={targetRefC} style={ rowStyle(4) }></div>
            <div ref={targetRefD} style={ rowStyle(8) }></div>
            <div ref={targetRefE} style={ rowStyle(6) }></div>
            <div ref={targetRefF} style={ rowStyle(6) }></div>
            <div ref={targetRefG} style={ rowStyle(2) }></div>
            <div ref={targetRefH} style={ rowStyle(2) }></div>
            <div ref={targetRefI} style={ rowStyle(10) }></div>
            <div ref={targetRefJ} style={ rowStyle(7) }></div>
         </div>
         
         <div ref={lenseTargetRef4} style={ containerRow(30) }>
            <div ref={targetRefK} style={ rowStyle(10) }></div>
            <div ref={targetRefL} style={ rowStyle(2) }></div>
            <div ref={targetRefM} style={ rowStyle(6) }></div>
            <div ref={targetRefN} style={ rowStyle(3) }></div>
            <div ref={targetRefO} style={ rowStyle(3) }></div>
            <div ref={targetRefP} style={ rowStyle(6) }></div>
         </div>

         <div ref={lenseTargetRef5} style={ rowStyle(5) }></div>
         <div style={ extraRowStyle(10) }></div>
      </div>
   )
}

export default MapContainer;

// const containerStyle = {
//    display: 'flex', 
//    flexFlow: 'column nowrap',
//    position: 'relative', 
//    height: '1000vh', 
//    width: 1000,
//    justifyContent: 'flex-start',
//    alignItems: 'center',
//    gap: 10,
// }
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

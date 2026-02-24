import { useRef } from 'react';
import Map from './Map';
import Side from './Side';

const MapContainer = () => {

   const pathTargetArray = useRef([])
   const textTargetArray = useRef([])

   const addToRefs = (element) => {
      if (element) {
         if (!pathTargetArray.current.includes(element)) pathTargetArray.current.push(element);
         if (!textTargetArray.current.includes(element)) textTargetArray.current.push(element);
      }
  };
  const addtoTextRef = (element) => {
    if (element && !textTargetArray.current.includes(element)) {
      textTargetArray.current.push(element);
    }
  };

   const lenseTargetRef1 = useRef();
   const lenseTargetRef2 = useRef();
   const lenseTargetRef3 = useRef();
   const lenseTargetRef4 = useRef();
   const lenseTargetRef5 = useRef();

   
   
   return (
      <div className='map-container-outer'>
         <div className='map-container-inner'>
            <Side targetArray={textTargetArray}
               ref1={lenseTargetRef1}
               ref2={lenseTargetRef2}
               ref3={lenseTargetRef3}
               ref4={lenseTargetRef4}
               ref5={lenseTargetRef5}
             />
            <Map targetArray={pathTargetArray}
               ref1={lenseTargetRef1}
               ref2={lenseTargetRef2}
               ref3={lenseTargetRef3}
               ref4={lenseTargetRef4}
               ref5={lenseTargetRef5}
            />
         </div>
         
         <div ref={lenseTargetRef1} style={{ flex:3 }}></div>

         <div ref={lenseTargetRef2} className='target-container' style={{ flex:6 }}>
            { [2,2].map((el,i) => (<div key={`target-2-${i}`} ref={addToRefs} style={{ flex:el }} />)) }
            <div ref={addtoTextRef} style={{ flex:2 }} />
         </div>

         <div ref={lenseTargetRef3} className='target-container' style={{ flex:45 }}>
            { [4,8,6,6,2,2,10,7].map((el,i) => (<div id={`target-3-${i}`} key={`target-3-${i}`} ref={addToRefs} style={{ flex:el }} />)) }
         </div>
         
         <div ref={lenseTargetRef4} className='target-container' style={{ flex:35 }}>
            { [10,2,6,3,3,6].map((el,i) => (<div id={`target-4-${i}`} key={`target-4-${i}`} ref={addToRefs} style={{ flex:el }} />)) }
            <div style={{ flex: 4 }} />
         </div>

         <div ref={lenseTargetRef5} style={{ flex:5 }} />
         <div style={{ flex:5 }} />
      </div>
   )
}

export default MapContainer;
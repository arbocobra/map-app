import { useRef } from 'react'
import TestChild from './TestChild';

const TestContainer = () => {
   const elementRef = useRef([])
   const parentRef = useRef()
   const addToRefs = (element) => {
    if (element && !elementRef.current.includes(element)) {
      elementRef.current.push(element);
    }
  };

  const testArr = Array.from({length:16})

   return (
      <div ref={parentRef} style={containerStyle}>
         <TestChild refArr={elementRef} />
         {testArr.map((el,i) => (<div key={i} ref={addToRefs} className={`test-div div-${i}`}>{el}</div>))}
         <div style={{flex:4}} />
      </div>
   )
}

export default TestContainer;

const containerStyle = {
      display: 'flex',
      flexFlow: 'column nowrap',
      gap: 10,
      width: '100%',
      height: '600vh'
   }
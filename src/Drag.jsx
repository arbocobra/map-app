import * as motion from 'motion/react-client'

const Drag = () => {

   const container = {
      margin: 10,
      border: '3px dashed white',
      height: 200,
      width: 200
   }
   return (
      <div style={container} className='box-container'>
         <motion.div drag className='box'
            dragConstraints={{
               top: -50,
               left: -50, 
               right: 50, 
               bottom: 50,
            }}
         />
      </div>
   )
}

export default Drag;
import * as motion from 'motion/react-client'

const Rotate = () => {

   return (
      <motion.div className='box'
         animate={{ rotate: 360 }}
         transition={{ duration: 1 }}
      />
   )
}

export default Rotate;
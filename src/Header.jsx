const Header = () => {
   return (
      <div className='header-container'>
         <div className='header'>
            <div className='flex flex-col gap-3'>
               <div className='font-playfair text-[48px] font-semibold'>Wheel of Time Character Map</div>
               <div className='font-playfair text-[32px] font-light'>Tracking the movement of characters as they travel across the continent</div>
            </div>
            <div className='flex flex-col gap-3 text-left font-roboto font-light text-xl'>
               <div className='italic'>This map is a work in progress.</div>
               <div>It uses Motion.div library (formerly Framer Motion) to animate paths with the UseScroll hook. Currently the application focuses on the first book of the series - with the intention of expanding to the rest of the series shortly. More complete description of events that take place as well as additional maps of cities and regions will also be added.</div>
               <div>Credit to <a href='https://wheeloftimelines.com/map' target='_blank'>Wheel of Timelines</a> and <a href='https://atlasoficeandfireblog.wordpress.com/' target='_blank'>Atlas of Ice and Fire BLog</a>, both sites have extensive information that made it easier to gather details without having to reread the books.</div>
            </div>
         </div>
      </div>
   )
}

export default Header;
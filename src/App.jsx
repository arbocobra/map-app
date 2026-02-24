import './App.css'
// import Rotate from './tests/Rotate';;
// import Spring from './tests/Spring';
// import Drag from './tests/Drag';
// import MotionPath from './tests/MotionPath';
// import SimpleScroll from './tests/SimpleScroll';
// import ScrollPath from './tests/ScrollPath';
import MapContainer from './MapContainer';
import Header from './Header';
import TestContainer from './TestContainer';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <MapContainer />
      {/* <TestContainer /> */}
    </div>
  )
}

export default App

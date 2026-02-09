import './App.css'
import Rotate from './Rotate';;
import Spring from './Spring';
import Drag from './Drag';
import MotionPath from './MotionPath';
import SimpleScroll from './SimpleScroll';
import ScrollPath from './ScrollPath';
import MapContainer from './MapContainer';
import Header from './Header';
import TestContainer from './TestContainer';

const App = () => {
  return (
    <div className='container'>
      <Header />
      {/* <MapContainer /> */}
      <TestContainer />
    </div>
  )
}

export default App

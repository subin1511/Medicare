import React,{useState}from 'react';
// import ToggleButton from './ToggleButton';
import './home.css'

import Sidebar from '../../components/Sidebar';
const Home = () => {


  const [showPopup, setShowPopup] = useState(false);
  
return(
  <div className="">
  <Sidebar>

    <button onClick={() => setShowPopup(true)}>Open Popup</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <form>
            <div>
            <label>Name:</label>
            <input type="text" name="name"  />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email"  />
          </div>
          <button type="submit">Submit</button>
            </form>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

  </Sidebar>
  </div>
)
}
export default Home;
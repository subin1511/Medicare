import React,{useState}from 'react';
// import ToggleButton from './ToggleButton';
import './home.css'

import Sidebar from '../../components/Sidebar';
const Home = () => {
<<<<<<< HEAD:src/pages/dashbored/Home.jsx
=======
    return (
        <div>
          <Sidebar>
            <h1>Home</h1>
          
      </Sidebar>
    </div>
    
        
    );
};
  const [divs, setDivs] = useState([
    { id: 1, content: 'aspirin' }
  ]);
>>>>>>> f1df8c48c82962356b4171b9543d47751d7760da:src/pages/dashboard/Home.jsx


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
export default Home;
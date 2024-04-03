import React,{useState}from 'react';
// import ToggleButton from './ToggleButton';
import ToggleTabs from '../../components/ToggleTabs';
import Sidebar from '../../components/Sidebar';
const Home = () => {
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

  const handleClick = () => {
    const newDiv = { id: Date.now(), content: 'parecetomol' };
    setDivs([...divs, newDiv]);
  };
  const [showPopup, setShowPopup] = useState(false);
  
return(
  <div className="">
  <Sidebar>
  <div>
      {divs.map((div) => (
        <div className="medicine" key={div.id}>
          <div className="medText">{div.content}</div>
          <div className="medTime">
            
          <div class="checkbox-custom">
            <input type="checkbox" id="morn" />
            <input type="checkbox" id="noon" />
            <input type="checkbox" id="evening" />
          </div>

        
        </div>
        
      </div>
      ))
      }
      <button onClick={handleClick}>add new +</button> 

    </div>

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
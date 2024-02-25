import React,{useState}from 'react';
// import ToggleButton from './ToggleButton';
import ToggleTabs from '../../components/ToggleTabs';
import Sidebar from '../../components/Sidebar';
const Home = () => {
//     const [userType, setUserType] = useState('doctor');
    

//   const handleClick = (newValue) => {
//     setUserType(newValue);
//   };
const [userType, setUserType] = useState('doctor');

const handleToggle = (newValue) => {
  setUserType(newValue);
};
    return (
        <div>
          <Sidebar>
            <h1>Home by ali</h1>
            {/* <div style={{ marginBottom: '20px' }}>
        <ToggleButton
          options={['Doctor', 'Patient']}
          selectedOption={userType}
          onToggle={handleClick}
        />
        
        
    </div> */}

      
      <div style={{ marginLeft: '30px' }}>
        <ToggleTabs 
          options={['Doctor', 'Patient']}
          selectedOption={userType}
          onToggle={handleToggle}
        />
      </div>
      </Sidebar>
    </div>
    
        
    );
};

export default Home;
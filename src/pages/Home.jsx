import React,{useState}from 'react';
// import ToggleButton from './ToggleButton';
import ToggleTabs from '../components/ToggleTabs';
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
            <h1>Home</h1>
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

    </div>
    
        
    );
};

export default Home;
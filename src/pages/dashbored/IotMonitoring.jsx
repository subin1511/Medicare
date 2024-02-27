import React from 'react';
import CircularProgress from './CircularProgress';
import Sidebar from '../../components/Sidebar';
const IotMonitoring = () => {
  return (
    <div>
      <Sidebar>
      <h1 className='health'>Iot Monitoring</h1>
        <div class="circles">
         <div> <CircularProgress percentage={80} /><div className='measure'>Temerature </div></div>
         <div><CircularProgress percentage={55} /><div className='measure'>Heart Rate </div> </div> 
         <div><CircularProgress percentage={10} /><div className='measure'>Blood Oxigen </div> </div>
        </div>
        </Sidebar>
    </div>
  );
};

export default IotMonitoring;
import React from 'react';
import CircularProgress from './CircularProgress';
import Sidebar from '../../components/Sidebar';
const IotMonitoring = () => {
  return (
    <div>
      <Sidebar>
        <div class="circles">
         <div> <CircularProgress percentage={80} />hhh</div>
         <div><CircularProgress percentage={55} /></div> 
         <div><CircularProgress percentage={10} /></div>
        </div>
        </Sidebar>
    </div>
  );
};

export default IotMonitoring;
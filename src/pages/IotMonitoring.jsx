import React from 'react';
import CircularProgress from './CircularProgress';

const App = () => {
  return (
    <div>
        <div class="circles">
         <div> <CircularProgress percentage={80} />hhh</div>
         <div><CircularProgress percentage={55} /></div> 
         <div><CircularProgress percentage={10} /></div>
        </div>
    </div>
  );
};

export default App;
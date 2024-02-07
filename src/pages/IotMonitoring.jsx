import React from 'react';
import CircularProgress from './CircularProgress';

const App = () => {
  return (
    <div>
      <CircularProgress percentage={75} />
      <CircularProgress percentage={55} />
      <CircularProgress percentage={10} />


    </div>
  );
};

export default App;
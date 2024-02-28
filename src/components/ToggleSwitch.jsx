// ToggleTabs.js

import React from 'react';

const ToggleTabs  = ({ options, selectedOption, onToggle }) => {
  const handleClick = (option) => {
    onToggle(option);
  };

  return (
    <div className="toggle-tabs" >
      {options.map((option, index) => (
        <button style={{ marginLeft: '30px', padding:'5px' }}
          key={index}
          className={selectedOption === option ? 'active' : ''}
          onClick={() => handleClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleTabs ;

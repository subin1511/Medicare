
import React from 'react';
import '../App.css'
const ToggleButton = ({ options, selectedOption, onToggle }) => {
  const handleClick = (e) => {
    const newValue = selectedOption === options[0] ? options[1] : options[0];
    onToggle(newValue);
  };

  return (
    <div className="toggle-button">
      <button onClick={handleClick}>{selectedOption}</button>
    </div>
  );
};

export default ToggleButton;

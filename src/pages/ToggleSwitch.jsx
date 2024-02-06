// ToggleSwitch.js

import React from 'react';

const ToggleSwitch = ({ options, selectedOption, onToggle }) => {
  const handleChange = (e) => {
    const newValue = e.target.checked ? options[1] : options[0];
    onToggle(newValue);
  };

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={selectedOption === options[1]}
        onChange={handleChange}
      />
      <span className="slider"></span>
      <span className="label">{selectedOption}</span>
    </label>
  );
};

export default ToggleSwitch;

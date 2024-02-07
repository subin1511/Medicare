// CircularProgress.js
import React from 'react';
import IotMonitoring from './IotMonitoring'

const CircularProgress = ({ percentage }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((100 - percentage) / 100) * circumference;

  return (
    <div className='labRecord'> 
                    <h1 className='health'>Iot Monitoring</h1>
    
    <svg className="progress-ring" width="100" height="100">
      <circle
        className="progress-ring-circle"
        stroke="#e0e0e0"
        strokeWidth="8"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />
      <circle
        className="progress-ring-circle"
        stroke="#007bff"
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="progress-text">
        {percentage}%
      </text>
    </svg>
    </div>
  );
};

export default CircularProgress;

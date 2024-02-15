// PatientProfile.js
import React from 'react';

const PatientProfile = ({ name, age, adharNo, medicalHistory }) => {
  return (
    <div>
      <h2>Patient Profile</h2>
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Age:</strong> {age}
      </div>
      <div>
        <strong>Aadhar Number:</strong> {adharNo}
      </div>
      <div>
        <strong>Medical History:</strong> {medicalHistory}
      </div>
    </div>
  );
};

export default PatientProfile;

// PatientProfile.js
import React from 'react';

const PatientProfile = ({ name,profilePicture, age, adharNo, medicalHistory,address,phoneNumber }) => {
  return (
    <div>
      <div>
        <strong>profilePicture</strong> {profilePicture}
      </div>
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
      <div>
        <strong>Addres:</strong> {address}
      </div>
      <div>
        <strong>Phone Number:</strong> {phoneNumber}
      </div>
    </div>
  );
};

export default PatientProfile;

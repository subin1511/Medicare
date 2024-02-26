import React from 'react';
import './patientConsult.css'; 
import { Link } from 'react-router-dom';

const PatientConsult = () => {
  return (
    <div>

    <div className="profile-container">
      <div className="profile-photo">
        <img src="profile.jpg" alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>Name: John Doe</h2>
        <p>Age: 35</p>
        <p>Gender: Male</p>
        <div className="profileBtns">
            <div className="fullProfile">
                <Link to={'/Home'}>
                    <button className="fullProfileBtn">Login</button><br/>
                </Link>
            </div>
        </div>
      </div>
    </div>
    <h1>Diagnosis</h1>
    <textarea></textarea>
    </div>
  );
};

export default PatientConsult;

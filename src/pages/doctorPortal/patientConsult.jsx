import React,{useState} from 'react';
import './patientConsult.css'; 
import { Link } from 'react-router-dom';
import Sidebar from '../../components/SidebarDoctor';

const PatientConsult = () => {
  const [divs, setDivs] = useState([
    { id: 1, content: 'This is the first div' },
  ]);

  const handleClick = () => {
    const newDiv = { id: Date.now(), content: 'This is a new div' };
    setDivs([...divs, newDiv]);
  };

  return (
    <div>
      <Sidebar>
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
                    <button className="fullProfileBtn btn">Full Profile</button><br/>
                </Link>
            </div>
            <div className="pastConsult">
                <Link to={'/Home'}>
                    <button className="pastConsultBtn btn">Past Consult</button><br/>
                </Link>
            </div>
        </div>
      </div>
    </div>
    <h3>Diagnosis</h3>
    <textarea></textarea>
    <h3>Prescription</h3>
    <div>
      <button onClick={handleClick}>Duplicate Div</button>
      {divs.map((div) => (
        <div key={div.id}>{div.content}</div>
      ))}
    </div>
    </Sidebar>
  </div>

  );
};

export default PatientConsult;

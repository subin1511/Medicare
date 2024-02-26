import React from 'react';
import '../../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Sidebar  from '../../components/Sidebar';
import Home from './Home.jsx';
import HealthRecord from './healthRecord.jsx';
import BookAppoint from './BookAppoint.jsx';
import IotMonitoring from './IotMonitoring.jsx';
import PatientProfile from './PatientProfile.jsx';



const Dashboard = () => {

  return (
    
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/healthRecord" element={<HealthRecord />} />
          <Route path="/bookAppoint" element={<BookAppoint />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/IotMonitoring" element={<IotMonitoring />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    
    
  );
};

export default Dashboard;
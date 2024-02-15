import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Sidebar  from './components/Sidebar';
import Home from './pages/Home.jsx';
import HealthRecord from './pages/healthRecord.jsx';
import BookAppoint from './pages/bookAppoint.jsx';
import Profile from './pages/profile.jsx';
import IotMonitoring from './pages/IotMonitoring.jsx';
import PatientProfile from './pages/PatientProfile.jsx';


const App = () => {
  
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

export default App;
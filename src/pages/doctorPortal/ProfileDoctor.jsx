import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // If using React Router
import axios from 'axios';
import Sidebar from '../../components/SidebarDoctor';

const ProfileDoctor = () => {
  const [doctor, setDoctor] = useState(null);
  const { doctorId } = useParams(); // If using React Router

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        // Replace "YOUR_API_ENDPOINT" with your actual API endpoint
        const response = await axios.get(`YOUR_API_ENDPOINT/${doctorId}`);
        setDoctor(response.data);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctorData();
  }, [doctorId]);

  return (
    <div className="doctor-profile">
        <Sidebar>
      {/* Display doctor information only if data is available */}
      {doctor && (
        <div>
          <h2>{doctor.name}</h2>
          <p>Address: {doctor.address}</p>
          <p>Age: {doctor.age}</p>
          <p>Experience: {doctor.experience} years</p>
          <p>Current Hospital: {doctor.currentHospital}</p>
        </div>
      )}

      {/* Display loading message while data is being fetched */}
      {!doctor && <p>Loading doctor profile...</p>}
      </Sidebar>
    </div>
  );
};

export default ProfileDoctor;

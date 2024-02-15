import React from 'react';
import PatientProfile from './PatientProfile';

const Profile = () => {
    const patientData = {
        name: 'John Doe',
        age: 30,
        adharNo: '1234 5678 9012',
        medicalHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna auctor, placerat erat vitae, interdum libero.',
      };
    return (
        <div>
            <h1 className='pro'>Profile</h1>
            <div>
      <PatientProfile {...patientData} />
    </div>
        </div>
        
        
    );
};

export default Profile;
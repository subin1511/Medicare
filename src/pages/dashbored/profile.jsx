import React from 'react';
import PatientProfile from './PatientProfile';

const Profile = () => {
    const patientData = {
        name: 'John Doe',
        age: 30,
        adharNo: '1234 5678 9012',
        medicalHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna auctor, placerat erat vitae, interdum libero.',
        phoneNumber: '123-456-7890',
        address: '1234 Main St, City, Country',
        profilePicture: 'https://example.com/profile.jpg' // Replace with actual image URL
    };

    const containerStyle = {
        maxWidth: '800px', // Increased max width
        margin: 'auto',
        padding: '40px', // Increased padding
        border: '1px solid #ccc',
        borderRadius: '10px', // Increased border radius
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Increased box shadow
        backgroundColor: '#f7f7f7',
        position: 'relative', // Added relative positioning
    };

    const titleStyle = {
        fontSize: '32px', // Increased font size
        textAlign: 'center',
        marginBottom: '30px', // Increased margin bottom
        color: '#333',
        textTransform: 'uppercase',
    };

    const profileStyle = {
        backgroundColor: '#fff',
        padding: '30px', // Increased padding
        borderRadius: '10px', // Increased border radius
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Increased box shadow
        position: 'relative', // Added relative positioning
    };

    const profilePicStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        borderRadius: '50%',
        width: '80px', // Adjust the size of the profile picture
        height: '80px', // Adjust the size of the profile picture
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Profile</h1>
            <div style={profileStyle}>
                <img src={patientData.profilePicture} alt="Profile" style={profilePicStyle} />
                <PatientProfile {...patientData} />
            </div>
        </div>
    );
};

export default Profile;

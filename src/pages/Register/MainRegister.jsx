import React from 'react';
import * as Yup from 'yup'; // For form validation  
import { useFormik } from 'formik';
import { Grid, Typography, Paper, Box } from '@mui/material';
import ToggleTabs from '../../components/ToggleSwitch';
import PatientRegistration from './PatientRegister'; // Import form components
import DoctorRegistration from './DoctorRegister'; 

const validationSchema = Yup.object().shape({
  // Add validation rules for common fields here
});

const RegistrationForm = () => {
  const [currentForm, setCurrentForm] = React.useState('Doctor');

  const handleToggle = (newValue) => {
    setCurrentForm(newValue);
  };

  return (
    <div>
      <div style={{ marginLeft: '30px' }}>
        <ToggleTabs 
          options={['Doctor', 'Patient']}
          selectedOption={currentForm}
          onToggle={handleToggle}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        {currentForm === 'Doctor' ? <DoctorRegistration /> : <PatientRegistration />}
      </div>
    </div>
  );
};

export default RegistrationForm;

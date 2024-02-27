import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  TextField,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeDoctor from '../doctorPortal/HomeDoctor';

// Validation schema (adjust as needed)
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number().required('Age is required'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{10}$/, 'Invalid phone number format'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  adharNumber: Yup.string()
    .required('Adhar number is required')
    .matches(/^\d{12}$/, 'Invalid Adhar number format'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  specification: Yup.string().required('Specification is required'),
  qualification: Yup.string().required('Qualification is required'),
  yearsOfExperience: Yup.number().required('Years of experience is required'),
});

const DoctorRegistration = () => {
  // Initialize formik
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      phoneNumber: '',
      email: '',
      adharNumber: '',
      password: '',
      confirmPassword: '',
      specification: '',
      qualification: '',
      yearsOfExperience: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Send form data to appropriate backend API
      console.log(values);
      resetForm();
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Doctor Registration</Typography>
        </Grid>
        {/* Additional fields for doctor registration */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Age"
            type="number"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Specification"
            name="specification"
            value={formik.values.specification}
            onChange={formik.handleChange}
            error={formik.touched.specification && Boolean(formik.errors.specification)}
            helperText={formik.touched.specification && formik.errors.specification}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Qualification"
            name="qualification"
            value={formik.values.qualification}
            onChange={formik.handleChange}
            error={formik.touched.qualification && Boolean(formik.errors.qualification)}
            helperText={formik.touched.qualification && formik.errors.qualification}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Years of Experience"
            type="number"
            name="yearsOfExperience"
            value={formik.values.yearsOfExperience}
            onChange={formik.handleChange}
            error={formik.touched.yearsOfExperience && Boolean(formik.errors.yearsOfExperience)}
            helperText={formik.touched.yearsOfExperience && formik.errors.yearsOfExperience}
          />
        </Grid>
        {/* Add more fields as needed */}
        <Grid item xs={12}>
        <Link to={'/HomeDoctor'}>
            <button className="login-button">submit</button><br/>
        </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default DoctorRegistration;

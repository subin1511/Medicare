import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import DoctorRegistration from '../Register/PatientRegister';
import RegistrationForm from '../Register/MainRegister';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., call an API or process locally)
    console.log('Login:', username, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>
        <Link to={'/Home'}>
                    <button className="login-button">Login</button><br/>
        </Link>
        <Link to={'/registrationForm'}>
        <button className='signup-link'> Sign Up</button>
      
        </Link>
      </form>
      
    </div>
  );
}

export default Login;

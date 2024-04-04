import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import DoctorRegistration from '../Register/PatientRegister';
import RegistrationForm from '../Register/MainRegister';
import { database } from '../../Firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., call an API or process locally)
    const email=e.target.username.value
    const password=e.target.password.value

    createUserWithEmailAndPassword(database,email,password).then(data=>{
      console.log(data,"authData")
      history('/Home')
    })
  };

  return (
    <div className="login-container">
      <form onSubmit={(e)=>handleSubmit(e)} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>  
          <input
            type="text"
            id="username"
            name='username'
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
        
                    <button className="login-button">Login</button><br/>
        
        <Link to={'/registrationForm'}>
        <button className='signup-link'> Sign Up</button>
      
        </Link>
      </form>
      
    </div>
  );
}

export default Login;

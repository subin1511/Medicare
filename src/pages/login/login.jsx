import React from 'react';
import Sidebar from '../../components/Sidebar';



const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <button type="submit">Login</button>
        <a href="/register">register</a>
      </form>
      {/* Removed conditionally rendering of Sidebar */}
    </div>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/login', { username, password });

      if (response.data.success) {
        // Login successful
        console.log(response.data.message);
        // Redirect the user to the dashboard or another page
        navigate('/HomePage'); // Change '/home' to the desired path
      } else {
        // Login failed
        setError('Login failed. Invalid username or password.');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with an error status code
        setError(`Request failed with status ${error.response.status}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response received from the server');
      } else {
        // Something else happened while setting up the request
        setError('An error occurred while making the request');
      }
    }

    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;

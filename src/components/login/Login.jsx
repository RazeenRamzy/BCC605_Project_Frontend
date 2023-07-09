import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import avatarPlaceholder1 from '../../asset/images/avatarPlaceholder2.webp';
import avatarPlaceholder2 from '../../asset/images/avatarPlaceholder.jpeg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(1); // Initial selected avatar

  const navigate = useNavigate();

  useEffect(() => {
    // Animate the avatars by changing them every 3 seconds
    const intervalId = setInterval(() => {
      setSelectedAvatar((prevAvatar) => (prevAvatar === 1 ? 2 : 1));
    }, 3000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

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
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-heading">MLibrarian Login</h1>
        <div className="avatar">
          {selectedAvatar === 1 && <img src={avatarPlaceholder1} alt="Avatar 1" />}
          {selectedAvatar === 2 && <img src={avatarPlaceholder2} alt="Avatar 2" />}
        </div>
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
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;

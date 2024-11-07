import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import QrCodeIcon from '@mui/icons-material/QrCode';
import axios from 'axios';  // Axios for making HTTP requests

const SignIn = () => {
  const [email, setEmail] = useState('');  // State to hold the email
  const [password, setPassword] = useState('');  // State to hold the password
  const [error, setError] = useState('');  // State to show error messages
  const navigate = useNavigate();  // Hook to navigate to different pages after login

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission

    try {
      const response = await axios.post('http://localhost:8000/api/users/login', {
        email,  // Send email
        password,  // Send password
      });

      // On successful login, store the token in localStorage
      localStorage.setItem('token', response.data.token);  // Save token

      // Redirect to the home page after successful login
      navigate('/home');  // Change '/home' to your desired page after login
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-left items-start h-screen ">
      <div className="p-8 bg-white" style={{ width: '450px', marginLeft: '150px' }}>
        <div className="mb-2">
          <h1 className="text-xl font-bold">GoInvoice.io</h1>
        </div>

        <h1 className="text-4xl font-bold mb-2">Sign in</h1>
        <p className="text-sm mb-6">Enter your account details or use QR code</p>

        {/* Email Section */}
        <p className="mb-2">Email</p> 
        <TextField
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Set the email state
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
          className="mb-6"
        />

        {/* Password Section */}
        <p className="mb-2 mt-6">Password</p>
        <TextField
          placeholder="Enter your password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Set the password state
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <VisibilityOffIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          className="mb-6"
        />

        {/* Remember Me Section */}
        <form className="relative flex items-center justify-between mb-6 mt-6">
          <div className="flex items-center space-x-2">
            <Checkbox color="primary" />
            <span className="text-black">Remember me</span>
          </div>
        </form>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}  {/* Display error message if login fails */}

        {/* Sign In Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}  // Trigger handleSubmit function on button click
          className="bg-purple-600 text-white mb-6"
          style={{ height: '50px' }}
        >
          Sign in
        </Button>

        {/* Or section */}
        <div className="flex items-center">
          <div className="flex-grow border-t border-black"></div>
          <span className="mx-3 text-black m-6">Or</span>
          <div className="flex-grow border-t border-black"></div>
        </div>

        {/* QR Code Button */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<QrCodeIcon />}
          className="mb-4"
          style={{ height: '50px' }}
        >
          Log in with QR code
        </Button>

        {/* Link to Sign up */}
        <p className="text-sm text-left mt-4">
          <span className="text-black cursor-pointer">
            You don’t have an account? <Link to="/signup">Create an account.</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

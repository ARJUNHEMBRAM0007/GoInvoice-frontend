import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

const CountryDropdown = ({ country, setCountry }) => (
  <div className="mb-6">
    <p className="mb-2">Country / area of residence</p>
    <FormControl fullWidth variant="outlined" className="border border-gray-300 rounded-md">
      <Select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        displayEmpty
        className="w-full bg-white"
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="" disabled>
          Select Country
        </MenuItem>
        <MenuItem value="US">United States</MenuItem>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="CA">Canada</MenuItem>
        <MenuItem value="GB">United Kingdom</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </Select>
    </FormControl>
  </div>
);

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    if (!agreeToTerms) {
      setError('You must agree to the terms of service');
      return;
    }

    const userData = { email, password, country };
    console.log("Sending data:", userData);

    try {
      const response = await axios.post('http://localhost:8000/api/users/register', userData);
      console.log("Response from server:", response);
      navigate('/signin');  // Redirect to Sign In on successful signup
    } catch (error) {
      console.error('Signup failed:', error);
      setError(error.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-left items-start h-screen ">
      <div className="p-8 bg-white" style={{ width: '450px', marginLeft: '150px' }}>
        <div className="mb-6">
          <h1 className="text-xl font-bold">GoInvoice.io</h1>
        </div>

        <h1 className="text-4xl font-bold mb-2">Sign up</h1>
        <p className="text-sm mb-6">Before we start, please enter your current location.</p>

        <CountryDropdown country={country} setCountry={setCountry} />

        <p className="mb-2">Email</p>
        <TextField
          type='email'
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
          className="mb-8"
        />

        <p className="mb-2 mt-6">Password</p>
        <TextField
          placeholder="Enter your password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

        <form onSubmit={handleSubmit} className="relative flex items-center justify-between mt-2">
          <label className="flex items-center space-x-2">
            <Checkbox
              color="primary"
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
            />
            <span className="text-black">I have read and agree to terms of services</span>
          </label>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <Button
            variant="contained"
            fullWidth
            type="submit"
            className="bg-purple-600 text-white mb-6"
            style={{ height: '50px' }}
          >
            Create account
          </Button>
        </form>

        <p className="text-sm text-left mt-4">
          <span className="text-black cursor-pointer">
            Already registered? <Link to="/signin">Sign in to your account.</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import QrCodeIcon from '@mui/icons-material/QrCode';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

const CountryDropdown = () => {
  const [country, setCountry] = useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="mb-6">
      <p className="mb-2">Country / area of residence</p>
      <FormControl fullWidth variant="outlined" className="border border-gray-300 rounded-md">
        <Select
          value={country}
          onChange={handleCountryChange}
          displayEmpty // Allows the placeholder to be shown
          className="w-full bg-white"
          inputProps={{ 'aria-label': 'Without label' }} // Accessibility improvement
        >
          {/* Placeholder item displayed initially */}
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
};


const SignUp = () => {
  return (
    <div className="flex justify-left items-start h-screen ">
      <div
        className="p-8 bg-white"
        style={{ width: '450px', marginLeft: '150px' }}
      >
        <div className="mb-6">
          <h1 className="text-xl font-bold">GoInvoice.io</h1>
        </div>

        <h1 className="text-4xl font-bold mb-2">Sign up</h1>
        <p className="text-sm mb-6">Before we start, please enter your current location.</p>

        < CountryDropdown />

        {/* Email Section */}
<p className="mb-2">Email</p> 
<TextField
  placeholder="Enter your email"  
  variant="outlined"
  fullWidth
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <MailOutlineIcon />
      </InputAdornment>
    ),
  }}
  className="mb-8"
/>

        {/* Password Section */}
<p className="mb-2 mt-6">Password</p> {/* Space between sections */}
<TextField
  placeholder="Enter your password"  
  type="password"
  variant="outlined"
  fullWidth
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

        <form className="relative flex items-center justify-between mt-2">
          <label className="flex items-center space-x-2">
            <Checkbox color="primary" />
            <span className="text-black">I agree to receive email updates</span>
          </label>
        </form>
        <form className="relative flex items-center justify-between mb-4">
          <label className="flex items-center space-x-2">
            <Checkbox color="primary" />
            <span className="text-black">I have read and agree to terms of services</span>
          </label>
        </form>

        <Button
          variant="contained"
          fullWidth
          className="bg-purple-600 text-white mb-6 "
          style={{ height: '50px' }}
        >
          Create account
        </Button>



        {/* Link to Sign in */}
        <p className="text-sm  text-left mt-4">
          <span className="text-black cursor-pointer">
            Already registered? <Link to="/signin"> Sign in to your account.</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

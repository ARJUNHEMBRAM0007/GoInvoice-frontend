import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import QrCodeIcon from '@mui/icons-material/QrCode';

const SignIn = () => {
  return (
    <div className="flex justify-left items-start h-screen ">
      <div
        className="p-8 bg-white"
        style={{ width: '450px', marginLeft: '150px' }}
      >
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



        {/* Remember Me Section */}
        <form className="relative flex items-center justify-between mb-6 mt-6"> {/* Adjusted margin to add more space */}
          <div className="flex items-center space-x-2">
            <Checkbox color="primary" />
            <span className="text-black">Remember me</span>
          </div>
          <div>
            <a href="#" className="text-black hover:underline text-sm">
              Recover Password
            </a>
          </div>
        </form>


        <Button
          variant="contained"
          fullWidth
          className="bg-purple-600 text-white  mb-6"
          style={{ height: '50px' }}
        >
          Sign in
        </Button>

        <div className="flex items-center ">
          <div className="flex-grow border-t border-black"></div>
          <span className="mx-3 text-black m-6">Or</span>
          <div className="flex-grow border-t border-black"></div>
        </div>

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
          <span className="text-black cursor-pointer ">
            You don’t have an account? <Link to="/signup"> Create an account.</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

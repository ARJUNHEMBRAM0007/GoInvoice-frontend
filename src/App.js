import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

const App = () => {
  const [activeButton, setActiveButton] = useState('Home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/signin" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<Navigate to="/signin" />} />
          </>
        ) : (
          <Route path="/*" element={
            <div className="flex bg-gray-100 min-h-screen">
              <Sidebar activeButton={activeButton} handleButtonClick={handleButtonClick} />
              <div className="w-4/5 bg-[#F9F4F0]">
                <Header activeButton={activeButton} />
                <MainContent activeButton={activeButton} />
              </div>
            </div>
          } />
        )}
      </Routes>
    </Router>
  );
};

export default App;
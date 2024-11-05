import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Clients = () => {
  const [activeButton, setActiveButton] = useState('Client list');

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      {/* Top Section */}
      <div className="flex justify-between mb-4 p-6 pb-0">
        <div className="flex space-x-4">
          <button
            onClick={() => handleClick('Client list')}
            className={`px-4 py-2 ${activeButton === 'Client list' ? 'bg-black text-white' : 'text-black'}`}
          >
            Client list
          </button>
          <button
            onClick={() => handleClick('Recent Activity')}
            className={`px-4 py-2 ${activeButton === 'Recent Activity' ? 'bg-black text-white' : 'text-black'}`}
          >
            Recent Activity
          </button>
        </div>
        <button className="bg-purple-500 text-white px-4 py-2 border border-black flex items-center">
          <AddCircleIcon className="text-black mr-2" />
          Add Clients
        </button>
      </div>

      {/* Invoice Details Table */}
      <div className="flex items-center border pt-2 pb-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-6">
        <div className="w-1/8 px-4 text-center">Contact person</div>
        <div className="w-1/10 px-4 text-center ml-9">Client Name</div>
        <div className="w-1/8 px-4 text-center ml-12">Email</div>
        <div className="w-1/8 px-4 text-center ml-6">Phone Number</div>
        <div className="w-1/8 px-4 text-center">Total Invoices</div>
        <div className="w-1/8 px-4 text-center">Location</div>
        <div className="w-1/8 px-4 text-center">Outstanding Amount</div>
        <div className="w-1/8 px-4 text-center">View & edit</div>
      </div>

      {/* Data Rows */}
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6 space-x-6" key={index}>
          <div className="w-1/8 px-4 text-center flex items-center justify-center">
            <img src="/path-to-profile-pic.jpg" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
            <span>Amit Sharma</span>
          </div>
          <div className="w-1/8 px-4 text-center">Acme Industries</div>
          <div className="w-1/8 px-4 text-center">amit.sharma@abc.com</div>
          <div className="w-1/8 px-4 text-center">+91 987654321</div>
          <div className="w-1/8 px-4 text-center">15</div>
          <div className="w-1/8 px-4 text-center">Mumbai</div>
          <div className="w-1/8 px-4 text-center">₹2,50,000</div>
          <div className="w-1/8 px-4 text-center">
            <div className="inline-block bg-purple-500 rounded-full">
              <VisibilityIcon className="text-white" />
            </div>
          </div>
        </div>
      ))}

      {/* Bottom Section */}
      <div className="flex justify-between items-center mb-4 pl-6 pt-2 pr-6">
        <div className="flex space-x-4">
          <button
            onClick={() => handleClick('Month')}
            className={`px-4 py-2 ${activeButton === 'Month' ? 'bg-black text-white' : 'text-black'}`}
          >
            Month
          </button>
          <button
            onClick={() => handleClick('Week')}
            className={`px-4 py-2 ${activeButton === 'Week' ? 'bg-black text-white' : 'text-black'}`}
          >
            Week
          </button>
          <button
            onClick={() => handleClick('Day')}
            className={`px-4 py-2 ${activeButton === 'Day' ? 'bg-black text-white' : 'text-black'}`}
          >
            Day
          </button>
        </div>
        <div className="flex items-center space-x-2 text-purple-700">
          <CalendarMonthIcon className="text-purple-700" />
          <select>
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>

      {/* Revenue by Client */}
      <div className="border border-black p-4 bg-[#FFFFFF] ml-6 mr-6 mb-6">
        <div className="font-bold mb-2">Revenue by Client</div>
        <div className="h-64 bg-gray-200 flex justify-center items-center">
          <span className="text-gray-500">Placeholder for Content</span>
        </div>
      </div>
    </div>
  );
};

export default Clients;

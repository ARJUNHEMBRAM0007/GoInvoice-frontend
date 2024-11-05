import React, { useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const DashboardOverview = () => {
  const [activeButton, setActiveButton] = useState('month');

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
     <div className="mb-4 mt-4  bg-[#FFFFFF] w-full h-10 pl-6">
        <p><span className="text-xl font-bold ">Hi StritMedia</span>, here's a quick overview of your recent activities.</p>
        </div>

        {/* Top Section */}
        
        <div className="grid grid-cols-3 gap-4 mb-4 pl-6 pr-6">
          <div className="bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Top Clients by Revenue</h2>
            <p>Vertex Innovations Pvt. Ltd.: ₹9,60,000</p>
            <p>-----------------------------------------------------</p>
            <p>AstraVision Technologies Ltd.: ₹9,60,000</p>
          </div>
          <div className="bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Top Expenses Categories</h2>
            <p>Software Subscriptions: ₹2,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>Marketing: ₹1,44,000</p>
          </div>
          <div className="bg-purple-500  p-4 border border-black">
            <h2 className="text-xl font-bold mb-2 text-white">New</h2>
            <h2 className="text-xl font-bold mb-2">We have added new invoicing templates!</h2>
            <p>New templates focused on helping you improve your business.</p>
            <button className="bg-white p-2  border border-black ">
            <DownloadForOfflineIcon className=" text-black mr-2" />
            Download now</button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex justify-between items-center mb-4 mt-4 pl-6 pr-6">
      <div className="flex space-x-4">
        
        {/* Month Button */}
        <button
          onClick={() => handleClick('month')}
          className={`px-4 py-2 ${activeButton === 'month' ? 'bg-black text-white' : ' text-black'}`}
        >
          Month
        </button>

        {/* Day Button */}
        <button
          onClick={() => handleClick('day')}
          className={`px-4 py-2 ${activeButton === 'day' ? 'bg-black text-white' : ' text-black'}`}
        >
          Day
        </button>

        {/* Week Button */}
        <button
          onClick={() => handleClick('week')}
          className={`px-4 py-2 ${activeButton === 'week' ? 'bg-black text-white' : ' text-black'}`}
        >
          Week
        </button>
      </div>
  

  <div className="flex items-center space-x-2 text-purple-700">
    <CalendarMonthIcon className="text-purple-700" />
    <select>
      <option >This Month</option>
      <option>Last Month</option>
      <option>This Year</option>
      <option>Last Year</option>
    </select>
  </div>
</div>
        <div className="grid grid-cols-3 gap-4 mb-4  pl-6 pr-6">
          <div className="bg-white bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Total Invoices Issued</h2>
            <p className="text-3xl font-bold">₹36,00,000</p>
            <p className="text-purple-500">15 invoices</p>
          </div>
          <div className="bg-white bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Total Payments Received</h2>
            <p className="text-3xl font-bold">₹26,00,000</p>
            <p className="text-green-500">12 payments</p>
          </div>
          <div className="bg-white bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Outstanding Invoices</h2>
            <p className="text-3xl font-bold">₹10,00,000</p>
            <p className="text-blue-500">3 invoices</p>
          </div>
          <div className="bg-white bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Expenses Recorded</h2>
            <p className="text-3xl font-bold">₹7,00,000</p>
            <p className="text-yellow-500">10 expenses</p>
          </div>
          <div className="bg-white bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Tax Collected</h2>
            <p className="text-3xl font-bold">₹2,50,000</p>
          </div>
          <div className="bg-white bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Net Cash Flow</h2>
            <p className="text-3xl font-bold">₹19,00,000</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pl-6 pr-6 mb-3">
  {/* Left Section with Tabs and Recent Invoices (2/3 of the width) */}
  <div className="col-span-2 flex flex-col">
    {/* Top Navigation Tabs */}
    <div className="flex mb-4 ">
    <button
          onClick={() => handleClick('Recent Invoices Issued')}
          className={`px-2 py-2 ${activeButton === 'Recent Invoices Issued' ? 'bg-black text-white' : ' text-black'}`}
        >
          Recent Invoices Issued
        </button>
        <button
          onClick={() => handleClick('Recent Payments Recieved')}
          className={`px-2 py-2 ${activeButton === 'Recent Payments Recieved' ? 'bg-black text-white' : ' text-black'}`}
        >
          Recent Payments Recieved
        </button>
        <button
          onClick={() => handleClick('Recent Estimates Sent')}
          className={`px-2 py-2 ${activeButton === 'Recent Estimates Sent' ? 'bg-black text-white' : ' text-black'}`}
        >
          Recent Estimates Sent
        </button>
        <button
          onClick={() => handleClick('New Clients Added')}
          className={`px-2 py-2 ${activeButton === 'New Clients Added' ? 'bg-black text-white' : ' text-black'}`}
        >
          New Clients Added
        </button>
    </div>
    
    {/* Invoice Details Table */}
    <div className="flex font-bold border py-2 border-black mb-4 shadow bg-[#FFFFFF]  ">
  <div className="w-1/5 px-4 text-center ">Name</div>
  <div className="w-1/5 px-4 text-center ">Amount</div>
  <div className="w-1/5 px-4 text-center ">Client</div>
  <div className="w-1/5 px-4 text-center ">Date</div>
  <div className="w-1/5 px-4 text-center">Status</div>
</div>
    {/* Invoice Rows */}
    <div className="flex items-center border py-2 border-black bg-[#FFFFFF]">
  <div className="w-1/5 px-4 text-center">INV1359874830</div>
  <div className="w-1/5 px-4 text-center">₹2,00,000</div>
  <div className="w-1/5 px-4 text-center">ABC Corp</div>
  <div className="w-1/5 px-4 text-center">08 Aug 2024</div>
  <div className=" text-center bg-red-500">
  <WatchLaterTwoToneIcon className=" text-black " />
  Due in 5 days</div>
</div>

<div className="flex items-center border-l border-r border-black py-2 bg-[#FFFFFF]">
  <div className="w-1/5 px-4 text-center">INV1359874830</div>
  <div className="w-1/5 px-4 text-center">₹2,00,000</div>
  <div className="w-1/5 px-4 text-center">ABC Corp</div>
  <div className="w-1/5 px-4 text-center">08 Aug 2024</div>
  <div className=" text-center bg-red-500"><WatchLaterTwoToneIcon className=" text-black " />
  Due in 5 days</div>
</div>


<div className="flex items-center border py-2 border-black bg-[#FFFFFF]">
  <div className="w-1/5 px-4 text-center">INV1359874830</div>
  <div className="w-1/5 px-4 text-center">₹2,00,000</div>
  <div className="w-1/5 px-4 text-center">ABC Corp</div>
  <div className="w-1/5 px-4 text-center">08 Aug 2024</div>
  <div className=" text-center bg-red-500"><WatchLaterTwoToneIcon className=" text-black " />
  Due in 5 days</div>
</div>
</div>

  {/* Right Section for Upcoming Deadlines (1/3 of the width) */}
  <div className="col-span-1 flex flex-col">
  <div className="flex mb-4 ">
  <button
          onClick={() => handleClick('Upcoming deadlines')}
          className={`px-4 py-2  ${activeButton === 'Upcoming deadlines' ? 'bg-black text-white' : ' text-black'}`}
        >
          Upcoming deadlines
        </button>
    </div>
    <div className="bg-white p-4 border border-black">
      <p className="text-gray-600 pb-3 pt-2">
      <CalendarMonthIcon className="text-black pr-1" />
      Due to: 8 Aug 2024</p>
      <p className="text-black font-bold  ">₹1,60,000 to Nimbus Solutions Pvt. Ltd.</p>
      <p className="text-black">INV1359874830</p>
      <p>---------------------------------------------------</p>
    <div className="flex justify-between items-center">
      <button className="px-2 py-1  text-black border border-black text-sm rounded-md">&lt;</button>
      <button className="px-2 py-1  text-black border border-black text-sm rounded-md">&gt;</button>
    </div>
    </div>
  </div>
</div>   
 </div>
  );
};

export default DashboardOverview;

import React, { useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
//import DownloadIcon from '@mui/icons-material/Download';

const Screen2 = () => {  // Capitalized component name
  const [activeButton, setActiveButton] = useState("month");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
         {/* Top Section */}
        
         <div className="grid grid-cols-3 gap-4 mb-4 pl-6 pr-6 pt-8">
          <div className="bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Income Statement</h2>
            <p>Revenue: ₹36,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>Expenses: ₹36,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>Net Profit: ₹29,00,000</p>
          </div>
          <div className="bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Balance Sheet</h2>
            <p>Total Assets: ₹50,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>Total Liabilities: ₹20,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>Equity: ₹30,00,000</p>
          </div>
          <div className="bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Cash Flow Statement</h2>
            <p>Operating Cash Flow: ₹19,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>Investing Cash Flow: ₹5,00,000</p>
            <p>-----------------------------------------------------</p>
            <p>Financing Cash Flow: ₹2,00,000</p>
          </div>
        </div>


        {/* Middle Section */}
        <div className="grid grid-cols-3 gap-4 pl-6 pr-6">
        <div className="col-span-2 ">
        <div className="flex justify-between items-center mb-4">
  <div className="flex space-x-5">
  <button
          onClick={() => handleClick('Week')}
          className={`px-4 py-2 ${activeButton === 'Week' ? 'bg-black text-white' : ' text-black'}`}
        >
          Week
        </button>

        <button
          onClick={() => handleClick('Month')}
          className={`px-4 py-2 ${activeButton === 'Month' ? 'bg-black text-white' : ' text-black'}`}
        >
          Month
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
</div>
<div className="col-span-1 ">
<button
          onClick={() => handleClick('Oustanding vs Overdue Invoices')}
          className={`px-4 py-2 ${activeButton === 'Oustanding vs Overdue Invoices' ? 'bg-black text-white' : ' text-black'}`}
        >
          Oustanding vs Overdue Invoices
        </button>
</div>
</div>
        <div className="grid grid-cols-3 gap-4 pl-6 pr-6 pb-6">
          {/* Revenue vs. Expenses Over Time (2/3 of the width) */}
          
          <div className="col-span-2 bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Revenue vs. Expenses Over Time</h2>
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">[Graph Placeholder]</p>
            </div>
          </div>

          {/* Outstanding vs. Overdue Invoices (1/3 of the width) */}
          <div className="col-span-1 bg-white p-4 border border-black">
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">[Graph Placeholder]</p>
            </div>
          </div>
        </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-4 mt-4 pl-6 pr-6 pb-2">
          {/* Expense Breakdown by Category (1/3 of the width) */}
          <div className="col-span-1 bg-white p-4 border border-black">
            <h2 className="text-xl font-bold mb-2">Expense Breakdown by Category</h2>
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">[Graph Placeholder]</p>
            </div>
          </div>

          {/* Taxation Reports (2/3 of the width) */}
          <div className="col-span-2 bg-white p-4 border border-black">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Taxation Reports</h2>
              <div className="text-red-500 flex items-center">
                <span className="bg-red-500 text-black p-1">
                <WatchLaterIcon className="mr-2 text-black" />Quarterly Filing Due: 15th September</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
            <div className="flex flex-col items-center">
      <p className="text-lg font-semibold">Total Invoices Issued</p>
      <p className="text-3xl font-bold">₹36,00,000</p>
    </div>
    <div className="flex flex-col items-center">
      <p className="text-lg font-semibold">Total Invoices Issued</p>
      <p className="text-3xl font-bold">₹36,00,000</p>
    </div>
            </div>
            <p>-------------------------------------------------------------------------------------------------------------------</p>
  <div className="text-right pt-6">
    <p className="text-xl font-semibold ">Pending Tax Payment: ₹50,000</p>
  </div>
          </div>
        </div>

      
          </div>
  );
};

export default Screen2; 

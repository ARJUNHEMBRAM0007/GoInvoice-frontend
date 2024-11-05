import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Invoices = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex justify-between mb-4 p-6 pb-0">
        <div className="flex space-x-4">
          <button>Invoice List</button>
          <button>Recurring Invoices</button>
        </div>

        {/* Right-hand side buttons */}
        <div className="flex items-center space-x-2">
          {/* Create Button */}
          <button className="bg-purple-500 text-white px-4 py-2 border border-black flex items-center">
            <AddCircleIcon className="text-black mr-2" />
            Create Invoice
          </button>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="flex border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-9 m-2">
        <div className="w-1/6 px-4 text-center">Client Name</div>
        <div className="w-1/6 px-4 text-center">Invoice ID</div>
        <div className="w-1/6 px-4 text-center">Issue Date</div>
        <div className="w-1/6 px-4 text-center">Due Date</div>
        <div className="w-1/6 px-4 text-center">Amount</div>
        <div className="w-1/6 px-4 text-center">Status</div>
      </div>

      {/* Invoice Rows */}
      {['Paid', 'Unpaid', 'Overdue', 'Draft'].map((status, idx) => (
        <div key={idx} className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6">
          <div className="w-1/6 px-4 text-center">Acme Industries</div>
          <div className="w-1/6 px-4 text-center">INV-1001</div>
          <div className="w-1/6 px-4 text-center">3 Aug 2024</div>
          <div className="w-1/6 px-4 text-center">16 Aug 2024</div>
          <div className="w-1/6 px-4 text-center">₹2,50,000</div>
          <div className={`w-32 ml-10 px-6 text-center bg-${status === 'Paid' ? 'green' : status === 'Unpaid' ? 'red' : status === 'Overdue' ? 'yellow' : 'purple'}-500`}>
            {status}
          </div>
        </div>
      ))}

      {/* 2nd Section */}
      <div className="flex justify-between mb-4 p-6 pb-0">
        <div className="flex space-x-4">
          <button>Payment history</button>
        </div>

        {/* Right-hand side buttons */}
        <div className="flex items-center space-x-2">
          <button className="text-black px-2 py-2">
            <SearchIcon />
          </button>
          <button className="text-black px-2 py-2">
            <FilterListIcon />
          </button>
        </div>
      </div>

      {/* Payment Table */}
      <div className="flex border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-1">
        <div className="w-1/6 px-4 text-center">Client Name</div>
        <div className="w-1/6 px-4 text-center">Invoice ID</div>
        <div className="w-1/6 px-4 text-center">Payment ID</div>
        <div className="w-1/6 px-4 text-center">Payment Date & Time</div>
        <div className="w-1/6 px-4 text-center">Amount</div>
        <div className="w-1/6 px-4 text-center">Payment Method</div>
      </div>

      {/* Payment Rows */}
      {[...Array(5)].map((_, idx) => (
        <div key={idx} className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6">
          <div className="w-1/6 px-4 text-center">Acme Industries</div>
          <div className="w-1/6 px-4 text-center">INV-1001</div>
          <div className="w-1/6 px-4 text-center">PAY-1001</div>
          <div className="w-1/6 px-4 text-center">12 Aug 2024,11:00 AM</div>
          <div className="w-1/6 px-4 text-center">₹2,50,000</div>
          <div className="w-1/6 px-4 text-center">Bank Transfer</div>
        </div>
      ))}

      {/* Bottom Section */}
      <div className="grid grid-cols-7 gap-4 mt-4 pl-6 pr-6 pb-2">
        {/* Taxation Reports */}
        <div className="col-span-4 bg-white p-4 border border-black">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">Monthly Invoices Issued</h2>
            <div className="flex items-center space-x-2 text-purple-700">
              <CalendarMonthIcon className="text-purple-700" />
              <select>
                <option>This Year</option>
                <option>Last Month</option>
                <option>This Year</option>
                <option>Last Year</option>
              </select>
            </div>
          </div>
          <p>Total Invoices Issued: ₹36,00,000</p>
          <p>Pending Tax Payment: ₹50,000</p>
        </div>

        {/* Expense Breakdown */}
        <div className="col-span-3 bg-white p-4 border border-black">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">Payment Status Overview</h2>
            <div className="flex items-center space-x-2 text-purple-700">
              <CalendarMonthIcon className="text-purple-700" />
              <select>
                <option>This Week</option>
                <option>Last Month</option>
                <option>This Year</option>
                <option>Last Year</option>
              </select>
            </div>
          </div>
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">[Graph Placeholder]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;

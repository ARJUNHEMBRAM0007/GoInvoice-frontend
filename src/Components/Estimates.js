import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Estimates = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex justify-between mb-4 p-6 pb-0">
        <div className="flex space-x-4">
          <button>Estimate List</button>
          <button>Outstanding Estimates</button>
        </div>

        {/* Right-hand side buttons */}
        <div className="flex items-center space-x-2">
          {/* Create Button */}
          <button className="bg-purple-500 text-white px-4 py-2 border border-black flex items-center">
            <AddCircleIcon className="text-black mr-2" />
            Create Estimate
          </button>
        </div>
      </div>

      {/* Estimates Table */}
      <div className="flex border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-9 m-2">
        <div className="w-1/6 px-4 text-center">Client Name</div>
        <div className="w-1/6 px-4 text-center">Estimate ID</div>
        <div className="w-1/6 px-4 text-center">Issue Date</div>
        <div className="w-1/6 px-4 text-center">Expiry Date</div>
        <div className="w-1/6 px-4 text-center">Amount</div>
        <div className="w-1/6 px-4 text-center">Status</div>
      </div>

      {/* Example Estimate Rows */}
      {[
        { name: "Acme Industries", id: "EST-1001", issue: "3 Aug 2024", expiry: "16 Aug 2024", amount: "₹2,50,000", status: "Accepted", statusColor: "bg-green-500" },
        { name: "Acme Industries", id: "EST-1001", issue: "3 Aug 2024", expiry: "16 Aug 2024", amount: "₹2,50,000", status: "Rejected", statusColor: "bg-red-500" },
        { name: "Acme Industries", id: "INV-1001", issue: "3 Aug 2024", expiry: "16 Aug 2024", amount: "₹2,50,000", status: "Expired", statusColor: "bg-yellow-500" },
        { name: "Acme Industries", id: "INV-1001", issue: "3 Aug 2024", expiry: "16 Aug 2024", amount: "₹2,50,000", status: "Pending", statusColor: "bg-purple-500" },
      ].map((estimate, index) => (
        <div key={index} className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6">
          <div className="w-1/6 px-4 text-center">{estimate.name}</div>
          <div className="w-1/6 px-4 text-center">{estimate.id}</div>
          <div className="w-1/6 px-4 text-center">{estimate.issue}</div>
          <div className="w-1/6 px-4 text-center">{estimate.expiry}</div>
          <div className="w-1/6 px-4 text-center">{estimate.amount}</div>
          <div className={`w-32 ml-10 px-6 text-center ${estimate.statusColor}`}>{estimate.status}</div>
        </div>
      ))}

      {/* 2nd Section */}
      <div className="flex justify-between mb-4 p-6 pb-0">
        <div className="flex space-x-4">
          <button>Estimate History</button>
        </div>

        {/* Right-hand side buttons */}
        <div className="flex items-center space-x-2">
          {/* Search Icon */}
          <button className="text-black px-2 py-2">
            <SearchIcon />
          </button>

          {/* Filter Icon */}
          <button className="text-black px-2 py-2">
            <FilterListIcon />
          </button>
        </div>
      </div>

      {/* History Table */}
      <div className="flex border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-1">
        <div className="w-1/5 px-4 text-center">Client Name</div>
        <div className="w-1/5 px-4 text-center">Estimate ID</div>
        <div className="w-1/5 px-4 text-center">Revision Date & Time</div>
        <div className="w-1/5 px-4 text-center">Amount</div>
        <div className="w-1/5 px-4 text-center">Client Feedback</div>
      </div>

      {/* Example History Rows */}
      {Array(6).fill({
        name: "Acme Industries",
        id: "EST-1001",
        revision: "12 Aug 2024, 11:00 AM",
        amount: "₹2,50,000",
        feedback: "Approved with minor revisions"
      }).map((history, index) => (
        <div key={index} className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6">
          <div className="w-1/5 text-center">{history.name}</div>
          <div className="w-1/5 text-center">{history.id}</div>
          <div className="w-1/5 text-center">{history.revision}</div>
          <div className="w-1/5 text-center">{history.amount}</div>
          <div className="w-1/5 text-center">{history.feedback}</div>
        </div>
      ))}

      {/* Bottom Section */}
      <div className="grid grid-cols-7 gap-4 mt-4 pl-6 pr-6 pb-2">
        {/* Revenue from Accepted Estimates */}
        <div className="col-span-4 bg-white p-4 border border-black">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">Revenue from Accepted Estimates</h2>
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
        </div>

        {/* Conversion Rate Overview */}
        <div className="col-span-3 bg-white p-4 border border-black">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">Conversion Rate Overview</h2>
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

export default Estimates;

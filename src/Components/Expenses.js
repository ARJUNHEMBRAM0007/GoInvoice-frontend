import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Expenses = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex justify-between mb-4 p-6 pb-0">
        <div className="flex space-x-4">
          <button>Expense List</button>
          <button>Expense History</button>
        </div>

        {/* Right-hand side buttons */}
        <div className="flex items-center space-x-2">
          {/* Create Button */}
          <button className="bg-purple-500 text-white px-4 py-2 border border-black flex items-center">
            <AddCircleIcon className="text-black mr-2" />
            Add expenses
          </button>
        </div>
      </div>

      {/* Expense Table */}
      <div className="flex border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-9 m-2">
        <div className="w-1/7 px-7 text-center">Expense ID</div>
        <div className="w-1/7 px-7 text-center">Expense Name</div>
        <div className="w-1/7 px-7 text-center">Paid By</div>
        <div className="w-1/7 px-7 text-center">Payment Method</div>
        <div className="w-1/7 px-7 text-center">Category</div>
        <div className="w-1/7 px-7 text-center">Date</div>
        <div className="w-1/7 px-7 text-center">Amount</div>
      </div>

      {["EXP-1001", "EXP-1001", "EXP-1001", "EXP-1001", "EXP-1001"].map((id, index) => (
        <div key={index} className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6 space-x-10 ml-2 mr-2">
          <div className="w-1/7 px-7 text-center">{id}</div>
          <div className="w-1/7 px-7 text-center">Office Rent</div>
          <div className="w-1/7 px-7 text-center">Admin Dept.</div>
          <div className="w-1/7 px-7 text-center">Bank Transfer</div>
          <div className="w-1/7 px-7 text-center">Rent</div>
          <div className="w-1/7 px-7 text-center">01 Aug 2024</div>
          <div className="w-1/7 px-7 text-center">₹2,50,000</div>
        </div>
      ))}

      {/* 2nd Section */}
      <div className="flex justify-between mb-4 p-6 pb-0">
        <div className="flex space-x-4">
          <button>Monthly Expense Summary</button>
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

      <div className="flex border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-1">
        <div className="w-1/4 px-4 text-center">Month</div>
        <div className="w-1/4 px-4 text-center">Total Expenses</div>
        <div className="w-1/4 px-4 text-center">Top Expense</div>
        <div className="w-1/4 px-4 text-center">Category with Highest Spend</div>
      </div>

      {["June 2024", "June 2024", "June 2024"].map((month, index) => (
        <div key={index} className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6">
          <div className="w-1/4 text-center">{month}</div>
          <div className="w-1/4 text-center">₹4,75,000</div>
          <div className="w-1/4 text-center">Employee Salaries-₹3,00,000</div>
          <div className="w-1/4 text-center">Payroll</div>
        </div>
      ))}

      {/* Bottom Section */}
      <div className="grid grid-cols-7 gap-4 mt-4 pl-6 pr-6 pb-2">
        {/* Monthly Expense Trends */}
        <div className="col-span-4 bg-white p-4 border border-black">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">Monthly Expense Trends</h2>
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

        {/* Expense Breakdown by Category */}
        <div className="col-span-3 bg-white p-4 border border-black">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">Expense Distribution</h2>
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
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">[Graph Placeholder]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;

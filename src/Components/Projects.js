import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Projects = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex justify-between mb-4 p-6 pb-0">
        <div className="flex space-x-4">
          <button>Recent Transactions</button>
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

          {/* Create Button */}
          <button className="bg-purple-500 text-white px-4 py-2 border border-black flex items-center">
            <AddCircleIcon className="text-black mr-2" />
            Create new
          </button>
        </div>
      </div>

      {/* Project Details Table */}
      <div className="flex border py-2 border-black mb-4 shadow bg-white ml-6 mr-6 space-x-14 m-2">
        <div className="w-1/7 px-4 text-center">Client Name</div>
        <div className="w-1/7 px-4 text-center">Project Name</div>
        <div className="w-1/7 px-4 text-center">Start Date</div>
        <div className="w-1/7 px-4 text-center">Project Status</div>
        <div className="w-1/7 px-4 text-center">Budget</div>
        <div className="w-1/7 px-4 text-center">Amount Spent</div>
        <div className="w-1/7 px-4 text-center">View & Edit</div>
      </div>

      {/* Project Rows */}
      {Array(5).fill("").map((_, index) => (
        <div className="flex items-center border py-2 border-black bg-white ml-6 mr-6 space-x-12" key={index}>
          <div className="w-1/7 px-4 text-center">Acme Industries</div>
          <div className="w-1/7 px-4 text-center">Website Redesign</div>
          <div className="w-1/7 px-4 text-center">03 Aug 2024</div>
          <div className="w-32 ml-10 px-6 text-center bg-yellow-500">Paused</div>
          <div className="w-1/7 px-4 text-center">₹2,50,000</div>
          <div className="w-1/7 px-4 text-center">₹2,50,000</div>
          <div className="inline-block bg-purple-500 rounded-full">
            <VisibilityIcon className="text-white" />
          </div>
        </div>
      ))}

      <div className="grid grid-cols-3 gap-4 pl-6 pr-6 pt-6">
        {/* Left Section with Tabs and Recent Invoices (2/3 of the width) */}
        <div className="col-span-2 flex flex-col">
          {/* Top Navigation Tabs */}
          <div className="flex mb-4 space-x-4">
            <button>Recent Project Activities</button>
          </div>

          {/* Invoice Details Table */}
          <div className="flex font-bold border py-2 border-black mb-4 shadow bg-white">
            <div className="w-1/3 px-4 text-center">Performed By</div>
            <div className="w-1/3 px-4 text-center">Activity</div>
            <div className="w-1/3 px-4 text-center">Date & Time</div>
          </div>

          {/* Invoice Rows */}
          <div className="flex-grow">
            {Array(6).fill("").map((_, index) => (
              <div className="flex items-center border py-2 border-black bg-white" key={index}>
                <div className="w-1/3 flex items-center px-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>Amit Sharma</span>
                </div>
                <div className="w-1/3 px-4 text-center">Completed Homepage Design</div>
                <div className="w-1/3 px-4 text-center">09 Aug 2024, 01:45PM</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section for Upcoming Deadlines (1/3 of the width) */}
        <div className="col-span-1 flex flex-col">
          <button className="pb-4">Budget vs Actual Spending</button>
          <div className="bg-white p-4 border border-black flex-grow flex flex-col justify-between">
            <div className="flex-grow">
              <textarea
                placeholder=""
                className="w-full h-full text-gray-600 border-none resize-none focus:outline-none"
              />
            </div>
            <p>-----------------------------------------------------</p>
            <div className="flex justify-between items-center mt-4">
              <button className="px-2 py-1 text-black border border-black text-sm rounded-md">&lt;</button>
              <p>Website Redesign</p>
              <button className="px-2 py-1 text-black border border-black text-sm rounded-md">&gt;</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Calendar */}
      <div className="flex justify-between items-center mb-4 pl-6 pr-6 pt-6">
        <div className="flex space-x-4">
          <button>Month</button>
          <button>Day</button>
          <button>Week</button>
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

      {/* Project Completion Rate */}
      <div className="border border-black p-4 bg-white ml-6 mr-6 mb-6">
        <div className="font-bold mb-2">Project Completion Rate</div>
        <div className="h-64 bg-gray-200 flex justify-center items-center">
          <span className="text-gray-500">Placeholder for Content</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;

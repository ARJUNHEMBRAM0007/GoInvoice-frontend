import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const TimeEntry = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Top Section */}
      <div className="flex justify-between mb-4 p-6 pb-0">
        <div className="flex space-x-4">
          <button>Time Entry Log</button>
        </div>

        {/* Right-hand side buttons */}
        <div className="flex items-center space-x-2">
          {/* Search Icon */}
          <button className=" text-black px-2 py-2 ">
            <SearchIcon />
          </button>

          {/* Filter Icon */}
          <button className=" text-black px-2 py-2 ">
            <FilterListIcon />
          </button>
        </div>
      </div>

      {/* Header Row */}
      <div className="flex border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-14 m-2">
        <div className="px-3 text-center">Entry ID</div>
        <div className="px-3 text-center">Date</div>
        <div className="px-3 text-center">Project Name</div>
        <div className="px-3 text-center">Task Name</div>
        <div className="px-3 text-center">Hours Logged</div>
        <div className="px-3 text-center">Employee Name</div>
        <div className="px-3 text-center">Billable/Non-Billable</div>
      </div>

      {/* Data Rows */}
      {['green-500', 'yellow-500', 'green-500', 'yellow-500'].map((color, index) => (
        <div key={index} className="flex border py-2 border-black bg-[#FFFFFF] ml-6 mr-6 space-x-12">
          <div className="px-3 text-center">TE-1001</div>
          <div className="px-3 text-center">03 Aug 2024</div>
          <div className="px-3 text-center">Website Redesign</div>
          <div className="px-3 text-center">Homepage Redesign</div>
          <div className="px-3 text-center">4 hours</div>
          <div className="px-3 text-center">Nisha Verma</div>
          <div className={`w-32 text-center bg-${color}`}>{color === 'green-500' ? 'Billable' : 'Non-Billable'}</div>
        </div>
      ))}

      <div className="grid grid-cols-3 gap-4 pl-6 pr-6 pt-6">
        {/* Left Section with Tabs and Recent Entries */}
        <div className="col-span-2 flex flex-col">
          {/* Top Navigation Tabs */}
          <div className="flex mb-4 space-x-4">
            <button>Weekly Time Summary</button>
          </div>

          {/* Summary Table Header */}
          <div className="flex border py-2 border-black mb-4 shadow bg-[#FFFFFF]">
            <div className="w-1/3 px-4 text-center">Employee Name</div>
            <div className="w-1/3 px-4 text-center">Total Hours</div>
            <div className="w-1/3 px-4 text-center">Billable Hours</div>
            <div className="w-1/3 px-4 text-center">Non-Billable Hours</div>
          </div>

          {/* Summary Rows */}
          <div className="flex-grow">
            {Array(6).fill("").map((_, index) => (
              <div className="flex items-center border py-2 border-black bg-[#FFFFFF]" key={index}>
                <div className="w-1/4 px-2 text-center">Acme Industries</div>
                <div className="w-1/4 px-2 text-center">Review</div>
                <div className="w-1/4 px-2 text-center">09 Aug 2024, 01:45 PM</div>
                <div className="w-1/4 px-2 text-center">Yes</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section for Billable vs Non-Billable */}
        <div className="col-span-1 flex flex-col">
          <button className="pb-4">Billable vs Non-Billable</button>
          <div className="bg-white p-4 border border-black flex-grow flex flex-col justify-between">
            <div className="flex-grow">
              <textarea
                placeholder=""
                className="w-full h-full text-gray-600 border-none resize-none focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeEntry;

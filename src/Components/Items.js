import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const Items = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex justify-between mb-4 p-6 pb-0">
        <div className="flex space-x-4">
          <button>Items List</button>
          <button>Item History</button>
        </div>

        {/* Right-hand side buttons */}
        <div className="flex items-center space-x-2">
          {/* Create Button */}
          <button className="bg-purple-500 text-white px-4 py-2 border border-black flex items-center">
            <AddCircleIcon className="text-black mr-2" />
            Add Items
          </button>
        </div>
      </div>

      {/* Item Table Header */}
      <div className="flex border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-9 m-2">
        <div className="w-1/6 px-4 text-center">Item ID</div>
        <div className="w-1/6 px-4 text-center">Item Name</div>
        <div className="w-1/6 px-4 text-center">Description</div>
        <div className="w-1/6 px-4 text-center">Quantity Available</div>
        <div className="w-1/6 px-4 text-center">Category</div>
        <div className="w-1/6 px-4 text-center">Unit Price</div>
      </div>

      {/* Item Table Rows */}
      {Array(5).fill().map((_, index) => (
        <div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6" key={index}>
          <div className="w-1/6 text-center">ITM-1001</div>
          <div className="w-1/5 text-center">Web Development Package</div>
          <div className="w-1/4 text-center">full website development service</div>
          <div className="w-1/6 text-center">N/A</div>
          <div className="w-1/6 text-center">Services</div>
          <div className="w-1/6 text-center">₹2,50,000</div>
        </div>
      ))}

      {/* Middle Section */}
      <div className="grid grid-cols-3 gap-4 mb-4 pl-6 pr-6 pt-6">
        <div className="bg-white p-4 border border-black">
          <h2 className="text-xl font-bold mb-2">Top selling items</h2>
          <p>Web Development Package: ₹8,00,000</p>
          <p>-----------------------------------------------------</p>
          <p>UI/UX Design Service: ₹4,50,000</p>
          <p>-----------------------------------------------------</p>
          <p>Cloud Hosting: ₹3,60,000</p>
        </div>
        <div className="bg-white p-4 border border-black">
          <h2 className="text-xl font-bold mb-2">Services</h2>
          <p>Web Development</p>
          <p>-----------------------------------------------------</p>
          <p>UI/UX Design</p>
          <p>-----------------------------------------------------</p>
          <p>Custom App Development</p>
        </div>
        <div className="bg-white p-4 border border-black">
          <h2 className="text-xl font-bold mb-2">Cash Flow Statement</h2>
          <p>Domain Registration</p>
          <p>-----------------------------------------------------</p>
          <p>Cloud Hosting</p>
          <p>-----------------------------------------------------</p>
          <p>Office Supplies</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between mb-4 pl-6 pr-6 pb-0">
        <div className="flex space-x-4">
          <button>Inventory Management</button>
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

      {/* Inventory Table Header */}
      <div className="flex border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 space-x-1">
        <div className="w-1/5 px-4 text-center">Item ID</div>
        <div className="w-1/5 px-4 text-center">Item Name</div>
        <div className="w-1/5 px-4 text-center">Stock Level</div>
        <div className="w-1/5 px-4 text-center">Reorder Level</div>
        <div className="w-1/5 px-4 text-center">Status</div>
      </div>

      {/* Inventory Table Rows */}
      {Array(4).fill().map((_, index) => (
        <div className="flex items-center border py-2 border-black bg-[#FFFFFF] ml-6 mr-6" key={index}>
          <div className="w-1/5 text-center">ITM-1001</div>
          <div className="w-1/5 text-center">Domain Registration</div>
          <div className="w-1/5 text-center">180</div>
          <div className="w-1/5 text-center">80</div>
          <div className="w-1/5 text-center">In stock</div>
        </div>
      ))}
    </div>
  );
};

export default Items;

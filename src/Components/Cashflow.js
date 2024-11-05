import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const Cashflow = () => {
  const handleClick = (buttonName) => {
    console.log(`${buttonName} clicked`);
  };

  const activeButton = 'Recent Transactions'; // Update this logic based on your needs

  return (
    <div className="grid grid-cols-3 gap-4 p-6 pt-8">
      {/* Left side: Main 4 boxes */}
      <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
        {/* Box 1: Stripe */}
        <div className="h-full bg-white p-4 border border-black">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              Stripe<span className="text-base font-normal ml-2">Accept card payments</span>
            </h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-black rounded-full peer dark:black"></div>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
          </div>
          <div className="flex-grow pt-3">
            <p>European cards: 2.10% + ₹20 per transaction</p>
            <p>Foreign cards & AMEX: 3.60% + ₹20 per transaction</p>
            <div className="flex space-x-7 pt-3">
              <img src="/path-to-icons/apple.png" alt="Apple" />
              <img src="/path-to-icons/amex.png" alt="America" />
              <img src="/path-to-icons/visa.png" alt="Visa" />
              <button className="text-purple-500">See history</button>
            </div>
          </div>
        </div>

        {/* Box 2: PayPal */}
        <div className="h-full bg-white p-4 border border-black">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              PayPal<span className="text-base font-normal ml-2">Accept PayPal</span>
            </h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-black rounded-full peer dark:black"></div>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
          </div>
          <p className="flex-grow pt-3">Transaction Fees Apply: Standard PayPal fees per transaction.</p>
          <div className="flex justify-between items-center pt-3">
            <img src="/path-to-icons/paypal.png" alt="PayPal" />
            <button className="text-purple-500">See history</button>
          </div>
        </div>

        {/* Box 3: Razorpay */}
        <div className="h-full bg-white p-4 border border-black">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              Razorpay<span className="text-base font-normal ml-2">Accept Razorpay</span>
            </h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-black rounded-full peer dark:black"></div>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
          </div>
          <p className="flex-grow pt-3">Transaction Fees Apply: Standard Razorpay fees per transaction.</p>
          <div className="flex justify-between items-center pt-3">
            <img src="/path-to-icons/razorpay.png" alt="Razorpay" />
            <button className="text-purple-500 mt-auto">See history</button>
          </div>
        </div>

        {/* Box 4: Estimate deposit */}
        <div className="h-full bg-white p-4 border border-black">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Estimate deposit</h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-black rounded-full peer dark:black"></div>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
          </div>
          <p className="flex-grow pt-6 pb-3">
            Let clients pay estimate deposits using offline payment methods, such as cash and checks.
          </p>
          <button className="bg-purple-500 text-white py-2 px-4 border border-black mt-9 w-full">
            <AddCircleIcon className="text-black mr-2" />
            Add offline payment method
          </button>
        </div>
      </div>

      {/* Right side: Additional 3 boxes */}
      <div className="grid grid-rows-3 gap-4">
        {/* Box 1: Tips */}
        <div className="h-full bg-white p-4 border border-black">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Tips</h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-black rounded-full peer dark:black"></div>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
          </div>
          <div className="flex-grow pt-3">
            <p>Let customers add a tip when they pay online.</p>
          </div>
        </div>

        {/* Box 2: Remittance advice */}
        <div className="h-full bg-white p-4 border border-black">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Remittance advice</h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-black rounded-full peer dark:bg-black"></div>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
          </div>
          <div className="flex-grow pt-3">
            <p>Show remittance advice at the bottom of an invoice so clients can attach payments.</p>
          </div>
        </div>

        {/* Box 3: Invoice due date */}
        <div className="h-full bg-white p-4 border border-black">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Invoice due date</h3>
          </div>
          <p>Payment terms</p>
          <select className="border border-black p-2 w-full">
            <option>Same day</option>
          </select>
          <p>Terms will be applied to all future invoices</p>
        </div>
      </div>

      {/* Transaction buttons */}
      <div className="flex justify-between mb-4 pl-6 pr-6 pb-0">
        <div className="flex space-x-4">
          <button
            onClick={() => handleClick('Recent Transactions')}
            className={`px-4 py-2 ${activeButton === 'Recent Transactions' ? 'bg-black text-white' : ' text-black'}`}
          >
            Recent Transactions
          </button>
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

      {/* Invoice Details Table */}
      <div className="flex font-bold border py-2 border-black mb-4 shadow bg-[#FFFFFF] ml-6 mr-6 mb-2">
        <div className="w-1/5 px-4 text-center">Client</div>
        <div className="w-1/5 px-4 text-center">Invoice</div>
        <div className="w-1/5 px-4 text-center">Payment date</div>
        <div className="w-1/5 px-4 text-center">Amount</div>
        <div className="w-1/5 px-4 text-center">Action</div>
      </div>
    </div>
  );
};

export default Cashflow;

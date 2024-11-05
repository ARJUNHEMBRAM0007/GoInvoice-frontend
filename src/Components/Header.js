import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HelpIcon from '@mui/icons-material/Help';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Header = ({ activeButton }) => {
  return (
    <div className="flex justify-between items-center pb-3 bg-[#F9F4F0] border-b border-black w-full pl-6 pr-6 pt-4 pb-4">
      <h1 className="text-2xl font-bold">{activeButton}</h1>
      <div className="flex items-center space-x-10">
        <SearchIcon className="text-black" />
        <NotificationsIcon className="text-black" />
        <LocalMallIcon className="text-black" />
        <HelpIcon className="text-black" />
        <button className="bg-purple-500 text-white px-4 py-2 border border-black flex items-center">
          <AddCircleIcon className=" text-black mr-2" />
          Create new
        </button>
      </div>
    </div>
  );
};

export default Header;

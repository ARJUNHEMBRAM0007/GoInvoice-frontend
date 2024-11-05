import React from 'react';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DescriptionIcon from '@mui/icons-material/Description';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = ({ activeButton, handleButtonClick }) => {
  const buttons = [
    { name: 'Home', icon: <HomeIcon /> },
    { name: 'Reports', icon: <AssessmentIcon /> },
    { name: 'Cash Flow', icon: <AttachMoneyIcon /> },
  ];

  const clientsAndProjects = [
    { name: 'Clients', icon: <PeopleIcon /> },
    { name: 'Projects', icon: <WorkIcon /> },
    { name: 'Appointments', icon: <EventIcon /> },
    { name: 'Time Entry', icon: <AccessTimeIcon /> },
  ];

  const financialManagement = [
    { name: 'Invoices', icon: <ReceiptIcon /> },
    { name: 'Estimates', icon: <DescriptionIcon /> },
    { name: 'Items', icon: <ListAltIcon /> },
    { name: 'Expenses', icon: <AccountBalanceIcon /> },
    { name: 'Taxation Settings', icon: <SettingsIcon /> },
  ];

  return (
    <div className="w-1/5 bg-black text-white flex flex-col justify-between">
      <div className="p-4">
        <div className="text-2xl font-bold mb-6">GoInvoice.io</div>
        <ul className="space-y-4">
          <li className="text-gray-400 text-sm">Dashboard</li>
          {buttons.map((button) => (
            <li key={button.name}>
              <button
                onClick={() => handleButtonClick(button.name)}
                className={`flex items-center text-base p-2 rounded-lg w-full text-left ${
                  activeButton === button.name ? 'bg-purple-500' : 'bg-black'
                }`}
              >
                {button.icon}
                <span className="ml-2">{button.name}</span>
              </button>
            </li>
          ))}
          <li className="text-gray-400 text-sm">Clients & Projects</li>
          {clientsAndProjects.map((button) => (
            <li key={button.name}>
              <button
                onClick={() => handleButtonClick(button.name)}
                className={`flex items-center text-base p-2 rounded-lg w-full text-left ${
                  activeButton === button.name ? 'bg-purple-500' : 'bg-black'
                }`}
              >
                {button.icon}
                <span className="ml-2">{button.name}</span>
              </button>
            </li>
          ))}
          <li className="text-gray-400 text-sm">Financial Management</li>
          {financialManagement.map((button) => (
            <li key={button.name}>
              <button
                onClick={() => handleButtonClick(button.name)}
                className={`flex items-center text-base p-2 rounded-lg w-full text-left ${
                  activeButton === button.name ? 'bg-purple-500' : 'bg-black'
                }`}
              >
                {button.icon}
                <span className="ml-2">{button.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Avatar className="bg-purple-500">S</Avatar>
          <span className="ml-2">StritMedia</span>
        </div>
        <MoreVertIcon />
      </div>
    </div>
  );
};

export default Sidebar;

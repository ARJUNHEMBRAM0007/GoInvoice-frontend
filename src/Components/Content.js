import React from 'react';
import Home from './Home';
import Reports from './Reports';
import Cashflow from './Cashflow';
import Clients from './Clients';
import Projects from './Projects';
import Appointments from './Appointments';
import Timeentry from './Timeentry';
import Invoices from './Invoices';
import Estimates from './Estimates';
import Items from './Items';
import Expenses from './Expenses';

const Content = ({ activeButton }) => {
  return (
    <div className="p-6">
      {activeButton === 'Home' && <Home />}
      {activeButton === 'Reports' && <Reports />}
      {activeButton === 'Cash Flow' && <Cashflow />}
      {activeButton === 'Clients' && <Clients />}
      {activeButton === 'Projects' && <Projects />}
      {activeButton === 'Appointments' && <Appointments />}
      {activeButton === 'Time Entry' && <Timeentry />}
      {activeButton === 'Invoices' && <Invoices />}
      {activeButton === 'Estimates' && <Estimates />}
      {activeButton === 'Items' && <Items />}
      {activeButton === 'Expenses' && <Expenses />}
    </div>
  );
};

export default Content;

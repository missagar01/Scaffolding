import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import AboutUs from './pages/About Us/AboutUs';
import CustomerSupport from './pages/Customer Support/CustomerSupport';
import CoreProductPortfolio from './pages/Core Product Portfolio/CoreProductPortfolio';
import CupLockSystem from './pages/Cup Lock System/CupLockSystem';
import AdjustableProps from './pages/Adjustable Props/AdjustableProps';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<CoreProductPortfolio />} />
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="/cuplock" element={<CupLockSystem />} />
          <Route path="/props" element={<AdjustableProps />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

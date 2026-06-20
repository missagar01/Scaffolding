import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import AboutUs from './pages/About Us/AboutUs';
import CustomerSupport from './pages/Customer Support/CustomerSupport';
import CoreProductPortfolio from './pages/Core Product Portfolio/CoreProductPortfolio';
import CupLockSystem from './pages/Cup Lock System/CupLockSystem';
import AdjustableProps from './pages/Adjustable Props/AdjustableProps';
import AdjustableBaseJack from './pages/Adjustable Base Jack/AdjustableBaseJack';
import AdjustableUBaseJack from './pages/Adjustable U-Base Jack/AdjustableUBaseJack';
import ScaffoldingPipe from './pages/Scaffolding Pipe/ScaffoldingPipe';
import WalkwayPlatform from './pages/Walkway Platform/WalkwayPlatform';

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
          <Route path="/basejack" element={<AdjustableBaseJack />} />
          <Route path="/ubasejack" element={<AdjustableUBaseJack />} />
          <Route path="/pipe" element={<ScaffoldingPipe />} />
          <Route path="/walkway" element={<WalkwayPlatform />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

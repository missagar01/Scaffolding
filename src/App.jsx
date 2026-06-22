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
import ShutteringMaterialAndSupportUse from './pages/Shuttering Material & Support Use/ShutteringMaterial&SupportUse';
import TechnicalStandardsAndMaterialPositioning from './pages/Technical Standards & Material Positioning/TechnicalStandards&MaterialPositioning';

import ApplicationAreas from './pages/Application Areas/ApplicationAreas';
import QualityTestingAndInspection from './pages/Quality Testing & Inspection/QualityTesting&Inspection';
import DealerAndContractor from './pages/Dealer & Contractor Value Proposition/Dealer&Contractor';
import ProcurementChecklist from './pages/Procurement Checklist for Buyers/ProcurementChecklist';
import WhyChoose from './pages/Why Choose SAGAR SCAFFOLDING/WhyChoose';
import Thankyou from './pages/Thank You/Thankyou';


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
          <Route path="/shuttering" element={<ShutteringMaterialAndSupportUse />} />
          <Route path="/technical-standards" element={<TechnicalStandardsAndMaterialPositioning />} />

          <Route path="/application-areas" element={<ApplicationAreas />} />
          <Route path="/quality-testing" element={<QualityTestingAndInspection />} />
          <Route path="/dealer-contractor" element={<DealerAndContractor />} />
          <Route path="/procurement-checklist" element={<ProcurementChecklist />} />
          <Route path="/why-choose" element={<WhyChoose />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

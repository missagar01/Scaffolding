import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Hammer, ClipboardList, Info } from 'lucide-react';
import verticalImg from '../../Assets/Images/Cuplock VerticalStandard.jpeg';
import ledgerImg from '../../Assets/Images/Cuplock LedgerHorizontal.jpeg';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
};

const CupLockSystem = () => {
  const isMobile = useMobile();
  const [activeTab, setActiveTab] = useState('verticals');
  const [scaleFactor, setScaleFactor] = useState(1);

  // Calculate dynamic scale factor to prevent clipping on small screen heights
  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      
      if (width < 768) {
        // Mobile screens: vertical layout
        // We have: Header + Tab bar (approx 160px) + Dots/Footer (approx 80px) = 240px static space
        const availableHeight = height - 240;
        const targetHeight = 410; // compact mobile content height
        let factor = availableHeight / targetHeight;
        setScaleFactor(Math.max(0.65, Math.min(1, factor)));
      } else {
        // Desktop screens: horizontal layout
        // We have: Header + Tab bar + Footer = 180px static space
        const availableHeight = height - 180;
        const targetHeight = 440;
        const factor = availableHeight / targetHeight;
        setScaleFactor(Math.max(0.75, Math.min(1.05, factor)));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sizeTableVerticals = [
    { size: "3000", cups: "6/3", weight: "13.65" },
    { size: "2500", cups: "5/3", weight: "11.20" },
    { size: "2000", cups: "4/2", weight: "9.15" },
    { size: "1500", cups: "3/2", weight: "6.85" },
    { size: "1000", cups: "2/1", weight: "4.60" },
    { size: "500", cups: "1/1", weight: "2.35" }
  ];

  const loadTableVerticals = [
    { length: "500", medium: "4.66", heavy: "6.32" },
    { length: "1000", medium: "4.12", heavy: "5.57" },
    { length: "1500", medium: "3.54", heavy: "4.74" },
    { length: "2000", medium: "2.67", heavy: "3.50" }
  ];

  const sizeTableLedgers = [
    { size: "2400", actual: "2352", weight: "7.20" },
    { size: "2000", actual: "1952", weight: "6.10" },
    { size: "1800", actual: "1752", weight: "5.50" },
    { size: "1500", actual: "1452", weight: "4.65" },
    { size: "1200", actual: "1152", weight: "3.70" },
    { size: "1000", actual: "952", weight: "3.15" }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden select-none">
      
      {/* Main Container with height auto-adjustment */}
      <div 
        style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'center' }}
        className="relative z-10 w-full max-w-6xl flex flex-col py-2 md:py-4 mt-[-3vh] md:mt-[-2vh] transition-transform duration-300"
      >
        
        {/* Header Block matching AboutUs.jsx */}
        <div className="flex flex-col mb-3 md:mb-5 lg:mb-6">
          <div className="relative inline-block w-fit mb-1.5 pb-0.5">
            <h2 className="text-xl sm:text-2xl tracking-tight">
              <span className="text-[#8c1d21] font-bold">Cuplock</span>{" "}
              <span className="text-[#1e293b] font-medium">Scaffolding Systems</span>
            </h2>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8c1d21]" />
          </div>
          <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-3xl">
            Cuplock is a proven multipurpose scaffolding system which can be used in structures for building and construction industries. It is the most versatile and optimized system of Scaffolding.
          </p>
        </div>

        {/* Custom Tab Selector */}
        <div className="flex justify-center gap-1.5 sm:gap-3 mt-3 mb-4 md:mt-0 md:mb-5 lg:mb-6 w-full">
          <button
            onClick={() => setActiveTab('verticals')}
            className={`py-1.5 px-2 md:py-2 md:px-4 text-[10px] sm:text-xs md:text-sm font-bold transition-all rounded-lg border shadow-xs whitespace-nowrap ${
              activeTab === 'verticals'
                ? "bg-[#8c1d21] text-white border-[#8c1d21]"
                : "bg-white text-slate-600 border-slate-200 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            {isMobile ? "Verticals" : "Vertical Standards"}
          </button>
          <button
            onClick={() => setActiveTab('ledgers')}
            className={`py-1.5 px-2 md:py-2 md:px-4 text-[10px] sm:text-xs md:text-sm font-bold transition-all rounded-lg border shadow-xs whitespace-nowrap ${
              activeTab === 'ledgers'
                ? "bg-[#8c1d21] text-white border-[#8c1d21]"
                : "bg-white text-slate-600 border-slate-200 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            {isMobile ? "Ledgers" : "Horizontal Ledgers"}
          </button>
        </div>

        {/* Content Tabs Area */}
        <div className="relative w-full h-[395px] md:h-[330px] lg:h-[340px]">
          <AnimatePresence mode="wait">
            {activeTab === 'verticals' ? (
              <motion.div
                key="verticals"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {isMobile ? (
                  /* Mobile view */
                  <div className="w-full flex flex-col gap-1.5 mt-[-1.5vh]">
                    {/* Description Text */}
                    <p className="text-slate-600 text-[10.5px] leading-relaxed">
                      <Shield size={12} className="inline-block text-[#8c1d21] mr-1.5 align-middle shrink-0" />
                      Verticals are the principal load bearing members comprising of Sets of Top and Bottom Cups. The Bottom Cups are welded at 500/1000 mm distance. The Top Cups are movable and retained by a fix stop. Made of 40NB class pipes.
                    </p>

                    {/* Tables Row - Side by side on mobile */}
                    <div className="flex flex-row gap-2 w-full mt-0.5">
                      {/* Sizes Table */}
                      <div className="flex-1 bg-white border border-slate-200/80 rounded-lg overflow-hidden shadow-xs">
                        <table className="cuplock-table-mobile w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-[8.5px] text-slate-500 font-semibold uppercase">
                              <th className="py-0.5 px-1.5">Size</th>
                              <th className="py-0.5 px-1.5">Cups</th>
                              <th className="py-0.5 px-1.5">Wt</th>
                            </tr>
                          </thead>
                          <tbody className="text-[9.5px] text-slate-600 font-medium divide-y divide-slate-100">
                            {sizeTableVerticals.map((row, i) => (
                              <tr key={i}>
                                <td className="py-0.5 px-1.5">{row.size}</td>
                                <td className="py-0.5 px-1.5">{row.cups}</td>
                                <td className="py-0.5 px-1.5 text-[#8c1d21]">{row.weight}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Loads Table */}
                      <div className="flex-1 bg-white border border-slate-200/80 rounded-lg overflow-hidden shadow-xs">
                        <table className="cuplock-table-mobile w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-[8.5px] text-slate-500 font-semibold uppercase">
                              <th className="py-0.5 px-1.5">Brac</th>
                              <th className="py-0.5 px-1.5">Med</th>
                              <th className="py-0.5 px-1.5">Hvy</th>
                            </tr>
                          </thead>
                          <tbody className="text-[9.5px] text-slate-600 font-medium divide-y divide-slate-100">
                            {loadTableVerticals.map((row, i) => (
                              <tr key={i}>
                                <td className="py-0.5 px-1.5">{row.length}</td>
                                <td className="py-0.5 px-1.5">{row.medium}</td>
                                <td className="py-0.5 px-1.5 text-[#8c1d21]">{row.heavy}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Graphic display banner at the bottom */}
                    <div className="w-full h-[160px] rounded-xl overflow-hidden border border-slate-200/60 bg-white shadow-sm relative mt-0.5">
                      <img 
                        src={verticalImg} 
                        alt="Cuplock Vertical Standard" 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/0 opacity-90" />
                      <div className="absolute bottom-2 left-3 right-3 text-white">
                        <span className="text-[9px] font-bold tracking-wide uppercase">Vertical Standard</span>
                        <p className="text-[7.5px] text-slate-300">Principal load-bearing pipe standard</p>
                      </div>
                    </div>

                    {/* Table notes */}
                    <span className="text-[8px] text-slate-400 font-normal italic block">
                      <Info size={9} className="inline-block mr-1 align-middle shrink-0" />
                      Tolerance +/- 3%. Load values are indicative staging references.
                    </span>
                  </div>
                ) : (
                  /* Desktop view */
                  <div className="absolute inset-0 flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between">
                    {/* Verticals Details and Tables */}
                    <div className="w-full md:max-w-[62%] flex flex-col gap-2 md:gap-3 overflow-y-auto md:overflow-visible max-h-[300px] md:max-h-none pr-1 scrollbar-hide">
                      <div className="flex gap-2 items-start">
                        <Shield size={16} className="text-[#8c1d21] mt-0.5 shrink-0" />
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          Verticals are the principal load bearing members comprising of Sets of Top and Bottom Cups. The Bottom Cups are welded at 500/1000 mm distance. The Top Cups are movable and retained by a fix stop. Made of 40NB Medium/Heavy class pipes, drilled for Spigot Joints.
                        </p>
                      </div>

                      {/* Verticals Tables Row */}
                      <div className="flex flex-col sm:flex-row gap-4 w-full mt-1">
                        {/* Sizes Table */}
                        <div className="flex-1 bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm">
                          <div className="bg-[#8c1d21]/5 border-b border-slate-200/80 py-1.5 px-3">
                            <span className="text-[10px] sm:text-xs font-bold text-[#8c1d21] flex items-center gap-1">
                              <ClipboardList size={12} /> Standard Sizes & Weights
                            </span>
                          </div>
                          <table className="cuplock-table w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-100 text-[9px] sm:text-[10px] text-slate-500 font-semibold uppercase">
                                <th className="py-1 px-3">Size (mm)</th>
                                <th className="py-1 px-3">Cups (500/1k)</th>
                                <th className="py-1 px-3">Weight (Kg)</th>
                              </tr>
                            </thead>
                            <tbody className="text-[10px] sm:text-xs text-slate-600 font-medium divide-y divide-slate-100">
                              {sizeTableVerticals.map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50/50">
                                  <td className="py-1 px-3">{row.size}</td>
                                  <td className="py-1 px-3">{row.cups}</td>
                                  <td className="py-1 px-3 text-[#8c1d21]">{row.weight}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Loads Table */}
                        <div className="flex-1 bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm">
                          <div className="bg-[#8c1d21]/5 border-b border-slate-200/80 py-1.5 px-3">
                            <span className="text-[10px] sm:text-xs font-bold text-[#8c1d21] flex items-center gap-1">
                              <Hammer size={12} /> Permissible Staging Load
                            </span>
                          </div>
                          <table className="cuplock-table w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-100 text-[9px] sm:text-[10px] text-slate-500 font-semibold uppercase">
                                <th className="py-1 px-3">Bracing (mm)</th>
                                <th className="py-1 px-3">Medium (T)</th>
                                <th className="py-1 px-3">Heavy (T)</th>
                              </tr>
                            </thead>
                            <tbody className="text-[10px] sm:text-xs text-slate-600 font-medium divide-y divide-slate-100">
                              {loadTableVerticals.map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50/50">
                                  <td className="py-1 px-3">{row.length}</td>
                                  <td className="py-1 px-3">{row.medium}</td>
                                  <td className="py-1 px-3 text-[#8c1d21]">{row.heavy}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      {/* Table notes */}
                      <span className="text-[8px] sm:text-[9px] text-slate-400 font-normal italic flex items-center gap-1 mt-1">
                        <Info size={10} /> Tolerance of +/- 3% applies to weights. Load values are indicative staging references.
                      </span>
                    </div>

                    {/* Verticals Graphic display */}
                    <div className="w-full md:w-[34%] shrink-0 h-[220px] md:h-[310px] lg:h-[320px] rounded-2xl overflow-hidden border border-slate-200/60 bg-white shadow-md relative group mt-4 md:mt-0">
                      <img 
                        src={verticalImg} 
                        alt="Cuplock Vertical Standard" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/0 opacity-90" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] sm:text-xs font-bold tracking-wide uppercase">Vertical Standard</span>
                        <p className="text-[8px] sm:text-[10px] text-slate-300">Principal load-bearing pipe standard</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="ledgers"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {isMobile ? (
                  /* Mobile view */
                  <div className="w-full flex flex-col gap-1.5 mt-[-1.5vh]">
                    {/* Description Text */}
                    <p className="text-slate-600 text-[10.5px] leading-relaxed">
                      <Shield size={12} className="inline-block text-[#8c1d21] mr-1.5 align-middle shrink-0" />
                      Horizontals are made of 40 NB Light / Medium class pipes with forged Ledger blades welded at both the ends. Simple robust design requires no maintenance.
                    </p>

                    {/* Table Row */}
                    <div className="bg-white border border-slate-200/80 rounded-lg overflow-hidden shadow-xs w-full mt-0.5">
                      <table className="cuplock-table-mobile w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-100 text-[8.5px] text-slate-500 font-semibold uppercase">
                            <th className="py-0.5 px-2">Size C/C (mm)</th>
                            <th className="py-0.5 px-2">Actual Length (mm)</th>
                            <th className="py-0.5 px-2">Self-Weight (Kg/Nos)</th>
                          </tr>
                        </thead>
                        <tbody className="text-[9.5px] text-slate-600 font-medium divide-y divide-slate-100">
                          {sizeTableLedgers.map((row, i) => (
                            <tr key={i}>
                              <td className="py-0.5 px-2">{row.size}</td>
                              <td className="py-0.5 px-2">{row.actual}</td>
                              <td className="py-0.5 px-2 text-[#8c1d21]">{row.weight}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Graphic display banner at the bottom */}
                    <div className="w-full h-[160px] rounded-xl overflow-hidden border border-slate-200/60 bg-white shadow-sm relative mt-0.5">
                      <img 
                        src={ledgerImg} 
                        alt="Cuplock Ledger Horizontal" 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/0 opacity-90" />
                      <div className="absolute bottom-2 left-3 right-3 text-white">
                        <span className="text-[9px] font-bold tracking-wide uppercase">Ledger Horizontal</span>
                        <p className="text-[7.5px] text-slate-300">Horizontal connection tube component</p>
                      </div>
                    </div>

                    {/* Table notes */}
                    <span className="text-[8px] text-slate-400 font-normal italic block">
                      <Info size={9} className="inline-block mr-1 align-middle shrink-0" />
                      Tolerance +/- 3%. Length calculated between Vertical centers.
                    </span>
                  </div>
                ) : (
                  /* Desktop view */
                  <div className="absolute inset-0 flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between">
                    {/* Ledgers Details and Tables */}
                    <div className="w-full md:max-w-[62%] flex flex-col gap-2 md:gap-3 overflow-y-auto md:overflow-visible max-h-[300px] md:max-h-none pr-1 scrollbar-hide">
                      <div className="flex gap-2 items-start">
                        <Shield size={16} className="text-[#8c1d21] mt-0.5 shrink-0" />
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          Horizontals are made of 40 NB Light / Medium class pipes with forged Ledger blades welded at both the ends. The simple robust design ensures that Ledgers Horizontals need no maintenance. Length of the Ledgers Horizontal is calculated between Centre to Centre of such two Verticals.
                        </p>
                      </div>

                      {/* Ledgers Table */}
                      <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm w-full mt-1">
                        <div className="bg-[#8c1d21]/5 border-b border-slate-200/80 py-1.5 px-3">
                          <span className="text-[10px] sm:text-xs font-bold text-[#8c1d21] flex items-center gap-1">
                            <ClipboardList size={12} /> Standard Ledger Sizes & Weights
                          </span>
                        </div>
                        <table className="cuplock-table w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-[9px] sm:text-[10px] text-slate-500 font-semibold uppercase">
                              <th className="py-1 px-3">Size C/C (mm)</th>
                              <th className="py-1 px-3">Actual Length (mm)</th>
                              <th className="py-1 px-3">Self-Weight (Kg/Nos)</th>
                            </tr>
                          </thead>
                          <tbody className="text-[10px] sm:text-xs text-slate-600 font-medium divide-y divide-slate-100">
                            {sizeTableLedgers.map((row, i) => (
                              <tr key={i} className="hover:bg-slate-50/50">
                                <td className="py-1 px-3">{row.size}</td>
                                <td className="py-1 px-3">{row.actual}</td>
                                <td className="py-1 px-3 text-[#8c1d21]">{row.weight}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      {/* Table notes */}
                      <span className="text-[8px] sm:text-[9px] text-slate-400 font-normal italic flex items-center gap-1 mt-1">
                        <Info size={10} /> Tolerance of +/- 3% applies to weights. Length calculated between Vertical centers.
                      </span>
                    </div>

                    {/* Ledgers Graphic display */}
                    <div className="w-full md:w-[34%] shrink-0 h-[220px] md:h-[310px] lg:h-[320px] rounded-2xl overflow-hidden border border-slate-200/60 bg-white shadow-md relative group mt-4 md:mt-0">
                      <img 
                        src={ledgerImg} 
                        alt="Cuplock Ledger Horizontal" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/0 opacity-90" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] sm:text-xs font-bold tracking-wide uppercase">Ledger Horizontal</span>
                        <p className="text-[8px] sm:text-[10px] text-slate-300">Horizontal connection tube component</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default CupLockSystem;

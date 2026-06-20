import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Hammer, ClipboardList, Info } from 'lucide-react';
import baseJackImg from '../../Assets/Products/Adjustable Base Jack.png';

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

const AdjustableBaseJack = () => {
  const isMobile = useMobile();
  const [activeTab, setActiveTab] = useState('tech');
  const [scaleFactor, setScaleFactor] = useState(1);

  // Calculate dynamic scale factor to prevent clipping on small screen heights
  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      
      if (width < 768) {
        // Mobile screens: vertical layout
        const availableHeight = height - 240;
        const targetHeight = 410; // compact mobile content height
        let factor = availableHeight / targetHeight;
        setScaleFactor(Math.max(0.65, Math.min(1, factor)));
      } else {
        // Desktop screens: horizontal layout
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

  const baseJackSizesTable = [
    { desc: "Base Jack 450mm 30 Dia Solid Rod", plate: "150 x 150 x 6mm", weight: "3.5 kg" },
    { desc: "Base Jack 450mm 32 Dia Solid Rod", plate: "150 x 150 x 6mm", weight: "3.7 kg" },
    { desc: "Base Jack 450mm 34 Dia Solid Rod", plate: "150 x 150 x 6mm", weight: "4.5 kg" }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden select-none">
      
      {/* Main Container with height auto-adjustment */}
      <div 
        style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'center' }}
        className="relative z-10 w-full max-w-6xl flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-10 py-2 md:py-4 mt-[-3vh] md:mt-[-2vh] transition-transform duration-300"
      >
        
        {/* Left Side: All Content (Header, Tabs, Tab Content) */}
        <div className="flex-1 md:col-span-9 flex flex-col justify-start">
          
          {/* Header Block matching other pages */}
          <div className="flex flex-col mb-2">
            <div className="relative inline-block w-fit mb-1.5 pb-0.5">
              <h2 className="text-xl sm:text-2xl tracking-tight">
                <span className="text-[#8c1d21] font-bold">Adjustable</span>{" "}
                <span className="text-[#1e293b] font-medium">Base Jack</span>
              </h2>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8c1d21]" />
            </div>
            <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-2xl">
              Sagar Adjustable Base Jacks are designed for use in conjunction with either Adjustable Steel Props or System Scaffolding to hold timber beams and formwork accessories securely in place.
            </p>
          </div>

          {/* Custom Tab Selector */}
          <div className="flex justify-center md:justify-start gap-1.5 sm:gap-3 mt-3 mb-4 w-full">
            <button
              onClick={() => setActiveTab('tech')}
              className={`py-1.5 px-2 md:py-2 md:px-4 text-[10px] sm:text-xs md:text-sm font-bold transition-all rounded-lg border shadow-xs whitespace-nowrap ${
                activeTab === 'tech'
                  ? "bg-[#8c1d21] text-white border-[#8c1d21]"
                  : "bg-white text-slate-600 border-slate-200 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              {isMobile ? "Tech Specs" : "Technical Specs"}
            </button>
            <button
              onClick={() => setActiveTab('sizes')}
              className={`py-1.5 px-2 md:py-2 md:px-4 text-[10px] sm:text-xs md:text-sm font-bold transition-all rounded-lg border shadow-xs whitespace-nowrap ${
                activeTab === 'sizes'
                  ? "bg-[#8c1d21] text-white border-[#8c1d21]"
                  : "bg-white text-slate-600 border-slate-200 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              {isMobile ? "Sizes" : "Standard Sizes"}
            </button>
          </div>

          {/* Content Tabs Area */}
          <div className="relative w-full h-[395px] md:h-[220px]">
            <AnimatePresence mode="wait">
              {activeTab === 'tech' ? (
                <motion.div
                  key="tech"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {isMobile ? (
                    /* Mobile view */
                    <div className="w-full flex flex-col gap-1.5 mt-[-1.5vh]">
                      <p className="text-slate-600 text-[10.5px] leading-relaxed">
                        <Shield size={12} className="inline-block text-[#8c1d21] mr-1.5 align-middle shrink-0" />
                        Sagar Adjustable Base Jacks are manufactured using premium-grade solid steel rods and heavy flat base plates to provide crucial level adjustment and structural base support. They are built for high work capacity, completely tested, and widely demanded for their robust design and corrosion-resistant nature.
                      </p>

                      <div className="bg-white border border-slate-200/80 rounded-lg p-2.5 shadow-xs w-full text-[10px] text-slate-600 space-y-1.5 mt-0.5">
                        <div className="flex justify-between border-b border-slate-100 pb-1">
                          <span className="font-semibold text-slate-700">Solid Rod:</span>
                          <span className="text-slate-900 font-medium">30, 32, and 34 mm Dia Options</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-1">
                          <span className="font-semibold text-slate-700">Flat Base Plate:</span>
                          <span className="text-slate-900 font-medium">150 x 150 x 6 mm square plate</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-1">
                          <span className="font-semibold text-slate-700">Total Height:</span>
                          <span className="text-slate-900 font-medium">450 mm standard length</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-1">
                          <span className="font-semibold text-slate-700">Application:</span>
                          <span className="text-slate-900 font-medium">Leveling & base support assemblies</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-700">Key Features:</span>
                          <span className="text-[#8c1d21] font-bold">Corrosion resistant, high capacity</span>
                        </div>
                      </div>

                      {/* Graphic display banner */}
                      <div className="w-fit mx-auto h-[160px] rounded-xl overflow-hidden border border-slate-200/60 bg-white shadow-sm relative mt-0.5 flex items-center justify-center p-1.5">
                        <img 
                          src={baseJackImg} 
                          alt="Adjustable Base Jack" 
                          className="h-full object-contain" 
                        />
                      </div>
                    </div>
                  ) : (
                    /* Desktop view - simplified specs layout without image */
                    <div className="w-full flex flex-col gap-2.5">
                      <div className="flex gap-2 items-start">
                        <Shield size={16} className="text-[#8c1d21] mt-0.5 shrink-0" />
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          Sagar Adjustable Base Jacks are manufactured using premium-grade solid steel rods and heavy flat base plates to provide crucial level adjustment and structural base support. They are built for high work capacity, completely tested, and widely demanded for their robust design and corrosion-resistant nature.
                        </p>
                      </div>

                      <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm w-full mt-1.5">
                        <div className="bg-[#8c1d21]/5 border-b border-slate-200/80 py-1.5 px-3">
                          <span className="text-[10px] sm:text-xs font-bold text-[#8c1d21] flex items-center gap-1">
                            <ClipboardList size={12} /> Technical Specifications
                          </span>
                        </div>
                        <div className="p-3 text-[11px] sm:text-xs text-slate-600 grid grid-cols-2 gap-x-4 gap-y-2">
                          <div className="flex justify-between border-b border-slate-100 pb-1.5">
                            <span className="font-semibold text-slate-500">Solid Rod:</span>
                            <span className="text-slate-800 font-bold">30, 32, and 34 mm Dia Options</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-100 pb-1.5">
                            <span className="font-semibold text-slate-500">Flat Base Plate:</span>
                            <span className="text-slate-800 font-bold">150 x 150 x 6 mm square plate</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-100 pb-1.5">
                            <span className="font-semibold text-slate-500">Total Height:</span>
                            <span className="text-slate-800 font-bold">450 mm standard length</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-100 pb-1.5">
                            <span className="font-semibold text-slate-500">Application:</span>
                            <span className="text-slate-800 font-bold">Leveling & base support assemblies</span>
                          </div>
                          <div className="flex justify-between col-span-2 pt-0.5">
                            <span className="font-semibold text-slate-500">Key Features:</span>
                            <span className="text-[#8c1d21] font-bold">Corrosion resistant, high work capacity, and completely tested</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="sizes"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {isMobile ? (
                    /* Mobile view */
                    <div className="w-full flex flex-col gap-1.5 mt-[-1.5vh]">
                      <p className="text-slate-600 text-[10.5px] leading-relaxed">
                        <ClipboardList size={12} className="inline-block text-[#8c1d21] mr-1.5 align-middle shrink-0" />
                        The table below lists the physical dimensions and weight configurations for Sagar Adjustable Base Jacks. Designed to ensure stable load transfers.
                      </p>

                      <div className="bg-white border border-slate-200/80 rounded-lg overflow-hidden shadow-xs w-full mt-0.5">
                        <table className="cuplock-table-mobile w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-[8.5px] text-slate-500 font-semibold uppercase">
                              <th className="py-0.5 px-2">Description</th>
                              <th className="py-0.5 px-2">Flat Base Plate Size</th>
                              <th className="py-0.5 px-2">Weight</th>
                            </tr>
                          </thead>
                          <tbody className="text-[9.5px] text-slate-600 font-medium divide-y divide-slate-100">
                            {baseJackSizesTable.map((row, i) => (
                              <tr key={i}>
                                <td className="py-0.5 px-2 font-bold">{row.desc}</td>
                                <td className="py-0.5 px-2">{row.plate}</td>
                                <td className="py-0.5 px-2 text-[#8c1d21] font-semibold">{row.weight}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Graphic display banner */}
                      <div className="w-fit mx-auto h-[160px] rounded-xl overflow-hidden border border-slate-200/60 bg-white shadow-sm relative mt-0.5 flex items-center justify-center p-1.5">
                        <img 
                          src={baseJackImg} 
                          alt="Adjustable Base Jack" 
                          className="h-full object-contain" 
                        />
                      </div>

                      <span className="text-[8px] text-slate-400 font-normal italic block">
                        <Info size={9} className="inline-block mr-1 align-middle shrink-0" />
                        Self-weight includes solid rod, cast iron collar nut, and base plate.
                      </span>
                    </div>
                  ) : (
                    /* Desktop view - only table without local image */
                    <div className="w-full flex flex-col gap-2.5">
                      <div className="flex gap-2 items-start">
                        <ClipboardList size={16} className="text-[#8c1d21] mt-0.5 shrink-0" />
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          The table below lists the physical dimensions and weight configurations for Sagar Adjustable Base Jacks. Designed to ensure stable load transfers.
                        </p>
                      </div>

                      <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm w-full mt-1.5">
                        <div className="bg-[#8c1d21]/5 border-b border-slate-200/80 py-1.5 px-3">
                          <span className="text-[10px] sm:text-xs font-bold text-[#8c1d21] flex items-center gap-1">
                            <ClipboardList size={12} /> Adjustable Base Jack Weight Catalog
                          </span>
                        </div>
                        <table className="cuplock-table w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-[9px] sm:text-[10px] text-slate-500 font-semibold uppercase">
                              <th className="py-1 px-3">Description</th>
                              <th className="py-1 px-3">Flat Base Plate Size</th>
                              <th className="py-1 px-3">Weight</th>
                            </tr>
                          </thead>
                          <tbody className="text-[10px] sm:text-xs text-slate-600 font-medium divide-y divide-slate-100">
                            {baseJackSizesTable.map((row, i) => (
                              <tr key={i} className="hover:bg-slate-50/50">
                                <td className="py-1 px-3 font-bold text-slate-800">{row.desc}</td>
                                <td className="py-1 px-3">{row.plate}</td>
                                <td className="py-1 px-3 text-[#8c1d21] font-semibold">{row.weight}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <span className="text-[8px] sm:text-[9px] text-slate-400 font-normal italic flex items-center gap-1 mt-1">
                        <Info size={10} /> Self-weight includes solid rod, cast iron collar nut, and base plate.
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Right Side: Global Product Image (Desktop only!) */}
        {!isMobile && (
          <div className="md:col-span-3 flex justify-center items-center h-full">
            <div className="w-[180px] h-[300px] rounded-2xl overflow-hidden border border-slate-200/60 bg-white shadow-md relative group flex flex-col items-center justify-center p-4">
              <div className="w-full h-full relative overflow-hidden flex-1">
                <img 
                  src={baseJackImg} 
                  alt="Adjustable Base Jack" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdjustableBaseJack;

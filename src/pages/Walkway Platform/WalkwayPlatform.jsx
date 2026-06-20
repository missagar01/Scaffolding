import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Hammer, ClipboardList, Info } from 'lucide-react';
import walkwaysImg from '../../Assets/Products/Walkways.jpeg';

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

// Motion variants for value cards stagger entrance animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { y: 12, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 130, 
      damping: 15 
    } 
  }
};

const WalkwayPlatform = () => {
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
        const targetHeight = 440; // updated mobile content target height
        let factor = availableHeight / targetHeight;
        setScaleFactor(Math.max(0.65, Math.min(1, factor)));
      } else {
        // Desktop screens: horizontal layout
        const availableHeight = height - 180;
        const targetHeight = 460;
        const factor = availableHeight / targetHeight;
        setScaleFactor(Math.max(0.75, Math.min(1.05, factor)));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const walkwaySizesTable = [
    { desc: "Walkway Platform (Walkway-Jali)", dims: "2.5 m Long x 0.3 m Wide", tubing: "25 x 25 x 2.0 mm", weight: "26.3 kg" }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden select-none">
      
      {/* Main Container with height auto-adjustment */}
      <div 
        style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'center' }}
        className="relative z-10 w-full max-w-6xl flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-10 py-2 md:py-4 mt-[-3vh] md:mt-[-2vh] transition-transform duration-300"
      >
        
        {/* Left Side: All Content (Header, Tabs, Tab Content) */}
        <div className="flex-1 md:col-span-8 flex flex-col justify-start">
          
          {/* Header Block matching other pages */}
          <div className="flex flex-col mb-2">
            <div className="relative inline-block w-fit mb-1.5 pb-0.5">
              <h2 className="text-xl sm:text-2xl tracking-tight">
                <span className="text-[#8c1d21] font-bold">Walkway</span>{" "}
                <span className="text-[#1e293b] font-medium">Platform</span>
              </h2>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8c1d21]" />
            </div>
            <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-2xl">
              Sagar Walkway Platforms (Walkway-Jali) provide a temporary, safe passage and elevated work access, allowing workers to stand and perform tasks safely at heights.
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
              Technical Specs
            </button>
            <button
              onClick={() => setActiveTab('sizes')}
              className={`py-1.5 px-2 md:py-2 md:px-4 text-[10px] sm:text-xs md:text-sm font-bold transition-all rounded-lg border shadow-xs whitespace-nowrap ${
                activeTab === 'sizes'
                  ? "bg-[#8c1d21] text-white border-[#8c1d21]"
                  : "bg-white text-slate-600 border-slate-200 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              Standard Sizes
            </button>
          </div>

          {/* Content Tabs Area */}
          <div className="relative w-full h-[415px] md:h-[240px]">
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
                        Sagar Walkway Jali is manufactured with high precision using heavy-duty steel square tubes. Built to ensure stability, high weight capacity, and optimal site safety.
                      </p>

                      <div className="bg-white border border-slate-200/80 rounded-lg p-2.5 shadow-xs w-full text-[10px] text-slate-600 space-y-1.5 mt-0.5">
                        <div className="flex justify-between border-b border-slate-100 pb-1">
                          <span className="font-semibold text-slate-700">Dimensions:</span>
                          <span className="text-slate-900 font-medium">2.5 m Long x 0.3 m Wide</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-1">
                          <span className="font-semibold text-slate-700">Material Tubing:</span>
                          <span className="text-slate-900 font-medium">25 x 25 x 2 mm Thick Square Tube</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-1">
                          <span className="font-semibold text-slate-700">Unit Weight:</span>
                          <span className="text-slate-900 font-medium">Approx. 26.3 Kg</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-1">
                          <span className="font-semibold text-slate-700">Application:</span>
                          <span className="text-slate-900 font-medium">Elevated platforms & scaffolding passage</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-700">Key Features:</span>
                          <span className="text-[#8c1d21] font-bold">Highly reliable, highly efficient</span>
                        </div>
                      </div>

                      {/* Three Value Cards: Access, Flow, Use */}
                      <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="flex gap-2 py-0.5 mt-0.5 w-full overflow-x-auto scrollbar-hide shrink-0"
                      >
                        <motion.div 
                          variants={cardVariants}
                          whileTap={{ scale: 0.97 }}
                          className="min-w-[125px] flex-1 bg-teal-50 border border-teal-200/80 rounded-lg p-2 flex flex-col gap-0.5 shrink-0"
                        >
                          <span className="text-teal-800 font-bold text-[10px]">Access</span>
                          <span className="text-teal-600 text-[8.5px] leading-tight">Providing safe, engineered reach height</span>
                        </motion.div>
                        <motion.div 
                          variants={cardVariants}
                          whileTap={{ scale: 0.97 }}
                          className="min-w-[125px] flex-1 bg-amber-50 border border-amber-200/80 rounded-lg p-2 flex flex-col gap-0.5 shrink-0"
                        >
                          <span className="text-amber-800 font-bold text-[10px]">Flow</span>
                          <span className="text-amber-600 text-[8.5px] leading-tight">Creating an unobstructed flow on the job site</span>
                        </motion.div>
                        <motion.div 
                          variants={cardVariants}
                          whileTap={{ scale: 0.97 }}
                          className="min-w-[125px] flex-1 bg-blue-50 border border-blue-200/80 rounded-lg p-2 flex flex-col gap-0.5 shrink-0"
                        >
                          <span className="text-blue-800 font-bold text-[10px]">Use</span>
                          <span className="text-blue-600 text-[8.5px] leading-tight">Ensuring maximum functional utility and versatility</span>
                        </motion.div>
                      </motion.div>

                      {/* Graphic display banner */}
                      <div className="w-full h-[120px] rounded-xl overflow-hidden border border-slate-200/60 bg-white shadow-sm relative mt-0.5">
                        <img 
                          src={walkwaysImg} 
                          alt="Walkway Platform" 
                          className="w-full h-full object-cover scale-[1.05] transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/0 opacity-90" />
                        <div className="absolute bottom-2 left-3 right-3 text-white">
                          <span className="text-[9px] font-bold tracking-wide uppercase">Walkway Platform</span>
                          <p className="text-[7.5px] text-slate-300">Heavy-duty structural planks and walkway systems</p>
                        </div>
                      </div>

                      <span className="text-[8px] text-slate-400 font-normal italic block">
                        <Info size={9} className="inline-block mr-1 align-middle shrink-0" />
                        Tolerance +/- 3% on tube and weight specifications.
                      </span>
                    </div>
                  ) : (
                    /* Desktop view - simplified specs layout without image */
                    <div className="w-full flex flex-col gap-2">
                      <div className="flex gap-2 items-start">
                        <Shield size={16} className="text-[#8c1d21] mt-0.5 shrink-0" />
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          Sagar Walkway Jali is manufactured with high precision using heavy-duty steel square tubes. Built to ensure stability, high weight capacity, and optimal site safety.
                        </p>
                      </div>

                      <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm w-full mt-0.5">
                        <div className="bg-[#8c1d21]/5 border-b border-slate-200/80 py-1.5 px-3">
                          <span className="text-[10px] sm:text-xs font-bold text-[#8c1d21] flex items-center gap-1">
                            <ClipboardList size={12} /> Technical Specifications
                          </span>
                        </div>
                        <div className="p-2.5 text-[11px] sm:text-xs text-slate-600 grid grid-cols-2 gap-x-4 gap-y-1.5">
                          <div className="flex justify-between border-b border-slate-100 pb-1">
                            <span className="font-semibold text-slate-500">Dimensions:</span>
                            <span className="text-slate-800 font-bold">2.5 m Long x 0.3 m Wide</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-100 pb-1">
                            <span className="font-semibold text-slate-500">Material Tubing:</span>
                            <span className="text-slate-800 font-bold">25 x 25 x 2 mm Square Tube</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-100 pb-1">
                            <span className="font-semibold text-slate-500">Unit Weight:</span>
                            <span className="text-slate-800 font-bold">Approx. 26.3 Kg</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-100 pb-1">
                            <span className="font-semibold text-slate-500">Application:</span>
                            <span className="text-slate-800 font-bold">Elevated work zones & access control</span>
                          </div>
                          <div className="flex justify-between col-span-2 pt-0.5">
                            <span className="font-semibold text-slate-500">Key Features:</span>
                            <span className="text-[#8c1d21] font-bold">Highly reliable, highly efficient, and quality product for site stability</span>
                          </div>
                        </div>
                      </div>

                      {/* Three Value Cards: Access, Flow, Use */}
                      <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-3 gap-2.5 mt-1 w-full"
                      >
                        <motion.div 
                          variants={cardVariants}
                          whileHover={{ scale: 1.02, translateY: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-teal-50 border border-teal-200/80 rounded-xl p-2.5 flex flex-col gap-1 transition-all duration-300 hover:shadow-xs cursor-default"
                        >
                          <span className="text-teal-800 font-bold text-xs">Access</span>
                          <span className="text-teal-600 text-[10px] leading-tight">Providing safe, engineered reach height</span>
                        </motion.div>
                        <motion.div 
                          variants={cardVariants}
                          whileHover={{ scale: 1.02, translateY: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-amber-50 border border-amber-200/80 rounded-xl p-2.5 flex flex-col gap-1 transition-all duration-300 hover:shadow-xs cursor-default"
                        >
                          <span className="text-amber-800 font-bold text-xs">Flow</span>
                          <span className="text-amber-600 text-[10px] leading-tight">Creating an unobstructed flow on the job site</span>
                        </motion.div>
                        <motion.div 
                          variants={cardVariants}
                          whileHover={{ scale: 1.02, translateY: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-blue-50 border border-blue-200/80 rounded-xl p-2.5 flex flex-col gap-1 transition-all duration-300 hover:shadow-xs cursor-default"
                        >
                          <span className="text-blue-800 font-bold text-xs">Use</span>
                          <span className="text-blue-600 text-[10px] leading-tight">Ensuring maximum functional utility and versatility</span>
                        </motion.div>
                      </motion.div>

                      <span className="text-[8px] sm:text-[9px] text-slate-400 font-normal italic flex items-center gap-1 mt-1">
                        <Info size={10} /> Tolerance +/- 3% on tube and weight specifications.
                      </span>
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
                        The table below lists the physical dimensions and weight configuration for Sagar Walkway Platforms. Custom sizes can be custom-fabricated to specifications on request.
                      </p>

                      <div className="bg-white border border-slate-200/80 rounded-lg overflow-hidden shadow-xs w-full mt-0.5 h-[120px] overflow-y-auto scrollbar-hide">
                        <table className="cuplock-table-mobile w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-[8.5px] text-slate-500 font-semibold uppercase sticky top-0">
                              <th className="py-0.5 px-2">Description</th>
                              <th className="py-0.5 px-2">Dimensions</th>
                              <th className="py-0.5 px-2">Tubing Size</th>
                              <th className="py-0.5 px-2">Weight</th>
                            </tr>
                          </thead>
                          <tbody className="text-[9.5px] text-slate-600 font-medium divide-y divide-slate-100">
                            {walkwaySizesTable.map((row, i) => (
                              <tr key={i}>
                                <td className="py-0.5 px-2 font-bold">{row.desc}</td>
                                <td className="py-0.5 px-2">{row.dims}</td>
                                <td className="py-0.5 px-2">{row.tubing}</td>
                                <td className="py-0.5 px-2 text-[#8c1d21] font-semibold">{row.weight}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Graphic display banner */}
                      <div className="w-full h-[120px] rounded-xl overflow-hidden border border-slate-200/60 bg-white shadow-sm relative mt-0.5">
                        <img 
                          src={walkwaysImg} 
                          alt="Walkway Platform" 
                          className="w-full h-full object-cover scale-[1.05] transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/0 opacity-90" />
                        <div className="absolute bottom-2 left-3 right-3 text-white">
                          <span className="text-[9px] font-bold tracking-wide uppercase">Standard Walkway Sizes</span>
                          <p className="text-[7.5px] text-slate-300">Sizes ranges from 2.5 m length up to custom configurations</p>
                        </div>
                      </div>

                      <span className="text-[8px] text-slate-400 font-normal italic block mt-0.5">
                        <Info size={9} className="inline-block mr-1 align-middle shrink-0" />
                        Custom dimensions and colors can also be fabricated on request.
                      </span>
                    </div>
                  ) : (
                    /* Desktop view - only table without local image */
                    <div className="w-full flex flex-col gap-2.5">
                      <div className="flex gap-2 items-start">
                        <ClipboardList size={16} className="text-[#8c1d21] mt-0.5 shrink-0" />
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          The table below lists the physical dimensions and weight configuration for Sagar Walkway Platforms. Custom sizes can be custom-fabricated to specifications on request.
                        </p>
                      </div>

                      <div className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm w-full mt-1.5 h-[160px] overflow-y-auto scrollbar-hide">
                        <div className="bg-[#8c1d21]/5 border-b border-slate-200/80 py-1.5 px-3 sticky top-0 z-10">
                          <span className="text-[10px] sm:text-xs font-bold text-[#8c1d21] flex items-center gap-1">
                            <ClipboardList size={12} /> Standard Walkway Sizes & Configurations
                          </span>
                        </div>
                        <table className="cuplock-table w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-[9px] sm:text-[10px] text-slate-500 font-semibold uppercase sticky top-[28px] z-10">
                              <th className="py-1 px-3">Description</th>
                              <th className="py-1 px-3">Dimensions</th>
                              <th className="py-1 px-3">Tubing Specification</th>
                              <th className="py-1 px-3">Approx. Weight</th>
                            </tr>
                          </thead>
                          <tbody className="text-[10px] sm:text-xs text-slate-600 font-medium divide-y divide-slate-100">
                            {walkwaySizesTable.map((row, i) => (
                              <tr key={i} className="hover:bg-slate-50/50">
                                <td className="py-1 px-3 font-bold text-slate-800">{row.desc}</td>
                                <td className="py-1 px-3">{row.dims}</td>
                                <td className="py-1 px-3">{row.tubing}</td>
                                <td className="py-1 px-3 text-[#8c1d21] font-semibold">{row.weight}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <span className="text-[8px] sm:text-[9px] text-slate-400 font-normal italic flex items-center gap-1 mt-1">
                        <Info size={10} /> Custom dimensions and colors can also be fabricated on request.
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Right Side: Global Product Image (Desktop only!) - Spans full height to eliminate blank spaces */}
        {!isMobile && (
          <div className="md:col-span-4 rounded-2xl overflow-hidden border border-slate-200/60 bg-white shadow-md relative group flex flex-col items-stretch h-full">
            <div className="w-full h-full relative overflow-hidden flex-1">
              <img 
                src={walkwaysImg} 
                alt="Walkway Platform" 
                className="w-full h-full object-cover scale-[1.05] group-hover:scale-[1.12] transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/0 opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase">Walkway Platform</span>
                <p className="text-[9px] sm:text-[10px] text-slate-300">Heavy-duty structural planks and walkway systems</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default WalkwayPlatform;

import React, { useState, useEffect } from 'react';
import { Package, Maximize, Layers, Truck, Headphones } from 'lucide-react';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
};

const ProcurementChecklist = () => {
  const isMobile = useMobile();
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      if (width < 768) {
        // Dynamic scale factor for mobile based on available height
        const availableHeight = height - 120;
        const targetHeight = 700; // 5 stacked cards need more height
        let factor = availableHeight / targetHeight;
        setScaleFactor(Math.max(0.75, Math.min(1, factor)));
      } else if (width < 1024) {
        setScaleFactor(0.85);
      } else {
        const availableHeight = height - 120;
        const targetHeight = 500;
        const factor = availableHeight / targetHeight;
        setScaleFactor(Math.max(0.7, Math.min(1.05, factor)));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Product\nCategory",
      icon: Package,
      color: "#f58220", // Orange
      bgClass: "bg-[#f58220]",
      textClass: "text-[#f58220]",
      offsetY: "mt-24", // Lower
      content: "MS Pipes, Modular Cup lock Scaffolding. Confirm product category and project application before quotation."
    },
    {
      id: 2,
      title: "Size &\nSpecs",
      icon: Maximize,
      color: "#fdb913", // Yellow-orange
      bgClass: "bg-[#fdb913]",
      textClass: "text-[#fdb913]",
      offsetY: "mt-12", // Higher
      content: "48.3 mm OD standards (2.9/3.2 mm). Verify height range, size and load-support requirement."
    },
    {
      id: 3,
      title: "Bill of\nMaterials",
      icon: Layers,
      color: "#0a1f44", // Dark Blue
      bgClass: "bg-[#0a1f44]",
      textClass: "text-[#0a1f44]",
      offsetY: "mt-0", // Highest
      content: "Custom component counts. Select Verticals, Horizontal Ledger, base jack, prop or pipe spec as needed."
    },
    {
      id: 4,
      title: "Delivery\nDetails",
      icon: Truck,
      color: "#2098b4", // Teal
      bgClass: "bg-[#2098b4]",
      textClass: "text-[#2098b4]",
      offsetY: "mt-12", // Lower
      content: "Dispatch to active project sites or yards. Share site location, expected quantity and delivery expectation."
    },
    {
      id: 5,
      title: "Commercial\nContact",
      icon: Headphones,
      color: "#8cc6e0", // Light Blue
      bgClass: "bg-[#8cc6e0]",
      textClass: "text-[#8cc6e0]",
      offsetY: "mt-24", // Lowest
      content: "Use official details for discussion.\nPhone: 6266919126, 7723020092\nEmail: mkt@sagargroup.co"
    }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none">
      <div
        style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'center' }}
        className="relative z-10 w-full max-w-6xl flex flex-col gap-4 mt-[-4vh] md:mt-[-3vh] transition-transform duration-300 mx-auto"
      >
        <div className="flex flex-col items-start w-full mb-4 lg:mb-8 shrink-0 px-2 sm:px-4 lg:px-8">
          <div className="relative inline-block w-fit mb-0.5 pb-0">
            <h2 className="text-sm sm:text-base md:text-xl tracking-tight leading-tight text-left">
              <span className="text-[#8c1d21] font-bold">Procurement Checklist</span>{" "}
              <span className="text-[#1e293b] font-medium">for Buyers</span>
            </h2>
            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8c1d21]" />
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
          
          {/* Dashed Line SVG (Background) */}
          <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block overflow-visible">
            <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none" className="overflow-visible">
              <path
                d="M -50 350 Q 200 150 500 150 T 1050 350"
                fill="none"
                stroke="#1e293b"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                className="opacity-70"
              />
            </svg>
          </div>

          {/* Cards Flex Container */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-2 xl:gap-4 w-full justify-center items-center lg:items-start lg:px-4 pb-12 lg:pb-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className={`flex flex-col w-full max-w-[300px] sm:max-w-[320px] lg:max-w-[210px] xl:max-w-[220px] ${isMobile ? '' : step.offsetY} relative`}>
                  
                  {/* Card Main Body */}
                  <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] relative pt-7 sm:pt-8 lg:pt-8 pb-4 sm:pb-5 lg:pb-5 px-4 sm:px-5 lg:px-4 xl:px-5 flex flex-col mt-4 lg:mt-6 border border-slate-100">
                    
                    {/* Chevron Header */}
                    <div 
                      className={`absolute -top-4 sm:-top-5 lg:-top-6 right-0 left-5 sm:left-6 lg:left-6 h-9 sm:h-10 lg:h-12 ${step.bgClass} flex items-center shadow-md`}
                      style={{ 
                        clipPath: 'polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)',
                        borderTopLeftRadius: '4px',
                        borderBottomLeftRadius: '4px'
                      }}
                    >
                      <h3 className="text-white font-bold text-[12px] sm:text-[13px] lg:text-[14px] leading-tight pl-8 sm:pl-10 lg:pl-10 whitespace-pre-line drop-shadow-sm">
                        {step.title}
                      </h3>
                    </div>

                    {/* Circular Icon overlapping chevron */}
                    <div className="absolute -top-5 sm:-top-6 lg:-top-8 -left-3 sm:-left-4 lg:-left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border-[3px] sm:border-[4px] lg:border-[5px] border-white flex items-center justify-center shadow-sm overflow-hidden bg-white">
                      <div className={`w-full h-full flex items-center justify-center ${step.bgClass}`}>
                         <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-2 sm:mt-3 lg:mt-4 flex-1">
                      <p className="text-[#475569] text-[11px] sm:text-[12px] lg:text-[13px] font-medium leading-relaxed whitespace-pre-wrap">
                        {step.content}
                      </p>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProcurementChecklist;

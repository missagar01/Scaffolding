import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import cupImg from '../../Assets/Products/Cup.jpeg';
import propsImg from '../../Assets/Products/Props.jpeg';
import walkwaysImg from '../../Assets/Products/Walkways.jpeg';
import pipsImg from '../../Assets/Products/Pips.jpeg';

const circleItems = [
  {
    id: 'cup',
    title: 'Cup',
    img: cupImg,
    subtitle: 'Cup Lock System',
    desc: 'High quality Cup Lock for modular, fast-erection support.'
  },
  {
    id: 'props',
    title: 'Props',
    img: propsImg,
    subtitle: 'Adjustable Props',
    desc: 'Heavy duty adjustable props for slab, beam and temporary support.'
  },
  {
    id: 'walkway',
    title: 'Walkway',
    img: walkwaysImg,
    subtitle: 'Walkway Platform',
    desc: 'Durable Walkway platforms to ensures much safer work-area movement.'
  },
  {
    id: 'pipe',
    title: 'Pipe',
    img: pipsImg,
    subtitle: 'Scaffolding Pipe',
    desc: 'Primary structural pipe component for construction support.'
  }
];

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

const CoreProductPortfolio = () => {
  const isMobile = useMobile();
  const [rotation, setRotation] = useState(0);
  const [scaleFactor, setScaleFactor] = useState(1);

  // Auto-rotate every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Calculate dynamic scale factor to auto-adjust for small heights & widths
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      if (width < 768) {
        const availableHeight = height - 320;
        const targetHeight = 240; // compact height for mobile stack
        let factor = availableHeight / targetHeight;
        
        const availableWidth = width - 24;
        const targetWidth = 320;
        factor = Math.min(factor, availableWidth / targetWidth);
        
        setScaleFactor(Math.max(0.65, Math.min(1, factor)));
      } else {
        const availableHeight = height - 180;
        const targetHeight = 360;
        const factor = availableHeight / targetHeight;
        
        setScaleFactor(Math.max(0.75, Math.min(1.05, factor)));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute active item index (the card in Slot 0 at the Front/Center)
  const activeIndex = ((-rotation) % 4 + 4) % 4;

  // Rotate to target card (move it to Slot 0)
  const handleCardClick = (clickedIdx) => {
    const currentSlot = ((clickedIdx + rotation) % 4 + 4) % 4;
    if (currentSlot === 0) return; // already active

    let diff = 0;
    if (currentSlot === 1) {
      diff = -1; // right -> spin counter-clockwise to front
    } else if (currentSlot === 3) {
      diff = 1;  // left -> spin clockwise to front
    } else if (currentSlot === 2) {
      diff = 2;  // back -> spin 2 steps
    }
    setRotation(prev => prev + diff);
  };

  const handleNextClick = (e) => {
    e.stopPropagation();
    setRotation(prev => prev + 1);
  };

  const handlePrevClick = (e) => {
    e.stopPropagation();
    setRotation(prev => prev - 1);
  };

  // Define 3D stacked horizontal ring slots - Shifting foreground down for depth effect
  const slots = isMobile ? [
    { x: 0, y: 20, scale: 1.2, zIndex: 30, opacity: 1 },
    { x: 85, y: 0, scale: 0.78, zIndex: 20, opacity: 0.5 },
    { x: 0, y: -25, scale: 0.6, zIndex: 10, opacity: 0.15 },
    { x: -85, y: 0, scale: 0.78, zIndex: 20, opacity: 0.5 }
  ] : [
    { x: 0, y: 30, scale: 1.25, zIndex: 30, opacity: 1 },
    { x: 140, y: 0, scale: 0.8, zIndex: 20, opacity: 0.6 },
    { x: 0, y: -40, scale: 0.65, zIndex: 10, opacity: 0.25 },
    { x: -140, y: 0, scale: 0.8, zIndex: 20, opacity: 0.6 }
  ];

  const productsList = [
    { role: "Cup Lock System", text: "for modular, fast-erection support.", key: 0 },
    { role: "Adjustable Props", text: "for slab, beam and temporary support.", key: 1 },
    { role: "Walkway Platform", text: "for safer work-area movement.", key: 2 },
    { role: "Scaffolding Pipe", text: "as a primary structural component.", key: 3 }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden select-none">
      
      {/* Main Grid/Flex Container for Split Layout */}
      <div 
        style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'center' }}
        className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 lg:gap-12 py-2 md:py-10 mt-[-3vh] md:mt-[-2vh] transition-transform duration-300"
      >
        
        {/* Left Side: Product descriptions list */}
        <div className="w-full md:max-w-[55%] flex flex-col justify-center shrink-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Heading matching AboutUs.jsx */}
            <div className="relative inline-block w-fit mb-1.5 md:mb-4 pb-1">
              <h2 className="text-2xl sm:text-[1.5rem] tracking-tight">
                <span className="text-[#8c1d21] font-bold">Core Product</span>{" "}
                <span className="text-[#1e293b] font-medium">Portfolio</span>
              </h2>
              {/* Red Underline */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8c1d21]" />
            </div>
            
            {/* Tagline intro */}
            <p className="text-[#475569] text-xs sm:text-sm font-semibold mb-2 leading-relaxed max-w-[480px]">
              Sites need safe, repeatable and strong temporary support systems. Scaffolding systems for construction and maintenance work.
            </p>

            {/* List with interactive highlight syncing */}
            <div className="flex flex-col gap-1.5 md:gap-3 text-[#334155] text-xs sm:text-base leading-[1.5] md:leading-[1.6] max-w-[480px]">
              {productsList.map((item) => {
                const isItemActive = item.key === activeIndex;
                return (
                  <div 
                    key={item.key}
                    onClick={() => handleCardClick(item.key)}
                    className={`cursor-pointer transition-all duration-300 p-1.5 md:p-2 rounded-xl border ${
                      isItemActive 
                        ? "border-[#8c1d21]/30 bg-[#8c1d21]/5 shadow-sm translate-x-1" 
                        : "border-transparent hover:bg-slate-50"
                    }`}
                  >
                    <p className={`${isItemActive ? "text-slate-900" : "text-[#475569]"}`}>
                      <span className={`font-bold transition-colors ${isItemActive ? "text-[#8c1d21]" : "text-slate-800"}`}>
                        {item.role}
                      </span>{" "}
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Horizontal 3D Card Stack Carousel */}
        <div className="w-full md:w-[45%] flex flex-col items-center justify-center shrink-0 mt-4 md:mt-0">
          
          {/* Stack Container without dynamic scaling (moved to parent) */}
          <div 
            className={`relative flex items-center justify-center ${
              isMobile ? "w-[320px] h-[220px]" : "w-[440px] h-[300px]"
            }`}
          >
            
            {/* 3D Stacked Cards */}
            {circleItems.map((item, idx) => {
              const slotIdx = ((idx + rotation) % 4 + 4) % 4;
              const slot = slots[slotIdx];
              const isActive = idx === activeIndex;

              return (
                <motion.div
                  key={item.id}
                  layout
                  animate={{ 
                    x: slot.x, 
                    y: slot.y,
                    scale: slot.scale,
                    zIndex: slot.zIndex,
                    opacity: slot.opacity
                  }}
                  // Ultra smooth transitions: lower stiffness and custom damping for smooth liquid glide
                  transition={{ type: "spring", stiffness: 85, damping: 20 }}
                  onClick={() => handleCardClick(idx)}
                  className={`absolute rounded-2xl overflow-hidden border shadow-md cursor-pointer transition-colors duration-300 ${
                    isActive 
                      ? "border-[#8c1d21] shadow-xl ring-4 ring-[#8c1d21]/5" 
                      : "border-slate-100 hover:border-slate-300"
                  } ${
                    isMobile 
                      ? "w-[150px] h-[100px]" 
                      : "w-[240px] h-[160px]"
                  }`}
                >
                  {/* Card Product Image Background with Camera Depth-of-Field Blur effect on background cards */}
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none transition-all duration-500 ${
                      isActive ? "blur-0 scale-105" : "blur-[3px] scale-95 opacity-80"
                    }`} 
                  />
                  {/* Dark text overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-900/5 pointer-events-none z-10" />
                  
                  {/* Card Content Overlay */}
                  <div className={`relative z-20 w-full h-full flex flex-col justify-end text-center ${
                    isMobile ? "pb-2 px-1.5" : "pb-3.5 px-2.5"
                  }`}>
                    <span className={`font-bold text-white leading-tight block drop-shadow-sm uppercase ${
                      isMobile ? "text-[11px]" : "text-sm"
                    }`}>
                      {item.title}
                    </span>
                    <span className={`font-medium text-slate-300 leading-tight block mx-auto truncate ${
                      isMobile ? "text-[7.5px] max-w-[130px] mt-0.5" : "text-[9.5px] max-w-[210px] mt-1"
                    }`}>
                      {item.desc}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>



        </div>

      </div>
    </div>
  );
};

export default CoreProductPortfolio;

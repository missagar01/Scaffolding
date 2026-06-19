import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ledgerImg from '../../Assets/Images/Cuplock LedgerHorizontal.jpeg';
import verticalImg from '../../Assets/Images/Cuplock VerticalStandard.jpeg';
import challiImg from '../../Assets/Images/Scaffolding Challi.png';

const items = [
  {
    id: 'vertical',
    img: verticalImg,
    title: 'Vertical Standard',
    subtitle: 'Cuplock System Component',
    desc: 'Cuplock Vertical Standard'
  },
  {
    id: 'ledger',
    img: ledgerImg,
    title: 'Ledger Horizontal',
    subtitle: 'Horizontal Connection Pipe',
    desc: 'Cuplock Ledger Horizontal'
  },
  {
    id: 'challi',
    img: challiImg,
    title: 'Scaffolding Challi',
    subtitle: 'Metallic Walkway Deck',
    desc: 'Scaffolding Challi (Plank)'
  }
];

const slotStyles = {
  0: "col-start-1 row-start-1 row-span-2 h-full",
  1: "col-start-2 row-start-1 row-span-1 h-full",
  2: "col-start-2 row-start-2 row-span-1 h-full",
};

const AboutUs = () => {
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const timer = setInterval(() => {
      setOrder(prev => prev.map(slot => (slot + 1) % 3));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const paragraphs = [
    (
      <>
        A focused scaffolding and construction support product brand.{" "}
        Backed by <span className="font-bold text-[#8c1d21]">Sourabh Rolling Mills Pvt. Ltd. Raipur</span>.
      </>
    ),
    (
      <>
        Having an experienced team in manufacturing with a state of art and having knowledge about scaffolding items,{" "}
        manufactured scaffolding items with <span className="font-bold text-slate-900">immense thoroughness</span>.
      </>
    ),
    (
      <>
        And designed for <span className="font-bold text-slate-900">contractor, dealer and project procurement</span> needs.{" "}
        Product messaging: <span className="font-bold text-slate-900">strong, reliable and quality tested</span> for business development.
      </>
    )
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden select-none">
      
      {/* Main Grid/Flex Container for Split Layout */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 py-2 md:py-10 mt-[-3vh] md:mt-[-2vh]">
        
        {/* Left Column: Text Description */}
        <div className="w-full md:max-w-[55%] flex flex-col justify-center">
          
          {/* Content Blocks (Who We Are? heading + paragraphs) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Title with left-extending red line */}
            <div className="relative inline-block w-fit mb-4 pb-1">
              <h2 className="text-2xl sm:text-[1.5rem] tracking-tight">
                <span className="text-[#8c1d21] font-bold">Who</span>{" "}
                <span className="text-[#1e293b] font-medium">We Are?</span>
              </h2>
              {/* Red Underline spanning to the left edge */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8c1d21]" />
            </div>
            
            <div className="flex flex-col gap-4 text-[#334155] text-sm sm:text-base leading-[1.6] max-w-[480px]">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </motion.div>
          
        </div>

        {/* Right Column: Beautiful Staggered Gallery Grid (visible on both desktop & mobile with auto-rotation) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-4 w-full md:max-w-[40%] lg:max-w-[45%] shrink-0 h-[170px] md:h-[300px] lg:h-[340px] mt-6 md:mt-0"
        >
          {items.map((item, idx) => {
            const slot = order[idx];
            const slotClass = slotStyles[slot];
            
            return (
              <motion.div
                key={item.id}
                layout
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                whileHover={{ scale: 1.01 }}
                className={`relative group rounded-2xl overflow-hidden border border-slate-200/60 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ${slotClass}`}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/0 to-slate-900/0 opacity-90 transition-opacity" />
                
                {/* Responsive text layout for the grid */}
                <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4">
                  <span className="text-white text-[9px] sm:text-xs lg:text-sm font-bold tracking-wide uppercase drop-shadow-sm block leading-tight">
                    {item.title}
                  </span>
                  <p className="text-slate-300 text-[7px] sm:text-[10px] lg:text-xs mt-0.5 leading-none">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
};

export default AboutUs;

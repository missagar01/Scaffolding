import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  ShieldCheck, 
  Truck, 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle
} from 'lucide-react';

const circleItems = [
  {
    id: 'strength',
    title: 'Strength',
    icon: 'shield',
    subtitle: 'Steel Grade Compliance',
    desc: 'The steel must possess the correct balance of tensile strength and ductility.'
  },
  {
    id: 'quality',
    title: 'Quality',
    icon: 'award',
    subtitle: 'Testing Protocols',
    desc: 'It must be backed by globally recognized testing protocols.'
  },
  {
    id: 'reliability',
    title: 'Reliability',
    icon: 'shield-check',
    subtitle: 'Safety Supervision & Handholding',
    desc: 'Safety Supervision & Handholding'
  },
  {
    id: 'support',
    title: 'Support',
    icon: 'truck',
    subtitle: 'Delivery Coordination',
    desc: 'On-Time Delivery Coordination'
  }
];

const renderIcon = (name, size) => {
  const className = "text-[#8c1d21] mb-1";
  switch (name) {
    case 'shield': return <Shield size={size} className={className} />;
    case 'award': return <Award size={size} className={className} />;
    case 'shield-check': return <ShieldCheck size={size} className={className} />;
    case 'truck': return <Truck size={size} className={className} />;
    default: return <HelpCircle size={size} className={className} />;
  }
};

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

const CustomerSupport = () => {
  const isMobile = useMobile();
  const [rotation, setRotation] = useState(0);
  const [scaleFactor, setScaleFactor] = useState(1);

  // Auto-rotate every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Calculate dynamic scale factor to auto-adjust for small heights & widths
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      if (width < 768) {
        // Mobile screens: vertical layout
        // List takes ~200px, container padding ~16px, navigation dots ~80px. Total static height ~300px.
        const availableHeight = height - 300;
        const targetHeight = 300; // mobile target circle height is 300px
        let factor = availableHeight / targetHeight;
        
        // Also constrain by width (layout width is 300px + card widths (300 + 105 = 405px))
        const availableWidth = width - 24; // padding
        const targetWidth = 390;
        factor = Math.min(factor, availableWidth / targetWidth);
        
        // Floor at 0.55 to keep text legible
        setScaleFactor(Math.max(0.55, Math.min(1, factor)));
      } else {
        // Desktop screens: horizontal layout
        // We have: Margins + Header + Footer = 180px static space
        const availableHeight = height - 180;
        const targetHeight = 400;
        const factor = availableHeight / targetHeight;
        
        setScaleFactor(Math.max(0.7, Math.min(1.05, factor)));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute active item index (the card in Slot 0 at the Top)
  const activeIndex = ((-rotation) % 4 + 4) % 4;

  // Rotate to target card (move it to Slot 0)
  const handleCardClick = (clickedIdx) => {
    const currentSlot = ((clickedIdx + rotation) % 4 + 4) % 4;
    if (currentSlot === 0) return; // already active

    let diff = 0;
    if (currentSlot === 1) {
      diff = -1; // right -> spin counter-clockwise to top
    } else if (currentSlot === 3) {
      diff = 1;  // left -> spin clockwise to top
    } else if (currentSlot === 2) {
      diff = 2;  // opposite -> spin 2 steps
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

  // Define slot coordinates (radius 90 on mobile, 130 on desktop)
  const slots = isMobile ? [
    { x: 0, y: -90 }, // Top
    { x: 95, y: 0 },  // Right
    { x: 0, y: 90 },  // Bottom
    { x: -95, y: 0 }, // Left
  ] : [
    { x: 0, y: -130 }, // Top
    { x: 140, y: 0 },  // Right
    { x: 0, y: 130 },  // Bottom
    { x: -140, y: 0 }, // Left
  ];

  const supportNeeds = [
    { role: "Sites", text: "need safe, repeatable and strong temporary support systems." },
    { role: "Contractors", text: "require fast erection and dependable material availability." },
    { role: "Dealers", text: "require simple product classification and clear specifications." },
    { role: "Project teams", text: "require reliable products with standard dimensions." },
    { role: "Purchase teams", text: "require clear contact, product and application data." }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden select-none">
      
      {/* Main Grid/Flex Container for Split Layout */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 lg:gap-12 py-2 md:py-10 mt-[-3vh] md:mt-[-2vh]">
        
        {/* Left Side: Statically positioned requirements list */}
        <div className="w-full md:max-w-[55%] flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Title with red underline matching AboutUs.jsx */}
            <div className="relative inline-block w-fit mb-1.5 md:mb-4 pb-1">
              <h2 className="text-2xl sm:text-[1.5rem] tracking-tight">
                <span className="text-[#8c1d21] font-bold">Customer</span>{" "}
                <span className="text-[#1e293b] font-medium">Support</span>
              </h2>
              {/* Red Underline */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8c1d21]" />
            </div>
            
            {/* Plain paragraph styling matching AboutUs.jsx - tightened gaps on mobile */}
            <div className="flex flex-col gap-1.5 md:gap-4 text-[#334155] text-xs sm:text-base leading-[1.5] md:leading-[1.6] max-w-[480px]">
              {supportNeeds.map((need, idx) => (
                <p key={idx}>
                  <span className="font-bold text-[#8c1d21]">{need.role}</span> {need.text}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Circular Layout */}
        <div className="w-full md:w-[45%] flex items-center justify-center shrink-0 mt-2 md:mt-0">
          
          {/* Outer circle container with dynamic scaling */}
          <div 
            style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'center' }}
            className={`relative flex items-center justify-center transition-transform duration-300 ${
              isMobile ? "w-[300px] h-[300px]" : "w-[400px] h-[400px]"
            }`}
          >
            
            {/* SVG Curved Arrows */}
            {isMobile ? (
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-150 -150 300 300">
                <defs>
                  <marker 
                    id="customer-support-arrow-marker-mobile" 
                    viewBox="0 0 10 10" 
                    refX="6" 
                    refY="5" 
                    markerWidth="5" 
                    markerHeight="5" 
                    orient="auto"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#8c1d21" opacity="0.7" />
                  </marker>
                </defs>
                <path d="M 23 -87 A 90 90 0 0 1 87 -23" fill="none" stroke="#8c1d21" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#customer-support-arrow-marker-mobile)" />
                <path d="M 87 23 A 90 90 0 0 1 23 87" fill="none" stroke="#8c1d21" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#customer-support-arrow-marker-mobile)" />
                <path d="M -23 87 A 90 90 0 0 1 -87 23" fill="none" stroke="#8c1d21" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#customer-support-arrow-marker-mobile)" />
                <path d="M -87 -23 A 90 90 0 0 1 -23 -87" fill="none" stroke="#8c1d21" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#customer-support-arrow-marker-mobile)" />
              </svg>
            ) : (
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-200 -200 400 400">
                <defs>
                  <marker 
                    id="customer-support-arrow-marker-desktop" 
                    viewBox="0 0 10 10" 
                    refX="6" 
                    refY="5" 
                    markerWidth="6" 
                    markerHeight="6" 
                    orient="auto"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#8c1d21" opacity="0.7" />
                  </marker>
                </defs>
                <path d="M 31 -116 A 120 120 0 0 1 116 -31" fill="none" stroke="#8c1d21" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#customer-support-arrow-marker-desktop)" />
                <path d="M 116 31 A 120 120 0 0 1 31 116" fill="none" stroke="#8c1d21" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#customer-support-arrow-marker-desktop)" />
                <path d="M -31 116 A 120 120 0 0 1 -116 31" fill="none" stroke="#8c1d21" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#customer-support-arrow-marker-desktop)" />
                <path d="M -116 -31 A 120 120 0 0 1 -31 -116" fill="none" stroke="#8c1d21" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#customer-support-arrow-marker-desktop)" />
              </svg>
            )}

            {/* Central Circle Badge with control buttons */}
            <div className="absolute w-[80px] h-[80px] md:w-[130px] md:h-[130px] rounded-full bg-stone-50 border border-stone-200/80 flex flex-col items-center justify-center text-center p-2 shadow-inner z-20">
              <span className="text-[8px] md:text-[9px] uppercase tracking-wider text-slate-400 font-bold">Focus</span>
              <span className="text-[10px] md:text-[11px] font-bold text-[#8c1d21] mt-0.5 leading-tight">Customer Support</span>
              
              {/* Spinner manual controls */}
              <div className="flex gap-2 mt-1 md:mt-2.5">
                <button 
                  onClick={handlePrevClick}
                  className="p-1 rounded-full bg-white hover:bg-slate-100 border border-slate-200 shadow-sm text-[#8c1d21] transition-colors"
                  title="Spin Counter-Clockwise"
                >
                  <ArrowLeft size={10} />
                </button>
                <button 
                  onClick={handleNextClick}
                  className="p-1 rounded-full bg-white hover:bg-slate-100 border border-slate-200 shadow-sm text-[#8c1d21] transition-colors"
                  title="Spin Clockwise"
                >
                  <ArrowRight size={10} />
                </button>
              </div>
            </div>

            {/* Orbiting Cards (Visible on both desktop & mobile with scaled typography) */}
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
                    scale: isActive ? 1.05 : 0.9,
                    opacity: isActive ? 1 : 0.75
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  onClick={() => handleCardClick(idx)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border text-center flex flex-col justify-center items-center shadow-md cursor-pointer transition-colors duration-300 w-[105px] md:w-[140px] min-h-[76px] md:min-h-[92px] p-1.5 md:p-2.5 ${
                    isActive 
                      ? "border-[#8c1d21] shadow-lg ring-4 ring-[#8c1d21]/5 z-15" 
                      : "border-slate-100 hover:border-slate-300 hover:shadow-md z-10"
                  }`}
                >
                  {renderIcon(item.icon, 16)}
                  
                  <span className={`font-bold text-slate-800 leading-tight block ${isMobile ? "text-[9.5px]" : "text-xs"}`}>
                    {item.title}
                  </span>
                  <span className={`font-semibold text-slate-500 mt-0.5 leading-tight block ${isMobile ? "text-[7.5px]" : "text-[9px]"}`}>
                    {item.subtitle}
                  </span>
                  <p className={`text-slate-400 mt-1 leading-[1.25] font-normal mx-auto ${isMobile ? "text-[6.5px] max-w-[95px]" : "text-[8px] max-w-[120px]"}`}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};

export default CustomerSupport;

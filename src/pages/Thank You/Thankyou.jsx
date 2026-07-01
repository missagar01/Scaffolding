import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../../Assets/Logo.png';
import { Phone, Globe, MapPin } from 'lucide-react';

const Thankyou = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* Top/Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-6 text-center -mt-16 sm:-mt-24 md:-mt-32">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mb-6 sm:mb-8 z-10"
        >
          <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-slate-200/40 overflow-hidden flex items-center justify-center transition-all hover:scale-105 duration-300">
            <img src={Logo} alt="Sagar Scaffolding Logo" className="w-[280px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto object-cover select-none pointer-events-none" />
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center text-center mt-2"
        >
          <span className="text-[#8c1d21] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide mb-2 mt-4">Thank You!</span>
          <span className="text-slate-600 text-base sm:text-lg md:text-xl font-medium">We appreciate your interest in our products.</span>
        </motion.div>

      </div>

      {/* Bottom Contact Widget matching Home.jsx */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-20 md:bottom-24 left-0 right-0 mx-auto w-fit max-w-[95vw] md:max-w-none border-t border-slate-200/50 pt-5 md:pt-6 grid grid-cols-2 md:flex md:flex-row justify-center items-start md:items-stretch gap-x-4 gap-y-5 md:gap-8 lg:gap-10 text-left z-20 px-4 md:px-0"
      >
        
        {/* Address */}
        <div className="flex items-center md:items-start gap-2.5 shrink-0 w-full md:w-auto">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-white to-[#fff5f5] flex items-center justify-center shrink-0 border border-[#8c1d21]/15 shadow-sm">
            <MapPin className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#8c1d21]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#8c1d21] font-bold text-[9px] md:text-[10px] tracking-wider uppercase mb-0.5">LOCATION</span>
            <span className="text-slate-800 font-bold text-[11px] sm:text-xs md:text-[13px] md:whitespace-nowrap">Achholi Road, Urla, Raipur</span>
          </div>
        </div>

        <div className="hidden md:block w-[1px] bg-slate-200/80 my-1" />

        {/* Email & Web */}
        <div className="flex items-center md:items-start gap-2.5 shrink-0 w-full md:w-auto">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-white to-[#fff5f5] flex items-center justify-center shrink-0 border border-[#8c1d21]/15 shadow-sm">
            <Globe className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#8c1d21]" />
          </div>
          <div className="flex flex-col">
             <span className="text-[#8c1d21] font-bold text-[9px] md:text-[10px] tracking-wider uppercase mb-0.5">ONLINE</span>
             <span className="text-slate-800 font-bold text-[11px] sm:text-xs md:text-[13px] break-all">mkt@sagargroup.co</span>
          </div>
        </div>

        <div className="hidden md:block w-[1px] bg-slate-200/80 my-1" />

        {/* Phone 1 */}
        <div className="flex items-start gap-2.5 shrink-0 w-full md:w-auto">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-white to-[#fff5f5] flex items-center justify-center shrink-0 border border-[#8c1d21]/15 shadow-sm mt-0.5">
            <Phone className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#8c1d21]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#8c1d21] font-bold text-[9px] md:text-[10px] tracking-wider uppercase mb-0.5">PHONE SUPPORT</span>
            <span className="text-slate-800 font-bold text-[11px] sm:text-xs md:text-[13px] leading-tight">+91 6266919126</span>
          </div>
        </div>

        <div className="hidden md:block w-[1px] bg-slate-200/80 my-1" />

        {/* Phone 2 & 3 */}
        <div className="flex items-start gap-2.5 shrink-0 w-full md:w-auto">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-white to-[#fff5f5] flex items-center justify-center shrink-0 border border-[#8c1d21]/15 shadow-sm mt-0.5">
            <Phone className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#8c1d21]" />
          </div>
          <div className="flex flex-col">
             <div className="flex flex-col gap-0.5 pt-0 md:pt-3">
              <span className="text-slate-800 font-bold text-[11px] sm:text-xs md:text-[13px] leading-tight">+91 7723020092</span>
              <span className="text-slate-800 font-bold text-[11px] sm:text-xs md:text-[13px] leading-tight">+91 7723020091</span>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Thankyou;

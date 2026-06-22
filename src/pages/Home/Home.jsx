import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, Phone } from 'lucide-react';
import logo from '../../Assets/Logo.png';

const Home = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden select-none">

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-6 text-center -mt-16 sm:-mt-24 md:-mt-32">

        {/* Top Section: Brand Logo */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mb-6 sm:mb-8 z-10"
        >
          <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-slate-200/40 overflow-hidden flex items-center justify-center transition-all hover:scale-105 duration-300">
            <img
              src={logo}
              alt="Sagar TMT & Pipes Logo"
              className="w-[240px] sm:w-[300px] md:w-[450px] lg:w-[550px] h-auto object-cover select-none pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Middle Section: Title Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center w-full mb-6 sm:mb-8"
        >
          <div className="w-[50%] sm:w-[45%] h-[1px] bg-slate-400/80 mb-2" />
          <h1 className="text-[#8c1d21] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-1 select-text font-serif leading-tight">
            Sourabh Rolling Mills
          </h1>
          <h2 className="text-slate-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide mb-2 select-text leading-tight">
            Pvt Ltd
          </h2>
          <div className="relative w-[50%] sm:w-[45%] h-[1px] bg-slate-400/80 mt-1">
            <div className="absolute right-0 top-0 h-full w-[35%] bg-[#8c1d21]" />
          </div>
        </motion.div>

        {/* Bottom Section: Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-slate-800 text-base sm:text-lg md:text-xl font-light tracking-wide mb-0"
        >
          <span className="font-extrabold text-slate-900">Strong, Reliable & Quality</span>
          <span className="ml-1 text-slate-600">Scaffolding Solutions</span>
        </motion.div>

      </div>

      {/* Contact Info Widget (Row on desktop, Column on mobile) - Positioned Down Side */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-20 md:bottom-24 left-0 right-0 mx-auto w-fit max-w-[95vw] md:max-w-none border-t border-slate-200/50 pt-5 md:pt-6 grid grid-cols-2 md:flex md:flex-row justify-center items-start md:items-stretch gap-x-4 gap-y-5 md:gap-8 lg:gap-10 text-left z-20 px-4 md:px-0"
      >
        {/* Est & Location */}
        <div className="flex items-center md:items-start gap-2.5 shrink-0 w-full md:w-auto">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-white to-[#fff5f5] flex items-center justify-center shrink-0 border border-[#8c1d21]/15 shadow-sm">
            <Calendar className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#8c1d21]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#8c1d21] font-bold text-[9px] md:text-[10px] tracking-wider uppercase mb-0.5">EST. & LOCATION</span>
            <span className="text-slate-800 font-bold text-[11px] sm:text-xs md:text-[13px] md:whitespace-nowrap">2005 - Raipur, CG</span>
          </div>
        </div>

        {/* Divider line for desktop */}
        <div className="hidden md:block w-[1px] bg-slate-200/80 my-1" />

        {/* Direct Email */}
        <div className="flex items-center md:items-start gap-2.5 shrink-0 w-full md:w-auto">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-white to-[#fff5f5] flex items-center justify-center shrink-0 border border-[#8c1d21]/15 shadow-sm">
            <Mail className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#8c1d21]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#8c1d21] font-bold text-[9px] md:text-[10px] tracking-wider uppercase mb-0.5">DIRECT EMAIL</span>
            <span className="text-slate-800 font-bold text-[11px] sm:text-xs md:text-[13px] break-all max-w-[120px] md:max-w-none">mkt@sagargroup.co</span>
          </div>
        </div>

        {/* Divider line for desktop */}
        <div className="hidden md:block w-[1px] bg-slate-200/80 my-1" />

        {/* Phone Support 1 */}
        <div className="flex items-start gap-2.5 shrink-0 w-full md:w-auto">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-white to-[#fff5f5] flex items-center justify-center shrink-0 border border-[#8c1d21]/15 shadow-sm mt-0.5">
            <Phone className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#8c1d21]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#8c1d21] font-bold text-[9px] md:text-[10px] tracking-wider uppercase mb-0.5">PHONE SUPPORT</span>
            <span className="text-slate-800 font-bold text-[11px] sm:text-xs md:text-[13px] leading-tight">+916266919126</span>
          </div>
        </div>

        {/* Divider line for desktop */}
        <div className="hidden md:block w-[1px] bg-slate-200/80 my-1" />

        {/* Phone Support 2 */}
        <div className="flex items-start gap-2.5 shrink-0 w-full md:w-auto">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-white to-[#fff5f5] flex items-center justify-center shrink-0 border border-[#8c1d21]/15 shadow-sm mt-0.5">
            <Phone className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#8c1d21]" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-0.5 pt-0 md:pt-3">
              <span className="text-slate-800 font-bold text-[11px] sm:text-xs md:text-[13px] leading-tight">+917723020092</span>
              <span className="text-slate-800 font-bold text-[11px] sm:text-xs md:text-[13px] leading-tight">+917723020091</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

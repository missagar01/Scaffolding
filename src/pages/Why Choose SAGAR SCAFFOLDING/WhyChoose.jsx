import React, { useState, useEffect } from 'react';
import { 
  Target, Lightbulb, Heart, ShieldCheck, Award, Box, Headphones, Factory, CheckCircle2, Eye, Handshake
} from 'lucide-react';

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

const WhyChoose = () => {
  const isMobile = useMobile();
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      if (width < 768) {
        const availableHeight = height - 120;
        const targetHeight = 650; 
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

  const whyChoosePoints = [
    {
      title: "High Strength Material",
      desc: "Strong and durable products for demanding conditions.",
      icon: ShieldCheck,
      color: "text-[#ce1e2e]",
      bg: "bg-[#ce1e2e]/10"
    },
    {
      title: "IS Standard Manufacturing",
      desc: "Quality-tested material and reliable product messaging.",
      icon: Award,
      color: "text-[#0b5bb0]",
      bg: "bg-[#0b5bb0]/10"
    },
    {
      title: "Ready Stock & Range",
      desc: "Suitable product range for construction and industrial projects.",
      icon: Box,
      color: "text-[#e59400]",
      bg: "bg-[#e59400]/10"
    },
    {
      title: "Technical Support & Delivery",
      desc: "Professional support for dealer and project requirements.",
      icon: Headphones,
      color: "text-[#07955c]",
      bg: "bg-[#07955c]/10"
    },
    {
      title: "Trusted Manufacturer",
      desc: "Manufactured by Sourabh Rolling Mills Pvt. Ltd.",
      icon: Factory,
      color: "text-[#8c1d21]",
      bg: "bg-[#8c1d21]/10"
    }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none">
      <div
        style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'center' }}
        className="relative z-10 w-full max-w-6xl flex flex-col gap-3 lg:gap-5 mt-[-4vh] md:mt-[-3vh] transition-transform duration-300 mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col items-start w-full mb-2 shrink-0 px-2 sm:px-4 lg:px-8">
          <div className="relative inline-block w-fit mb-0.5 pb-0">
            <h2 className="text-sm sm:text-base md:text-xl tracking-tight leading-tight text-left">
              <span className="text-[#8c1d21] font-bold">Why Choose</span>{" "}
              <span className="text-[#1e293b] font-medium">Sagar Scaffolding</span>
            </h2>
            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8c1d21]" />
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-4 lg:gap-6 items-stretch w-full px-2 sm:px-4 lg:px-8 pb-10 md:pb-0">
          
          {/* Left Column: Why Choose Us list */}
          <div className="md:col-span-7 flex flex-col gap-3">
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 lg:p-6 shadow-sm h-full flex flex-col">
              <h3 className="text-[#1e293b] font-bold text-lg lg:text-xl mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#8c1d21]" />
                Why Choose Us?
              </h3>
              
              <div className="flex flex-col gap-3 lg:gap-4 flex-1 justify-center">
                {whyChoosePoints.map((point, idx) => {
                  const Icon = point.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 lg:gap-4 group">
                      <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-xl ${point.bg} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-200`}>
                        <Icon className={`w-4 h-4 lg:w-5 lg:h-5 ${point.color}`} strokeWidth={2.5} />
                      </div>
                      <div className="flex flex-col pt-0.5">
                        <span className="font-bold text-slate-800 text-[11px] lg:text-[13px] leading-tight mb-0.5">
                          {point.title}
                        </span>
                        <span className="text-slate-600 text-[9px] lg:text-[11px] font-medium leading-relaxed">
                          {point.desc}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Vision, Mission, Values (Overlapping Circles UI) */}
          <div className="md:col-span-5 flex items-center justify-center p-2 lg:p-4">
            
            <div className="relative w-full aspect-square max-w-[340px] lg:max-w-[460px] mx-auto mt-2 lg:mt-0">
              
              {/* Mission Circle - Top Left */}
              <div className="absolute top-0 left-0 w-[56%] h-[56%] rounded-full bg-white border-[5px] sm:border-[8px] lg:border-[12px] border-[#7cb342] shadow-[0_0_0_3px_white,0_4px_10px_rgba(0,0,0,0.08)] z-40 flex flex-col items-center justify-center p-1 sm:p-2 lg:p-4 text-center pr-3 pb-3 sm:pr-4 sm:pb-4 lg:pr-6 lg:pb-6">
                <h3 className="text-[#7cb342] font-bold text-[9px] sm:text-[10px] lg:text-sm mb-0.5 tracking-wider">MISSION</h3>
                <p className="text-[6.5px] sm:text-[7.5px] lg:text-[9.5px] text-slate-700 font-medium leading-[1.2] max-w-[85%] sm:max-w-[80%]">
                  To foster happiness by enabling individuals and teams to achieve goals with purpose and pride.
                </p>
                <Target className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#7cb342] mt-1 opacity-90" />
              </div>

              {/* Values Circle - Top Right */}
              <div className="absolute top-0 right-0 w-[56%] h-[56%] rounded-full bg-white border-[5px] sm:border-[8px] lg:border-[12px] border-[#29b6f6] shadow-[0_0_0_3px_white,0_4px_10px_rgba(0,0,0,0.08)] z-20 flex flex-col items-center justify-center p-1 sm:p-2 lg:p-4 text-center pl-3 pb-3 sm:pl-4 sm:pb-4 lg:pl-6 lg:pb-6">
                <h3 className="text-[#29b6f6] font-bold text-[9px] sm:text-[10px] lg:text-sm mb-0.5 tracking-wider">VALUES</h3>
                <p className="text-[6.5px] sm:text-[8px] lg:text-[10px] text-slate-700 font-bold leading-tight max-w-[85%] sm:max-w-[80%]">
                  Innovation<br/>Quality<br/>Reliability<br/>Pride & Purpose
                </p>
                <Handshake className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#29b6f6] mt-1 opacity-90" />
              </div>

              {/* Vision Circle - Bottom Center */}
              <div className="absolute bottom-0 left-[22%] w-[56%] h-[56%] rounded-full bg-white border-[5px] sm:border-[8px] lg:border-[12px] border-[#ef6c00] shadow-[0_0_0_3px_white,0_4px_10px_rgba(0,0,0,0.08)] z-30 flex flex-col items-center justify-center p-1 sm:p-2 lg:p-4 text-center pt-4 sm:pt-6 lg:pt-8">
                <Eye className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#ef6c00] mb-0.5 opacity-90" />
                <p className="text-[6.5px] sm:text-[7.5px] lg:text-[9.5px] text-slate-700 font-medium leading-[1.2] max-w-[85%] sm:max-w-[80%]">
                  A deeper exploration of our journey toward becoming a value-driven organization with a culture of innovation.
                </p>
                <h3 className="text-[#ef6c00] font-bold text-[9px] sm:text-[10px] lg:text-sm mt-0.5 tracking-wider">VISION</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

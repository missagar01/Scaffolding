import React, { useState, useEffect } from 'react';
import {
  Check, ClipboardCheck, ShieldCheck, Activity, Award, Truck, Headphones, Search, Users
} from 'lucide-react';

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

const QualityTestingAndInspection = () => {
  const isMobile = useMobile();
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      if (width < 768) {
        const availableHeight = height - 120;
        const targetHeight = 520;
        let factor = availableHeight / targetHeight;
        // Also bound by width for tall/narrow Android phones
        const availableWidth = width - 32;
        const targetWidth = 340;
        factor = Math.min(factor, availableWidth / targetWidth);
        setScaleFactor(Math.max(0.6, Math.min(1.05, factor)));
      } else {
        const availableHeight = height - 160;
        const targetHeight = 640;
        const factor = availableHeight / targetHeight;
        setScaleFactor(Math.max(0.7, Math.min(1, factor)));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const section1LeftPoints = [
    "Completely tested base jack product messaging",
    "Strong product positioning for tough construction conditions",
    "Inspection-led confidence for purchase and project teams",
    "Consistent product details improve repeat purchase confidence",
    "Quality assurance at every stage of manufacturing"
  ];

  const section1RightBars = [
    { colorClass: "bg-[#ce1e2e]", leftIcon: Activity, title: "Strength", subtitle: "Durable products", description: "Built for tough site conditions and heavy load capacity" },
    { colorClass: "bg-[#0b5bb0]", leftIcon: Award, title: "Quality", subtitle: "Tested material", description: "Thoroughly tested for reliability and long-lasting performance" },
    { colorClass: "bg-[#e59400]", leftIcon: Truck, title: "Reliability", subtitle: "Dependable supply", description: "Consistent availability and on-time delivery for uninterrupted work" },
    { colorClass: "bg-[#07955c]", leftIcon: Headphones, title: "Support", subtitle: "Professional response", description: "Dedicated team for quick assistance and customer satisfaction" }
  ];

  const section2LeftPoints = [
    "Reliable support systems help reduce site execution risk",
    "Stable scaffolding pipe and cup lock systems support safer access",
    "Walkway platform improves worker movement and site flow",
    "Adjustable props help maintain temporary support alignment",
    "Durable products are suitable for repeated site usage"
  ];

  const section2RightBars = [
    { colorClass: "bg-[#ce1e2e]", leftIcon: Activity, title: "Strength", subtitle: "Durable products", description: "High load capacity and strong structural performance" },
    { colorClass: "bg-[#0b5bb0]", leftIcon: Search, title: "Quality", subtitle: "Tested material", description: "Tested for safety, durability and consistent quality" },
    { colorClass: "bg-[#e59400]", leftIcon: Truck, title: "Reliability", subtitle: "Dependable supply", description: "Easy availability and timely delivery to meet project timelines" },
    { colorClass: "bg-[#07955c]", leftIcon: Headphones, title: "Support", subtitle: "Professional response", description: "Expert support for smooth execution and better outcomes" }
  ];

  const BarComponent = ({ bar }) => {
    const LeftIcon = bar.leftIcon;
    return (
      <div className={`flex flex-row items-center ${bar.colorClass} rounded-lg md:rounded-xl text-white p-1 md:p-2 gap-1.5 md:gap-3 shadow-xs h-full`}>
        <div className="flex items-center gap-1.5 md:gap-2.5 w-[35%] md:w-[30%] border-r border-white/30 pr-1.5 md:pr-2 shrink-0">
          <div className="w-5 h-5 md:w-8 md:h-8 border md:border-2 border-white/90 rounded-full flex items-center justify-center shrink-0">
            <LeftIcon className="w-2.5 h-2.5 md:w-4 md:h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[9px] md:text-[13px] leading-none">{bar.title}</span>
            <span className="text-[6.5px] md:text-[9px] text-white/90 leading-tight mt-0.5">{bar.subtitle}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2.5 flex-1 pl-0.5">
          <span className="text-[7.5px] md:text-[10px] leading-tight text-white/95 font-medium">{bar.description}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none pb-12 md:pb-24 pt-4 md:pt-12">

      <div
        style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'center' }}
        className="relative z-10 w-full max-w-6xl flex flex-col gap-1.5 md:gap-3 transition-transform duration-300 mx-auto"
      >

        {/* SECTION 1 */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-1.5 md:gap-4 items-stretch shrink-0">

          {/* Section 1 Left */}
          <div className="md:col-span-5 flex flex-col gap-0.5 md:gap-1.5 justify-center">
            <div className="flex flex-col shrink-0">
              <div className="relative inline-block w-fit mb-0.5 pb-0">
                <h2 className="text-sm sm:text-base md:text-xl tracking-tight leading-tight">
                  <span className="text-[#8c1d21] font-bold">Quality Testing</span>{" "}
                  <span className="text-[#1e293b] font-medium">& Inspection</span>
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8c1d21]" />
              </div>
              <p className="text-[#475569] text-[8px] md:text-[10px] leading-none mt-0.5 mb-1 md:mb-1.5">Professional sales narrative - 5 points per slide</p>
            </div>

            <div className="bg-white border md:border-2 border-[#0b5bb0]/30 rounded-lg md:rounded-xl p-1.5 md:p-3 flex-1 flex flex-col shadow-xs relative overflow-hidden">
              <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                <ClipboardCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#0b5bb0]" />
                <span className="text-[10px] md:text-[13px] font-bold text-[#8c1d21] uppercase tracking-wide">Quality</span>
              </div>
              <div className="flex flex-col gap-1 md:gap-1.5">
                {section1LeftPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#0b5bb0] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-1.5 h-1.5 md:w-2 md:h-2 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[7.5px] md:text-[10.5px] leading-tight text-slate-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 1 Right */}
          <div className="md:col-span-7 flex flex-col justify-center gap-1 md:gap-1.5 shrink-0">
            {section1RightBars.map((bar, i) => <BarComponent key={i} bar={bar} />)}
          </div>

        </div>

        {/* DIVIDER */}
        <div className="relative flex items-center justify-center my-0 shrink-0">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex gap-1.5 md:gap-2 px-3 bg-transparent">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#ce1e2e]"></div>
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#0b5bb0]"></div>
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#e59400]"></div>
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#07955c]"></div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-1.5 md:gap-4 items-stretch shrink-0">

          {/* Section 2 Left */}
          <div className="md:col-span-5 flex flex-col gap-0.5 md:gap-1.5 justify-center">
            <div className="flex flex-col shrink-0">
              <div className="relative inline-block w-fit mb-0.5 pb-0">
                <h2 className="text-sm sm:text-base md:text-xl tracking-tight leading-tight">
                  <span className="text-[#8c1d21] font-bold">Safety, Reliability</span>{" "}
                  <span className="text-[#1e293b] font-medium">& Site Performance</span>
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8c1d21]" />
              </div>
              <p className="text-[#475569] text-[8px] md:text-[10px] leading-none mt-0.5 mb-1 md:mb-1.5">Professional sales narrative - 5 points per slide</p>
            </div>

            <div className="bg-white border md:border-2 border-[#e59400]/30 rounded-lg md:rounded-xl p-1.5 md:p-3 flex-1 flex flex-col shadow-xs relative overflow-hidden">
              <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#e59400]" />
                <span className="text-[10px] md:text-[13px] font-bold text-[#8c1d21] uppercase tracking-wide">Safety-Points</span>
              </div>
              <div className="flex flex-col gap-1 md:gap-1.5">
                {section2LeftPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#e59400] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-1.5 h-1.5 md:w-2 md:h-2 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[7.5px] md:text-[10.5px] leading-tight text-slate-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2 Right */}
          <div className="md:col-span-7 flex flex-col justify-center gap-1 md:gap-1.5 shrink-0">
            {section2RightBars.map((bar, i) => <BarComponent key={i} bar={bar} />)}
          </div>

        </div>

      </div>
    </div>
  );
};

export default QualityTestingAndInspection;

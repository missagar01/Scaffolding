import React, { useState, useEffect } from 'react';
import {
  Check, Factory, Building2, HardHat, TrendingUp,
  Activity, Award, Truck, Headphones, ShieldCheck, Search, Package, Users
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

const ApplicationAreas = () => {
  const isMobile = useMobile();
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;

      if (width < 768) {
        const availableHeight = height - 120;
        const targetHeight = 440;
        let factor = availableHeight / targetHeight;
        setScaleFactor(Math.max(0.75, Math.min(1, factor)));
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

  const section1LeftPoints = [
    "Commercial and residential construction projects",
    "Industrial plant maintenance and expansion work",
    "RCC slab, beam and shuttering support work",
    "Elevated access and temporary walkway requirements",
    "Dealer, contractor and project procurement supply"
  ];

  const section1RightBars = [
    {
      colorClass: "bg-[#ce1e2e]",
      leftIcon: Activity,
      title: "Strength",
      subtitle: "Durable products",
      description: "Provide heavy-duty structural capabilities perfectly suited for heavy RCC slab, beam, and shuttering support work"
    },
    {
      colorClass: "bg-[#0b5bb0]",
      leftIcon: Award,
      title: "Quality",
      subtitle: "Tested material",
      description: "Engineered to meet best quality engineering design standards for both massive commercial and residential construction projects"
    },
    {
      colorClass: "bg-[#e59400]",
      leftIcon: Truck,
      title: "Reliability",
      subtitle: "Dependable supply",
      description: "Offering a stable inventory pipeline that fulfills elevated access requirements"
    },
    {
      colorClass: "bg-[#07955c]",
      leftIcon: Headphones,
      title: "Support",
      subtitle: "Professional response",
      description: "Dedicated, streamlined commercial processing designed specifically to cater to dealer and high-volume project procurement supply"
    }
  ];

  const section2LeftPoints = [
    "Clear product range helps create faster quotations",
    "Multiple contact numbers improve buyer access",
    "Raipur location supports regional industrial and construction markets",
    "Business development teams can use this deck for dealer meetings",
    "Professional product presentation improves customer confidence"
  ];

  const section2RightBars = [
    {
      colorClass: "bg-[#ce1e2e]",
      leftIcon: ShieldCheck,
      title: "Strength",
      subtitle: "Durable products",
      description: "Providing long-lasting performance and structural safety for demanding projects"
    },
    {
      colorClass: "bg-[#0b5bb0]",
      leftIcon: Search,
      title: "Quality",
      subtitle: "Tested material",
      description: "Rigorous quality checks ensuring high standards for every component delivered"
    },
    {
      colorClass: "bg-[#e59400]",
      leftIcon: Package,
      title: "Reliability",
      subtitle: "Dependable supply",
      description: "Consistent supply chain management ensuring on-time availability of materials"
    },
    {
      colorClass: "bg-[#07955c]",
      leftIcon: Users,
      title: "Support",
      subtitle: "Professional response",
      description: "Dedicated business development teams ready to assist with quotations and support"
    }
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
    <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none">

      <div
        style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'center' }}
        className="relative z-10 w-full max-w-6xl flex flex-col gap-1.5 md:gap-3 mt-[-4vh] md:mt-[-3vh] transition-transform duration-300 mx-auto"
      >

        {/* ================= SECTION 1 ================= */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-1.5 md:gap-4 items-stretch shrink-0">

          {/* Section 1 Left */}
          <div className="md:col-span-5 flex flex-col gap-0.5 md:gap-1.5 justify-center">
            <div className="flex flex-col shrink-0">
              <div className="relative inline-block w-fit mb-0.5 pb-0">
                <h2 className="text-sm sm:text-base md:text-xl tracking-tight leading-tight">
                  <span className="text-[#8c1d21] font-bold">Application</span>{" "}
                  <span className="text-[#1e293b] font-medium">Areas</span>
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8c1d21]" />
              </div>
            </div>

            <div className="bg-white border md:border-2 border-[#0d9488]/30 rounded-lg md:rounded-xl p-1.5 md:p-3 flex-1 flex flex-col shadow-xs relative overflow-hidden">
              <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                <Factory className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#0d9488]" />
                <span className="text-[10px] md:text-[13px] font-bold text-[#8c1d21] uppercase tracking-wide">Application Point Deck Section</span>
              </div>

              <div className="flex flex-col gap-1 md:gap-1.5">
                {section1LeftPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#0d9488] flex items-center justify-center shrink-0 mt-0.5">
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


        {/* ================= DIVIDER ================= */}
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


        {/* ================= SECTION 2 ================= */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-1.5 md:gap-4 items-stretch shrink-0">

          {/* Section 2 Left */}
          <div className="md:col-span-5 flex flex-col gap-0.5 md:gap-1.5 justify-center">
            <div className="flex flex-col shrink-0">
              <div className="relative inline-block w-fit mb-0.5 pb-0">
                <h2 className="text-sm sm:text-base md:text-xl tracking-tight leading-tight">
                  <span className="text-[#8c1d21] font-bold">Project Supply</span>{" "}
                  <span className="text-[#1e293b] font-medium">& Business Support</span>
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8c1d21]" />
              </div>
              <p className="text-[#475569] text-[8px] md:text-[10px] leading-none mt-0.5 mb-1 md:mb-1.5"> - 5 points per slide</p>
            </div>

            <div className="bg-white border md:border-2 border-[#ce1e2e]/20 rounded-lg md:rounded-xl p-1.5 md:p-3 flex-1 flex flex-col shadow-xs relative overflow-hidden">
              <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#ce1e2e]" />
                <span className="text-[10px] md:text-[13px] font-bold text-[#8c1d21] uppercase tracking-wide">Support Deck Section</span>
              </div>

              <div className="flex flex-col gap-1 md:gap-1.5">
                {section2LeftPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#ce1e2e] flex items-center justify-center shrink-0 mt-0.5">
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

export default ApplicationAreas;

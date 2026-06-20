import React, { useState, useEffect } from 'react';
import { FileText, Ruler, Table2, CheckCircle2, Zap, Settings2 } from 'lucide-react';

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

const TechnicalStandardsAndMaterialPositioning = () => {
  const isMobile = useMobile();
  const [scaleFactor, setScaleFactor] = useState(1);

  // Calculate dynamic scale factor to prevent clipping on small screen heights
  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;

      if (width < 768) {
        const availableHeight = height - 120;
        const targetHeight = 460;
        let factor = availableHeight / targetHeight;
        setScaleFactor(Math.max(0.75, Math.min(1, factor)));
      } else {
        const availableHeight = height - 120;
        const targetHeight = 530;
        const factor = availableHeight / targetHeight;
        setScaleFactor(Math.max(0.7, Math.min(1.05, factor)));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const specRules = [
    "Steel tube specification reference: IS 1239/1161 YST 210",
    "Medium class tube positioning for prop product category",
    "Defined OD dimensions improve buyer clarity",
    "Technical tables reduce ambiguity during dealer discussions",
    "Standardized descriptions make quotations faster and cleaner"
  ];

  const productSpecs = [
    { product: "Adjustable Props & Base Jack", spec: "IS 1239/1161 YST 210 steel tubes" },
    { product: "Standard Size of Vertical", spec: "1.0 Mtr to 3.0 Mtr" },
    { product: "Standard Size of Ledger", spec: "1.0 Mtr to 2.5 Mtr" },
    { product: "MS Chali", spec: "300mm x 6,7,8,10 feet (25mm) Square Pipe" },
    { product: "U-Base Jack", spec: "U-head support for beam/channel placement" }
  ];

  const badges = [
    {
      title: "Clear",
      subtitle: "Improve buyer clarity",
      bgColor: "bg-[#3b82f6]",
      icon: CheckCircle2
    },
    {
      title: "Fast",
      subtitle: "To make commercial quotations faster and cleaner",
      bgColor: "bg-[#f59e0b]",
      icon: Zap
    },
    {
      title: "Easy",
      subtitle: "Employing structured Technical tables",
      bgColor: "bg-[#10b981]",
      icon: Settings2
    }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden select-none">

      {/* Main Container with height auto-adjustment */}
      <div
        style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'center' }}
        className="relative z-10 w-full max-w-6xl flex flex-col gap-2 md:gap-5 py-0.5 md:py-2 mt-[-3vh] md:mt-[-2vh] transition-transform duration-300 mx-auto"
      >

        {/* Header Block */}
        <div className="flex flex-col mb-0.5 md:mb-1 shrink-0">
          <div className="relative inline-block w-fit mb-0.5 md:mb-1.5 pb-0 md:pb-0.5">
            <h2 className="text-base sm:text-xl md:text-2xl tracking-tight">
              <span className="text-[#8c1d21] font-bold">Technical Standards</span>{" "}
              <span className="text-[#1e293b] font-medium">& Material Positioning</span>
            </h2>
            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] md:h-[2px] bg-[#8c1d21]" />
          </div>
        </div>

        {/* Main Content: 2-column grid */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-6 items-stretch shrink-0">

          {/* Column 1: Specification Rules — Centered card matching sketch */}
          <div className="md:col-span-5 flex flex-col gap-0.5 md:gap-2">
            <div className="bg-white border-2 border-[#8c1d21]/20 rounded-2xl md:rounded-3xl p-3 md:p-6 shadow-xs flex-1 flex flex-col items-center justify-center relative overflow-hidden">

              {/* Title */}
              <div className="flex flex-col items-center mb-2 md:mb-4">
                <span className="text-[12px] md:text-base font-bold text-[#8c1d21] italic tracking-wide">Specification Rules</span>
                <div className="w-16 md:w-24 h-[1.5px] bg-[#8c1d21]/30 mt-1" />
              </div>

              {/* Rules — centered text */}
              <div className="flex flex-col gap-1.5 md:gap-2.5 text-center">
                {specRules.map((rule, i) => (
                  <p
                    key={i}
                    className="text-[9px] md:text-[12.5px] text-slate-600 leading-tight md:leading-normal"
                  >
                    <strong className="text-slate-800">{rule.split(':')[0]}{rule.includes(':') ? ':' : ''}</strong>
                    {rule.includes(':') ? rule.split(':').slice(1).join(':') : ''}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Product Specifications Table */}
          <div className="md:col-span-7 flex flex-col gap-0.5 md:gap-2">
            <div className="bg-white border border-slate-200/80 rounded-xl md:rounded-2xl shadow-xs flex-1 flex flex-col overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-2 bg-[#8c1d21] text-white">
                <div className="px-3 md:px-5 py-2 md:py-3 flex items-center gap-2">
                  <Table2 className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-[10px] md:text-sm font-bold uppercase tracking-wide">Product</span>
                </div>
                <div className="px-3 md:px-5 py-2 md:py-3 flex items-center gap-2">
                  <Ruler className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-[10px] md:text-sm font-bold uppercase tracking-wide">Key Spec Mention</span>
                </div>
              </div>

              {/* Table Rows */}
              {productSpecs.map((item, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 border-b border-slate-100 last:border-b-0 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}
                >
                  <div className="px-3 md:px-5 py-2.5 md:py-3.5 text-[9px] md:text-[13px] text-slate-700 font-medium">
                    {item.product}
                  </div>
                  <div className="px-3 md:px-5 py-2.5 md:py-3.5 text-[9px] md:text-[13px] text-slate-600">
                    {item.spec}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: Clear / Fast / Easy Badges */}
        <div className="flex flex-row justify-center items-stretch gap-3 md:gap-6 mt-1 md:mt-2 shrink-0">
          {badges.map((badge, idx) => {
            const BadgeIcon = badge.icon;
            return (
              <div
                key={idx}
                className={`${badge.bgColor} rounded-xl md:rounded-2xl px-4 md:px-8 py-3 md:py-5 flex flex-col items-center justify-center gap-0.5 md:gap-1.5 text-white shadow-md cursor-default min-w-[80px] md:min-w-[150px]`}
              >
                <span className="font-extrabold text-sm md:text-2xl uppercase tracking-tight">{badge.title}</span>
                <span className="text-[7px] md:text-[11px] text-white/85 text-center leading-tight max-w-[70px] md:max-w-[130px] font-medium">{badge.subtitle}</span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default TechnicalStandardsAndMaterialPositioning;

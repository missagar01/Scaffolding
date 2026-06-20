import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ClipboardList, CheckCircle, Zap, ShieldCheck, Heart, Award, Headphones } from 'lucide-react';

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

// Motion variants for stagger entrance animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 15
    }
  }
};

const ShutteringMaterialAndSupportUse = () => {
  const isMobile = useMobile();
  const [scaleFactor, setScaleFactor] = useState(1);
  const [activePillar, setActivePillar] = useState(0);

  // Calculate dynamic scale factor to prevent clipping on small screen heights
  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;

      if (width < 768) {
        const availableHeight = height - 120;
        const targetHeight = 440; // compact mobile content height
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

  const materialPoints = [
    { text: "Complements scaffolding and ", highlight: "adjustable prop systems", suffix: " for a perfect construction setup" },
    { text: "Supports ", highlight: "slab, beam and concrete casting work", suffix: " with safety and precision" },
    { text: "Helps project teams create ", highlight: "temporary structural frameworks", suffix: " for every stage of construction" },
    { text: "Relevant for ", highlight: "RCC, industrial sheds and building projects", suffix: " commercial & infrastructure works" },
    { text: "Can be sold as part of a ", highlight: "complete construction support package", suffix: " one-stop solution for customers" }
  ];

  const pillars = [
    {
      title: "Strength",
      bgClass: "bg-[#8c1d21]",
      hoverBgClass: "hover:bg-red-800",
      activeBorder: "border-[#8c1d21]/30 ring-4 ring-[#8c1d21]/15",
      color: "border-red-200 bg-red-50/50 text-red-800",
      titleColor: "text-red-700",
      bulletColor: "bg-red-500",
      icon: Shield,
      points: ["Durable products", "High load bearing capacity", "Strong & long lasting", "Built for tough site conditions", "Safe & reliable support"]
    },
    {
      title: "Quality",
      bgClass: "bg-[#1d4ed8]",
      hoverBgClass: "hover:bg-blue-800",
      activeBorder: "border-[#1d4ed8]/30 ring-4 ring-[#1d4ed8]/15",
      color: "border-blue-200 bg-blue-50/50 text-blue-800",
      titleColor: "text-blue-700",
      bulletColor: "bg-blue-500",
      icon: Award,
      points: ["Tested & certified material", "High quality raw material", "Precision manufacturing", "Corrosion resistant finish", "Meets industry standards"]
    },
    {
      title: "Reliability",
      bgClass: "bg-[#ea580c]",
      hoverBgClass: "hover:bg-amber-800",
      activeBorder: "border-[#ea580c]/30 ring-4 ring-[#ea580c]/15",
      color: "border-amber-200 bg-amber-50/50 text-amber-800",
      titleColor: "text-amber-700",
      bulletColor: "bg-amber-500",
      icon: ShieldCheck,
      points: ["Dependable supply", "On-time delivery", "Consistent availability", "Strong inventory support", "Trusted by industry experts"]
    },
    {
      title: "Support",
      bgClass: "bg-[#15803d]",
      hoverBgClass: "hover:bg-emerald-800",
      activeBorder: "border-[#15803d]/30 ring-4 ring-[#15803d]/15",
      color: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
      titleColor: "text-emerald-700",
      bulletColor: "bg-emerald-500",
      icon: Headphones,
      points: ["Professional response", "Technical & sales support", "Fast & flexible solutions", "Quick order processing", "Customer satisfaction first"]
    }
  ];

  const benefits = [
    { num: 1, title: "Faster Execution", desc: "Speeds up concrete assembly & cycle times", icon: Zap, color: "text-amber-600 bg-amber-50 border-amber-200" },
    { num: 2, title: "Improved Safety", desc: "Engineered to minimize structural load failures", icon: ShieldCheck, color: "text-teal-600 bg-teal-50 border-teal-200" },
    { num: 3, title: "Cost Effective", desc: "Reusable steel profiles for long-term lifecycle value", icon: Award, color: "text-blue-600 bg-blue-50 border-blue-200" },
    { num: 4, title: "Single Source", desc: "Procure props, cups, jacks & challis in one setup", icon: ClipboardList, color: "text-purple-600 bg-purple-50 border-purple-200" },
    { num: 5, title: "Better Value", desc: "Build long-term industrial trust & site efficiency", icon: Heart, color: "text-rose-600 bg-rose-50 border-rose-200" }
  ];

  // Auto-advance core pillars step-by-step every 3 seconds (resets timer on manual hover/click)
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activePillar]);

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden select-none">

      {/* Main Container with height auto-adjustment */}
      <div
        style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'center' }}
        className="relative z-10 w-full max-w-6xl flex flex-col gap-2 md:gap-6 py-0.5 md:py-2 mt-[-3vh] md:mt-[-2vh] transition-transform duration-300 mx-auto"
      >

        {/* Header Block matching other pages */}
        <div className="flex flex-col mb-0.5 md:mb-1 shrink-0">
          <div className="relative inline-block w-fit mb-0.5 md:mb-1.5 pb-0 md:pb-0.5">
            <h2 className="text-base sm:text-xl md:text-2xl tracking-tight">
              <span className="text-[#8c1d21] font-bold">Shuttering Material</span>{" "}
              <span className="text-[#1e293b] font-medium">& Support Use</span>
            </h2>
            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] md:h-[2px] bg-[#8c1d21]" />
          </div>
          <p className="text-[#475569] text-[10px] md:text-xs sm:text-sm leading-tight md:leading-relaxed max-w-3xl">
            Sagar high-load shuttering material and support designs complement scaffolding platforms, ensuring temporary structural safety during heavy slab, beam, and concrete casting.
          </p>
        </div>

        {/* Infographic Area: 3 columns matching the sketch */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-6 items-stretch shrink-0">

          {/* Column 1 (Left): Material & Support points */}
          <div className="md:col-span-6 flex flex-col gap-0.5 md:gap-2">
            <div className="relative inline-block w-fit pb-0 md:pb-1 mb-0 md:mb-1">
              <span className="text-[10px] md:text-sm sm:text-sm font-bold text-slate-800 uppercase tracking-wide">Material & Support</span>
              <div className="absolute bottom-0 left-0 w-2/3 h-[1px] md:h-[1.5px] bg-[#8c1d21]" />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="bg-white border border-slate-200/80 rounded-xl md:rounded-2xl p-2.5 md:p-5 shadow-xs flex-1 flex flex-col justify-center gap-1.5 md:gap-4"
            >
              {materialPoints.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-1.5 md:gap-3.5 text-[10px] md:text-[13px] text-slate-600 leading-tight md:leading-normal"
                >
                  <div className="w-3.5 h-3.5 md:w-6 md:h-6 rounded-full bg-[#8c1d21]/10 text-[#8c1d21] border border-[#8c1d21]/30 flex items-center justify-center font-bold text-[8px] md:text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span>
                    {item.text}
                    <strong className="text-slate-800 font-bold">{item.highlight}</strong>
                    {item.suffix}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Column 2 (Center): Stacked Pillar Circles + Active Detail Box */}
          <div className="md:col-span-6 flex flex-col gap-0.5 md:gap-2">
            <div className="relative inline-block w-fit pb-0 md:pb-1 mb-0 md:mb-1">
              <span className="text-[10px] md:text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">Core Pillars Infographic</span>
              <div className="absolute bottom-0 left-0 w-2/3 h-[1px] md:h-[1.5px] bg-[#8c1d21]" />
            </div>

            <div className="flex flex-col sm:flex-row md:flex-row gap-2 md:gap-3.5 bg-white border border-slate-200/80 rounded-xl md:rounded-2xl p-2.5 md:p-4 shadow-xs flex-1 items-stretch justify-center relative min-h-[140px] md:min-h-[220px]">

              {/* Stacked circles panel */}
              <div className="flex flex-row sm:flex-col md:flex-col justify-around items-center gap-2 relative z-10 shrink-0 min-w-[70px]">
                {/* Connecting line */}
                <div className="absolute top-1/2 bottom-1/2 left-0 right-0 sm:top-4 sm:bottom-4 sm:left-1/2 sm:right-auto md:top-4 md:bottom-4 md:left-1/2 md:right-auto border-t-2 sm:border-t-0 sm:border-l-2 md:border-l-2 border-dashed border-slate-200 z-[-1] w-full sm:w-auto md:w-auto h-0 sm:h-auto md:h-auto" />

                {pillars.map((p, idx) => {
                  const PillarIcon = p.icon;
                  return (
                    <motion.button
                      key={idx}
                      onClick={() => setActivePillar(idx)}
                      onMouseEnter={() => setActivePillar(idx)}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex flex-col items-center justify-center text-white shadow-md border-2 border-white transition-all cursor-pointer select-none ${p.bgClass} ${p.hoverBgClass} ${activePillar === idx ? p.activeBorder : "opacity-85"}`}
                    >
                      <PillarIcon size={13} className="md:w-5 md:h-5" />
                    </motion.button>
                  );
                })}
              </div>

              {/* Dynamic Detail Cards - 2 columns on mobile, single on desktop */}
              {isMobile ? (
                <div className="flex-1 grid grid-cols-2 gap-1.5">
                  {(() => {
                    const pairStart = activePillar % 2 === 0 ? activePillar : activePillar - 1;
                    const pair = [pillars[pairStart], pillars[pairStart + 1]];
                    return pair.map((pillar, pIdx) => (
                      <div
                        key={pairStart + pIdx}
                        className={`border rounded-lg p-2 bg-slate-50/50 flex flex-col justify-start gap-1 transition-all duration-300 ${activePillar === pairStart + pIdx ? 'border-slate-300 ring-1 ring-slate-200' : 'border-slate-100'}`}
                      >
                        <span className={`font-bold text-[9px] uppercase tracking-wider flex items-center gap-1 ${pillar.titleColor}`}>
                          <ClipboardList className="w-2.5 h-2.5" /> {pillar.title}
                        </span>
                        <div className="space-y-0.5 text-[8.5px] text-slate-600 font-medium">
                          {pillar.points.map((pt, idx) => (
                            <div key={idx} className="flex items-center gap-1.5">
                              <span className={`w-1 h-1 rounded-full shrink-0 ${pillar.bulletColor}`} />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              ) : (
                <div className="flex-1 grid grid-cols-2 gap-3">
                  {(() => {
                    const pairStart = activePillar % 2 === 0 ? activePillar : activePillar - 1;
                    const pair = [pillars[pairStart], pillars[pairStart + 1]];
                    return pair.map((pillar, pIdx) => (
                      <div
                        key={pairStart + pIdx}
                        className={`border rounded-xl p-4 bg-slate-50/50 flex flex-col justify-start gap-2 transition-all duration-300 ${activePillar === pairStart + pIdx ? 'border-slate-300 ring-2 ring-slate-200/80 shadow-sm' : 'border-slate-100'}`}
                      >
                        <span className={`font-bold text-sm uppercase tracking-wider flex items-center gap-2 ${pillar.titleColor}`}>
                          <ClipboardList className="w-4 h-4" /> {pillar.title} Pillar
                        </span>
                        <div className="space-y-2 text-[13px] text-slate-600 font-medium">
                          {pillar.points.map((pt, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full shrink-0 ${pillar.bulletColor}`} />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Section: Customer Benefits (Horizontal icon timeline chain) */}
        <div className="flex flex-col gap-1 md:gap-2 mt-0.5 md:mt-1 shrink-0 relative">
          <div className="flex justify-center items-center gap-2">
            <div className="h-[1px] bg-slate-200 w-12 hidden md:block" />
            <span className="text-[10px] md:text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide text-center">Customer Benefits</span>
            <div className="h-[1px] bg-slate-200 w-12 hidden md:block" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.25 } }
            }}
            className="flex flex-row justify-between items-center w-full shrink-0 relative mt-0.5 md:mt-1 select-none"
          >
            {benefits.map((b, idx) => {
              const IconComponent = b.icon;
              return (
                <React.Fragment key={idx}>
                  {/* Circle with Icon & Text */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.8 },
                      show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } }
                    }}
                    className="flex flex-col items-center justify-center group shrink-0"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
                      className="w-12 h-12 md:w-24 md:h-24 rounded-full border-2 border-[#8c1d21] bg-white text-slate-800 flex flex-col items-center justify-center p-1 md:p-3 shadow-sm relative z-10 group-hover:bg-[#8c1d21] group-hover:text-white transition-all duration-300 gap-0.5 md:gap-1 cursor-default select-none"
                    >
                      <IconComponent className="group-hover:text-white text-[#8c1d21] transition-colors w-3 h-3 md:w-[18px] md:h-[18px]" />
                      <span className="text-slate-800 font-extrabold text-[5.5px] md:text-[8px] text-center block uppercase tracking-tight leading-tight group-hover:!text-white transition-colors max-w-[40px] md:max-w-[48px] whitespace-normal">{b.title}</span>
                    </motion.div>
                  </motion.div>

                  {/* Connecting Curved Arrow */}
                  {idx < 4 && (
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, scaleX: 0 },
                        show: { opacity: 1, scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } }
                      }}
                      style={{ originX: 0 }}
                      className="flex-1 h-6 md:h-14 mx-0.5 md:mx-1.5 pointer-events-none select-none relative z-0"
                    >
                      <svg className="w-full h-full overflow-visible" fill="none" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <defs>
                          <marker
                            id={`arrow-flex-${idx}`}
                            viewBox="0 0 10 10"
                            refX={isMobile ? 5 : 6}
                            refY="5"
                            markerWidth={isMobile ? 4 : 6}
                            markerHeight={isMobile ? 4 : 6}
                            orient="auto-start-reverse"
                          >
                            <path d="M 1 2 L 8 5 L 1 8 z" fill="#8c1d21" />
                          </marker>
                        </defs>
                        <path
                          d="M 0 20 Q 50 -6 100 20"
                          stroke="#8c1d21"
                          strokeWidth={isMobile ? 1.2 : 2.5}
                          className="opacity-80 transition-opacity duration-300"
                          markerEnd={`url(#arrow-flex-${idx})`}
                        />
                      </svg>
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </motion.div>
        </div>


      </div>
    </div>
  );
};

export default ShutteringMaterialAndSupportUse;

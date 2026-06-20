import React, { useState, useEffect } from 'react';
import { Package, FileText, ShieldCheck, TrendingUp, Layers, Star } from 'lucide-react';

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

const DealerAndContractor = () => {
  const isMobile = useMobile();
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile: header ~60px + page-title ~55px + footer ~80px = ~195px overhead
        const availableHeight = height - 195;
        // mobile hub canvas 300×240 + title block ~55px = ~295 target
        const targetHeight = 295;
        setScaleFactor(Math.max(0.6, Math.min(1, availableHeight / targetHeight)));
      } else {
        // Desktop: ~230px overhead; canvas 500×340 + title ~70px = ~410
        const availableHeight = height - 230;
        const targetHeight = 410;
        setScaleFactor(Math.max(0.65, Math.min(1.05, availableHeight / targetHeight)));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ── DESKTOP canvas: 500 × 340, hub-center (250, 170), hub 110px, cards 112px ──
  const desktopPoints = [
    {
      id: 'simple-range',   label: 'Simple Range',    icon: Package,
      color: '#0b5bb0', lightBg: '#eff6ff', border: '#bfdbfe',
      text: 'Simple range: scaffolding, cup lock, props, walkway and pipe',
      pos: { left: 4, top: 30 },
      lineStart: { x: 116, y: 72  }, lineEnd: { x: 196, y: 158 },
    },
    {
      id: 'clear-features', label: 'Clear Features',  icon: FileText,
      color: '#ce1e2e', lightBg: '#fff1f2', border: '#fecdd3',
      text: 'Clear features and technical specs for customer explanation',
      pos: { left: 194, top: 4  },
      lineStart: { x: 250, y: 88  }, lineEnd: { x: 250, y: 116 },
    },
    {
      id: 'reliable-supply',label: 'Reliable Supply', icon: ShieldCheck,
      color: '#b45309', lightBg: '#fffbeb', border: '#fde68a',
      text: 'Reliable supply positioning supports dealer confidence',
      pos: { left: 384, top: 120 },
      lineStart: { x: 384, y: 162 }, lineEnd: { x: 306, y: 170 },
    },
    {
      id: 'sales-material',  label: 'Sales Material',  icon: TrendingUp,
      color: '#07955c', lightBg: '#f0fdf4', border: '#bbf7d0',
      text: 'Sales material can be reused for customer visits and presentations',
      pos: { left: 256, top: 258 },
      lineStart: { x: 312, y: 258 }, lineEnd: { x: 278, y: 226 },
    },
    {
      id: 'product-category',label: 'Production',      icon: Layers,
      color: '#6d28d9', lightBg: '#f5f3ff', border: '#ddd6fe',
      text: 'Product category easy to position across construction sites',
      pos: { left: 4, top: 230 },
      lineStart: { x: 116, y: 272 }, lineEnd: { x: 196, y: 198 },
    },
  ];

  // ── MOBILE canvas: 300 × 240, hub-center (150, 120), hub 76px, cards 80px ──
  const mobilePoints = [
    {
      id: 'simple-range',   label: 'Simple Range',    icon: Package,
      color: '#0b5bb0', lightBg: '#eff6ff', border: '#bfdbfe',
      text: 'Scaffolding, cup lock, props, walkway and pipe',
      pos: { left: 2, top: 18 },
      lineStart: { x: 82, y: 50  }, lineEnd: { x: 115, y: 108 },
    },
    {
      id: 'clear-features', label: 'Clear Features',  icon: FileText,
      color: '#ce1e2e', lightBg: '#fff1f2', border: '#fecdd3',
      text: 'Technical specs for customer explanation',
      pos: { left: 110, top: 2  },
      lineStart: { x: 150, y: 62  }, lineEnd: { x: 150, y: 83 },
    },
    {
      id: 'reliable-supply',label: 'Reliable Supply', icon: ShieldCheck,
      color: '#b45309', lightBg: '#fffbeb', border: '#fde68a',
      text: 'Reliable supply supports dealer confidence',
      pos: { left: 218, top: 82 },
      lineStart: { x: 218, y: 116 }, lineEnd: { x: 187, y: 120 },
    },
    {
      id: 'sales-material',  label: 'Sales Material',  icon: TrendingUp,
      color: '#07955c', lightBg: '#f0fdf4', border: '#bbf7d0',
      text: 'Reused for customer visits and presentations',
      pos: { left: 148, top: 178 },
      lineStart: { x: 188, y: 178 }, lineEnd: { x: 168, y: 159 },
    },
    {
      id: 'product-category',label: 'Production',      icon: Layers,
      color: '#6d28d9', lightBg: '#f5f3ff', border: '#ddd6fe',
      text: 'Easy to position across construction sites',
      pos: { left: 2, top: 162 },
      lineStart: { x: 82, y: 192 }, lineEnd: { x: 115, y: 144 },
    },
  ];

  const HubCard = ({ node, pos, lineStart, lineEnd, cardW, cardH, iconSize, hubLabel }) => {
    const Icon = node.icon;
    return (
      <div
        className="absolute z-10 rounded-xl border-2 shadow-sm flex flex-col items-center text-center cursor-default transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
        style={{
          left: pos.left, top: pos.top,
          background: node.lightBg, borderColor: node.border,
          width: cardW, minHeight: cardH,
          padding: isMobile ? '5px 4px' : '8px 6px',
        }}
      >
        <div
          className="flex items-center justify-center rounded-full border-2 shrink-0"
          style={{
            background: '#fff', borderColor: node.color,
            width: isMobile ? 22 : 28, height: isMobile ? 22 : 28,
            marginBottom: isMobile ? 2 : 4,
          }}
        >
          <Icon style={{ color: node.color, width: iconSize, height: iconSize }} strokeWidth={2} />
        </div>
        <span
          className="font-bold leading-tight"
          style={{ color: node.color, fontSize: isMobile ? 7.5 : 9.5, marginBottom: isMobile ? 1 : 2 }}
        >
          {node.label}
        </span>
        <p style={{ fontSize: isMobile ? 6 : 7, lineHeight: 1.3 }} className="text-slate-600">
          {node.text}
        </p>
      </div>
    );
  };

  const points  = isMobile ? mobilePoints  : desktopPoints;
  const canvasW = isMobile ? 300 : 500;
  const canvasH = isMobile ? 240 : 340;
  const hubSize = isMobile ? 76  : 110;
  const cardW   = isMobile ? 80  : 112;
  const cardH   = isMobile ? 60  : 84;
  const iconSz  = isMobile ? 10  : 13;

  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden select-none">

      {/* ── SCALED WRAPPER ── */}
      <div
        style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'center' }}
        className="relative z-10 w-full max-w-5xl flex flex-col py-1 md:py-2 mt-[-3vh] md:mt-[-2vh] transition-transform duration-300"
      >

        {/* ── HEADER ── */}
        <div className="flex flex-col mb-2 md:mb-4 shrink-0">
          <div className="relative inline-block w-fit mb-1 pb-0.5">
            <h2 className="text-xl sm:text-2xl tracking-tight">
              <span className="text-[#8c1d21] font-bold">Dealer &amp; Contractor</span>{' '}
              <span className="text-[#1e293b] font-medium">Value Proposition</span>
            </h2>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8c1d21]" />
          </div>
          <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-3xl">
            Working &amp; Sales — Professional sales narrative presenting five key value propositions for dealers and contractors.
          </p>
        </div>

        {/* ── RADIAL HUB — shared for both mobile & desktop ── */}
        <div className="flex justify-center w-full shrink-0">
          <div className="relative" style={{ width: canvasW, height: canvasH }}>

            {/* SVG connector lines */}
            <svg
              className="absolute inset-0 z-0 pointer-events-none"
              width={canvasW} height={canvasH}
            >
              {points.map((node) => (
                <line
                  key={node.id + '-line'}
                  x1={node.lineStart.x} y1={node.lineStart.y}
                  x2={node.lineEnd.x}   y2={node.lineEnd.y}
                  stroke={node.color} strokeWidth={isMobile ? '1.2' : '1.5'}
                  strokeDasharray="4,3" opacity="0.4"
                />
              ))}
              {points.map((node) => (
                <circle
                  key={node.id + '-dot'}
                  cx={node.lineStart.x} cy={node.lineStart.y}
                  r={isMobile ? '2.5' : '3.5'} fill={node.color} opacity="0.6"
                />
              ))}
            </svg>

            {/* CENTER HUB */}
            <div
              className="absolute z-20 flex items-center justify-center rounded-full border-white shadow-xl"
              style={{
                left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                width: hubSize, height: hubSize,
                border: isMobile ? '2px solid white' : '3px solid white',
                background: 'linear-gradient(135deg, #8c1d21 0%, #ce1e2e 65%, #e45c5c 100%)',
              }}
            >
              <div
                className="absolute rounded-full border border-white/20 pointer-events-none"
                style={{ width: hubSize + 10, height: hubSize + 10 }}
              />
              <div className="flex flex-col items-center text-center" style={{ padding: isMobile ? '0 6px' : '0 10px' }}>
                <Star
                  className="text-white drop-shadow"
                  style={{ width: isMobile ? 14 : 18, height: isMobile ? 14 : 18, marginBottom: isMobile ? 1 : 2 }}
                  strokeWidth={1.5}
                />
                <span
                  className="font-extrabold text-white leading-tight uppercase tracking-wide"
                  style={{ fontSize: isMobile ? 6.5 : 9 }}
                >
                  Dealer &amp;
                </span>
                <span
                  className="font-extrabold text-white leading-tight uppercase tracking-wide"
                  style={{ fontSize: isMobile ? 6.5 : 9 }}
                >
                  Contractor
                </span>
                <div
                  className="bg-white/40 rounded-full"
                  style={{ width: isMobile ? 32 : 44, height: 1, margin: isMobile ? '2px 0' : '3px 0' }}
                />
                <span
                  className="text-white/90 font-semibold leading-tight"
                  style={{ fontSize: isMobile ? 5.5 : 7.5 }}
                >
                  Value Prop.
                </span>
              </div>
            </div>

            {/* 5 NODE CARDS */}
            {points.map((node) => (
              <HubCard
                key={node.id}
                node={node}
                pos={node.pos}
                lineStart={node.lineStart}
                lineEnd={node.lineEnd}
                cardW={cardW}
                cardH={cardH}
                iconSize={iconSz}
              />
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default DealerAndContractor;

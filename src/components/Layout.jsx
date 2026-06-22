import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from './Footer';
import aboutBg from '../Assets/Bg.jpeg';
import newBg from '../Assets/Newbg.jpeg';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Slide list sequence matching the project presentation layout
  const slides = ['/', '/about', '/support', '/portfolio', '/cuplock', '/props', '/basejack', '/ubasejack', '/pipe', '/walkway', '/shuttering', '/technical-standards', '/quality-testing', '/application-areas', '/dealer-contractor', '/procurement-checklist', '/why-choose', '/thankyou'];
  const currentIndex = slides.indexOf(location.pathname);

  // Direction of navigation: 1 = forward (left swipe / right key), -1 = backward (right swipe / left key)
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      navigate(slides[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      navigate(slides[currentIndex - 1]);
    }
  };

  const handleDotClick = (idx) => {
    if (idx > currentIndex) {
      setDirection(1);
    } else if (idx < currentIndex) {
      setDirection(-1);
    }
    navigate(slides[idx]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        if (currentIndex < slides.length - 1) {
          setDirection(1);
          navigate(slides[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setDirection(-1);
          navigate(slides[currentIndex - 1]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, navigate]);

  // Touch Swipe Gesture Support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeDistance = touchEndX - touchStartX;
      const minSwipeDistance = 50; // minimum swipe threshold in pixels

      if (swipeDistance < -minSwipeDistance) {
        // Swiped Left -> Next page
        if (currentIndex < slides.length - 1) {
          setDirection(1);
          navigate(slides[currentIndex + 1]);
        }
      } else if (swipeDistance > minSwipeDistance) {
        // Swiped Right -> Previous page
        if (currentIndex > 0) {
          setDirection(-1);
          navigate(slides[currentIndex - 1]);
        }
      }
    };

    const container = document.querySelector('.border-page-container');
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [currentIndex, navigate]);

  // Framer Motion Variants for page transitions
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    })
  };

  return (
    <div className="border-page-container">
      
      {/* ================= BACKGROUND DECORATIONS ================= */}
      <div className="border-bg-gradient" />
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#fdfcfa_80%)] z-10" />
        <img 
          src={location.pathname === '/' || location.pathname === '/thankyou' ? newBg : aboutBg} 
          alt="Global Background" 
          className="w-full h-full object-cover filter blur-[1.5px] opacity-40 scale-102"
        />
      </div>
      <div className="border-bg-line-1" />
      <div className="border-bg-line-2" />

      {/* ================= CONTENT INJECTION ================= */}
      <div className="border-content-wrapper overflow-hidden relative">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={location.pathname}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 32 },
              opacity: { duration: 0.25 }
            }}
            className="w-full h-full absolute inset-0 flex flex-col items-center justify-center"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= NAVIGATION CONTROLS ================= */}
      <div className="border-slide-navigation">
        <button 
          onClick={handlePrev} 
          disabled={currentIndex <= 0}
          className="border-nav-button"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={16} />
        </button>
        
        <div className="border-nav-dots">
          {slides.map((path, idx) => (
            <div 
              key={path}
              onClick={() => handleDotClick(idx)}
              className={idx === currentIndex ? "border-nav-dot-active" : "border-nav-dot"}
              title={`Go to Slide ${idx + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext} 
          disabled={currentIndex >= slides.length - 1 || currentIndex === -1}
          className="border-nav-button"
          aria-label="Next Slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default Layout;